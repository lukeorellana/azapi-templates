import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DomainregistrationDomainsDomainownershipidentifiersProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:domains;

/**
   * Ownership Id.
   */
readonly ownershipId?: string;
}

/**
 * DomainregistrationDomainsDomainownershipidentifiers resource
 */
export class DomainregistrationDomainsDomainownershipidentifiers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DomainregistrationDomainsDomainownershipidentifiersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2022-09-01";
  }

  protected getResourceBody(props: DomainregistrationDomainsDomainownershipidentifiersProps): string {
    return JSON.stringify(
        {properties: {ownershipId: "string"}, kind: "string"}
    );
  }
}
