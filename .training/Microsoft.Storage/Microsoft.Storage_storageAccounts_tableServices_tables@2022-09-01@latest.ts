import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsTableservicesTablesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsTableservicesTables resource
 */
export class StorageStorageaccountsTableservicesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsTableservicesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsTableservicesTablesProps): string {
    return JSON.stringify(
        {properties: {signedIdentifiers: [{accessPolicy: {expiryTime: "string", permission: "string", startTime: "string"}, id: "string"}]}}
    );
  }
}
