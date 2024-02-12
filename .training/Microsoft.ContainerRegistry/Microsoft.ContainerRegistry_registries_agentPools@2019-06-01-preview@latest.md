```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      count = int
      os = "string"
      tier = "string"
      virtualNetworkSubnetResourceId = "string"
    }
  })
}

```

### registries/agentPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties associated with the agent pool | AgentPoolProperties |


### AgentPoolProperties

| Name | Description | Value |
|-|-|-|
| count | The count of agent machine | int |
| os | The OS of agent machine | 'Linux''Windows' |
| tier | The Tier of agent machine | string |
| virtualNetworkSubnetResourceId | The Virtual Network Subnet Resource Id of the agent machine | string |


