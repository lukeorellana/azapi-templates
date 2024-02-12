import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeCapacityreservationgroupsProps extends IAzAPIBaseProps {
/**
   * Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones.
   */
readonly zones?: string[];
}

/**
 * ComputeCapacityreservationgroups resource
 */
export class ComputeCapacityreservationgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeCapacityreservationgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/capacityReservationGroups@2023-03-01";
  }

  protected getResourceBody(props: ComputeCapacityreservationgroupsProps): string {
    return JSON.stringify(
        {properties: {}, zones: ["string"]}
    );
  }
}
