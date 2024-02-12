import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkManagednetworksManagednetworkpeeringpoliciesProps extends IAzAPIBaseProps {

}

/**
 * ManagednetworkManagednetworksManagednetworkpeeringpolicies resource
 */
export class ManagednetworkManagednetworksManagednetworkpeeringpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagednetworkManagednetworksManagednetworkpeeringpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview";
  }

  protected getResourceBody(props: ManagednetworkManagednetworksManagednetworkpeeringpoliciesProps): string {
    return JSON.stringify(
        {properties: {hub: {id: "string"}, mesh: [{id: "string"}], spokes: [{id: "string"}], type: "string"}}
    );
  }
}
