var fs = require('fs');
var path = require('path');
var marked = require('marked');
function getTextFromCell(cell) {
    return cell.text.trim();
}
function toTypeScriptType(value) {
    var valueType = value.toLowerCase().replace('(required)', '').trim();
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
    var directory = path.dirname(filePath);
    var fileNameWithoutExt = path.basename(filePath, path.extname(filePath));
    var outputPath = path.join(directory, "".concat(fileNameWithoutExt, ".ts"));
    var markdownContent = fs.readFileSync(filePath, 'utf8');
    var tokens = marked.lexer(markdownContent);
    var currentHeader = '';
    var interfaces = [];
    var isFirstTable = true; // Flag to track if the current table is the first one
    tokens.forEach(function (token) {
        if (token.type === 'heading' && token.depth === 3) {
            currentHeader = token.text.replace(/[^a-zA-Z0-9]/g, '');
        }
        else if (token.type === 'table') {
            var interfaceName = currentHeader;
            if (interfaceName === '') {
                console.error('Table found without preceding H3 header for interface name. Skipping table.');
                return;
            }
            var properties = token.rows
                .filter(function (row) {
                // Apply exclusion logic only for the first table
                if (isFirstTable) {
                    var name_1 = getTextFromCell(row[0]).toLowerCase();
                    return !["tags", "name", "location"].includes(name_1);
                }
                return true;
            })
                .map(function (row) {
                var nameCell = row[0], descriptionCell = row[1], valueCell = row[2];
                var name = getTextFromCell(nameCell);
                var description = getTextFromCell(descriptionCell);
                var valueType = getTextFromCell(valueCell);
                var tsType = toTypeScriptType(valueType);
                var optional = valueType.includes('(required)') ? '' : '?';
                return "  /**\n   * ".concat(description, "\n   */\n  readonly ").concat(name).concat(optional, ": ").concat(tsType, ";");
            }).join('\n');
            var interfaceStr = "export interface ".concat(interfaceName, " {\n").concat(properties, "\n}");
            interfaces.push(interfaceStr);
            currentHeader = '';
            isFirstTable = false; // Set to false after processing the first table
        }
    });
    // fs.writeFileSync(outputPath, interfaces.join('\n\n'), 'utf8');
    console.log(interfaces.join('\n\n'));
    console.log("Interfaces generated and saved to ".concat(outputPath));
}
generateInterfaceFromMarkdownFile('../.training/Microsoft.Sql/Microsoft.Sql_instancePools@2022-05-01-preview@latest.md');
