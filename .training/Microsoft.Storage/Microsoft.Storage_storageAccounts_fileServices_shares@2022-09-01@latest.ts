import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsFileservicesSharesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsFileservicesShares resource
 */
export class StorageStorageaccountsFileservicesShares extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsFileservicesSharesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsFileservicesSharesProps): string {
    return JSON.stringify(
        {properties: {accessTier: "string", enabledProtocols: "string", metadata: {}, rootSquash: "string", shareQuota: "${int}", signedIdentifiers: [{accessPolicy: {expiryTime: "string", permission: "string", startTime: "string"}, id: "string"}]}}
    );
  }
}
