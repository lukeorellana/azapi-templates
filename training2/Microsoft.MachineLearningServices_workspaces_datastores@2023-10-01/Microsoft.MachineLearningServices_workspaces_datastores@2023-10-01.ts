import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * [Required] Account credentials.
   */
readonly credentials: DatastoreCredentials;

/**
   * The asset description text.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly datastoreType: AzureBlobAzureDataLakeGen1AzureDataLakeGen2AzureFile;

/**
   * Set the object type
   */
readonly credentialsType: AccountKeyCertificateNoneSasServicePrincipal;

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly credentialsType: 'AccountKey';

/**
   * [Required] Storage account secrets.
   */
readonly secrets: AccountKeyDatastoreSecrets;

/**
   * Storage account key.
   */
readonly key?: string;

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly secretsType: 'AccountKey''Certificate''Sas''ServicePrincipal';

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly credentialsType: 'Certificate';

/**
   * Authority URL used for authentication.
   */
readonly authorityUrl?: string;

/**
   * [Required] Service principal client ID.
   */
readonly clientId: string Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Resource the service principal has access to.
   */
readonly resourceUrl?: string;

/**
   * [Required] Service principal secrets.
   */
readonly secrets: CertificateDatastoreSecrets;

/**
   * [Required] ID of the tenant to which the service principal belongs.
   */
readonly tenantId: string Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * [Required] Thumbprint of the certificate used for authentication.
   */
readonly thumbprint: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Service principal certificate.
   */
readonly certificate?: string;

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly secretsType: 'AccountKey''Certificate''Sas''ServicePrincipal';

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly credentialsType: 'None';

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly credentialsType: 'Sas';

/**
   * [Required] Storage container secrets.
   */
readonly secrets: SasDatastoreSecrets;

/**
   * Storage container SAS token.
   */
readonly sasToken?: string;

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly secretsType: 'AccountKey''Certificate''Sas''ServicePrincipal';

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly credentialsType: 'ServicePrincipal';

/**
   * Authority URL used for authentication.
   */
readonly authorityUrl?: string;

/**
   * [Required] Service principal client ID.
   */
readonly clientId: string Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Resource the service principal has access to.
   */
readonly resourceUrl?: string;

/**
   * [Required] Service principal secrets.
   */
readonly secrets: ServicePrincipalDatastoreSecrets;

/**
   * [Required] ID of the tenant to which the service principal belongs.
   */
readonly tenantId: string Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Service principal secret.
   */
readonly clientSecret?: string;

/**
   * [Required] Credential type used to authentication with storage.
   */
readonly secretsType: 'AccountKey''Certificate''Sas''ServicePrincipal';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * [Required] Storage type backing the datastore.
   */
readonly datastoreType: 'AzureBlob';

/**
   * Storage account name.
   */
readonly accountName?: string;

/**
   * Storage account container name.
   */
readonly containerName?: string;

/**
   * Azure cloud endpoint for the storage account.
   */
readonly endpoint?: string;

/**
   * Protocol used to communicate with the storage account.
   */
readonly protocol?: string;

/**
   * Azure Resource Group name
   */
readonly resourceGroup?: string;

/**
   * Indicates which identity to use to authenticate service data access to customer's storage.
   */
readonly serviceDataAccessAuthIdentity?: 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity';

/**
   * Azure Subscription Id
   */
readonly subscriptionId?: string;

/**
   * [Required] Storage type backing the datastore.
   */
readonly datastoreType: 'AzureDataLakeGen1';

/**
   * Azure Resource Group name
   */
readonly resourceGroup?: string;

/**
   * Indicates which identity to use to authenticate service data access to customer's storage.
   */
readonly serviceDataAccessAuthIdentity?: 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity';

/**
   * [Required] Azure Data Lake store name.
   */
readonly storeName: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Azure Subscription Id
   */
readonly subscriptionId?: string;

/**
   * [Required] Storage type backing the datastore.
   */
readonly datastoreType: 'AzureDataLakeGen2';

/**
   * [Required] Storage account name.
   */
readonly accountName: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Azure cloud endpoint for the storage account.
   */
readonly endpoint?: string;

/**
   * [Required] The name of the Data Lake Gen2 filesystem.
   */
readonly filesystem: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Protocol used to communicate with the storage account.
   */
readonly protocol?: string;

/**
   * Azure Resource Group name
   */
readonly resourceGroup?: string;

/**
   * Indicates which identity to use to authenticate service data access to customer's storage.
   */
readonly serviceDataAccessAuthIdentity?: 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity';

/**
   * Azure Subscription Id
   */
readonly subscriptionId?: string;

/**
   * [Required] Storage type backing the datastore.
   */
readonly datastoreType: 'AzureFile';

/**
   * [Required] Storage account name.
   */
readonly accountName: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Azure cloud endpoint for the storage account.
   */
readonly endpoint?: string;

/**
   * [Required] The name of the Azure file share that the datastore points to.
   */
readonly fileShareName: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Protocol used to communicate with the storage account.
   */
readonly protocol?: string;

/**
   * Azure Resource Group name
   */
readonly resourceGroup?: string;

/**
   * Indicates which identity to use to authenticate service data access to customer's storage.
   */
readonly serviceDataAccessAuthIdentity?: 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity';

/**
   * Azure Subscription Id
   */
readonly subscriptionId?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
