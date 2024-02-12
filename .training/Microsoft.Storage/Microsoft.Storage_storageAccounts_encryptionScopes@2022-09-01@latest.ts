import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsEncryptionscopesProps extends IAzAPIBaseProps {

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
