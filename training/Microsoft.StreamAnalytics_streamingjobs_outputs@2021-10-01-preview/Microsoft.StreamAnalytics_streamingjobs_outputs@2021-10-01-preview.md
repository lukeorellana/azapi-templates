```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/outputs@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      datasource = {
        type = "string"
        // For remaining properties, see OutputDataSource objects
      }
      serialization = {
        type = "string"
        // For remaining properties, see Serialization objects
      }
      sizeWindow = int
      timeWindow = "string"
      watermarkSettings = {
        maxWatermarkDifferenceAcrossPartitions = "string"
        watermarkMode = "string"
      }
    }
  })
}

```

### streamingjobs/outputs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:streamingjobs |
| properties | The properties that are associated with an output. Required on PUT (CreateOrReplace) requests. | OutputProperties |


### OutputProperties

| Name | Description | Value |
|-|-|-|
| datasource | Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests. | OutputDataSource |
| serialization | Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests. | Serialization |
| sizeWindow | The size window to constrain a Stream Analytics output to. | int |
| timeWindow | The time frame for filtering Stream Analytics job outputs. | string |
| watermarkSettings | Settings which determine whether to send watermarks to downstream. | OutputWatermarkProperties |


### OutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Set the object type | GatewayMessageBusMicrosoft.AzureFunctionMicrosoft.DataLake/AccountsMicrosoft.DBForPostgreSQL/servers/databasesMicrosoft.EventHub/EventHubMicrosoft.Kusto/clusters/databasesMicrosoft.ServiceBus/EventHubMicrosoft.ServiceBus/QueueMicrosoft.ServiceBus/TopicMicrosoft.Sql/Server/DatabaseMicrosoft.Sql/Server/DataWarehouseMicrosoft.Storage/BlobMicrosoft.Storage/DocumentDBMicrosoft.Storage/TablePowerBIRaw(required) |


### GatewayMessageBusOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'GatewayMessageBus' (required) |
| properties | The properties that are associated with a Gateway Message Bus output. Required on PUT (CreateOrReplace) requests. | GatewayMessageBusOutputDataSourceProperties |


### GatewayMessageBusOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| topic | The name of the Service Bus topic. | string |


### AzureFunctionOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.AzureFunction' (required) |
| properties | The properties that are associated with a Azure Function output. Required on PUT (CreateOrReplace) requests. | AzureFunctionOutputDataSourceProperties |


### AzureFunctionOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| apiKey | If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function. | string |
| functionAppName | The name of your Azure Functions app. | string |
| functionName | The name of the function in your Azure Functions app. | string |
| maxBatchCount | A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100. | int |
| maxBatchSize | A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB). | int |


### AzureDataLakeStoreOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.DataLake/Accounts' (required) |
| properties | The properties that are associated with an Azure Data Lake Store output. Required on PUT (CreateOrReplace) requests. | AzureDataLakeStoreOutputDataSourceProperties |


### AzureDataLakeStoreOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| accountName | The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests. | string |
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| dateFormat | The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead. | string |
| filePathPrefix | The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests. | string |
| refreshToken | A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. | string |
| tenantId | The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests. | string |
| timeFormat | The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead. | string |
| tokenUserDisplayName | The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | string |
| tokenUserPrincipalName | The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | string |


### PostgreSQLOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.DBForPostgreSQL/servers/databases' (required) |
| properties | The properties that are associated with a PostgreSQL output data source. Required on PUT (CreateOrReplace) requests. | PostgreSQLOutputDataSourceProperties |


### PostgreSQLOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| database | The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| maxWriterCount | Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests. | int |
| password | The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| server | The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| table | The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| user | The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |


### EventHubV2OutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.EventHub/EventHub' (required) |
| properties | The properties that are associated with an Event Hub output. Required on PUT (CreateOrReplace) requests. | EventHubOutputDataSourceProperties |


### EventHubOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| eventHubName | The name of the Event Hub. Required on PUT (CreateOrReplace) requests. | string |
| partitionCount | The partition count of the event hub data source. Range 1 - 256. | int |
| partitionKey | The key/column that is used to determine to which partition to send event data. | string |
| propertyColumns | The properties associated with this Event Hub output. | string[] |
| serviceBusNamespace | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |
| sharedAccessPolicyKey | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| sharedAccessPolicyName | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |


### AzureDataExplorerOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Kusto/clusters/databases' (required) |
| properties | The properties that are associated with an Azure Data Explorer output. Required on PUT (CreateOrReplace) requests. | AzureDataExplorerOutputDataSourceProperties |


### AzureDataExplorerOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| cluster | The name of the Azure Data Explorer cluster. Required on PUT (CreateOrReplace) requests. | string |
| database | The name of the Azure Data Explorer database. Required on PUT (CreateOrReplace) requests. | string |
| table | The name of the Azure Table. Required on PUT (CreateOrReplace) requests. | string |


### EventHubOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.ServiceBus/EventHub' (required) |
| properties | The properties that are associated with an Event Hub output. Required on PUT (CreateOrReplace) requests. | EventHubOutputDataSourceProperties |


### ServiceBusQueueOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.ServiceBus/Queue' (required) |
| properties | The properties that are associated with a Service Bus Queue output. Required on PUT (CreateOrReplace) requests. | ServiceBusQueueOutputDataSourceProperties |


### ServiceBusQueueOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| propertyColumns | A string array of the names of output columns to be attached to Service Bus messages as custom properties. | string[] |
| queueName | The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests. | string |
| serviceBusNamespace | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |
| sharedAccessPolicyKey | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| sharedAccessPolicyName | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |
| systemPropertyColumns | The system properties associated with the Service Bus Queue. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc. | For Bicep, you can use theany()function. |


### ServiceBusTopicOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.ServiceBus/Topic' (required) |
| properties | The properties that are associated with a Service Bus Topic output. Required on PUT (CreateOrReplace) requests. | ServiceBusTopicOutputDataSourceProperties |


### ServiceBusTopicOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| propertyColumns | A string array of the names of output columns to be attached to Service Bus messages as custom properties. | string[] |
| serviceBusNamespace | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |
| sharedAccessPolicyKey | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| sharedAccessPolicyName | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |
| systemPropertyColumns | The system properties associated with the Service Bus Topic Output. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc. | ServiceBusTopicOutputDataSourcePropertiesSystemPrope... |
| topicName | The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests. | string |


### ServiceBusTopicOutputDataSourcePropertiesSystemPrope...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AzureSqlDatabaseOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Sql/Server/Database' (required) |
| properties | The properties that are associated with an Azure SQL database output. Required on PUT (CreateOrReplace) requests. | AzureSqlDatabaseOutputDataSourceProperties |


### AzureSqlDatabaseOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| database | The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| maxBatchCount | Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests. | int |
| maxWriterCount | Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests. | int |
| password | The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| server | The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| table | The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| user | The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |


### AzureSynapseOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Sql/Server/DataWarehouse' (required) |
| properties | The properties that are associated with an Azure Synapse output. Required on PUT (CreateOrReplace) requests. | AzureSynapseOutputDataSourceProperties |


### AzureSynapseOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| database | The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| password | The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| server | The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| table | The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |
| user | The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | string |


### BlobOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Storage/Blob' (required) |
| properties | The properties that are associated with a blob output. Required on PUT (CreateOrReplace) requests. | BlobOutputDataSourceProperties |


### BlobOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| blobPathPrefix | Blob path prefix. | string |
| blobWriteMode | Blob write mode. | 'Append''Once' |
| container | The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests. | string |
| dateFormat | The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. | string |
| pathPattern | The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example. | string |
| storageAccounts | A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests. | StorageAccount[] |
| timeFormat | The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. | string |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| accountKey | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| accountName | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | string |
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |


### DocumentDbOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Storage/DocumentDB' (required) |
| properties | The properties that are associated with a DocumentDB output. Required on PUT (CreateOrReplace) requests. | DocumentDbOutputDataSourceProperties |


### DocumentDbOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| accountId | The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests. | string |
| accountKey | The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| collectionNamePattern | The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section ofhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor more information. Required on PUT (CreateOrReplace) requests. | string |
| database | The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests. | string |
| documentId | The name of the field in output events used to specify the primary key which insert or update operations are based on. | string |
| partitionKey | The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified. | string |


### AzureTableOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Storage/Table' (required) |
| properties | The properties that are associated with an Azure Table output. Required on PUT (CreateOrReplace) requests. | AzureTableOutputDataSourceProperties |


### AzureTableOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| accountKey | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| accountName | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | string |
| batchSize | The number of rows to write to the Azure Table at a time. | int |
| columnsToRemove | If specified, each item in the array is the name of a column to remove (if present) from output event entities. | string[] |
| partitionKey | This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests. | string |
| rowKey | This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests. | string |
| table | The name of the Azure Table. Required on PUT (CreateOrReplace) requests. | string |


### PowerBIOutputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'PowerBI' (required) |
| properties | The properties that are associated with a Power BI output. Required on PUT (CreateOrReplace) requests. | PowerBIOutputDataSourceProperties |


### PowerBIOutputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| dataset | The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests. | string |
| groupId | The ID of the Power BI group. | string |
| groupName | The name of the Power BI group. Use this property to help remember which specific Power BI group id was used. | string |
| refreshToken | A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. | string |
| table | The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests. | string |
| tokenUserDisplayName | The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | string |
| tokenUserPrincipalName | The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | string |


### RawOutputDatasource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | 'Raw' (required) |
| properties | The properties that are associated with a raw output. Required on PUT (CreateOrReplace) requests. | RawOutputDatasourceProperties |


### RawOutputDatasourceProperties

| Name | Description | Value |
|-|-|-|
| payloadUri | The SAS URL to a blob where the output should be written. If this property is not set, output data will be written into a temporary storage, and a SAS URL to that temporary storage will be included in the result. | string |


### Serialization

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AvroCsvCustomClrDeltaJsonParquet(required) |


### AvroSerialization

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | 'Avro' (required) |
| properties | The properties that are associated with the Avro serialization type. Required on PUT (CreateOrReplace) requests. | For Bicep, you can use theany()function. |


### CsvSerialization

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | 'Csv' (required) |
| properties | The properties that are associated with the CSV serialization type. Required on PUT (CreateOrReplace) requests. | CsvSerializationProperties |


### CsvSerializationProperties

| Name | Description | Value |
|-|-|-|
| encoding | Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests. | 'UTF8' |
| fieldDelimiter | Specifies the delimiter that will be used to separate comma-separated value (CSV) records. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a list of supported values. Required on PUT (CreateOrReplace) requests. | string |


### CustomClrSerialization

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | 'CustomClr' (required) |
| properties | The properties that are associated with the CustomClr serialization type. Required on PUT (CreateOrReplace) requests. | CustomClrSerializationProperties |


### CustomClrSerializationProperties

| Name | Description | Value |
|-|-|-|
| serializationClassName | The serialization class name. | string |
| serializationDllPath | The serialization library path. | string |


### DeltaSerialization

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | 'Delta' (required) |
| properties | The properties that are associated with the Delta Lake serialization type. Required on PUT (CreateOrReplace) requests. | DeltaSerializationProperties |


### DeltaSerializationProperties

| Name | Description | Value |
|-|-|-|
| deltaTablePath | Specifies the path of the Delta Lake table that the output will be written to. | string (required) |
| partitionColumns | Specifies the names of the columns for which the Delta Lake table will be partitioned. We are only supporting 1 partition column, but keeping it as an array for extensibility. | string[] |


### JsonSerialization

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | 'Json' (required) |
| properties | The properties that are associated with the JSON serialization type. Required on PUT (CreateOrReplace) requests. | JsonSerializationProperties |


### JsonSerializationProperties

| Name | Description | Value |
|-|-|-|
| encoding | Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests. | 'UTF8' |
| format | This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null. | 'Array''LineSeparated' |


### ParquetSerialization

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | 'Parquet' (required) |
| properties | The properties that are associated with the Parquet serialization type. Required on PUT (CreateOrReplace) requests. | For Bicep, you can use theany()function. |


### OutputWatermarkProperties

| Name | Description | Value |
|-|-|-|
| maxWatermarkDifferenceAcrossPartitions | Describes the maximal delta between the fastest and slowest partitions, so the out of order window that catches all necessary events in downstream jobs is well defined. | string |
| watermarkMode | The output watermark mode. | 'None''SendCurrentPartitionWatermark''SendLowestWatermarkAcrossPartitions' |


