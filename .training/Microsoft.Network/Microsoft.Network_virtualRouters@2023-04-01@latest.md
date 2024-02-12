```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualRouters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hostedGateway = {
        id = "string"
      }
      hostedSubnet = {
        id = "string"
      }
      virtualRouterAsn = int
      virtualRouterIps = [
        "string"
      ]
    }
  })
}

```

### virtualRouters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Virtual Router. | VirtualRouterPropertiesFormat |


### VirtualRouterPropertiesFormat

| Name | Description | Value |
|-|-|-|
| hostedGateway | The Gateway on which VirtualRouter is hosted. | SubResource |
| hostedSubnet | The Subnet on which VirtualRouter is hosted. | SubResource |
| virtualRouterAsn | VirtualRouter ASN. | int |
| virtualRouterIps | VirtualRouter IPs. | string[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


