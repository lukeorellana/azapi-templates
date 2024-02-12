import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlDatabases;

/**
   * The standard JSON format of a ClientEncryptionKey
   */
readonly resource: ClientEncryptionKeyResourceOrClientEncryptionKeyGetP...;

/**
   * Encryption algorithm that will be used along with this client encryption key to encrypt/decrypt data.
   */
readonly encryptionAlgorithm?: string;

/**
   * Name of the ClientEncryptionKey
   */
readonly id?: string;

/**
   * Metadata for the wrapping provider that can be used to unwrap the wrapped client encryption key.
   */
readonly keyWrapMetadata?: KeyWrapMetadata;

/**
   * Wrapped (encrypted) form of the key represented as a byte array.
   */
readonly wrappedDataEncryptionKey?: For Bicep, you can use theany()function.;

/**
   * Algorithm used in wrapping and unwrapping of the data encryption key.
   */
readonly algorithm?: string;

/**
   * ProviderName of KeyStoreProvider.
   */
readonly type?: string;

/**
   * Reference / link to the KeyEncryptionKey.
   */
readonly value?: string;
}

/**
 * DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeys resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeysProps): string {
    return JSON.stringify(
        {properties: {resource: {encryptionAlgorithm: "string", id: "string", keyWrapMetadata: {algorithm: "string", name: "string", type: "string", value: "string"}}}}
    );
  }
}
