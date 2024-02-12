import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkManagednetworksManagednetworkgroupsProps extends IAzAPIBaseProps {

}

/**
 * ManagednetworkManagednetworksManagednetworkgroups resource
 */
export class ManagednetworkManagednetworksManagednetworkgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagednetworkManagednetworksManagednetworkgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview";
  }

  protected getResourceBody(props: ManagednetworkManagednetworksManagednetworkgroupsProps): string {
    return JSON.stringify(
        {properties: {managementGroups: [{id: "string"}], subnets: [{id: "string"}], subscriptions: [{id: "string"}], virtualNetworks: [{id: "string"}]}, kind: "Connectivity"}
    );
  }
}
