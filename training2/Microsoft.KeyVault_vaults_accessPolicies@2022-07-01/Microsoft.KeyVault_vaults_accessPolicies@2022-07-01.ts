import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsAccesspoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
   */
readonly accessPolicies: AccessPolicyEntry[];

/**
   * Application ID of the client making request on behalf of a principal
   */
readonly applicationId?: string;

/**
   * The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
   */
readonly objectId: string;

/**
   * Permissions the identity has for keys, secrets and certificates.
   */
readonly permissions: Permissions;

/**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
   */
readonly tenantId: string;

/**
   * Permissions to certificates
   */
readonly certificates?: String array containing any of:'all''backup''create''delete''deleteissuers''get''getissuers''import''list''listissuers''managecontacts''manageissuers''purge''recover''restore''setissuers''update';

/**
   * Permissions to keys
   */
readonly keys?: String array containing any of:'all''backup''create''decrypt''delete''encrypt''get''getrotationpolicy''import''list''purge''recover''release''restore''rotate''setrotationpolicy''sign''unwrapKey''update''verify''wrapKey';

/**
   * Permissions to secrets
   */
readonly secrets?: String array containing any of:'all''backup''delete''get''list''purge''recover''restore''set';

/**
   * Permissions to storage accounts
   */
readonly storage?: String array containing any of:'all''backup''delete''deletesas''get''getsas''list''listsas''purge''recover''regeneratekey''restore''set''setsas''update';
}

/**
 * KeyvaultVaultsAccesspolicies resource
 */
export class KeyvaultVaultsAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/accessPolicies@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {accessPolicies: [{applicationId: "string", objectId: "string", permissions: {certificates: ["string"], keys: ["string"], secrets: ["string"], storage: ["string"]}, tenantId: "string"}]}}
    );
  }
}
