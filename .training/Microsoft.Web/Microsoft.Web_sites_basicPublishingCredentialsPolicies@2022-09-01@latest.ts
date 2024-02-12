import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesBasicpublishingcredentialspoliciesProps extends IAzAPIBaseProps {

}

/**
 * WebSitesBasicpublishingcredentialspolicies resource
 */
export class WebSitesBasicpublishingcredentialspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesBasicpublishingcredentialspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01";
  }

  protected getResourceBody(props: WebSitesBasicpublishingcredentialspoliciesProps): string {
    return JSON.stringify(
        {properties: {allow: "${bool}"}, kind: "string"}
    );
  }
}
