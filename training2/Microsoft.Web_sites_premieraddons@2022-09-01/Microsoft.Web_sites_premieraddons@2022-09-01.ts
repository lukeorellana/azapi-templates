import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPremieraddonsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * Premier add on Marketplace offer.
   */
readonly marketplaceOffer?: string;

/**
   * Premier add on Marketplace publisher.
   */
readonly marketplacePublisher?: string;

/**
   * Premier add on Product.
   */
readonly product?: string;

/**
   * Premier add on SKU.
   */
readonly sku?: string;

/**
   * Premier add on Vendor.
   */
readonly vendor?: string;
}

/**
 * WebSitesPremieraddons resource
 */
export class WebSitesPremieraddons extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesPremieraddonsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/premieraddons@2022-09-01";
  }

  protected getResourceBody(props: WebSitesPremieraddonsProps): string {
    return JSON.stringify(
        {properties: {marketplaceOffer: "string", marketplacePublisher: "string", product: "string", sku: "string", vendor: "string"}, kind: "string"}
    );
  }
}
