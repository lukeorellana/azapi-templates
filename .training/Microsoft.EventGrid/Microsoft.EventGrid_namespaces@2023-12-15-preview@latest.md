```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      isZoneRedundant = bool
      minimumTlsVersionAllowed = "string"
      privateEndpointConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
      topicsConfiguration = {}
      topicSpacesConfiguration = {
        clientAuthentication = {
          alternativeAuthenticationNameSources = [
            "string"
          ]
        }
        maximumClientSessionsPerAuthenticationName = int
        maximumSessionExpiryInHours = int
        routeTopicResourceId = "string"
        routingEnrichments = {
          dynamic = [
            {
              key = "string"
              value = "string"
            }
          ]
          static = [
            {
              key = "string"
              valueType = "string"
              // For remaining properties, see StaticRoutingEnrichment objects
            }
          ]
        }
        routingIdentityInfo = {
          type = "string"
          userAssignedIdentity = "string"
        }
        state = "string"
      }
    }
    sku = {
      capacity = int
      name = "Standard"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | Represents available Sku pricing tiers. | NamespaceSku |
| identity | Identity information for the Namespace resource. | IdentityInfo |
| properties | Properties of the Namespace resource. | NamespaceProperties |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### NamespaceProperties

| Name | Description | Value |
|-|-|-|
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| isZoneRedundant | This is an optional property and it allows the user to specify if the namespace resource supports zone-redundancy capability or not. If thisproperty is not specified explicitly by the user, its default value depends on the following conditions:a. For Availability Zones enabled regions - The default property value would be true.b. For non-Availability Zones enabled regions - The default property value would be false.Once specified, this property cannot be updated. | bool |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported. | '1.0''1.1''1.2' |
| privateEndpointConnections |  | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |
| topicsConfiguration | Topics configuration information for the namespace resource | TopicsConfiguration |
| topicSpacesConfiguration | Topic spaces configuration information for the namespace resource | TopicSpacesConfiguration |


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |


### TopicSpacesConfiguration

| Name | Description | Value |
|-|-|-|
| clientAuthentication | Client authentication settings for topic spaces configuration. | ClientAuthenticationSettings |
| maximumClientSessionsPerAuthenticationName | The maximum number of sessions per authentication name. The property default value is 1.Min allowed value is 1 and max allowed value is 100. | int |
| maximumSessionExpiryInHours | The maximum session expiry in hours. The property default value is 1 hour.Min allowed value is 1 hour and max allowed value is 8 hours. | int |
| routeTopicResourceId | Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.This topic should reside in the same region where namespace is located. | string |
| routingEnrichments | Routing enrichments for topic spaces configuration | RoutingEnrichments |
| routingIdentityInfo | Routing identity info for topic spaces configuration. | RoutingIdentityInfo |
| state | Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled. | 'Disabled''Enabled' |


### ClientAuthenticationSettings

| Name | Description | Value |
|-|-|-|
| alternativeAuthenticationNameSources | Alternative authentication name sources related to client authentication settings for namespace resource. | String array containing any of:'ClientCertificateDns''ClientCertificateEmail''ClientCertificateIp''ClientCertificateSubject''ClientCertificateUri' |


### RoutingEnrichments

| Name | Description | Value |
|-|-|-|
| dynamic |  | DynamicRoutingEnrichment[] |
| static |  | StaticRoutingEnrichment[] |


### DynamicRoutingEnrichment

| Name | Description | Value |
|-|-|-|
| key | Dynamic routing enrichment key. | string |
| value | Dynamic routing enrichment value. | string |


### StaticRoutingEnrichment

| Name | Description | Value |
|-|-|-|
| key | Static routing enrichment key. | string |
| valueType | Set the object type | String(required) |


### StaticStringRoutingEnrichment

| Name | Description | Value |
|-|-|-|
| valueType | Static routing enrichment value type. For e.g. this property value can be 'String'. | 'String' (required) |
| value | String type routing enrichment value. | string |


### RoutingIdentityInfo

| Name | Description | Value |
|-|-|-|
| type |  | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentity |  | string |


### NamespaceSku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 andmax allowed capacity is 20. | int |
| name | The name of the SKU. | 'Standard' |


