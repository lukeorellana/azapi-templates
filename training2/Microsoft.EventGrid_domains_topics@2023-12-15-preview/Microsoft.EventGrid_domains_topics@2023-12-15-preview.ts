import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridDomainsTopicsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:domains;
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
