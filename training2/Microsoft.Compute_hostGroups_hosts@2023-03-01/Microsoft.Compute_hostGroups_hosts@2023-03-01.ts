import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeHostgroupsHostsProps extends IAzAPIBaseProps {
/**
   * SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
   */
readonly sku: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostGroups;

/**
   * Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
   */
readonly autoReplaceOnFailure?: bool;

/**
   * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are:None,Windows_Server_Hybrid,Windows_Server_Perpetual.The default value is:None.
   */
readonly licenseType?: 'None''Windows_Server_Hybrid''Windows_Server_Perpetual';

/**
   * Fault domain of the dedicated host within a dedicated host group.
   */
readonly platformFaultDomain?: number;

/**
   * Specifies the number of virtual machines in the scale set.
   */
readonly capacity?: number;

/**
   * Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic
   */
readonly tier?: string;
}

/**
 * ComputeHostgroupsHosts resource
 */
export class ComputeHostgroupsHosts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeHostgroupsHostsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/hostGroups/hosts@2023-03-01";
  }

  protected getResourceBody(props: ComputeHostgroupsHostsProps): string {
    return JSON.stringify(
        {properties: {autoReplaceOnFailure: "${bool}", licenseType: "string", platformFaultDomain: "${int}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
