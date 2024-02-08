```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      authorizationUseStatus = "string"
    }
  })
}

```

### expressRouteCircuits/authorizations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteCircuits |
| properties | Properties of the express route circuit authorization. | AuthorizationPropertiesFormat |


### AuthorizationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authorizationKey | The authorization key. | string |
| authorizationUseStatus | The authorization use status. | 'Available''InUse' |


