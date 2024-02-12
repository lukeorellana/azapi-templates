import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsTableservicesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsTableservices resource
 */
export class StorageStorageaccountsTableservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsTableservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/tableServices@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsTableservicesProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAgeInSeconds: "${int}"}]}}}
    );
  }
}
