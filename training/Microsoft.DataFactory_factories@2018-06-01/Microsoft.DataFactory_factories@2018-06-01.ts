import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DatafactoryFactoriesProps extends IAzAPIBaseProps {

}

export class DatafactoryFactories extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesProps): string {
    return JSON.stringify(
      {properties: {encryption: {identity: {userAssignedIdentity: "string"}, keyName: "string", keyVersion: "string", vaultBaseUrl: "string"}, globalParameters: {}, publicNetworkAccess: "string", purviewConfiguration: {purviewResourceId: "string"}, repoConfiguration: {accountName: "string", collaborationBranch: "string", disablePublish: "${bool}", lastCommitId: "string", repositoryName: "string", rootFolder: "string", type: "string"}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
// | location | The resource location. | string |
// | tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | identity | Managed service identity of the factory. | FactoryIdentity |
// | properties | Properties of the factory. | FactoryProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | The identity type. | 'SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
// | userAssignedIdentities | List of user assigned identities for the factory. | object |

// | Name | Description | Value |
// |-|-|-|
// | encryption | Properties to enable Customer Managed Key for the factory. | EncryptionConfiguration |
// | globalParameters | List of parameters for factory. | object |
// | publicNetworkAccess | Whether or not public network access is allowed for the data factory. | 'Disabled''Enabled' |
// | purviewConfiguration | Purview information of the factory. | PurviewConfiguration |
// | repoConfiguration | Git repo information of the factory. | FactoryRepoConfiguration |

// | Name | Description | Value |
// |-|-|-|
// | identity | User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used. | CMKIdentityDefinition |
// | keyName | The name of the key in Azure Key Vault to use as Customer Managed Key. | string (required) |
// | keyVersion | The version of the key used for CMK. If not provided, latest version will be used. | string |
// | vaultBaseUrl | The url of the Azure Key Vault used for CMK. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | userAssignedIdentity | The resource id of the user assigned identity to authenticate to customer's key vault. | string |

// | Name | Description | Value |
// |-|-|-|
// | purviewResourceId | Purview resource id. | string |

// | Name | Description | Value |
// |-|-|-|
// | accountName | Account name. | string (required) |
// | collaborationBranch | Collaboration branch. | string (required) |
// | disablePublish | Disable manual publish operation in ADF studio to favor automated publish. | bool |
// | lastCommitId | Last commit id. | string |
// | repositoryName | Repository name. | string (required) |
// | rootFolder | Root folder. | string (required) |
// | type | Set the object type | FactoryGitHubConfigurationFactoryVSTSConfiguration(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of repo configuration. | 'FactoryGitHubConfiguration' (required) |
// | clientId | GitHub bring your own app client id. | string |
// | clientSecret | GitHub bring your own app client secret information. | GitHubClientSecret |
// | hostName | GitHub Enterprise host name. For example:https://github.mydomain.com | string |

// | Name | Description | Value |
// |-|-|-|
// | byoaSecretAkvUrl | Bring your own app client secret AKV URL. | string |
// | byoaSecretName | Bring your own app client secret name in AKV. | string |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of repo configuration. | 'FactoryVSTSConfiguration' (required) |
// | projectName | VSTS project name. | string (required) |
// | tenantId | VSTS tenant id. | string |
