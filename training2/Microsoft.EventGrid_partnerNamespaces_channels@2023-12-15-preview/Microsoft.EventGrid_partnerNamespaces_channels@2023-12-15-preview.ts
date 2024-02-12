import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:partnerNamespaces;

/**
   * The type of the event channel which represents the direction flow of events.
   */
readonly channelType?: 'PartnerDestination''PartnerTopic';

/**
   * Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,the channel and corresponding partner topic are deleted.
   */
readonly expirationTimeIfNotActivatedUtc?: string;

/**
   * Context or helpful message that can be used during the approval process by the subscriber.
   */
readonly messageForActivation?: string;

/**
   * This property should be populated when channelType is PartnerDestination and represents information about the partner destination resource corresponding to the channel.
   */
readonly partnerDestinationInfo?: PartnerDestinationInfo;

/**
   * This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel.
   */
readonly partnerTopicInfo?: PartnerTopicInfo;

/**
   * Provisioning state of the channel.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''IdleDueToMirroredPartnerDestinationDeletion''IdleDueToMirroredPartnerTopicDeletion''Succeeded''Updating';

/**
   * The readiness state of the corresponding partner topic.
   */
readonly readinessState?: 'Activated''NeverActivated';

/**
   * Azure subscription ID of the subscriber. The partner destination associated with the channel will becreated under this Azure subscription.
   */
readonly azureSubscriptionId?: string;

/**
   * Additional context of the partner destination endpoint.
   */
readonly endpointServiceContext?: string;

/**
   * Azure Resource Group of the subscriber. The partner destination associated with the channel will becreated under this resource group.
   */
readonly resourceGroupName?: string;

/**
   * Change history of the resource move.
   */
readonly resourceMoveChangeHistory?: ResourceMoveChangeHistory[];

/**
   * Set the object type
   */
readonly endpointType: WebHook;

/**
   * Azure subscription ID of the resource.
   */
readonly azureSubscriptionId?: string;

/**
   * UTC timestamp of when the resource was changed.
   */
readonly changedTimeUtc?: string;

/**
   * Azure Resource Group of the resource.
   */
readonly resourceGroupName?: string;

/**
   * Type of the endpoint for the partner destination
   */
readonly endpointType: 'WebHook';

/**
   * Partner client authentication
   */
readonly clientAuthentication?: PartnerClientAuthentication;

/**
   * The base URL that represents the endpoint of the partner destination.
   */
readonly endpointBaseUrl?: string;

/**
   * The URL that represents the endpoint of the partner destination.
   */
readonly endpointUrl?: string;

/**
   * Set the object type
   */
readonly clientAuthenticationType: AzureAD;

/**
   * Type of client authentication
   */
readonly clientAuthenticationType: 'AzureAD';

/**
   * The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
   */
readonly azureActiveDirectoryApplicationIdOrUri?: string;

/**
   * The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
   */
readonly azureActiveDirectoryTenantId?: string;

/**
   * Azure subscription ID of the subscriber. The partner topic associated with the channel will becreated under this Azure subscription.
   */
readonly azureSubscriptionId?: string;

/**
   * Event Type Information for the partner topic. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published.
   */
readonly eventTypeInfo?: EventTypeInfo;

/**
   * Azure Resource Group of the subscriber. The partner topic associated with the channel will becreated under this resource group.
   */
readonly resourceGroupName?: string;

/**
   * The source information is provided by the publisher to determine the scope or context from which the eventsare originating. This information can be used by the subscriber during the approval process of thecreated partner topic.
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
