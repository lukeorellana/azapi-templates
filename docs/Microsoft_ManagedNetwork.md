## Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview

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
## Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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
    kind = "Connectivity"
  })
}

```

### managedNetworks/managedNetworkGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| kind | Responsibility role under which this Managed Network Group will be created | 'Connectivity' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedNetworks |
| properties | Gets or sets the properties of a network group | ManagedNetworkGroupProperties |


### ManagedNetworkGroupProperties

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
## Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hub = {
        id = "string"
      }
      mesh = [
        {
          id = "string"
        }
      ]
      spokes = [
        {
          id = "string"
        }
      ]
      type = "string"
    }
  })
}

```

### managedNetworks/managedNetworkPeeringPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedNetworks |
| properties | Gets or sets the properties of a Managed Network Policy | ManagedNetworkPeeringPolicyProperties |


### ManagedNetworkPeeringPolicyProperties

| Name | Description | Value |
|-|-|-|
| hub | Gets or sets the hub virtual network ID | ResourceId |
| mesh | Gets or sets the mesh group IDs | ResourceId[] |
| spokes | Gets or sets the spokes group IDs | ResourceId[] |
| type | Gets or sets the connectivity type of a network structure policy | 'HubAndSpokeTopology''MeshTopology' (required) |


### ResourceId

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
## Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignedManagedNetwork = "string"
    }
  })
}

```

### scopeAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| properties | The Scope Assignment properties | ScopeAssignmentProperties |


### ScopeAssignmentProperties

| Name | Description | Value |
|-|-|-|
| assignedManagedNetwork | The managed network ID with scope will be assigned to. | string |
