```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/mongoClusters/firewallRules@2023-03-01-preview"
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

### mongoClusters/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mongoClusters |
| properties | The properties of a firewall rule. | FirewallRuleProperties(required) |


### FirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the mongo cluster firewall rule. Must be IPv4 format. | string (required) |
| startIpAddress | The start IP address of the mongo cluster firewall rule. Must be IPv4 format. | string (required) |


