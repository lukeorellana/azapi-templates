import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesProps extends IAzAPIBaseProps {
/**
   * Represents available Sku pricing tiers.
   */
readonly sku?: NamespaceSku;

/**
   * Identity information for the Namespace resource.
   */
readonly identity?: IdentityInfo;

/**
   * The principal ID of resource identity.
   */
readonly principalId?: string;

/**
   * The tenant ID of resource.
   */
readonly tenantId?: string;

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage.
   */
readonly userAssignedIdentities?: IdentityInfoUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserIdentityProperties;

/**
   * The client id of user assigned identity.
   */
readonly clientId?: string;

/**
   * The principal id of user assigned identity.
   */
readonly principalId?: string;

/**
   * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
   */
readonly inboundIpRules?: InboundIpRule[];

/**
   * This is an optional property and it allows the user to specify if the namespace resource supports zone-redundancy capability or not. If thisproperty is not specified explicitly by the user, its default value depends on the following conditions:a. For Availability Zones enabled regions - The default property value would be true.b. For non-Availability Zones enabled regions - The default property value would be false.Once specified, this property cannot be updated.
   */
readonly isZoneRedundant?: bool;

/**
   * Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported.
   */
readonly minimumTlsVersionAllowed?: '1.0''1.1''1.2';

/**
   * 
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" /}
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * Topics configuration information for the namespace resource
   */
readonly topicsConfiguration?: TopicsConfiguration;

/**
   * Topic spaces configuration information for the namespace resource
   */
readonly topicSpacesConfiguration?: TopicSpacesConfiguration;

/**
   * Action to perform based on the match or no match of the IpMask.
   */
readonly action?: 'Allow';

/**
   * IP Address in CIDR notation e.g., 10.0.0.0/8.
   */
readonly ipMask?: string;

/**
   * GroupIds from the private link service resource.
   */
readonly groupIds?: string[];

/**
   * The Private Endpoint resource for this Connection.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Details about the state of the connection.
   */
readonly privateLinkServiceConnectionState?: ConnectionState;

/**
   * Provisioning state of the Private Endpoint Connection.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * The ARM identifier for Private Endpoint.
   */
readonly id?: string;

/**
   * Actions required (if any).
   */
readonly actionsRequired?: string;

/**
   * Description of the connection state.
   */
readonly description?: string;

/**
   * Status of the connection.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';

/**
   * Client authentication settings for topic spaces configuration.
   */
readonly clientAuthentication?: ClientAuthenticationSettings;

/**
   * The maximum number of sessions per authentication name. The property default value is 1.Min allowed value is 1 and max allowed value is 100.
   */
readonly maximumClientSessionsPerAuthenticationName?: number;

/**
   * The maximum session expiry in hours. The property default value is 1 hour.Min allowed value is 1 hour and max allowed value is 8 hours.
   */
readonly maximumSessionExpiryInHours?: number;

/**
   * Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.This topic should reside in the same region where namespace is located.
   */
readonly routeTopicResourceId?: string;

/**
   * Routing enrichments for topic spaces configuration
   */
readonly routingEnrichments?: RoutingEnrichments;

/**
   * Routing identity info for topic spaces configuration.
   */
readonly routingIdentityInfo?: RoutingIdentityInfo;

/**
   * Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled.
   */
readonly state?: 'Disabled''Enabled';

/**
   * Alternative authentication name sources related to client authentication settings for namespace resource.
   */
readonly alternativeAuthenticationNameSources?: String array containing any of:'ClientCertificateDns''ClientCertificateEmail''ClientCertificateIp''ClientCertificateSubject''ClientCertificateUri';

/**
   * 
   */
readonly dynamic?: DynamicRoutingEnrichment[];

/**
   * 
   */
readonly static?: StaticRoutingEnrichment[];

/**
   * Dynamic routing enrichment key.
   */
readonly key?: string;

/**
   * Dynamic routing enrichment value.
   */
readonly value?: string;

/**
   * Static routing enrichment key.
   */
readonly key?: string;

/**
   * Set the object type
   */
readonly valueType: String;

/**
   * Static routing enrichment value type. For e.g. this property value can be 'String'.
   */
readonly valueType: 'String';

/**
   * String type routing enrichment value.
   */
readonly value?: string;

/**
   * 
   */
readonly type?: 'None''SystemAssigned''UserAssigned';

/**
   * 
   */
readonly userAssignedIdentity?: string;

/**
   * Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 andmax allowed capacity is 20.
   */
readonly capacity?: number;
}

/**
 * EventgridNamespaces resource
 */
export class EventgridNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesProps): string {
    return JSON.stringify(
        {properties: {inboundIpRules: [{action: "Allow", ipMask: "string"}], isZoneRedundant: "${bool}", minimumTlsVersionAllowed: "string", privateEndpointConnections: [{properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string", topicsConfiguration: {}, topicSpacesConfiguration: {clientAuthentication: {alternativeAuthenticationNameSources: ["string"]}, maximumClientSessionsPerAuthenticationName: "${int}", maximumSessionExpiryInHours: "${int}", routeTopicResourceId: "string", routingEnrichments: {dynamic: [{key: "string", value: "string"}], static: [{key: "string", valueType: "string"}]}, routingIdentityInfo: {type: "string", userAssignedIdentity: "string"}, state: "string"}}, sku: {capacity: "${int}", name: "Standard"}}
    );
  }
}
