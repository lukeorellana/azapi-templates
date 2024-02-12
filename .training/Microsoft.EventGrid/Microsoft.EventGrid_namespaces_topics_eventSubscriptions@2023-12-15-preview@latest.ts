import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesTopicsEventsubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * EventgridNamespacesTopicsEventsubscriptions resource
 */
export class EventgridNamespacesTopicsEventsubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesTopicsEventsubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesTopicsEventsubscriptionsProps): string {
    return JSON.stringify(
        {properties: {deliveryConfiguration: {deliveryMode: "string", push: {deadLetterDestinationWithResourceIdentity: {deadLetterDestination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, deliveryWithResourceIdentity: {destination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, eventTimeToLive: "string", maxDeliveryCount: "${int}"}, queue: {deadLetterDestinationWithResourceIdentity: {deadLetterDestination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, eventTimeToLive: "string", maxDeliveryCount: "${int}", receiveLockDurationInSeconds: "${int}"}}, eventDeliverySchema: "CloudEventSchemaV1_0", filtersConfiguration: {filters: [{key: "string", operatorType: "string"}], includedEventTypes: ["string"]}}}
    );
  }
}
