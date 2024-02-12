```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeTables@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableBgpRoutePropagation = bool
      routes = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            hasBgpOverride = bool
            nextHopIpAddress = "string"
            nextHopType = "string"
          }
          type = "string"
        }
      ]
    }
  })
}

```

### routeTables

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the route table. | RouteTablePropertiesFormat |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


