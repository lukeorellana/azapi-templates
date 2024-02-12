```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/linkedServers@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedRedisCacheId = "string"
      linkedRedisCacheLocation = "string"
      serverRole = "string"
    }
  })
}

```

### redis/linkedServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Properties required to create a linked server. | RedisLinkedServerCreatePropertiesOrRedisLinkedServer...(required) |


### RedisLinkedServerCreatePropertiesOrRedisLinkedServer...

| Name | Description | Value |
|-|-|-|
| linkedRedisCacheId | Fully qualified resourceId of the linked redis cache. | string (required) |
| linkedRedisCacheLocation | Location of the linked redis cache. | string (required) |
| serverRole | Role of the linked server. | 'Primary''Secondary' (required) |


