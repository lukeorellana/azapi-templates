import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsClustersPlacementpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * Display name of the placement policy
   */
readonly displayName?: string;

/**
   * Whether the placement policy is enabled or disabled
   */
readonly state?: 'Disabled''Enabled';

/**
   * Set the object type
   */
readonly type: VmHostVmVm;

/**
   * placement policy type
   */
readonly type: 'VmHost';

/**
   * vm-host placement policy affinity strength (should/must)
   */
readonly affinityStrength?: 'Must''Should';

/**
   * placement policy affinity type
   */
readonly affinityType: 'Affinity''AntiAffinity';

/**
   * placement policy azure hybrid benefit opt-in type
   */
readonly azureHybridBenefitType?: 'None''SqlHost';

/**
   * Host members list
   */
readonly hostMembers: string[];

/**
   * Virtual machine members list
   */
readonly vmMembers: string[];

/**
   * placement policy type
   */
readonly type: 'VmVm';

/**
   * placement policy affinity type
   */
readonly affinityType: 'Affinity''AntiAffinity';

/**
   * Virtual machine members list
   */
readonly vmMembers: string[];
}

/**
 * AvsPrivatecloudsClustersPlacementpolicies resource
 */
export class AvsPrivatecloudsClustersPlacementpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsClustersPlacementpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsClustersPlacementpoliciesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", state: "string", type: "string"}}
    );
  }
}
