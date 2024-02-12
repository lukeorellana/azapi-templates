import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkManagednetworksManagednetworkgroupsProps extends IAzAPIBaseProps {
/**
   * Responsibility role under which this Managed Network Group will be created
   */
readonly kind?: 'Connectivity';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedNetworks;

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
