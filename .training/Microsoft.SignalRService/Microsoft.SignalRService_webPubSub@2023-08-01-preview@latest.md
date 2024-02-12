```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub@2023-08-01-preview"
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
      disableAadAuth = bool
      disableLocalAuth = bool
      liveTraceConfiguration = {
        categories = [
          {
            enabled = "string"
            name = "string"
          }
        ]
        enabled = "string"
      }
      networkACLs = {
        defaultAction = "string"
        ipRules = [
          {
            action = "string"
            value = "string"
          }
        ]
        privateEndpoints = [
          {
            allow = [
              "string"
            ]
            deny = [
              "string"
            ]
            name = "string"
          }
        ]
        publicNetwork = {
          allow = [
            "string"
          ]
          deny = [
            "string"
          ]
        }
      }
      publicNetworkAccess = "string"
      regionEndpointEnabled = "string"
      resourceLogConfiguration = {
        categories = [
          {
            enabled = "string"
            name = "string"
          }
        ]
      }
      resourceStopped = "string"
      tls = {
        clientCertEnabled = bool
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### webPubSub

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The billing information of the resource. | ResourceSku |
| kind | The kind of the service | 'SocketIO''WebPubSub' |
| identity | A class represent managed identities used for request and response | ManagedIdentity |
| properties | A class that describes the properties of the resource | WebPubSubProperties |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | Represents the identity type: systemAssigned, userAssigned, None | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentities | Get or set the user assigned identities | ManagedIdentityUserAssignedIdentities |


### ManagedIdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentityProperty |


### WebPubSubProperties

| Name | Description | Value |
|-|-|-|
| disableAadAuth | DisableLocalAuthEnable or disable aad authWhen set as true, connection with AuthType=aad won't work. | bool |
| disableLocalAuth | DisableLocalAuthEnable or disable local auth with AccessKeyWhen set as true, connection with AccessKey=xxx won't work. | bool |
| liveTraceConfiguration | Live trace configuration of a Microsoft.SignalRService resource. | LiveTraceConfiguration |
| networkACLs | Network ACLs for the resource | WebPubSubNetworkACLs |
| publicNetworkAccess | Enable or disable public network access. Default to "Enabled".When it's Enabled, network ACLs still apply.When it's Disabled, public network access is always disabled no matter what you set in network ACLs. | string |
| regionEndpointEnabled | Enable or disable the regional endpoint. Default to "Enabled".When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.This property is replica specific. Disable the regional endpoint without replica is not allowed. | string |
| resourceLogConfiguration | Resource log configuration of a Microsoft.SignalRService resource. | ResourceLogConfiguration |
| resourceStopped | Stop or start the resource.  Default to "false".When it's true, the data plane of the resource is shutdown.When it's false, the data plane of the resource is started. | string |
| tls | TLS settings for the resource | WebPubSubTlsSettings |


### LiveTraceConfiguration

| Name | Description | Value |
|-|-|-|
| categories | Gets or sets the list of category configurations. | LiveTraceCategory[] |
| enabled | Indicates whether or not enable live trace.When it's set to true, live trace client can connect to the service.Otherwise, live trace client can't connect to the service, so that you are unable to receive any log, no matter what you configure in "categories".Available values: true, false.Case insensitive. | string |


### LiveTraceCategory

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether or the live trace category is enabled.Available values: true, false.Case insensitive. | string |
| name | Gets or sets the live trace category's name.Available values: ConnectivityLogs, MessagingLogs.Case insensitive. | string |


### WebPubSubNetworkACLs

| Name | Description | Value |
|-|-|-|
| defaultAction | Azure Networking ACL Action. | 'Allow''Deny' |
| ipRules | IP rules for filtering public traffic | IPRule[]Constraints:Max length = 30 |
| privateEndpoints | ACLs for requests from private endpoints | PrivateEndpointACL[] |
| publicNetwork | Network ACL | NetworkACL |


### IPRule

| Name | Description | Value |
|-|-|-|
| action | Azure Networking ACL Action. | 'Allow''Deny' |
| value | An IP or CIDR or ServiceTag | string |


### PrivateEndpointACL

| Name | Description | Value |
|-|-|-|
| allow | Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI. | String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace' |
| deny | Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI. | String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace' |
| name | Name of the private endpoint connection | string (required) |


### NetworkACL

| Name | Description | Value |
|-|-|-|
| allow | Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI. | String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace' |
| deny | Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI. | String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace' |


### ResourceLogConfiguration

| Name | Description | Value |
|-|-|-|
| categories | Gets or sets the list of category configurations. | ResourceLogCategory[] |


### ResourceLogCategory

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether or the resource log category is enabled.Available values: true, false.Case insensitive. | string |
| name | Gets or sets the resource log category's name.Available values: ConnectivityLogs, MessagingLogs.Case insensitive. | string |


### WebPubSubTlsSettings

| Name | Description | Value |
|-|-|-|
| clientCertEnabled | Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier. | bool |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| capacity | Optional, integer. The unit count of the resource. 1 by default.If present, following values are allowed:Free: 1;Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100; | int |
| name | The name of the SKU. Required.Allowed values: Standard_S1, Free_F1, Premium_P1 | string (required) |
| tier | Optional tier of this particular SKU. 'Standard' or 'Free'.Basicis deprecated, useStandardinstead. | 'Basic''Free''Premium''Standard' |


