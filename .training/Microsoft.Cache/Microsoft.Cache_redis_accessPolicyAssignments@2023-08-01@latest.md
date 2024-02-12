```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/accessPolicyAssignments@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessPolicyName = "string"
      objectId = "string"
      objectIdAlias = "string"
    }
  })
}

```

### redis/accessPolicyAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Properties of an access policy assignment | RedisCacheAccessPolicyAssignmentProperties |


### RedisCacheAccessPolicyAssignmentProperties

| Name | Description | Value |
|-|-|-|
| accessPolicyName | The name of the access policy that is being assigned | string (required)Constraints:Pattern =^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])$ |
| objectId | Object Id to assign access policy to | string (required) |
| objectIdAlias | User friendly name for object id. Also represents username for token based authentication | string (required) |


