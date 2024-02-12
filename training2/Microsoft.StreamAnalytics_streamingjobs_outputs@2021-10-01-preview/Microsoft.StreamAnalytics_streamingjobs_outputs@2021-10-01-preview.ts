import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsOutputsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:streamingjobs;

/**
   * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly datasource?: OutputDataSource;

/**
   * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
   */
readonly serialization?: Serialization;

/**
   * The size window to constrain a Stream Analytics output to.
   */
readonly sizeWindow?: number;

/**
   * The time frame for filtering Stream Analytics job outputs.
   */
readonly timeWindow?: string;

/**
   * Settings which determine whether to send watermarks to downstream.
   */
readonly watermarkSettings?: OutputWatermarkProperties;

/**
   * Set the object type
   */
readonly type: GatewayMessageBusMicrosoft.AzureFunctionMicrosoft.DataLake/AccountsMicrosoft.DBForPostgreSQL/servers/databasesMicrosoft.EventHub/EventHubMicrosoft.Kusto/clusters/databasesMicrosoft.ServiceBus/EventHubMicrosoft.ServiceBus/QueueMicrosoft.ServiceBus/TopicMicrosoft.Sql/Server/DatabaseMicrosoft.Sql/Server/DataWarehouseMicrosoft.Storage/BlobMicrosoft.Storage/DocumentDBMicrosoft.Storage/TablePowerBIRaw;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'GatewayMessageBus';

/**
   * The name of the Service Bus topic.
   */
readonly topic?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.AzureFunction';

/**
   * If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
   */
readonly apiKey?: string;

/**
   * The name of your Azure Functions app.
   */
readonly functionAppName?: string;

/**
   * The name of the function in your Azure Functions app.
   */
readonly functionName?: string;

/**
   * A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
   */
readonly maxBatchCount?: number;

/**
   * A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).
   */
readonly maxBatchSize?: number;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.DataLake/Accounts';

/**
   * The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
   */
readonly accountName?: string;

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
   */
readonly dateFormat?: string;

/**
   * The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly filePathPrefix?: string;

/**
   * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
   */
readonly refreshToken?: string;

/**
   * The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
   */
readonly tenantId?: string;

/**
   * The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
   */
readonly timeFormat?: string;

/**
   * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
   */
readonly tokenUserDisplayName?: string;

/**
   * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
   */
readonly tokenUserPrincipalName?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.DBForPostgreSQL/servers/databases';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly database?: string;

/**
   * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
   */
readonly maxWriterCount?: number;

/**
   * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly password?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly server?: string;

/**
   * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly table?: string;

/**
   * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly user?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.EventHub/EventHub';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
   */
readonly eventHubName?: string;

/**
   * The partition count of the event hub data source. Range 1 - 256.
   */
readonly partitionCount?: number;

/**
   * The key/column that is used to determine to which partition to send event data.
   */
readonly partitionKey?: string;

/**
   * The properties associated with this Event Hub output.
   */
readonly propertyColumns?: string[];

/**
   * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
   */
readonly serviceBusNamespace?: string;

/**
   * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyName?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Kusto/clusters/databases';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the Azure Data Explorer cluster. Required on PUT (CreateOrReplace) requests.
   */
readonly cluster?: string;

/**
   * The name of the Azure Data Explorer database. Required on PUT (CreateOrReplace) requests.
   */
readonly database?: string;

/**
   * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
   */
readonly table?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.ServiceBus/EventHub';

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.ServiceBus/Queue';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
   */
readonly propertyColumns?: string[];

/**
   * The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
   */
readonly queueName?: string;

/**
   * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
   */
readonly serviceBusNamespace?: string;

/**
   * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyName?: string;

/**
   * The system properties associated with the Service Bus Queue. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
   */
readonly systemPropertyColumns?: For Bicep, you can use theany()function.;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.ServiceBus/Topic';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
   */
readonly propertyColumns?: string[];

/**
   * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
   */
readonly serviceBusNamespace?: string;

/**
   * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyName?: string;

/**
   * The system properties associated with the Service Bus Topic Output. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
   */
readonly systemPropertyColumns?: ServiceBusTopicOutputDataSourcePropertiesSystemPrope...;

/**
   * The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
   */
readonly topicName?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Sql/Server/Database';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly database?: string;

/**
   * Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
   */
readonly maxBatchCount?: number;

/**
   * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
   */
readonly maxWriterCount?: number;

/**
   * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly password?: string;

/**
   * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly server?: string;

/**
   * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly table?: string;

/**
   * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly user?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Sql/Server/DataWarehouse';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly database?: string;

/**
   * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly password?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly server?: string;

/**
   * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly table?: string;

/**
   * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   */
readonly user?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Storage/Blob';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * Blob path prefix.
   */
readonly blobPathPrefix?: string;

/**
   * Blob write mode.
   */
readonly blobWriteMode?: 'Append''Once';

/**
   * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
   */
readonly container?: string;

/**
   * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
   */
readonly dateFormat?: string;

/**
   * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example.
   */
readonly pathPattern?: string;

/**
   * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
   */
readonly storageAccounts?: StorageAccount[];

/**
   * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
   */
readonly timeFormat?: string;

/**
   * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
   */
readonly accountKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
   */
readonly accountName?: string;

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Storage/DocumentDB';

/**
   * The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
   */
readonly accountId?: string;

/**
   * The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
   */
readonly accountKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section ofhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor more information. Required on PUT (CreateOrReplace) requests.
   */
readonly collectionNamePattern?: string;

/**
   * The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
   */
readonly database?: string;

/**
   * The name of the field in output events used to specify the primary key which insert or update operations are based on.
   */
readonly documentId?: string;

/**
   * The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
   */
readonly partitionKey?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Storage/Table';

/**
   * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
   */
readonly accountKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
   */
readonly accountName?: string;

/**
   * The number of rows to write to the Azure Table at a time.
   */
readonly batchSize?: number;

/**
   * If specified, each item in the array is the name of a column to remove (if present) from output event entities.
   */
readonly columnsToRemove?: string[];

/**
   * This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
   */
readonly partitionKey?: string;

/**
   * This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
   */
readonly rowKey?: string;

/**
   * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
   */
readonly table?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'PowerBI';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
   */
readonly dataset?: string;

/**
   * The ID of the Power BI group.
   */
readonly groupId?: string;

/**
   * The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
   */
readonly groupName?: string;

/**
   * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
   */
readonly refreshToken?: string;

/**
   * The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
   */
readonly table?: string;

/**
   * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
   */
readonly tokenUserDisplayName?: string;

/**
   * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
   */
readonly tokenUserPrincipalName?: string;

/**
   * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Raw';

/**
   * The SAS URL to a blob where the output should be written. If this property is not set, output data will be written into a temporary storage, and a SAS URL to that temporary storage will be included in the result.
   */
readonly payloadUri?: string;

/**
   * Set the object type
   */
readonly type: AvroCsvCustomClrDeltaJsonParquet;

/**
   * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Avro';

/**
   * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Csv';

/**
   * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
   */
readonly encoding?: 'UTF8';

/**
   * Specifies the delimiter that will be used to separate comma-separated value (CSV) records. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a list of supported values. Required on PUT (CreateOrReplace) requests.
   */
readonly fieldDelimiter?: string;

/**
   * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'CustomClr';

/**
   * The serialization class name.
   */
readonly serializationClassName?: string;

/**
   * The serialization library path.
   */
readonly serializationDllPath?: string;

/**
   * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Delta';

/**
   * Specifies the path of the Delta Lake table that the output will be written to.
   */
readonly deltaTablePath: string;

/**
   * Specifies the names of the columns for which the Delta Lake table will be partitioned. We are only supporting 1 partition column, but keeping it as an array for extensibility.
   */
readonly partitionColumns?: string[];

/**
   * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Json';

/**
   * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
   */
readonly encoding?: 'UTF8';

/**
   * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
   */
readonly format?: 'Array''LineSeparated';

/**
   * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Parquet';

/**
   * Describes the maximal delta between the fastest and slowest partitions, so the out of order window that catches all necessary events in downstream jobs is well defined.
   */
readonly maxWatermarkDifferenceAcrossPartitions?: string;

/**
   * The output watermark mode.
   */
readonly watermarkMode?: 'None''SendCurrentPartitionWatermark''SendLowestWatermarkAcrossPartitions';
}

/**
 * StreamanalyticsStreamingjobsOutputs resource
 */
export class StreamanalyticsStreamingjobsOutputs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsOutputsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/outputs@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsOutputsProps): string {
    return JSON.stringify(
        {properties: {datasource: {type: "string"}, serialization: {type: "string"}, sizeWindow: "${int}", timeWindow: "string", watermarkSettings: {maxWatermarkDifferenceAcrossPartitions: "string", watermarkMode: "string"}}}
    );
  }
}
