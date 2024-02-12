```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/inputs@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      compression = {
        type = "string"
      }
      partitionKey = "string"
      serialization = {
        type = "string"
        // For remaining properties, see Serialization objects
      }
      watermarkSettings = {
        watermarkMode = "string"
      }
      type = "string"
      // For remaining properties, see InputProperties objects
    }
  })
}

```

### streamingjobs/inputs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:streamingjobs |
| properties | The properties that are associated with an input. Required on PUT (CreateOrReplace) requests. | InputProperties |


### InputProperties

| Name | Description | Value |
|-|-|-|
| compression | Describes how input data is compressed | Compression |
| partitionKey | partitionKey Describes a key in the input data which is used for partitioning the input data | string |
| serialization | Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests. | Serialization |
| watermarkSettings | Settings which determine whether to read watermark events. | InputWatermarkProperties |
| type | Set the object type | ReferenceStream(required) |


### Compression

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of compression that the input uses. Required on PUT (CreateOrReplace) requests. | 'Deflate''GZip''None' (required) |


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


### InputWatermarkProperties

| Name | Description | Value |
|-|-|-|
| watermarkMode | The input watermark mode. | 'None''ReadWatermark' |


### ReferenceInputProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests. | 'Reference' (required) |
| datasource | Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests. | ReferenceInputDataSource |


### ReferenceInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Set the object type | FileMicrosoft.Sql/Server/DatabaseMicrosoft.Storage/BlobRaw(required) |


### FileReferenceInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. | 'File' (required) |
| properties | The properties that are associated with a file input containing reference data. Required on PUT (CreateOrReplace) requests. | FileReferenceInputDataSourceProperties |


### FileReferenceInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| path | The path of the file. | string |


### AzureSqlReferenceInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Sql/Server/Database' (required) |
| properties | The properties that are associated with SQL DB input containing reference data. Required on PUT (CreateOrReplace) requests. | AzureSqlReferenceInputDataSourceProperties |


### AzureSqlReferenceInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| database | This element is associated with the datasource element. This is the name of the database that output will be written to. | string |
| deltaSnapshotQuery | This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database. | string |
| fullSnapshotQuery | This element is associated with the datasource element. This query is used to fetch data from the sql database. | string |
| password | This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| refreshRate | This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format. | string |
| refreshType | Indicates the type of data refresh option. | 'RefreshPeriodicallyWithDelta''RefreshPeriodicallyWithFull''Static' |
| server | This element is associated with the datasource element. This is the name of the server that contains the database that will be written to. | string |
| user | This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance. | string |


### BlobReferenceInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Storage/Blob' (required) |
| properties | The properties that are associated with a blob input containing reference data. Required on PUT (CreateOrReplace) requests. | BlobReferenceInputDataSourceProperties |


### BlobReferenceInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| blobName | The name of the blob input. | string |
| container | The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests. | string |
| dateFormat | The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. | string |
| deltaPathPattern | The path pattern of the delta snapshot. | string |
| deltaSnapshotRefreshRate | The interval that the user generates a delta snapshot of this reference blob input data source. | string |
| fullSnapshotRefreshRate | The refresh interval of the blob input data source. | string |
| pathPattern | The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example. | string |
| sourcePartitionCount | The partition count of the blob input data source. Range 1 - 256. | int |
| storageAccounts | A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests. | StorageAccount[] |
| timeFormat | The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. | string |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| accountKey | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| accountName | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | string |
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |


### RawReferenceInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. | 'Raw' (required) |
| properties | The properties that are associated with a raw input containing reference data. Required on PUT (CreateOrReplace) requests. | RawInputDatasourceProperties |


### RawInputDatasourceProperties

| Name | Description | Value |
|-|-|-|
| payload | The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. | string |
| payloadUri | The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. | string |


### StreamInputProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests. | 'Stream' (required) |
| datasource | Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests. | StreamInputDataSource |


### StreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Set the object type | GatewayMessageBusMicrosoft.Devices/IotHubsMicrosoft.EventGrid/EventSubscriptionsMicrosoft.EventHub/EventHubMicrosoft.ServiceBus/EventHubMicrosoft.Storage/BlobRaw(required) |


### GatewayMessageBusStreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | 'GatewayMessageBus' (required) |
| properties | The properties that are associated with a gateway message bus input containing stream data. | GatewayMessageBusStreamInputDataSourceProperties |


### GatewayMessageBusStreamInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| topic | The name of the Service Bus topic. | string |


### IoTHubStreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Devices/IotHubs' (required) |
| properties | The properties that are associated with an IoT Hub input containing stream data. Required on PUT (CreateOrReplace) requests. | IoTHubStreamInputDataSourceProperties |


### IoTHubStreamInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| consumerGroupName | The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hubâs default consumer group. | string |
| endpoint | The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.). | string |
| iotHubNamespace | The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests. | string |
| sharedAccessPolicyKey | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| sharedAccessPolicyName | The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests. | string |


### EventGridStreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | 'Microsoft.EventGrid/EventSubscriptions' (required) |
| properties | The properties that are associated with an event grid input containing stream data. | EventGridStreamInputDataSourceProperties |


### EventGridStreamInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| eventTypes | List of Event Types that are supported by the Event Grid adapter. | string[] |
| schema | Indicates the Event Grid schema type. | 'CloudEventSchema''EventGridEventSchema' |
| storageAccounts | A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests. | StorageAccount[] |
| subscriber | Subscribers for the Event Grid. Currently only EventHub Subscriber is supported. | EventHubV2StreamInputDataSource |


### EventHubV2StreamInputDataSource

| Name | Description | Value |
|-|-|-|
| properties | The properties that are associated with an Event Hub input containing stream data. Required on PUT (CreateOrReplace) requests. | EventHubStreamInputDataSourceProperties |
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | string (required) |


### EventHubStreamInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| consumerGroupName | The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hubâs default consumer group. | string |
| eventHubName | The name of the Event Hub. Required on PUT (CreateOrReplace) requests. | string |
| partitionCount | The partition count of the event hub data source. Range 1 - 256. | int |
| prefetchCount | The number of messages that the message receiver can simultaneously request. | int |
| serviceBusNamespace | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |
| sharedAccessPolicyKey | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| sharedAccessPolicyName | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | string |


### EventHubStreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | 'Microsoft.ServiceBus/EventHub' (required) |
| properties | The properties that are associated with an Event Hub input containing stream data. Required on PUT (CreateOrReplace) requests. | EventHubStreamInputDataSourceProperties |


### BlobStreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | 'Microsoft.Storage/Blob' (required) |
| properties | The properties that are associated with a blob input containing stream data. Required on PUT (CreateOrReplace) requests. | BlobStreamInputDataSourceProperties |


### BlobStreamInputDataSourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |
| container | The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests. | string |
| dateFormat | The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. | string |
| pathPattern | The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example. | string |
| sourcePartitionCount | The partition count of the blob input data source. Range 1 - 1024. | int |
| storageAccounts | A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests. | StorageAccount[] |
| timeFormat | The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. | string |


### RawStreamInputDataSource

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. | 'Raw' (required) |
| properties | The properties that are associated with a raw input. Required on PUT (CreateOrReplace) requests. | RawInputDatasourceProperties |


