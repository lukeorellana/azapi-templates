import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceAuthorizationprovidersAuthorizationsAccesspoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:authorizations;

/**
   * The allowed Azure Active Directory Application IDs
   */
readonly appIds?: string[];

/**
   * The Object Id
   */
readonly objectId?: string;

/**
   * The Tenant Id
   */
readonly tenantId?: string;
}

/**
 * ApimanagementServiceAuthorizationprovidersAuthorizationsAccesspolicies resource
 */
export class ApimanagementServiceAuthorizationprovidersAuthorizationsAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceAuthorizationprovidersAuthorizationsAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/authorizationProviders/authorizations/accessPolicies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceAuthorizationprovidersAuthorizationsAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {appIds: ["string"], objectId: "string", tenantId: "string"}}
    );
  }
}
