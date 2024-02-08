```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/azureFirewalls@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalProperties = {}
      applicationRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                fqdnTags = [
                  "string"
                ]
                name = "string"
                protocols = [
                  {
                    port = int
                    protocolType = "string"
                  }
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
                targetFqdns = [
                  "string"
                ]
              }
            ]
          }
        }
      ]
      firewallPolicy = {
        id = "string"
      }
      hubIPAddresses = {
        privateIPAddress = "string"
        publicIPs = {
          addresses = [
            {
              address = "string"
            }
          ]
          count = int
        }
      }
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      managementIpConfiguration = {
        id = "string"
        name = "string"
        properties = {
          publicIPAddress = {
            id = "string"
          }
          subnet = {
            id = "string"
          }
        }
      }
      natRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                destinationAddresses = [
                  "string"
                ]
                destinationPorts = [
                  "string"
                ]
                name = "string"
                protocols = [
                  "string"
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
                translatedAddress = "string"
                translatedFqdn = "string"
                translatedPort = "string"
              }
            ]
          }
        }
      ]
      networkRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                destinationAddresses = [
                  "string"
                ]
                destinationFqdns = [
                  "string"
                ]
                destinationIpGroups = [
                  "string"
                ]
                destinationPorts = [
                  "string"
                ]
                name = "string"
                protocols = [
                  "string"
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
              }
            ]
          }
        }
      ]
      sku = {
        name = "string"
        tier = "string"
      }
      threatIntelMode = "string"
      virtualHub = {
        id = "string"
      }
    }
    zones = [
      "string"
    ]
  })
}

```

### azureFirewalls

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the azure firewall. | AzureFirewallPropertiesFormat |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### AzureFirewallPropertiesFormat

| Name | Description | Value |
|-|-|-|
| additionalProperties | The additional properties used to further config this azure firewall. | object |
| applicationRuleCollections | Collection of application rule collections used by Azure Firewall. | AzureFirewallApplicationRuleCollection[] |
| firewallPolicy | The firewallPolicy associated with this azure firewall. | SubResource |
| hubIPAddresses | IP addresses associated with AzureFirewall. | HubIPAddresses |
| ipConfigurations | IP configuration of the Azure Firewall resource. | AzureFirewallIPConfiguration[] |
| managementIpConfiguration | IP configuration of the Azure Firewall used for management traffic. | AzureFirewallIPConfiguration |
| natRuleCollections | Collection of NAT rule collections used by Azure Firewall. | AzureFirewallNatRuleCollection[] |
| networkRuleCollections | Collection of network rule collections used by Azure Firewall. | AzureFirewallNetworkRuleCollection[] |
| sku | The Azure Firewall Resource SKU. | AzureFirewallSku |
| threatIntelMode | The operation mode for Threat Intelligence. | 'Alert''Deny''Off' |
| virtualHub | The virtualHub to which the firewall belongs. | SubResource |


### AzureFirewallApplicationRuleCollection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall application rule collection. | AzureFirewallApplicationRuleCollectionPropertiesForm... |


### AzureFirewallApplicationRuleCollectionPropertiesForm...

| Name | Description | Value |
|-|-|-|
| action | The action type of a rule collection. | AzureFirewallRCAction |
| priority | Priority of the application rule collection resource. | int |
| rules | Collection of rules used by a application rule collection. | AzureFirewallApplicationRule[] |


### AzureFirewallRCAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'Allow''Deny' |


### AzureFirewallApplicationRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| fqdnTags | List of FQDN Tags for this rule. | string[] |
| name | Name of the application rule. | string |
| protocols | Array of ApplicationRuleProtocols. | AzureFirewallApplicationRuleProtocol[] |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| targetFqdns | List of FQDNs for this rule. | string[] |


### AzureFirewallApplicationRuleProtocol

| Name | Description | Value |
|-|-|-|
| port | Port number for the protocol, cannot be greater than 64000. This field is optional. | int |
| protocolType | Protocol type. | 'Http''Https''Mssql' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### HubIPAddresses

| Name | Description | Value |
|-|-|-|
| privateIPAddress | Private IP Address associated with azure firewall. | string |
| publicIPs | Public IP addresses associated with azure firewall. | HubPublicIPAddresses |


### HubPublicIPAddresses

| Name | Description | Value |
|-|-|-|
| addresses | The list of Public IP addresses associated with azure firewall or IP addresses to be retained. | AzureFirewallPublicIPAddress[] |
| count | The number of Public IP addresses associated with azure firewall. | int |


### AzureFirewallPublicIPAddress

| Name | Description | Value |
|-|-|-|
| address | Public IP Address value. | string |


### AzureFirewallIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall IP configuration. | AzureFirewallIPConfigurationPropertiesFormat |


### AzureFirewallIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicIPAddress | Reference to the PublicIP resource. This field is a mandatory input if subnet is not null. | SubResource |
| subnet | Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'. | SubResource |


### AzureFirewallNatRuleCollection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall NAT rule collection. | AzureFirewallNatRuleCollectionProperties |


### AzureFirewallNatRuleCollectionProperties

| Name | Description | Value |
|-|-|-|
| action | The action type of a NAT rule collection. | AzureFirewallNatRCAction |
| priority | Priority of the NAT rule collection resource. | int |
| rules | Collection of rules used by a NAT rule collection. | AzureFirewallNatRule[] |


### AzureFirewallNatRCAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'Dnat''Snat' |


### AzureFirewallNatRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| destinationAddresses | List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags. | string[] |
| destinationPorts | List of destination ports. | string[] |
| name | Name of the NAT rule. | string |
| protocols | Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| translatedAddress | The translated address for this NAT rule. | string |
| translatedFqdn | The translated FQDN for this NAT rule. | string |
| translatedPort | The translated port for this NAT rule. | string |


### AzureFirewallNetworkRuleCollection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall network rule collection. | AzureFirewallNetworkRuleCollectionPropertiesFormat |


### AzureFirewallNetworkRuleCollectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| action | The action type of a rule collection. | AzureFirewallRCAction |
| priority | Priority of the network rule collection resource. | int |
| rules | Collection of rules used by a network rule collection. | AzureFirewallNetworkRule[] |


### AzureFirewallNetworkRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| destinationAddresses | List of destination IP addresses. | string[] |
| destinationFqdns | List of destination FQDNs. | string[] |
| destinationIpGroups | List of destination IpGroups for this rule. | string[] |
| destinationPorts | List of destination ports. | string[] |
| name | Name of the network rule. | string |
| protocols | Array of AzureFirewallNetworkRuleProtocols. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |


### AzureFirewallSku

| Name | Description | Value |
|-|-|-|
| name | Name of an Azure Firewall SKU. | 'AZFW_Hub''AZFW_VNet' |
| tier | Tier of an Azure Firewall. | 'Basic''Premium''Standard' |


