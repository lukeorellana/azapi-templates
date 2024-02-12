import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagedservicesRegistrationdefinitionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The details for the Managed Services offerâs plan in Azure Marketplace.
   */
readonly plan?: Plan;

/**
   * Azure Marketplace product code.
   */
readonly product: string;

/**
   * Azure Marketplace publisher ID.
   */
readonly publisher: string;

/**
   * Azure Marketplace plan's version.
   */
readonly version: string;

/**
   * The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
   */
readonly authorizations: Authorization[];

/**
   * The description of the registration definition.
   */
readonly description?: string;

/**
   * The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
   */
readonly eligibleAuthorizations?: EligibleAuthorization[];

/**
   * The identifier of the managedBy tenant.
   */
readonly managedByTenantId: string;

/**
   * The name of the registration definition.
   */
readonly registrationDefinitionName?: string;

/**
   * The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other principals.
   */
readonly delegatedRoleDefinitionIds?: string[];

/**
   * The identifier of the Azure Active Directory principal.
   */
readonly principalId: string;

/**
   * The display name of the Azure Active Directory principal.
   */
readonly principalIdDisplayName?: string;

/**
   * The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.
   */
readonly roleDefinitionId: string;

/**
   * The just-in-time access policy setting.
   */
readonly justInTimeAccessPolicy?: JustInTimeAccessPolicy;

/**
   * The identifier of the Azure Active Directory principal.
   */
readonly principalId: string;

/**
   * The display name of the Azure Active Directory principal.
   */
readonly principalIdDisplayName?: string;

/**
   * The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.
   */
readonly roleDefinitionId: string;

/**
   * The list of managedByTenant approvers for the eligible authorization.
   */
readonly managedByTenantApprovers?: EligibleApprover[];

/**
   * The maximum access duration in ISO 8601 format for just-in-time access requests.
   */
readonly maximumActivationDuration?: string;

/**
   * The multi-factor authorization provider to be used for just-in-time access requests.
   */
readonly multiFactorAuthProvider: 'Azure''None';

/**
   * The identifier of the Azure Active Directory principal.
   */
readonly principalId: string;

/**
   * The display name of the Azure Active Directory principal.
   */
readonly principalIdDisplayName?: string;
}

/**
 * ManagedservicesRegistrationdefinitions resource
 */
export class ManagedservicesRegistrationdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagedservicesRegistrationdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedServices/registrationDefinitions@2022-10-01";
  }

  protected getResourceBody(props: ManagedservicesRegistrationdefinitionsProps): string {
    return JSON.stringify(
        {properties: {authorizations: [{delegatedRoleDefinitionIds: ["string"], principalId: "string", principalIdDisplayName: "string", roleDefinitionId: "string"}], description: "string", eligibleAuthorizations: [{justInTimeAccessPolicy: {managedByTenantApprovers: [{principalId: "string", principalIdDisplayName: "string"}], maximumActivationDuration: "string", multiFactorAuthProvider: "string"}, principalId: "string", principalIdDisplayName: "string", roleDefinitionId: "string"}], managedByTenantId: "string", registrationDefinitionName: "string"}, plan: {name: "string", product: "string", publisher: "string", version: "string"}}
    );
  }
}
