import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceAuthorizationprovidersAuthorizationsAccesspoliciesProps extends IAzAPIBaseProps {

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
