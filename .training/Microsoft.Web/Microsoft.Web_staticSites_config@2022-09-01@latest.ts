import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesConfigProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesConfig resource
 */
export class WebStaticsitesConfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesConfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/config@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesConfigProps): string {
    return JSON.stringify(
        {properties: {}, kind: "string"}
    );
  }
}
