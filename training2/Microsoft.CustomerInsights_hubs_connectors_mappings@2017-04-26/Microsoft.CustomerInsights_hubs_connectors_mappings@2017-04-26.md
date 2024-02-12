```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectorType = "string"
      description = "string"
      displayName = "string"
      entityType = "string"
      entityTypeName = "string"
      mappingProperties = {
        availability = {
          frequency = "string"
          interval = int
        }
        completeOperation = {
          completionOperationType = "string"
          destinationFolder = "string"
        }
        errorManagement = {
          errorLimit = int
          errorManagementType = "string"
        }
        fileFilter = "string"
        folderPath = "string"
        format = {
          acceptLanguage = "string"
          arraySeparator = "string"
          columnDelimiter = "string"
          formatType = "TextFormat"
          quoteCharacter = "string"
          quoteEscapeCharacter = "string"
        }
        hasHeader = bool
        structure = [
          {
            columnName = "string"
            customFormatSpecifier = "string"
            isEncrypted = bool
            propertyName = "string"
          }
        ]
      }
    }
  })
}

```

### hubs/connectors/mappings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:connectors |
| properties | The connector mapping definition. | ConnectorMapping |


### ConnectorMapping

| Name | Description | Value |
|-|-|-|
| connectorType | Type of connector. | 'AzureBlob''CRM''ExchangeOnline''None''Outbound''Salesforce' |
| description | The description of the connector mapping. | string |
| displayName | Display name for the connector mapping. | string |
| entityType | Defines which entity type the file should map to. | 'Interaction''None''Profile''Relationship' (required) |
| entityTypeName | The mapping entity name. | string (required) |
| mappingProperties | The properties of the mapping. | ConnectorMappingProperties(required) |


### ConnectorMappingProperties

| Name | Description | Value |
|-|-|-|
| availability | The availability of mapping property. | ConnectorMappingAvailability(required) |
| completeOperation | The operation after import is done. | ConnectorMappingCompleteOperation(required) |
| errorManagement | The error management setting for the mapping. | ConnectorMappingErrorManagement(required) |
| fileFilter | The file filter for the mapping. | string |
| folderPath | The folder path for the mapping. | string |
| format | The format of mapping property. | ConnectorMappingFormat(required) |
| hasHeader | If the file contains a header or not. | bool |
| structure | Ingestion mapping information at property level. | ConnectorMappingStructure[] (required) |


### ConnectorMappingAvailability

| Name | Description | Value |
|-|-|-|
| frequency | The frequency to update. | 'Day''Hour''Minute''Month''Week' |
| interval | The interval of the given frequency to use. | int (required) |


### ConnectorMappingCompleteOperation

| Name | Description | Value |
|-|-|-|
| completionOperationType | The type of completion operation. | 'DeleteFile''DoNothing''MoveFile' |
| destinationFolder | The destination folder where files will be moved to once the import is done. | string |


### ConnectorMappingErrorManagement

| Name | Description | Value |
|-|-|-|
| errorLimit | The error limit allowed while importing data. | int |
| errorManagementType | The type of error management to use for the mapping. | 'RejectAndContinue''RejectUntilLimit''StopImport' (required) |


### ConnectorMappingFormat

| Name | Description | Value |
|-|-|-|
| acceptLanguage | The oData language. | string |
| arraySeparator | Character separating array elements. | string |
| columnDelimiter | The character that signifies a break between columns. | string |
| formatType | The type mapping format. | 'TextFormat' (required) |
| quoteCharacter | Quote character, used to indicate enquoted fields. | string |
| quoteEscapeCharacter | Escape character for quotes, can be the same as the quoteCharacter. | string |


### ConnectorMappingStructure

| Name | Description | Value |
|-|-|-|
| columnName | The column name of the import file. | string (required) |
| customFormatSpecifier | Custom format specifier for input parsing. | string |
| isEncrypted | Indicates if the column is encrypted. | bool |
| propertyName | The property name of the mapping entity. | string (required) |


