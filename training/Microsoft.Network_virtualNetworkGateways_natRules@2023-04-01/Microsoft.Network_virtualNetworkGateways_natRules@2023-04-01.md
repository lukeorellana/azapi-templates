```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      externalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      internalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      ipConfigurationId = "string"
      mode = "string"
      type = "string"
    }
  })
}

```

### virtualNetworkGateways/natRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworkGateways |
| properties | Properties of the Virtual Network Gateway NAT rule. | VirtualNetworkGatewayNatRuleProperties |


### VirtualNetworkGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |


