## Microsoft.OperationalInsights/clusters@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/clusters@2021-06-01"
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
      associatedWorkspaces = [
        {
        }
      ]
      billingType = "string"
      capacityReservationProperties = {}
      isAvailabilityZonesEnabled = bool
      isDoubleEncryptionEnabled = bool
      keyVaultProperties = {
        keyName = "string"
        keyRsaSize = int
        keyVaultUri = "string"
        keyVersion = "string"
      }
    }
    sku = {
      capacity = int
      name = "CapacityReservation"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku properties. | ClusterSku |
| identity | The identity of the resource. | Identity |
| properties | Log Analytics cluster properties. | ClusterProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| associatedWorkspaces | The list of Log Analytics workspaces associated with the cluster | AssociatedWorkspace[] |
| billingType | The cluster's billing type. | 'Cluster''Workspaces' |
| capacityReservationProperties | Additional properties for capacity reservation | CapacityReservationProperties |
| isAvailabilityZonesEnabled | Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones. | bool |
| isDoubleEncryptionEnabled | Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true' | bool |
| keyVaultProperties | The associated key properties. | KeyVaultProperties |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key associated with the Log Analytics cluster. | string |
| keyRsaSize | Selected key minimum required size. | int |
| keyVaultUri | The Key Vault uri which holds they key associated with the Log Analytics cluster. | string |
| keyVersion | The version of the key associated with the Log Analytics cluster. | string |


### ClusterSku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity value | int |
| name | The name of the SKU. | 'CapacityReservation' |
## Microsoft.OperationalInsights/queryPacks@2019-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/queryPacks@2019-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### queryPacks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Log Analytics QueryPack resource. | LogAnalyticsQueryPackProperties(required) |
## Microsoft.OperationalInsights/queryPacks/queries@2019-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/queryPacks/queries@2019-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      body = "string"
      description = "string"
      displayName = "string"
      related = {
        categories = [
          "string"
        ]
        resourceTypes = [
          "string"
        ]
        solutions = [
          "string"
        ]
      }
      tags = {}
    }
  })
}

```

### queryPacks/queries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:queryPacks |
| properties | Properties that define an Log Analytics QueryPack-Query resource. | LogAnalyticsQueryPackQueryProperties |


### LogAnalyticsQueryPackQueryProperties

| Name | Description | Value |
|-|-|-|
| body | Body of the query. | string (required) |
| description | Description of the query. | string |
| displayName | Unique display name for your query within the Query Pack. | string (required) |
| properties | Additional properties that can be set for the query. | For Bicep, you can use theany()function. |
| related | The related metadata items for the function. | LogAnalyticsQueryPackQueryPropertiesRelated |
| tags | Tags associated with the query. | object |


### LogAnalyticsQueryPackQueryPropertiesRelated

| Name | Description | Value |
|-|-|-|
| categories | The related categories for the function. | string[] |
| resourceTypes | The related resource types for the function. | string[] |
| solutions | The related Log Analytics solutions for the function. | string[] |
## Microsoft.OperationalInsights/workspaces@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces@2022-10-01"
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
      defaultDataCollectionRuleResourceId = "string"
      features = {
        clusterResourceId = "string"
        disableLocalAuth = bool
        enableDataExport = bool
        enableLogAccessUsingOnlyResourcePermissions = bool
        immediatePurgeDataOn30Days = bool
      }
      forceCmkForQuery = bool
      publicNetworkAccessForIngestion = "string"
      publicNetworkAccessForQuery = "string"
      retentionInDays = int
      sku = {
        capacityReservationLevel = int
        name = "string"
      }
      workspaceCapping = {
        dailyQuotaGb = int
      }
    }
    etag = "string"
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | The etag of the workspace. | string |
| identity | The identity of the resource. | Identity |
| properties | Workspace properties. | WorkspaceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| defaultDataCollectionRuleResourceId | The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}. | string |
| features | Workspace features. | WorkspaceFeatures |
| forceCmkForQuery | Indicates whether customer managed storage is mandatory for query management. | bool |
| publicNetworkAccessForIngestion | The network access type for accessing Log Analytics ingestion. | 'Disabled''Enabled' |
| publicNetworkAccessForQuery | The network access type for accessing Log Analytics query. | 'Disabled''Enabled' |
| retentionInDays | The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details. | int |
| sku | The SKU of the workspace. | WorkspaceSku |
| workspaceCapping | The daily volume cap for ingestion. | WorkspaceCapping |


### WorkspaceFeatures

| Name | Description | Value |
|-|-|-|
| clusterResourceId | Dedicated LA cluster resourceId that is linked to the workspaces. | string |
| disableLocalAuth | Disable Non-AAD based Auth. | bool |
| enableDataExport | Flag that indicate if data should be exported. | bool |
| enableLogAccessUsingOnlyResourcePermissions | Flag that indicate which permission to use - resource or workspace or both. | bool |
| immediatePurgeDataOn30Days | Flag that describes if we want to remove the data after 30 days. | bool |


### WorkspaceSku

| Name | Description | Value |
|-|-|-|
| capacityReservationLevel | The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected. | int |
| name | The name of the SKU. | 'CapacityReservation''Free''LACluster''PerGB2018''PerNode''Premium''Standalone''Standard' (required) |


### WorkspaceCapping

| Name | Description | Value |
|-|-|-|
| dailyQuotaGb | The workspace daily quota for ingestion. | int |
## Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdDate = "string"
      dataExportId = "string"
      destination = {
        metaData = {
          eventHubName = "string"
        }
        resourceId = "string"
      }
      enable = bool
      lastModifiedDate = "string"
      tableNames = [
        "string"
      ]
    }
  })
}

```

### workspaces/dataExports

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | data export properties. | DataExportProperties |


### DataExportProperties

| Name | Description | Value |
|-|-|-|
| createdDate | The latest data export rule modification time. | string |
| dataExportId | The data export rule ID. | string |
| destination | destination properties. | Destination |
| enable | Active when enabled. | bool |
| lastModifiedDate | Date and time when the export was last modified. | string |
| tableNames | An array of tables to export, for example: [âHeartbeat, SecurityEventâ]. | string[] (required) |


### Destination

| Name | Description | Value |
|-|-|-|
| metaData | destination meta data. | DestinationMetaData |
| resourceId | The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure. | string (required) |


### DestinationMetaData

| Name | Description | Value |
|-|-|-|
| eventHubName | Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account. | string |
## Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### workspaces/dataSources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of the DataSource. | 'ApplicationInsights''AzureActivityLog''AzureAuditLog''ChangeTrackingContentLocation''ChangeTrackingCustomPath''ChangeTrackingDataTypeConfiguration''ChangeTrackingDefaultRegistry''ChangeTrackingLinuxPath''ChangeTrackingPath''ChangeTrackingRegistry''ChangeTrackingServices''CustomLog''CustomLogCollection''DnsAnalytics''GenericDataSource''IISLogs''ImportComputerGroup''Itsm''LinuxChangeTrackingPath''LinuxPerformanceCollection''LinuxPerformanceObject''LinuxSyslog''LinuxSyslogCollection''NetworkMonitoring''Office365''SecurityCenterSecurityWindowsBaselineConfiguration''SecurityEventCollectionConfiguration''SecurityInsightsSecurityEventCollectionConfiguration''SecurityWindowsBaselineConfiguration''SqlDataClassification''WindowsEvent''WindowsPerformanceCounter''WindowsTelemetry' (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| etag | The ETag of the data source. | string |
| properties | The data source properties in raw json format, each kind of data source have it's own schema. | For Bicep, you can use theany()function.(required) |
## Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      resourceId = "string"
      writeAccessResourceId = "string"
    }
  })
}

```

### workspaces/linkedServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | The properties of the linked service. | LinkedServiceProperties(required) |


### LinkedServiceProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | The provisioning state of the linked service. | 'Deleting''ProvisioningAccount''Succeeded''Updating' |
| resourceId | The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access | string |
| writeAccessResourceId | The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access | string |
## Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      storageAccountIds = [
        "string"
      ]
    }
  })
}

```

### workspaces/linkedStorageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Linked storage accounts properties. | LinkedStorageAccountsProperties(required) |


### LinkedStorageAccountsProperties

| Name | Description | Value |
|-|-|-|
| storageAccountIds | Linked storage accounts resources ids. | string[] |
## Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      displayName = "string"
      functionAlias = "string"
      functionParameters = "string"
      query = "string"
      tags = [
        {
          name = "string"
          value = "string"
        }
      ]
      version = int
    }
    etag = "string"
  })
}

```

### workspaces/savedSearches

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| etag | The ETag of the saved search. To override an existing saved search, use "*" or specify the current Etag | string |
| properties | The properties of the saved search. | SavedSearchProperties(required) |


### SavedSearchProperties

| Name | Description | Value |
|-|-|-|
| category | The category of the saved search. This helps the user to find a saved search faster. | string (required) |
| displayName | Saved search display name. | string (required) |
| functionAlias | The function alias if query serves as a function. | string |
| functionParameters | The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to /azure/kusto/query/functions/user-defined-functions. | string |
| query | The query expression for the saved search. | string (required) |
| tags | The tags attached to the saved search. | object |
| version | The version number of the query language. The current version is 2 and is the default. | int |
## Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containers = [
        "string"
      ]
      storageAccount = {
        id = "string"
        key = "string"
      }
      tables = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

### workspaces/storageInsightConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| eTag | The ETag of the storage insight. | string |
| properties | Storage insight properties. | StorageInsightProperties |


### StorageInsightProperties

| Name | Description | Value |
|-|-|-|
| containers | The names of the blob containers that the workspace should read | string[] |
| storageAccount | The storage account connection details | StorageAccount(required) |
| tables | The names of the Azure tables that the workspace should read | string[] |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| id | The Azure Resource Manager ID of the storage account resource. | string (required) |
| key | The storage account key. | string (required) |
## Microsoft.OperationalInsights/workspaces/tables@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/tables@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      plan = "string"
      restoredLogs = {
        endRestoreTime = "string"
        sourceTable = "string"
        startRestoreTime = "string"
      }
      retentionInDays = int
      schema = {
        columns = [
          {
            dataTypeHint = "string"
            description = "string"
            displayName = "string"
            name = "string"
            type = "string"
          }
        ]
        description = "string"
        displayName = "string"
        name = "string"
      }
      searchResults = {
        description = "string"
        endSearchTime = "string"
        limit = int
        query = "string"
        startSearchTime = "string"
      }
      totalRetentionInDays = int
    }
  })
}

```

### workspaces/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Table's properties. | TableProperties |


### TableProperties

| Name | Description | Value |
|-|-|-|
| plan | Instruct the system how to handle and charge the logs ingested to this table. | 'Analytics''Basic' |
| restoredLogs | Parameters of the restore operation that initiated this table. | RestoredLogs |
| retentionInDays | The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention. | int |
| schema | Table schema. | Schema |
| searchResults | Parameters of the search job that initiated this table. | SearchResults |
| totalRetentionInDays | The table total retention in days, between 4 and 2555. Setting this property to -1 will default to table retention. | int |


### RestoredLogs

| Name | Description | Value |
|-|-|-|
| endRestoreTime | The timestamp to end the restore by (UTC). | string |
| sourceTable | The table to restore data from. | string |
| startRestoreTime | The timestamp to start the restore from (UTC). | string |


### Schema

| Name | Description | Value |
|-|-|-|
| columns | A list of table custom columns. | Column[] |
| description | Table description. | string |
| displayName | Table display name. | string |
| name | Table name. | string |


### Column

| Name | Description | Value |
|-|-|-|
| dataTypeHint | Column data type logical hint. | 'armPath''guid''ip''uri' |
| description | Column description. | string |
| displayName | Column display name. | string |
| name | Column name. | string |
| type | Column data type. | 'boolean''dateTime''dynamic''guid''int''long''real''string' |


### SearchResults

| Name | Description | Value |
|-|-|-|
| description | Search job Description. | string |
| endSearchTime | The timestamp to end the search by (UTC) | string |
| limit | Limit the search job to return up to specified number of rows. | int |
| query | Search job query. | string |
| startSearchTime | The timestamp to start the search from (UTC) | string |
