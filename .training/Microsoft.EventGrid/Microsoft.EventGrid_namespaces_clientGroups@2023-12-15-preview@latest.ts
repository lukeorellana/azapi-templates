import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesClientgroupsProps extends IAzAPIBaseProps {

}

/**
 * EventgridNamespacesClientgroups resource
 */
export class EventgridNamespacesClientgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesClientgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/clientGroups@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesClientgroupsProps): string {
    return JSON.stringify(
        {properties: {description: "string", query: "string"}}
    );
  }
}
