```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/ipConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateIPAddress = "string"
      privateIPAllocationMethod = "string"
      publicIPAddress = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          ddosSettings = {
            ddosProtectionPlan = {
              id = "string"
            }
            protectionMode = "string"
          }
          deleteOption = "string"
          dnsSettings = {
            domainNameLabel = "string"
            domainNameLabelScope = "string"
            fqdn = "string"
            reverseFqdn = "string"
          }
          idleTimeoutInMinutes = int
          ipAddress = "string"
          ipTags = [
            {
              ipTagType = "string"
              tag = "string"
            }
          ]
          linkedPublicIPAddress = {
            public-ip-address-object
          }
          migrationPhase = "string"
          natGateway = {
            id = "string"
            location = "string"
            properties = {
              idleTimeoutInMinutes = int
              publicIpAddresses = [
                {
                  id = "string"
                }
              ]
              publicIpPrefixes = [
                {
                  id = "string"
                }
              ]
            }
            sku = {
              name = "Standard"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          publicIPAddressVersion = "string"
          publicIPAllocationMethod = "string"
          publicIPPrefix = {
            id = "string"
          }
          servicePublicIPAddress = {
            public-ip-address-object
          }
        }
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      subnet = {
        id = "string"
        name = "string"
        properties = {
          addressPrefix = "string"
          addressPrefixes = [
            "string"
          ]
          applicationGatewayIPConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          delegations = [
            {
              id = "string"
              name = "string"
              properties = {
                serviceName = "string"
              }
              type = "string"
            }
          ]
          ipAllocations = [
            {
              id = "string"
            }
          ]
          natGateway = {
            id = "string"
          }
          networkSecurityGroup = {
            id = "string"
            location = "string"
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
            tags = {}
          }
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
          routeTable = {
            id = "string"
            location = "string"
            properties = {
              disableBgpRoutePropagation = bool
              routes = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    hasBgpOverride = bool
                    nextHopIpAddress = "string"
                    nextHopType = "string"
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          serviceEndpointPolicies = [
            {
              id = "string"
              location = "string"
              properties = {
                contextualServiceEndpointPolicies = [
                  "string"
                ]
                serviceAlias = "string"
                serviceEndpointPolicyDefinitions = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      description = "string"
                      service = "string"
                      serviceResources = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
          ]
          serviceEndpoints = [
            {
              locations = [
                "string"
              ]
              service = "string"
            }
          ]
        }
        type = "string"
      }
    }
  })
}

```

### virtualHubs/ipConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | The properties of the Virtual Hub IPConfigurations. | HubIPConfigurationPropertiesFormat |


### HubIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the public IP resource. | PublicIPAddress |
| subnet | The reference to the subnet resource. | Subnet |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


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


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |

