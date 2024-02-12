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


