```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see networkManagers/securityAdminConfigurations/ruleCollections/rules objects
  body = jsonencode({
    kind = "string"
  })
}

```

### networkManagers/securityAdminConfigurations/ruleColl...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | CustomDefault(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:ruleCollections |


### AdminRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Custom' (required) |
| properties | Indicates the properties of the security admin rule | AdminPropertiesFormat |


### AdminPropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | Indicates the access allowed for this particular rule | 'Allow''AlwaysAllow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| destinations | The destination address prefixes. CIDR or destination IP ranges. | AddressPrefixItem[] |
| direction | Indicates if the traffic matched against the rule in inbound or outbound. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | 'Ah''Any''Esp''Icmp''Tcp''Udp' (required) |
| sourcePortRanges | The source port ranges. | string[] |
| sources | The CIDR or source IP ranges. | AddressPrefixItem[] |


### AddressPrefixItem

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address prefix. | string |
| addressPrefixType | Address prefix type. | 'IPPrefix''ServiceTag' |


### DefaultAdminRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Default' (required) |
| properties | Indicates the properties of the security admin rule | DefaultAdminPropertiesFormat |


### DefaultAdminPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flag | Default rule flag. | string |


