import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsEncryptionscopesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
   */
readonly keyVaultProperties?: EncryptionScopeKeyVaultProperties;

/**
   * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
   */
readonly requireInfrastructureEncryption?: bool;

/**
   * The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
   */
readonly source?: 'Microsoft.KeyVault''Microsoft.Storage';

/**
   * The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope.
   */
readonly keyUri?: string;
}

/**
 * StorageStorageaccountsEncryptionscopes resource
 */
export class StorageStorageaccountsEncryptionscopes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsEncryptionscopesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/encryptionScopes@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsEncryptionscopesProps): string {
    return JSON.stringify(
        {properties: {keyVaultProperties: {keyUri: "string"}, requireInfrastructureEncryption: "${bool}", source: "string", state: "string"}}
    );
  }
}
