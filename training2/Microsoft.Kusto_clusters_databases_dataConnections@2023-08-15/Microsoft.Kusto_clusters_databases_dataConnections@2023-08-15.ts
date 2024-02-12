import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesDataconnectionsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: CosmosDbEventGridEventHubIotHub;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Kind of the endpoint for the data connection
   */
readonly kind: 'CosmosDb';

/**
   * The resource ID of the Cosmos DB account used to create the data connection.
   */
readonly cosmosDbAccountResourceId: string;

/**
   * The name of an existing container in the Cosmos DB database.
   */
readonly cosmosDbContainer: string;

/**
   * The name of an existing database in the Cosmos DB account.
   */
readonly cosmosDbDatabase: string;

/**
   * The resource ID of a managed system or user-assigned identity. The identity is used to authenticate with Cosmos DB.
   */
readonly managedIdentityResourceId: string;

/**
   * The name of an existing mapping rule to use when ingesting the retrieved data.
   */
readonly mappingRuleName?: string;

/**
   * Optional. If defined, the data connection retrieves Cosmos DB documents created or updated after the specified retrieval start date.
   */
readonly retrievalStartDate?: string;

/**
   * The case-sensitive name of the existing target table in your cluster. Retrieved data is ingested into this table.
   */
readonly tableName: string;

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
   * Indication for database routing information from the data connection, by default only database routing information is allowed
   */
readonly databaseRouting?: 'Multi''Single';

/**
   * The data format of the message. Optionally the data format can be added to each message.
   */
readonly dataFormat?: 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE';

/**
   * The resource ID of the event grid that is subscribed to the storage account events.
   */
readonly eventGridResourceId?: string;

/**
   * The resource ID where the event grid is configured to send events.
   */
readonly eventHubResourceId: string;

/**
   * A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
   */
readonly ignoreFirstRecord?: bool;

/**
   * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub and storage account.
   */
readonly managedIdentityResourceId?: string;

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
   * Indication for database routing information from the data connection, by default only database routing information is allowed
   */
readonly databaseRouting?: 'Multi''Single';

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
   * When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
   */
readonly retrievalStartDate?: string;

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
   * Indication for database routing information from the data connection, by default only database routing information is allowed
   */
readonly databaseRouting?: 'Multi''Single';

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
   * When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
   */
readonly retrievalStartDate?: string;

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
 * KustoClustersDatabasesDataconnections resource
 */
export class KustoClustersDatabasesDataconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesDataconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases/dataConnections@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesDataconnectionsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
