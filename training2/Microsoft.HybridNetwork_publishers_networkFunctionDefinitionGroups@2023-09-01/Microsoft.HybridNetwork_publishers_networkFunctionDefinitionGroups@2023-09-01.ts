import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersNetworkfunctiondefinitiongroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:publishers;

/**
   * The network function definition group description.
   */
readonly description?: string;
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
