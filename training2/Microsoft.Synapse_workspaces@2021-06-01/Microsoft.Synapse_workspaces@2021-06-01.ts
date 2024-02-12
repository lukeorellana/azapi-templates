import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesProps extends IAzAPIBaseProps {
/**
   * Identity of the workspace
   */
readonly identity?: ManagedIdentity;

/**
   * The type of managed identity for the workspace
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned';

/**
   * The user assigned managed identities.
   */
readonly userAssignedIdentities?: object;

/**
   * Enable or Disable AzureADOnlyAuthentication on All Workspace subresource
   */
readonly azureADOnlyAuthentication?: bool;

/**
   * Initial workspace AAD admin properties for a CSP subscription
   */
readonly cspWorkspaceAdminProperties?: CspWorkspaceAdminProperties;

/**
   * Workspace default data lake storage account details
   */
readonly defaultDataLakeStorage?: DataLakeStorageAccountDetails;

/**
   * The encryption details of the workspace
   */
readonly encryption?: EncryptionDetails;

/**
   * Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.'
   */
readonly managedResourceGroupName?: string;

/**
   * Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user.
   */
readonly managedVirtualNetwork?: string;

/**
   * Managed Virtual Network Settings
   */
readonly managedVirtualNetworkSettings?: ManagedVirtualNetworkSettings;

/**
   * Private endpoint connections to the workspace
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * Enable or Disable public network access to workspace
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Purview Configuration
   */
readonly purviewConfiguration?: PurviewConfiguration;

/**
   * Login for workspace SQL active directory administrator
   */
readonly sqlAdministratorLogin?: string;

/**
   * SQL administrator login password
   */
readonly sqlAdministratorLoginPassword?: string;

/**
   * Is trustedServiceBypassEnabled for the workspace
   */
readonly trustedServiceBypassEnabled?: bool;

/**
   * Virtual Network profile
   */
readonly virtualNetworkProfile?: VirtualNetworkProfile;

/**
   * Git integration settings
   */
readonly workspaceRepositoryConfiguration?: WorkspaceRepositoryConfiguration;

/**
   * AAD object ID of initial workspace admin
   */
readonly initialWorkspaceAdminObjectId?: string;

/**
   * Account URL
   */
readonly accountUrl?: string;

/**
   * Create managed private endpoint to this storage account or not
   */
readonly createManagedPrivateEndpoint?: bool;

/**
   * Filesystem name
   */
readonly filesystem?: string;

/**
   * ARM resource Id of this storage account
   */
readonly resourceId?: string;

/**
   * Customer Managed Key Details
   */
readonly cmk?: CustomerManagedKeyDetails;

/**
   * Key encryption key
   */
readonly kekIdentity?: KekIdentityProperties;

/**
   * The key object of the workspace
   */
readonly key?: WorkspaceKeyDetails;

/**
   * User assigned identity resource Id
   */
readonly userAssignedIdentity?: string;

/**
   * Boolean specifying whether to use system assigned identity or not
   */
readonly useSystemAssignedIdentity?: For Bicep, you can use theany()function.;

/**
   * Workspace Key sub-resource key vault url
   */
readonly keyVaultUrl?: string;

/**
   * Allowed Aad Tenant Ids For Linking
   */
readonly allowedAadTenantIdsForLinking?: string[];

/**
   * Linked Access Check On Target Resource
   */
readonly linkedAccessCheckOnTargetResource?: bool;

/**
   * Prevent Data Exfiltration
   */
readonly preventDataExfiltration?: bool;

/**
   * The private endpoint which the connection belongs to.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Connection state of the private endpoint connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * The private link service connection description.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: string;

/**
   * Purview Resource ID
   */
readonly purviewResourceId?: string;

/**
   * Subnet ID used for computes in workspace
   */
readonly computeSubnetId?: string;

/**
   * Account name
   */
readonly accountName?: string;

/**
   * Collaboration branch
   */
readonly collaborationBranch?: string;

/**
   * GitHub Enterprise host name. For example:https://github.mydomain.com
   */
readonly hostName?: string;

/**
   * The last commit ID
   */
readonly lastCommitId?: string;

/**
   * VSTS project name
   */
readonly projectName?: string;

/**
   * Repository name
   */
readonly repositoryName?: string;

/**
   * Root folder to use in the repository
   */
readonly rootFolder?: string;

/**
   * The VSTS tenant ID
   */
readonly tenantId?: string;

/**
   * Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration
   */
readonly type?: string;
}

/**
 * SynapseWorkspaces resource
 */
export class SynapseWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesProps): string {
    return JSON.stringify(
        {properties: {azureADOnlyAuthentication: "${bool}", cspWorkspaceAdminProperties: {initialWorkspaceAdminObjectId: "string"}, defaultDataLakeStorage: {accountUrl: "string", createManagedPrivateEndpoint: "${bool}", filesystem: "string", resourceId: "string"}, encryption: {cmk: {kekIdentity: {userAssignedIdentity: "string"}, key: {keyVaultUrl: "string", name: "string"}}}, managedResourceGroupName: "string", managedVirtualNetwork: "string", managedVirtualNetworkSettings: {allowedAadTenantIdsForLinking: ["string"], linkedAccessCheckOnTargetResource: "${bool}", preventDataExfiltration: "${bool}"}, privateEndpointConnections: [{properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}], publicNetworkAccess: "string", purviewConfiguration: {purviewResourceId: "string"}, sqlAdministratorLogin: "string", sqlAdministratorLoginPassword: "string", trustedServiceBypassEnabled: "${bool}", virtualNetworkProfile: {computeSubnetId: "string"}, workspaceRepositoryConfiguration: {accountName: "string", collaborationBranch: "string", hostName: "string", lastCommitId: "string", projectName: "string", repositoryName: "string", rootFolder: "string", tenantId: "string", type: "string"}}}
    );
  }
}
