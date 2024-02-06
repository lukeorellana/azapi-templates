## Microsoft.DataShare/accounts@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts@2021-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the azure resource. | string |
| tags | Tags on the azure resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity Info on the Account | Identity(required) |
| properties | Properties on the account | AccountProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Identity Type | 'SystemAssigned' |
## Microsoft.DataShare/accounts/shares@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      shareKind = "string"
      terms = "string"
    }
  })
}

```

### accounts/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties on the share | ShareProperties |


### ShareProperties

| Name | Description | Value |
|-|-|-|
| description | Share description. | string |
| shareKind | Share kind. | 'CopyBased''InPlace' |
| terms | Share terms. | string |
## Microsoft.DataShare/accounts/shares/dataSets@2021-08-01

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
## Microsoft.DataShare/accounts/shares/invitations@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/invitations@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationDate = "string"
      targetActiveDirectoryId = "string"
      targetEmail = "string"
      targetObjectId = "string"
    }
  })
}

```

### accounts/shares/invitations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shares |
| properties | Properties on the Invitation | InvitationProperties |


### InvitationProperties

| Name | Description | Value |
|-|-|-|
| expirationDate | The expiration date for the invitation and share subscription. | string |
| targetActiveDirectoryId | The target Azure AD Id. Can't be combined with email. | string |
| targetEmail | The email the invitation is directed to. | string |
| targetObjectId | The target user or application Id that invitation is being sent to.Must be specified along TargetActiveDirectoryId. This enables sendinginvitations to specific users or applications in an AD tenant. | string |
## Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shares/synchronizationSettings objects
  body = jsonencode({
    kind = "string"
  })
}

```

### accounts/shares/synchronizationSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | ScheduleBased(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shares |


### ScheduledSynchronizationSetting

| Name | Description | Value |
|-|-|-|
| kind | Kind of synchronization setting. | 'ScheduleBased' (required) |
| properties | Properties of scheduled synchronization | ScheduledSynchronizationSettingProperties(required) |


### ScheduledSynchronizationSettingProperties

| Name | Description | Value |
|-|-|-|
| recurrenceInterval | Recurrence Interval | 'Day''Hour' (required) |
| synchronizationTime | Synchronization time | string (required) |
## Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationDate = "string"
      invitationId = "string"
      sourceShareLocation = "string"
    }
  })
}

```

### accounts/shareSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties on the share subscription | ShareSubscriptionProperties(required) |


### ShareSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| expirationDate | The expiration date of the share subscription. | string |
| invitationId | The invitation id. | string (required) |
| sourceShareLocation | Source share location. | string (required) |
## Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01

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
## Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shareSubscriptions/triggers objects
  body = jsonencode({
    kind = "string"
  })
}

```

### accounts/shareSubscriptions/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | ScheduleBased(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shareSubscriptions |


### ScheduledTrigger

| Name | Description | Value |
|-|-|-|
| kind | Kind of synchronization on trigger. | 'ScheduleBased' (required) |
| properties | Properties of scheduled synchronization | ScheduledTriggerProperties(required) |


### ScheduledTriggerProperties

| Name | Description | Value |
|-|-|-|
| recurrenceInterval | Recurrence Interval | 'Day''Hour' (required) |
| synchronizationMode | Synchronization mode | 'FullSync''Incremental' |
| synchronizationTime | Synchronization time | string (required) |
