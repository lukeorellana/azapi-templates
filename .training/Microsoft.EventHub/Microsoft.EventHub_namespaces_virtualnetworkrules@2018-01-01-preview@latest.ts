import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesVirtualnetworkrulesProps extends IAzAPIBaseProps {

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
