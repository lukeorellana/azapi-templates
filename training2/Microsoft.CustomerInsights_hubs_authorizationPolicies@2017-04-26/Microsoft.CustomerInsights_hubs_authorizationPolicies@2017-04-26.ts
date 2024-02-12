import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsAuthorizationpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * The permissions associated with the policy.
   */
readonly permissions: String array containing any of:'Manage''Read''Write';

/**
   * Primary key associated with the policy.
   */
readonly primaryKey?: string;

/**
   * Secondary key associated with the policy.
   */
readonly secondaryKey?: string;
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
