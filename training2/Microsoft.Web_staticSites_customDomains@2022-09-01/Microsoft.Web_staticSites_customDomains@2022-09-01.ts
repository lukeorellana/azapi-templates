import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesCustomdomainsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:staticSites;

/**
   * Validation method for adding a custom domain
   */
readonly validationMethod?: string;
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
