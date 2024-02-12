import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesEventhubsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Properties of capture description
   */
readonly captureDescription?: CaptureDescription;

/**
   * Number of days to retain the events for this Event Hub, value should be 1 to 7 days
   */
readonly messageRetentionInDays?: number;

/**
   * Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
   */
readonly partitionCount?: number;

/**
   * Event Hub retention settings
   */
readonly retentionDescription?: RetentionDescription;

/**
   * Enumerates the possible values for the status of the Event Hub.
   */
readonly status?: 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown';

/**
   * Properties of Destination where capture will be stored. (Storage Account, Blob Names)
   */
readonly destination?: Destination;

/**
   * A value that indicates whether capture description is enabled.
   */
readonly enabled?: bool;

/**
   * Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version
   */
readonly encoding?: 'Avro''AvroDeflate';

/**
   * The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
   */
readonly intervalInSeconds?: number;

/**
   * The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes
   */
readonly sizeLimitInBytes?: number;

/**
   * A value that indicates whether to Skip Empty Archives
   */
readonly skipEmptyArchives?: bool;

/**
   * Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order
   */
readonly archiveNameFormat?: string;

/**
   * Blob container Name
   */
readonly blobContainer?: string;

/**
   * The Azure Data Lake Store name for the captured events
   */
readonly dataLakeAccountName?: string;

/**
   * The destination folder path for the captured events
   */
readonly dataLakeFolderPath?: string;

/**
   * Subscription Id of Azure Data Lake Store
   */
readonly dataLakeSubscriptionId?: string;

/**
   * Resource id of the storage account to be used to create the blobs
   */
readonly storageAccountResourceId?: string;

/**
   * Enumerates the possible values for cleanup policy
   */
readonly cleanupPolicy?: 'Compact''Delete';

/**
   * Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compact the returned value of this property is Long.MaxValue
   */
readonly retentionTimeInHours?: number;

/**
   * Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compact. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub
   */
readonly tombstoneRetentionTimeInHours?: number;
}

/**
 * EventhubNamespacesEventhubs resource
 */
export class EventhubNamespacesEventhubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesEventhubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesEventhubsProps): string {
    return JSON.stringify(
        {properties: {captureDescription: {destination: {name: "string", properties: {archiveNameFormat: "string", blobContainer: "string", dataLakeAccountName: "string", dataLakeFolderPath: "string", dataLakeSubscriptionId: "string", storageAccountResourceId: "string"}}, enabled: "${bool}", encoding: "string", intervalInSeconds: "${int}", sizeLimitInBytes: "${int}", skipEmptyArchives: "${bool}"}, messageRetentionInDays: "${int}", partitionCount: "${int}", retentionDescription: {cleanupPolicy: "string", retentionTimeInHours: "${int}", tombstoneRetentionTimeInHours: "${int}"}, status: "string"}}
    );
  }
}
