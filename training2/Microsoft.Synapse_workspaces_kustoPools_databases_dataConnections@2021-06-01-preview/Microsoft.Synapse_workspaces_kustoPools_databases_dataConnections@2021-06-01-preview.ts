import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsDatabasesDataconnectionsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: EventGridEventHubIotHub;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Kind of the endpoint for the data connection
   */
readonly kind: 'EventGrid';

/**
   * The name of blob storage event type to process.
   */
readonly blobStorageEventType?: 'Microsoft.Storage.BlobCreated''Microsoft.Storage.BlobRenamed';

/**
   * The event hub consumer group.
   */
readonly consumerGroup: string;

/**
   * The data format of the message. Optionally the data format can be added to each message.
   */
readonly dataFormat?: 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE';

/**
   * The resource ID where the event grid is configured to send events.
   */
readonly eventHubResourceId: string;

/**
   * A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
   */
readonly ignoreFirstRecord?: bool;

/**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
   */
readonly mappingRuleName?: string;

/**
   * The resource ID of the storage account where the data resides.
   */
readonly storageAccountResourceId: string;

/**
   * The table where the data should be ingested. Optionally the table information can be added to each message.
   */
readonly tableName?: string;

/**
   * Kind of the endpoint for the data connection
   */
readonly kind: 'EventHub';

/**
   * The event hub messages compression type
   */
readonly compression?: 'GZip''None';

/**
   * The event hub consumer group.
   */
readonly consumerGroup: string;

/**
   * The data format of the message. Optionally the data format can be added to each message.
   */
readonly dataFormat?: 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE';

/**
   * The resource ID of the event hub to be used to create a data connection.
   */
readonly eventHubResourceId: string;

/**
   * System properties of the event hub
   */
readonly eventSystemProperties?: string[];

/**
   * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub.
   */
readonly managedIdentityResourceId?: string;

/**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
   */
readonly mappingRuleName?: string;

/**
   * The table where the data should be ingested. Optionally the table information can be added to each message.
   */
readonly tableName?: string;

/**
   * Kind of the endpoint for the data connection
   */
readonly kind: 'IotHub';

/**
   * The iot hub consumer group.
   */
readonly consumerGroup: string;

/**
   * The data format of the message. Optionally the data format can be added to each message.
   */
readonly dataFormat?: 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE';

/**
   * System properties of the iot hub
   */
readonly eventSystemProperties?: string[];

/**
   * The resource ID of the Iot hub to be used to create a data connection.
   */
readonly iotHubResourceId: string;

/**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
   */
readonly mappingRuleName?: string;

/**
   * The name of the share access policy
   */
readonly sharedAccessPolicyName: string;

/**
   * The table where the data should be ingested. Optionally the table information can be added to each message.
   */
readonly tableName?: string;
}

/**
 * SynapseWorkspacesKustopoolsDatabasesDataconnections resource
 */
export class SynapseWorkspacesKustopoolsDatabasesDataconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsDatabasesDataconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsDatabasesDataconnectionsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
