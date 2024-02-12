```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowForwardedTraffic = bool
      allowGatewayTransit = bool
      allowVirtualNetworkAccess = bool
      doNotVerifyRemoteGateways = bool
      peeringState = "string"
      peeringSyncLevel = "string"
      remoteAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      remoteBgpCommunities = {
        virtualNetworkCommunity = "string"
      }
      remoteVirtualNetwork = {
        id = "string"
      }
      remoteVirtualNetworkAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      useRemoteGateways = bool
    }
  })
}

```

### virtualNetworks/virtualNetworkPeerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworks |
| properties | Properties of the virtual network peering. | VirtualNetworkPeeringPropertiesFormat |


### VirtualNetworkPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowForwardedTraffic | Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network. | bool |
| allowGatewayTransit | If gateway links can be used in remote virtual networking to link to this virtual network. | bool |
| allowVirtualNetworkAccess | Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space. | bool |
| doNotVerifyRemoteGateways | If we need to verify the provisioning state of the remote gateway. | bool |
| peeringState | The status of the virtual network peering. | 'Connected''Disconnected''Initiated' |
| peeringSyncLevel | The peering sync status of the virtual network peering. | 'FullyInSync''LocalAndRemoteNotInSync''LocalNotInSync''RemoteNotInSync' |
| remoteAddressSpace | The reference to the address space peered with the remote virtual network. | AddressSpace |
| remoteBgpCommunities | The reference to the remote virtual network's Bgp Communities. | VirtualNetworkBgpCommunities |
| remoteVirtualNetwork | The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (/azure/virtual-network/virtual-network-create-peering). | SubResource |
| remoteVirtualNetworkAddressSpace | The reference to the current address space of the remote virtual network. | AddressSpace |
| useRemoteGateways | If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. | bool |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### VirtualNetworkBgpCommunities

| Name | Description | Value |
|-|-|-|
| virtualNetworkCommunity | The BGP community associated with the virtual network. | string (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


