import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesTopicsProps extends IAzAPIBaseProps {

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
