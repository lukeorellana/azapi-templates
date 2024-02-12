```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/bgpConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hubVirtualNetworkConnection = {
        id = "string"
      }
      peerAsn = int
      peerIp = "string"
    }
  })
}

```

### virtualHubs/bgpConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | The properties of the Bgp connections. | BgpConnectionProperties |


### BgpConnectionProperties

| Name | Description | Value |
|-|-|-|
| hubVirtualNetworkConnection | The reference to the HubVirtualNetworkConnection resource. | SubResource |
| peerAsn | Peer ASN. | int |
| peerIp | Peer IP. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


