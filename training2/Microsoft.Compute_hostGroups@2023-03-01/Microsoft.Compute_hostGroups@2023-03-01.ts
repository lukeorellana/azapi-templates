import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeHostgroupsProps extends IAzAPIBaseProps {
/**
   * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
   */
readonly zones?: string[];

/**
   * Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
   */
readonly additionalCapabilities?: DedicatedHostGroupPropertiesAdditionalCapabilities;

/**
   * Number of fault domains that the host group can span.
   */
readonly platformFaultDomainCount: number;

/**
   * Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01.
   */
readonly supportAutomaticPlacement?: bool;

/**
   * The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to /azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature.Note:The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01.
   */
readonly ultraSSDEnabled?: bool;
}

/**
 * ComputeHostgroups resource
 */
export class ComputeHostgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeHostgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/hostGroups@2023-03-01";
  }

  protected getResourceBody(props: ComputeHostgroupsProps): string {
    return JSON.stringify(
        {properties: {additionalCapabilities: {ultraSSDEnabled: "${bool}"}, platformFaultDomainCount: "${int}", supportAutomaticPlacement: "${bool}"}, zones: ["string"]}
    );
  }
}
