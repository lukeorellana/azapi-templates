```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeTables/routes@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      hasBgpOverride = bool
      nextHopIpAddress = "string"
      nextHopType = "string"
    }
  })
}

```

### routeTables/routes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:routeTables |
| properties | Properties of the route. | RoutePropertiesFormat |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


