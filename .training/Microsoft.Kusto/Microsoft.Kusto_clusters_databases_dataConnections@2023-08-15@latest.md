```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/dataConnections@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see clusters/databases/dataConnections objects
  body = jsonencode({
    kind = "string"
  })
}

```

### clusters/databases/dataConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| kind | Set the object type | CosmosDbEventGridEventHubIotHub(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |


### CosmosDbDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'CosmosDb' (required) |
| properties | The properties of the CosmosDb data connection. | CosmosDbDataConnectionProperties |


### CosmosDbDataConnectionProperties

| Name | Description | Value |
|-|-|-|
| cosmosDbAccountResourceId | The resource ID of the Cosmos DB account used to create the data connection. | string (required) |
| cosmosDbContainer | The name of an existing container in the Cosmos DB database. | string (required) |
| cosmosDbDatabase | The name of an existing database in the Cosmos DB account. | string (required) |
| managedIdentityResourceId | The resource ID of a managed system or user-assigned identity. The identity is used to authenticate with Cosmos DB. | string (required) |
| mappingRuleName | The name of an existing mapping rule to use when ingesting the retrieved data. | string |
| retrievalStartDate | Optional. If defined, the data connection retrieves Cosmos DB documents created or updated after the specified retrieval start date. | string |
| tableName | The case-sensitive name of the existing target table in your cluster. Retrieved data is ingested into this table. | string (required) |


### EventGridDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'EventGrid' (required) |
| properties | The properties of the Event Grid data connection. | EventGridConnectionProperties |


### EventGridConnectionProperties

| Name | Description | Value |
|-|-|-|
| blobStorageEventType | The name of blob storage event type to process. | 'Microsoft.Storage.BlobCreated''Microsoft.Storage.BlobRenamed' |
| consumerGroup | The event hub consumer group. | string (required) |
| databaseRouting | Indication for database routing information from the data connection, by default only database routing information is allowed | 'Multi''Single' |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE' |
| eventGridResourceId | The resource ID of the event grid that is subscribed to the storage account events. | string |
| eventHubResourceId | The resource ID where the event grid is configured to send events. | string (required) |
| ignoreFirstRecord | A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file | bool |
| managedIdentityResourceId | The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub and storage account. | string |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| storageAccountResourceId | The resource ID of the storage account where the data resides. | string (required) |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |


### EventHubDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'EventHub' (required) |
| properties | The Event Hub data connection properties to validate. | EventHubConnectionProperties |


### EventHubConnectionProperties

| Name | Description | Value |
|-|-|-|
| compression | The event hub messages compression type | 'GZip''None' |
| consumerGroup | The event hub consumer group. | string (required) |
| databaseRouting | Indication for database routing information from the data connection, by default only database routing information is allowed | 'Multi''Single' |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE' |
| eventHubResourceId | The resource ID of the event hub to be used to create a data connection. | string (required) |
| eventSystemProperties | System properties of the event hub | string[] |
| managedIdentityResourceId | The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub. | string |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| retrievalStartDate | When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period. | string |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |


### IotHubDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'IotHub' (required) |
| properties | The Iot Hub data connection properties. | IotHubConnectionProperties |


### IotHubConnectionProperties

| Name | Description | Value |
|-|-|-|
| consumerGroup | The iot hub consumer group. | string (required) |
| databaseRouting | Indication for database routing information from the data connection, by default only database routing information is allowed | 'Multi''Single' |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE' |
| eventSystemProperties | System properties of the iot hub | string[] |
| iotHubResourceId | The resource ID of the Iot hub to be used to create a data connection. | string (required) |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| retrievalStartDate | When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period. | string |
| sharedAccessPolicyName | The name of the share access policy | string (required) |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |


