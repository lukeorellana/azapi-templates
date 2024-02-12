```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/firewallRules@2021-06-01"
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

### workspaces/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | IP firewall rule properties | IpFirewallRuleProperties |


### IpFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress | string |
| startIpAddress | The start IP address of the firewall rule. Must be IPv4 format | string |


