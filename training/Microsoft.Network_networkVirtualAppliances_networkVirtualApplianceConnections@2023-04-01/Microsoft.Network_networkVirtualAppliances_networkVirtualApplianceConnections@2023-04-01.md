```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/networkVirtualApplianceConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      asn = int
      bgpPeerAddress = [
        "string"
      ]
      enableInternetSecurity = bool
      name = "string"
      routingConfiguration = {
        associatedRouteTable = {
          resourceUri = "string"
        }
        inboundRouteMap = {
          resourceUri = "string"
        }
        outboundRouteMap = {
          resourceUri = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              resourceUri = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
      }
      tunnelIdentifier = int
    }
  })
}

```

### networkVirtualAppliances/networkVirtualApplianceConn...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkVirtualAppliances |
| properties | Properties of the express route connection. | NetworkVirtualApplianceConnectionProperties |


### NetworkVirtualApplianceConnectionProperties

| Name | Description | Value |
|-|-|-|
| asn | Network Virtual Appliance ASN. | int |
| bgpPeerAddress | List of bgpPeerAddresses for the NVA instances | string[] |
| enableInternetSecurity | Enable internet security. | bool |
| name | The name of the resource. | string |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfigurationNfv |
| tunnelIdentifier | Unique identifier for the connection. | int |


### RoutingConfigurationNfv

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | RoutingConfigurationNfvSubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | RoutingConfigurationNfvSubResource |
| outboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for outbound advertised routes. | RoutingConfigurationNfvSubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTableNfv |


### RoutingConfigurationNfvSubResource

| Name | Description | Value |
|-|-|-|
| resourceUri | Resource ID. | string |


### PropagatedRouteTableNfv

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | RoutingConfigurationNfvSubResource[] |
| labels | The list of labels. | string[] |


