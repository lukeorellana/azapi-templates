import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubProps extends IAzAPIBaseProps {
/**
   * The billing information of the resource.
   */
readonly sku?: ResourceSku;

/**
   * The kind of the service
   */
readonly kind?: 'SocketIO''WebPubSub';

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
   * DisableLocalAuthEnable or disable aad authWhen set as true, connection with AuthType=aad won't work.
   */
readonly disableAadAuth?: bool;

/**
   * DisableLocalAuthEnable or disable local auth with AccessKeyWhen set as true, connection with AccessKey=xxx won't work.
   */
readonly disableLocalAuth?: bool;

/**
   * Live trace configuration of a Microsoft.SignalRService resource.
   */
readonly liveTraceConfiguration?: LiveTraceConfiguration;

/**
   * Network ACLs for the resource
   */
readonly networkACLs?: WebPubSubNetworkACLs;

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
   * Stop or start the resource.  Default to "false".When it's true, the data plane of the resource is shutdown.When it's false, the data plane of the resource is started.
   */
readonly resourceStopped?: string;

/**
   * TLS settings for the resource
   */
readonly tls?: WebPubSubTlsSettings;

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
   * Request client certificate during TLS handshake if enabled. Not supported for free tier. Any input will be ignored for free tier.
   */
readonly clientCertEnabled?: bool;

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
 * SignalrserviceWebpubsub resource
 */
export class SignalrserviceWebpubsub extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubProps): string {
    return JSON.stringify(
        {properties: {disableAadAuth: "${bool}", disableLocalAuth: "${bool}", liveTraceConfiguration: {categories: [{enabled: "string", name: "string"}], enabled: "string"}, networkACLs: {defaultAction: "string", ipRules: [{action: "string", value: "string"}], privateEndpoints: [{allow: ["string"], deny: ["string"], name: "string"}], publicNetwork: {allow: ["string"], deny: ["string"]}}, publicNetworkAccess: "string", regionEndpointEnabled: "string", resourceLogConfiguration: {categories: [{enabled: "string", name: "string"}]}, resourceStopped: "string", tls: {clientCertEnabled: "${bool}"}}, sku: {capacity: "${int}", name: "string", tier: "string"}, kind: "string"}
    );
  }
}
