import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsPremieraddonsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsPremieraddons resource
 */
export class WebSitesSlotsPremieraddons extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsPremieraddonsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/premieraddons@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsPremieraddonsProps): string {
    return JSON.stringify(
        {properties: {marketplaceOffer: "string", marketplacePublisher: "string", product: "string", sku: "string", vendor: "string"}, kind: "string"}
    );
  }
}
