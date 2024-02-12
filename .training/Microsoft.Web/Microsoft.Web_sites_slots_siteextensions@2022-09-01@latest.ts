import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsSiteextensionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsSiteextensions resource
 */
export class WebSitesSlotsSiteextensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsSiteextensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/siteextensions@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsSiteextensionsProps): string {
    return JSON.stringify(
        
    );
  }
}
