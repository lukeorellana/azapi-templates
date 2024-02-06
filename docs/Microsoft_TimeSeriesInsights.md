## Microsoft.TimeSeriesInsights/environments@2021-06-30-preview

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
## Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      principalObjectId = "string"
      roles = [
        "string"
      ]
    }
  })
}

```

### environments/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-90Valid characters:Can't use:'<>%&:\?/#or control characters |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties |  | AccessPolicyResourceProperties(required) |


### AccessPolicyResourceProperties

| Name | Description | Value |
|-|-|-|
| description | An description of the access policy. | string |
| principalObjectId | The objectId of the principal in Azure Active Directory. | string |
| roles | The list of roles the principal is assigned on the environment. | String array containing any of:'Contributor''Reader' |
## Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  // For remaining properties, see environments/eventSources objects
  body = jsonencode({
    kind = "string"
    localTimestamp = {
      format = "Embedded"
      timeZoneOffset = {
        propertyName = "string"
      }
    }
  })
}

```

### environments/eventSources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-90Valid characters:Can't use:'<>%&:\?/#or control characters |
| location | The location of the resource. | string (required) |
| tags | Key-value pairs of additional properties for the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Set the object type | Microsoft.EventHubMicrosoft.IoTHub(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| localTimestamp | An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. | LocalTimestamp |


### EventHubEventSourceCreateOrUpdateParametersOrEventHu...

| Name | Description | Value |
|-|-|-|
| kind | The kind of the event source. | 'Microsoft.EventHub' (required) |
| properties | Properties of the EventHub event source that are required on create or update requests. | EventHubEventSourceCreationPropertiesOrEventHubEvent...(required) |


### EventHubEventSourceCreationPropertiesOrEventHubEvent...

| Name | Description | Value |
|-|-|-|
| consumerGroupName | The name of the event hub's consumer group that holds the partitions from which events will be read. | string (required) |
| eventHubName | The name of the event hub. | string (required) |
| eventSourceResourceId | The resource id of the event source in Azure Resource Manager. | string (required) |
| ingressStartAt | An object that contains the details about the starting point in time to ingest events. | IngressStartAtProperties |
| keyName | The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub. | string (required) |
| localTimestamp | An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. | LocalTimestamp |
| serviceBusNamespace | The name of the service bus that contains the event hub. | string (required) |
| sharedAccessKey | The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses. | string (required) |
| timestampPropertyName | The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | string |


### IngressStartAtProperties

| Name | Description | Value |
|-|-|-|
| time | ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed. | string |
| type | The type of the ingressStartAt, It can be "EarliestAvailable", "EventSourceCreationTime", "CustomEnqueuedTime". | 'CustomEnqueuedTime''EarliestAvailable''EventSourceCreationTime' |


### LocalTimestamp

| Name | Description | Value |
|-|-|-|
| format | An enum that represents the format of the local timestamp property that needs to be set. | 'Embedded' |
| timeZoneOffset | An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded. | LocalTimestampTimeZoneOffset |


### LocalTimestampTimeZoneOffset

| Name | Description | Value |
|-|-|-|
| propertyName | The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00) | string |


### IoTHubEventSourceCreateOrUpdateParametersOrIoTHubEve...

| Name | Description | Value |
|-|-|-|
| kind | The kind of the event source. | 'Microsoft.IoTHub' (required) |
| properties | Properties of the IoTHub event source that are required on create or update requests. | IoTHubEventSourceCreationPropertiesOrIoTHubEventSour...(required) |


### IoTHubEventSourceCreationPropertiesOrIoTHubEventSour...

| Name | Description | Value |
|-|-|-|
| consumerGroupName | The name of the iot hub's consumer group that holds the partitions from which events will be read. | string (required) |
| eventSourceResourceId | The resource id of the event source in Azure Resource Manager. | string (required) |
| ingressStartAt | An object that contains the details about the starting point in time to ingest events. | IngressStartAtProperties |
| iotHubName | The name of the iot hub. | string (required) |
| keyName | The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub. | string (required) |
| localTimestamp | An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. | LocalTimestamp |
| sharedAccessKey | The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses. | string (required) |
| timestampPropertyName | The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | string |
## Microsoft.TimeSeriesInsights/environments/privateEndpointConnections@2021-03-31-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/privateEndpointConnections@2021-03-31-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### environments/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The provisioning state of the private endpoint connection resource. | string[] |
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataStringComparisonBehavior = "string"
      keyProperties = [
        {
          name = "string"
          type = "string"
        }
      ]
    }
  })
}

```

### environments/referenceDataSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics |
| location | The location of the resource. | string (required) |
| tags | Key-value pairs of additional properties for the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties | Properties used to create a reference data set. | ReferenceDataSetCreationPropertiesOrReferenceDataSet...(required) |


### ReferenceDataSetCreationPropertiesOrReferenceDataSet...

| Name | Description | Value |
|-|-|-|
| dataStringComparisonBehavior | The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used. | 'Ordinal''OrdinalIgnoreCase' |
| keyProperties | The list of key properties for the reference data set. | ReferenceDataSetKeyProperty[] (required) |


### ReferenceDataSetKeyProperty

| Name | Description | Value |
|-|-|-|
| name | The name of the key property. | string |
| type | The type of the key property. | 'Bool''DateTime''Double''String' |
