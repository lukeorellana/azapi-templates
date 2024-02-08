```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerScopeAccesses = [
        "string"
      ]
      networkManagerScopes = {
        managementGroups = [
          "string"
        ]
        subscriptions = [
          "string"
        ]
      }
    }
  })
}

```

### networkManagers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The network manager properties | NetworkManagerProperties |


### NetworkManagerProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network manager. | string |
| networkManagerScopeAccesses | Scope Access. | String array containing any of:'Connectivity''SecurityAdmin' (required) |
| networkManagerScopes | Scope of Network Manager. | NetworkManagerPropertiesNetworkManagerScopes(required) |


### NetworkManagerPropertiesNetworkManagerScopes

| Name | Description | Value |
|-|-|-|
| managementGroups | List of management groups. | string[] |
| subscriptions | List of subscriptions. | string[] |


