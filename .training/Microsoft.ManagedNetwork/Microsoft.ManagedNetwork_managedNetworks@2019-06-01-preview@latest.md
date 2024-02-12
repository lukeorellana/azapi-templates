```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      scope = {
        managementGroups = [
          {
            id = "string"
          }
        ]
        subnets = [
          {
            id = "string"
          }
        ]
        subscriptions = [
          {
            id = "string"
          }
        ]
        virtualNetworks = [
          {
            id = "string"
          }
        ]
      }
    }
  })
}

```

### managedNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The MNC properties | ManagedNetworkProperties |


### ManagedNetworkProperties

| Name | Description | Value |
|-|-|-|
| scope | The collection of management groups, subscriptions, virtual networks, and subnets by the Managed Network. This is a read-only property that is reflective of all ScopeAssignments for this Managed Network | Scope |


### Scope

| Name | Description | Value |
|-|-|-|
| managementGroups | The collection of management groups covered by the Managed Network | ResourceId[] |
| subnets | The collection of  subnets covered by the Managed Network | ResourceId[] |
| subscriptions | The collection of subscriptions covered by the Managed Network | ResourceId[] |
| virtualNetworks | The collection of virtual nets covered by the Managed Network | ResourceId[] |


### ResourceId

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


