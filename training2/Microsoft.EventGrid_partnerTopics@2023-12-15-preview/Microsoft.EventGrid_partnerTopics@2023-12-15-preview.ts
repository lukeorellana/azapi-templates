import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Identity information for the Partner Topic resource.
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
   * Activation state of the partner topic.
   */
readonly activationState?: 'Activated''Deactivated''NeverActivated';

/**
   * Event Type information from the corresponding event channel.
   */
readonly eventTypeInfo?: EventTypeInfo;

/**
   * Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,the partner topic and corresponding event channel are deleted.
   */
readonly expirationTimeIfNotActivatedUtc?: string;

/**
   * Context or helpful message that can be used during the approval process by the subscriber.
   */
readonly messageForActivation?: string;

/**
   * The immutableId of the corresponding partner registration.
   */
readonly partnerRegistrationImmutableId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
   */
readonly partnerTopicFriendlyDescription?: string;

/**
   * Source associated with this partner topic. This represents a unique partner resource.
   */
readonly source?: string;

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
