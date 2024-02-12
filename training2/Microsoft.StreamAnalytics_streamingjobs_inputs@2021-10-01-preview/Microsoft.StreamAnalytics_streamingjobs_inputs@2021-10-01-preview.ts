import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsInputsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:streamingjobs;

/**
   * Describes how input data is compressed
   */
readonly compression?: Compression;

/**
   * partitionKey Describes a key in the input data which is used for partitioning the input data
   */
readonly partitionKey?: string;

/**
   * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
   */
readonly serialization?: Serialization;

/**
   * Settings which determine whether to read watermark events.
   */
readonly watermarkSettings?: InputWatermarkProperties;

/**
   * Set the object type
   */
readonly type: ReferenceStream;

/**
   * Indicates the type of compression that the input uses. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Deflate''GZip''None';

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
   * The input watermark mode.
   */
readonly watermarkMode?: 'None''ReadWatermark';

/**
   * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Reference';

/**
   * Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
   */
readonly datasource?: ReferenceInputDataSource;

/**
   * Set the object type
   */
readonly type: FileMicrosoft.Sql/Server/DatabaseMicrosoft.Storage/BlobRaw;

/**
   * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'File';

/**
   * The path of the file.
   */
readonly path?: string;

/**
   * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Sql/Server/Database';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * This element is associated with the datasource element. This is the name of the database that output will be written to.
   */
readonly database?: string;

/**
   * This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
   */
readonly deltaSnapshotQuery?: string;

/**
   * This element is associated with the datasource element. This query is used to fetch data from the sql database.
   */
readonly fullSnapshotQuery?: string;

/**
   * This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
   */
readonly password?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
   */
readonly refreshRate?: string;

/**
   * Indicates the type of data refresh option.
   */
readonly refreshType?: 'RefreshPeriodicallyWithDelta''RefreshPeriodicallyWithFull''Static';

/**
   * This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
   */
readonly server?: string;

/**
   * This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.
   */
readonly user?: string;

/**
   * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Storage/Blob';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of the blob input.
   */
readonly blobName?: string;

/**
   * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
   */
readonly container?: string;

/**
   * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
   */
readonly dateFormat?: string;

/**
   * The path pattern of the delta snapshot.
   */
readonly deltaPathPattern?: string;

/**
   * The interval that the user generates a delta snapshot of this reference blob input data source.
   */
readonly deltaSnapshotRefreshRate?: string;

/**
   * The refresh interval of the blob input data source.
   */
readonly fullSnapshotRefreshRate?: string;

/**
   * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example.
   */
readonly pathPattern?: string;

/**
   * The partition count of the blob input data source. Range 1 - 256.
   */
readonly sourcePartitionCount?: number;

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
   * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Raw';

/**
   * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
   */
readonly payload?: string;

/**
   * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
   */
readonly payloadUri?: string;

/**
   * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Stream';

/**
   * Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly datasource?: StreamInputDataSource;

/**
   * Set the object type
   */
readonly type: GatewayMessageBusMicrosoft.Devices/IotHubsMicrosoft.EventGrid/EventSubscriptionsMicrosoft.EventHub/EventHubMicrosoft.ServiceBus/EventHubMicrosoft.Storage/BlobRaw;

/**
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'GatewayMessageBus';

/**
   * The name of the Service Bus topic.
   */
readonly topic?: string;

/**
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Devices/IotHubs';

/**
   * The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hubâs default consumer group.
   */
readonly consumerGroupName?: string;

/**
   * The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
   */
readonly endpoint?: string;

/**
   * The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
   */
readonly iotHubNamespace?: string;

/**
   * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.
   */
readonly sharedAccessPolicyName?: string;

/**
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.EventGrid/EventSubscriptions';

/**
   * List of Event Types that are supported by the Event Grid adapter.
   */
readonly eventTypes?: string[];

/**
   * Indicates the Event Grid schema type.
   */
readonly schema?: 'CloudEventSchema''EventGridEventSchema';

/**
   * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
   */
readonly storageAccounts?: StorageAccount[];

/**
   * Subscribers for the Event Grid. Currently only EventHub Subscriber is supported.
   */
readonly subscriber?: EventHubV2StreamInputDataSource;

/**
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: string;

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

/**
   * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hubâs default consumer group.
   */
readonly consumerGroupName?: string;

/**
   * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
   */
readonly eventHubName?: string;

/**
   * The partition count of the event hub data source. Range 1 - 256.
   */
readonly partitionCount?: number;

/**
   * The number of messages that the message receiver can simultaneously request.
   */
readonly prefetchCount?: number;

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
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.ServiceBus/EventHub';

/**
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Microsoft.Storage/Blob';

/**
   * Authentication Mode.
   */
readonly authenticationMode?: 'ConnectionString''Msi''UserToken';

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
   * The partition count of the blob input data source. Range 1 - 1024.
   */
readonly sourcePartitionCount?: number;

/**
   * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
   */
readonly storageAccounts?: StorageAccount[];

/**
   * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
   */
readonly timeFormat?: string;

/**
   * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
   */
readonly type: 'Raw';
}

/**
 * StreamanalyticsStreamingjobsInputs resource
 */
export class StreamanalyticsStreamingjobsInputs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsInputsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/inputs@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsInputsProps): string {
    return JSON.stringify(
        {properties: {compression: {type: "string"}, partitionKey: "string", serialization: {type: "string"}, watermarkSettings: {watermarkMode: "string"}, type: "string"}}
    );
  }
}
