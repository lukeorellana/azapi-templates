import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesDeploymentsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesDeployments resource
 */
export class WebSitesDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/deployments@2022-09-01";
  }

  protected getResourceBody(props: WebSitesDeploymentsProps): string {
    return JSON.stringify(
        {properties: {active: "${bool}", author: "string", author_email: "string", deployer: "string", details: "string", end_time: "string", message: "string", start_time: "string", status: "${int}"}, kind: "string"}
    );
  }
}
