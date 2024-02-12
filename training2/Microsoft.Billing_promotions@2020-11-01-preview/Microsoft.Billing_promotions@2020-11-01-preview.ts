import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingPromotionsProps extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: PromotionCreateSkuNameRequestProperties;

/**
   * List of subscriptions getting the benefit of the promotion.
   */
readonly appliedScopes?: string[];

/**
   * Friendly name for user to easily identified the promotion.
   */
readonly displayName?: string;

/**
   * Unique Id for the promotion order.
   */
readonly orderId?: string;
}

/**
 * BillingPromotions resource
 */
export class BillingPromotions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingPromotionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/promotions@2020-11-01-preview";
  }

  protected getResourceBody(props: BillingPromotionsProps): string {
    return JSON.stringify(
        {properties: {appliedScopes: ["string"], displayName: "string", orderId: "string"}, sku: {name: "string"}}
    );
  }
}
