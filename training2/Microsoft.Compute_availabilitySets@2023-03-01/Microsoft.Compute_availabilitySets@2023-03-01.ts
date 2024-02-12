import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeAvailabilitysetsProps extends IAzAPIBaseProps {
/**
   * Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
   */
readonly sku?: Sku;

/**
   * Fault Domain count.
   */
readonly platformFaultDomainCount?: number;

/**
   * Update Domain count.
   */
readonly platformUpdateDomainCount?: number;

/**
   * Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01.
   */
readonly proximityPlacementGroup?: SubResource;

/**
   * A list of references to all virtual machines in the availability set.
   */
readonly virtualMachines?: SubResource[];

/**
   * Resource Id
   */
readonly id?: string;

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
 * ComputeAvailabilitysets resource
 */
export class ComputeAvailabilitysets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeAvailabilitysetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/availabilitySets@2023-03-01";
  }

  protected getResourceBody(props: ComputeAvailabilitysetsProps): string {
    return JSON.stringify(
        {properties: {platformFaultDomainCount: "${int}", platformUpdateDomainCount: "${int}", proximityPlacementGroup: {id: "string"}, virtualMachines: [{id: "string"}]}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
