import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesVirtualnetworkrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * ARM ID of Virtual Network Subnet
   */
readonly virtualNetworkSubnetId?: string;
}

/**
 * EventhubNamespacesVirtualnetworkrules resource
 */
export class EventhubNamespacesVirtualnetworkrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesVirtualnetworkrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesVirtualnetworkrulesProps): string {
    return JSON.stringify(
        {properties: {virtualNetworkSubnetId: "string"}}
    );
  }
}
