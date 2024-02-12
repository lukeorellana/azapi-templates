const fs = require('fs');
const path = require('path');
const marked = require('marked');

function getTextFromCell(cell) {
    return cell.text.trim();
}

function toTypeScriptType(value) {
    const valueType = value.toLowerCase().replace('(required)', '').trim();
    switch (valueType) {
        case 'string':
        case 'int':
        case 'boolean':
            return valueType;
        case 'dictionary of tag names and values. see tags in templates':
        case 'sku':
        case 'instancepoolproperties':
            return 'any';
        default:
            if (valueType.includes("'")) {
                return valueType.replace(/'/g, '"');
            }
            return 'any';
    }
}

function generateInterfaceFromMarkdownFile(filePath) {
    const directory = path.dirname(filePath);
    const fileNameWithoutExt = path.basename(filePath, path.extname(filePath));
    const outputPath = path.join(directory, `${fileNameWithoutExt}.ts`);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    const tokens = marked.lexer(markdownContent);
    let currentHeader = '';
    const interfaces = [];
    let isFirstTable = true; // Flag to track if the current table is the first one

    tokens.forEach(token => {
        if (token.type === 'heading' && token.depth === 3) {
            currentHeader = token.text.replace(/[^a-zA-Z0-9]/g, '');
        } else if (token.type === 'table') {
            const interfaceName = currentHeader;
            if (interfaceName === '') {
                console.error('Table found without preceding H3 header for interface name. Skipping table.');
                return;
            }

            const properties = token.rows
                .filter((row) => {
                    // Apply exclusion logic only for the first table
                    if (isFirstTable) {
                        const name = getTextFromCell(row[0]).toLowerCase();
                        return !["tags", "name", "location"].includes(name);
                    }
                    return true;
                })
                .map((row) => {
                    const [nameCell, descriptionCell, valueCell] = row;
                    const name = getTextFromCell(nameCell);
                    const description = getTextFromCell(descriptionCell);
                    const valueType = getTextFromCell(valueCell);
                    const tsType = toTypeScriptType(valueType);
                    const optional = valueType.includes('(required)') ? '' : '?';

                    return `  /**
   * ${description}
   */
  readonly ${name}${optional}: ${tsType};`;
                }).join('\n');

            const interfaceStr = `export interface ${interfaceName} {\n${properties}\n}`;
            interfaces.push(interfaceStr);
            currentHeader = '';
            isFirstTable = false; // Set to false after processing the first table
        }
    });

    // fs.writeFileSync(outputPath, interfaces.join('\n\n'), 'utf8');
    console.log(interfaces.join('\n\n'));
    console.log(`Interfaces generated and saved to ${outputPath}`);
}

generateInterfaceFromMarkdownFile('../.training/Microsoft.Sql/Microsoft.Sql_instancePools@2022-05-01-preview@latest.md');
