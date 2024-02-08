```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  // For remaining properties, see environments objects
  body = jsonencode({
    sku = {
      capacity = int
      name = "string"
    }
    kind = "string"
  })
}

```

### environments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Can't use:'<>%&:\?/#or control characters |
| location | The location of the resource. | string (required) |
| tags | Key-value pairs of additional properties for the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate. | Sku(required) |
| kind | Set the object type | Gen1Gen2(required) |


### Gen1EnvironmentCreateOrUpdateParametersOrGen1Environ...

| Name | Description | Value |
|-|-|-|
| kind | The kind of the environment. | 'Gen1' (required) |
| properties | Properties used to create a Gen1 environment. | Gen1EnvironmentCreationPropertiesOrGen1EnvironmentRe...(required) |


### Gen1EnvironmentCreationPropertiesOrGen1EnvironmentRe...

| Name | Description | Value |
|-|-|-|
| dataRetentionTime | ISO8601 timespan specifying the minimum number of days the environment's events will be available for query. | string (required) |
| partitionKeyProperties | The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported. | TimeSeriesIdProperty[] |
| storageLimitExceededBehavior | The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData. | 'PauseIngress''PurgeOldData' |


### TimeSeriesIdProperty

| Name | Description | Value |
|-|-|-|
| name | The name of the property. | string |
| type | The type of the property. | 'String' |


### Gen2EnvironmentCreateOrUpdateParametersOrGen2Environ...

| Name | Description | Value |
|-|-|-|
| kind | The kind of the environment. | 'Gen2' (required) |
| properties | Properties used to create a Gen2 environment. | Gen2EnvironmentCreationPropertiesOrGen2EnvironmentRe...(required) |


### Gen2EnvironmentCreationPropertiesOrGen2EnvironmentRe...

| Name | Description | Value |
|-|-|-|
| storageConfiguration | The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data. | Gen2StorageConfigurationInputOrGen2StorageConfigurat...(required) |
| timeSeriesIdProperties | The list of event properties which will be used to define the environment's time series id. | TimeSeriesIdProperty[] (required) |
| warmStoreConfiguration | The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query. | WarmStoreConfigurationProperties |


### Gen2StorageConfigurationInputOrGen2StorageConfigurat...

| Name | Description | Value |
|-|-|-|
| accountName | The name of the storage account that will hold the environment's Gen2 data. | string (required) |
| managementKey | The value of the management key that grants the Time Series Insights service write access to the storage account. This property is not shown in environment responses. | string (required) |


### WarmStoreConfigurationProperties

| Name | Description | Value |
|-|-|-|
| dataRetention | ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created. | int (required) |
| name | The name of this SKU. | 'L1''P1''S1''S2' (required) |


