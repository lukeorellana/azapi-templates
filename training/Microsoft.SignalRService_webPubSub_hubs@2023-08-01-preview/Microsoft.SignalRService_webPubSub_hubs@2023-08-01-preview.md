```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/hubs@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      anonymousConnectPolicy = "string"
      eventHandlers = [
        {
          auth = {
            managedIdentity = {
              resource = "string"
            }
            type = "string"
          }
          systemEvents = [
            "string"
          ]
          urlTemplate = "string"
          userEventPattern = "string"
        }
      ]
      eventListeners = [
        {
          endpoint = {
            type = "string"
            // For remaining properties, see EventListenerEndpoint objects
          }
          filter = {
            type = "string"
            // For remaining properties, see EventListenerFilter objects
          }
        }
      ]
    }
  })
}

```

### webPubSub/hubs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:webPubSub |
| properties | Properties of a hub. | WebPubSubHubProperties(required) |


### WebPubSubHubProperties

| Name | Description | Value |
|-|-|-|
| anonymousConnectPolicy | The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny". | string |
| eventHandlers | Event handler of a hub. | EventHandler[] |
| eventListeners | Event listener settings for forwarding your client events to listeners.Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.Maximum count of event listeners among all hubs is 10. | EventListener[] |


### EventHandler

| Name | Description | Value |
|-|-|-|
| auth | Upstream auth settings. If not set, no auth is used for upstream messages. | UpstreamAuthSettings |
| systemEvents | Gets or sets the list of system events. | string[] |
| urlTemplate | Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.For example, UrlTemplate can behttp://example.com/api/{hub}/{event}. The host part can't contains parameters. | string (required) |
| userEventPattern | Gets or sets the matching pattern for event names.There are 3 kinds of patterns supported:1. "*", it matches any event name2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"3. A single event name, for example, "event1", it matches "event1" | string |


### UpstreamAuthSettings

| Name | Description | Value |
|-|-|-|
| managedIdentity | Managed identity settings for upstream. | ManagedIdentitySettings |
| type | Upstream auth type enum. | 'ManagedIdentity''None' |


### ManagedIdentitySettings

| Name | Description | Value |
|-|-|-|
| resource | The Resource indicating the App ID URI of the target resource.It also appears in the aud (audience) claim of the issued token. | string |


### EventListener

| Name | Description | Value |
|-|-|-|
| endpoint | An endpoint specifying where Web PubSub should send events to. | EventListenerEndpoint(required) |
| filter | A base class for event filter which determines whether an event should be sent to an event listener. | EventListenerFilter(required) |


### EventListenerEndpoint

| Name | Description | Value |
|-|-|-|
| type | Set the object type | EventHub(required) |


### EventHubEndpoint

| Name | Description | Value |
|-|-|-|
| type |  | 'EventHub' (required) |
| eventHubName | The name of the Event Hub. | string (required) |
| fullyQualifiedNamespace | The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net". | string (required) |


### EventListenerFilter

| Name | Description | Value |
|-|-|-|
| type | Set the object type | EventName(required) |


### EventNameFilter

| Name | Description | Value |
|-|-|-|
| type |  | 'EventName' (required) |
| systemEvents | Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response. | string[] |
| userEventPattern | Gets or sets a matching pattern for event names.There are 3 kinds of patterns supported:1. "*", it matches any event name2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"3. A single event name, for example, "event1", it matches "event1" | string |


