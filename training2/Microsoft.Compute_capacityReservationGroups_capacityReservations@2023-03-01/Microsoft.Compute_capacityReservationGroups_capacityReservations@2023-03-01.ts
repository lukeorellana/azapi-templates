import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeCapacityreservationgroupsCapacityreservationsProps extends IAzAPIBaseProps {
/**
   * SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (/rest/api/compute/resourceskus/list) for supported values.
   */
readonly sku: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:capacityReservationGroups;

/**
   * Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone.
   */
readonly zones?: string[];

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
 * ComputeCapacityreservationgroupsCapacityreservations resource
 */
export class ComputeCapacityreservationgroupsCapacityreservations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeCapacityreservationgroupsCapacityreservationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-03-01";
  }

  protected getResourceBody(props: ComputeCapacityreservationgroupsCapacityreservationsProps): string {
    return JSON.stringify(
        {properties: {}, zones: ["string"], sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
