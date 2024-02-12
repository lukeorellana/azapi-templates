import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The Sku pricing tier for the topic.
   */
readonly sku?: ResourceSku;

/**
   * Kind of the resource.
   */
readonly kind?: 'Azure''AzureArc';

/**
   * Extended location of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * Identity information for the resource.
   */
readonly identity?: IdentityInfo;

/**
   * Type of the extended location.
   */
readonly type?: string;

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
   * Data Residency Boundary of the resource.
   */
readonly dataResidencyBoundary?: 'WithinGeopair''WithinRegion';

/**
   * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic.
   */
readonly disableLocalAuth?: bool;

/**
   * Event Type Information for the user topic. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published.
   */
readonly eventTypeInfo?: EventTypeInfo;

/**
   * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
   */
readonly inboundIpRules?: InboundIpRule[];

/**
   * This determines the format that Event Grid should expect for incoming events published to the topic.
   */
readonly inputSchema?: 'CloudEventSchemaV1_0''CustomEventSchema''EventGridSchema';

/**
   * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
   */
readonly inputSchemaMapping?: InputSchemaMapping;

/**
   * Minimum TLS version of the publisher allowed to publish to this topic
   */
readonly minimumTlsVersionAllowed?: '1.0''1.1''1.2';

/**
   * This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" /}
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.An example of a valid inline event name is "Contoso.OrderCreated".The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type.
   */
readonly inlineEventTypes?: EventTypeInfoInlineEventTypes;

/**
   * The kind of event type used.
   */
readonly kind?: 'Inline';

/**
   * 
   */
readonly {customized property}?: InlineEventProperties;

/**
   * The dataSchemaUrl for the inline event.
   */
readonly dataSchemaUrl?: string;

/**
   * The description for the inline event.
   */
readonly description?: string;

/**
   * The displayName for the inline event.
   */
readonly displayName?: string;

/**
   * The documentationUrl for the inline event.
   */
readonly documentationUrl?: string;

/**
   * Action to perform based on the match or no match of the IpMask.
   */
readonly action?: 'Allow';

/**
   * IP Address in CIDR notation e.g., 10.0.0.0/8.
   */
readonly ipMask?: string;

/**
   * Set the object type
   */
readonly inputSchemaMappingType: Json;

/**
   * Type of the custom mapping
   */
readonly inputSchemaMappingType: 'Json';

/**
   * The mapping information for the DataVersion property of the Event Grid Event.
   */
readonly dataVersion?: JsonFieldWithDefault;

/**
   * The mapping information for the EventTime property of the Event Grid Event.
   */
readonly eventTime?: JsonField;

/**
   * The mapping information for the EventType property of the Event Grid Event.
   */
readonly eventType?: JsonFieldWithDefault;

/**
   * The mapping information for the Id property of the Event Grid Event.
   */
readonly id?: JsonField;

/**
   * The mapping information for the Subject property of the Event Grid Event.
   */
readonly subject?: JsonFieldWithDefault;

/**
   * The mapping information for the Topic property of the Event Grid Event.
   */
readonly topic?: JsonField;

/**
   * The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
   */
readonly defaultValue?: string;

/**
   * Name of a field in the input event schema that's to be used as the source of a mapping.
   */
readonly sourceField?: string;

/**
   * Name of a field in the input event schema that's to be used as the source of a mapping.
   */
readonly sourceField?: string;
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
