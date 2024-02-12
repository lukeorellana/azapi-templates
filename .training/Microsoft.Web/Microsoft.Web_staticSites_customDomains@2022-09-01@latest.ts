import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesCustomdomainsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesCustomdomains resource
 */
export class WebStaticsitesCustomdomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesCustomdomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/customDomains@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesCustomdomainsProps): string {
    return JSON.stringify(
        {properties: {validationMethod: "string"}, kind: "string"}
    );
  }
}
