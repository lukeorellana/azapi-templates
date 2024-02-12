import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBasicauthProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesBasicauth resource
 */
export class WebStaticsitesBasicauth extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBasicauthProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/basicAuth@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBasicauthProps): string {
    return JSON.stringify(
        {properties: {applicableEnvironmentsMode: "string", environments: ["string"], password: "string", secretUrl: "string"}, kind: "string"}
    );
  }
}
