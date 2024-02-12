import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeCapacityreservationgroupsCapacityreservationsProps extends IAzAPIBaseProps {

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
