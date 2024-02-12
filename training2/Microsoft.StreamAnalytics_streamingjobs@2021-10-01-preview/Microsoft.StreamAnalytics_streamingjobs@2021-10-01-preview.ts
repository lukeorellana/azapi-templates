import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsProps extends IAzAPIBaseProps {
/**
   * Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
   */
readonly sku?: Sku;

/**
   * Describes the managed identity assigned to this job that can be used to authenticate with inputs and outputs.
   */
readonly identity?: Identity;

/**
   * The type of identity, can be SystemAssigned or UserAssigned.
   */
readonly type?: string;

/**
   * The user assigned identities associated with the streaming job resource.
   */
readonly userAssignedIdentities?: IdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * The cluster which streaming jobs will run on.
   */
readonly cluster?: ClusterInfo;

/**
   * Controls certain runtime behaviors of the streaming job.
   */
readonly compatibilityLevel?: '1.0''1.2';

/**
   * Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. .
   */
readonly contentStoragePolicy?: 'JobStorageAccount''SystemAccount';

/**
   * The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the sethttps://msdn.microsoft.com/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
   */
readonly dataLocale?: string;

/**
   * The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
   */
readonly eventsLateArrivalMaxDelayInSeconds?: number;

/**
   * The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
   */
readonly eventsOutOfOrderMaxDelayInSeconds?: number;

/**
   * Indicates the policy to apply to events that arrive out of order in the input event stream.
   */
readonly eventsOutOfOrderPolicy?: 'Adjust''Drop';

/**
   * The storage account where the custom code artifacts are located.
   */
readonly externals?: External;

/**
   * A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
   */
readonly functions?: Function[];

/**
   * A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
   */
readonly inputs?: Input[];

/**
   * The properties that are associated with an Azure Storage account with MSI
   */
readonly jobStorageAccount?: JobStorageAccount;

/**
   * Describes the type of the job. Valid modes areCloudand 'Edge'.
   */
readonly jobType?: 'Cloud''Edge';

/**
   * Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
   */
readonly outputErrorPolicy?: 'Drop''Stop';

/**
   * A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
   */
readonly outputs?: Output[];

/**
   * This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
   */
readonly outputStartMode?: 'CustomTime''JobStartTime''LastOutputEventTime';

/**
   * Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
   */
readonly outputStartTime?: string;

/**
   * Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
   */
readonly sku?: Sku;

/**
   * Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
   */
readonly transformation?: Transformation;

/**
   * The resource id of cluster.
   */
readonly id?: string;

/**
   * The UserCustomCode container.
   */
readonly container?: string;

/**
   * The UserCustomCode path.
   */
readonly path?: string;

/**
   * The refresh parameters for any/all updatable user defined functions present in the job config.
   */
readonly refreshConfiguration?: RefreshConfiguration;

/**
   * The properties that are associated with an Azure Storage account
   */
readonly storageAccount?: StorageAccount;

/**
   * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
   */
readonly dateFormat?: string;

/**
   * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example.
   */
readonly pathPattern?: string;

/**
   * The refresh interval.
   */
readonly refreshInterval?: string;

/**
   * This property indicates which data refresh option to use, Blocking or Nonblocking.
   */
readonly refreshType?: 'Blocking''Nonblocking';

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
   * Set the object type
   */
readonly type: AggregateScalar;

/**
   * The physical binding of the function. For example, in the Azure Machine Learning web serviceâs case, this describes the endpoint.
   */
readonly binding?: FunctionBinding;

/**
   * 
   */
readonly inputs?: FunctionInput[];

/**
   * Describes the output of a function.
   */
readonly output?: FunctionOutput;

/**
   * Set the object type
   */
readonly type: Microsoft.MachineLearning/WebServiceMicrosoft.MachineLearningServicesMicrosoft.StreamAnalytics/CLRUdfMicrosoft.StreamAnalytics/JavascriptUdf;

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.MachineLearning/WebService';

/**
   * The API key used to authenticate with Request-Response endpoint.
   */
readonly apiKey?: string;

/**
   * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
   */
readonly batchSize?: number;

/**
   * The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here:https://docs.microsoft.com/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
   */
readonly endpoint?: string;

/**
   * The inputs for the Azure Machine Learning Studio endpoint.
   */
readonly inputs?: AzureMachineLearningStudioInputs;

/**
   * A list of outputs from the Azure Machine Learning Studio endpoint execution.
   */
readonly outputs?: AzureMachineLearningStudioOutputColumn[];

/**
   * A list of input columns for the Azure Machine Learning Studio endpoint.
   */
readonly columnNames?: AzureMachineLearningStudioInputColumn[];

/**
   * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx.
   */
readonly dataType?: string;

/**
   * The zero based index of the function parameter this input maps to.
   */
readonly mapTo?: number;

/**
   * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx.
   */
readonly dataType?: string;

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.MachineLearningServices';

/**
   * The API key used to authenticate with Request-Response endpoint.
   */
readonly apiKey?: string;

/**
   * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
   */
readonly batchSize?: number;

/**
   * The Request-Response execute endpoint of the Azure Machine Learning web service.
   */
readonly endpoint?: string;

/**
   * Label for the input request object.
   */
readonly inputRequestName?: string;

/**
   * The inputs for the Azure Machine Learning web service endpoint.
   */
readonly inputs?: AzureMachineLearningServiceInputColumn[];

/**
   * The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1.
   */
readonly numberOfParallelRequests?: number;

/**
   * Label for the output request object.
   */
readonly outputResponseName?: string;

/**
   * A list of outputs from the Azure Machine Learning web service endpoint execution.
   */
readonly outputs?: AzureMachineLearningServiceOutputColumn[];

/**
   * The (Azure Machine Learning supported) data type of the input column.
   */
readonly dataType?: string;

/**
   * The zero based index of the function parameter this input maps to.
   */
readonly mapTo?: number;

/**
   * The (Azure Machine Learning supported) data type of the output column.
   */
readonly dataType?: string;

/**
   * The zero based index of the function parameter this input maps to.
   */
readonly mapTo?: number;

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.StreamAnalytics/CLRUdf';

/**
   * The Csharp code containing a single function definition.
   */
readonly class?: string;

/**
   * The Csharp code containing a single function definition.
   */
readonly dllPath?: string;

/**
   * The Csharp code containing a single function definition.
   */
readonly method?: string;

/**
   * Refresh modes for Stream Analytics functions.
   */
readonly updateMode?: 'Refreshable''Static';

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.StreamAnalytics/JavascriptUdf';

/**
   * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
   */
readonly script?: string;

/**
   * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx
   */
readonly dataType?: string;

/**
   * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
   */
readonly isConfigurationParameter?: bool;

/**
   * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx
   */
readonly dataType?: string;

/**
   * Indicates the type of function.
   */
readonly type: 'Aggregate';

/**
   * Indicates the type of function.
   */
readonly type: 'Scalar';

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
   * Describes the maximal delta between the fastest and slowest partitions, so the out of order window that catches all necessary events in downstream jobs is well defined.
   */
readonly maxWatermarkDifferenceAcrossPartitions?: string;

/**
   * The output watermark mode.
   */
readonly watermarkMode?: 'None''SendCurrentPartitionWatermark''SendLowestWatermarkAcrossPartitions';

/**
   * The capacity of the SKU.
   */
readonly capacity?: number;

/**
   * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here:https://msdn.microsoft.com/library/azure/dn834998. Required on PUT (CreateOrReplace) requests.
   */
readonly query?: string;

/**
   * Specifies the number of streaming units that the streaming job uses.
   */
readonly streamingUnits?: number;

/**
   * Specifies the valid streaming units a streaming job can scale to.
   */
readonly validStreamingUnits?: number[];
}

/**
 * StreamanalyticsStreamingjobs resource
 */
export class StreamanalyticsStreamingjobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsProps): string {
    return JSON.stringify(
        {properties: {cluster: {id: "string"}, compatibilityLevel: "string", contentStoragePolicy: "string", dataLocale: "string", eventsLateArrivalMaxDelayInSeconds: "${int}", eventsOutOfOrderMaxDelayInSeconds: "${int}", eventsOutOfOrderPolicy: "string", externals: {container: "string", path: "string", refreshConfiguration: {dateFormat: "string", pathPattern: "string", refreshInterval: "string", refreshType: "string", timeFormat: "string"}, storageAccount: {accountKey: "string", accountName: "string", authenticationMode: "string"}}, functions: [{name: "string", properties: {properties: {binding: {type: "string"}, inputs: [{dataType: "string", isConfigurationParameter: "${bool}"}], output: {dataType: "string"}}, type: "string"}}], inputs: [{name: "string", properties: {compression: {type: "string"}, partitionKey: "string", serialization: {type: "string"}, watermarkSettings: {watermarkMode: "string"}, type: "string"}}], jobStorageAccount: {accountKey: "string", accountName: "string", authenticationMode: "string"}, jobType: "string", outputErrorPolicy: "string", outputs: [{name: "string", properties: {datasource: {type: "string"}, serialization: {type: "string"}, sizeWindow: "${int}", timeWindow: "string", watermarkSettings: {maxWatermarkDifferenceAcrossPartitions: "string", watermarkMode: "string"}}}], outputStartMode: "string", outputStartTime: "string", sku: {capacity: "${int}", name: "Standard"}, transformation: {name: "string", properties: {query: "string", streamingUnits: "${int}", validStreamingUnits: ["${int}"]}}}, sku: {capacity: "${int}", name: "Standard"}}
    );
  }
}
