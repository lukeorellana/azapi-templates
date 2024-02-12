import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBuildsLinkedbackendsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesBuildsLinkedbackends resource
 */
export class WebStaticsitesBuildsLinkedbackends extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBuildsLinkedbackendsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/builds/linkedBackends@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBuildsLinkedbackendsProps): string {
    return JSON.stringify(
        {properties: {backendResourceId: "string", region: "string"}, kind: "string"}
    );
  }
}
