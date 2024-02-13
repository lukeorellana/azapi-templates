import fs from "fs";
import marked from "marked";
import path from "path";

// Represents a single row in a table
interface TableRow {
  name: string;
  description: string;
  value: string;
  required: boolean;
}

// Represents a table, including its header and rows
interface Table {
  header: string;
  rows: TableRow[];
}

// Represents the code snippet
interface CodeSnippet {
  language: string; // e.g., "terraform"
  code: string;
}

// Represents the entire document structure
export interface MarkdownDocument {
  codeSnippet: CodeSnippet;
  tables: Table[];
}

export function getContentsFromMarkdownFile(
  filePath: string,
): marked.TokensList {
  const markdownContent = fs.readFileSync(filePath, "utf8");
  const tokens = marked.lexer(markdownContent);
  return tokens;
}

export function convertMarkdownToDataStructure(
  tokens: marked.TokensList,
): MarkdownDocument {
  const document: MarkdownDocument = {
    codeSnippet: { language: "", code: "" },
    tables: [],
  };

  let currentTable: Table | null = null;

  tokens.forEach((token: marked.Token) => {
    if (token.type === "code") {
      document.codeSnippet = {
        language: token.lang || "unknown",
        code: token.text || "",
      };
    } else if (token.type === "heading" && token.depth === 3) {
      if (currentTable) {
        document.tables.push(currentTable);
        currentTable = null;
      }
      currentTable = { header: token.text || "", rows: [] };
    } else if (token.type === "table") {
      if (currentTable) {
        // TypeScript does not know the structure of `row` - using type assertion to 'any'
        currentTable.rows = token.rows.map((row: any[]) => {
          // Again, asserting each `cell` as 'any' to access its 'text' property
          const [nameCell, descriptionCell, valueCell] = row.map(
            (cell: any) => cell.text,
          );
          return {
            name: nameCell,
            description: descriptionCell,
            value: valueCell,
            required: valueCell.includes("(required)"),
          };
        });
        document.tables.push(currentTable);
        currentTable = null;
      }
    }
  });

  if (currentTable) {
    document.tables.push(currentTable);
  }

  return document;
}

export function generateInterfacesFromMarkdownDocument(
  doc: MarkdownDocument,
): string {
  let interfacesString = "";

  // Function to convert header names to PascalCase for interface names
  const toPascalCase = (str: string) =>
    str
      .split(/[\s_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  // Iterate through each table in the document to create interfaces
  doc.tables.forEach((table) => {
    const interfaceName = toPascalCase(table.header);
    interfacesString += `export interface ${interfaceName} {\n`;

    // Iterate through each row in the table to define properties
    table.rows.forEach((row) => {
      const propertyName = row.required ? row.name : `${row.name}?`;
      const propertyType = row.value.replace("(required)", "").trim();

      // Use `readonly` for all properties and include description as a comment
      interfacesString += `  /**\n   * ${row.description}\n   */\n`;
      interfacesString += `  readonly ${propertyName}: ${propertyType};\n`;
    });

    interfacesString += `}\n\n`;
  });

  return interfacesString;
}

export function removePropertiesFromFirstInterface(
  doc: MarkdownDocument,
): MarkdownDocument {
  // Check if there are any tables in the document
  if (doc.tables.length > 0) {
    // Remove 'name', 'location', and 'tags' rows from the first table
    doc.tables[0].rows = doc.tables[0].rows.filter(
      (row) => !["name", "location", "tags", "parent"].includes(row.name),
    );
  }

  return doc;
}

export function adjustRowRequiredBasedOnReference(
  doc: MarkdownDocument,
): MarkdownDocument {
  // First, collect all table headers for easy reference checking
  const headers = doc.tables.map((table) => table.header);

  // Iterate through each table
  doc.tables.forEach((table) => {
    // Iterate through each row in the current table
    table.rows.forEach((row) => {
      // Check if the row's value (type) references any table header
      if (headers.includes(row.value)) {
        // If so, set required to true
        row.required = true;
      }
    });
  });

  return doc;
}

export function fixTypescriptTypes(doc: MarkdownDocument): MarkdownDocument {
  // Iterate through each table in the document
  doc.tables.forEach((table) => {
    // Iterate through each row in the current table
    table.rows.forEach((row) => {
      // Convert 'int' to 'number'
      if (row.value.includes("int")) {
        row.value = row.value.replace(/int/g, "number");
      }

      // Format string unions correctly
      // This regex matches quoted strings and will be used to split and join them with ' | '
      const regex = /'[^']+'|"[^"]+"/g;
      const matches = row.value.match(regex);
      if (matches && matches.length > 1) {
        // Join all matched strings with ' | ' to create a proper TypeScript union type
        row.value = matches.join(" | ");
      }
    });
  });

  return doc;
}

export function selectFirstInterface(doc: MarkdownDocument): string {
  // Assuming generateInterfacesFromMarkdownDocument is defined elsewhere
  let interfaceString = generateInterfacesFromMarkdownDocument({
    ...doc,
    tables: doc.tables.slice(0, 1),
  });

  // Split the string into lines
  let lines = interfaceString.split('\n');

  // Remove the first line unconditionally
  lines = lines.slice(1);

  // Remove the last non-empty line
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim()) { // Find the last non-empty line
      lines.splice(i, 1); // Remove it
      break; // Exit the loop after removing the last non-empty line
    }
  }

  // Re-join the lines into a single string
  interfaceString = lines.join('\n');

  console.log("first", interfaceString);
  return interfaceString;
}



export function selectAllExceptFirstInterface(doc: MarkdownDocument): string {
  // Create a new MarkdownDocument object with all tables except the first
  const nonFirstTableDoc = {
    ...doc,
    tables: doc.tables.slice(1), // Corrected to slice from the second element
  };

  // Use generateInterfacesFromMarkdownDocument to convert the doc to a string
  let interfaceString = generateInterfacesFromMarkdownDocument(nonFirstTableDoc);
  console.log("all but first", interfaceString);
  return interfaceString;
}


// Make sure to import the promises API from the fs module

async function injectStringIntoFile(filePath: string, stringToInject: string, lineNumber: number) {
  const absoluteFilePath = path.resolve(filePath);

  try {
    // Use await to read the file asynchronously and wait for the operation to complete
    const data = await fs.promises.readFile(absoluteFilePath, 'utf8');

    // Split the file content into lines
    const lines = data.split('\n');

    // Determine where to inject the string
    if (lineNumber > lines.length) {
        // If the line number exceeds the number of lines, append at the end
        lines.push(stringToInject);
    } else {
        // Otherwise, inject at the specified line (adjust for zero-based indexing)
        lines.splice(lineNumber - 1, 0, stringToInject);
    }

    // Use await to write the file asynchronously and wait for the operation to complete
    await fs.promises.writeFile(absoluteFilePath, lines.join('\n'), 'utf8');
    console.log("String injected successfully.");
  } catch (err) {
    // Catch and log any error that occurs during the read or write operations
    console.error("Error processing the file:", err);
  }
}

async function findMarkdownFiles(dirPath: string): Promise<string[]> {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

  // Initialize an empty array to accumulate markdown file paths
  const markdownFiles: string[] = [];

  for (const entry of entries) {
    const resolvedPath = path.resolve(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Recursively find markdown files in subdirectories
      const nestedMarkdownFiles = await findMarkdownFiles(resolvedPath);
      markdownFiles.push(...nestedMarkdownFiles); // Spread and push all at once
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // If it's a markdown file, add its path to the array
      markdownFiles.push(resolvedPath);
    }
  }

  return markdownFiles; // Return the accumulated array
}

// Generate TypeScript interfaces from markdown content
async function addInterfacesToTypescriptFile(filePath: string) {
  const directory = path.dirname(filePath);
  const fileNameWithoutExt = path.basename(filePath, path.extname(filePath));
  const outputPath = path.join(directory, `${fileNameWithoutExt}.ts`);
  
  // Get Markdown content and convert to data structure
  const markdown = getContentsFromMarkdownFile(filePath);
  const dataStructure = convertMarkdownToDataStructure(markdown);

  // Rules to generate interfaces
  const removeGenericProps =
    removePropertiesFromFirstInterface(dataStructure);
  const adjustRowRequiredforInterfaces =
    adjustRowRequiredBasedOnReference(removeGenericProps);
  const fixTypescriptTypesForInterfaces = fixTypescriptTypes(
    adjustRowRequiredforInterfaces,
  );
  
  async function performInjections() {
    // Inject interfaces except for first one
    const nonFirstInterfaces = selectAllExceptFirstInterface(fixTypescriptTypesForInterfaces);
    await injectStringIntoFile(outputPath, nonFirstInterfaces, 12)

    // Inject first interface
    const firstInterface = selectFirstInterface(fixTypescriptTypesForInterfaces);
    await injectStringIntoFile(outputPath, firstInterface , 10)
  }
  performInjections().then(() => {
    console.log('All injections completed.');
  }).catch((error) => {
    console.error('An error occurred during injections:', error);
  });

  console.log(`Interfaces generated and saved to ${outputPath}`);
}

async function processAllMarkdownFilesInTraining() {
  const trainingDir = '.training';

  try {
    const markdownFiles = await findMarkdownFiles(trainingDir);

    // Process each markdown file found
    for (const filePath of markdownFiles) {
      console.log(`Processing file: ${filePath}`);
      await addInterfacesToTypescriptFile(filePath);
    }

    console.log('Completed processing all Markdown files.');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

processAllMarkdownFilesInTraining();