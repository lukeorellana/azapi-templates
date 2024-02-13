import {
  getContentsFromMarkdownFile,
  convertMarkdownToDataStructure,
  generateInterfacesFromMarkdownDocument,
  removePropertiesFromFirstInterface,
  adjustRowRequiredBasedOnReference,
  fixTypescriptTypes,
} from "../generate_interfaces";

let markdown = getContentsFromMarkdownFile(
  "src/generate-interfaces/tests/test_markdown.md",
);
describe("getContentsFromMarkdownFile", () => {
  it("should correctly retrieve tokens from a Markdown file", () => {
    // Assuming getContentsFromMarkdownFile is an async function
    // Validate the tokens are defined
    expect(markdown).toBeDefined();
  });
});

describe("convertMarkdownToDataStructure", () => {
  it("should correctly convert the markdown contents into a data structure", () => {
    const dataStructure = convertMarkdownToDataStructure(markdown);

    // Verify dataStructure is defined
    expect(dataStructure).toBeDefined();

    // Verify codeSnippet structure
    expect(dataStructure.codeSnippet).toBeDefined();
    expect(dataStructure.codeSnippet.language).toBe("terraform");
    expect(dataStructure.codeSnippet.code).toContain(
      'resource "azapi_resource"',
    );

    // Verify tables structure
    expect(dataStructure.tables).toBeDefined();
    expect(dataStructure.tables.length).toBeGreaterThan(0);

    dataStructure.tables.forEach((table) => {
      // Verify each table has a header
      expect(table.header).toBeDefined();
      expect(typeof table.header).toBe("string");

      // Verify each table has rows
      expect(table.rows).toBeDefined();
      expect(table.rows.length).toBeGreaterThan(0);

      table.rows.forEach((row) => {
        // Verify each row has name, description, value, and required properties
        expect(row.name).toBeDefined();
        expect(typeof row.name).toBe("string");
        expect(row.description).toBeDefined();
        expect(typeof row.description).toBe("string");
        expect(row.value).toBeDefined();
        expect(typeof row.value).toBe("string");
        expect(row.required).toBeDefined();
        expect(typeof row.required).toBe("boolean");

        // Additional check for "required" property based on "value" content
        if (row.value.includes("(required)")) {
          expect(row.required).toBeTruthy();
        }
      });
    });
  });
});

describe("generateInterfacesFromMarkdown", () => {
  it("should correctly generate interfaces from the Markdown data structure", () => {
    // Assuming the setup steps are defined and correctly generate `interfaces`
    const dataStructure = convertMarkdownToDataStructure(markdown);
    const removeGenericProps =
      removePropertiesFromFirstInterface(dataStructure);
    const adjustRowRequiredforInterfaces =
      adjustRowRequiredBasedOnReference(removeGenericProps);
    const fixTypescriptTypesForInterfaces = fixTypescriptTypes(
      adjustRowRequiredforInterfaces,
    );
    const interfaces = generateInterfacesFromMarkdownDocument(
      fixTypescriptTypesForInterfaces,
    );

    // Test for 3 interfaces
    const interfaceMatches = interfaces.match(/export interface/g);
    expect(interfaceMatches).toHaveLength(3);

    // Test that 'sku' and 'properties' in the first interface do not have a '?'
    // This assumes the first interface is always formatted and appears first in the output
    const firstInterfaceEndIndex =
      interfaces.indexOf("}", interfaces.indexOf("export interface")) + 1;
    const firstInterface = interfaces.substring(0, firstInterfaceEndIndex);

    expect(firstInterface.includes("readonly sku?:")).toBe(false);
    expect(firstInterface.includes("readonly properties?:")).toBe(false);
    // To be even more specific, you can ensure they exist without the '?'
    expect(firstInterface.includes("readonly sku:")).toBe(true);
    expect(firstInterface.includes("readonly properties:")).toBe(true);
  });
});
