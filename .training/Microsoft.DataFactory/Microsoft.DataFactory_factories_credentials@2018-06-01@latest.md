```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/credentials@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      type = "string"
      typeProperties = {
        resourceId = "string"
      }
    }
  })
}

```

### factories/credentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Managed Identity Credential properties. | ManagedIdentityCredential(required) |


### ManagedIdentityCredential

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the Credential. | any[] |
| description | Credential description. | string |
| type | Type of credential. | string (required) |
| typeProperties | Managed identity credential properties. | ManagedIdentityTypeProperties |


### ManagedIdentityTypeProperties

| Name | Description | Value |
|-|-|-|
| resourceId | The resource id of user assigned managed identity | string |


