```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      indexColumns = [
        {
          columnName = "string"
          dataType = "string"
        }
      ]
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
      stage = "string"
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
    }
  })
}

```

### workspaces/featurestoreEntities/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:featurestoreEntities |
| properties | [Required] Additional attributes of the entity. | FeaturestoreEntityVersionProperties(required) |


### FeaturestoreEntityVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| indexColumns | Specifies index columns | IndexColumn[] |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Specifies the asset stage | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### IndexColumn

| Name | Description | Value |
|-|-|-|
| columnName | Specifies the column name | string |
| dataType | Specifies the data type | 'Binary''Boolean''Datetime''Double''Float''Integer''Long''String' |


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


