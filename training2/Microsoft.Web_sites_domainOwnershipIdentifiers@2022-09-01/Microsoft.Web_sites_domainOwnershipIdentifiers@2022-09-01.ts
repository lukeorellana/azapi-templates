import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesDomainownershipidentifiersProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * String representation of the identity.
   */
readonly id?: string;
}

/**
 * WebSitesDomainownershipidentifiers resource
 */
export class WebSitesDomainownershipidentifiers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesDomainownershipidentifiersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/domainOwnershipIdentifiers@2022-09-01";
  }

  protected getResourceBody(props: WebSitesDomainownershipidentifiersProps): string {
    return JSON.stringify(
        {properties: {id: "string"}, kind: "string"}
    );
  }
}
