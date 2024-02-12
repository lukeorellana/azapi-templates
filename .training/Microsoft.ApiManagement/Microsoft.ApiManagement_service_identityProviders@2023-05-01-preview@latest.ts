import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceIdentityprovidersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceIdentityproviders resource
 */
export class ApimanagementServiceIdentityproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceIdentityprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/identityProviders@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceIdentityprovidersProps): string {
    return JSON.stringify(
        {properties: {allowedTenants: ["string"], authority: "string", clientId: "string", clientLibrary: "string", clientSecret: "string", passwordResetPolicyName: "string", profileEditingPolicyName: "string", signinPolicyName: "string", signinTenant: "string", signupPolicyName: "string", type: "string"}}
    );
  }
}
