import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsBlobservicesProps extends IAzAPIBaseProps {

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
