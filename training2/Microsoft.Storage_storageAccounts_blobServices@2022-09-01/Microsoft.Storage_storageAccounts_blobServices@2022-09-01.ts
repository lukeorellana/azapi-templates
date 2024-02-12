import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsBlobservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * Deprecated in favor of isVersioningEnabled property.
   */
readonly automaticSnapshotPolicyEnabled?: bool;

/**
   * The blob service properties for change feed events.
   */
readonly changeFeed?: ChangeFeed;

/**
   * The blob service properties for container soft delete.
   */
readonly containerDeleteRetentionPolicy?: DeleteRetentionPolicy;

/**
   * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
   */
readonly cors?: CorsRules;

/**
   * DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming requestâs version is not specified. Possible values include version 2008-10-27 and all more recent versions.
   */
readonly defaultServiceVersion?: string;

/**
   * The blob service properties for blob soft delete.
   */
readonly deleteRetentionPolicy?: DeleteRetentionPolicy;

/**
   * Versioning is enabled if set to true.
   */
readonly isVersioningEnabled?: bool;

/**
   * The blob service property to configure last access time based tracking policy.
   */
readonly lastAccessTimeTrackingPolicy?: LastAccessTimeTrackingPolicy;

/**
   * The blob service properties for blob restore policy.
   */
readonly restorePolicy?: RestorePolicyProperties;

/**
   * Indicates whether change feed event logging is enabled for the Blob service.
   */
readonly enabled?: bool;

/**
   * Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed.
   */
readonly retentionInDays?: number;

/**
   * This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share.
   */
readonly allowPermanentDelete?: bool;

/**
   * Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
   */
readonly days?: number;

/**
   * Indicates whether DeleteRetentionPolicy is enabled.
   */
readonly enabled?: bool;

/**
   * The List of CORS rules. You can include up to five CorsRule elements in the request.
   */
readonly corsRules?: CorsRule[];

/**
   * Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
   */
readonly allowedHeaders: string[];

/**
   * Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
   */
readonly allowedMethods: String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT';

/**
   * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
   */
readonly allowedOrigins: string[];

/**
   * Required if CorsRule element is present. A list of response headers to expose to CORS clients.
   */
readonly exposedHeaders: string[];

/**
   * Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
   */
readonly maxAgeInSeconds: number;

/**
   * An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only
   */
readonly blobType?: string[];

/**
   * When set to true last access time based tracking is enabled.
   */
readonly enable: bool;

/**
   * The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1
   */
readonly trackingGranularityInDays?: number;

/**
   * how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
   */
readonly days?: number;

/**
   * Blob restore is enabled if set to true.
   */
readonly enabled: bool;
}

/**
 * StorageStorageaccountsBlobservices resource
 */
export class StorageStorageaccountsBlobservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsBlobservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/blobServices@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsBlobservicesProps): string {
    return JSON.stringify(
        {properties: {automaticSnapshotPolicyEnabled: "${bool}", changeFeed: {enabled: "${bool}", retentionInDays: "${int}"}, containerDeleteRetentionPolicy: {allowPermanentDelete: "${bool}", days: "${int}", enabled: "${bool}"}, cors: {corsRules: [{allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAgeInSeconds: "${int}"}]}, defaultServiceVersion: "string", deleteRetentionPolicy: {allowPermanentDelete: "${bool}", days: "${int}", enabled: "${bool}"}, isVersioningEnabled: "${bool}", lastAccessTimeTrackingPolicy: {blobType: ["string"], enable: "${bool}", name: "AccessTimeTracking", trackingGranularityInDays: "${int}"}, restorePolicy: {days: "${int}", enabled: "${bool}"}}}
    );
  }
}
