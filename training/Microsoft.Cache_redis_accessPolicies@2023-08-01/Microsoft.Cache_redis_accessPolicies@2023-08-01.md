```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/accessPolicies@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      permissions = "string"
    }
  })
}

```

### redis/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Properties of an access policy. | RedisCacheAccessPolicyProperties |


### RedisCacheAccessPolicyProperties

| Name | Description | Value |
|-|-|-|
| permissions | Permissions for the access policy. Learn how to configure permissions athttps://aka.ms/redis/AADPreRequisites | string (required) |


