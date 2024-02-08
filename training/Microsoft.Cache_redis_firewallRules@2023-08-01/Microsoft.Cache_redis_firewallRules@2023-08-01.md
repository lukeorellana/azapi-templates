```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/firewallRules@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIP = "string"
      startIP = "string"
    }
  })
}

```

### redis/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | redis cache firewall rule properties | RedisFirewallRuleProperties(required) |


### RedisFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIP | highest IP address included in the range | string (required) |
| startIP | lowest IP address included in the range | string (required) |


