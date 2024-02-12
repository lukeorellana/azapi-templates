import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsNetworkconfigProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsNetworkconfig resource
 */
export class WebSitesSlotsNetworkconfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsNetworkconfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/networkConfig@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsNetworkconfigProps): string {
    return JSON.stringify(
        {properties: {subnetResourceId: "string", swiftSupported: "${bool}"}, kind: "string"}
    );
  }
}