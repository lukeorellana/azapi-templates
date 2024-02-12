import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesProps extends IAzAPIBaseProps {
/**
   * Managed service identity of the factory.
   */
readonly identity?: FactoryIdentity;

/**
   * The identity type.
   */
readonly type: 'SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * List of user assigned identities for the factory.
   */
readonly userAssignedIdentities?: object;

/**
   * Properties to enable Customer Managed Key for the factory.
   */
readonly encryption?: EncryptionConfiguration;

/**
   * List of parameters for factory.
   */
readonly globalParameters?: object;

/**
   * Whether or not public network access is allowed for the data factory.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Purview information of the factory.
   */
readonly purviewConfiguration?: PurviewConfiguration;

/**
   * Git repo information of the factory.
   */
readonly repoConfiguration?: FactoryRepoConfiguration;

/**
   * User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used.
   */
readonly identity?: CMKIdentityDefinition;

/**
   * The name of the key in Azure Key Vault to use as Customer Managed Key.
   */
readonly keyName: string;

/**
   * The version of the key used for CMK. If not provided, latest version will be used.
   */
readonly keyVersion?: string;

/**
   * The url of the Azure Key Vault used for CMK.
   */
readonly vaultBaseUrl: string;

/**
   * The resource id of the user assigned identity to authenticate to customer's key vault.
   */
readonly userAssignedIdentity?: string;

/**
   * Purview resource id.
   */
readonly purviewResourceId?: string;

/**
   * Account name.
   */
readonly accountName: string;

/**
   * Collaboration branch.
   */
readonly collaborationBranch: string;

/**
   * Disable manual publish operation in ADF studio to favor automated publish.
   */
readonly disablePublish?: bool;

/**
   * Last commit id.
   */
readonly lastCommitId?: string;

/**
   * Repository name.
   */
readonly repositoryName: string;

/**
   * Root folder.
   */
readonly rootFolder: string;

/**
   * Set the object type
   */
readonly type: FactoryGitHubConfigurationFactoryVSTSConfiguration;

/**
   * Type of repo configuration.
   */
readonly type: 'FactoryGitHubConfiguration';

/**
   * GitHub bring your own app client id.
   */
readonly clientId?: string;

/**
   * GitHub bring your own app client secret information.
   */
readonly clientSecret?: GitHubClientSecret;

/**
   * GitHub Enterprise host name. For example:https://github.mydomain.com
   */
readonly hostName?: string;

/**
   * Bring your own app client secret AKV URL.
   */
readonly byoaSecretAkvUrl?: string;

/**
   * Bring your own app client secret name in AKV.
   */
readonly byoaSecretName?: string;

/**
   * Type of repo configuration.
   */
readonly type: 'FactoryVSTSConfiguration';

/**
   * VSTS project name.
   */
readonly projectName: string;

/**
   * VSTS tenant id.
   */
readonly tenantId?: string;
}

/**
 * DatafactoryFactories resource
 */
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
