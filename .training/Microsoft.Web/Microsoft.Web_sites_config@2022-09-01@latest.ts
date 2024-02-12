import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesConfigProps extends IAzAPIBaseProps {

}

/**
 * WebSitesConfig resource
 */
export class WebSitesConfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesConfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/config@2022-09-01";
  }

  protected getResourceBody(props: WebSitesConfigProps): string {
    return JSON.stringify(
        {properties: {}, kind: "string"}
    );
  }
}
