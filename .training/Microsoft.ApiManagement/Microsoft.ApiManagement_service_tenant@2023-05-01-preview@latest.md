```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/tenant@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      primaryKey = "string"
      principalId = "string"
      secondaryKey = "string"
    }
  })
}

```

### service/tenant

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Tenant access information update parameter properties. | AccessInformationCreateParameterPropertiesOrAccessIn... |


### AccessInformationCreateParameterPropertiesOrAccessIn...

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether direct access is enabled. | bool |
| primaryKey | Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |
| principalId | Principal (User) Identifier. | string |
| secondaryKey | Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |


