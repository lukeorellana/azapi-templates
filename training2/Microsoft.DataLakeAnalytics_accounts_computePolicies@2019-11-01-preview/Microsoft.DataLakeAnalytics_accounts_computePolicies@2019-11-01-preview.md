```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/computePolicies@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      maxDegreeOfParallelismPerJob = int
      minPriorityPerJob = int
      objectId = "string"
      objectType = "string"
    }
  })
}

```

### accounts/computePolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-60Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The compute policy properties to use when creating a new compute policy. | CreateOrUpdateComputePolicyPropertiesOrComputePolicy...(required) |


### CreateOrUpdateComputePolicyPropertiesOrComputePolicy...

| Name | Description | Value |
|-|-|-|
| maxDegreeOfParallelismPerJob | The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed. | int |
| minPriorityPerJob | The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed. | int |
| objectId | The AAD object identifier for the entity to create a policy for. | string (required) |
| objectType | The type of AAD object the object identifier refers to. | 'Group''ServicePrincipal''User' (required) |


