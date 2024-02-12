```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see networkManagers/securityUserConfigurations/ruleCollections/rules objects
  body = jsonencode({
    kind = "string"
  })
}

```

### networkManagers/securityUserConfigurations/ruleColle...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | CustomDefault(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:ruleCollections |


### UserRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Custom' (required) |
| properties | Indicates the properties of the security user rule | UserRulePropertiesFormat |


### UserRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| destinations | The destination address prefixes. CIDR or destination IP ranges. | AddressPrefixItem[] |
| direction | Indicates if the traffic matched against the rule in inbound or outbound. | 'Inbound''Outbound' (required) |
| protocol | Network protocol this rule applies to. | 'Ah''Any''Esp''Icmp''Tcp''Udp' (required) |
| sourcePortRanges | The source port ranges. | string[] |
| sources | The CIDR or source IP ranges. | AddressPrefixItem[] |


### AddressPrefixItem

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address prefix. | string |
| addressPrefixType | Address prefix type. | 'IPPrefix''ServiceTag' |


### DefaultUserRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Default' (required) |
| properties | Indicates the properties of the security default user rule | DefaultUserRulePropertiesFormat |


### DefaultUserRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| flag | Default rule flag. | string |


