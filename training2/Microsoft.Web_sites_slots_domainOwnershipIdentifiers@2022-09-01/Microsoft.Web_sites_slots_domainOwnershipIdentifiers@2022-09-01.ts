import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsDomainownershipidentifiersProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * String representation of the identity.
   */
readonly id?: string;
}

/**
 * WebSitesSlotsDomainownershipidentifiers resource
 */
export class WebSitesSlotsDomainownershipidentifiers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsDomainownershipidentifiersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsDomainownershipidentifiersProps): string {
    return JSON.stringify(
        {properties: {id: "string"}, kind: "string"}
    );
  }
}
