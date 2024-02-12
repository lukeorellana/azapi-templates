import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CapacityReservationordersProps extends IAzAPIBaseProps {

}

/**
 * CapacityReservationorders resource
 */
export class CapacityReservationorders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CapacityReservationordersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Capacity/reservationOrders@2022-03-01";
  }

  protected getResourceBody(props: CapacityReservationordersProps): string {
    return JSON.stringify(
        {properties: {appliedScopes: ["string"], appliedScopeType: "string", billingPlan: "string", billingScopeId: "string", displayName: "string", quantity: "${int}", renew: "${bool}", reservedResourceProperties: {instanceFlexibility: "string"}, reservedResourceType: "string", term: "string"}, sku: {name: "string"}}
    );
  }
}
