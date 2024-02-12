import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesSyncgroupsServerendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:syncGroups;

/**
   * Cloud Tiering.
   */
readonly cloudTiering?: 'off''on';

/**
   * Friendly Name
   */
readonly friendlyName?: string;

/**
   * Policy for how namespace and files are recalled during FastDr.
   */
readonly initialDownloadPolicy?: 'AvoidTieredFiles''NamespaceOnly''NamespaceThenModifiedFiles';

/**
   * Policy for how the initial upload sync session is performed.
   */
readonly initialUploadPolicy?: 'Merge''ServerAuthoritative';

/**
   * Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
   */
readonly localCacheMode?: 'DownloadNewAndModifiedFiles''UpdateLocallyCachedFiles';

/**
   * Offline data transfer
   */
readonly offlineDataTransfer?: 'off''on';

/**
   * Offline data transfer share name
   */
readonly offlineDataTransferShareName?: string;

/**
   * Server Local path.
   */
readonly serverLocalPath?: string;

/**
   * Server Resource Id.
   */
readonly serverResourceId?: string;

/**
   * Tier files older than days.
   */
readonly tierFilesOlderThanDays?: number;

/**
   * Level of free space to be maintained by Cloud Tiering if it is enabled.
   */
readonly volumeFreeSpacePercent?: number;
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
