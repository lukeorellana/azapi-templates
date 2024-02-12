```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      flushConnection = bool
      securityRules = [
        {
          id = "string"
          name = "string"
          properties = {
            access = "string"
            description = "string"
            destinationAddressPrefix = "string"
            destinationAddressPrefixes = [
              "string"
            ]
            destinationApplicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            destinationPortRange = "string"
            destinationPortRanges = [
              "string"
            ]
            direction = "string"
            priority = int
            protocol = "string"
            sourceAddressPrefix = "string"
            sourceAddressPrefixes = [
              "string"
            ]
            sourceApplicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            sourcePortRange = "string"
            sourcePortRanges = [
              "string"
            ]
          }
          type = "string"
        }
      ]
    }
  })
}

```

### networkSecurityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


