import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsQueueservicesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsQueueservices resource
 */
export class StorageStorageaccountsQueueservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsQueueservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/queueServices@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsQueueservicesProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAgeInSeconds: "${int}"}]}}}
    );
  }
}
