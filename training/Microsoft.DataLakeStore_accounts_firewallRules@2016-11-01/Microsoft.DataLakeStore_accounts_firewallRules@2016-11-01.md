```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

### accounts/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-50Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The firewall rule properties to use when creating a new firewall rule. | CreateOrUpdateFirewallRulePropertiesOrFirewallRulePr...(required) |


### CreateOrUpdateFirewallRulePropertiesOrFirewallRulePr...

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | string (required) |
| startIpAddress | The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | string (required) |


