import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsPrivateaccessProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsPrivateaccess resource
 */
export class WebSitesSlotsPrivateaccess extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsPrivateaccessProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/privateAccess@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsPrivateaccessProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", virtualNetworks: [{key: "${int}", name: "string", resourceId: "string", subnets: [{key: "${int}", name: "string"}]}]}, kind: "string"}
    );
  }
}
