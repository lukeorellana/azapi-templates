import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsQueueservicesQueuesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsQueueservicesQueues resource
 */
export class StorageStorageaccountsQueueservicesQueues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsQueueservicesQueuesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/queueServices/queues@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsQueueservicesQueuesProps): string {
    return JSON.stringify(
        {properties: {metadata: {}}}
    );
  }
}
