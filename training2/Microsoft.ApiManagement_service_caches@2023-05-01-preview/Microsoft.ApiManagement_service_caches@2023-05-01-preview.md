```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/caches@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionString = "string"
      description = "string"
      resourceId = "string"
      useFromLocation = "string"
    }
  })
}

```

### service/caches

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Cache properties details. | CacheContractProperties |


### CacheContractProperties

| Name | Description | Value |
|-|-|-|
| connectionString | Runtime connection string to cache | string (required) |
| description | Cache description | string |
| resourceId | Original uri of entity in external system cache points to | string |
| useFromLocation | Location identifier to use cache from (should be either 'default' or valid Azure region identifier) | string (required) |


