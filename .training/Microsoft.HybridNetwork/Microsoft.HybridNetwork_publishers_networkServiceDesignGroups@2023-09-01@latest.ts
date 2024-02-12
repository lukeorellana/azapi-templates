import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersNetworkservicedesigngroupsProps extends IAzAPIBaseProps {

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
