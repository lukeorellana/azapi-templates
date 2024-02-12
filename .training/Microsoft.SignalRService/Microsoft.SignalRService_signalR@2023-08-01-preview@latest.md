```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR@2023-08-01-preview"
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
      cors = {
        allowedOrigins = [
          "string"
        ]
      }
      disableAadAuth = bool
      disableLocalAuth = bool
      features = [
        {
          flag = "string"
          properties = {
            {customized property} = "string"
          }
          value = "string"
        }
      ]
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
      serverless = {
        connectionTimeoutInSeconds = int
      }
      tls = {
        clientCertEnabled = bool
      }
      upstream = {
        templates = [
          {
            auth = {
              managedIdentity = {
                resource = "string"
              }
              type = "string"
            }
            categoryPattern = "string"
            eventPattern = "string"
            hubPattern = "string"
            urlTemplate = "string"
          }
        ]
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

### signalR

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Alphanumerics and hyphens.Start with letter. End with letter or number.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The billing information of the resource. | ResourceSku |
| kind | The kind of the service | 'RawWebSockets''SignalR' |
| identity | A class represent managed identities used for request and response | ManagedIdentity |
| properties | A class that describes the properties of the resource | SignalRProperties |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | Represents the identity type: systemAssigned, userAssigned, None | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentities | Get or set the user assigned identities | ManagedIdentityUserAssignedIdentities |


### ManagedIdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentityProperty |


### SignalRProperties

| Name | Description | Value |
|-|-|-|
| cors | Cross-Origin Resource Sharing (CORS) settings. | SignalRCorsSettings |
| disableAadAuth | DisableLocalAuthEnable or disable aad authWhen set as true, connection with AuthType=aad won't work. | bool |
| disableLocalAuth | DisableLocalAuthEnable or disable local auth with AccessKeyWhen set as true, connection with AccessKey=xxx won't work. | bool |
| features | List of the featureFlags.FeatureFlags that are not included in the parameters for the update operation will not be modified.And the response will only include featureFlags that are explicitly set.When a featureFlag is not explicitly set, its globally default value will be usedBut keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags. | SignalRFeature[] |
| liveTraceConfiguration | Live trace configuration of a Microsoft.SignalRService resource. | LiveTraceConfiguration |
| networkACLs | Network ACLs for the resource | SignalRNetworkACLs |
| publicNetworkAccess | Enable or disable public network access. Default to "Enabled".When it's Enabled, network ACLs still apply.When it's Disabled, public network access is always disabled no matter what you set in network ACLs. | string |
| regionEndpointEnabled | Enable or disable the regional endpoint. Default to "Enabled".When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.This property is replica specific. Disable the regional endpoint without replica is not allowed. | string |
| resourceLogConfiguration | Resource log configuration of a Microsoft.SignalRService resource. | ResourceLogConfiguration |
| resourceStopped | Stop or start the resource.  Default to "False".When it's true, the data plane of the resource is shutdown.When it's false, the data plane of the resource is started. | string |
| serverless | Serverless settings. | ServerlessSettings |
| tls | TLS settings for the resource | SignalRTlsSettings |
| upstream | The settings for the Upstream when the service is in server-less mode. | ServerlessUpstreamSettings |


### SignalRCorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origin calls (for example:http://example.com:12345). Use "*" to allow all. If omitted, allow all by default. | string[] |


### SignalRFeature

| Name | Description | Value |
|-|-|-|
| flag | FeatureFlags is the supported features of Azure SignalR service.- ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.- EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.- EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.- EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature. | 'EnableConnectivityLogs''EnableLiveTrace''EnableMessagingLogs''ServiceMode' (required) |
| properties | Optional properties related to this feature. | SignalRFeatureProperties |
| value | Value of the feature flag. See Azure SignalR service documenthttps://docs.microsoft.com/azure/azure-signalr/for allowed values. | string (required)Constraints:Min length = 1Max length = 128 |


### SignalRFeatureProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


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


### SignalRNetworkACLs

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


### ServerlessSettings

| Name | Description | Value |
|-|-|-|
| connectionTimeoutInSeconds | Gets or sets Client Connection Timeout. Optional to be set.Value in seconds.Default value is 30 seconds.Customer should set the timeout to a shorter period if messages are expected to be sent in shorter intervals,and want the client to disconnect more quickly after the last message is sent.You can set the timeout to a longer period if messages are expected to be sent in longer intervals,and they want to keep the same client connection alive during this session.The service considers the client disconnected if it hasn't received a message (including keep-alive) in this interval. | intConstraints:Min value = 1Max value = 120 |


### SignalRTlsSettings

| Name | Description | Value |
|-|-|-|
| clientCertEnabled | Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier. | bool |


### ServerlessUpstreamSettings

| Name | Description | Value |
|-|-|-|
| templates | Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects. | UpstreamTemplate[] |


### UpstreamTemplate

| Name | Description | Value |
|-|-|-|
| auth | Upstream auth settings. If not set, no auth is used for upstream messages. | UpstreamAuthSettings |
| categoryPattern | Gets or sets the matching pattern for category names. If not set, it matches any category.There are 3 kind of patterns supported:1. "*", it to matches any category name.2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages".3. The single category name, for example, "connections", it matches the category "connections". | string |
| eventPattern | Gets or sets the matching pattern for event names. If not set, it matches any event.There are 3 kind of patterns supported:1. "*", it to matches any event name.2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect".3. The single event name, for example, "connect", it matches "connect". | string |
| hubPattern | Gets or sets the matching pattern for hub names. If not set, it matches any hub.There are 3 kind of patterns supported:1. "*", it to matches any hub name.2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2".3. The single hub name, for example, "hub1", it matches "hub1". | string |
| urlTemplate | Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.For example, if the urlTemplate ishttp://example.com/{hub}/api/{event}, with a client request from hubchatconnects, it will first POST to this URL:http://example.com/chat/api/connect. | string (required) |


### UpstreamAuthSettings

| Name | Description | Value |
|-|-|-|
| managedIdentity | Managed identity settings for upstream. | ManagedIdentitySettings |
| type | Upstream auth type enum. | 'ManagedIdentity''None' |


### ManagedIdentitySettings

| Name | Description | Value |
|-|-|-|
| resource | The Resource indicating the App ID URI of the target resource.It also appears in the aud (audience) claim of the issued token. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| capacity | Optional, integer. The unit count of the resource. 1 by default.If present, following values are allowed:Free: 1;Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100; | int |
| name | The name of the SKU. Required.Allowed values: Standard_S1, Free_F1, Premium_P1 | string (required) |
| tier | Optional tier of this particular SKU. 'Standard' or 'Free'.Basicis deprecated, useStandardinstead. | 'Basic''Free''Premium''Standard' |


