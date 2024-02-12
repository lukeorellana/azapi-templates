import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesTopicsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Event retention for the namespace topic expressed in days. The property default value is 1 day.Min event retention duration value is 1 day and max event retention duration value is 1 day.
   */
readonly eventRetentionInDays?: number;

/**
   * This determines the format that is expected for incoming events published to the topic.
   */
readonly inputSchema?: 'CloudEventSchemaV1_0';

/**
   * Publisher type of the namespace topic.
   */
readonly publisherType?: 'Custom';
}

/**
 * EventgridNamespacesTopics resource
 */
export class EventgridNamespacesTopics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesTopicsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/topics@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesTopicsProps): string {
    return JSON.stringify(
        {properties: {eventRetentionInDays: "${int}", inputSchema: "CloudEventSchemaV1_0", publisherType: "Custom"}}
    );
  }
}
