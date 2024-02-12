import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPrivateaccessProps extends IAzAPIBaseProps {

}

/**
 * WebSitesPrivateaccess resource
 */
export class WebSitesPrivateaccess extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesPrivateaccessProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/privateAccess@2022-09-01";
  }

  protected getResourceBody(props: WebSitesPrivateaccessProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", virtualNetworks: [{key: "${int}", name: "string", resourceId: "string", subnets: [{key: "${int}", name: "string"}]}]}, kind: "string"}
    );
  }
}
