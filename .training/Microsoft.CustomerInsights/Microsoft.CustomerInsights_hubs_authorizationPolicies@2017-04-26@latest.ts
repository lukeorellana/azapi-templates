import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsAuthorizationpoliciesProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsAuthorizationpolicies resource
 */
export class CustomerinsightsHubsAuthorizationpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsAuthorizationpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsAuthorizationpoliciesProps): string {
    return JSON.stringify(
        {properties: {permissions: ["string"], primaryKey: "string", secondaryKey: "string"}}
    );
  }
}
