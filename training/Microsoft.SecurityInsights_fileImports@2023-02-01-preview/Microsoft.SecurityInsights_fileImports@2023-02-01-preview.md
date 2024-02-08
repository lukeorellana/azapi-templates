```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/fileImports@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      importFile = {
        fileFormat = "string"
        fileName = "string"
        fileSize = int
      }
      ingestionMode = "string"
      source = "string"
    }
  })
}

```

### fileImports

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | File import properties | FileImportProperties |


### FileImportProperties

| Name | Description | Value |
|-|-|-|
| contentType | The content type of this file. | 'BasicIndicator''StixIndicator''Unspecified' (required) |
| importFile | Represents the imported file. | FileMetadata(required) |
| ingestionMode | Describes how to ingest the records in the file. | 'IngestAnyValidRecords''IngestOnlyIfAllAreValid''Unspecified' (required) |
| source | The source for the data in the file. | string (required) |


### FileMetadata

| Name | Description | Value |
|-|-|-|
| fileFormat | The format of the file | 'CSV''JSON''Unspecified' |
| fileName | The name of the file. | string |
| fileSize | The size of the file. | int |


