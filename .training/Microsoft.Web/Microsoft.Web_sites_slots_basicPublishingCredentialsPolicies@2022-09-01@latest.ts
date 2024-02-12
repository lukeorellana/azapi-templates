import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsBasicpublishingcredentialspoliciesProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsBasicpublishingcredentialspolicies resource
 */
export class WebSitesSlotsBasicpublishingcredentialspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsBasicpublishingcredentialspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsBasicpublishingcredentialspoliciesProps): string {
    return JSON.stringify(
        {properties: {allow: "${bool}"}, kind: "string"}
    );
  }
}
