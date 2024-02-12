import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsQueueservicesQueuesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:queueServices;

/**
   * A name-value pair that represents queue metadata.
   */
readonly metadata?: object;
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
