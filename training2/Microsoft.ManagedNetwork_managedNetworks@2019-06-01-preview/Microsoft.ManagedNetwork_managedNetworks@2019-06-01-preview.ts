import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkManagednetworksProps extends IAzAPIBaseProps {
/**
   * The collection of management groups, subscriptions, virtual networks, and subnets by the Managed Network. This is a read-only property that is reflective of all ScopeAssignments for this Managed Network
   */
readonly scope?: Scope;

/**
   * The collection of management groups covered by the Managed Network
   */
readonly managementGroups?: ResourceId[];

/**
   * The collection of  subnets covered by the Managed Network
   */
readonly subnets?: ResourceId[];

/**
   * The collection of subscriptions covered by the Managed Network
   */
readonly subscriptions?: ResourceId[];

/**
   * The collection of virtual nets covered by the Managed Network
   */
readonly virtualNetworks?: ResourceId[];

/**
   * Resource Id
   */
readonly id?: string;
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
