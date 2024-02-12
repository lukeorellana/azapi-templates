import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesDomainownershipidentifiersProps extends IAzAPIBaseProps {

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
