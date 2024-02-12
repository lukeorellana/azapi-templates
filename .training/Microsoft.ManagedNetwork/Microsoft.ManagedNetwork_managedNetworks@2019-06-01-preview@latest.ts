import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkManagednetworksProps extends IAzAPIBaseProps {

}

/**
 * ManagednetworkManagednetworks resource
 */
export class ManagednetworkManagednetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagednetworkManagednetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview";
  }

  protected getResourceBody(props: ManagednetworkManagednetworksProps): string {
    return JSON.stringify(
        {properties: {scope: {managementGroups: [{id: "string"}], subnets: [{id: "string"}], subscriptions: [{id: "string"}], virtualNetworks: [{id: "string"}]}}}
    );
  }
}
