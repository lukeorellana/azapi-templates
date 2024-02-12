```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Solutions/jitRequests@2021-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationResourceId = "string"
      jitAuthorizationPolicies = [
        {
          principalId = "string"
          roleDefinitionId = "string"
        }
      ]
      jitSchedulingPolicy = {
        duration = "string"
        startTime = "string"
        type = "string"
      }
    }
  })
}

```

### jitRequests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The JIT request properties. | JitRequestProperties |


### JitRequestProperties

| Name | Description | Value |
|-|-|-|
| applicationResourceId | The parent application id. | string (required) |
| jitAuthorizationPolicies | The JIT authorization policies. | JitAuthorizationPolicies[] (required) |
| jitSchedulingPolicy | The JIT request properties. | JitSchedulingPolicy(required) |


### JitAuthorizationPolicies

| Name | Description | Value |
|-|-|-|
| principalId | The the principal id that will be granted JIT access. | string (required) |
| roleDefinitionId | The role definition id that will be granted to the Principal. | string (required) |


### JitSchedulingPolicy

| Name | Description | Value |
|-|-|-|
| duration | The required duration of the JIT request. | string (required) |
| startTime | The start time of the request. | string (required) |
| type | The type of JIT schedule. | 'NotSpecified''Once''Recurring' (required) |


