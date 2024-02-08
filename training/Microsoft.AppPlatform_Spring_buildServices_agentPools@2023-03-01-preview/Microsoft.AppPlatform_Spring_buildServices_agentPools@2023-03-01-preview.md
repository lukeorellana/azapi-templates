```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      poolSize = {
        name = "string"
      }
    }
  })
}

```

### Spring/buildServices/agentPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: buildServices |
| properties | build service agent pool properties | BuildServiceAgentPoolProperties |


### BuildServiceAgentPoolProperties

| Name | Description | Value |
|-|-|-|
| poolSize | build service agent pool size properties | BuildServiceAgentPoolSizeProperties |


### BuildServiceAgentPoolSizeProperties

| Name | Description | Value |
|-|-|-|
| name | The name of build service agent pool size | string |


