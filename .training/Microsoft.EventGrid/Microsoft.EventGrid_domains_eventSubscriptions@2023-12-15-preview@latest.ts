import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridDomainsEventsubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * EventgridDomainsEventsubscriptions resource
 */
export class EventgridDomainsEventsubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridDomainsEventsubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/domains/eventSubscriptions@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridDomainsEventsubscriptionsProps): string {
    return JSON.stringify(
        {properties: {deadLetterDestination: {endpointType: "string"}, deadLetterWithResourceIdentity: {deadLetterDestination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, deliveryWithResourceIdentity: {destination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, destination: {endpointType: "string"}, eventDeliverySchema: "string", expirationTimeUtc: "string", filter: {advancedFilters: [{key: "string", operatorType: "string"}], enableAdvancedFilteringOnArrays: "${bool}", includedEventTypes: ["string"], isSubjectCaseSensitive: "${bool}", subjectBeginsWith: "string", subjectEndsWith: "string"}, labels: ["string"], retryPolicy: {eventTimeToLiveInMinutes: "${int}", maxDeliveryAttempts: "${int}"}}}
    );
  }
}
