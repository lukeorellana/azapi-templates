import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceIdentityprovidersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * List of Allowed Tenants when configuring Azure Active Directory login.
   */
readonly allowedTenants?: string[];

/**
   * OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
   */
readonly authority?: string;

/**
   * Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
   */
readonly clientId: string;

/**
   * The client library to be used in the developer portal. Only applies to AAD and AAD B2C Identity Provider.
   */
readonly clientLibrary?: string;

/**
   * Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
   */
readonly clientSecret: string;

/**
   * Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
   */
readonly passwordResetPolicyName?: string;

/**
   * Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
   */
readonly profileEditingPolicyName?: string;

/**
   * Signin Policy Name. Only applies to AAD B2C Identity Provider.
   */
readonly signinPolicyName?: string;

/**
   * The TenantId to use instead of Common when logging into Active Directory
   */
readonly signinTenant?: string;

/**
   * Signup Policy Name. Only applies to AAD B2C Identity Provider.
   */
readonly signupPolicyName?: string;

/**
   * Identity Provider Type identifier.
   */
readonly type?: 'aad''aadB2C''facebook''google''microsoft''twitter';
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
