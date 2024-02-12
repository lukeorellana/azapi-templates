```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateEndpoints@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      customDnsConfigs = [
        {
          fqdn = "string"
          ipAddresses = [
            "string"
          ]
        }
      ]
      customNetworkInterfaceName = "string"
      ipConfigurations = [
        {
          name = "string"
          properties = {
            groupId = "string"
            memberName = "string"
            privateIPAddress = "string"
          }
        }
      ]
      manualPrivateLinkServiceConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            privateLinkServiceId = "string"
            requestMessage = "string"
          }
        }
      ]
      privateLinkServiceConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            privateLinkServiceId = "string"
            requestMessage = "string"
          }
        }
      ]
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
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### privateEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the load balancer. | ExtendedLocation |
| properties | Properties of the private endpoint. | PrivateEndpointProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PrivateEndpointProperties

| Name | Description | Value |
|-|-|-|
| applicationSecurityGroups | Application security groups in which the private endpoint IP configuration is included. | ApplicationSecurityGroup[] |
| customDnsConfigs | An array of custom dns configurations. | CustomDnsConfigPropertiesFormat[] |
| customNetworkInterfaceName | The custom name of the network interface attached to the private endpoint. | string |
| ipConfigurations | A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints. | PrivateEndpointIPConfiguration[] |
| manualPrivateLinkServiceConnections | A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource. | PrivateLinkServiceConnection[] |
| privateLinkServiceConnections | A grouping of information about the connection to the remote resource. | PrivateLinkServiceConnection[] |
| subnet | The ID of the subnet from which the private IP will be allocated. | Subnet |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### CustomDnsConfigPropertiesFormat

| Name | Description | Value |
|-|-|-|
| fqdn | Fqdn that resolves to private endpoint ip address. | string |
| ipAddresses | A list of private ip addresses of the private endpoint. | string[] |


### PrivateEndpointIPConfiguration

| Name | Description | Value |
|-|-|-|
| name | The name of the resource that is unique within a resource group. | string |
| properties | Properties of private endpoint IP configurations. | PrivateEndpointIPConfigurationProperties |


### PrivateEndpointIPConfigurationProperties

| Name | Description | Value |
|-|-|-|
| groupId | The ID of a group obtained from the remote resource that this private endpoint should connect to. | string |
| memberName | The member name of a group obtained from the remote resource that this private endpoint should connect to. | string |
| privateIPAddress | A private ip address obtained from the private endpoint's subnet. | string |


### PrivateLinkServiceConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the private link service connection. | PrivateLinkServiceConnectionProperties |


### PrivateLinkServiceConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. | string[] |
| privateLinkServiceConnectionState | A collection of read-only information about the state of the connection to the remote resource. | PrivateLinkServiceConnectionState |
| privateLinkServiceId | The resource id of private link service. | string |
| requestMessage | A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | string |


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


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


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


