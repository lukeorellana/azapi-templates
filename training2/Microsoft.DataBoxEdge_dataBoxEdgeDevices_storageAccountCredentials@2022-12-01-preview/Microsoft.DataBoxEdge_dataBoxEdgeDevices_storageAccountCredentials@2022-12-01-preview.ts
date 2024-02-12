import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesStorageaccountcredentialsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Encrypted storage key.
   */
readonly accountKey?: AsymmetricEncryptedSecret;

/**
   * Type of storage accessed on the storage account.
   */
readonly accountType: 'BlobStorage''GeneralPurposeStorage';

/**
   * Alias for the storage account.
   */
readonly alias: string;

/**
   * Blob end point for private clouds.
   */
readonly blobDomainName?: string;

/**
   * Connection string for the storage account. Use this string if username and account key are not specified.
   */
readonly connectionString?: string;

/**
   * Signifies whether SSL needs to be enabled or not.
   */
readonly sslStatus: 'Disabled''Enabled';

/**
   * Id of the storage account.
   */
readonly storageAccountId?: string;

/**
   * Username for the storage account.
   */
readonly userName?: string;

/**
   * The algorithm used to encrypt "Value".
   */
readonly encryptionAlgorithm: 'AES256''None''RSAES_PKCS1_v_1_5';

/**
   * Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null.
   */
readonly encryptionCertThumbprint?: string;

/**
   * The value of the secret.
   */
readonly value: string;
}

/**
 * DataboxedgeDataboxedgedevicesStorageaccountcredentials resource
 */
export class DataboxedgeDataboxedgedevicesStorageaccountcredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesStorageaccountcredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesStorageaccountcredentialsProps): string {
    return JSON.stringify(
        {properties: {accountKey: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, accountType: "string", alias: "string", blobDomainName: "string", connectionString: "string", sslStatus: "string", storageAccountId: "string", userName: "string"}}
    );
  }
}
