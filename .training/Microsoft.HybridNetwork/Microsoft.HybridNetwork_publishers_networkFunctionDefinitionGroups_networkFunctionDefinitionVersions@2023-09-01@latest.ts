import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversionsProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversions resource
 */
export class HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversionsProps): string {
    return JSON.stringify(
        {properties: {deployParameters: "string", description: "string", networkFunctionType: "string"}}
    );
  }
}
