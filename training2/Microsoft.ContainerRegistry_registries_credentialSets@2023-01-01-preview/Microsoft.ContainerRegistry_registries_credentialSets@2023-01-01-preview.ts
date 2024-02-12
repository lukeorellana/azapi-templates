import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesCredentialsetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * Identities associated with the resource. This is used to access the KeyVault secrets.
   */
readonly identity?: IdentityProperties;

/**
   * The principal ID of resource identity.
   */
readonly principalId?: string;

/**
   * The tenant ID of resource.
   */
readonly tenantId?: string;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * List of authentication credentials stored for an upstream.Usually consists of a primary and an optional secondary credential.
   */
readonly authCredentials?: AuthCredential[];

/**
   * The credentials are stored for this upstream or login server.
   */
readonly loginServer?: string;

/**
   * KeyVault Secret URI for accessing the password.
   */
readonly passwordSecretIdentifier?: string;

/**
   * KeyVault Secret URI for accessing the username.
   */
readonly usernameSecretIdentifier?: string;
}

/**
 * ContainerregistryRegistriesCredentialsets resource
 */
export class ContainerregistryRegistriesCredentialsets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesCredentialsetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesCredentialsetsProps): string {
    return JSON.stringify(
        {properties: {authCredentials: [{name: "Credential1", passwordSecretIdentifier: "string", usernameSecretIdentifier: "string"}], loginServer: "string"}}
    );
  }
}
