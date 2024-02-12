```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      priority = int
      ruleCollections = [
        {
          name = "string"
          priority = int
          ruleCollectionType = "string"
          // For remaining properties, see FirewallPolicyRuleCollection objects
        }
      ]
    }
  })
}

```

### firewallPolicies/ruleCollectionGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:firewallPolicies |
| properties | The properties of the firewall policy rule collection group. | FirewallPolicyRuleCollectionGroupProperties |


### FirewallPolicyRuleCollectionGroupProperties

| Name | Description | Value |
|-|-|-|
| priority | Priority of the Firewall Policy Rule Collection Group resource. | int |
| ruleCollections | Group of Firewall Policy rule collections. | FirewallPolicyRuleCollection[] |


### FirewallPolicyRuleCollection

| Name | Description | Value |
|-|-|-|
| name | The name of the rule collection. | string |
| priority | Priority of the Firewall Policy Rule Collection resource. | int |
| ruleCollectionType | Set the object type | FirewallPolicyFilterRuleCollectionFirewallPolicyNatRuleCollection(required) |


### FirewallPolicyFilterRuleCollection

| Name | Description | Value |
|-|-|-|
| ruleCollectionType | The type of the rule collection. | 'FirewallPolicyFilterRuleCollection' (required) |
| action | The action type of a Filter rule collection. | FirewallPolicyFilterRuleCollectionAction |
| rules | List of rules included in a rule collection. | FirewallPolicyRule[] |


### FirewallPolicyFilterRuleCollectionAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'Allow''Deny' |


### FirewallPolicyRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| name | Name of the rule. | string |
| ruleType | Set the object type | ApplicationRuleNatRuleNetworkRule(required) |


### ApplicationRule

| Name | Description | Value |
|-|-|-|
| ruleType | Rule Type. | 'ApplicationRule' (required) |
| destinationAddresses | List of destination IP addresses or Service Tags. | string[] |
| fqdnTags | List of FQDN Tags for this rule. | string[] |
| httpHeadersToInsert | List of HTTP/S headers to insert. | FirewallPolicyHttpHeaderToInsert[] |
| protocols | Array of Application Protocols. | FirewallPolicyRuleApplicationProtocol[] |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| targetFqdns | List of FQDNs for this rule. | string[] |
| targetUrls | List of Urls for this rule condition. | string[] |
| terminateTLS | Terminate TLS connections for this rule. | bool |
| webCategories | List of destination azure web categories. | string[] |


### FirewallPolicyHttpHeaderToInsert

| Name | Description | Value |
|-|-|-|
| headerName | Contains the name of the header | string |
| headerValue | Contains the value of the header | string |


### FirewallPolicyRuleApplicationProtocol

| Name | Description | Value |
|-|-|-|
| port | Port number for the protocol, cannot be greater than 64000. | int |
| protocolType | Protocol type. | 'Http''Https' |


### NatRule

| Name | Description | Value |
|-|-|-|
| ruleType | Rule Type. | 'NatRule' (required) |
| destinationAddresses | List of destination IP addresses or Service Tags. | string[] |
| destinationPorts | List of destination ports. | string[] |
| ipProtocols | Array of FirewallPolicyRuleNetworkProtocols. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| translatedAddress | The translated address for this NAT rule. | string |
| translatedFqdn | The translated FQDN for this NAT rule. | string |
| translatedPort | The translated port for this NAT rule. | string |


### NetworkRule

| Name | Description | Value |
|-|-|-|
| ruleType | Rule Type. | 'NetworkRule' (required) |
| destinationAddresses | List of destination IP addresses or Service Tags. | string[] |
| destinationFqdns | List of destination FQDNs. | string[] |
| destinationIpGroups | List of destination IpGroups for this rule. | string[] |
| destinationPorts | List of destination ports. | string[] |
| ipProtocols | Array of FirewallPolicyRuleNetworkProtocols. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |


### FirewallPolicyNatRuleCollection

| Name | Description | Value |
|-|-|-|
| ruleCollectionType | The type of the rule collection. | 'FirewallPolicyNatRuleCollection' (required) |
| action | The action type of a Nat rule collection. | FirewallPolicyNatRuleCollectionAction |
| rules | List of rules included in a rule collection. | FirewallPolicyRule[] |


### FirewallPolicyNatRuleCollectionAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'DNAT' |


