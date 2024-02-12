import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsBasicpublishingcredentialspoliciesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * trueto allow access to a publishing method; otherwise,false.
   */
readonly allow: bool;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * trueto allow access to a publishing method; otherwise,false.
   */
readonly allow: bool;
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
