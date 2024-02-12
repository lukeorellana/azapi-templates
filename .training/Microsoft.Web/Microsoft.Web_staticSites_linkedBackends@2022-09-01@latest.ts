import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesLinkedbackendsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesLinkedbackends resource
 */
export class WebStaticsitesLinkedbackends extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesLinkedbackendsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/linkedBackends@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesLinkedbackendsProps): string {
    return JSON.stringify(
        {properties: {backendResourceId: "string", region: "string"}, kind: "string"}
    );
  }
}
