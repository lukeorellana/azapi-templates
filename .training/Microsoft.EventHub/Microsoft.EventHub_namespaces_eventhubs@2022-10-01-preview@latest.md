```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      captureDescription = {
        destination = {
          name = "string"
          properties = {
            archiveNameFormat = "string"
            blobContainer = "string"
            dataLakeAccountName = "string"
            dataLakeFolderPath = "string"
            dataLakeSubscriptionId = "string"
            storageAccountResourceId = "string"
          }
        }
        enabled = bool
        encoding = "string"
        intervalInSeconds = int
        sizeLimitInBytes = int
        skipEmptyArchives = bool
      }
      messageRetentionInDays = int
      partitionCount = int
      retentionDescription = {
        cleanupPolicy = "string"
        retentionTimeInHours = int
        tombstoneRetentionTimeInHours = int
      }
      status = "string"
    }
  })
}

```

### namespaces/eventhubs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with letter or number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to the Create Or Update Event Hub operation. | EventhubProperties |


### EventhubProperties

| Name | Description | Value |
|-|-|-|
| captureDescription | Properties of capture description | CaptureDescription |
| messageRetentionInDays | Number of days to retain the events for this Event Hub, value should be 1 to 7 days | int |
| partitionCount | Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions. | int |
| retentionDescription | Event Hub retention settings | RetentionDescription |
| status | Enumerates the possible values for the status of the Event Hub. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |


### CaptureDescription

| Name | Description | Value |
|-|-|-|
| destination | Properties of Destination where capture will be stored. (Storage Account, Blob Names) | Destination |
| enabled | A value that indicates whether capture description is enabled. | bool |
| encoding | Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version | 'Avro''AvroDeflate' |
| intervalInSeconds | The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds | int |
| sizeLimitInBytes | The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes | int |
| skipEmptyArchives | A value that indicates whether to Skip Empty Archives | bool |


### Destination

| Name | Description | Value |
|-|-|-|
| name | Name for capture destination | string |
| properties | Properties describing the storage account, blob container and archive name format for capture destination | DestinationProperties |


### DestinationProperties

| Name | Description | Value |
|-|-|-|
| archiveNameFormat | Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order | string |
| blobContainer | Blob container Name | string |
| dataLakeAccountName | The Azure Data Lake Store name for the captured events | string |
| dataLakeFolderPath | The destination folder path for the captured events | string |
| dataLakeSubscriptionId | Subscription Id of Azure Data Lake Store | string |
| storageAccountResourceId | Resource id of the storage account to be used to create the blobs | string |


### RetentionDescription

| Name | Description | Value |
|-|-|-|
| cleanupPolicy | Enumerates the possible values for cleanup policy | 'Compact''Delete' |
| retentionTimeInHours | Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compact the returned value of this property is Long.MaxValue | int |
| tombstoneRetentionTimeInHours | Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compact. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub | int |


