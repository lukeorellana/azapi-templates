```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/data/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      dataType = "string"
      // For remaining properties, see DataVersionBaseProperties objects
    }
  })
}

```

### registries/data/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:data |
| properties | [Required] Additional attributes of the entity. | DataVersionBaseProperties(required) |


### DataVersionBaseProperties

| Name | Description | Value |
|-|-|-|
| dataUri | [Required] Uri of the data. Example:https://go.microsoft.com/fwlink/?linkid=2202330 | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| dataType | Set the object type | mltableuri_fileuri_folder(required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### MLTableData

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'mltable' (required) |
| referencedUris | Uris referenced in the MLTable definition (required for lineage) | string[] |


### UriFileDataVersion

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'uri_file' (required) |


### UriFolderDataVersion

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'uri_folder' (required) |


