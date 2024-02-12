```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/services@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      instanceCount = int
      instanceSize = "string"
    }
  })
}

```

### databaseAccounts/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties in ServiceResourceCreateUpdateParameters. | ServiceResourceCreateUpdatePropertiesOrServiceResour... |


### ServiceResourceCreateUpdatePropertiesOrServiceResour...

| Name | Description | Value |
|-|-|-|
| instanceCount | Instance count for the service. | int |
| instanceSize | Instance type for the service. | 'Cosmos.D16s''Cosmos.D4s''Cosmos.D8s' |


