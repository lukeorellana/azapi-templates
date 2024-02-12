import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBuildsConfigProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesBuildsConfig resource
 */
export class WebStaticsitesBuildsConfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBuildsConfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/builds/config@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBuildsConfigProps): string {
    return JSON.stringify(
        {properties: {}, kind: "string"}
    );
  }
}
