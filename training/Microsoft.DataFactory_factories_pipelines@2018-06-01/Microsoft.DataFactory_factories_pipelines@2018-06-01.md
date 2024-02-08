```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/pipelines@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      activities = [
        {
          dependsOn = [
            {
              activity = "string"
              dependencyConditions = [
                "string"
              ]
            }
          ]
          description = "string"
          name = "string"
          userProperties = [
            {
              name = "string"
            }
          ]
          type = "string"
          // For remaining properties, see Activity objects
        }
      ]
      annotations = [ object ]
      concurrency = int
      description = "string"
      folder = {
        name = "string"
      }
      parameters = {}
      policy = {
        elapsedTimeMetric = {}
      }
      runDimensions = {}
      variables = {}
    }
  })
}

```

### factories/pipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Properties of the pipeline. | Pipeline(required) |


### Pipeline

| Name | Description | Value |
|-|-|-|
| activities | List of activities in pipeline. | Activity[] |
| annotations | List of tags that can be used for describing the Pipeline. | any[] |
| concurrency | The max number of concurrent runs for the pipeline. | int |
| description | The description of the pipeline. | string |
| folder | The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. | PipelineFolder |
| parameters | List of parameters for pipeline. | object |
| policy | Pipeline Policy. | PipelinePolicy |
| runDimensions | Dimensions emitted by Pipeline. | object |
| variables | List of variables for pipeline. | object |


### Activity

| Name | Description | Value |
|-|-|-|
| dependsOn | Activity depends on condition. | ActivityDependency[] |
| description | Activity description. | string |
| name | Activity name. | string (required) |
| userProperties | Activity user properties. | UserProperty[] |
| type | Set the object type | AppendVariableAzureDataExplorerCommandAzureFunctionActivityAzureMLBatchExecutionAzureMLExecutePipelineAzureMLUpdateResourceCopyCustomDatabricksNotebookDatabricksSparkJarDatabricksSparkPythonDataLakeAnalyticsU-SQLDeleteExecuteDataFlowExecutePipelineExecuteSSISPackageExecuteWranglingDataflowFailFilterForEachGetMetadataHDInsightHiveHDInsightMapReduceHDInsightPigHDInsightSparkHDInsightStreamingIfConditionLookupScriptSetVariableSparkJobSqlServerStoredProcedureSwitchSynapseNotebookUntilValidationWaitWebActivityWebHook(required) |


### ActivityDependency

| Name | Description | Value |
|-|-|-|
| activity | Activity name. | string (required) |
| dependencyConditions | Match-Condition for the dependency. | String array containing any of:'Completed''Failed''Skipped''Succeeded' (required) |


### UserProperty

| Name | Description | Value |
|-|-|-|
| name | User property name. | string (required) |
| value | User property value. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### AppendVariableActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AppendVariable' (required) |
| typeProperties | Append Variable activity properties. | AppendVariableActivityTypeProperties(required) |


### AppendVariableActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| value | Value to be appended. Could be a static value or Expression | For Bicep, you can use theany()function. |
| variableName | Name of the variable whose value needs to be appended to. | string |


### AzureDataExplorerCommandActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureDataExplorerCommand' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure Data Explorer command activity properties. | AzureDataExplorerCommandActivityTypeProperties(required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### ActivityPolicy

| Name | Description | Value |
|-|-|-|
| retry | Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| retryIntervalInSeconds | Interval between each retry attempt (in seconds). The default is 30 sec. | int |
| secureInput | When set to true, Input from activity is considered as secure and will not be logged to monitoring. | bool |
| secureOutput | When set to true, Output from activity is considered as secure and will not be logged to monitoring. | bool |
| timeout | Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzureDataExplorerCommandActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| command | A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| commandTimeout | Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9]))..) | For Bicep, you can use theany()function. |


### AzureFunctionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureFunctionActivity' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure Function activity properties. | AzureFunctionActivityTypeProperties(required) |


### AzureFunctionActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| body | Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| functionName | Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function.(required) |
| headers | Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| method | Rest API method for target endpoint. | 'DELETE''GET''HEAD''OPTIONS''POST''PUT''TRACE' (required) |


### AzureMLBatchExecutionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureMLBatchExecution' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure ML Batch Execution activity properties. | AzureMLBatchExecutionActivityTypeProperties(required) |


### AzureMLBatchExecutionActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| globalParameters | Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. | object |
| webServiceInputs | Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. | object |
| webServiceOutputs | Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. | object |


### AzureMLExecutePipelineActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureMLExecutePipeline' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure ML Execute Pipeline activity properties. | AzureMLExecutePipelineActivityTypeProperties(required) |


### AzureMLExecutePipelineActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| continueOnStepFailure | Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| dataPathAssignments | Dictionary used for changing data path assignments without retraining. Values will be passed in the dataPathAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). | For Bicep, you can use theany()function. |
| experimentName | Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlParentRunId | The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlPipelineEndpointId | ID of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlPipelineId | ID of the published Azure ML pipeline. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlPipelineParameters | Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). | For Bicep, you can use theany()function. |
| version | Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureMLUpdateResourceActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureMLUpdateResource' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure ML Update Resource management activity properties. | AzureMLUpdateResourceActivityTypeProperties(required) |


### AzureMLUpdateResourceActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| trainedModelFilePath | The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| trainedModelLinkedServiceName | Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation. | LinkedServiceReference(required) |
| trainedModelName | Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### CopyActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Copy' (required) |
| inputs | List of inputs for the activity. | DatasetReference[] |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| outputs | List of outputs for the activity. | DatasetReference[] |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Copy activity properties. | CopyActivityTypeProperties(required) |


### DatasetReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for dataset. | object |
| referenceName | Reference dataset name. | string (required) |
| type | Dataset reference type. | 'DatasetReference' (required) |


### CopyActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataIntegrationUnits | Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| enableSkipIncompatibleRow | Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enableStaging | Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logSettings | Log settings customer needs provide when enabling log. | LogSettings |
| logStorageSettings | (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log. | LogStorageSettings |
| parallelCopies | Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| preserve | Preserve rules. | any[] |
| preserveRules | Preserve Rules. | any[] |
| redirectIncompatibleRowSettings | Redirect incompatible row settings when EnableSkipIncompatibleRow is true. | RedirectIncompatibleRowSettings |
| sink | Copy activity sink. | CopySink(required) |
| skipErrorFile | Specify the fault tolerance for data consistency. | SkipErrorFile |
| source | Copy activity source. | CopySource(required) |
| stagingSettings | Specifies interim staging settings when EnableStaging is true. | StagingSettings |
| translator | Copy activity translator. If not specified, tabular translator is used. | For Bicep, you can use theany()function. |
| validateDataConsistency | Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### LogSettings

| Name | Description | Value |
|-|-|-|
| copyActivityLogSettings | Specifies settings for copy activity log. | CopyActivityLogSettings |
| enableCopyActivityLog | Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logLocationSettings | Log location settings customer needs to provide when enabling log. | LogLocationSettings(required) |


### CopyActivityLogSettings

| Name | Description | Value |
|-|-|-|
| enableReliableLogging | Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logLevel | Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### LogLocationSettings

| Name | Description | Value |
|-|-|-|
| linkedServiceName | Log storage linked service reference. | LinkedServiceReference(required) |
| path | The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### LogStorageSettings

| Name | Description | Value |
|-|-|-|
| enableReliableLogging | Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| linkedServiceName | Log storage linked service reference. | LinkedServiceReference(required) |
| logLevel | Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| path | The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### RedirectIncompatibleRowSettings

| Name | Description | Value |
|-|-|-|
| linkedServiceName | Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| path | The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CopySink

| Name | Description | Value |
|-|-|-|
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sinkRetryCount | Sink retry count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sinkRetryWait | Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| writeBatchSize | Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| writeBatchTimeout | Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| type | Set the object type | AvroSinkAzureBlobFSSinkAzureDatabricksDeltaLakeSinkAzureDataExplorerSinkAzureDataLakeStoreSinkAzureMySqlSinkAzurePostgreSqlSinkAzureQueueSinkAzureSearchIndexSinkAzureSqlSinkAzureTableSinkBinarySinkBlobSinkCommonDataServiceForAppsSinkCosmosDbMongoDbApiSinkCosmosDbSqlApiSinkDelimitedTextSinkDocumentDbCollectionSinkDynamicsCrmSinkDynamicsSinkFileSystemSinkInformixSinkJsonSinkMicrosoftAccessSinkMongoDbAtlasSinkMongoDbV2SinkOdbcSinkOracleSinkOrcSinkParquetSinkRestSinkSalesforceServiceCloudSinkSalesforceSinkSapCloudForCustomerSinkSnowflakeSinkSqlDWSinkSqlMISinkSqlServerSinkSqlSink(required) |


### AvroSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AvroSink' (required) |
| formatSettings | Avro format settings. | AvroWriteSettings |
| storeSettings | Avro store settings. | StoreWriteSettings |


### AvroWriteSettings

| Name | Description | Value |
|-|-|-|
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| recordName | Top level record name in write result, which is required in AVRO spec. | string |
| recordNamespace | Record namespace in the write result. | string |
| type | The write setting type. | string (required) |


### StoreWriteSettings

| Name | Description | Value |
|-|-|-|
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | Set the object type | AzureBlobFSWriteSettingsAzureBlobStorageWriteSettingsAzureDataLakeStoreWriteSettingsAzureFileStorageWriteSettingsFileServerWriteSettingsSftpWriteSettings(required) |


### AzureBlobFSWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureBlobFSWriteSettings' (required) |
| blockSizeInMB | Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |


### AzureBlobStorageWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureBlobStorageWriteSettings' (required) |
| blockSizeInMB | Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |


### AzureDataLakeStoreWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureDataLakeStoreWriteSettings' (required) |
| expiryDateTime | Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |


### AzureFileStorageWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureFileStorageWriteSettings' (required) |


### FileServerWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'FileServerWriteSettings' (required) |


### SftpWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'SftpWriteSettings' (required) |
| operationTimeout | Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| useTempFileRename | Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureBlobFSSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureBlobFSSink' (required) |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| metadata | Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects). | MetadataItem[] |


### MetadataItem

| Name | Description | Value |
|-|-|-|
| name | Metadata item key name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| value | Metadata item value. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureDatabricksDeltaLakeSink' (required) |
| importSettings | Azure Databricks Delta Lake import settings. | AzureDatabricksDeltaLakeImportCommand |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeImportCommand

| Name | Description | Value |
|-|-|-|
| dateFormat | Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| timestampFormat | Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | The import setting type. | string (required) |


### AzureDataExplorerSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureDataExplorerSink' (required) |
| flushImmediately | If set to true, any aggregation will be skipped. Default is false. Type: boolean. | For Bicep, you can use theany()function. |
| ingestionMappingAsJson | An explicit column mapping description provided in a json format. Type: string. | For Bicep, you can use theany()function. |
| ingestionMappingName | A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. | For Bicep, you can use theany()function. |


### AzureDataLakeStoreSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureDataLakeStoreSink' (required) |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| enableAdlsSingleFileParallel | Single File Parallel. | For Bicep, you can use theany()function. |


### AzureMySqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureMySqlSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzurePostgreSqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzurePostgreSqlSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureQueueSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureQueueSink' (required) |


### AzureSearchIndexSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureSearchIndexSink' (required) |
| writeBehavior | Specify the write behavior when upserting documents into Azure Search Index. | 'Merge''Upload' |


### AzureSqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureSqlSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | Write behavior when copying data into Azure SQL. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SqlUpsertSettings

| Name | Description | Value |
|-|-|-|
| interimSchemaName | Schema name for interim table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| keys | Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| useTempDB | Specifies whether to use temp db for upsert interim table. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureTableSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureTableSink' (required) |
| azureTableDefaultPartitionKeyValue | Azure Table default partition key value. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureTableInsertType | Azure Table insert type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureTablePartitionKeyName | Azure Table partition key name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureTableRowKeyName | Azure Table row key name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### BinarySink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'BinarySink' (required) |
| storeSettings | Binary store settings. | StoreWriteSettings |


### BlobSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'BlobSink' (required) |
| blobWriterAddHeader | Blob writer add header. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| blobWriterDateTimeFormat | Blob writer date time format. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| blobWriterOverwriteFiles | Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| metadata | Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects). | MetadataItem[] |


### CommonDataServiceForAppsSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'CommonDataServiceForAppsSink' (required) |
| alternateKeyName | The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. | 'Upsert' (required) |


### CosmosDbMongoDbApiSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'CosmosDbMongoDbApiSink' (required) |
| writeBehavior | Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CosmosDbSqlApiSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'CosmosDbSqlApiSink' (required) |
| writeBehavior | Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. | For Bicep, you can use theany()function. |


### DelimitedTextSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DelimitedTextSink' (required) |
| formatSettings | DelimitedText format settings. | DelimitedTextWriteSettings |
| storeSettings | DelimitedText store settings. | StoreWriteSettings |


### DelimitedTextWriteSettings

| Name | Description | Value |
|-|-|-|
| fileExtension | The file extension used to create the files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| quoteAllText | Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### DocumentDbCollectionSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DocumentDbCollectionSink' (required) |
| nestingSeparator | Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| writeBehavior | Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. | For Bicep, you can use theany()function. |


### DynamicsCrmSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DynamicsCrmSink' (required) |
| alternateKeyName | The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. | 'Upsert' (required) |


### DynamicsSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DynamicsSink' (required) |
| alternateKeyName | The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. | 'Upsert' (required) |


### FileSystemSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'FileSystemSink' (required) |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |


### InformixSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'InformixSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### JsonSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'JsonSink' (required) |
| formatSettings | Json format settings. | JsonWriteSettings |
| storeSettings | Json store settings. | StoreWriteSettings |


### JsonWriteSettings

| Name | Description | Value |
|-|-|-|
| filePattern | File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### MicrosoftAccessSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'MicrosoftAccessSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbAtlasSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'MongoDbAtlasSink' (required) |
| writeBehavior | Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbV2Sink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'MongoDbV2Sink' (required) |
| writeBehavior | Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OdbcSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'OdbcSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OracleSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'OracleSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OrcSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'OrcSink' (required) |
| formatSettings | ORC format settings. | OrcWriteSettings |
| storeSettings | ORC store settings. | StoreWriteSettings |


### OrcWriteSettings

| Name | Description | Value |
|-|-|-|
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### ParquetSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'ParquetSink' (required) |
| formatSettings | Parquet format settings. | ParquetWriteSettings |
| storeSettings | Parquet store settings. | StoreWriteSettings |


### ParquetWriteSettings

| Name | Description | Value |
|-|-|-|
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### RestSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'RestSink' (required) |
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| httpCompressionType | Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| requestInterval | The time to await before sending next request, in milliseconds | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceServiceCloudSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SalesforceServiceCloudSink' (required) |
| externalIdFieldName | The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. Default is Insert. | 'Insert''Upsert' |


### SalesforceSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SalesforceSink' (required) |
| externalIdFieldName | The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. Default is Insert. | 'Insert''Upsert' |


### SapCloudForCustomerSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SapCloudForCustomerSink' (required) |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. Default is 'Insert'. | 'Insert''Update' |


### SnowflakeSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SnowflakeSink' (required) |
| importSettings | Snowflake import settings. | SnowflakeImportCopyCommand |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SnowflakeImportCopyCommand

| Name | Description | Value |
|-|-|-|
| additionalCopyOptions | Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } | object |
| additionalFormatOptions | Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" } | object |
| type | The import setting type. | string (required) |


### SqlDWSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlDWSink' (required) |
| allowCopyCommand | Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| allowPolyBase | Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| copyCommandSettings | Specifies Copy Command related settings when allowCopyCommand is true. | DWCopyCommandSettings |
| polyBaseSettings | Specifies PolyBase-related settings when allowPolyBase is true. | PolybaseSettings |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL DW upsert settings. | SqlDWUpsertSettings |
| writeBehavior | Write behavior when copying data into azure SQL DW. Type: SqlDWWriteBehaviorEnum (or Expression with resultType SqlDWWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### DWCopyCommandSettings

| Name | Description | Value |
|-|-|-|
| additionalOptions | Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } | object |
| defaultValues | Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects). | DWCopyCommandDefaultValue[] |


### DWCopyCommandDefaultValue

| Name | Description | Value |
|-|-|-|
| columnName | Column name. Type: object (or Expression with resultType string). | For Bicep, you can use theany()function. |
| defaultValue | The default value of the column. Type: object (or Expression with resultType string). | For Bicep, you can use theany()function. |


### PolybaseSettings

| Name | Description | Value |
|-|-|-|
| rejectSampleValue | Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| rejectType | Reject type. | 'percentage''value' |
| rejectValue | Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. | For Bicep, you can use theany()function. |
| useTypeDefault | Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### SqlDWUpsertSettings

| Name | Description | Value |
|-|-|-|
| interimSchemaName | Schema name for interim table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| keys | Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |


### SqlMISink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlMISink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | White behavior when copying data into azure SQL MI. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SqlServerSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlServerSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | Write behavior when copying data into sql server. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | Write behavior when copying data into sql. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SkipErrorFile

| Name | Description | Value |
|-|-|-|
| dataInconsistency | Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| fileMissing | Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### CopySource

| Name | Description | Value |
|-|-|-|
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sourceRetryCount | Source retry count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sourceRetryWait | Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| type | Set the object type | AmazonMWSSourceAmazonRdsForOracleSourceAmazonRdsForSqlServerSourceAmazonRedshiftSourceAvroSourceAzureBlobFSSourceAzureDatabricksDeltaLakeSourceAzureDataExplorerSourceAzureDataLakeStoreSourceAzureMariaDBSourceAzureMySqlSourceAzurePostgreSqlSourceAzureSqlSourceAzureTableSourceBinarySourceBlobSourceCassandraSourceCommonDataServiceForAppsSourceConcurSourceCosmosDbMongoDbApiSourceCosmosDbSqlApiSourceCouchbaseSourceDb2SourceDelimitedTextSourceDocumentDbCollectionSourceDrillSourceDynamicsAXSourceDynamicsCrmSourceDynamicsSourceEloquaSourceExcelSourceFileSystemSourceGoogleAdWordsSourceGoogleBigQuerySourceGreenplumSourceHBaseSourceHdfsSourceHiveSourceHttpSourceHubspotSourceImpalaSourceInformixSourceJiraSourceJsonSourceMagentoSourceMariaDBSourceMarketoSourceMicrosoftAccessSourceMongoDbAtlasSourceMongoDbSourceMongoDbV2SourceMySqlSourceNetezzaSourceODataSourceOdbcSourceOffice365SourceOracleServiceCloudSourceOracleSourceOrcSourceParquetSourcePaypalSourcePhoenixSourcePostgreSqlSourcePrestoSourceQuickBooksSourceRelationalSourceResponsysSourceRestSourceSalesforceMarketingCloudSourceSalesforceServiceCloudSourceSalesforceSourceSapBwSourceSapCloudForCustomerSourceSapEccSourceSapHanaSourceSapOdpSourceSapOpenHubSourceSapTableSourceServiceNowSourceSharePointOnlineListSourceShopifySourceSnowflakeSourceSparkSourceSqlDWSourceSqlMISourceSqlServerSourceSqlSourceSquareSourceSybaseSourceTeradataSourceVerticaSourceWebSourceXeroSourceXmlSourceZohoSource(required) |


### AmazonMWSSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonMWSSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AmazonRdsForOracleSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonRdsForOracleSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| oracleReaderQuery | AmazonRdsForOracle reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for AmazonRdsForOracle source partitioning. | AmazonRdsForOraclePartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AmazonRdsForOraclePartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionNames | Names of the physical partitions of AmazonRdsForOracle table. | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRdsForSqlServerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonRdsForSqlServerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SqlPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRedshiftSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonRedshiftSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| redshiftUnloadSettings | The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. | RedshiftUnloadSettings |


### RedshiftUnloadSettings

| Name | Description | Value |
|-|-|-|
| bucketName | The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| s3LinkedServiceName | The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source. | LinkedServiceReference(required) |


### AvroSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AvroSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | Avro store settings. | StoreReadSettings |


### StoreReadSettings

| Name | Description | Value |
|-|-|-|
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | Set the object type | AmazonS3CompatibleReadSettingsAmazonS3ReadSettingsAzureBlobFSReadSettingsAzureBlobStorageReadSettingsAzureDataLakeStoreReadSettingsAzureFileStorageReadSettingsFileServerReadSettingsFtpReadSettingsGoogleCloudStorageReadSettingsHdfsReadSettingsHttpReadSettingsOracleCloudStorageReadSettingsSftpReadSettings(required) |


### AmazonS3CompatibleReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AmazonS3CompatibleReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the S3 Compatible object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Amazon S3 Compatible wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Amazon S3 Compatible wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonS3ReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AmazonS3ReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the S3 object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobFSReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureBlobFSReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureBlobStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Azure blob wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataLakeStoreReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureDataLakeStoreReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| listAfter | Lists files after the value (exclusive) based on file/folder namesâ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| listBefore | Lists files before the value (inclusive) based on file/folder namesâ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | ADLS wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | ADLS wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureFileStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureFileStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### FileServerReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'FileServerReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileFilter | Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | FileServer wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | FileServer wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### FtpReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'FtpReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| disableChunking | If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| useBinaryTransfer | Specify whether to use binary transfer mode for FTP stores. | bool |
| wildcardFileName | Ftp wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Ftp wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### GoogleCloudStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'GoogleCloudStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HdfsReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'HdfsReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| distcpSettings | Specifies Distcp-related settings. | DistcpSettings |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | HDFS wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | HDFS wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DistcpSettings

| Name | Description | Value |
|-|-|-|
| distcpOptions | Specifies the Distcp options. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| resourceManagerEndpoint | Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| tempScriptPath | Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### HttpReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'HttpReadSettings' (required) |
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestBody | The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestTimeout | Specifies the timeout for a HTTP client to get HTTP response from HTTP server. | For Bicep, you can use theany()function. |


### OracleCloudStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'OracleCloudStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Oracle Cloud Storage object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Oracle Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Oracle Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SftpReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'SftpReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| disableChunking | If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Sftp wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Sftp wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobFSSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureBlobFSSource' (required) |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| skipHeaderLineCount | Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| treatEmptyAsNull | Treat empty as null. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureDatabricksDeltaLakeSource' (required) |
| exportSettings | Azure Databricks Delta Lake export settings. | AzureDatabricksDeltaLakeExportCommand |
| query | Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeExportCommand

| Name | Description | Value |
|-|-|-|
| dateFormat | Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| timestampFormat | Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | The export setting type. | string (required) |


### AzureDataExplorerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureDataExplorerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| noTruncation | The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. | For Bicep, you can use theany()function. |
| query | Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).. | For Bicep, you can use theany()function. |


### AzureDataLakeStoreSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureDataLakeStoreSource' (required) |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureMariaDBSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureMariaDBSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzureMySqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureMySqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzurePostgreSqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzurePostgreSqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzureSqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureSqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### AzureTableSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureTableSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| azureTableSourceIgnoreTableNotFound | Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| azureTableSourceQuery | Azure Table source query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### BinarySource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'BinarySource' (required) |
| formatSettings | Binary format settings. | BinaryReadSettings |
| storeSettings | Binary store settings. | StoreReadSettings |


### BinaryReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| type | The read setting type. | string (required) |


### CompressionReadSettings

| Name | Description | Value |
|-|-|-|
| type | Set the object type | TarGZipReadSettingsTarReadSettingsZipDeflateReadSettings(required) |


### TarGZipReadSettings

| Name | Description | Value |
|-|-|-|
| type | The Compression setting type. | 'TarGZipReadSettings' (required) |
| preserveCompressionFileNameAsFolder | Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### TarReadSettings

| Name | Description | Value |
|-|-|-|
| type | The Compression setting type. | 'TarReadSettings' (required) |
| preserveCompressionFileNameAsFolder | Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### ZipDeflateReadSettings

| Name | Description | Value |
|-|-|-|
| type | The Compression setting type. | 'ZipDeflateReadSettings' (required) |
| preserveZipFileNameAsFolder | Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### BlobSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'BlobSource' (required) |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| skipHeaderLineCount | Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| treatEmptyAsNull | Treat empty as null. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### CassandraSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CassandraSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| consistencyLevel | The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. | 'ALL''EACH_QUORUM''LOCAL_ONE''LOCAL_QUORUM''LOCAL_SERIAL''ONE''QUORUM''SERIAL''THREE''TWO' |
| query | Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### CommonDataServiceForAppsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CommonDataServiceForAppsSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ConcurSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ConcurSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### CosmosDbMongoDbApiSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CosmosDbMongoDbApiSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| cursorMethods | Cursor methods for Mongodb query. | MongoDbCursorMethodsProperties |
| filter | Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MongoDbCursorMethodsProperties

| Name | Description | Value |
|-|-|-|
| limit | Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| project | Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| skip | Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sort | Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CosmosDbSqlApiSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CosmosDbSqlApiSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| detectDatetime | Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| pageSize | Page size of the result. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| preferredRegions | Preferred regions. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| query | SQL API query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CouchbaseSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CouchbaseSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### Db2Source

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'Db2Source' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DelimitedTextSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DelimitedTextSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| formatSettings | DelimitedText format settings. | DelimitedTextReadSettings |
| storeSettings | DelimitedText store settings. | StoreReadSettings |


### DelimitedTextReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| skipLineCount | Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | The read setting type. | string (required) |


### DocumentDbCollectionSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DocumentDbCollectionSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| nestingSeparator | Nested properties separator. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| query | Documents query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DrillSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DrillSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DynamicsAXSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DynamicsAXSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DynamicsCrmSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DynamicsCrmSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DynamicsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DynamicsSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### EloquaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'EloquaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### ExcelSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ExcelSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | Excel store settings. | StoreReadSettings |


### FileSystemSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'FileSystemSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### GoogleAdWordsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'GoogleAdWordsSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### GoogleBigQuerySource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'GoogleBigQuerySource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### GreenplumSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'GreenplumSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HBaseSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HBaseSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HdfsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HdfsSource' (required) |
| distcpSettings | Specifies Distcp-related settings. | DistcpSettings |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### HiveSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HiveSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HttpSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HttpSource' (required) |
| httpRequestTimeout | Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HubspotSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HubspotSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### ImpalaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ImpalaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### InformixSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'InformixSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### JiraSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'JiraSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### JsonSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'JsonSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| formatSettings | Json format settings. | JsonReadSettings |
| storeSettings | Json store settings. | StoreReadSettings |


### JsonReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| type | The read setting type. | string (required) |


### MagentoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MagentoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MariaDBSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MariaDBSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MarketoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MarketoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MicrosoftAccessSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MicrosoftAccessSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbAtlasSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MongoDbAtlasSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| cursorMethods | Cursor methods for Mongodb query | MongoDbCursorMethodsProperties |
| filter | Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MongoDbSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MongoDbSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbV2Source

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MongoDbV2Source' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| cursorMethods | Cursor methods for Mongodb query | MongoDbCursorMethodsProperties |
| filter | Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MySqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MySqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### NetezzaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'NetezzaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Netezza read in parallel. Possible values include: "None", "DataSlice", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Netezza source partitioning. | NetezzaPartitionSettings |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### NetezzaPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ODataSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ODataSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | OData query. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OdbcSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OdbcSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### Office365Source

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'Office365Source' (required) |
| allowedGroups | The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| dateFilterColumn | The Column to apply the {paramref name="StartTime"/} and {paramref name="EndTime"/}. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endTime | End time of the requested range for this dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| outputColumns | The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] | For Bicep, you can use theany()function. |
| startTime | Start time of the requested range for this dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userScopeFilterUri | The user scope uri. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OracleServiceCloudSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OracleServiceCloudSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### OracleSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OracleSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| oracleReaderQuery | Oracle reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Oracle read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Oracle source partitioning. | OraclePartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### OraclePartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionNames | Names of the physical partitions of Oracle table. | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OrcSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OrcSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | ORC store settings. | StoreReadSettings |


### ParquetSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ParquetSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | Parquet store settings. | StoreReadSettings |


### PaypalSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PaypalSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### PhoenixSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PhoenixSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### PostgreSqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PostgreSqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### PrestoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PrestoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### QuickBooksSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'QuickBooksSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### RelationalSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'RelationalSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ResponsysSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ResponsysSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### RestSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'RestSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| paginationRules | The pagination rules to compose next page requests. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestBody | The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestInterval | The time to await before sending next page request. | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceMarketingCloudSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SalesforceMarketingCloudSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SalesforceServiceCloudSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SalesforceServiceCloudSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| readBehavior | The read behavior for the operation. Default is Query. | 'Query''QueryAll' |


### SalesforceSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SalesforceSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| readBehavior | The read behavior for the operation. Default is Query. | 'Query''QueryAll' |


### SapBwSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapBwSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | MDX query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapCloudForCustomerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapCloudForCustomerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapEccSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapEccSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapHanaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapHanaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| packetSize | The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for SAP HANA read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "SapHanaDynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for SAP HANA source partitioning. | SapHanaPartitionSettings |
| query | SAP HANA Sql query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapHanaPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOdpSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapOdpSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| extractionMode | The extraction mode. Allowed value include: Full, Delta and Recovery. The default value is Full. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| projection | Specifies the columns to be selected from source data. Type: array of objects(projection) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| selection | Specifies the selection conditions from source data. Type: array of objects(selection) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| subscriberProcess | The subscriber process to manage the delta process. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOpenHubSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapOpenHubSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| baseRequestId | The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). | For Bicep, you can use theany()function. |
| customRfcReadTableFunctionModule | Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| excludeLastRequest | Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sapDataColumnDelimiter | The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapTableSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapTableSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| customRfcReadTableFunctionModule | Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for SAP table read in parallel. Possible values include: "None", "PartitionOnInt", "PartitionOnCalendarYear", "PartitionOnCalendarMonth", "PartitionOnCalendarDate", "PartitionOnTime". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for SAP table source partitioning. | SapTablePartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| rfcTableFields | The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rfcTableOptions | The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rowCount | The number of rows to be retrieved. Type: integer(or Expression with resultType integer). | For Bicep, you can use theany()function. |
| rowSkips | The number of rows that will be skipped. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sapDataColumnDelimiter | The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapTablePartitionSettings

| Name | Description | Value |
|-|-|-|
| maxPartitionsNumber | The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionColumnName | The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ServiceNowSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ServiceNowSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SharePointOnlineListSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SharePointOnlineListSource' (required) |
| httpRequestTimeout | The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ShopifySource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ShopifySource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SnowflakeSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SnowflakeSource' (required) |
| exportSettings | Snowflake export settings. | SnowflakeExportCopyCommand(required) |
| query | Snowflake Sql query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SnowflakeExportCopyCommand

| Name | Description | Value |
|-|-|-|
| additionalCopyOptions | Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } | object |
| additionalFormatOptions | Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" } | object |
| type | The export setting type. | string (required) |


### SparkSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SparkSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SqlDWSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlDWSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL Data Warehouse reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. | For Bicep, you can use theany()function. |


### SqlMISource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlMISource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SqlServerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlServerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| isolationLevel | Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SquareSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SquareSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SybaseSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SybaseSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### TeradataSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'TeradataSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for teradata read in parallel. Possible values include: "None", "Hash", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for teradata source partitioning. | TeradataPartitionSettings |
| query | Teradata query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### TeradataPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### VerticaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'VerticaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### WebSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'WebSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |


### XeroSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'XeroSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### XmlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'XmlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| formatSettings | Xml format settings. | XmlReadSettings |
| storeSettings | Xml store settings. | StoreReadSettings |


### XmlReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| detectDataType | Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| namespacePrefixes | Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
| namespaces | Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| type | The read setting type. | string (required) |
| validationMode | Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ZohoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ZohoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### StagingSettings

| Name | Description | Value |
|-|-|-|
| enableCompression | Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| linkedServiceName | Staging linked service reference. | LinkedServiceReference(required) |
| path | The path to storage for storing the interim data. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CustomActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Custom' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Custom activity properties. | CustomActivityTypeProperties(required) |


### CustomActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| autoUserSpecification | Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double). | For Bicep, you can use theany()function. |
| command | Command for custom activity Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| extendedProperties | User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. | object |
| folderPath | Folder path for resource files Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| referenceObjects | Reference objects | CustomActivityReferenceObject |
| resourceLinkedService | Resource linked service reference. | LinkedServiceReference |
| retentionTimeInDays | The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). | For Bicep, you can use theany()function. |


### CustomActivityReferenceObject

| Name | Description | Value |
|-|-|-|
| datasets | Dataset references. | DatasetReference[] |
| linkedServices | Linked service references. | LinkedServiceReference[] |


### DatabricksNotebookActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DatabricksNotebook' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Databricks Notebook activity properties. | DatabricksNotebookActivityTypeProperties(required) |


### DatabricksNotebookActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| baseParameters | Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. | object |
| libraries | A list of libraries to be installed on the cluster that will execute the job. | object |
| notebookPath | The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DatabricksSparkJarActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DatabricksSparkJar' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Databricks SparkJar activity properties. | DatabricksSparkJarActivityTypeProperties(required) |


### DatabricksSparkJarActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| libraries | A list of libraries to be installed on the cluster that will execute the job. | object |
| mainClassName | The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| parameters | Parameters that will be passed to the main method. | any[] |


### DatabricksSparkPythonActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DatabricksSparkPython' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Databricks SparkPython activity properties. | DatabricksSparkPythonActivityTypeProperties(required) |


### DatabricksSparkPythonActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| libraries | A list of libraries to be installed on the cluster that will execute the job. | object |
| parameters | Command line parameters that will be passed to the Python file. | any[] |
| pythonFile | The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DataLakeAnalyticsUsqlActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DataLakeAnalyticsU-SQL' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Data Lake Analytics U-SQL activity properties. | DataLakeAnalyticsUsqlActivityTypeProperties(required) |


### DataLakeAnalyticsUsqlActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| compilationMode | Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| degreeOfParallelism | The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. | For Bicep, you can use theany()function. |
| parameters | Parameters for U-SQL job request. | object |
| priority | Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. | For Bicep, you can use theany()function. |
| runtimeVersion | Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| scriptLinkedService | Script linked service reference. | LinkedServiceReference(required) |
| scriptPath | Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DeleteActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Delete' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Delete activity properties. | DeleteActivityTypeProperties(required) |


### DeleteActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | Delete activity dataset reference. | DatasetReference(required) |
| enableLogging | Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logStorageSettings | Log storage settings customer need to provide when enableLogging is true. | LogStorageSettings |
| maxConcurrentConnections | The max concurrent connections to connect data source at the same time. | int |
| recursive | If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storeSettings | Delete activity store settings. | StoreReadSettings |


### ExecuteDataFlowActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecuteDataFlow' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute data flow activity properties. | ExecuteDataFlowActivityTypeProperties(required) |


### ExecuteDataFlowActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| compute | Compute properties for data flow activity. | ExecuteDataFlowActivityTypePropertiesCompute |
| continueOnError | Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| dataFlow | Data flow reference. | DataFlowReference(required) |
| integrationRuntime | The integration runtime reference. | IntegrationRuntimeReference |
| runConcurrently | Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| sourceStagingConcurrency | Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |
| staging | Staging info for execute data flow activity. | DataFlowStagingInfo |
| traceLevel | Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |


### ExecuteDataFlowActivityTypePropertiesCompute

| Name | Description | Value |
|-|-|-|
| computeType | Compute type of the cluster which will execute data flow job. Possible values include: 'General', 'MemoryOptimized', 'ComputeOptimized'. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| coreCount | Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |


### DataFlowReference

| Name | Description | Value |
|-|-|-|
| datasetParameters | Reference data flow parameters from dataset. | For Bicep, you can use theany()function. |
| parameters | Data flow parameters | object |
| referenceName | Reference data flow name. | string (required) |
| type | Data flow reference type. | 'DataFlowReference' (required) |


### IntegrationRuntimeReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for integration runtime. | object |
| referenceName | Reference integration runtime name. | string (required) |
| type | Type of integration runtime. | 'IntegrationRuntimeReference' (required) |


### DataFlowStagingInfo

| Name | Description | Value |
|-|-|-|
| folderPath | Folder path for staging blob. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| linkedService | Staging linked service reference. | LinkedServiceReference |


### ExecutePipelineActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecutePipeline' (required) |
| policy | Execute pipeline activity policy. | ExecutePipelineActivityPolicy |
| typeProperties | Execute pipeline activity properties. | ExecutePipelineActivityTypeProperties(required) |


### ExecutePipelineActivityPolicy

| Name | Description | Value |
|-|-|-|
| secureInput | When set to true, Input from activity is considered as secure and will not be logged to monitoring. | bool |


### ExecutePipelineActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| parameters | Pipeline parameters. | object |
| pipeline | Pipeline reference. | PipelineReference(required) |
| waitOnCompletion | Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. | bool |


### PipelineReference

| Name | Description | Value |
|-|-|-|
| name | Reference name. | string |
| referenceName | Reference pipeline name. | string (required) |
| type | Pipeline reference type. | 'PipelineReference' (required) |


### ExecuteSsisPackageActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecuteSSISPackage' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute SSIS package activity properties. | ExecuteSsisPackageActivityTypeProperties(required) |


### ExecuteSsisPackageActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| connectVia | The integration runtime reference. | IntegrationRuntimeReference(required) |
| environmentPath | The environment path to execute the SSIS package. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| executionCredential | The package execution credential. | SsisExecutionCredential |
| loggingLevel | The logging level of SSIS package execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| logLocation | SSIS package execution log location. | SsisLogLocation |
| packageConnectionManagers | The package level connection managers to execute the SSIS package. | object |
| packageLocation | SSIS package location. | SsisPackageLocation(required) |
| packageParameters | The package level parameters to execute the SSIS package. | object |
| projectConnectionManagers | The project level connection managers to execute the SSIS package. | object |
| projectParameters | The project level parameters to execute the SSIS package. | object |
| propertyOverrides | The property overrides to execute the SSIS package. | object |
| runtime | Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SsisExecutionCredential

| Name | Description | Value |
|-|-|-|
| domain | Domain for windows authentication. | For Bicep, you can use theany()function.(required) |
| password | Password for windows authentication. | SecureString(required) |
| userName | UseName for windows authentication. | For Bicep, you can use theany()function.(required) |


### SecureString

| Name | Description | Value |
|-|-|-|
| type | Type of the secret. | string (required) |
| value | Value of secure string. | string (required) |


### SsisLogLocation

| Name | Description | Value |
|-|-|-|
| logPath | The SSIS package execution log path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | The type of SSIS log location. | 'File' (required) |
| typeProperties | SSIS package execution log location properties. | SsisLogLocationTypeProperties(required) |


### SsisLogLocationTypeProperties

| Name | Description | Value |
|-|-|-|
| accessCredential | The package execution log access credential. | SsisAccessCredential |
| logRefreshInterval | Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SsisAccessCredential

| Name | Description | Value |
|-|-|-|
| domain | Domain for windows authentication. | For Bicep, you can use theany()function.(required) |
| password | Password for windows authentication. | SecretBase(required) |
| userName | UseName for windows authentication. | For Bicep, you can use theany()function.(required) |


### SecretBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureKeyVaultSecretSecureString(required) |


### AzureKeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretName | The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| secretVersion | The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| store | The Azure Key Vault linked service reference. | LinkedServiceReference(required) |
| type | Type of the secret. | string (required) |


### SsisPackageLocation

| Name | Description | Value |
|-|-|-|
| packagePath | The SSIS package path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | The type of SSIS package location. | 'File''InlinePackage''PackageStore''SSISDB' |
| typeProperties | SSIS package location properties. | SsisPackageLocationTypeProperties |


### SsisPackageLocationTypeProperties

| Name | Description | Value |
|-|-|-|
| accessCredential | The package access credential. | SsisAccessCredential |
| childPackages | The embedded child package list. | SsisChildPackage[] |
| configurationAccessCredential | The configuration file access credential. | SsisAccessCredential |
| configurationPath | The configuration file of the package execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| packageContent | The embedded package content. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| packageLastModifiedDate | The embedded package last modified date. | string |
| packageName | The package name. | string |
| packagePassword | Password of the package. | SecretBase |


### SsisChildPackage

| Name | Description | Value |
|-|-|-|
| packageContent | Content for embedded child package. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| packageLastModifiedDate | Last modified date for embedded child package. | string |
| packageName | Name for embedded child package. | string |
| packagePath | Path for embedded child package. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### ExecuteWranglingDataflowActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecuteWranglingDataflow' (required) |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute power query activity properties. | ExecutePowerQueryActivityTypeProperties(required) |


### ExecutePowerQueryActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| compute | Compute properties for data flow activity. | ExecuteDataFlowActivityTypePropertiesCompute |
| continueOnError | Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| dataFlow | Data flow reference. | DataFlowReference(required) |
| integrationRuntime | The integration runtime reference. | IntegrationRuntimeReference |
| queries | List of mapping for Power Query mashup query to sink dataset(s). | PowerQuerySinkMapping[] |
| runConcurrently | Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| sinks | (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName. | object |
| sourceStagingConcurrency | Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |
| staging | Staging info for execute data flow activity. | DataFlowStagingInfo |
| traceLevel | Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |


### PowerQuerySinkMapping

| Name | Description | Value |
|-|-|-|
| dataflowSinks | List of sinks mapped to Power Query mashup query. | PowerQuerySink[] |
| queryName | Name of the query in Power Query mashup document. | string |


### PowerQuerySink

| Name | Description | Value |
|-|-|-|
| dataset | Dataset reference. | DatasetReference |
| description | Transformation description. | string |
| flowlet | Flowlet Reference | DataFlowReference |
| linkedService | Linked service reference. | LinkedServiceReference |
| name | Transformation name. | string (required) |
| rejectedDataLinkedService | Rejected data linked service reference. | LinkedServiceReference |
| schemaLinkedService | Schema linked service reference. | LinkedServiceReference |
| script | sink script. | string |


### FailActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Fail' (required) |
| typeProperties | Fail activity properties. | FailActivityTypeProperties(required) |


### FailActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| errorCode | The error code that categorizes the error type of the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| message | The error message that surfaced in the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### FilterActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Filter' (required) |
| typeProperties | Filter activity properties. | FilterActivityTypeProperties(required) |


### FilterActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| condition | Condition to be used for filtering the input. | Expression(required) |
| items | Input array on which filter should be applied. | Expression(required) |


### Expression

| Name | Description | Value |
|-|-|-|
| type | Expression type. | 'Expression' (required) |
| value | Expression value. | string (required) |


### ForEachActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ForEach' (required) |
| typeProperties | ForEach activity properties. | ForEachActivityTypeProperties(required) |


### ForEachActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| activities | List of activities to execute . | Activity[] (required) |
| batchCount | Batch count to be used for controlling the number of parallel execution (when isSequential is set to false). | int |
| isSequential | Should the loop be executed in sequence or in parallel (max 50) | bool |
| items | Collection to iterate. | Expression(required) |


### GetMetadataActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'GetMetadata' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | GetMetadata activity properties. | GetMetadataActivityTypeProperties(required) |


### GetMetadataActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | GetMetadata activity dataset reference. | DatasetReference(required) |
| fieldList | Fields of metadata to get from dataset. | any[] |
| formatSettings | GetMetadata activity format settings. | FormatReadSettings |
| storeSettings | GetMetadata activity store settings. | StoreReadSettings |


### FormatReadSettings

| Name | Description | Value |
|-|-|-|
| type | Set the object type | BinaryReadSettingsDelimitedTextReadSettingsJsonReadSettingsXmlReadSettings(required) |


### HDInsightHiveActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightHive' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight Hive activity properties. | HDInsightHiveActivityTypeProperties(required) |


### HDInsightHiveActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. | any[] |
| defines | Allows user to specify defines for Hive job request. | object |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| queryTimeout | Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) | int |
| scriptLinkedService | Script linked service reference. | LinkedServiceReference |
| scriptPath | Script path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |
| variables | User specified arguments under hivevar namespace. | any[] |


### HDInsightMapReduceActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightMapReduce' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight MapReduce activity properties. | HDInsightMapReduceActivityTypeProperties(required) |


### HDInsightMapReduceActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. | any[] |
| className | Class name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| defines | Allows user to specify defines for the MapReduce job request. | object |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| jarFilePath | Jar path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| jarLibs | Jar libs. | any[] |
| jarLinkedService | Jar linked service reference. | LinkedServiceReference |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |


### HDInsightPigActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightPig' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight Pig activity properties. | HDInsightPigActivityTypeProperties(required) |


### HDInsightPigActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). | For Bicep, you can use theany()function. |
| defines | Allows user to specify defines for Pig job request. | object |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| scriptLinkedService | Script linked service reference. | LinkedServiceReference |
| scriptPath | Script path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |


### HDInsightSparkActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightSpark' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight spark activity properties. | HDInsightSparkActivityTypeProperties(required) |


### HDInsightSparkActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | The user-specified arguments to HDInsightSparkActivity. | any[] |
| className | The application's Java/Spark main class. | string |
| entryFilePath | The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| proxyUser | The user to impersonate that will execute the job. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rootPath | The root path in 'sparkJobLinkedService' for all the jobâs files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| sparkConfig | Spark configuration property. | object |
| sparkJobLinkedService | The storage linked service for uploading the entry file and dependencies, and for receiving logs. | LinkedServiceReference |


### HDInsightStreamingActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightStreaming' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight streaming activity properties. | HDInsightStreamingActivityTypeProperties(required) |


### HDInsightStreamingActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. | any[] |
| combiner | Combiner executable name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| commandEnvironment | Command line environment values. | any[] |
| defines | Allows user to specify defines for streaming job request. | object |
| fileLinkedService | Linked service reference where the files are located. | LinkedServiceReference |
| filePaths | Paths to streaming job files. Can be directories. | any[] (required) |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| input | Input blob path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| mapper | Mapper executable name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| output | Output blob path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| reducer | Reducer executable name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |


### IfConditionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'IfCondition' (required) |
| typeProperties | IfCondition activity properties. | IfConditionActivityTypeProperties(required) |


### IfConditionActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| expression | An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed. | Expression(required) |
| ifFalseActivities | List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action. | Activity[] |
| ifTrueActivities | List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action. | Activity[] |


### LookupActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Lookup' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Lookup activity properties. | LookupActivityTypeProperties(required) |


### LookupActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | Lookup activity dataset reference. | DatasetReference(required) |
| firstRowOnly | Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| source | Dataset-specific source properties, same as copy activity source. | CopySource(required) |


### ScriptActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Script' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Script activity properties. | ScriptActivityTypeProperties(required) |


### ScriptActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| logSettings | Log settings of script activity. | ScriptActivityTypePropertiesLogSettings |
| scriptBlockExecutionTimeout | ScriptBlock execution timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| scripts | Array of script blocks. Type: array. | ScriptActivityScriptBlock[] |


### ScriptActivityTypePropertiesLogSettings

| Name | Description | Value |
|-|-|-|
| logDestination | The destination of logs. Type: string. | 'ActivityOutput''ExternalStore' (required) |
| logLocationSettings | Log location settings customer needs to provide when enabling log. | LogLocationSettings |


### ScriptActivityScriptBlock

| Name | Description | Value |
|-|-|-|
| parameters | Array of script parameters. Type: array. | ScriptActivityParameter[] |
| text | The query text. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | The type of the query. Type: string. | 'NonQuery''Query' (required) |


### ScriptActivityParameter

| Name | Description | Value |
|-|-|-|
| direction | The direction of the parameter. | 'Input''InputOutput''Output' |
| name | The name of the parameter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| size | The size of the output direction parameter. | int |
| type | The type of the parameter. | 'Boolean''DateTime''DateTimeOffset''Decimal''Double''Guid''Int16''Int32''Int64''Single''String''Timespan' |
| value | The value of the parameter. | For Bicep, you can use theany()function. |


### SetVariableActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SetVariable' (required) |
| typeProperties | Set Variable activity properties. | SetVariableActivityTypeProperties(required) |


### SetVariableActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| value | Value to be set. Could be a static value or Expression | For Bicep, you can use theany()function. |
| variableName | Name of the variable whose value needs to be set. | string |


### SynapseSparkJobDefinitionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SparkJob' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute spark job activity properties. | SynapseSparkJobActivityTypeProperties(required) |


### SynapseSparkJobActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| args | User specified arguments to SynapseSparkJobDefinitionActivity. | any[] |
| className | The fully-qualified identifier or the main class that is in the main definition file, which will override the 'className' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| conf | Spark configuration properties, which will override the 'conf' of the spark job definition you provide. | For Bicep, you can use theany()function. |
| configurationType | The type of the spark config. | 'Artifact''Customized''Default' |
| driverSize | Number of core and memory to be used for driver allocated in the specified Spark pool for the job, which will be used for overriding 'driverCores' and 'driverMemory' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| executorSize | Number of core and memory to be used for executors allocated in the specified Spark pool for the job, which will be used for overriding 'executorCores' and 'executorMemory' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| file | The main file used for the job, which will override the 'file' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| files | (Deprecated. Please use pythonCodeReference and filesV2) Additional files used for reference in the main definition file, which will override the 'files' of the spark job definition you provide. | any[] |
| filesV2 | Additional files used for reference in the main definition file, which will override the 'jars' and 'files' of the spark job definition you provide. | any[] |
| numExecutors | Number of executors to launch for this job, which will override the 'numExecutors' of the spark job definition you provide. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| pythonCodeReference | Additional python code files used for reference in the main definition file, which will override the 'pyFiles' of the spark job definition you provide. | any[] |
| scanFolder | Scanning subfolders from the root folder of the main definition file, these files will be added as reference files. The folders named 'jars', 'pyFiles', 'files' or 'archives' will be scanned, and the folders name are case sensitive. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| sparkConfig | Spark configuration property. | object |
| sparkJob | Synapse spark job reference. | SynapseSparkJobReference(required) |
| targetBigDataPool | The name of the big data pool which will be used to execute the spark batch job, which will override the 'targetBigDataPool' of the spark job definition you provide. | BigDataPoolParametrizationReference |
| targetSparkConfiguration | The spark configuration of the spark job. | SparkConfigurationParametrizationReference |


### SynapseSparkJobReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference spark job name. Expression with resultType string. | For Bicep, you can use theany()function.(required) |
| type | Synapse spark job reference type. | 'SparkJobDefinitionReference' (required) |


### BigDataPoolParametrizationReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference big data pool name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | Big data pool reference type. | 'BigDataPoolReference' (required) |


### SparkConfigurationParametrizationReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference spark configuration name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | Spark configuration reference type. | 'SparkConfigurationReference' (required) |


### SqlServerStoredProcedureActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SqlServerStoredProcedure' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | SQL stored procedure activity properties. | SqlServerStoredProcedureActivityTypeProperties(required) |


### SqlServerStoredProcedureActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| storedProcedureName | Stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SwitchActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Switch' (required) |
| typeProperties | Switch activity properties. | SwitchActivityTypeProperties(required) |


### SwitchActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| cases | List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities. | SwitchCase[] |
| defaultActivities | List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action. | Activity[] |
| on | An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed. | Expression(required) |


### SwitchCase

| Name | Description | Value |
|-|-|-|
| activities | List of activities to execute for satisfied case condition. | Activity[] |
| value | Expected value that satisfies the expression result of the 'on' property. | string |


### SynapseNotebookActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SynapseNotebook' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute Synapse notebook activity properties. | SynapseNotebookActivityTypeProperties(required) |


### SynapseNotebookActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| conf | Spark configuration properties, which will override the 'conf' of the notebook you provide. | For Bicep, you can use theany()function. |
| driverSize | Number of core and memory to be used for driver allocated in the specified Spark pool for the session, which will be used for overriding 'driverCores' and 'driverMemory' of the notebook you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| executorSize | Number of core and memory to be used for executors allocated in the specified Spark pool for the session, which will be used for overriding 'executorCores' and 'executorMemory' of the notebook you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| notebook | Synapse notebook reference. | SynapseNotebookReference(required) |
| numExecutors | Number of executors to launch for this session, which will override the 'numExecutors' of the notebook you provide. | int |
| parameters | Notebook parameters. | object |
| sparkPool | The name of the big data pool which will be used to execute the notebook. | BigDataPoolParametrizationReference |


### SynapseNotebookReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference notebook name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | Synapse notebook reference type. | 'NotebookReference' (required) |


### UntilActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Until' (required) |
| typeProperties | Until activity properties. | UntilActivityTypeProperties(required) |


### UntilActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| activities | List of activities to execute. | Activity[] (required) |
| expression | An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true | Expression(required) |
| timeout | Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### ValidationActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Validation' (required) |
| typeProperties | Validation activity properties. | ValidationActivityTypeProperties(required) |


### ValidationActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| childItems | Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| dataset | Validation activity dataset reference. | DatasetReference(required) |
| minimumSize | Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sleep | A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| timeout | Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### WaitActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Wait' (required) |
| typeProperties | Wait activity properties. | WaitActivityTypeProperties(required) |


### WaitActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| waitTimeInSeconds | Duration in seconds. | For Bicep, you can use theany()function.(required) |


### WebActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'WebActivity' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Web activity properties. | WebActivityTypeProperties(required) |


### WebActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| authentication | Authentication method used for calling the endpoint. | WebActivityAuthentication |
| body | Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectVia | The integration runtime reference. | IntegrationRuntimeReference |
| datasets | List of datasets passed to web endpoint. | DatasetReference[] |
| disableCertValidation | When set to true, Certificate validation will be disabled. | bool |
| headers | Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| linkedServices | List of linked services passed to web endpoint. | LinkedServiceReference[] |
| method | Rest API method for target endpoint. | 'DELETE''GET''POST''PUT' (required) |
| url | Web activity target endpoint and path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### WebActivityAuthentication

| Name | Description | Value |
|-|-|-|
| credential | The credential reference containing authentication information. | CredentialReference |
| password | Password for the PFX file or basic authentication / Secret when used for ServicePrincipal | SecretBase |
| pfx | Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal | SecretBase |
| resource | Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal) | string |
| username | Web activity authentication user name for basic authentication or ClientID when used for ServicePrincipal. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userTenant | TenantId for which Azure Auth token will be requested when using ServicePrincipal Authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CredentialReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference credential name. | string (required) |
| type | Credential reference type. | 'CredentialReference' (required) |


### WebHookActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'WebHook' (required) |
| typeProperties | WebHook activity properties. | WebHookActivityTypeProperties(required) |


### WebHookActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| authentication | Authentication method used for calling the endpoint. | WebActivityAuthentication |
| body | Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| headers | Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| method | Rest API method for target endpoint. | 'POST' (required) |
| reportStatusOnCallBack | When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| timeout | The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | string |
| url | WebHook activity target endpoint and path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### PipelineFolder

| Name | Description | Value |
|-|-|-|
| name | The name of the folder that this Pipeline is in. | string |


### PipelinePolicy

| Name | Description | Value |
|-|-|-|
| elapsedTimeMetric | Pipeline ElapsedTime Metric Policy. | PipelineElapsedTimeMetricPolicy |


### PipelineElapsedTimeMetricPolicy

| Name | Description | Value |
|-|-|-|
| duration | TimeSpan value, after which an Azure Monitoring Metric is fired. | For Bicep, you can use theany()function. |


