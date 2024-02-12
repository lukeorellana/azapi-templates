```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowForwardedTraffic = bool
      allowGatewayTransit = bool
      allowVirtualNetworkAccess = bool
      databricksAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      databricksVirtualNetwork = {
        id = "string"
      }
      remoteAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      remoteVirtualNetwork = {
        id = "string"
      }
      useRemoteGateways = bool
    }
  })
}

```

### workspaces/virtualNetworkPeerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | List of properties for vNet Peering | VirtualNetworkPeeringPropertiesFormat(required) |


### VirtualNetworkPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowForwardedTraffic | Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network. | bool |
| allowGatewayTransit | If gateway links can be used in remote virtual networking to link to this virtual network. | bool |
| allowVirtualNetworkAccess | Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space. | bool |
| databricksAddressSpace | The reference to the databricks virtual network address space. | AddressSpace |
| databricksVirtualNetwork | The remote virtual network should be in the same region. See here to learn more (/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering). | VirtualNetworkPeeringPropertiesFormatDatabricksVirtu... |
| remoteAddressSpace | The reference to the remote virtual network address space. | AddressSpace |
| remoteVirtualNetwork | The remote virtual network should be in the same region. See here to learn more (/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering). | VirtualNetworkPeeringPropertiesFormatRemoteVirtualNe...(required) |
| useRemoteGateways | If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. | bool |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### VirtualNetworkPeeringPropertiesFormatDatabricksVirtu...

| Name | Description | Value |
|-|-|-|
| id | The Id of the databricks virtual network. | string |


### VirtualNetworkPeeringPropertiesFormatRemoteVirtualNe...

| Name | Description | Value |
|-|-|-|
| id | The Id of the remote virtual network. | string |


