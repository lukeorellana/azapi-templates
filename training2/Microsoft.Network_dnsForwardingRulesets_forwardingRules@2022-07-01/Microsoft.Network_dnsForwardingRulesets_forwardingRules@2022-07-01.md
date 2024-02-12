```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      domainName = "string"
      forwardingRuleState = "string"
      metadata = {}
      targetDnsServers = [
        {
          ipAddress = "string"
          port = int
        }
      ]
    }
  })
}

```

### dnsForwardingRulesets/forwardingRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsForwardingRulesets |
| properties | Properties of the forwarding rule. | ForwardingRuleProperties(required) |


### ForwardingRuleProperties

| Name | Description | Value |
|-|-|-|
| domainName | The domain name for the forwarding rule. | string (required) |
| forwardingRuleState | The state of forwarding rule. | 'Disabled''Enabled' |
| metadata | Metadata attached to the forwarding rule. | object |
| targetDnsServers | DNS servers to forward the DNS query to. | TargetDnsServer[] (required) |


### TargetDnsServer

| Name | Description | Value |
|-|-|-|
| ipAddress | DNS server IP address. | string (required) |
| port | DNS server port. | int |


