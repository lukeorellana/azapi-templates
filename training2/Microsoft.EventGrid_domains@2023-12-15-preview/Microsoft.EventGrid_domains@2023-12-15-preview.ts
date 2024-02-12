import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The Sku pricing tier for the Event Grid Domain resource.
   */
readonly sku?: ResourceSku;

/**
   * Identity information for the Event Grid Domain resource.
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
   * This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription iscreated at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topicby the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides theflexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create thedomain topic on demand if needed.
   */
readonly autoCreateTopicWithFirstSubscription?: bool;

/**
   * This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scopeof the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed(e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants fullcontrol of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewerresources by the user.
   */
readonly autoDeleteTopicWithLastSubscription?: bool;

/**
   * Data Residency Boundary of the resource.
   */
readonly dataResidencyBoundary?: 'WithinGeopair''WithinRegion';

/**
   * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain.
   */
readonly disableLocalAuth?: bool;

/**
   * Event Type Information for the domain. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published.
   */
readonly eventTypeInfo?: EventTypeInfo;

/**
   * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
   */
readonly inboundIpRules?: InboundIpRule[];

/**
   * This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource.
   */
readonly inputSchema?: 'CloudEventSchemaV1_0''CustomEventSchema''EventGridSchema';

/**
   * Information about the InputSchemaMapping which specified the info about mapping event payload.
   */
readonly inputSchemaMapping?: InputSchemaMapping;

/**
   * Minimum TLS version of the publisher allowed to publish to this domain
   */
readonly minimumTlsVersionAllowed?: '1.0''1.1''1.2';

/**
   * This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" /}
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
