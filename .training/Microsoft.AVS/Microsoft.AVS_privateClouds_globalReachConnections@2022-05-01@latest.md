```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      expressRouteId = "string"
      peerExpressRouteCircuit = "string"
    }
  })
}

```

### privateClouds/globalReachConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a global reach connection resource | GlobalReachConnectionProperties |


### GlobalReachConnectionProperties

| Name | Description | Value |
|-|-|-|
| authorizationKey | Authorization key from the peer express route used for the global reach connection | string |
| expressRouteId | The ID of the Private Cloud's ExpressRoute Circuit that is participating in the global reach connection | string |
| peerExpressRouteCircuit | Identifier of the ExpressRoute Circuit to peer with in the global reach connection | string |


