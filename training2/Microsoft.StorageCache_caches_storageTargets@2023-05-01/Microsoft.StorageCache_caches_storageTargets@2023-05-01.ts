import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragecacheCachesStoragetargetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:caches;

/**
   * Properties when targetType is blobNfs.
   */
readonly blobNfs?: BlobNfsTarget;

/**
   * Properties when targetType is clfs.
   */
readonly clfs?: ClfsTarget;

/**
   * List of cache namespace junctions to target for namespace associations.
   */
readonly junctions?: NamespaceJunction[];

/**
   * Properties when targetType is nfs3.
   */
readonly nfs3?: Nfs3Target;

/**
   * Storage target operational state.
   */
readonly state?: 'Busy''Flushing''Ready''Suspended';

/**
   * Type of the Storage Target.
   */
readonly targetType: 'blobNfs''clfs''nfs3''unknown';

/**
   * Properties when targetType is unknown.
   */
readonly unknown?: UnknownTarget;

/**
   * Resource ID of the storage container.
   */
readonly target?: string;

/**
   * Identifies the StorageCache usage model to be used for this storage target.
   */
readonly usageModel?: string;

/**
   * Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
   */
readonly verificationTimer?: number;

/**
   * Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.
   */
readonly writeBackTimer?: number;

/**
   * Resource ID of storage container.
   */
readonly target?: string;

/**
   * Namespace path on a cache for a Storage Target.
   */
readonly namespacePath?: string;

/**
   * Name of the access policy applied to this junction.
   */
readonly nfsAccessPolicy?: string;

/**
   * NFS export where targetPath exists.
   */
readonly nfsExport?: string;

/**
   * Path in Storage Target to which namespacePath points.
   */
readonly targetPath?: string;

/**
   * IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
   */
readonly target?: string;

/**
   * Identifies the StorageCache usage model to be used for this storage target.
   */
readonly usageModel?: string;

/**
   * Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates.
   */
readonly verificationTimer?: number;

/**
   * Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage.
   */
readonly writeBackTimer?: number;

/**
   * Dictionary of string->string pairs containing information about the Storage Target.
   */
readonly attributes?: object;
}

/**
 * StoragecacheCachesStoragetargets resource
 */
export class StoragecacheCachesStoragetargets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragecacheCachesStoragetargetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageCache/caches/storageTargets@2023-05-01";
  }

  protected getResourceBody(props: StoragecacheCachesStoragetargetsProps): string {
    return JSON.stringify(
        {properties: {blobNfs: {target: "string", usageModel: "string", verificationTimer: "${int}", writeBackTimer: "${int}"}, clfs: {target: "string"}, junctions: [{namespacePath: "string", nfsAccessPolicy: "string", nfsExport: "string", targetPath: "string"}], nfs3: {target: "string", usageModel: "string", verificationTimer: "${int}", writeBackTimer: "${int}"}, state: "string", targetType: "string", unknown: {attributes: {}}}}
    );
  }
}
