```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metadata = {}
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

### dnsForwardingRulesets/virtualNetworkLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsForwardingRulesets |
| properties | Properties of the virtual network link. | VirtualNetworkLinkProperties(required) |


### VirtualNetworkLinkProperties

| Name | Description | Value |
|-|-|-|
| metadata | Metadata attached to the virtual network link. | object |
| virtualNetwork | The reference to the virtual network. This cannot be changed after creation. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |


