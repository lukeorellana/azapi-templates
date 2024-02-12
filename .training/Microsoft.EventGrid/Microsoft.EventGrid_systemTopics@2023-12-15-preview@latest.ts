import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridSystemtopicsProps extends IAzAPIBaseProps {

}

/**
 * EventgridSystemtopics resource
 */
export class EventgridSystemtopics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridSystemtopicsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/systemTopics@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridSystemtopicsProps): string {
    return JSON.stringify(
        {properties: {source: "string", topicType: "string"}}
    );
  }
}
