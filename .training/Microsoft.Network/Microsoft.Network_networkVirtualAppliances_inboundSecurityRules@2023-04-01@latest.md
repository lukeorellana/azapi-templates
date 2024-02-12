```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rules = [
        {
          destinationPortRange = int
          protocol = "string"
          sourceAddressPrefix = "string"
        }
      ]
    }
  })
}

```

### networkVirtualAppliances/inboundSecurityRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkVirtualAppliances |
| properties | The properties of the Inbound Security Rules. | InboundSecurityRuleProperties |


### InboundSecurityRuleProperties

| Name | Description | Value |
|-|-|-|
| rules | List of allowed rules. | InboundSecurityRules[] |


### InboundSecurityRules

| Name | Description | Value |
|-|-|-|
| destinationPortRange | NVA port ranges to be opened up. One needs to provide specific ports. | int |
| protocol | Protocol. This should be either TCP or UDP. | 'TCP''UDP' |
| sourceAddressPrefix | The CIDR or source IP range. Only /30, /31 and /32 Ip ranges are allowed. | string |


