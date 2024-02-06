## Microsoft.StreamAnalytics/clusters@2020-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/clusters@2020-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    sku = {
      capacity = int
      name = "Default"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests. | ClusterSku |
| properties | The properties associated with a Stream Analytics cluster. | ClusterProperties |


### ClusterSku

| Name | Description | Value |
|-|-|-|
| capacity | Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests. | intConstraints:Min value = 36Max value = 396 |
| name | Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests. | 'Default' |
## Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      manualPrivateLinkServiceConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {}
            privateLinkServiceId = "string"
          }
        }
      ]
    }
  })
}

```

### clusters/privateEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The properties associated with a private endpoint. | PrivateEndpointProperties |


### PrivateEndpointProperties

| Name | Description | Value |
|-|-|-|
| manualPrivateLinkServiceConnections | A list of connections to the remote resource. Immutable after it is set. | PrivateLinkServiceConnection[] |


### PrivateLinkServiceConnection

| Name | Description | Value |
|-|-|-|
| properties | Bag of properties defining a privatelinkServiceConnection. | PrivateLinkServiceConnectionProperties |


### PrivateLinkServiceConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests. | string[] |
| privateLinkServiceConnectionState | A collection of read-only information about the state of the connection to the private remote resource. | PrivateLinkConnectionState |
| privateLinkServiceId | The resource id of the private link service. Required on PUT (CreateOrUpdate) requests. | string |
## Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      cluster = {
        id = "string"
      }
      compatibilityLevel = "string"
      contentStoragePolicy = "string"
      dataLocale = "string"
      eventsLateArrivalMaxDelayInSeconds = int
      eventsOutOfOrderMaxDelayInSeconds = int
      eventsOutOfOrderPolicy = "string"
      externals = {
        container = "string"
        path = "string"
        refreshConfiguration = {
          dateFormat = "string"
          pathPattern = "string"
          refreshInterval = "string"
          refreshType = "string"
          timeFormat = "string"
        }
        storageAccount = {
          accountKey = "string"
          accountName = "string"
          authenticationMode = "string"
        }
      }
      functions = [
        {
          name = "string"
          properties = {
            properties = {
              binding = {
                type = "string"
                // For remaining properties, see FunctionBinding objects
              }
              inputs = [
                {
                  dataType = "string"
                  isConfigurationParameter = bool
                }
              ]
              output = {
                dataType = "string"
              }
            }
            type = "string"
            // For remaining properties, see FunctionProperties objects
          }
        }
      ]
      inputs = [
        {
          name = "string"
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
        }
      ]
      jobStorageAccount = {
        accountKey = "string"
        accountName = "string"
        authenticationMode = "string"
      }
      jobType = "string"
      outputErrorPolicy = "string"
      outputs = [
        {
          name = "string"
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
        }
      ]
      outputStartMode = "string"
      outputStartTime = "string"
      sku = {
        capacity = int
        name = "Standard"
      }
      transformation = {
        name = "string"
        properties = {
          query = "string"
          streamingUnits = int
          validStreamingUnits = [
            int
          ]
        }
      }
    }
    sku = {
      capacity = int
      name = "Standard"
    }
  })
}

```

### streamingjobs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests. | Sku |
| identity | Describes the managed identity assigned to this job that can be used to authenticate with inputs and outputs. | Identity |
| properties | The properties that are associated with a streaming job.  Required on PUT (CreateOrReplace) requests. | StreamingJobProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The type of identity, can be SystemAssigned or UserAssigned. | string |
| userAssignedIdentities | The user assigned identities associated with the streaming job resource. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### StreamingJobProperties

| Name | Description | Value |
|-|-|-|
| cluster | The cluster which streaming jobs will run on. | ClusterInfo |
| compatibilityLevel | Controls certain runtime behaviors of the streaming job. | '1.0''1.2' |
| contentStoragePolicy | Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. . | 'JobStorageAccount''SystemAccount' |
| dataLocale | The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the sethttps://msdn.microsoft.com/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified. | string |
| eventsLateArrivalMaxDelayInSeconds | The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1. | int |
| eventsOutOfOrderMaxDelayInSeconds | The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. | int |
| eventsOutOfOrderPolicy | Indicates the policy to apply to events that arrive out of order in the input event stream. | 'Adjust''Drop' |
| externals | The storage account where the custom code artifacts are located. | External |
| functions | A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation. | Function[] |
| inputs | A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input. | Input[] |
| jobStorageAccount | The properties that are associated with an Azure Storage account with MSI | JobStorageAccount |
| jobType | Describes the type of the job. Valid modes areCloudand 'Edge'. | 'Cloud''Edge' |
| outputErrorPolicy | Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size). | 'Drop''Stop' |
| outputs | A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output. | Output[] |
| outputStartMode | This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time. | 'CustomTime''JobStartTime''LastOutputEventTime' |
| outputStartTime | Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. | string |
| sku | Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests. | Sku |
| transformation | Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation. | Transformation |


### ClusterInfo

| Name | Description | Value |
|-|-|-|
| id | The resource id of cluster. | string |


### External

| Name | Description | Value |
|-|-|-|
| container | The UserCustomCode container. | string |
| path | The UserCustomCode path. | string |
| refreshConfiguration | The refresh parameters for any/all updatable user defined functions present in the job config. | RefreshConfiguration |
| storageAccount | The properties that are associated with an Azure Storage account | StorageAccount |


### RefreshConfiguration

| Name | Description | Value |
|-|-|-|
| dateFormat | The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. | string |
| pathPattern | The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. Seehttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-inputorhttps://docs.microsoft.com/rest/api/streamanalytics/stream-analytics-outputfor a more detailed explanation and example. | string |
| refreshInterval | The refresh interval. | string |
| refreshType | This property indicates which data refresh option to use, Blocking or Nonblocking. | 'Blocking''Nonblocking' |
| timeFormat | The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. | string |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| accountKey | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| accountName | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | string |
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |


### Function

| Name | Description | Value |
|-|-|-|
| name | Resource name | string |
| properties | The properties that are associated with a function. | FunctionProperties |


### FunctionProperties

| Name | Description | Value |
|-|-|-|
| properties |  | FunctionConfiguration |
| type | Set the object type | AggregateScalar(required) |


### FunctionConfiguration

| Name | Description | Value |
|-|-|-|
| binding | The physical binding of the function. For example, in the Azure Machine Learning web serviceâs case, this describes the endpoint. | FunctionBinding |
| inputs |  | FunctionInput[] |
| output | Describes the output of a function. | FunctionOutput |


### FunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Microsoft.MachineLearning/WebServiceMicrosoft.MachineLearningServicesMicrosoft.StreamAnalytics/CLRUdfMicrosoft.StreamAnalytics/JavascriptUdf(required) |


### AzureMachineLearningStudioFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.MachineLearning/WebService' (required) |
| properties | The binding properties associated with an Azure Machine learning Studio. | AzureMachineLearningStudioFunctionBindingProperties |


### AzureMachineLearningStudioFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key used to authenticate with Request-Response endpoint. | string |
| batchSize | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | int |
| endpoint | The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here:https://docs.microsoft.com/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs | string |
| inputs | The inputs for the Azure Machine Learning Studio endpoint. | AzureMachineLearningStudioInputs |
| outputs | A list of outputs from the Azure Machine Learning Studio endpoint execution. | AzureMachineLearningStudioOutputColumn[] |


### AzureMachineLearningStudioInputs

| Name | Description | Value |
|-|-|-|
| columnNames | A list of input columns for the Azure Machine Learning Studio endpoint. | AzureMachineLearningStudioInputColumn[] |
| name | The name of the input. This is the name provided while authoring the endpoint. | string |


### AzureMachineLearningStudioInputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the input column. | string |


### AzureMachineLearningStudioOutputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx. | string |
| name | The name of the output column. | string |


### AzureMachineLearningServiceFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.MachineLearningServices' (required) |
| properties | The binding properties associated with an Azure Machine learning web service. | AzureMachineLearningServiceFunctionBindingProperties |


### AzureMachineLearningServiceFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key used to authenticate with Request-Response endpoint. | string |
| batchSize | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | int |
| endpoint | The Request-Response execute endpoint of the Azure Machine Learning web service. | string |
| inputRequestName | Label for the input request object. | string |
| inputs | The inputs for the Azure Machine Learning web service endpoint. | AzureMachineLearningServiceInputColumn[] |
| numberOfParallelRequests | The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1. | int |
| outputResponseName | Label for the output request object. | string |
| outputs | A list of outputs from the Azure Machine Learning web service endpoint execution. | AzureMachineLearningServiceOutputColumn[] |


### AzureMachineLearningServiceInputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the input column. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the input column. | string |


### AzureMachineLearningServiceOutputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the output column. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the output column. | string |


### CSharpFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.StreamAnalytics/CLRUdf' (required) |
| properties | The binding properties associated with a CSharp function. | CSharpFunctionBindingProperties |


### CSharpFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| class | The Csharp code containing a single function definition. | string |
| dllPath | The Csharp code containing a single function definition. | string |
| method | The Csharp code containing a single function definition. | string |
| updateMode | Refresh modes for Stream Analytics functions. | 'Refreshable''Static' |


### JavaScriptFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.StreamAnalytics/JavascriptUdf' (required) |
| properties | The binding properties associated with a JavaScript function. | JavaScriptFunctionBindingProperties |


### JavaScriptFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| script | The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }' | string |


### FunctionInput

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx | string |
| isConfigurationParameter | A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false. | bool |


### FunctionOutput

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx | string |


### AggregateFunctionProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of function. | 'Aggregate' (required) |


### ScalarFunctionProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of function. | 'Scalar' (required) |


### Input

| Name | Description | Value |
|-|-|-|
| name | Resource name | string |
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


### JobStorageAccount

| Name | Description | Value |
|-|-|-|
| accountKey | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| accountName | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | string |
| authenticationMode | Authentication Mode. | 'ConnectionString''Msi''UserToken' |


### Output

| Name | Description | Value |
|-|-|-|
| name | Resource name | string |
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


### OutputWatermarkProperties

| Name | Description | Value |
|-|-|-|
| maxWatermarkDifferenceAcrossPartitions | Describes the maximal delta between the fastest and slowest partitions, so the out of order window that catches all necessary events in downstream jobs is well defined. | string |
| watermarkMode | The output watermark mode. | 'None''SendCurrentPartitionWatermark''SendLowestWatermarkAcrossPartitions' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the SKU. | int |
| name | The name of the SKU. Required on PUT (CreateOrReplace) requests. | 'Standard' |


### Transformation

| Name | Description | Value |
|-|-|-|
| name | Resource name | string |
| properties | The properties that are associated with a transformation. Required on PUT (CreateOrReplace) requests. | TransformationProperties |


### TransformationProperties

| Name | Description | Value |
|-|-|-|
| query | Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here:https://msdn.microsoft.com/library/azure/dn834998. Required on PUT (CreateOrReplace) requests. | string |
| streamingUnits | Specifies the number of streaming units that the streaming job uses. | int |
| validStreamingUnits | Specifies the valid streaming units a streaming job can scale to. | int[] |
## Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      properties = {
        binding = {
          type = "string"
          // For remaining properties, see FunctionBinding objects
        }
        inputs = [
          {
            dataType = "string"
            isConfigurationParameter = bool
          }
        ]
        output = {
          dataType = "string"
        }
      }
      type = "string"
      // For remaining properties, see FunctionProperties objects
    }
  })
}

```

### streamingjobs/functions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:streamingjobs |
| properties | The properties that are associated with a function. | FunctionProperties |


### FunctionProperties

| Name | Description | Value |
|-|-|-|
| properties |  | FunctionConfiguration |
| type | Set the object type | AggregateScalar(required) |


### FunctionConfiguration

| Name | Description | Value |
|-|-|-|
| binding | The physical binding of the function. For example, in the Azure Machine Learning web serviceâs case, this describes the endpoint. | FunctionBinding |
| inputs |  | FunctionInput[] |
| output | Describes the output of a function. | FunctionOutput |


### FunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Microsoft.MachineLearning/WebServiceMicrosoft.MachineLearningServicesMicrosoft.StreamAnalytics/CLRUdfMicrosoft.StreamAnalytics/JavascriptUdf(required) |


### AzureMachineLearningStudioFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.MachineLearning/WebService' (required) |
| properties | The binding properties associated with an Azure Machine learning Studio. | AzureMachineLearningStudioFunctionBindingProperties |


### AzureMachineLearningStudioFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key used to authenticate with Request-Response endpoint. | string |
| batchSize | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | int |
| endpoint | The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here:https://docs.microsoft.com/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs | string |
| inputs | The inputs for the Azure Machine Learning Studio endpoint. | AzureMachineLearningStudioInputs |
| outputs | A list of outputs from the Azure Machine Learning Studio endpoint execution. | AzureMachineLearningStudioOutputColumn[] |


### AzureMachineLearningStudioInputs

| Name | Description | Value |
|-|-|-|
| columnNames | A list of input columns for the Azure Machine Learning Studio endpoint. | AzureMachineLearningStudioInputColumn[] |
| name | The name of the input. This is the name provided while authoring the endpoint. | string |


### AzureMachineLearningStudioInputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the input column. | string |


### AzureMachineLearningStudioOutputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx. | string |
| name | The name of the output column. | string |


### AzureMachineLearningServiceFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.MachineLearningServices' (required) |
| properties | The binding properties associated with an Azure Machine learning web service. | AzureMachineLearningServiceFunctionBindingProperties |


### AzureMachineLearningServiceFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key used to authenticate with Request-Response endpoint. | string |
| batchSize | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | int |
| endpoint | The Request-Response execute endpoint of the Azure Machine Learning web service. | string |
| inputRequestName | Label for the input request object. | string |
| inputs | The inputs for the Azure Machine Learning web service endpoint. | AzureMachineLearningServiceInputColumn[] |
| numberOfParallelRequests | The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1. | int |
| outputResponseName | Label for the output request object. | string |
| outputs | A list of outputs from the Azure Machine Learning web service endpoint execution. | AzureMachineLearningServiceOutputColumn[] |


### AzureMachineLearningServiceInputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the input column. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the input column. | string |


### AzureMachineLearningServiceOutputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the output column. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the output column. | string |


### CSharpFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.StreamAnalytics/CLRUdf' (required) |
| properties | The binding properties associated with a CSharp function. | CSharpFunctionBindingProperties |


### CSharpFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| class | The Csharp code containing a single function definition. | string |
| dllPath | The Csharp code containing a single function definition. | string |
| method | The Csharp code containing a single function definition. | string |
| updateMode | Refresh modes for Stream Analytics functions. | 'Refreshable''Static' |


### JavaScriptFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.StreamAnalytics/JavascriptUdf' (required) |
| properties | The binding properties associated with a JavaScript function. | JavaScriptFunctionBindingProperties |


### JavaScriptFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| script | The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }' | string |


### FunctionInput

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx | string |
| isConfigurationParameter | A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false. | bool |


### FunctionOutput

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx | string |


### AggregateFunctionProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of function. | 'Aggregate' (required) |


### ScalarFunctionProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of function. | 'Scalar' (required) |
## Microsoft.StreamAnalytics/streamingjobs/inputs@2021-10-01-preview

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
## Microsoft.StreamAnalytics/streamingjobs/outputs@2021-10-01-preview

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
## Microsoft.StreamAnalytics/streamingjobs/transformations@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/transformations@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      query = "string"
      streamingUnits = int
      validStreamingUnits = [
        int
      ]
    }
  })
}

```

### streamingjobs/transformations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:streamingjobs |
| properties | The properties that are associated with a transformation. Required on PUT (CreateOrReplace) requests. | TransformationProperties |


### TransformationProperties

| Name | Description | Value |
|-|-|-|
| query | Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here:https://msdn.microsoft.com/library/azure/dn834998. Required on PUT (CreateOrReplace) requests. | string |
| streamingUnits | Specifies the number of streaming units that the streaming job uses. | int |
| validStreamingUnits | Specifies the valid streaming units a streaming job can scale to. | int[] |
