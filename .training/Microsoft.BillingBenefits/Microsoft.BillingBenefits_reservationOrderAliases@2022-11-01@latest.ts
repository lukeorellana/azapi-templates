import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingbenefitsReservationorderaliasesProps extends IAzAPIBaseProps {

}

/**
 * BillingbenefitsReservationorderaliases resource
 */
export class BillingbenefitsReservationorderaliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingbenefitsReservationorderaliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01";
  }

  protected getResourceBody(props: BillingbenefitsReservationorderaliasesProps): string {
    return JSON.stringify(
        {properties: {appliedScopeProperties: {displayName: "string", managementGroupId: "string", resourceGroupId: "string", subscriptionId: "string", tenantId: "string"}, appliedScopeType: "string", billingPlan: "P1M", billingScopeId: "string", displayName: "string", quantity: "${int}", renew: "${bool}", reservedResourceProperties: {instanceFlexibility: "string"}, reservedResourceType: "string", reviewDateTime: "string", term: "string"}, sku: {name: "string"}}
    );
  }
}
