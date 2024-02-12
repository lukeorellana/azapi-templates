```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/ipv6FirewallRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIPv6Address = "string"
      startIPv6Address = "string"
    }
  })
}

```

### servers/ipv6FirewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | IPv6ServerFirewallRuleProperties |


### IPv6ServerFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIPv6Address | The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpAddress. | string |
| startIPv6Address | The start IP address of the firewall rule. Must be IPv6 format. | string |


