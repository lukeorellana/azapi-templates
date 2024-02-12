import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPremieraddonsProps extends IAzAPIBaseProps {

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
