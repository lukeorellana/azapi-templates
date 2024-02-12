import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubHubsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:webPubSub;

/**
   * The settings for configuring if anonymous connections are allowed for this hub: "allow" or "deny". Default to "deny".
   */
readonly anonymousConnectPolicy?: string;

/**
   * Event handler of a hub.
   */
readonly eventHandlers?: EventHandler[];

/**
   * Event listener settings for forwarding your client events to listeners.Event listener is transparent to Web PubSub clients, and it doesn't return any result to clients nor interrupt the lifetime of clients.One event can be sent to multiple listeners, as long as it matches the filters in those listeners. The order of the array elements doesn't matter.Maximum count of event listeners among all hubs is 10.
   */
readonly eventListeners?: EventListener[];

/**
   * Upstream auth settings. If not set, no auth is used for upstream messages.
   */
readonly auth?: UpstreamAuthSettings;

/**
   * Gets or sets the list of system events.
   */
readonly systemEvents?: string[];

/**
   * Gets or sets the EventHandler URL template. You can use a predefined parameter {hub} and {event} inside the template, the value of the EventHandler URL is dynamically calculated when the client request comes in.For example, UrlTemplate can behttp://example.com/api/{hub}/{event}. The host part can't contains parameters.
   */
readonly urlTemplate: string;

/**
   * Gets or sets the matching pattern for event names.There are 3 kinds of patterns supported:1. "*", it matches any event name2. Combine multiple events with ",", for example "event1,event2", it matches event "event1" and "event2"3. A single event name, for example, "event1", it matches "event1"
   */
readonly userEventPattern?: string;

/**
   * Managed identity settings for upstream.
   */
readonly managedIdentity?: ManagedIdentitySettings;

/**
   * Upstream auth type enum.
   */
readonly type?: 'ManagedIdentity''None';

/**
   * The Resource indicating the App ID URI of the target resource.It also appears in the aud (audience) claim of the issued token.
   */
readonly resource?: string;

/**
   * An endpoint specifying where Web PubSub should send events to.
   */
readonly endpoint: EventListenerEndponumber;

/**
   * A base class for event filter which determines whether an event should be sent to an event listener.
   */
readonly filter: EventListenerFilter;

/**
   * Set the object type
   */
readonly type: EventHub;

/**
   * 
   */
readonly type: 'EventHub';

/**
   * The name of the Event Hub.
   */
readonly eventHubName: string;

/**
   * The fully qualified namespace name of the Event Hub resource. For example, "example.servicebus.windows.net".
   */
readonly fullyQualifiedNamespace: string;

/**
   * Set the object type
   */
readonly type: EventName;

/**
   * 
   */
readonly type: 'EventName';

/**
   * Gets or sets a list of system events. Supported events: "connected" and "disconnected". Blocking event "connect" is not supported because it requires a response.
   */
readonly systemEvents?: string[];

/**
   * Gets or sets a matching pattern for event names.There are 3 kinds of patterns supported:1. "*", it matches any event name2. Combine multiple events with ",", for example "event1,event2", it matches events "event1" and "event2"3. A single event name, for example, "event1", it matches "event1"
   */
readonly userEventPattern?: string;
}

/**
 * SignalrserviceWebpubsubHubs resource
 */
export class SignalrserviceWebpubsubHubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubHubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/hubs@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubHubsProps): string {
    return JSON.stringify(
        {properties: {anonymousConnectPolicy: "string", eventHandlers: [{auth: {managedIdentity: {resource: "string"}, type: "string"}, systemEvents: ["string"], urlTemplate: "string", userEventPattern: "string"}], eventListeners: [{endpoint: {type: "string"}, filter: {type: "string"}}]}}
    );
  }
}
