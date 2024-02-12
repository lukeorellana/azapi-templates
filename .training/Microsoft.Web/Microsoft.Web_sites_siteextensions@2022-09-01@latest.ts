import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSiteextensionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSiteextensions resource
 */
export class WebSitesSiteextensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSiteextensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/siteextensions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSiteextensionsProps): string {
    return JSON.stringify(
        
    );
  }
}
