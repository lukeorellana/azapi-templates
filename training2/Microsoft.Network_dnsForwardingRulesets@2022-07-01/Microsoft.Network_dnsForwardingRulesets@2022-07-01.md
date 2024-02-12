```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsResolverOutboundEndpoints = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

### dnsForwardingRulesets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DNS forwarding ruleset. | DnsForwardingRulesetProperties(required) |


### DnsForwardingRulesetProperties

| Name | Description | Value |
|-|-|-|
| dnsResolverOutboundEndpoints | The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers. | SubResource[] (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |


