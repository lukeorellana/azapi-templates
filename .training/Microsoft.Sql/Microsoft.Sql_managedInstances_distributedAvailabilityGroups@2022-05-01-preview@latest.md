```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      primaryAvailabilityGroupName = "string"
      replicationMode = "string"
      secondaryAvailabilityGroupName = "string"
      sourceEndpoint = "string"
      targetDatabase = "string"
    }
  })
}

```

### managedInstances/distributedAvailabilityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | DistributedAvailabilityGroupProperties |


### DistributedAvailabilityGroupProperties

| Name | Description | Value |
|-|-|-|
| primaryAvailabilityGroupName | The primary availability group name | string |
| replicationMode | The replication mode of a distributed availability group. Parameter will be ignored during link creation. | 'Async''Sync' |
| secondaryAvailabilityGroupName | The secondary availability group name | string |
| sourceEndpoint | The source endpoint | string |
| targetDatabase | The name of the target database | string |


