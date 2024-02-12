import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesPipelinesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * List of activities in pipeline.
   */
readonly activities?: Activity[];

/**
   * List of tags that can be used for describing the Pipeline.
   */
readonly annotations?: any[];

/**
   * The max number of concurrent runs for the pipeline.
   */
readonly concurrency?: number;

/**
   * The description of the pipeline.
   */
readonly description?: string;

/**
   * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
   */
readonly folder?: PipelineFolder;

/**
   * List of parameters for pipeline.
   */
readonly parameters?: object;

/**
   * Pipeline Policy.
   */
readonly policy?: PipelinePolicy;

/**
   * Dimensions emitted by Pipeline.
   */
readonly runDimensions?: object;

/**
   * List of variables for pipeline.
   */
readonly variables?: object;

/**
   * Activity depends on condition.
   */
readonly dependsOn?: ActivityDependency[];

/**
   * Activity description.
   */
readonly description?: string;

/**
   * Activity user properties.
   */
readonly userProperties?: UserProperty[];

/**
   * Set the object type
   */
readonly type: AppendVariableAzureDataExplorerCommandAzureFunctionActivityAzureMLBatchExecutionAzureMLExecutePipelineAzureMLUpdateResourceCopyCustomDatabricksNotebookDatabricksSparkJarDatabricksSparkPythonDataLakeAnalyticsU-SQLDeleteExecuteDataFlowExecutePipelineExecuteSSISPackageExecuteWranglingDataflowFailFilterForEachGetMetadataHDInsightHiveHDInsightMapReduceHDInsightPigHDInsightSparkHDInsightStreamingIfConditionLookupScriptSetVariableSparkJobSqlServerStoredProcedureSwitchSynapseNotebookUntilValidationWaitWebActivityWebHook;

/**
   * Activity name.
   */
readonly activity: string;

/**
   * Match-Condition for the dependency.
   */
readonly dependencyConditions: String array containing any of:'Completed''Failed''Skipped''Succeeded';

/**
   * User property value. Type: string (or Expression with resultType string).
   */
readonly value: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'AppendVariable';

/**
   * Append Variable activity properties.
   */
readonly typeProperties: AppendVariableActivityTypeProperties;

/**
   * Value to be appended. Could be a static value or Expression
   */
readonly value?: For Bicep, you can use theany()function.;

/**
   * Name of the variable whose value needs to be appended to.
   */
readonly variableName?: string;

/**
   * Type of activity.
   */
readonly type: 'AzureDataExplorerCommand';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Azure Data Explorer command activity properties.
   */
readonly typeProperties: AzureDataExplorerCommandActivityTypeProperties;

/**
   * Arguments for LinkedService.
   */
readonly parameters?: object;

/**
   * Reference LinkedService name.
   */
readonly referenceName: string;

/**
   * Linked service reference type.
   */
readonly type: 'LinkedServiceReference';

/**
   * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly retry?: For Bicep, you can use theany()function.;

/**
   * Interval between each retry attempt (in seconds). The default is 30 sec.
   */
readonly retryIntervalInSeconds?: number;

/**
   * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
   */
readonly secureInput?: bool;

/**
   * When set to true, Output from activity is considered as secure and will not be logged to monitoring.
   */
readonly secureOutput?: bool;

/**
   * Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly timeout?: For Bicep, you can use theany()function.;

/**
   * A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string).
   */
readonly command: For Bicep, you can use theany()function.;

/**
   * Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9]))..)
   */
readonly commandTimeout?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'AzureFunctionActivity';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Azure Function activity properties.
   */
readonly typeProperties: AzureFunctionActivityTypeProperties;

/**
   * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
   */
readonly body?: For Bicep, you can use theany()function.;

/**
   * Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
   */
readonly functionName: For Bicep, you can use theany()function.;

/**
   * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
   */
readonly headers?: For Bicep, you can use theany()function.;

/**
   * Rest API method for target endpoint.
   */
readonly method: 'DELETE''GET''HEAD''OPTIONS''POST''PUT''TRACE';

/**
   * Type of activity.
   */
readonly type: 'AzureMLBatchExecution';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Azure ML Batch Execution activity properties.
   */
readonly typeProperties: AzureMLBatchExecutionActivityTypeProperties;

/**
   * Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request.
   */
readonly globalParameters?: object;

/**
   * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request.
   */
readonly webServiceInputs?: object;

/**
   * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request.
   */
readonly webServiceOutputs?: object;

/**
   * Type of activity.
   */
readonly type: 'AzureMLExecutePipeline';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Azure ML Execute Pipeline activity properties.
   */
readonly typeProperties: AzureMLExecutePipelineActivityTypeProperties;

/**
   * Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean).
   */
readonly continueOnStepFailure?: For Bicep, you can use theany()function.;

/**
   * Dictionary used for changing data path assignments without retraining. Values will be passed in the dataPathAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object).
   */
readonly dataPathAssignments?: For Bicep, you can use theany()function.;

/**
   * Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string).
   */
readonly experimentName?: For Bicep, you can use theany()function.;

/**
   * The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string).
   */
readonly mlParentRunId?: For Bicep, you can use theany()function.;

/**
   * ID of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).
   */
readonly mlPipelineEndpointId?: For Bicep, you can use theany()function.;

/**
   * ID of the published Azure ML pipeline. Type: string (or Expression with resultType string).
   */
readonly mlPipelineId?: For Bicep, you can use theany()function.;

/**
   * Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object).
   */
readonly mlPipelineParameters?: For Bicep, you can use theany()function.;

/**
   * Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).
   */
readonly version?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'AzureMLUpdateResource';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Azure ML Update Resource management activity properties.
   */
readonly typeProperties: AzureMLUpdateResourceActivityTypeProperties;

/**
   * The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
   */
readonly trainedModelFilePath: For Bicep, you can use theany()function.;

/**
   * Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation.
   */
readonly trainedModelLinkedServiceName: LinkedServiceReference;

/**
   * Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).
   */
readonly trainedModelName: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Copy';

/**
   * List of inputs for the activity.
   */
readonly inputs?: DatasetReference[];

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * List of outputs for the activity.
   */
readonly outputs?: DatasetReference[];

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Copy activity properties.
   */
readonly typeProperties: CopyActivityTypeProperties;

/**
   * Arguments for dataset.
   */
readonly parameters?: object;

/**
   * Reference dataset name.
   */
readonly referenceName: string;

/**
   * Dataset reference type.
   */
readonly type: 'DatasetReference';

/**
   * Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly dataIntegrationUnits?: For Bicep, you can use theany()function.;

/**
   * Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly enableSkipIncompatibleRow?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly enableStaging?: For Bicep, you can use theany()function.;

/**
   * Log settings customer needs provide when enabling log.
   */
readonly logSettings?: LogSettings;

/**
   * (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log.
   */
readonly logStorageSettings?: LogStorageSettings;

/**
   * Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly parallelCopies?: For Bicep, you can use theany()function.;

/**
   * Preserve rules.
   */
readonly preserve?: any[];

/**
   * Preserve Rules.
   */
readonly preserveRules?: any[];

/**
   * Redirect incompatible row settings when EnableSkipIncompatibleRow is true.
   */
readonly redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;

/**
   * Copy activity sink.
   */
readonly sink: CopySink;

/**
   * Specify the fault tolerance for data consistency.
   */
readonly skipErrorFile?: SkipErrorFile;

/**
   * Copy activity source.
   */
readonly source: CopySource;

/**
   * Specifies interim staging settings when EnableStaging is true.
   */
readonly stagingSettings?: StagingSettings;

/**
   * Copy activity translator. If not specified, tabular translator is used.
   */
readonly translator?: For Bicep, you can use theany()function.;

/**
   * Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean).
   */
readonly validateDataConsistency?: For Bicep, you can use theany()function.;

/**
   * Specifies settings for copy activity log.
   */
readonly copyActivityLogSettings?: CopyActivityLogSettings;

/**
   * Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean).
   */
readonly enableCopyActivityLog?: For Bicep, you can use theany()function.;

/**
   * Log location settings customer needs to provide when enabling log.
   */
readonly logLocationSettings: LogLocationSettings;

/**
   * Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
   */
readonly enableReliableLogging?: For Bicep, you can use theany()function.;

/**
   * Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string).
   */
readonly logLevel?: For Bicep, you can use theany()function.;

/**
   * Log storage linked service reference.
   */
readonly linkedServiceName: LinkedServiceReference;

/**
   * The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
   */
readonly path?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
   */
readonly enableReliableLogging?: For Bicep, you can use theany()function.;

/**
   * Log storage linked service reference.
   */
readonly linkedServiceName: LinkedServiceReference;

/**
   * Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string).
   */
readonly logLevel?: For Bicep, you can use theany()function.;

/**
   * The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
   */
readonly path?: For Bicep, you can use theany()function.;

/**
   * Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
   */
readonly linkedServiceName: For Bicep, you can use theany()function.;

/**
   * The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string).
   */
readonly path?: For Bicep, you can use theany()function.;

/**
   * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly disableMetricsCollection?: For Bicep, you can use theany()function.;

/**
   * The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer).
   */
readonly maxConcurrentConnections?: For Bicep, you can use theany()function.;

/**
   * Sink retry count. Type: integer (or Expression with resultType integer).
   */
readonly sinkRetryCount?: For Bicep, you can use theany()function.;

/**
   * Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly sinkRetryWait?: For Bicep, you can use theany()function.;

/**
   * Write batch size. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly writeBatchSize?: For Bicep, you can use theany()function.;

/**
   * Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly writeBatchTimeout?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AvroSinkAzureBlobFSSinkAzureDatabricksDeltaLakeSinkAzureDataExplorerSinkAzureDataLakeStoreSinkAzureMySqlSinkAzurePostgreSqlSinkAzureQueueSinkAzureSearchIndexSinkAzureSqlSinkAzureTableSinkBinarySinkBlobSinkCommonDataServiceForAppsSinkCosmosDbMongoDbApiSinkCosmosDbSqlApiSinkDelimitedTextSinkDocumentDbCollectionSinkDynamicsCrmSinkDynamicsSinkFileSystemSinkInformixSinkJsonSinkMicrosoftAccessSinkMongoDbAtlasSinkMongoDbV2SinkOdbcSinkOracleSinkOrcSinkParquetSinkRestSinkSalesforceServiceCloudSinkSalesforceSinkSapCloudForCustomerSinkSnowflakeSinkSqlDWSinkSqlMISinkSqlServerSinkSqlSink;

/**
   * Copy sink type.
   */
readonly type: 'AvroSink';

/**
   * Avro format settings.
   */
readonly formatSettings?: AvroWriteSettings;

/**
   * Avro store settings.
   */
readonly storeSettings?: StoreWriteSettings;

/**
   * Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
   */
readonly fileNamePrefix?: For Bicep, you can use theany()function.;

/**
   * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
   */
readonly maxRowsPerFile?: For Bicep, you can use theany()function.;

/**
   * Top level record name in write result, which is required in AVRO spec.
   */
readonly recordName?: string;

/**
   * Record namespace in the write result.
   */
readonly recordNamespace?: string;

/**
   * The write setting type.
   */
readonly type: string;

/**
   * The type of copy behavior for copy sink.
   */
readonly copyBehavior?: For Bicep, you can use theany()function.;

/**
   * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly disableMetricsCollection?: For Bicep, you can use theany()function.;

/**
   * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
   */
readonly maxConcurrentConnections?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AzureBlobFSWriteSettingsAzureBlobStorageWriteSettingsAzureDataLakeStoreWriteSettingsAzureFileStorageWriteSettingsFileServerWriteSettingsSftpWriteSettings;

/**
   * The write setting type.
   */
readonly type: 'AzureBlobFSWriteSettings';

/**
   * Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
   */
readonly blockSizeInMB?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: 'AzureBlobStorageWriteSettings';

/**
   * Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer).
   */
readonly blockSizeInMB?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: 'AzureDataLakeStoreWriteSettings';

/**
   * Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: integer (or Expression with resultType integer).
   */
readonly expiryDateTime?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: 'AzureFileStorageWriteSettings';

/**
   * The write setting type.
   */
readonly type: 'FileServerWriteSettings';

/**
   * The write setting type.
   */
readonly type: 'SftpWriteSettings';

/**
   * Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string).
   */
readonly operationTimeout?: For Bicep, you can use theany()function.;

/**
   * Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean).
   */
readonly useTempFileRename?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzureBlobFSSink';

/**
   * The type of copy behavior for copy sink.
   */
readonly copyBehavior?: For Bicep, you can use theany()function.;

/**
   * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
   */
readonly metadata?: MetadataItem[];

/**
   * Metadata item value. Type: string (or Expression with resultType string).
   */
readonly value?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzureDatabricksDeltaLakeSink';

/**
   * Azure Databricks Delta Lake import settings.
   */
readonly importSettings?: AzureDatabricksDeltaLakeImportCommand;

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
   */
readonly dateFormat?: For Bicep, you can use theany()function.;

/**
   * Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
   */
readonly timestampFormat?: For Bicep, you can use theany()function.;

/**
   * The import setting type.
   */
readonly type: string;

/**
   * Copy sink type.
   */
readonly type: 'AzureDataExplorerSink';

/**
   * If set to true, any aggregation will be skipped. Default is false. Type: boolean.
   */
readonly flushImmediately?: For Bicep, you can use theany()function.;

/**
   * An explicit column mapping description provided in a json format. Type: string.
   */
readonly ingestionMappingAsJson?: For Bicep, you can use theany()function.;

/**
   * A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string.
   */
readonly ingestionMappingName?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzureDataLakeStoreSink';

/**
   * The type of copy behavior for copy sink.
   */
readonly copyBehavior?: For Bicep, you can use theany()function.;

/**
   * Single File Parallel.
   */
readonly enableAdlsSingleFileParallel?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzureMySqlSink';

/**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzurePostgreSqlSink';

/**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzureQueueSink';

/**
   * Copy sink type.
   */
readonly type: 'AzureSearchIndexSink';

/**
   * Specify the write behavior when upserting documents into Azure Search Index.
   */
readonly writeBehavior?: 'Merge''Upload';

/**
   * Copy sink type.
   */
readonly type: 'AzureSqlSink';

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
readonly sqlWriterStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
readonly sqlWriterTableType?: For Bicep, you can use theany()function.;

/**
   * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
   */
readonly sqlWriterUseTableLock?: For Bicep, you can use theany()function.;

/**
   * SQL stored procedure parameters.
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
readonly storedProcedureTableTypeParameterName?: For Bicep, you can use theany()function.;

/**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
readonly tableOption?: For Bicep, you can use theany()function.;

/**
   * SQL upsert settings.
   */
readonly upsertSettings?: SqlUpsertSettings;

/**
   * Write behavior when copying data into Azure SQL. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum)
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Schema name for interim table. Type: string (or Expression with resultType string).
   */
readonly interimSchemaName?: For Bicep, you can use theany()function.;

/**
   * Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
   */
readonly keys?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use temp db for upsert interim table. Type: boolean (or Expression with resultType boolean).
   */
readonly useTempDB?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'AzureTableSink';

/**
   * Azure Table default partition key value. Type: string (or Expression with resultType string).
   */
readonly azureTableDefaultPartitionKeyValue?: For Bicep, you can use theany()function.;

/**
   * Azure Table insert type. Type: string (or Expression with resultType string).
   */
readonly azureTableInsertType?: For Bicep, you can use theany()function.;

/**
   * Azure Table partition key name. Type: string (or Expression with resultType string).
   */
readonly azureTablePartitionKeyName?: For Bicep, you can use theany()function.;

/**
   * Azure Table row key name. Type: string (or Expression with resultType string).
   */
readonly azureTableRowKeyName?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'BinarySink';

/**
   * Binary store settings.
   */
readonly storeSettings?: StoreWriteSettings;

/**
   * Copy sink type.
   */
readonly type: 'BlobSink';

/**
   * Blob writer add header. Type: boolean (or Expression with resultType boolean).
   */
readonly blobWriterAddHeader?: For Bicep, you can use theany()function.;

/**
   * Blob writer date time format. Type: string (or Expression with resultType string).
   */
readonly blobWriterDateTimeFormat?: For Bicep, you can use theany()function.;

/**
   * Blob writer overwrite files. Type: boolean (or Expression with resultType boolean).
   */
readonly blobWriterOverwriteFiles?: For Bicep, you can use theany()function.;

/**
   * The type of copy behavior for copy sink.
   */
readonly copyBehavior?: For Bicep, you can use theany()function.;

/**
   * Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
   */
readonly metadata?: MetadataItem[];

/**
   * Copy sink type.
   */
readonly type: 'CommonDataServiceForAppsSink';

/**
   * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
   */
readonly alternateKeyName?: For Bicep, you can use theany()function.;

/**
   * The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly ignoreNullValues?: For Bicep, you can use theany()function.;

/**
   * The write behavior for the operation.
   */
readonly writeBehavior: 'Upsert';

/**
   * Copy sink type.
   */
readonly type: 'CosmosDbMongoDbApiSink';

/**
   * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'CosmosDbSqlApiSink';

/**
   * Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'DelimitedTextSink';

/**
   * DelimitedText format settings.
   */
readonly formatSettings?: DelimitedTextWriteSettings;

/**
   * DelimitedText store settings.
   */
readonly storeSettings?: StoreWriteSettings;

/**
   * The file extension used to create the files. Type: string (or Expression with resultType string).
   */
readonly fileExtension: For Bicep, you can use theany()function.;

/**
   * Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
   */
readonly fileNamePrefix?: For Bicep, you can use theany()function.;

/**
   * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
   */
readonly maxRowsPerFile?: For Bicep, you can use theany()function.;

/**
   * Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean).
   */
readonly quoteAllText?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: string;

/**
   * Copy sink type.
   */
readonly type: 'DocumentDbCollectionSink';

/**
   * Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string).
   */
readonly nestingSeparator?: For Bicep, you can use theany()function.;

/**
   * Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert.
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'DynamicsCrmSink';

/**
   * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
   */
readonly alternateKeyName?: For Bicep, you can use theany()function.;

/**
   * The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly ignoreNullValues?: For Bicep, you can use theany()function.;

/**
   * The write behavior for the operation.
   */
readonly writeBehavior: 'Upsert';

/**
   * Copy sink type.
   */
readonly type: 'DynamicsSink';

/**
   * The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string).
   */
readonly alternateKeyName?: For Bicep, you can use theany()function.;

/**
   * The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly ignoreNullValues?: For Bicep, you can use theany()function.;

/**
   * The write behavior for the operation.
   */
readonly writeBehavior: 'Upsert';

/**
   * Copy sink type.
   */
readonly type: 'FileSystemSink';

/**
   * The type of copy behavior for copy sink.
   */
readonly copyBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'InformixSink';

/**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'JsonSink';

/**
   * Json format settings.
   */
readonly formatSettings?: JsonWriteSettings;

/**
   * Json store settings.
   */
readonly storeSettings?: StoreWriteSettings;

/**
   * File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive.
   */
readonly filePattern?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: string;

/**
   * Copy sink type.
   */
readonly type: 'MicrosoftAccessSink';

/**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'MongoDbAtlasSink';

/**
   * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'MongoDbV2Sink';

/**
   * Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'OdbcSink';

/**
   * A query to execute before starting the copy. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'OracleSink';

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'OrcSink';

/**
   * ORC format settings.
   */
readonly formatSettings?: OrcWriteSettings;

/**
   * ORC store settings.
   */
readonly storeSettings?: StoreWriteSettings;

/**
   * Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
   */
readonly fileNamePrefix?: For Bicep, you can use theany()function.;

/**
   * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
   */
readonly maxRowsPerFile?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: string;

/**
   * Copy sink type.
   */
readonly type: 'ParquetSink';

/**
   * Parquet format settings.
   */
readonly formatSettings?: ParquetWriteSettings;

/**
   * Parquet store settings.
   */
readonly storeSettings?: StoreWriteSettings;

/**
   * Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string).
   */
readonly fileNamePrefix?: For Bicep, you can use theany()function.;

/**
   * Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer).
   */
readonly maxRowsPerFile?: For Bicep, you can use theany()function.;

/**
   * The write setting type.
   */
readonly type: string;

/**
   * Copy sink type.
   */
readonly type: 'RestSink';

/**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
readonly additionalHeaders?: For Bicep, you can use theany()function.;

/**
   * Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip.
   */
readonly httpCompressionType?: For Bicep, you can use theany()function.;

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * The time to await before sending next request, in milliseconds
   */
readonly requestInterval?: For Bicep, you can use theany()function.;

/**
   * The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string).
   */
readonly requestMethod?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'SalesforceServiceCloudSink';

/**
   * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
   */
readonly externalIdFieldName?: For Bicep, you can use theany()function.;

/**
   * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
   */
readonly ignoreNullValues?: For Bicep, you can use theany()function.;

/**
   * The write behavior for the operation. Default is Insert.
   */
readonly writeBehavior?: 'Insert''Upsert';

/**
   * Copy sink type.
   */
readonly type: 'SalesforceSink';

/**
   * The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string).
   */
readonly externalIdFieldName?: For Bicep, you can use theany()function.;

/**
   * The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean).
   */
readonly ignoreNullValues?: For Bicep, you can use theany()function.;

/**
   * The write behavior for the operation. Default is Insert.
   */
readonly writeBehavior?: 'Insert''Upsert';

/**
   * Copy sink type.
   */
readonly type: 'SapCloudForCustomerSink';

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * The write behavior for the operation. Default is 'Insert'.
   */
readonly writeBehavior?: 'Insert''Update';

/**
   * Copy sink type.
   */
readonly type: 'SnowflakeSink';

/**
   * Snowflake import settings.
   */
readonly importSettings?: SnowflakeImportCopyCommand;

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
   */
readonly additionalCopyOptions?: object;

/**
   * Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" }
   */
readonly additionalFormatOptions?: object;

/**
   * The import setting type.
   */
readonly type: string;

/**
   * Copy sink type.
   */
readonly type: 'SqlDWSink';

/**
   * Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
   */
readonly allowCopyCommand?: For Bicep, you can use theany()function.;

/**
   * Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean).
   */
readonly allowPolyBase?: For Bicep, you can use theany()function.;

/**
   * Specifies Copy Command related settings when allowCopyCommand is true.
   */
readonly copyCommandSettings?: DWCopyCommandSettings;

/**
   * Specifies PolyBase-related settings when allowPolyBase is true.
   */
readonly polyBaseSettings?: PolybaseSettings;

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
   */
readonly sqlWriterUseTableLock?: For Bicep, you can use theany()function.;

/**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
readonly tableOption?: For Bicep, you can use theany()function.;

/**
   * SQL DW upsert settings.
   */
readonly upsertSettings?: SqlDWUpsertSettings;

/**
   * Write behavior when copying data into azure SQL DW. Type: SqlDWWriteBehaviorEnum (or Expression with resultType SqlDWWriteBehaviorEnum)
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" }
   */
readonly additionalOptions?: object;

/**
   * Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects).
   */
readonly defaultValues?: DWCopyCommandDefaultValue[];

/**
   * Column name. Type: object (or Expression with resultType string).
   */
readonly columnName?: For Bicep, you can use theany()function.;

/**
   * The default value of the column. Type: object (or Expression with resultType string).
   */
readonly defaultValue?: For Bicep, you can use theany()function.;

/**
   * Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly rejectSampleValue?: For Bicep, you can use theany()function.;

/**
   * Reject type.
   */
readonly rejectType?: 'percentage''value';

/**
   * Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0.
   */
readonly rejectValue?: For Bicep, you can use theany()function.;

/**
   * Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean).
   */
readonly useTypeDefault?: For Bicep, you can use theany()function.;

/**
   * Schema name for interim table. Type: string (or Expression with resultType string).
   */
readonly interimSchemaName?: For Bicep, you can use theany()function.;

/**
   * Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
   */
readonly keys?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'SqlMISink';

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
readonly sqlWriterStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
readonly sqlWriterTableType?: For Bicep, you can use theany()function.;

/**
   * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
   */
readonly sqlWriterUseTableLock?: For Bicep, you can use theany()function.;

/**
   * SQL stored procedure parameters.
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
readonly storedProcedureTableTypeParameterName?: For Bicep, you can use theany()function.;

/**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
readonly tableOption?: For Bicep, you can use theany()function.;

/**
   * SQL upsert settings.
   */
readonly upsertSettings?: SqlUpsertSettings;

/**
   * White behavior when copying data into azure SQL MI. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum)
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'SqlServerSink';

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
readonly sqlWriterStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
readonly sqlWriterTableType?: For Bicep, you can use theany()function.;

/**
   * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
   */
readonly sqlWriterUseTableLock?: For Bicep, you can use theany()function.;

/**
   * SQL stored procedure parameters.
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
readonly storedProcedureTableTypeParameterName?: For Bicep, you can use theany()function.;

/**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
readonly tableOption?: For Bicep, you can use theany()function.;

/**
   * SQL upsert settings.
   */
readonly upsertSettings?: SqlUpsertSettings;

/**
   * Write behavior when copying data into sql server. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum)
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Copy sink type.
   */
readonly type: 'SqlSink';

/**
   * SQL pre-copy script. Type: string (or Expression with resultType string).
   */
readonly preCopyScript?: For Bicep, you can use theany()function.;

/**
   * SQL writer stored procedure name. Type: string (or Expression with resultType string).
   */
readonly sqlWriterStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * SQL writer table type. Type: string (or Expression with resultType string).
   */
readonly sqlWriterTableType?: For Bicep, you can use theany()function.;

/**
   * Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean).
   */
readonly sqlWriterUseTableLock?: For Bicep, you can use theany()function.;

/**
   * SQL stored procedure parameters.
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * The stored procedure parameter name of the table type. Type: string (or Expression with resultType string).
   */
readonly storedProcedureTableTypeParameterName?: For Bicep, you can use theany()function.;

/**
   * The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string).
   */
readonly tableOption?: For Bicep, you can use theany()function.;

/**
   * SQL upsert settings.
   */
readonly upsertSettings?: SqlUpsertSettings;

/**
   * Write behavior when copying data into sql. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum)
   */
readonly writeBehavior?: For Bicep, you can use theany()function.;

/**
   * Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly dataInconsistency?: For Bicep, you can use theany()function.;

/**
   * Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly fileMissing?: For Bicep, you can use theany()function.;

/**
   * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly disableMetricsCollection?: For Bicep, you can use theany()function.;

/**
   * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
   */
readonly maxConcurrentConnections?: For Bicep, you can use theany()function.;

/**
   * Source retry count. Type: integer (or Expression with resultType integer).
   */
readonly sourceRetryCount?: For Bicep, you can use theany()function.;

/**
   * Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly sourceRetryWait?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AmazonMWSSourceAmazonRdsForOracleSourceAmazonRdsForSqlServerSourceAmazonRedshiftSourceAvroSourceAzureBlobFSSourceAzureDatabricksDeltaLakeSourceAzureDataExplorerSourceAzureDataLakeStoreSourceAzureMariaDBSourceAzureMySqlSourceAzurePostgreSqlSourceAzureSqlSourceAzureTableSourceBinarySourceBlobSourceCassandraSourceCommonDataServiceForAppsSourceConcurSourceCosmosDbMongoDbApiSourceCosmosDbSqlApiSourceCouchbaseSourceDb2SourceDelimitedTextSourceDocumentDbCollectionSourceDrillSourceDynamicsAXSourceDynamicsCrmSourceDynamicsSourceEloquaSourceExcelSourceFileSystemSourceGoogleAdWordsSourceGoogleBigQuerySourceGreenplumSourceHBaseSourceHdfsSourceHiveSourceHttpSourceHubspotSourceImpalaSourceInformixSourceJiraSourceJsonSourceMagentoSourceMariaDBSourceMarketoSourceMicrosoftAccessSourceMongoDbAtlasSourceMongoDbSourceMongoDbV2SourceMySqlSourceNetezzaSourceODataSourceOdbcSourceOffice365SourceOracleServiceCloudSourceOracleSourceOrcSourceParquetSourcePaypalSourcePhoenixSourcePostgreSqlSourcePrestoSourceQuickBooksSourceRelationalSourceResponsysSourceRestSourceSalesforceMarketingCloudSourceSalesforceServiceCloudSourceSalesforceSourceSapBwSourceSapCloudForCustomerSourceSapEccSourceSapHanaSourceSapOdpSourceSapOpenHubSourceSapTableSourceServiceNowSourceSharePonumberOnlineListSourceShopifySourceSnowflakeSourceSparkSourceSqlDWSourceSqlMISourceSqlServerSourceSqlSourceSquareSourceSybaseSourceTeradataSourceVerticaSourceWebSourceXeroSourceXmlSourceZohoSource;

/**
   * Copy source type.
   */
readonly type: 'AmazonMWSSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AmazonRdsForOracleSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * AmazonRdsForOracle reader query. Type: string (or Expression with resultType string).
   */
readonly oracleReaderQuery?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string).
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for AmazonRdsForOracle source partitioning.
   */
readonly partitionSettings?: AmazonRdsForOraclePartitionSettings;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionLowerBound?: For Bicep, you can use theany()function.;

/**
   * Names of the physical partitions of AmazonRdsForOracle table.
   */
readonly partitionNames?: For Bicep, you can use theany()function.;

/**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionUpperBound?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AmazonRdsForSqlServerSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Sql source partitioning.
   */
readonly partitionSettings?: SqlPartitionSettings;

/**
   * Which additional types to produce.
   */
readonly produceAdditionalTypes?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
readonly sqlReaderQuery?: For Bicep, you can use theany()function.;

/**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
readonly sqlReaderStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string).
   */
readonly partitionLowerBound?: For Bicep, you can use theany()function.;

/**
   * The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string).
   */
readonly partitionUpperBound?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AmazonRedshiftSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
   */
readonly redshiftUnloadSettings?: RedshiftUnloadSettings;

/**
   * The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
   */
readonly bucketName: For Bicep, you can use theany()function.;

/**
   * The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source.
   */
readonly s3LinkedServiceName: LinkedServiceReference;

/**
   * Copy source type.
   */
readonly type: 'AvroSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Avro store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly disableMetricsCollection?: For Bicep, you can use theany()function.;

/**
   * The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer).
   */
readonly maxConcurrentConnections?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AmazonS3CompatibleReadSettingsAmazonS3ReadSettingsAzureBlobFSReadSettingsAzureBlobStorageReadSettingsAzureDataLakeStoreReadSettingsAzureFileStorageReadSettingsFileServerReadSettingsFtpReadSettingsGoogleCloudStorageReadSettingsHdfsReadSettingsHttpReadSettingsOracleCloudStorageReadSettingsSftpReadSettings;

/**
   * The read setting type.
   */
readonly type: 'AmazonS3CompatibleReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the S3 Compatible object name. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Amazon S3 Compatible wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Amazon S3 Compatible wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'AmazonS3ReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * AmazonS3 wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'AzureBlobFSReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Azure blobFS wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'AzureBlobStorageReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Azure blob wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Azure blob wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'AzureDataLakeStoreReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * Lists files after the value (exclusive) based on file/folder namesâ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string).
   */
readonly listAfter?: For Bicep, you can use theany()function.;

/**
   * Lists files before the value (inclusive) based on file/folder namesâ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string).
   */
readonly listBefore?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * ADLS wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * ADLS wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'AzureFileStorageReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Azure File Storage wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'FileServerReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
   */
readonly fileFilter?: For Bicep, you can use theany()function.;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * FileServer wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * FileServer wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'FtpReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly disableChunking?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Specify whether to use binary transfer mode for FTP stores.
   */
readonly useBinaryTransfer?: bool;

/**
   * Ftp wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Ftp wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'GoogleCloudStorageReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'HdfsReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Specifies Distcp-related settings.
   */
readonly distcpSettings?: DistcpSettings;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * HDFS wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * HDFS wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * Specifies the Distcp options. Type: string (or Expression with resultType string).
   */
readonly distcpOptions?: For Bicep, you can use theany()function.;

/**
   * Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string).
   */
readonly resourceManagerEndpoint: For Bicep, you can use theany()function.;

/**
   * Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string).
   */
readonly tempScriptPath: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'HttpReadSettings';

/**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
readonly additionalHeaders?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
   */
readonly requestBody?: For Bicep, you can use theany()function.;

/**
   * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
   */
readonly requestMethod?: For Bicep, you can use theany()function.;

/**
   * Specifies the timeout for a HTTP client to get HTTP response from HTTP server.
   */
readonly requestTimeout?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'OracleCloudStorageReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the Oracle Cloud Storage object name. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Oracle Cloud Storage wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Oracle Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: 'SftpReadSettings';

/**
   * Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly deleteFilesAfterCompletion?: For Bicep, you can use theany()function.;

/**
   * If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly disableChunking?: For Bicep, you can use theany()function.;

/**
   * Indicates whether to enable partition discovery.
   */
readonly enablePartitionDiscovery?: bool;

/**
   * Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string).
   */
readonly fileListPath?: For Bicep, you can use theany()function.;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string).
   */
readonly partitionRootPath?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Sftp wildcardFileName. Type: string (or Expression with resultType string).
   */
readonly wildcardFileName?: For Bicep, you can use theany()function.;

/**
   * Sftp wildcardFolderPath. Type: string (or Expression with resultType string).
   */
readonly wildcardFolderPath?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureBlobFSSource';

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
   */
readonly skipHeaderLineCount?: For Bicep, you can use theany()function.;

/**
   * Treat empty as null. Type: boolean (or Expression with resultType boolean).
   */
readonly treatEmptyAsNull?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureDatabricksDeltaLakeSource';

/**
   * Azure Databricks Delta Lake export settings.
   */
readonly exportSettings?: AzureDatabricksDeltaLakeExportCommand;

/**
   * Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
   */
readonly dateFormat?: For Bicep, you can use theany()function.;

/**
   * Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string).
   */
readonly timestampFormat?: For Bicep, you can use theany()function.;

/**
   * The export setting type.
   */
readonly type: string;

/**
   * Copy source type.
   */
readonly type: 'AzureDataExplorerSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit.
   */
readonly noTruncation?: For Bicep, you can use theany()function.;

/**
   * Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string).
   */
readonly query: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9]))..
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureDataLakeStoreSource';

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureMariaDBSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureMySqlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzurePostgreSqlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureSqlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Sql source partitioning.
   */
readonly partitionSettings?: SqlPartitionSettings;

/**
   * Which additional types to produce.
   */
readonly produceAdditionalTypes?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
readonly sqlReaderQuery?: For Bicep, you can use theany()function.;

/**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
readonly sqlReaderStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'AzureTableSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean).
   */
readonly azureTableSourceIgnoreTableNotFound?: For Bicep, you can use theany()function.;

/**
   * Azure Table source query. Type: string (or Expression with resultType string).
   */
readonly azureTableSourceQuery?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'BinarySource';

/**
   * Binary format settings.
   */
readonly formatSettings?: BinaryReadSettings;

/**
   * Binary store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Compression settings.
   */
readonly compressionProperties?: CompressionReadSettings;

/**
   * The read setting type.
   */
readonly type: string;

/**
   * Set the object type
   */
readonly type: TarGZipReadSettingsTarReadSettingsZipDeflateReadSettings;

/**
   * The Compression setting type.
   */
readonly type: 'TarGZipReadSettings';

/**
   * Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
   */
readonly preserveCompressionFileNameAsFolder?: For Bicep, you can use theany()function.;

/**
   * The Compression setting type.
   */
readonly type: 'TarReadSettings';

/**
   * Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
   */
readonly preserveCompressionFileNameAsFolder?: For Bicep, you can use theany()function.;

/**
   * The Compression setting type.
   */
readonly type: 'ZipDeflateReadSettings';

/**
   * Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean).
   */
readonly preserveZipFileNameAsFolder?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'BlobSource';

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer).
   */
readonly skipHeaderLineCount?: For Bicep, you can use theany()function.;

/**
   * Treat empty as null. Type: boolean (or Expression with resultType boolean).
   */
readonly treatEmptyAsNull?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'CassandraSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
   */
readonly consistencyLevel?: 'ALL''EACH_QUORUM''LOCAL_ONE''LOCAL_QUORUM''LOCAL_SERIAL''ONE''QUORUM''SERIAL''THREE''TWO';

/**
   * Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'CommonDataServiceForAppsSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ConcurSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'CosmosDbMongoDbApiSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
   */
readonly batchSize?: For Bicep, you can use theany()function.;

/**
   * Cursor methods for Mongodb query.
   */
readonly cursorMethods?: MongoDbCursorMethodsProperties;

/**
   * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
   */
readonly filter?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer).
   */
readonly limit?: For Bicep, you can use theany()function.;

/**
   * Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string).
   */
readonly project?: For Bicep, you can use theany()function.;

/**
   * Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer).
   */
readonly skip?: For Bicep, you can use theany()function.;

/**
   * Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string).
   */
readonly sort?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'CosmosDbSqlApiSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean).
   */
readonly detectDatetime?: For Bicep, you can use theany()function.;

/**
   * Page size of the result. Type: integer (or Expression with resultType integer).
   */
readonly pageSize?: For Bicep, you can use theany()function.;

/**
   * Preferred regions. Type: array of strings (or Expression with resultType array of strings).
   */
readonly preferredRegions?: For Bicep, you can use theany()function.;

/**
   * SQL API query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'CouchbaseSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'Db2Source';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'DelimitedTextSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * DelimitedText format settings.
   */
readonly formatSettings?: DelimitedTextReadSettings;

/**
   * DelimitedText store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Compression settings.
   */
readonly compressionProperties?: CompressionReadSettings;

/**
   * Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer).
   */
readonly skipLineCount?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: string;

/**
   * Copy source type.
   */
readonly type: 'DocumentDbCollectionSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Nested properties separator. Type: string (or Expression with resultType string).
   */
readonly nestingSeparator?: For Bicep, you can use theany()function.;

/**
   * Documents query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'DrillSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'DynamicsAXSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'DynamicsCrmSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'DynamicsSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'EloquaSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ExcelSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Excel store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Copy source type.
   */
readonly type: 'FileSystemSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'GoogleAdWordsSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'GoogleBigQuerySource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'GreenplumSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'HBaseSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'HdfsSource';

/**
   * Specifies Distcp-related settings.
   */
readonly distcpSettings?: DistcpSettings;

/**
   * If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'HiveSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'HttpSource';

/**
   * Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'HubspotSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ImpalaSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'InformixSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'JiraSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'JsonSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Json format settings.
   */
readonly formatSettings?: JsonReadSettings;

/**
   * Json store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Compression settings.
   */
readonly compressionProperties?: CompressionReadSettings;

/**
   * The read setting type.
   */
readonly type: string;

/**
   * Copy source type.
   */
readonly type: 'MagentoSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MariaDBSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MarketoSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MicrosoftAccessSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MongoDbAtlasSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
   */
readonly batchSize?: For Bicep, you can use theany()function.;

/**
   * Cursor methods for Mongodb query
   */
readonly cursorMethods?: MongoDbCursorMethodsProperties;

/**
   * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
   */
readonly filter?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MongoDbSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MongoDbV2Source';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer).
   */
readonly batchSize?: For Bicep, you can use theany()function.;

/**
   * Cursor methods for Mongodb query
   */
readonly cursorMethods?: MongoDbCursorMethodsProperties;

/**
   * Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string).
   */
readonly filter?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'MySqlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'NetezzaSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Netezza read in parallel. Possible values include: "None", "DataSlice", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Netezza source partitioning.
   */
readonly partitionSettings?: NetezzaPartitionSettings;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionLowerBound?: For Bicep, you can use theany()function.;

/**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionUpperBound?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ODataSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * OData query. For example, "$top=1". Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'OdbcSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'Office365Source';

/**
   * The groups containing all the users. Type: array of strings (or Expression with resultType array of strings).
   */
readonly allowedGroups?: For Bicep, you can use theany()function.;

/**
   * The Column to apply the {paramref name="StartTime"/} and {paramref name="EndTime"/}. Type: string (or Expression with resultType string).
   */
readonly dateFilterColumn?: For Bicep, you can use theany()function.;

/**
   * End time of the requested range for this dataset. Type: string (or Expression with resultType string).
   */
readonly endTime?: For Bicep, you can use theany()function.;

/**
   * The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ]
   */
readonly outputColumns?: For Bicep, you can use theany()function.;

/**
   * Start time of the requested range for this dataset. Type: string (or Expression with resultType string).
   */
readonly startTime?: For Bicep, you can use theany()function.;

/**
   * The user scope uri. Type: string (or Expression with resultType string).
   */
readonly userScopeFilterUri?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'OracleServiceCloudSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'OracleSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Oracle reader query. Type: string (or Expression with resultType string).
   */
readonly oracleReaderQuery?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Oracle read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Oracle source partitioning.
   */
readonly partitionSettings?: OraclePartitionSettings;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionLowerBound?: For Bicep, you can use theany()function.;

/**
   * Names of the physical partitions of Oracle table.
   */
readonly partitionNames?: For Bicep, you can use theany()function.;

/**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionUpperBound?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'OrcSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * ORC store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Copy source type.
   */
readonly type: 'ParquetSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Parquet store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Copy source type.
   */
readonly type: 'PaypalSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'PhoenixSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'PostgreSqlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'PrestoSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'QuickBooksSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'RelationalSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ResponsysSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'RestSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
readonly additionalHeaders?: For Bicep, you can use theany()function.;

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
   */
readonly paginationRules?: For Bicep, you can use theany()function.;

/**
   * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
   */
readonly requestBody?: For Bicep, you can use theany()function.;

/**
   * The time to await before sending next page request.
   */
readonly requestInterval?: For Bicep, you can use theany()function.;

/**
   * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
   */
readonly requestMethod?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SalesforceMarketingCloudSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SalesforceServiceCloudSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * The read behavior for the operation. Default is Query.
   */
readonly readBehavior?: 'Query''QueryAll';

/**
   * Copy source type.
   */
readonly type: 'SalesforceSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The read behavior for the operation. Default is Query.
   */
readonly readBehavior?: 'Query''QueryAll';

/**
   * Copy source type.
   */
readonly type: 'SapBwSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * MDX query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SapCloudForCustomerSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SapEccSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SapHanaSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer).
   */
readonly packetSize?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for SAP HANA read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "SapHanaDynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for SAP HANA source partitioning.
   */
readonly partitionSettings?: SapHanaPartitionSettings;

/**
   * SAP HANA Sql query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SapOdpSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The extraction mode. Allowed value include: Full, Delta and Recovery. The default value is Full. Type: string (or Expression with resultType string).
   */
readonly extractionMode?: For Bicep, you can use theany()function.;

/**
   * Specifies the columns to be selected from source data. Type: array of objects(projection) (or Expression with resultType array of objects).
   */
readonly projection?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Specifies the selection conditions from source data. Type: array of objects(selection) (or Expression with resultType array of objects).
   */
readonly selection?: For Bicep, you can use theany()function.;

/**
   * The subscriber process to manage the delta process. Type: string (or Expression with resultType string).
   */
readonly subscriberProcess?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SapOpenHubSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
   */
readonly baseRequestId?: For Bicep, you can use theany()function.;

/**
   * Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
   */
readonly customRfcReadTableFunctionModule?: For Bicep, you can use theany()function.;

/**
   * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly excludeLastRequest?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string).
   */
readonly sapDataColumnDelimiter?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SapTableSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer).
   */
readonly batchSize?: For Bicep, you can use theany()function.;

/**
   * Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string).
   */
readonly customRfcReadTableFunctionModule?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for SAP table read in parallel. Possible values include: "None", "PartitionOnInt", "PartitionOnCalendarYear", "PartitionOnCalendarMonth", "PartitionOnCalendarDate", "PartitionOnTime".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for SAP table source partitioning.
   */
readonly partitionSettings?: SapTablePartitionSettings;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string).
   */
readonly rfcTableFields?: For Bicep, you can use theany()function.;

/**
   * The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string).
   */
readonly rfcTableOptions?: For Bicep, you can use theany()function.;

/**
   * The number of rows to be retrieved. Type: integer(or Expression with resultType integer).
   */
readonly rowCount?: For Bicep, you can use theany()function.;

/**
   * The number of rows that will be skipped. Type: integer (or Expression with resultType integer).
   */
readonly rowSkips?: For Bicep, you can use theany()function.;

/**
   * The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string).
   */
readonly sapDataColumnDelimiter?: For Bicep, you can use theany()function.;

/**
   * The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string).
   */
readonly maxPartitionsNumber?: For Bicep, you can use theany()function.;

/**
   * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionLowerBound?: For Bicep, you can use theany()function.;

/**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionUpperBound?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ServiceNowSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SharePonumberOnlineListSource';

/**
   * The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly httpRequestTimeout?: For Bicep, you can use theany()function.;

/**
   * The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ShopifySource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SnowflakeSource';

/**
   * Snowflake export settings.
   */
readonly exportSettings: SnowflakeExportCopyCommand;

/**
   * Snowflake Sql query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
   */
readonly additionalCopyOptions?: object;

/**
   * Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" }
   */
readonly additionalFormatOptions?: object;

/**
   * The export setting type.
   */
readonly type: string;

/**
   * Copy source type.
   */
readonly type: 'SparkSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SqlDWSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Sql source partitioning.
   */
readonly partitionSettings?: SqlPartitionSettings;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * SQL Data Warehouse reader query. Type: string (or Expression with resultType string).
   */
readonly sqlReaderQuery?: For Bicep, you can use theany()function.;

/**
   * Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
readonly sqlReaderStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter.
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SqlMISource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Sql source partitioning.
   */
readonly partitionSettings?: SqlPartitionSettings;

/**
   * Which additional types to produce.
   */
readonly produceAdditionalTypes?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
readonly sqlReaderQuery?: For Bicep, you can use theany()function.;

/**
   * Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
readonly sqlReaderStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SqlServerSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Sql source partitioning.
   */
readonly partitionSettings?: SqlPartitionSettings;

/**
   * Which additional types to produce.
   */
readonly produceAdditionalTypes?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
readonly sqlReaderQuery?: For Bicep, you can use theany()function.;

/**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
readonly sqlReaderStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SqlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string).
   */
readonly isolationLevel?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for Sql source partitioning.
   */
readonly partitionSettings?: SqlPartitionSettings;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * SQL reader query. Type: string (or Expression with resultType string).
   */
readonly sqlReaderQuery?: For Bicep, you can use theany()function.;

/**
   * Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string).
   */
readonly sqlReaderStoredProcedureName?: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SquareSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'SybaseSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Database query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'TeradataSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * The partition mechanism that will be used for teradata read in parallel. Possible values include: "None", "Hash", "DynamicRange".
   */
readonly partitionOption?: For Bicep, you can use theany()function.;

/**
   * The settings that will be leveraged for teradata source partitioning.
   */
readonly partitionSettings?: TeradataPartitionSettings;

/**
   * Teradata query. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionColumnName?: For Bicep, you can use theany()function.;

/**
   * The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionLowerBound?: For Bicep, you can use theany()function.;

/**
   * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
   */
readonly partitionUpperBound?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'VerticaSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'WebSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'XeroSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'XmlSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * Xml format settings.
   */
readonly formatSettings?: XmlReadSettings;

/**
   * Xml store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Compression settings.
   */
readonly compressionProperties?: CompressionReadSettings;

/**
   * Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
   */
readonly detectDataType?: For Bicep, you can use theany()function.;

/**
   * Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object).
   */
readonly namespacePrefixes?: For Bicep, you can use theany()function.;

/**
   * Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean).
   */
readonly namespaces?: For Bicep, you can use theany()function.;

/**
   * The read setting type.
   */
readonly type: string;

/**
   * Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string).
   */
readonly validationMode?: For Bicep, you can use theany()function.;

/**
   * Copy source type.
   */
readonly type: 'ZohoSource';

/**
   * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
   */
readonly additionalColumns?: For Bicep, you can use theany()function.;

/**
   * A query to retrieve data from source. Type: string (or Expression with resultType string).
   */
readonly query?: For Bicep, you can use theany()function.;

/**
   * Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly queryTimeout?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly enableCompression?: For Bicep, you can use theany()function.;

/**
   * Staging linked service reference.
   */
readonly linkedServiceName: LinkedServiceReference;

/**
   * The path to storage for storing the interim data. Type: string (or Expression with resultType string).
   */
readonly path?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Custom';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Custom activity properties.
   */
readonly typeProperties: CustomActivityTypeProperties;

/**
   * Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double).
   */
readonly autoUserSpecification?: For Bicep, you can use theany()function.;

/**
   * Command for custom activity Type: string (or Expression with resultType string).
   */
readonly command: For Bicep, you can use theany()function.;

/**
   * User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
   */
readonly extendedProperties?: object;

/**
   * Folder path for resource files Type: string (or Expression with resultType string).
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * Reference objects
   */
readonly referenceObjects?: CustomActivityReferenceObject;

/**
   * Resource linked service reference.
   */
readonly resourceLinkedService?: LinkedServiceReference;

/**
   * The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double).
   */
readonly retentionTimeInDays?: For Bicep, you can use theany()function.;

/**
   * Dataset references.
   */
readonly datasets?: DatasetReference[];

/**
   * Linked service references.
   */
readonly linkedServices?: LinkedServiceReference[];

/**
   * Type of activity.
   */
readonly type: 'DatabricksNotebook';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Databricks Notebook activity properties.
   */
readonly typeProperties: DatabricksNotebookActivityTypeProperties;

/**
   * Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
   */
readonly baseParameters?: object;

/**
   * A list of libraries to be installed on the cluster that will execute the job.
   */
readonly libraries?: object;

/**
   * The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).
   */
readonly notebookPath: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'DatabricksSparkJar';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Databricks SparkJar activity properties.
   */
readonly typeProperties: DatabricksSparkJarActivityTypeProperties;

/**
   * A list of libraries to be installed on the cluster that will execute the job.
   */
readonly libraries?: object;

/**
   * The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
   */
readonly mainClassName: For Bicep, you can use theany()function.;

/**
   * Parameters that will be passed to the main method.
   */
readonly parameters?: any[];

/**
   * Type of activity.
   */
readonly type: 'DatabricksSparkPython';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Databricks SparkPython activity properties.
   */
readonly typeProperties: DatabricksSparkPythonActivityTypeProperties;

/**
   * A list of libraries to be installed on the cluster that will execute the job.
   */
readonly libraries?: object;

/**
   * Command line parameters that will be passed to the Python file.
   */
readonly parameters?: any[];

/**
   * The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).
   */
readonly pythonFile: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'DataLakeAnalyticsU-SQL';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Data Lake Analytics U-SQL activity properties.
   */
readonly typeProperties: DataLakeAnalyticsUsqlActivityTypeProperties;

/**
   * Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string).
   */
readonly compilationMode?: For Bicep, you can use theany()function.;

/**
   * The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1.
   */
readonly degreeOfParallelism?: For Bicep, you can use theany()function.;

/**
   * Parameters for U-SQL job request.
   */
readonly parameters?: object;

/**
   * Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1.
   */
readonly priority?: For Bicep, you can use theany()function.;

/**
   * Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string).
   */
readonly runtimeVersion?: For Bicep, you can use theany()function.;

/**
   * Script linked service reference.
   */
readonly scriptLinkedService: LinkedServiceReference;

/**
   * Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).
   */
readonly scriptPath: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Delete';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Delete activity properties.
   */
readonly typeProperties: DeleteActivityTypeProperties;

/**
   * Delete activity dataset reference.
   */
readonly dataset: DatasetReference;

/**
   * Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly enableLogging?: For Bicep, you can use theany()function.;

/**
   * Log storage settings customer need to provide when enableLogging is true.
   */
readonly logStorageSettings?: LogStorageSettings;

/**
   * The max concurrent connections to connect data source at the same time.
   */
readonly maxConcurrentConnections?: number;

/**
   * If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly recursive?: For Bicep, you can use theany()function.;

/**
   * Delete activity store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Type of activity.
   */
readonly type: 'ExecuteDataFlow';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Execute data flow activity properties.
   */
readonly typeProperties: ExecuteDataFlowActivityTypeProperties;

/**
   * Compute properties for data flow activity.
   */
readonly compute?: ExecuteDataFlowActivityTypePropertiesCompute;

/**
   * Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
   */
readonly continueOnError?: For Bicep, you can use theany()function.;

/**
   * Data flow reference.
   */
readonly dataFlow: DataFlowReference;

/**
   * The integration runtime reference.
   */
readonly integrationRuntime?: IntegrationRuntimeReference;

/**
   * Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
   */
readonly runConcurrently?: For Bicep, you can use theany()function.;

/**
   * Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
   */
readonly sourceStagingConcurrency?: For Bicep, you can use theany()function.;

/**
   * Staging info for execute data flow activity.
   */
readonly staging?: DataFlowStagingInfo;

/**
   * Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)
   */
readonly traceLevel?: For Bicep, you can use theany()function.;

/**
   * Compute type of the cluster which will execute data flow job. Possible values include: 'General', 'MemoryOptimized', 'ComputeOptimized'. Type: string (or Expression with resultType string)
   */
readonly computeType?: For Bicep, you can use theany()function.;

/**
   * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. Type: integer (or Expression with resultType integer)
   */
readonly coreCount?: For Bicep, you can use theany()function.;

/**
   * Reference data flow parameters from dataset.
   */
readonly datasetParameters?: For Bicep, you can use theany()function.;

/**
   * Data flow parameters
   */
readonly parameters?: object;

/**
   * Reference data flow name.
   */
readonly referenceName: string;

/**
   * Data flow reference type.
   */
readonly type: 'DataFlowReference';

/**
   * Arguments for integration runtime.
   */
readonly parameters?: object;

/**
   * Reference integration runtime name.
   */
readonly referenceName: string;

/**
   * Type of integration runtime.
   */
readonly type: 'IntegrationRuntimeReference';

/**
   * Folder path for staging blob. Type: string (or Expression with resultType string)
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * Staging linked service reference.
   */
readonly linkedService?: LinkedServiceReference;

/**
   * Type of activity.
   */
readonly type: 'ExecutePipeline';

/**
   * Execute pipeline activity policy.
   */
readonly policy?: ExecutePipelineActivityPolicy;

/**
   * Execute pipeline activity properties.
   */
readonly typeProperties: ExecutePipelineActivityTypeProperties;

/**
   * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
   */
readonly secureInput?: bool;

/**
   * Pipeline parameters.
   */
readonly parameters?: object;

/**
   * Pipeline reference.
   */
readonly pipeline: PipelineReference;

/**
   * Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.
   */
readonly waitOnCompletion?: bool;

/**
   * Reference pipeline name.
   */
readonly referenceName: string;

/**
   * Pipeline reference type.
   */
readonly type: 'PipelineReference';

/**
   * Type of activity.
   */
readonly type: 'ExecuteSSISPackage';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Execute SSIS package activity properties.
   */
readonly typeProperties: ExecuteSsisPackageActivityTypeProperties;

/**
   * The integration runtime reference.
   */
readonly connectVia: IntegrationRuntimeReference;

/**
   * The environment path to execute the SSIS package. Type: string (or Expression with resultType string).
   */
readonly environmentPath?: For Bicep, you can use theany()function.;

/**
   * The package execution credential.
   */
readonly executionCredential?: SsisExecutionCredential;

/**
   * The logging level of SSIS package execution. Type: string (or Expression with resultType string).
   */
readonly loggingLevel?: For Bicep, you can use theany()function.;

/**
   * SSIS package execution log location.
   */
readonly logLocation?: SsisLogLocation;

/**
   * The package level connection managers to execute the SSIS package.
   */
readonly packageConnectionManagers?: object;

/**
   * SSIS package location.
   */
readonly packageLocation: SsisPackageLocation;

/**
   * The package level parameters to execute the SSIS package.
   */
readonly packageParameters?: object;

/**
   * The project level connection managers to execute the SSIS package.
   */
readonly projectConnectionManagers?: object;

/**
   * The project level parameters to execute the SSIS package.
   */
readonly projectParameters?: object;

/**
   * The property overrides to execute the SSIS package.
   */
readonly propertyOverrides?: object;

/**
   * Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string).
   */
readonly runtime?: For Bicep, you can use theany()function.;

/**
   * Domain for windows authentication.
   */
readonly domain: For Bicep, you can use theany()function.;

/**
   * Password for windows authentication.
   */
readonly password: SecureString;

/**
   * UseName for windows authentication.
   */
readonly userName: For Bicep, you can use theany()function.;

/**
   * Type of the secret.
   */
readonly type: string;

/**
   * Value of secure string.
   */
readonly value: string;

/**
   * The SSIS package execution log path. Type: string (or Expression with resultType string).
   */
readonly logPath: For Bicep, you can use theany()function.;

/**
   * The type of SSIS log location.
   */
readonly type: 'File';

/**
   * SSIS package execution log location properties.
   */
readonly typeProperties: SsisLogLocationTypeProperties;

/**
   * The package execution log access credential.
   */
readonly accessCredential?: SsisAccessCredential;

/**
   * Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly logRefreshInterval?: For Bicep, you can use theany()function.;

/**
   * Domain for windows authentication.
   */
readonly domain: For Bicep, you can use theany()function.;

/**
   * Password for windows authentication.
   */
readonly password: SecretBase;

/**
   * UseName for windows authentication.
   */
readonly userName: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AzureKeyVaultSecretSecureString;

/**
   * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
   */
readonly secretName: For Bicep, you can use theany()function.;

/**
   * The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
   */
readonly secretVersion?: For Bicep, you can use theany()function.;

/**
   * The Azure Key Vault linked service reference.
   */
readonly store: LinkedServiceReference;

/**
   * Type of the secret.
   */
readonly type: string;

/**
   * The SSIS package path. Type: string (or Expression with resultType string).
   */
readonly packagePath?: For Bicep, you can use theany()function.;

/**
   * The type of SSIS package location.
   */
readonly type?: 'File''InlinePackage''PackageStore''SSISDB';

/**
   * SSIS package location properties.
   */
readonly typeProperties?: SsisPackageLocationTypeProperties;

/**
   * The package access credential.
   */
readonly accessCredential?: SsisAccessCredential;

/**
   * The embedded child package list.
   */
readonly childPackages?: SsisChildPackage[];

/**
   * The configuration file access credential.
   */
readonly configurationAccessCredential?: SsisAccessCredential;

/**
   * The configuration file of the package execution. Type: string (or Expression with resultType string).
   */
readonly configurationPath?: For Bicep, you can use theany()function.;

/**
   * The embedded package content. Type: string (or Expression with resultType string).
   */
readonly packageContent?: For Bicep, you can use theany()function.;

/**
   * The embedded package last modified date.
   */
readonly packageLastModifiedDate?: string;

/**
   * The package name.
   */
readonly packageName?: string;

/**
   * Password of the package.
   */
readonly packagePassword?: SecretBase;

/**
   * Content for embedded child package. Type: string (or Expression with resultType string).
   */
readonly packageContent: For Bicep, you can use theany()function.;

/**
   * Last modified date for embedded child package.
   */
readonly packageLastModifiedDate?: string;

/**
   * Name for embedded child package.
   */
readonly packageName?: string;

/**
   * Path for embedded child package. Type: string (or Expression with resultType string).
   */
readonly packagePath: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'ExecuteWranglingDataflow';

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Execute power query activity properties.
   */
readonly typeProperties: ExecutePowerQueryActivityTypeProperties;

/**
   * Compute properties for data flow activity.
   */
readonly compute?: ExecuteDataFlowActivityTypePropertiesCompute;

/**
   * Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
   */
readonly continueOnError?: For Bicep, you can use theany()function.;

/**
   * Data flow reference.
   */
readonly dataFlow: DataFlowReference;

/**
   * The integration runtime reference.
   */
readonly integrationRuntime?: IntegrationRuntimeReference;

/**
   * List of mapping for Power Query mashup query to sink dataset(s).
   */
readonly queries?: PowerQuerySinkMapping[];

/**
   * Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
   */
readonly runConcurrently?: For Bicep, you can use theany()function.;

/**
   * (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName.
   */
readonly sinks?: object;

/**
   * Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
   */
readonly sourceStagingConcurrency?: For Bicep, you can use theany()function.;

/**
   * Staging info for execute data flow activity.
   */
readonly staging?: DataFlowStagingInfo;

/**
   * Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)
   */
readonly traceLevel?: For Bicep, you can use theany()function.;

/**
   * List of sinks mapped to Power Query mashup query.
   */
readonly dataflowSinks?: PowerQuerySink[];

/**
   * Name of the query in Power Query mashup document.
   */
readonly queryName?: string;

/**
   * Dataset reference.
   */
readonly dataset?: DatasetReference;

/**
   * Transformation description.
   */
readonly description?: string;

/**
   * Flowlet Reference
   */
readonly flowlet?: DataFlowReference;

/**
   * Linked service reference.
   */
readonly linkedService?: LinkedServiceReference;

/**
   * Rejected data linked service reference.
   */
readonly rejectedDataLinkedService?: LinkedServiceReference;

/**
   * Schema linked service reference.
   */
readonly schemaLinkedService?: LinkedServiceReference;

/**
   * sink script.
   */
readonly script?: string;

/**
   * Type of activity.
   */
readonly type: 'Fail';

/**
   * Fail activity properties.
   */
readonly typeProperties: FailActivityTypeProperties;

/**
   * The error code that categorizes the error type of the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string).
   */
readonly errorCode: For Bicep, you can use theany()function.;

/**
   * The error message that surfaced in the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string).
   */
readonly message: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Filter';

/**
   * Filter activity properties.
   */
readonly typeProperties: FilterActivityTypeProperties;

/**
   * Condition to be used for filtering the input.
   */
readonly condition: Expression;

/**
   * Input array on which filter should be applied.
   */
readonly items: Expression;

/**
   * Expression type.
   */
readonly type: 'Expression';

/**
   * Expression value.
   */
readonly value: string;

/**
   * Type of activity.
   */
readonly type: 'ForEach';

/**
   * ForEach activity properties.
   */
readonly typeProperties: ForEachActivityTypeProperties;

/**
   * List of activities to execute .
   */
readonly activities: Activity[];

/**
   * Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
   */
readonly batchCount?: number;

/**
   * Should the loop be executed in sequence or in parallel (max 50)
   */
readonly isSequential?: bool;

/**
   * Collection to iterate.
   */
readonly items: Expression;

/**
   * Type of activity.
   */
readonly type: 'GetMetadata';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * GetMetadata activity properties.
   */
readonly typeProperties: GetMetadataActivityTypeProperties;

/**
   * GetMetadata activity dataset reference.
   */
readonly dataset: DatasetReference;

/**
   * Fields of metadata to get from dataset.
   */
readonly fieldList?: any[];

/**
   * GetMetadata activity format settings.
   */
readonly formatSettings?: FormatReadSettings;

/**
   * GetMetadata activity store settings.
   */
readonly storeSettings?: StoreReadSettings;

/**
   * Set the object type
   */
readonly type: BinaryReadSettingsDelimitedTextReadSettingsJsonReadSettingsXmlReadSettings;

/**
   * Type of activity.
   */
readonly type: 'HDInsightHive';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * HDInsight Hive activity properties.
   */
readonly typeProperties: HDInsightHiveActivityTypeProperties;

/**
   * User specified arguments to HDInsightActivity.
   */
readonly arguments?: any[];

/**
   * Allows user to specify defines for Hive job request.
   */
readonly defines?: object;

/**
   * Debug info option.
   */
readonly getDebugInfo?: 'Always''Failure''None';

/**
   * Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package)
   */
readonly queryTimeout?: number;

/**
   * Script linked service reference.
   */
readonly scriptLinkedService?: LinkedServiceReference;

/**
   * Script path. Type: string (or Expression with resultType string).
   */
readonly scriptPath?: For Bicep, you can use theany()function.;

/**
   * Storage linked service references.
   */
readonly storageLinkedServices?: LinkedServiceReference[];

/**
   * User specified arguments under hivevar namespace.
   */
readonly variables?: any[];

/**
   * Type of activity.
   */
readonly type: 'HDInsightMapReduce';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * HDInsight MapReduce activity properties.
   */
readonly typeProperties: HDInsightMapReduceActivityTypeProperties;

/**
   * User specified arguments to HDInsightActivity.
   */
readonly arguments?: any[];

/**
   * Class name. Type: string (or Expression with resultType string).
   */
readonly className: For Bicep, you can use theany()function.;

/**
   * Allows user to specify defines for the MapReduce job request.
   */
readonly defines?: object;

/**
   * Debug info option.
   */
readonly getDebugInfo?: 'Always''Failure''None';

/**
   * Jar path. Type: string (or Expression with resultType string).
   */
readonly jarFilePath: For Bicep, you can use theany()function.;

/**
   * Jar libs.
   */
readonly jarLibs?: any[];

/**
   * Jar linked service reference.
   */
readonly jarLinkedService?: LinkedServiceReference;

/**
   * Storage linked service references.
   */
readonly storageLinkedServices?: LinkedServiceReference[];

/**
   * Type of activity.
   */
readonly type: 'HDInsightPig';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * HDInsight Pig activity properties.
   */
readonly typeProperties: HDInsightPigActivityTypeProperties;

/**
   * User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array).
   */
readonly arguments?: For Bicep, you can use theany()function.;

/**
   * Allows user to specify defines for Pig job request.
   */
readonly defines?: object;

/**
   * Debug info option.
   */
readonly getDebugInfo?: 'Always''Failure''None';

/**
   * Script linked service reference.
   */
readonly scriptLinkedService?: LinkedServiceReference;

/**
   * Script path. Type: string (or Expression with resultType string).
   */
readonly scriptPath?: For Bicep, you can use theany()function.;

/**
   * Storage linked service references.
   */
readonly storageLinkedServices?: LinkedServiceReference[];

/**
   * Type of activity.
   */
readonly type: 'HDInsightSpark';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * HDInsight spark activity properties.
   */
readonly typeProperties: HDInsightSparkActivityTypeProperties;

/**
   * The user-specified arguments to HDInsightSparkActivity.
   */
readonly arguments?: any[];

/**
   * The application's Java/Spark main class.
   */
readonly className?: string;

/**
   * The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
   */
readonly entryFilePath: For Bicep, you can use theany()function.;

/**
   * Debug info option.
   */
readonly getDebugInfo?: 'Always''Failure''None';

/**
   * The user to impersonate that will execute the job. Type: string (or Expression with resultType string).
   */
readonly proxyUser?: For Bicep, you can use theany()function.;

/**
   * The root path in 'sparkJobLinkedService' for all the jobâs files. Type: string (or Expression with resultType string).
   */
readonly rootPath: For Bicep, you can use theany()function.;

/**
   * Spark configuration property.
   */
readonly sparkConfig?: object;

/**
   * The storage linked service for uploading the entry file and dependencies, and for receiving logs.
   */
readonly sparkJobLinkedService?: LinkedServiceReference;

/**
   * Type of activity.
   */
readonly type: 'HDInsightStreaming';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * HDInsight streaming activity properties.
   */
readonly typeProperties: HDInsightStreamingActivityTypeProperties;

/**
   * User specified arguments to HDInsightActivity.
   */
readonly arguments?: any[];

/**
   * Combiner executable name. Type: string (or Expression with resultType string).
   */
readonly combiner?: For Bicep, you can use theany()function.;

/**
   * Command line environment values.
   */
readonly commandEnvironment?: any[];

/**
   * Allows user to specify defines for streaming job request.
   */
readonly defines?: object;

/**
   * Linked service reference where the files are located.
   */
readonly fileLinkedService?: LinkedServiceReference;

/**
   * Paths to streaming job files. Can be directories.
   */
readonly filePaths: any[];

/**
   * Debug info option.
   */
readonly getDebugInfo?: 'Always''Failure''None';

/**
   * Input blob path. Type: string (or Expression with resultType string).
   */
readonly input: For Bicep, you can use theany()function.;

/**
   * Mapper executable name. Type: string (or Expression with resultType string).
   */
readonly mapper: For Bicep, you can use theany()function.;

/**
   * Output blob path. Type: string (or Expression with resultType string).
   */
readonly output: For Bicep, you can use theany()function.;

/**
   * Reducer executable name. Type: string (or Expression with resultType string).
   */
readonly reducer: For Bicep, you can use theany()function.;

/**
   * Storage linked service references.
   */
readonly storageLinkedServices?: LinkedServiceReference[];

/**
   * Type of activity.
   */
readonly type: 'IfCondition';

/**
   * IfCondition activity properties.
   */
readonly typeProperties: IfConditionActivityTypeProperties;

/**
   * An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed.
   */
readonly expression: Expression;

/**
   * List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
   */
readonly ifFalseActivities?: Activity[];

/**
   * List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.
   */
readonly ifTrueActivities?: Activity[];

/**
   * Type of activity.
   */
readonly type: 'Lookup';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Lookup activity properties.
   */
readonly typeProperties: LookupActivityTypeProperties;

/**
   * Lookup activity dataset reference.
   */
readonly dataset: DatasetReference;

/**
   * Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly firstRowOnly?: For Bicep, you can use theany()function.;

/**
   * Dataset-specific source properties, same as copy activity source.
   */
readonly source: CopySource;

/**
   * Type of activity.
   */
readonly type: 'Script';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Script activity properties.
   */
readonly typeProperties: ScriptActivityTypeProperties;

/**
   * Log settings of script activity.
   */
readonly logSettings?: ScriptActivityTypePropertiesLogSettings;

/**
   * ScriptBlock execution timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly scriptBlockExecutionTimeout?: For Bicep, you can use theany()function.;

/**
   * Array of script blocks. Type: array.
   */
readonly scripts?: ScriptActivityScriptBlock[];

/**
   * The destination of logs. Type: string.
   */
readonly logDestination: 'ActivityOutput''ExternalStore';

/**
   * Log location settings customer needs to provide when enabling log.
   */
readonly logLocationSettings?: LogLocationSettings;

/**
   * Array of script parameters. Type: array.
   */
readonly parameters?: ScriptActivityParameter[];

/**
   * The query text. Type: string (or Expression with resultType string).
   */
readonly text: For Bicep, you can use theany()function.;

/**
   * The type of the query. Type: string.
   */
readonly type: 'NonQuery''Query';

/**
   * The direction of the parameter.
   */
readonly direction?: 'Input''InputOutput''Output';

/**
   * The size of the output direction parameter.
   */
readonly size?: number;

/**
   * The type of the parameter.
   */
readonly type?: 'Boolean''DateTime''DateTimeOffset''Decimal''Double''Guid''Int16''Int32''Int64''Single''String''Timespan';

/**
   * The value of the parameter.
   */
readonly value?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'SetVariable';

/**
   * Set Variable activity properties.
   */
readonly typeProperties: SetVariableActivityTypeProperties;

/**
   * Value to be set. Could be a static value or Expression
   */
readonly value?: For Bicep, you can use theany()function.;

/**
   * Name of the variable whose value needs to be set.
   */
readonly variableName?: string;

/**
   * Type of activity.
   */
readonly type: 'SparkJob';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Execute spark job activity properties.
   */
readonly typeProperties: SynapseSparkJobActivityTypeProperties;

/**
   * User specified arguments to SynapseSparkJobDefinitionActivity.
   */
readonly args?: any[];

/**
   * The fully-qualified identifier or the main class that is in the main definition file, which will override the 'className' of the spark job definition you provide. Type: string (or Expression with resultType string).
   */
readonly className?: For Bicep, you can use theany()function.;

/**
   * Spark configuration properties, which will override the 'conf' of the spark job definition you provide.
   */
readonly conf?: For Bicep, you can use theany()function.;

/**
   * The type of the spark config.
   */
readonly configurationType?: 'Artifact''Customized''Default';

/**
   * Number of core and memory to be used for driver allocated in the specified Spark pool for the job, which will be used for overriding 'driverCores' and 'driverMemory' of the spark job definition you provide. Type: string (or Expression with resultType string).
   */
readonly driverSize?: For Bicep, you can use theany()function.;

/**
   * Number of core and memory to be used for executors allocated in the specified Spark pool for the job, which will be used for overriding 'executorCores' and 'executorMemory' of the spark job definition you provide. Type: string (or Expression with resultType string).
   */
readonly executorSize?: For Bicep, you can use theany()function.;

/**
   * The main file used for the job, which will override the 'file' of the spark job definition you provide. Type: string (or Expression with resultType string).
   */
readonly file?: For Bicep, you can use theany()function.;

/**
   * (Deprecated. Please use pythonCodeReference and filesV2) Additional files used for reference in the main definition file, which will override the 'files' of the spark job definition you provide.
   */
readonly files?: any[];

/**
   * Additional files used for reference in the main definition file, which will override the 'jars' and 'files' of the spark job definition you provide.
   */
readonly filesV2?: any[];

/**
   * Number of executors to launch for this job, which will override the 'numExecutors' of the spark job definition you provide. Type: integer (or Expression with resultType integer).
   */
readonly numExecutors?: For Bicep, you can use theany()function.;

/**
   * Additional python code files used for reference in the main definition file, which will override the 'pyFiles' of the spark job definition you provide.
   */
readonly pythonCodeReference?: any[];

/**
   * Scanning subfolders from the root folder of the main definition file, these files will be added as reference files. The folders named 'jars', 'pyFiles', 'files' or 'archives' will be scanned, and the folders name are case sensitive. Type: boolean (or Expression with resultType boolean).
   */
readonly scanFolder?: For Bicep, you can use theany()function.;

/**
   * Spark configuration property.
   */
readonly sparkConfig?: object;

/**
   * Synapse spark job reference.
   */
readonly sparkJob: SynapseSparkJobReference;

/**
   * The name of the big data pool which will be used to execute the spark batch job, which will override the 'targetBigDataPool' of the spark job definition you provide.
   */
readonly targetBigDataPool?: BigDataPoolParametrizationReference;

/**
   * The spark configuration of the spark job.
   */
readonly targetSparkConfiguration?: SparkConfigurationParametrizationReference;

/**
   * Reference spark job name. Expression with resultType string.
   */
readonly referenceName: For Bicep, you can use theany()function.;

/**
   * Synapse spark job reference type.
   */
readonly type: 'SparkJobDefinitionReference';

/**
   * Reference big data pool name. Type: string (or Expression with resultType string).
   */
readonly referenceName: For Bicep, you can use theany()function.;

/**
   * Big data pool reference type.
   */
readonly type: 'BigDataPoolReference';

/**
   * Reference spark configuration name. Type: string (or Expression with resultType string).
   */
readonly referenceName: For Bicep, you can use theany()function.;

/**
   * Spark configuration reference type.
   */
readonly type: 'SparkConfigurationReference';

/**
   * Type of activity.
   */
readonly type: 'SqlServerStoredProcedure';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * SQL stored procedure activity properties.
   */
readonly typeProperties: SqlServerStoredProcedureActivityTypeProperties;

/**
   * Stored procedure name. Type: string (or Expression with resultType string).
   */
readonly storedProcedureName: For Bicep, you can use theany()function.;

/**
   * Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
   */
readonly storedProcedureParameters?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Switch';

/**
   * Switch activity properties.
   */
readonly typeProperties: SwitchActivityTypeProperties;

/**
   * List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities.
   */
readonly cases?: SwitchCase[];

/**
   * List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action.
   */
readonly defaultActivities?: Activity[];

/**
   * An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed.
   */
readonly on: Expression;

/**
   * List of activities to execute for satisfied case condition.
   */
readonly activities?: Activity[];

/**
   * Expected value that satisfies the expression result of the 'on' property.
   */
readonly value?: string;

/**
   * Type of activity.
   */
readonly type: 'SynapseNotebook';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Execute Synapse notebook activity properties.
   */
readonly typeProperties: SynapseNotebookActivityTypeProperties;

/**
   * Spark configuration properties, which will override the 'conf' of the notebook you provide.
   */
readonly conf?: For Bicep, you can use theany()function.;

/**
   * Number of core and memory to be used for driver allocated in the specified Spark pool for the session, which will be used for overriding 'driverCores' and 'driverMemory' of the notebook you provide. Type: string (or Expression with resultType string).
   */
readonly driverSize?: For Bicep, you can use theany()function.;

/**
   * Number of core and memory to be used for executors allocated in the specified Spark pool for the session, which will be used for overriding 'executorCores' and 'executorMemory' of the notebook you provide. Type: string (or Expression with resultType string).
   */
readonly executorSize?: For Bicep, you can use theany()function.;

/**
   * Synapse notebook reference.
   */
readonly notebook: SynapseNotebookReference;

/**
   * Number of executors to launch for this session, which will override the 'numExecutors' of the notebook you provide.
   */
readonly numExecutors?: number;

/**
   * Notebook parameters.
   */
readonly parameters?: object;

/**
   * The name of the big data pool which will be used to execute the notebook.
   */
readonly sparkPool?: BigDataPoolParametrizationReference;

/**
   * Reference notebook name. Type: string (or Expression with resultType string).
   */
readonly referenceName: For Bicep, you can use theany()function.;

/**
   * Synapse notebook reference type.
   */
readonly type: 'NotebookReference';

/**
   * Type of activity.
   */
readonly type: 'Until';

/**
   * Until activity properties.
   */
readonly typeProperties: UntilActivityTypeProperties;

/**
   * List of activities to execute.
   */
readonly activities: Activity[];

/**
   * An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true
   */
readonly expression: Expression;

/**
   * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly timeout?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Validation';

/**
   * Validation activity properties.
   */
readonly typeProperties: ValidationActivityTypeProperties;

/**
   * Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean).
   */
readonly childItems?: For Bicep, you can use theany()function.;

/**
   * Validation activity dataset reference.
   */
readonly dataset: DatasetReference;

/**
   * Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer).
   */
readonly minimumSize?: For Bicep, you can use theany()function.;

/**
   * A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer).
   */
readonly sleep?: For Bicep, you can use theany()function.;

/**
   * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly timeout?: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'Wait';

/**
   * Wait activity properties.
   */
readonly typeProperties: WaitActivityTypeProperties;

/**
   * Duration in seconds.
   */
readonly waitTimeInSeconds: For Bicep, you can use theany()function.;

/**
   * Type of activity.
   */
readonly type: 'WebActivity';

/**
   * Linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * Activity policy.
   */
readonly policy?: ActivityPolicy;

/**
   * Web activity properties.
   */
readonly typeProperties: WebActivityTypeProperties;

/**
   * Authentication method used for calling the endpoint.
   */
readonly authentication?: WebActivityAuthentication;

/**
   * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
   */
readonly body?: For Bicep, you can use theany()function.;

/**
   * The integration runtime reference.
   */
readonly connectVia?: IntegrationRuntimeReference;

/**
   * List of datasets passed to web endpoint.
   */
readonly datasets?: DatasetReference[];

/**
   * When set to true, Certificate validation will be disabled.
   */
readonly disableCertValidation?: bool;

/**
   * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
   */
readonly headers?: For Bicep, you can use theany()function.;

/**
   * List of linked services passed to web endpoint.
   */
readonly linkedServices?: LinkedServiceReference[];

/**
   * Rest API method for target endpoint.
   */
readonly method: 'DELETE''GET''POST''PUT';

/**
   * Web activity target endpoint and path. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * Password for the PFX file or basic authentication / Secret when used for ServicePrincipal
   */
readonly password?: SecretBase;

/**
   * Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal
   */
readonly pfx?: SecretBase;

/**
   * Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string).
   */
readonly resource?: For Bicep, you can use theany()function.;

/**
   * Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal)
   */
readonly type?: string;

/**
   * Web activity authentication user name for basic authentication or ClientID when used for ServicePrincipal. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * TenantId for which Azure Auth token will be requested when using ServicePrincipal Authentication. Type: string (or Expression with resultType string).
   */
readonly userTenant?: For Bicep, you can use theany()function.;

/**
   * Reference credential name.
   */
readonly referenceName: string;

/**
   * Credential reference type.
   */
readonly type: 'CredentialReference';

/**
   * Type of activity.
   */
readonly type: 'WebHook';

/**
   * WebHook activity properties.
   */
readonly typeProperties: WebHookActivityTypeProperties;

/**
   * Authentication method used for calling the endpoint.
   */
readonly authentication?: WebActivityAuthentication;

/**
   * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
   */
readonly body?: For Bicep, you can use theany()function.;

/**
   * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
   */
readonly headers?: For Bicep, you can use theany()function.;

/**
   * Rest API method for target endpoint.
   */
readonly method: 'POST';

/**
   * When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean).
   */
readonly reportStatusOnCallBack?: For Bicep, you can use theany()function.;

/**
   * The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly timeout?: string;

/**
   * WebHook activity target endpoint and path. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * Pipeline ElapsedTime Metric Policy.
   */
readonly elapsedTimeMetric?: PipelineElapsedTimeMetricPolicy;

/**
   * TimeSpan value, after which an Azure Monitoring Metric is fired.
   */
readonly duration?: For Bicep, you can use theany()function.;
}

/**
 * DatafactoryFactoriesPipelines resource
 */
export class DatafactoryFactoriesPipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesPipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/pipelines@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesPipelinesProps): string {
    return JSON.stringify(
        {properties: {activities: [{dependsOn: [{activity: "string", dependencyConditions: ["string"]}], description: "string", name: "string", userProperties: [{name: "string"}], type: "string"}], annotations: ["${object}"], concurrency: "${int}", description: "string", folder: {name: "string"}, parameters: {}, policy: {elapsedTimeMetric: {}}, runDimensions: {}, variables: {}}}
    );
  }
}
