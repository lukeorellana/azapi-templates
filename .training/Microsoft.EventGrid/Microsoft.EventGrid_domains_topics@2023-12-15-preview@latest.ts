import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridDomainsTopicsProps extends IAzAPIBaseProps {

}

/**
 * EventgridDomainsTopics resource
 */
export class EventgridDomainsTopics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridDomainsTopicsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/domains/topics@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridDomainsTopicsProps): string {
    return JSON.stringify(
        
    );
  }
}
