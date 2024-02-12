import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapseWorkspacesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-50Valid characters:Lowercase letters, hyphens, and numbers.Start and end with letter or number.Can't contain-ondemandResource name must be unique across Azure. |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | identity | Identity of the workspace | ManagedIdentity |
// | properties | Workspace resource properties | WorkspaceProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | The type of managed identity for the workspace | 'None''SystemAssigned''SystemAssigned,UserAssigned' |
// | userAssignedIdentities | The user assigned managed identities. | object |

// | Name | Description | Value |
// |-|-|-|
// | azureADOnlyAuthentication | Enable or Disable AzureADOnlyAuthentication on All Workspace subresource | bool |
// | cspWorkspaceAdminProperties | Initial workspace AAD admin properties for a CSP subscription | CspWorkspaceAdminProperties |
// | defaultDataLakeStorage | Workspace default data lake storage account details | DataLakeStorageAccountDetails |
// | encryption | The encryption details of the workspace | EncryptionDetails |
// | managedResourceGroupName | Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.' | string |
// | managedVirtualNetwork | Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user. | string |
// | managedVirtualNetworkSettings | Managed Virtual Network Settings | ManagedVirtualNetworkSettings |
// | privateEndpointConnections | Private endpoint connections to the workspace | PrivateEndpointConnection[] |
// | publicNetworkAccess | Enable or Disable public network access to workspace | 'Disabled''Enabled' |
// | purviewConfiguration | Purview Configuration | PurviewConfiguration |
// | sqlAdministratorLogin | Login for workspace SQL active directory administrator | string |
// | sqlAdministratorLoginPassword | SQL administrator login password | string |
// | trustedServiceBypassEnabled | Is trustedServiceBypassEnabled for the workspace | bool |
// | virtualNetworkProfile | Virtual Network profile | VirtualNetworkProfile |
// | workspaceRepositoryConfiguration | Git integration settings | WorkspaceRepositoryConfiguration |

// | Name | Description | Value |
// |-|-|-|
// | initialWorkspaceAdminObjectId | AAD object ID of initial workspace admin | string |

// | Name | Description | Value |
// |-|-|-|
// | accountUrl | Account URL | string |
// | createManagedPrivateEndpoint | Create managed private endpoint to this storage account or not | bool |
// | filesystem | Filesystem name | string |
// | resourceId | ARM resource Id of this storage account | string |

// | Name | Description | Value |
// |-|-|-|
// | cmk | Customer Managed Key Details | CustomerManagedKeyDetails |

// | Name | Description | Value |
// |-|-|-|
// | kekIdentity | Key encryption key | KekIdentityProperties |
// | key | The key object of the workspace | WorkspaceKeyDetails |

// | Name | Description | Value |
// |-|-|-|
// | userAssignedIdentity | User assigned identity resource Id | string |
// | useSystemAssignedIdentity | Boolean specifying whether to use system assigned identity or not | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | keyVaultUrl | Workspace Key sub-resource key vault url | string |
// | name | Workspace Key sub-resource name | string |

// | Name | Description | Value |
// |-|-|-|
// | allowedAadTenantIdsForLinking | Allowed Aad Tenant Ids For Linking | string[] |
// | linkedAccessCheckOnTargetResource | Linked Access Check On Target Resource | bool |
// | preventDataExfiltration | Prevent Data Exfiltration | bool |

// | Name | Description | Value |
// |-|-|-|
// | properties | Private endpoint connection properties. | PrivateEndpointConnectionProperties |

// | Name | Description | Value |
// |-|-|-|
// | privateEndpoint | The private endpoint which the connection belongs to. | PrivateEndpoint |
// | privateLinkServiceConnectionState | Connection state of the private endpoint connection. | PrivateLinkServiceConnectionState |

// | Name | Description | Value |
// |-|-|-|
// | description | The private link service connection description. | string |
// | status | The private link service connection status. | string |

// | Name | Description | Value |
// |-|-|-|
// | purviewResourceId | Purview Resource ID | string |

// | Name | Description | Value |
// |-|-|-|
// | computeSubnetId | Subnet ID used for computes in workspace | string |

// | Name | Description | Value |
// |-|-|-|
// | accountName | Account name | string |
// | collaborationBranch | Collaboration branch | string |
// | hostName | GitHub Enterprise host name. For example:https://github.mydomain.com | string |
// | lastCommitId | The last commit ID | string |
// | projectName | VSTS project name | string |
// | repositoryName | Repository name | string |
// | rootFolder | Root folder to use in the repository | string |
// | tenantId | The VSTS tenant ID | string |
// | type | Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration | string |
