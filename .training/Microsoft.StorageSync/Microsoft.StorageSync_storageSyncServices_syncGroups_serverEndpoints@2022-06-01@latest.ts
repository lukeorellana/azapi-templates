import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesSyncgroupsServerendpointsProps extends IAzAPIBaseProps {

}

/**
 * StoragesyncStoragesyncservicesSyncgroupsServerendpoints resource
 */
export class StoragesyncStoragesyncservicesSyncgroupsServerendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragesyncStoragesyncservicesSyncgroupsServerendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2022-06-01";
  }

  protected getResourceBody(props: StoragesyncStoragesyncservicesSyncgroupsServerendpointsProps): string {
    return JSON.stringify(
        {properties: {cloudTiering: "string", friendlyName: "string", initialDownloadPolicy: "string", initialUploadPolicy: "string", localCacheMode: "string", offlineDataTransfer: "string", offlineDataTransferShareName: "string", serverLocalPath: "string", serverResourceId: "string", tierFilesOlderThanDays: "${int}", volumeFreeSpacePercent: "${int}"}}
    );
  }
}
