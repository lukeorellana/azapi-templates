import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnernamespacesEventchannelsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:partnerNamespaces;

/**
   * Represents the destination of an event channel.
   */
readonly destination?: EventChannelDestination;

/**
   * Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,the event channel and corresponding partner topic are deleted.
   */
readonly expirationTimeIfNotActivatedUtc?: string;

/**
   * Information about the filter for the event channel.
   */
readonly filter?: EventChannelFilter;

/**
   * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
   */
readonly partnerTopicFriendlyDescription?: string;

/**
   * Source of the event channel. This represents a unique resource in the partner's resource model.
   */
readonly source?: EventChannelSource;

/**
   * Azure subscription ID of the customer creating the event channel. The partner topicassociated with the event channel will be created under this Azure subscription.
   */
readonly azureSubscriptionId?: string;

/**
   * Name of the partner topic associated with the event channel.
   */
readonly partnerTopicName?: string;

/**
   * Azure Resource Group of the customer creating the event channel. The partner topicassociated with the event channel will be created under this resource group.
   */
readonly resourceGroup?: string;

/**
   * An array of advanced filters that are used for filtering event channels.
   */
readonly advancedFilters?: AdvancedFilter[];

/**
   * Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. The default value is either false or null.
   */
readonly enableAdvancedFilteringOnArrays?: bool;

/**
   * The field/property in the event based on which you want to filter.
   */
readonly key?: string;

/**
   * Set the object type
   */
readonly operatorType: BoolEqualsIsNotNullIsNullOrUndefinedNumberGreaterThanNumberGreaterThanOrEqualsNumberInNumberInRangeNumberLessThanNumberLessThanOrEqualsNumberNotInNumberNotInRangeStringBeginsWithStringContainsStringEndsWithStringInStringNotBeginsWithStringNotContainsStringNotEndsWithStringNotIn;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'BoolEquals';

/**
   * The boolean filter value.
   */
readonly value?: bool;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'IsNotNull';

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'IsNullOrUndefined';

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberGreaterThan';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberGreaterThanOrEquals';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberIn';

/**
   * The set of filter values.
   */
readonly values?: number[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberInRange';

/**
   * The set of filter values.
   */
readonly values?: number[][];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberLessThan';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberLessThanOrEquals';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberNotIn';

/**
   * The set of filter values.
   */
readonly values?: number[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberNotInRange';

/**
   * The set of filter values.
   */
readonly values?: number[][];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringBeginsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringContains';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringEndsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringIn';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotBeginsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotContains';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotEndsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotIn';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The identifier of the resource that's the source of the events.This represents a unique resource in the partner's resource model.
   */
readonly source?: string;
}

/**
 * EventgridPartnernamespacesEventchannels resource
 */
export class EventgridPartnernamespacesEventchannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnernamespacesEventchannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview";
  }

  protected getResourceBody(props: EventgridPartnernamespacesEventchannelsProps): string {
    return JSON.stringify(
        {properties: {destination: {azureSubscriptionId: "string", partnerTopicName: "string", resourceGroup: "string"}, expirationTimeIfNotActivatedUtc: "string", filter: {advancedFilters: [{key: "string", operatorType: "string"}], enableAdvancedFilteringOnArrays: "${bool}"}, partnerTopicFriendlyDescription: "string", source: {source: "string"}}}
    );
  }
}
