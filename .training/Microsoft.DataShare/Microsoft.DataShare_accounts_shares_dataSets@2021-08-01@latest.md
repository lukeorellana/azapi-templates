```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/dataSets@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shares/dataSets objects
  body = jsonencode({
    kind = "string"
  })
}

```

### accounts/shares/dataSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | AdlsGen1FileAdlsGen1FolderAdlsGen2FileAdlsGen2FileSystemAdlsGen2FolderBlobBlobFolderContainerKustoClusterKustoDatabaseKustoTableSqlDBTableSqlDWTableSynapseWorkspaceSqlPoolTable(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shares |


### AdlsGen1FileDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'AdlsGen1File' (required) |
| properties | ADLS Gen 1 file data set properties. | AdlsGen1FileProperties(required) |


### AdlsGen1FileProperties

| Name | Description | Value |
|-|-|-|
| accountName | The ADLS account name. | string (required) |
| fileName | The file name in the ADLS account. | string (required) |
| folderPath | The folder path within the ADLS account. | string (required) |
| resourceGroup | Resource group of ADLS account. | string (required) |
| subscriptionId | Subscription id of ADLS account. | string (required) |


### AdlsGen1FolderDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'AdlsGen1Folder' (required) |
| properties | ADLS Gen 1 folder data set properties. | AdlsGen1FolderProperties(required) |


### AdlsGen1FolderProperties

| Name | Description | Value |
|-|-|-|
| accountName | The ADLS account name. | string (required) |
| folderPath | The folder path within the ADLS account. | string (required) |
| resourceGroup | Resource group of ADLS account. | string (required) |
| subscriptionId | Subscription id of ADLS account. | string (required) |


### AdlsGen2FileDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'AdlsGen2File' (required) |
| properties | ADLS Gen 2 file data set properties. | AdlsGen2FileProperties(required) |


### AdlsGen2FileProperties

| Name | Description | Value |
|-|-|-|
| filePath | File path within the file system. | string (required) |
| fileSystem | File system to which the file belongs. | string (required) |
| resourceGroup | Resource group of storage account | string (required) |
| storageAccountName | Storage account name of the source data set | string (required) |
| subscriptionId | Subscription id of storage account | string (required) |


### AdlsGen2FileSystemDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'AdlsGen2FileSystem' (required) |
| properties | ADLS Gen 2 file system data set properties. | AdlsGen2FileSystemProperties(required) |


### AdlsGen2FileSystemProperties

| Name | Description | Value |
|-|-|-|
| fileSystem | The file system name. | string (required) |
| resourceGroup | Resource group of storage account | string (required) |
| storageAccountName | Storage account name of the source data set | string (required) |
| subscriptionId | Subscription id of storage account | string (required) |


### AdlsGen2FolderDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'AdlsGen2Folder' (required) |
| properties | ADLS Gen 2 folder data set properties. | AdlsGen2FolderProperties(required) |


### AdlsGen2FolderProperties

| Name | Description | Value |
|-|-|-|
| fileSystem | File system to which the folder belongs. | string (required) |
| folderPath | Folder path within the file system. | string (required) |
| resourceGroup | Resource group of storage account | string (required) |
| storageAccountName | Storage account name of the source data set | string (required) |
| subscriptionId | Subscription id of storage account | string (required) |


### BlobDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'Blob' (required) |
| properties | Blob data set properties. | BlobProperties(required) |


### BlobProperties

| Name | Description | Value |
|-|-|-|
| containerName | Container that has the file path. | string (required) |
| filePath | File path within the source data set | string (required) |
| resourceGroup | Resource group of storage account | string (required) |
| storageAccountName | Storage account name of the source data set | string (required) |
| subscriptionId | Subscription id of storage account | string (required) |


### BlobFolderDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'BlobFolder' (required) |
| properties | Blob folder data set properties. | BlobFolderProperties(required) |


### BlobFolderProperties

| Name | Description | Value |
|-|-|-|
| containerName | Container that has the file path. | string (required) |
| prefix | Prefix for blob folder | string (required) |
| resourceGroup | Resource group of storage account | string (required) |
| storageAccountName | Storage account name of the source data set | string (required) |
| subscriptionId | Subscription id of storage account | string (required) |


### BlobContainerDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'Container' (required) |
| properties | Blob container data set properties. | BlobContainerProperties(required) |


### BlobContainerProperties

| Name | Description | Value |
|-|-|-|
| containerName | BLOB Container name. | string (required) |
| resourceGroup | Resource group of storage account | string (required) |
| storageAccountName | Storage account name of the source data set | string (required) |
| subscriptionId | Subscription id of storage account | string (required) |


### KustoClusterDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'KustoCluster' (required) |
| properties | Kusto cluster data set properties. | KustoClusterDataSetProperties(required) |


### KustoClusterDataSetProperties

| Name | Description | Value |
|-|-|-|
| kustoClusterResourceId | Resource id of the kusto cluster. | string (required) |


### KustoDatabaseDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'KustoDatabase' (required) |
| properties | Kusto database data set properties. | KustoDatabaseDataSetProperties(required) |


### KustoDatabaseDataSetProperties

| Name | Description | Value |
|-|-|-|
| kustoDatabaseResourceId | Resource id of the kusto database. | string (required) |


### KustoTableDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'KustoTable' (required) |
| properties | Kusto table data set properties. | KustoTableDataSetProperties(required) |


### KustoTableDataSetProperties

| Name | Description | Value |
|-|-|-|
| kustoDatabaseResourceId | Resource id of the kusto database. | string (required) |
| tableLevelSharingProperties | Table level sharing properties for kusto database | TableLevelSharingProperties(required) |


### TableLevelSharingProperties

| Name | Description | Value |
|-|-|-|
| externalTablesToExclude | External tables to be excluded in the data set | string[] |
| externalTablesToInclude | External tables to be included in the data set | string[] |
| materializedViewsToExclude | Materialized views to be excluded in the data set | string[] |
| materializedViewsToInclude | Materialized views to be included in the data set | string[] |
| tablesToExclude | Tables to be excluded in the data set | string[] |
| tablesToInclude | Tables to be included in the data set | string[] |


### SqlDBTableDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'SqlDBTable' (required) |
| properties | SQL DB table data set properties. | SqlDBTableProperties |


### SqlDBTableProperties

| Name | Description | Value |
|-|-|-|
| databaseName | Database name of the source data set | string (required) |
| schemaName | Schema of the table. Default value is dbo. | string (required) |
| sqlServerResourceId | Resource id of SQL server | string (required) |
| tableName | SQL DB table name. | string (required) |


### SqlDWTableDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'SqlDWTable' (required) |
| properties | SQL DW table data set properties. | SqlDWTableProperties |


### SqlDWTableProperties

| Name | Description | Value |
|-|-|-|
| dataWarehouseName | DataWarehouse name of the source data set | string (required) |
| schemaName | Schema of the table. Default value is dbo. | string (required) |
| sqlServerResourceId | Resource id of SQL server | string (required) |
| tableName | SQL DW table name. | string (required) |


### SynapseWorkspaceSqlPoolTableDataSet

| Name | Description | Value |
|-|-|-|
| kind | Kind of data set. | 'SynapseWorkspaceSqlPoolTable' (required) |
| properties | Synapse Workspace Sql Pool Table data set properties. | SynapseWorkspaceSqlPoolTableDataSetProperties(required) |


### SynapseWorkspaceSqlPoolTableDataSetProperties

| Name | Description | Value |
|-|-|-|
| synapseWorkspaceSqlPoolTableResourceId | Resource id of the Synapse Workspace SQL Pool Table | string (required) |


