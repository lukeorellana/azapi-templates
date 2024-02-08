```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/queueServices/queues@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metadata = {}
    }
  })
}

```

### storageAccounts/queueServices/queues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:queueServices |
| properties | Queue resource properties. | QueueProperties |


### QueueProperties

| Name | Description | Value |
|-|-|-|
| metadata | A name-value pair that represents queue metadata. | object |


