```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      virtualNetworkSubnetId = "string"
    }
  })
}

```

### namespaces/virtualnetworkrules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to create or update VirtualNetworkRules | VirtualNetworkRuleProperties |


### VirtualNetworkRuleProperties

| Name | Description | Value |
|-|-|-|
| virtualNetworkSubnetId | ARM ID of Virtual Network Subnet | string |


