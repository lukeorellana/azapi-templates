import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The billing information of the resource.
   */
readonly sku?: ResourceSku;

/**
   * The kind of the service
   */
readonly kind?: 'RawWebSockets''SignalR';

/**
   * A class represent managed identities used for request and response
   */
readonly identity?: ManagedIdentity;

/**
   * Represents the identity type: systemAssigned, userAssigned, None
   */
readonly type?: 'None''SystemAssigned''UserAssigned';

/**
   * Get or set the user assigned identities
   */
readonly userAssignedIdentities?: ManagedIdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentityProperty;

/**
   * Cross-Origin Resource Sharing (CORS) settings.
   */
readonly cors?: SignalRCorsSettings;

/**
   * DisableLocalAuthEnable or disable aad authWhen set as true, connection with AuthType=aad won't work.
   */
readonly disableAadAuth?: bool;

/**
   * DisableLocalAuthEnable or disable local auth with AccessKeyWhen set as true, connection with AccessKey=xxx won't work.
   */
readonly disableLocalAuth?: bool;

/**
   * List of the featureFlags.FeatureFlags that are not included in the parameters for the update operation will not be modified.And the response will only include featureFlags that are explicitly set.When a featureFlag is not explicitly set, its globally default value will be usedBut keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
   */
readonly features?: SignalRFeature[];

/**
   * Live trace configuration of a Microsoft.SignalRService resource.
   */
readonly liveTraceConfiguration?: LiveTraceConfiguration;

/**
   * Network ACLs for the resource
   */
readonly networkACLs?: SignalRNetworkACLs;

/**
   * Enable or disable public network access. Default to "Enabled".When it's Enabled, network ACLs still apply.When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
   */
readonly publicNetworkAccess?: string;

/**
   * Enable or disable the regional endpoint. Default to "Enabled".When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.This property is replica specific. Disable the regional endpoint without replica is not allowed.
   */
readonly regionEndpointEnabled?: string;

/**
   * Resource log configuration of a Microsoft.SignalRService resource.
   */
readonly resourceLogConfiguration?: ResourceLogConfiguration;

/**
   * Stop or start the resource.  Default to "False".When it's true, the data plane of the resource is shutdown.When it's false, the data plane of the resource is started.
   */
readonly resourceStopped?: string;

/**
   * Serverless settings.
   */
readonly serverless?: ServerlessSettings;

/**
   * TLS settings for the resource
   */
readonly tls?: SignalRTlsSettings;

/**
   * The settings for the Upstream when the service is in server-less mode.
   */
readonly upstream?: ServerlessUpstreamSettings;

/**
   * Gets or sets the list of origins that should be allowed to make cross-origin calls (for example:http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
   */
readonly allowedOrigins?: string[];

/**
   * FeatureFlags is the supported features of Azure SignalR service.- ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.- EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.- EnableMessagingLogs: "true"/"false", to enable/disable the connectivity log category respectively.- EnableLiveTrace: Live Trace allows you to know what's happening inside Azure SignalR service, it will give you live traces in real time, it will be helpful when you developing your own Azure SignalR based web application or self-troubleshooting some issues. Please note that live traces are counted as outbound messages that will be charged. Values allowed: "true"/"false", to enable/disable live trace feature.
   */
readonly flag: 'EnableConnectivityLogs''EnableLiveTrace''EnableMessagingLogs''ServiceMode';

/**
   * Value of the feature flag. See Azure SignalR service documenthttps://docs.microsoft.com/azure/azure-signalr/for allowed values.
   */
readonly value: string Constranumbers:Min length = 1Max length = 128;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Gets or sets the list of category configurations.
   */
readonly categories?: LiveTraceCategory[];

/**
   * Indicates whether or not enable live trace.When it's set to true, live trace client can connect to the service.Otherwise, live trace client can't connect to the service, so that you are unable to receive any log, no matter what you configure in "categories".Available values: true, false.Case insensitive.
   */
readonly enabled?: string;

/**
   * Indicates whether or the live trace category is enabled.Available values: true, false.Case insensitive.
   */
readonly enabled?: string;

/**
   * Azure Networking ACL Action.
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * IP rules for filtering public traffic
   */
readonly ipRules?: IPRule[]Constranumbers:Max length = 30;

/**
   * ACLs for requests from private endpoints
   */
readonly privateEndpoints?: PrivateEndponumberACL[];

/**
   * Network ACL
   */
readonly publicNetwork?: NetworkACL;

/**
   * Azure Networking ACL Action.
   */
readonly action?: 'Allow''Deny';

/**
   * An IP or CIDR or ServiceTag
   */
readonly value?: string;

/**
   * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
   */
readonly allow?: String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace';

/**
   * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
   */
readonly deny?: String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace';

/**
   * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
   */
readonly allow?: String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace';

/**
   * Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
   */
readonly deny?: String array containing any of:'ClientConnection''RESTAPI''ServerConnection''Trace';

/**
   * Gets or sets the list of category configurations.
   */
readonly categories?: ResourceLogCategory[];

/**
   * Indicates whether or the resource log category is enabled.Available values: true, false.Case insensitive.
   */
readonly enabled?: string;

/**
   * Gets or sets Client Connection Timeout. Optional to be set.Value in seconds.Default value is 30 seconds.Customer should set the timeout to a shorter period if messages are expected to be sent in shorter intervals,and want the client to disconnect more quickly after the last message is sent.You can set the timeout to a longer period if messages are expected to be sent in longer intervals,and they want to keep the same client connection alive during this session.The service considers the client disconnected if it hasn't received a message (including keep-alive) in this interval.
   */
readonly connectionTimeoutInSeconds?: numberConstranumbers:Min value = 1Max value = 120;

/**
   * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
   */
readonly clientCertEnabled?: bool;

/**
   * Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.
   */
readonly templates?: UpstreamTemplate[];

/**
   * Upstream auth settings. If not set, no auth is used for upstream messages.
   */
readonly auth?: UpstreamAuthSettings;

/**
   * Gets or sets the matching pattern for category names. If not set, it matches any category.There are 3 kind of patterns supported:1. "*", it to matches any category name.2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages".3. The single category name, for example, "connections", it matches the category "connections".
   */
readonly categoryPattern?: string;

/**
   * Gets or sets the matching pattern for event names. If not set, it matches any event.There are 3 kind of patterns supported:1. "*", it to matches any event name.2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect".3. The single event name, for example, "connect", it matches "connect".
   */
readonly eventPattern?: string;

/**
   * Gets or sets the matching pattern for hub names. If not set, it matches any hub.There are 3 kind of patterns supported:1. "*", it to matches any hub name.2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2".3. The single hub name, for example, "hub1", it matches "hub1".
   */
readonly hubPattern?: string;

/**
   * Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.For example, if the urlTemplate ishttp://example.com/{hub}/api/{event}, with a client request from hubchatconnects, it will first POST to this URL:http://example.com/chat/api/connect.
   */
readonly urlTemplate: string;

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
   * Optional, integer. The unit count of the resource. 1 by default.If present, following values are allowed:Free: 1;Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
   */
readonly capacity?: number;

/**
   * Optional tier of this particular SKU. 'Standard' or 'Free'.Basicis deprecated, useStandardinstead.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
