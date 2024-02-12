import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesNetworkconfigProps extends IAzAPIBaseProps {

}

/**
 * WebSitesNetworkconfig resource
 */
export class WebSitesNetworkconfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesNetworkconfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/networkConfig@2022-09-01";
  }

  protected getResourceBody(props: WebSitesNetworkconfigProps): string {
    return JSON.stringify(
        {properties: {subnetResourceId: "string", swiftSupported: "${bool}"}, kind: "string"}
    );
  }
}
