import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkManagednetworksManagednetworkpeeringpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedNetworks;

/**
   * Gets or sets the hub virtual network ID
   */
readonly hub?: ResourceId;

/**
   * Gets or sets the mesh group IDs
   */
readonly mesh?: ResourceId[];

/**
   * Gets or sets the spokes group IDs
   */
readonly spokes?: ResourceId[];

/**
   * Gets or sets the connectivity type of a network structure policy
   */
readonly type: 'HubAndSpokeTopology''MeshTopology';

/**
   * Resource Id
   */
readonly id?: string;
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
