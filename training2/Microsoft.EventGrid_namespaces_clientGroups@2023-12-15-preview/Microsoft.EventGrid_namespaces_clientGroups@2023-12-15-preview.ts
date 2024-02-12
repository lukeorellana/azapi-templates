import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesClientgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Description for the Client Group resource.
   */
readonly description?: string;

/**
   * The grouping query for the clients.Example : attributes.keyName IN ['a', 'b', 'c'].
   */
readonly query?: string;
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
