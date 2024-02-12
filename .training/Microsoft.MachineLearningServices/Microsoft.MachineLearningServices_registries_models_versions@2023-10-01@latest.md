```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/models/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      flavors = {
        {customized property} = {
          data = {
          {customized property} = "string"
        }
      }
      isAnonymous = bool
      isArchived = bool
      jobName = "string"
      modelType = "string"
      modelUri = "string"
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

### registries/models/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:models |
| properties | [Required] Additional attributes of the entity. | ModelVersionProperties(required) |


### ModelVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| flavors | Mapping of model flavors to their properties. | ModelVersionFlavors |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| jobName | Name of the training job which produced this model | string |
| modelType | The storage format for this entity. Used for NCD. | string |
| modelUri | The URI path to the model contents. | string |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Stage in the model lifecycle assigned to this model | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ModelVersionFlavors

| Name | Description | Value |
|-|-|-|
| {customized property} |  | FlavorData |


### FlavorData

| Name | Description | Value |
|-|-|-|
| data | Model flavor-specific data. | FlavorData |
| {customized property} |  | string |


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


