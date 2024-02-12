import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersNetworkfunctiondefinitiongroupsProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkPublishersNetworkfunctiondefinitiongroups resource
 */
export class HybridnetworkPublishersNetworkfunctiondefinitiongroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersNetworkfunctiondefinitiongroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersNetworkfunctiondefinitiongroupsProps): string {
    return JSON.stringify(
        {properties: {description: "string"}}
    );
  }
}
