## Microsoft.Kusto/clusters@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters@2023-08-15"
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
      acceptedAudiences = [
        {
          value = "string"
        }
      ]
      allowedFqdnList = [
        "string"
      ]
      allowedIpRangeList = [
        "string"
      ]
      enableAutoStop = bool
      enableDiskEncryption = bool
      enableDoubleEncryption = bool
      enablePurge = bool
      enableStreamingIngest = bool
      engineType = "string"
      keyVaultProperties = {
        keyName = "string"
        keyVaultUri = "string"
        keyVersion = "string"
        userIdentity = "string"
      }
      languageExtensions = {
        value = [
          {
            languageExtensionCustomImageName = "string"
            languageExtensionImageName = "string"
            languageExtensionName = "string"
          }
        ]
        value = [
          {
            languageExtensionCustomImageName = "string"
            languageExtensionImageName = "string"
            languageExtensionName = "string"
          }
        ]
      }
      optimizedAutoscale = {
        isEnabled = bool
        maximum = int
        minimum = int
        version = int
      }
      publicIPType = "string"
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = "string"
      trustedExternalTenants = [
        {
          value = "string"
        }
      ]
      virtualClusterGraduationProperties = "string"
      virtualNetworkConfiguration = {
        dataManagementPublicIpId = "string"
        enginePublicIpId = "string"
        state = "string"
        subnetId = "string"
      }
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-22Valid characters:Lowercase letters and numbers.Start with letter.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the cluster. | AzureSku(required) |
| identity | The identity of the cluster, if configured. | Identity |
| properties | The cluster properties. | ClusterProperties |
| zones | The availability zones of the cluster. | string[] |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ComponentsSgqdofSchemasIdentityPropertiesUserassigne... |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| acceptedAudiences | The cluster's accepted audiences. | AcceptedAudiences[] |
| allowedFqdnList | List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster. | string[] |
| allowedIpRangeList | The list of ips in the format of CIDR allowed to connect to the cluster. | string[] |
| enableAutoStop | A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days). | bool |
| enableDiskEncryption | A boolean value that indicates if the cluster's disks are encrypted. | bool |
| enableDoubleEncryption | A boolean value that indicates if double encryption is enabled. | bool |
| enablePurge | A boolean value that indicates if the purge operations are enabled. | bool |
| enableStreamingIngest | A boolean value that indicates if the streaming ingest is enabled. | bool |
| engineType | The engine type | 'V2''V3' |
| keyVaultProperties | KeyVault properties for the cluster encryption. | KeyVaultProperties |
| languageExtensions | List of the cluster's language extensions. | LanguageExtensionsList |
| optimizedAutoscale | Optimized auto scale definition. | OptimizedAutoscale |
| publicIPType | Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6) | 'DualStack''IPv4' |
| publicNetworkAccess | Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed | 'Disabled''Enabled' |
| restrictOutboundNetworkAccess | Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| trustedExternalTenants | The cluster's external tenants. | TrustedExternalTenant[] |
| virtualClusterGraduationProperties | Virtual Cluster graduation properties | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| virtualNetworkConfiguration | Virtual network definition. | VirtualNetworkConfiguration |


### AcceptedAudiences

| Name | Description | Value |
|-|-|-|
| value | GUID or valid URL representing an accepted audience. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key vault key. | string |
| keyVaultUri | The Uri of the key vault. | string |
| keyVersion | The version of the key vault key. | string |
| userIdentity | The user assigned identity (ARM resource id) that has access to the key. | string |


### LanguageExtensionsList

| Name | Description | Value |
|-|-|-|
| value | The list of language extensions. | LanguageExtension[] |
| value | The list of language extensions. | LanguageExtension[] |


### LanguageExtension

| Name | Description | Value |
|-|-|-|
| languageExtensionCustomImageName | The language extension custom image name. | string |
| languageExtensionImageName | The language extension image name. | 'Python3_10_8''Python3_10_8_DL''Python3_6_5''PythonCustomImage''R' |
| languageExtensionName | The language extension name. | 'PYTHON''R' |


### OptimizedAutoscale

| Name | Description | Value |
|-|-|-|
| isEnabled | A boolean value that indicate if the optimized autoscale feature is enabled or not. | bool (required) |
| maximum | Maximum allowed instances count. | int (required) |
| minimum | Minimum allowed instances count. | int (required) |
| version | The version of the template defined, for instance 1. | int (required) |


### TrustedExternalTenant

| Name | Description | Value |
|-|-|-|
| value | GUID representing an external tenant. | string |


### VirtualNetworkConfiguration

| Name | Description | Value |
|-|-|-|
| dataManagementPublicIpId | Data management's service public IP address resource id. | string (required) |
| enginePublicIpId | Engine service's public IP address resource id. | string (required) |
| state | When enabled, the cluster is deployed into the configured subnet, when disabled it will be removed from the subnet. | 'Disabled''Enabled' |
| subnetId | The subnet resource id. | string (required) |


### AzureSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of instances of the cluster. | int |
| name | SKU name. | 'Dev(No SLA)_Standard_D11_v2''Dev(No SLA)_Standard_E2a_v4''Standard_D11_v2''Standard_D12_v2''Standard_D13_v2''Standard_D14_v2''Standard_D16d_v5''Standard_D32d_v4''Standard_D32d_v5''Standard_DS13_v2+1TB_PS''Standard_DS13_v2+2TB_PS''Standard_DS14_v2+3TB_PS''Standard_DS14_v2+4TB_PS''Standard_E16a_v4''Standard_E16ads_v5''Standard_E16as_v4+3TB_PS''Standard_E16as_v4+4TB_PS''Standard_E16as_v5+3TB_PS''Standard_E16as_v5+4TB_PS''Standard_E16d_v4''Standard_E16d_v5''Standard_E16s_v4+3TB_PS''Standard_E16s_v4+4TB_PS''Standard_E16s_v5+3TB_PS''Standard_E16s_v5+4TB_PS''Standard_E2a_v4''Standard_E2ads_v5''Standard_E2d_v4''Standard_E2d_v5''Standard_E4a_v4''Standard_E4ads_v5''Standard_E4d_v4''Standard_E4d_v5''Standard_E64i_v3''Standard_E80ids_v4''Standard_E8a_v4''Standard_E8ads_v5''Standard_E8as_v4+1TB_PS''Standard_E8as_v4+2TB_PS''Standard_E8as_v5+1TB_PS''Standard_E8as_v5+2TB_PS''Standard_E8d_v4''Standard_E8d_v5''Standard_E8s_v4+1TB_PS''Standard_E8s_v4+2TB_PS''Standard_E8s_v5+1TB_PS''Standard_E8s_v5+2TB_PS''Standard_EC16ads_v5''Standard_EC16as_v5+3TB_PS''Standard_EC16as_v5+4TB_PS''Standard_EC8ads_v5''Standard_EC8as_v5+1TB_PS''Standard_EC8as_v5+2TB_PS''Standard_L16as_v3''Standard_L16s''Standard_L16s_v2''Standard_L16s_v3''Standard_L32as_v3''Standard_L32s_v3''Standard_L4s''Standard_L8as_v3''Standard_L8s''Standard_L8s_v2''Standard_L8s_v3' (required) |
| tier | SKU tier. | 'Basic''Standard' (required) |
## Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      databaseName = "string"
      databaseNameOverride = "string"
      databaseNamePrefix = "string"
      defaultPrincipalsModificationKind = "string"
      tableLevelSharingProperties = {
        externalTablesToExclude = [
          "string"
        ]
        externalTablesToInclude = [
          "string"
        ]
        functionsToExclude = [
          "string"
        ]
        functionsToInclude = [
          "string"
        ]
        materializedViewsToExclude = [
          "string"
        ]
        materializedViewsToInclude = [
          "string"
        ]
        tablesToExclude = [
          "string"
        ]
        tablesToInclude = [
          "string"
        ]
      }
    }
  })
}

```

### clusters/attachedDatabaseConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The properties of the attached database configuration. | AttachedDatabaseConfigurationProperties |


### AttachedDatabaseConfigurationProperties

| Name | Description | Value |
|-|-|-|
| clusterResourceId | The resource id of the cluster where the databases you would like to attach reside. | string (required) |
| databaseName | The name of the database which you would like to attach, use * if you want to follow all current and future databases. | string (required) |
| databaseNameOverride | Overrides the original database name. Relevant only when attaching to a specific database. | string |
| databaseNamePrefix | Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster. | string |
| defaultPrincipalsModificationKind | The default principals modification kind | 'None''Replace''Union' (required) |
| tableLevelSharingProperties | Table level sharing specifications | TableLevelSharingProperties |


### TableLevelSharingProperties

| Name | Description | Value |
|-|-|-|
| externalTablesToExclude | List of external tables to exclude from the follower database | string[] |
| externalTablesToInclude | List of external tables to include in the follower database | string[] |
| functionsToExclude | List of functions to exclude from the follower database | string[] |
| functionsToInclude | List of functions to include in the follower database | string[] |
| materializedViewsToExclude | List of materialized views to exclude from the follower database | string[] |
| materializedViewsToInclude | List of materialized views to include in the follower database | string[] |
| tablesToExclude | List of tables to exclude from the follower database | string[] |
| tablesToInclude | List of tables to include in the follower database | string[] |
## Microsoft.Kusto/clusters/databases@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see clusters/databases objects
  body = jsonencode({
    kind = "string"
  })
}

```

### clusters/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| kind | Set the object type | ReadOnlyFollowingReadWrite(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |


### ReadOnlyFollowingDatabase

| Name | Description | Value |
|-|-|-|
| kind | Kind of the database | 'ReadOnlyFollowing' (required) |


### ReadWriteDatabase

| Name | Description | Value |
|-|-|-|
| kind | Kind of the database | 'ReadWrite' (required) |
| properties | The database properties. | ReadWriteDatabaseProperties |


### ReadWriteDatabaseProperties

| Name | Description | Value |
|-|-|-|
| hotCachePeriod | The time the data should be kept in cache for fast queries in TimeSpan. | string |
| keyVaultProperties | KeyVault properties for the database encryption. | KeyVaultProperties |
| softDeletePeriod | The time the data should be kept before it stops being accessible to queries in TimeSpan. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key vault key. | string |
| keyVaultUri | The Uri of the key vault. | string |
| keyVersion | The version of the key vault key. | string |
| userIdentity | The user assigned identity (ARM resource id) that has access to the key. | string |
## Microsoft.Kusto/clusters/databases/dataConnections@2023-08-15

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
## Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consumerGroup = "string"
      dataFormat = "string"
      eventHubResourceId = "string"
      mappingRuleName = "string"
      tableName = "string"
    }
  })
}

```

### clusters/databases/eventhubconnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Class representing the Kusto event hub connection properties. | EventHubConnectionProperties |


### EventHubConnectionProperties

| Name | Description | Value |
|-|-|-|
| consumerGroup | The event hub consumer group. | string (required) |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'CSV''JSON''MULTIJSON' |
| eventHubResourceId | The resource ID of the event hub to be used to create a data connection. | string (required) |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |
## Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

### clusters/databases/principalAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | The database principal. | DatabasePrincipalProperties |


### DatabasePrincipalProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID assigned to the database principal. It can be a user email, application ID, or security group name. | string (required) |
| principalType | Principal type. | 'App''Group''User' (required) |
| role | Database principal role. | 'Admin''Ingestor''Monitor''UnrestrictedViewer''User''Viewer' (required) |
| tenantId | The tenant id of the principal | string |
## Microsoft.Kusto/clusters/databases/scripts@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/scripts@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      continueOnErrors = bool
      forceUpdateTag = "string"
      scriptContent = "string"
      scriptUrl = "string"
      scriptUrlSasToken = "string"
    }
  })
}

```

### clusters/databases/scripts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | The database script. | ScriptProperties |


### ScriptProperties

| Name | Description | Value |
|-|-|-|
| continueOnErrors | Flag that indicates whether to continue if one of the command fails. | bool |
| forceUpdateTag | A unique string. If changed the script will be applied again. | string |
| scriptContent | The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| scriptUrl | The url to the KQL script blob file. Must not be used together with scriptContent property | string |
| scriptUrlSasToken | The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
## Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      privateLinkResourceRegion = "string"
      requestMessage = "string"
    }
  })
}

```

### clusters/managedPrivateEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | A managed private endpoint. | ManagedPrivateEndpointProperties |


### ManagedPrivateEndpointProperties

| Name | Description | Value |
|-|-|-|
| groupId | The groupId in which the managed private endpoint is created. | string (required) |
| privateLinkResourceId | The ARM resource ID of the resource for which the managed private endpoint is created. | string (required) |
| privateLinkResourceRegion | The region of the resource to which the managed private endpoint is created. | string |
| requestMessage | The user request message. | string |
## Microsoft.Kusto/clusters/principalAssignments@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/principalAssignments@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

### clusters/principalAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The cluster principal. | ClusterPrincipalProperties |


### ClusterPrincipalProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name. | string (required) |
| principalType | Principal type. | 'App''Group''User' (required) |
| role | Cluster principal role. | 'AllDatabasesAdmin''AllDatabasesViewer' (required) |
| tenantId | The tenant id of the principal | string |
## Microsoft.Kusto/clusters/privateEndpointConnections@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/privateEndpointConnections@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### clusters/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | Connection State of the Private Endpoint Connection. | PrivateLinkServiceConnectionStateProperty(required) |


### PrivateLinkServiceConnectionStateProperty

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string |
| status | The private link service connection status. | string |
## Microsoft.Kusto/clusters/sandboxCustomImages@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/sandboxCustomImages@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      language = "Python"
      languageVersion = "string"
      requirementsFileContent = "string"
    }
  })
}

```

### clusters/sandboxCustomImages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | A sandbox custom image. | SandboxCustomImageProperties |


### SandboxCustomImageProperties

| Name | Description | Value |
|-|-|-|
| language | The language name, for example Python. | 'Python' (required) |
| languageVersion | The version of the language. | string (required) |
| requirementsFileContent | The requirements file content. | string |
