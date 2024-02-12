```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/databases/containers/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |


