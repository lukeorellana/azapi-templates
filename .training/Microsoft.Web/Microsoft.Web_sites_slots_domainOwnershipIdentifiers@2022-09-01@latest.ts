import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsDomainownershipidentifiersProps extends IAzAPIBaseProps {

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
