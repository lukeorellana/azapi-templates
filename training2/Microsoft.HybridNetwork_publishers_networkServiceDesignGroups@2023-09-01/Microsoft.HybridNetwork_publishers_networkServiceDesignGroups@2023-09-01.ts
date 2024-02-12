import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersNetworkservicedesigngroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:publishers;

/**
   * The network service design group description.
   */
readonly description?: string;
}

/**
 * HybridnetworkPublishersNetworkservicedesigngroups resource
 */
export class HybridnetworkPublishersNetworkservicedesigngroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersNetworkservicedesigngroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/networkServiceDesignGroups@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersNetworkservicedesigngroupsProps): string {
    return JSON.stringify(
        {properties: {description: "string"}}
    );
  }
}
