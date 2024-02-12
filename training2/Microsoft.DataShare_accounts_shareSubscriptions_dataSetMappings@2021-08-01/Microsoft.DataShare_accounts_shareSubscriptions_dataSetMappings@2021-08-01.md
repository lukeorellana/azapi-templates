```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shareSubscriptions/dataSetMappings objects
  body = jsonencode({
    kind = "string"
  })
}

```

### accounts/shareSubscriptions/dataSetMappings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | AdlsGen2FileAdlsGen2FileSystemAdlsGen2FolderBlobBlobFolderContainerKustoClusterKustoDatabaseKustoTableSqlDBTableSqlDWTableSynapseWorkspaceSqlPoolTable(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shareSubscriptions |


### AdlsGen2FileDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'AdlsGen2File' (required) |
| properties | ADLS Gen2 file data set mapping properties. | AdlsGen2FileDataSetMappingProperties(required) |


### AdlsGen2FileDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| filePath | File path within the file system. | string (required) |
| fileSystem | File system to which the file belongs. | string (required) |
| outputType | Type of output file | 'Csv''Parquet' |
| resourceGroup | Resource group of storage account. | string (required) |
| storageAccountName | Storage account name of the source data set. | string (required) |
| subscriptionId | Subscription id of storage account. | string (required) |


### AdlsGen2FileSystemDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'AdlsGen2FileSystem' (required) |
| properties | ADLS Gen2 file system data set mapping properties. | AdlsGen2FileSystemDataSetMappingProperties(required) |


### AdlsGen2FileSystemDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| fileSystem | The file system name. | string (required) |
| resourceGroup | Resource group of storage account. | string (required) |
| storageAccountName | Storage account name of the source data set. | string (required) |
| subscriptionId | Subscription id of storage account. | string (required) |


### AdlsGen2FolderDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'AdlsGen2Folder' (required) |
| properties | ADLS Gen2 folder data set mapping properties. | AdlsGen2FolderDataSetMappingProperties(required) |


### AdlsGen2FolderDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| fileSystem | File system to which the folder belongs. | string (required) |
| folderPath | Folder path within the file system. | string (required) |
| resourceGroup | Resource group of storage account. | string (required) |
| storageAccountName | Storage account name of the source data set. | string (required) |
| subscriptionId | Subscription id of storage account. | string (required) |


### BlobDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'Blob' (required) |
| properties | Blob data set mapping properties. | BlobMappingProperties(required) |


### BlobMappingProperties

| Name | Description | Value |
|-|-|-|
| containerName | Container that has the file path. | string (required) |
| dataSetId | The id of the source data set. | string (required) |
| filePath | File path within the source data set | string (required) |
| outputType | File output type | 'Csv''Parquet' |
| resourceGroup | Resource group of storage account. | string (required) |
| storageAccountName | Storage account name of the source data set. | string (required) |
| subscriptionId | Subscription id of storage account. | string (required) |


### BlobFolderDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'BlobFolder' (required) |
| properties | Blob folder data set mapping properties. | BlobFolderMappingProperties(required) |


### BlobFolderMappingProperties

| Name | Description | Value |
|-|-|-|
| containerName | Container that has the file path. | string (required) |
| dataSetId | The id of the source data set. | string (required) |
| prefix | Prefix for blob folder | string (required) |
| resourceGroup | Resource group of storage account. | string (required) |
| storageAccountName | Storage account name of the source data set. | string (required) |
| subscriptionId | Subscription id of storage account. | string (required) |


### BlobContainerDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'Container' (required) |
| properties | Blob container data set mapping properties. | BlobContainerMappingProperties(required) |


### BlobContainerMappingProperties

| Name | Description | Value |
|-|-|-|
| containerName | BLOB Container name. | string (required) |
| dataSetId | The id of the source data set. | string (required) |
| resourceGroup | Resource group of storage account. | string (required) |
| storageAccountName | Storage account name of the source data set. | string (required) |
| subscriptionId | Subscription id of storage account. | string (required) |


### KustoClusterDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'KustoCluster' (required) |
| properties | Kusto cluster data set mapping properties. | KustoClusterDataSetMappingProperties(required) |


### KustoClusterDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| kustoClusterResourceId | Resource id of the sink kusto cluster. | string (required) |


### KustoDatabaseDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'KustoDatabase' (required) |
| properties | Kusto database data set mapping properties. | KustoDatabaseDataSetMappingProperties(required) |


### KustoDatabaseDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| kustoClusterResourceId | Resource id of the sink kusto cluster. | string (required) |


### KustoTableDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'KustoTable' (required) |
| properties | Kusto database data set mapping properties. | KustoTableDataSetMappingProperties(required) |


### KustoTableDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| kustoClusterResourceId | Resource id of the sink kusto cluster. | string (required) |


### SqlDBTableDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'SqlDBTable' (required) |
| properties | Sql DB data set mapping properties. | SqlDBTableDataSetMappingProperties(required) |


### SqlDBTableDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| databaseName | DatabaseName name of the sink data set | string (required) |
| dataSetId | The id of the source data set. | string (required) |
| schemaName | Schema of the table. Default value is dbo. | string (required) |
| sqlServerResourceId | Resource id of SQL server | string (required) |
| tableName | SQL DB table name. | string (required) |


### SqlDWTableDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'SqlDWTable' (required) |
| properties | Sql DW data set mapping properties. | SqlDWTableDataSetMappingProperties(required) |


### SqlDWTableDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| dataWarehouseName | DataWarehouse name of the source data set | string (required) |
| schemaName | Schema of the table. Default value is dbo. | string (required) |
| sqlServerResourceId | Resource id of SQL server | string (required) |
| tableName | SQL DW table name. | string (required) |


### SynapseWorkspaceSqlPoolTableDataSetMapping

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set mapping. | 'SynapseWorkspaceSqlPoolTable' (required) |
| properties | A Synapse Workspace Sql Pool Table data set mapping properties. | SynapseWorkspaceSqlPoolTableDataSetMappingProperties(required) |


### SynapseWorkspaceSqlPoolTableDataSetMappingProperties

| Name | Description | Value |
|-|-|-|
| dataSetId | The id of the source data set. | string (required) |
| synapseWorkspaceSqlPoolTableResourceId | Resource id of the Synapse Workspace SQL Pool Table | string (required) |


