## Microsoft.Sql/instancePools@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/instancePools@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      licenseType = "string"
      subnetId = "string"
      vCores = int
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### instancePools

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The name and tier of the SKU. | Sku |
| properties | Resource properties. | InstancePoolProperties |


### InstancePoolProperties

| Name | Description | Value |
|-|-|-|
| licenseType | The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price). | 'BasePrice''LicenseIncluded' (required) |
| subnetId | Resource ID of the subnet to place this instance pool in. | string (required) |
| vCores | Count of vCores belonging to this instance pool. | int (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
## Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managedInstancePairs = [
        {
          partnerManagedInstanceId = "string"
          primaryManagedInstanceId = "string"
        }
      ]
      partnerRegions = [
        {
          location = "string"
        }
      ]
      readWriteEndpoint = {
        failoverPolicy = "string"
        failoverWithDataLossGracePeriodMinutes = int
      }
      secondaryType = "string"
    }
  })
}

```

### locations/instanceFailoverGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Resource properties. | InstanceFailoverGroupProperties |


### InstanceFailoverGroupProperties

| Name | Description | Value |
|-|-|-|
| managedInstancePairs | List of managed instance pairs in the failover group. | ManagedInstancePairInfo[] (required) |
| partnerRegions | Partner region information for the failover group. | PartnerRegionInfo[] (required) |
| readWriteEndpoint | Read-write endpoint of the failover group instance. | InstanceFailoverGroupReadWriteEndpoint(required) |
| secondaryType | Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only. | 'Geo''Standby' |


### ManagedInstancePairInfo

| Name | Description | Value |
|-|-|-|
| partnerManagedInstanceId | Id of Partner Managed Instance in pair. | string |
| primaryManagedInstanceId | Id of Primary Managed Instance in pair. | string |


### PartnerRegionInfo

| Name | Description | Value |
|-|-|-|
| location | Geo location of the partner managed instances. | string |


### InstanceFailoverGroupReadWriteEndpoint

| Name | Description | Value |
|-|-|-|
| failoverPolicy | Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | 'Automatic''Manual' (required) |
| failoverWithDataLossGracePeriodMinutes | Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | int |
## Microsoft.Sql/locations/serverTrustGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/locations/serverTrustGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupMembers = [
        {
          serverId = "string"
        }
      ]
      trustScopes = [
        "string"
      ]
    }
  })
}

```

### locations/serverTrustGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Resource properties. | ServerTrustGroupProperties |


### ServerTrustGroupProperties

| Name | Description | Value |
|-|-|-|
| groupMembers | Group members information for the server trust group. | ServerInfo[] (required) |
| trustScopes | Trust scope of the server trust group. | String array containing any of:'GlobalTransactions''ServiceBroker' (required) |


### ServerInfo

| Name | Description | Value |
|-|-|-|
| serverId | Server Id. | string (required) |
## Microsoft.Sql/managedInstances@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances@2022-05-01-preview"
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
      administratorLogin = "string"
      administratorLoginPassword = "string"
      administrators = {
        administratorType = "ActiveDirectory"
        azureADOnlyAuthentication = bool
        login = "string"
        principalType = "string"
        sid = "string"
        tenantId = "string"
      }
      collation = "string"
      dnsZonePartner = "string"
      instancePoolId = "string"
      keyId = "string"
      licenseType = "string"
      maintenanceConfigurationId = "string"
      managedInstanceCreateMode = "string"
      minimalTlsVersion = "string"
      primaryUserAssignedIdentityId = "string"
      proxyOverride = "string"
      publicDataEndpointEnabled = bool
      requestedBackupStorageRedundancy = "string"
      restorePointInTime = "string"
      servicePrincipal = {
        type = "string"
      }
      sourceManagedInstanceId = "string"
      storageSizeInGB = int
      subnetId = "string"
      timezoneId = "string"
      vCores = int
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### managedInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH | Sku |
| identity | The Azure Active Directory identity of the managed instance. | ResourceIdentity |
| properties | Resource properties. | ManagedInstanceProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The resource ids of the user assigned identities to use | object |


### ManagedInstanceProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). | string |
| administratorLoginPassword | The administrator login password (required for managed instance creation). | string |
| administrators | The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used. | ManagedInstanceExternalAdministrator |
| collation | Collation of the managed instance. | string |
| dnsZonePartner | The resource id of another managed instance whose DNS zone this managed instance will share after creation. | string |
| instancePoolId | The Id of the instance pool this managed server belongs to. | string |
| keyId | A CMK URI of the key to use for encryption. | string |
| licenseType | The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). | 'BasePrice''LicenseIncluded' |
| maintenanceConfigurationId | Specifies maintenance configuration id to apply to this managed instance. | string |
| managedInstanceCreateMode | Specifies the mode of database creation.Default: Regular instance creation.Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified. | 'Default''PointInTimeRestore' |
| minimalTlsVersion | Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2' | string |
| primaryUserAssignedIdentityId | The resource id of a user assigned identity to be used by default. | string |
| proxyOverride | Connection type used for connecting to the instance. | 'Default''Proxy''Redirect' |
| publicDataEndpointEnabled | Whether or not the public data endpoint is enabled. | bool |
| requestedBackupStorageRedundancy | The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage) | 'Geo''GeoZone''Local''Zone' |
| restorePointInTime | Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | string |
| servicePrincipal | The managed instance's service principal. | ServicePrincipal |
| sourceManagedInstanceId | The resource identifier of the source managed instance associated with create operation of this instance. | string |
| storageSizeInGB | Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores. | int |
| subnetId | Subnet resource ID for the managed instance. | string |
| timezoneId | Id of the timezone. Allowed values are timezones supported by Windows.Windows keeps details on supported timezones, including the id, in registry underKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time". | string |
| vCores | The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. | int |
| zoneRedundant | Whether or not the multi-az is enabled. | bool |


### ManagedInstanceExternalAdministrator

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' |
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool |
| login | Login name of the server administrator. | string |
| principalType | Principal Type of the sever administrator. | 'Application''Group''User' |
| sid | SID (object ID) of the server administrator. | string |
| tenantId | Tenant ID of the administrator. | string |


### ServicePrincipal

| Name | Description | Value |
|-|-|-|
| type | Service principal type. | 'None''SystemAssigned' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
## Microsoft.Sql/managedInstances/administrators@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/administrators@2022-05-01-preview"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### managedInstances/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ActiveDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceAdministratorProperties |


### ManagedInstanceAdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the managed instance administrator. | 'ActiveDirectory' (required) |
| login | Login name of the managed instance administrator. | string (required) |
| sid | SID (object ID) of the managed instance administrator. | string (required) |
| tenantId | Tenant ID of the managed instance administrator. | string |
## Microsoft.Sql/managedInstances/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### managedInstances/advancedThreatProtectionSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server. | 'Disabled''Enabled''New' (required) |
## Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

### managedInstances/azureADOnlyAuthentications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceAzureADOnlyAuthProperties |


### ManagedInstanceAzureADOnlyAuthProperties

| Name | Description | Value |
|-|-|-|
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool (required) |
## Microsoft.Sql/managedInstances/databases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoCompleteRestore = bool
      catalogCollation = "string"
      collation = "string"
      createMode = "string"
      crossSubscriptionRestorableDroppedDatabaseId = "string"
      crossSubscriptionSourceDatabaseId = "string"
      crossSubscriptionTargetManagedInstanceId = "string"
      lastBackupName = "string"
      longTermRetentionBackupResourceId = "string"
      recoverableDatabaseId = "string"
      restorableDroppedDatabaseId = "string"
      restorePointInTime = "string"
      sourceDatabaseId = "string"
      storageContainerIdentity = "string"
      storageContainerSasToken = "string"
      storageContainerUri = "string"
    }
  })
}

```

### managedInstances/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedDatabaseProperties |


### ManagedDatabaseProperties

| Name | Description | Value |
|-|-|-|
| autoCompleteRestore | Whether to auto complete restore of this managed database. | bool |
| catalogCollation | Collation of the metadata catalog. | 'DATABASE_DEFAULT''SQL_Latin1_General_CP1_CI_AS' |
| collation | Collation of the managed database. | string |
| createMode | Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required). | 'Default''PointInTimeRestore''Recovery''RestoreExternalBackup''RestoreLongTermRetentionBackup' |
| crossSubscriptionRestorableDroppedDatabaseId | The restorable cross-subscription dropped database resource id to restore when creating this database. | string |
| crossSubscriptionSourceDatabaseId | The resource identifier of the cross-subscription source database associated with create operation of this database. | string |
| crossSubscriptionTargetManagedInstanceId | Target managed instance id used in cross-subscription restore. | string |
| lastBackupName | Last backup file name for restore of this managed database. | string |
| longTermRetentionBackupResourceId | The name of the Long Term Retention backup to be used for restore of this managed database. | string |
| recoverableDatabaseId | The resource identifier of the recoverable database associated with create operation of this database. | string |
| restorableDroppedDatabaseId | The restorable dropped database resource id to restore when creating this database. | string |
| restorePointInTime | Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | string |
| sourceDatabaseId | The resource identifier of the source database associated with create operation of this database. | string |
| storageContainerIdentity | Conditional. If createMode is RestoreExternalBackup, this value is used. Specifies the identity used for storage container authentication. Can be 'SharedAccessSignature' or 'ManagedIdentity'; if not specified 'SharedAccessSignature' is assumed. | string |
| storageContainerSasToken | Conditional. If createMode is RestoreExternalBackup and storageContainerIdentity is not ManagedIdentity, this value is required. Specifies the storage container sas token. | string |
| storageContainerUri | Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. | string |
## Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### managedInstances/databases/advancedThreatProtectionS...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server. | 'Disabled''Enabled''New' (required) |
## Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      monthlyRetention = "string"
      weeklyRetention = "string"
      weekOfYear = int
      yearlyRetention = "string"
    }
  })
}

```

### managedInstances/databases/backupLongTermRetentionPo...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | BaseLongTermRetentionPolicyProperties |


### BaseLongTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| monthlyRetention | The monthly retention policy for an LTR backup in an ISO 8601 format. | string |
| weeklyRetention | The weekly retention policy for an LTR backup in an ISO 8601 format. | string |
| weekOfYear | The week of year to take the yearly backup in an ISO 8601 format. | int |
| yearlyRetention | The yearly retention policy for an LTR backup in an ISO 8601 format. | string |
## Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      retentionDays = int
    }
  })
}

```

### managedInstances/databases/backupShortTermRetentionP...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | ManagedBackupShortTermRetentionPolicyProperties |


### ManagedBackupShortTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| retentionDays | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | int |
## Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationType = "string"
      informationTypeId = "string"
      labelId = "string"
      labelName = "string"
      rank = "string"
    }
  })
}

```

### managedInstances/databases/schemas/tables/columns/se...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: columns |
| properties | Resource properties. | SensitivityLabelProperties |


### SensitivityLabelProperties

| Name | Description | Value |
|-|-|-|
| informationType | The information type. | string |
| informationTypeId | The information type ID. | string |
| labelId | The label ID. | string |
| labelName | The label name. | string |
| rank |  | 'Critical''High''Low''Medium''None' |
## Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### managedInstances/databases/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | SecurityAlertPolicyProperties |


### SecurityAlertPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. | 'Disabled''Enabled''New' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### managedInstances/databases/transparentDataEncryption

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | ManagedTransparentDataEncryptionProperties |


### ManagedTransparentDataEncryptionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the transparent data encryption. | 'Disabled''Enabled' (required) |
## Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

### managedInstances/databases/vulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseVulnerabilityAssessmentProperties |


### DatabaseVulnerabilityAssessmentProperties

| Name | Description | Value |
|-|-|-|
| recurringScans | The recurring scans settings | VulnerabilityAssessmentRecurringScansProperties |
| storageAccountAccessKey | Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |
| storageContainerPath | A blob storage container path to hold the scan results (e.g.https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set | string |
| storageContainerSasKey | A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |


### VulnerabilityAssessmentRecurringScansProperties

| Name | Description | Value |
|-|-|-|
| emails | Specifies an array of e-mail addresses to which the scan notification is sent. | string[] |
| emailSubscriptionAdmins | Specifies that the schedule scan notification will be is sent to the subscription administrators. | bool |
| isEnabled | Recurring scans state. | bool |
## Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      baselineResults = [
        {
          result = [
            "string"
          ]
        }
      ]
    }
  })
}

```

### managedInstances/databases/vulnerabilityAssessments/...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: rules |
| properties | Resource properties. | DatabaseVulnerabilityAssessmentRuleBaselinePropertie... |


### DatabaseVulnerabilityAssessmentRuleBaselinePropertie...

| Name | Description | Value |
|-|-|-|
| baselineResults | The rule baseline result | DatabaseVulnerabilityAssessmentRuleBaselineItem[] (required) |


### DatabaseVulnerabilityAssessmentRuleBaselineItem

| Name | Description | Value |
|-|-|-|
| result | The rule baseline result | string[] (required) |
## Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      primaryAvailabilityGroupName = "string"
      replicationMode = "string"
      secondaryAvailabilityGroupName = "string"
      sourceEndpoint = "string"
      targetDatabase = "string"
    }
  })
}

```

### managedInstances/distributedAvailabilityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | DistributedAvailabilityGroupProperties |


### DistributedAvailabilityGroupProperties

| Name | Description | Value |
|-|-|-|
| primaryAvailabilityGroupName | The primary availability group name | string |
| replicationMode | The replication mode of a distributed availability group. Parameter will be ignored during link creation. | 'Async''Sync' |
| secondaryAvailabilityGroupName | The secondary availability group name | string |
| sourceEndpoint | The source endpoint | string |
| targetDatabase | The name of the target database | string |
## Microsoft.Sql/managedInstances/dnsAliases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/dnsAliases@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    createDnsRecord = bool
  })
}

```

### managedInstances/dnsAliases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| createDnsRecord | Whether or not DNS record should be created for this alias. | bool |
## Microsoft.Sql/managedInstances/dtc@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/dtc@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dtcEnabled = bool
      externalDnsSuffixSearchList = [
        "string"
      ]
      securitySettings = {
        snaLu6point2TransactionsEnabled = bool
        transactionManagerCommunicationSettings = {
          allowInboundEnabled = bool
          allowOutboundEnabled = bool
          authentication = "string"
        }
        xaTransactionsDefaultTimeout = int
        xaTransactionsEnabled = bool
        xaTransactionsMaximumTimeout = int
      }
    }
  })
}

```

### managedInstances/dtc

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceDtcProperties |


### ManagedInstanceDtcProperties

| Name | Description | Value |
|-|-|-|
| dtcEnabled | Active status of managed instance DTC. | bool |
| externalDnsSuffixSearchList | External dns suffix search list of managed instance DTC. | string[] |
| securitySettings | Security settings of managed instance DTC. | ManagedInstanceDtcSecuritySettings |


### ManagedInstanceDtcSecuritySettings

| Name | Description | Value |
|-|-|-|
| snaLu6point2TransactionsEnabled | Allow SNA LU 6.2 Transactions to managed instance DTC. | bool |
| transactionManagerCommunicationSettings | Transaction Manager communication settings of managed instance DTC. | ManagedInstanceDtcTransactionManagerCommunicationSet... |
| xaTransactionsDefaultTimeout | Default timeout for XA Transactions (in seconds). | int |
| xaTransactionsEnabled | Allow XA Transactions to managed instance DTC. | bool |
| xaTransactionsMaximumTimeout | Maximum timeout for XA Transactions (in seconds). | int |


### ManagedInstanceDtcTransactionManagerCommunicationSet...

| Name | Description | Value |
|-|-|-|
| allowInboundEnabled | Allow Inbound traffic to managed instance DTC. | bool |
| allowOutboundEnabled | Allow Outbound traffic of managed instance DTC. | bool |
| authentication | Authentication type of managed instance DTC. | string |
## Microsoft.Sql/managedInstances/encryptionProtector@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/encryptionProtector@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRotationEnabled = bool
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

### managedInstances/encryptionProtector

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceEncryptionProtectorProperties |


### ManagedInstanceEncryptionProtectorProperties

| Name | Description | Value |
|-|-|-|
| autoRotationEnabled | Key auto rotation opt-in flag. Either true or false. | bool |
| serverKeyName | The name of the managed instance key. | string |
| serverKeyType | The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |
## Microsoft.Sql/managedInstances/keys@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/keys@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "string"
      uri = "string"
    }
  })
}

```

### managedInstances/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceKeyProperties |


### ManagedInstanceKeyProperties

| Name | Description | Value |
|-|-|-|
| serverKeyType | The key type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |
| uri | The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required. | string |
## Microsoft.Sql/managedInstances/privateEndpointConnections@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/privateEndpointConnections@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### managedInstances/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstancePrivateEndpointConnectionProperties |


### ManagedInstancePrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Private endpoint which the connection belongs to. | ManagedInstancePrivateEndpointProperty |
| privateLinkServiceConnectionState | Connection State of the Private Endpoint Connection. | ManagedInstancePrivateLinkServiceConnectionStateProp... |


### ManagedInstancePrivateEndpointProperty

| Name | Description | Value |
|-|-|-|
| id | Resource id of the private endpoint. | string |


### ManagedInstancePrivateLinkServiceConnectionStateProp...

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string (required) |
| status | The private link service connection status. | string (required) |
## Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      retentionDays = int
    }
  })
}

```

### managedInstances/restorableDroppedDatabases/backupSh...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: restorableDroppedDatabases |
| properties | Resource properties. | ManagedBackupShortTermRetentionPolicyProperties |


### ManagedBackupShortTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| retentionDays | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | int |
## Microsoft.Sql/managedInstances/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/securityAlertPolicies@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### managedInstances/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | SecurityAlertsPolicyProperties |


### SecurityAlertsPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.Sql/managedInstances/serverTrustCertificates@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/serverTrustCertificates@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicBlob = "string"
    }
  })
}

```

### managedInstances/serverTrustCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ServerTrustCertificateProperties |


### ServerTrustCertificateProperties

| Name | Description | Value |
|-|-|-|
| publicBlob | The certificate public blob | string |
## Microsoft.Sql/managedInstances/sqlAgent@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/sqlAgent@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### managedInstances/sqlAgent

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | SqlAgentConfigurationProperties |


### SqlAgentConfigurationProperties

| Name | Description | Value |
|-|-|-|
| state | The state of Sql Agent. | 'Disabled''Enabled' |
## Microsoft.Sql/managedInstances/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/vulnerabilityAssessments@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

### managedInstances/vulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceVulnerabilityAssessmentProperties |


### ManagedInstanceVulnerabilityAssessmentProperties

| Name | Description | Value |
|-|-|-|
| recurringScans | The recurring scans settings | VulnerabilityAssessmentRecurringScansProperties |
| storageAccountAccessKey | Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |
| storageContainerPath | A blob storage container path to hold the scan results (e.g.https://myStorage.blob.core.windows.net/VaScans/). | string (required) |
| storageContainerSasKey | A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |


### VulnerabilityAssessmentRecurringScansProperties

| Name | Description | Value |
|-|-|-|
| emails | Specifies an array of e-mail addresses to which the scan notification is sent. | string[] |
| emailSubscriptionAdmins | Specifies that the schedule scan notification will be is sent to the subscription administrators. | bool |
| isEnabled | Recurring scans state. | bool |
## Microsoft.Sql/servers@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers@2022-05-01-preview"
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
      administratorLogin = "string"
      administratorLoginPassword = "string"
      administrators = {
        administratorType = "ActiveDirectory"
        azureADOnlyAuthentication = bool
        login = "string"
        principalType = "string"
        sid = "string"
        tenantId = "string"
      }
      federatedClientId = "string"
      keyId = "string"
      minimalTlsVersion = "string"
      primaryUserAssignedIdentityId = "string"
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = "string"
      version = "string"
    }
  })
}

```

### servers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The Azure Active Directory identity of the server. | ResourceIdentity |
| properties | Resource properties. | ServerProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The resource ids of the user assigned identities to use | object |


### ServerProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | Administrator username for the server. Once created it cannot be changed. | string |
| administratorLoginPassword | The administrator login password (required for server creation). | string |
| administrators | The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used. | ServerExternalAdministrator |
| federatedClientId | The Client id used for cross tenant CMK scenario | string |
| keyId | A CMK URI of the key to use for encryption. | string |
| minimalTlsVersion | Minimal TLS version. Allowed values: '1.0', '1.1', '1.2' | string |
| primaryUserAssignedIdentityId | The resource id of a user assigned identity to be used by default. | string |
| publicNetworkAccess | Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| restrictOutboundNetworkAccess | Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| version | The version of the server. | string |


### ServerExternalAdministrator

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' |
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool |
| login | Login name of the server administrator. | string |
| principalType | Principal Type of the sever administrator. | 'Application''Group''User' |
| sid | SID (object ID) of the server administrator. | string |
| tenantId | Tenant ID of the administrator. | string |
## Microsoft.Sql/servers/administrators@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/administrators@2022-05-01-preview"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### servers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ActiveDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | AdministratorProperties |


### AdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' (required) |
| login | Login name of the server administrator. | string (required) |
| sid | SID (object ID) of the server administrator. | string (required) |
| tenantId | Tenant ID of the administrator. | string |
## Microsoft.Sql/servers/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### servers/advancedThreatProtectionSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server. | 'Disabled''Enabled''New' (required) |
## Microsoft.Sql/servers/auditingPolicies@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/auditingPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditingState = "string"
      auditLogsTableName = "string"
      eventTypesToAudit = "string"
      fullAuditLogsTableName = "string"
      retentionDays = "string"
      storageAccountKey = "string"
      storageAccountName = "string"
      storageAccountResourceGroupName = "string"
      storageAccountSecondaryKey = "string"
      storageAccountSubscriptionId = "string"
      storageTableEndpoint = "string"
    }
  })
}

```

### servers/auditingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerTableAuditingPolicyProperties |


### ServerTableAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditingState | The state of the policy. | string |
| auditLogsTableName | The audit logs table name. | string |
| eventTypesToAudit | Comma-separated list of event types to audit. | string |
| fullAuditLogsTableName | The full audit logs table name. | string |
| retentionDays | The number of days to keep in the audit logs. | string |
| storageAccountKey | The key of the auditing storage account. | string |
| storageAccountName | The table storage account name | string |
| storageAccountResourceGroupName | The table storage account resource group name | string |
| storageAccountSecondaryKey | The secondary key of the auditing storage account. | string |
| storageAccountSubscriptionId | The table storage subscription Id. | string |
| storageTableEndpoint | The storage table endpoint. | string |
## Microsoft.Sql/servers/auditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/auditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isManagedIdentityInUse = bool
      isStorageSecondaryKeyInUse = bool
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/auditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerBlobAuditingPolicyProperties |


### ServerBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPDBCC_GROUPDATABASE_OWNERSHIP_CHANGE_GROUPDATABASE_CHANGE_GROUPLEDGER_OPERATION_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isDevopsAuditEnabled | Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as trueWhen using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isManagedIdentityInUse | Specifies whether Managed Identity is used to access blob storage | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Sql/servers/azureADOnlyAuthentications@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/azureADOnlyAuthentications@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

### servers/azureADOnlyAuthentications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | AzureADOnlyAuthProperties |


### AzureADOnlyAuthProperties

| Name | Description | Value |
|-|-|-|
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool (required) |
## Microsoft.Sql/servers/communicationLinks@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/communicationLinks@2014-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      partnerServer = "string"
    }
  })
}

```

### servers/communicationLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | The properties of resource. | ServerCommunicationLinkProperties |


### ServerCommunicationLinkProperties

| Name | Description | Value |
|-|-|-|
| partnerServer | The name of the partner server. | string (required) |
## Microsoft.Sql/servers/connectionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/connectionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionType = "string"
    }
  })
}

```

### servers/connectionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerConnectionPolicyProperties |


### ServerConnectionPolicyProperties

| Name | Description | Value |
|-|-|-|
| connectionType | The server connection type. | 'Default''Proxy''Redirect' (required) |
## Microsoft.Sql/servers/databases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      autoPauseDelay = int
      catalogCollation = "string"
      collation = "string"
      createMode = "string"
      elasticPoolId = "string"
      federatedClientId = "string"
      highAvailabilityReplicaCount = int
      isLedgerOn = bool
      licenseType = "string"
      longTermRetentionBackupResourceId = "string"
      maintenanceConfigurationId = "string"
      maxSizeBytes = int
      minCapacity = "decimal-as-string"
      preferredEnclaveType = "string"
      readScale = "string"
      recoverableDatabaseId = "string"
      recoveryServicesRecoveryPointId = "string"
      requestedBackupStorageRedundancy = "string"
      restorableDroppedDatabaseId = "string"
      restorePointInTime = "string"
      sampleName = "string"
      secondaryType = "string"
      sourceDatabaseDeletionDate = "string"
      sourceDatabaseId = "string"
      sourceResourceId = "string"
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\/?or control charactersCan't end with period or space. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The database SKU.The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use theCapabilities_ListByLocationREST API or one of the following commands:Azure CLI:az sql db list-editions -l {location} -o tableAzure PowerShell:Get-AzSqlServerServiceObjective -Location {location} | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| identity | The Azure Active Directory identity of the database. | DatabaseIdentity |
| properties | Resource properties. | DatabaseProperties |


### DatabaseIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type | 'None''UserAssigned' |
| userAssignedIdentities | The resource ids of the user assigned identities to use | object |


### DatabaseProperties

| Name | Description | Value |
|-|-|-|
| autoPauseDelay | Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled | int |
| catalogCollation | Collation of the metadata catalog. | 'DATABASE_DEFAULT''SQL_Latin1_General_CP1_CI_AS' |
| collation | The collation of the database. | string |
| createMode | Specifies the mode of database creation.Default: regular database creation.Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition. | 'Copy''Default''OnlineSecondary''PointInTimeRestore''Recovery''Restore''RestoreExternalBackup''RestoreExternalBackupSecondary''RestoreLongTermRetentionBackup''Secondary' |
| elasticPoolId | The resource identifier of the elastic pool containing this database. | string |
| federatedClientId | The Client id used for cross tenant per database CMK scenario | string |
| highAvailabilityReplicaCount | The number of secondary replicas associated with the database that are used to provide high availability. Not applicable to a Hyperscale database within an elastic pool. | int |
| isLedgerOn | Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created. | bool |
| licenseType | The license type to apply for this database.LicenseIncludedif you need a license, orBasePriceif you have a license and are eligible for the Azure Hybrid Benefit. | 'BasePrice''LicenseIncluded' |
| longTermRetentionBackupResourceId | The resource identifier of the long term retention backup associated with create operation of this database. | string |
| maintenanceConfigurationId | Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will occur. | string |
| maxSizeBytes | The max size of the database expressed in bytes. | int |
| minCapacity | Minimal capacity that database will always have allocated, if not paused To specify a decimal value, use thejson()function. | int or json decimal |
| preferredEnclaveType | Type of enclave requested on the database i.e. Default or VBS enclaves. | 'Default''VBS' |
| readScale | The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. Not applicable to a Hyperscale database within an elastic pool. | 'Disabled''Enabled' |
| recoverableDatabaseId | The resource identifier of the recoverable database associated with create operation of this database. | string |
| recoveryServicesRecoveryPointId | The resource identifier of the recovery point associated with create operation of this database. | string |
| requestedBackupStorageRedundancy | The storage account type to be used to store backups for this database. | 'Geo''GeoZone''Local''Zone' |
| restorableDroppedDatabaseId | The resource identifier of the restorable dropped database associated with create operation of this database. | string |
| restorePointInTime | Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | string |
| sampleName | The name of the sample schema to apply when creating this database. | 'AdventureWorksLT''WideWorldImportersFull''WideWorldImportersStd' |
| secondaryType | The secondary type of the database if it is a secondary.  Valid values are Geo, Named and Standby. | 'Geo''Named''Standby' |
| sourceDatabaseDeletionDate | Specifies the time that the database was deleted. | string |
| sourceDatabaseId | The resource identifier of the source database associated with create operation of this database. | string |
| sourceResourceId | The resource identifier of the source associated with the create operation of this database.This property is only supported for DataWarehouse edition and allows to restore across subscriptions.When sourceResourceId is specified, sourceDatabaseId, recoverableDatabaseId, restorableDroppedDatabaseId and sourceDatabaseDeletionDate must not be specified and CreateMode must be PointInTimeRestore, Restore or Recover.When createMode is PointInTimeRestore, sourceResourceId must be the resource ID of the existing database or existing sql pool, and restorePointInTime must be specified.When createMode is Restore, sourceResourceId must be the resource ID of restorable dropped database or restorable dropped sql pool.When createMode is Recover, sourceResourceId must be the resource ID of recoverable database or recoverable sql pool.When source subscription belongs to a different tenant than target subscription, âx-ms-authorization-auxiliaryâ header must contain authentication token for the source tenant. For more details about âx-ms-authorization-auxiliaryâ header see /azure/azure-resource-manager/management/authenticate-multi-tenant | string |
| zoneRedundant | Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. | bool |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
## Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### servers/databases/advancedThreatProtectionSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server. | 'Disabled''Enabled''New' (required) |
## Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditingState = "string"
      auditLogsTableName = "string"
      eventTypesToAudit = "string"
      fullAuditLogsTableName = "string"
      retentionDays = "string"
      storageAccountKey = "string"
      storageAccountName = "string"
      storageAccountResourceGroupName = "string"
      storageAccountSecondaryKey = "string"
      storageAccountSubscriptionId = "string"
      storageTableEndpoint = "string"
      useServerDefault = "string"
    }
  })
}

```

### servers/databases/auditingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseTableAuditingPolicyProperties |


### DatabaseTableAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditingState | The state of the policy. | string |
| auditLogsTableName | The audit logs table name. | string |
| eventTypesToAudit | Comma-separated list of event types to audit. | string |
| fullAuditLogsTableName | The full audit logs table name. | string |
| retentionDays | The number of days to keep in the audit logs. | string |
| storageAccountKey | The key of the auditing storage account. | string |
| storageAccountName | The table storage account name | string |
| storageAccountResourceGroupName | The table storage account resource group name | string |
| storageAccountSecondaryKey | The secondary key of the auditing storage account. | string |
| storageAccountSubscriptionId | The table storage subscription Id. | string |
| storageTableEndpoint | The storage table endpoint. | string |
| useServerDefault | Whether server default is enabled or disabled. | string |
## Microsoft.Sql/servers/databases/auditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/auditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
      isStorageSecondaryKeyInUse = bool
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/databases/auditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseBlobAuditingPolicyProperties |


### DatabaseBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPDBCC_GROUPDATABASE_OWNERSHIP_CHANGE_GROUPDATABASE_CHANGE_GROUPLEDGER_OPERATION_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isManagedIdentityInUse | Specifies whether Managed Identity is used to access blob storage | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      monthlyRetention = "string"
      weeklyRetention = "string"
      weekOfYear = int
      yearlyRetention = "string"
    }
  })
}

```

### servers/databases/backupLongTermRetentionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | BaseLongTermRetentionPolicyProperties |


### BaseLongTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| monthlyRetention | The monthly retention policy for an LTR backup in an ISO 8601 format. | string |
| weeklyRetention | The weekly retention policy for an LTR backup in an ISO 8601 format. | string |
| weekOfYear | The week of year to take the yearly backup in an ISO 8601 format. | int |
| yearlyRetention | The yearly retention policy for an LTR backup in an ISO 8601 format. | string |
## Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      diffBackupIntervalInHours = int
      retentionDays = int
    }
  })
}

```

### servers/databases/backupShortTermRetentionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | BackupShortTermRetentionPolicyProperties |


### BackupShortTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| diffBackupIntervalInHours | The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases. | int |
| retentionDays | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | int |
## Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      proxyDnsName = "string"
      proxyPort = "string"
      redirectionState = "string"
      securityEnabledAccess = "string"
      state = "string"
      useServerDefault = "string"
      visibility = "string"
    }
  })
}

```

### servers/databases/connectionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseConnectionPolicyProperties |


### DatabaseConnectionPolicyProperties

| Name | Description | Value |
|-|-|-|
| proxyDnsName | The fully qualified host name of the auditing proxy. | string |
| proxyPort | The port number of the auditing proxy. | string |
| redirectionState | The state of proxy redirection. | string |
| securityEnabledAccess | The state of security access. | string |
| state | The connection policy state. | string |
| useServerDefault | Whether server default is enabled or disabled. | string |
| visibility | The visibility of the auditing proxy. | string |
## Microsoft.Sql/servers/databases/dataMaskingPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/dataMaskingPolicies@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataMaskingState = "string"
      exemptPrincipals = "string"
    }
  })
}

```

### servers/databases/dataMaskingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DataMaskingPolicyProperties |


### DataMaskingPolicyProperties

| Name | Description | Value |
|-|-|-|
| dataMaskingState | The state of the data masking policy. | 'Disabled''Enabled' (required) |
| exemptPrincipals | The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. | string |
## Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliasName = "string"
      columnName = "string"
      maskingFunction = "string"
      numberFrom = "string"
      numberTo = "string"
      prefixSize = "string"
      replacementString = "string"
      ruleState = "string"
      schemaName = "string"
      suffixSize = "string"
      tableName = "string"
    }
  })
}

```

### servers/databases/dataMaskingPolicies/rules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataMaskingPolicies |
| properties | Resource properties. | DataMaskingRuleProperties |


### DataMaskingRuleProperties

| Name | Description | Value |
|-|-|-|
| aliasName | The alias name. This is a legacy parameter and is no longer used. | string |
| columnName | The column name on which the data masking rule is applied. | string (required) |
| maskingFunction | The masking function that is used for the data masking rule. | 'CCN''Default''Email''Number''SSN''Text' (required) |
| numberFrom | The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | string |
| numberTo | The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | string |
| prefixSize | If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. | string |
| replacementString | If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. | string |
| ruleState | The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. | 'Disabled''Enabled' |
| schemaName | The schema name on which the data masking rule is applied. | string (required) |
| suffixSize | If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. | string |
| tableName | The table name on which the data masking rule is applied. | string (required) |
## Microsoft.Sql/servers/databases/extendedAuditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/extendedAuditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
      isStorageSecondaryKeyInUse = bool
      predicateExpression = "string"
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/databases/extendedAuditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | ExtendedDatabaseBlobAuditingPolicyProperties |


### ExtendedDatabaseBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPDBCC_GROUPDATABASE_OWNERSHIP_CHANGE_GROUPDATABASE_CHANGE_GROUPLEDGER_OPERATION_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isManagedIdentityInUse | Specifies whether Managed Identity is used to access blob storage | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| predicateExpression | Specifies condition of where clause when creating an audit. | string |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Sql/servers/databases/extensions@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/extensions@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      authenticationType = "string"
      databaseEdition = "string"
      maxSizeBytes = "string"
      networkIsolation = {
        sqlServerResourceId = "string"
        storageAccountResourceId = "string"
      }
      operationMode = "string"
      serviceObjectiveName = "string"
      storageKey = "string"
      storageKeyType = "string"
      storageUri = "string"
    }
  })
}

```

### servers/databases/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseExtensionsProperties |


### DatabaseExtensionsProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | Administrator login name. | string |
| administratorLoginPassword | Administrator login password. | string |
| authenticationType | Authentication type: SQL authentication or AD password. | string |
| databaseEdition | Database edition for the newly created database in the case of an import operation. | string |
| maxSizeBytes | Database max size in bytes for the newly created database in the case of an import operation. | string |
| networkIsolation | Optional resource information to enable network isolation for request. | NetworkIsolationSettings |
| operationMode | Operation mode of the operation: Import, Export, or PolybaseImport. | 'Export''Import''PolybaseImport' (required) |
| serviceObjectiveName | Database service level objective for the newly created database in the case of an import operation. | string |
| storageKey | Storage key for the storage account. | string (required) |
| storageKeyType | Storage key type: StorageAccessKey or SharedAccessKey. | 'SharedAccessKey''StorageAccessKey' (required) |
| storageUri | Storage Uri for the storage account. | string (required) |


### NetworkIsolationSettings

| Name | Description | Value |
|-|-|-|
| sqlServerResourceId | The resource id for the SQL server which is the target of this request. If set, private endpoint connection will be created for the SQL server. Must match server which is target of the operation. | string |
| storageAccountResourceId | The resource id for the storage account used to store BACPAC file. If set, private endpoint connection will be created for the storage account. Must match storage account used for StorageUri parameter. | string |
## Microsoft.Sql/servers/databases/geoBackupPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/geoBackupPolicies@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### servers/databases/geoBackupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | GeoBackupPolicyProperties |


### GeoBackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| state | The state of the geo backup policy. | 'Disabled''Enabled' (required) |
## Microsoft.Sql/servers/databases/ledgerDigestUploads@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/ledgerDigestUploads@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      digestStorageEndpoint = "string"
    }
  })
}

```

### servers/databases/ledgerDigestUploads

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | LedgerDigestUploadsProperties |


### LedgerDigestUploadsProperties

| Name | Description | Value |
|-|-|-|
| digestStorageEndpoint | The digest storage endpoint, which must be either an Azure blob storage endpoint or an URI for Azure Confidential Ledger. | string |
## Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationType = "string"
      informationTypeId = "string"
      labelId = "string"
      labelName = "string"
      rank = "string"
    }
  })
}

```

### servers/databases/schemas/tables/columns/sensitivity...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: columns |
| properties | Resource properties. | SensitivityLabelProperties |


### SensitivityLabelProperties

| Name | Description | Value |
|-|-|-|
| informationType | The information type. | string |
| informationTypeId | The information type ID. | string |
| labelId | The label ID. | string |
| labelName | The label name. | string |
| rank |  | 'Critical''High''Low''Medium''None' |
## Microsoft.Sql/servers/databases/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/securityAlertPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/databases/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | SecurityAlertsPolicyProperties |


### SecurityAlertsPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      latestScan = bool
      results = {}
    }
  })
}

```

### servers/databases/sqlVulnerabilityAssessments/baseli...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlVulnerabilityAssessments |
| properties | Resource properties. | DatabaseSqlVulnerabilityAssessmentRuleBaselineListIn... |


### DatabaseSqlVulnerabilityAssessmentRuleBaselineListIn...

| Name | Description | Value |
|-|-|-|
| latestScan | The latest scan flag | bool (required) |
| results | The rule baseline result list | object (required) |
## Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines/rules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines/rules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      latestScan = bool
      results = [
        [
          "string"
        ]
      ]
    }
  })
}

```

### servers/databases/sqlVulnerabilityAssessments/baseli...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:baselines |
| properties | Resource properties. | DatabaseSqlVulnerabilityAssessmentRuleBaselineInputP... |


### DatabaseSqlVulnerabilityAssessmentRuleBaselineInputP...

| Name | Description | Value |
|-|-|-|
| latestScan | The latest scan flag | bool (required) |
| results | The rule baseline result | string[][] (required) |
## Microsoft.Sql/servers/databases/syncGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/syncGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conflictLoggingRetentionInDays = int
      conflictResolutionPolicy = "string"
      enableConflictLogging = bool
      hubDatabasePassword = "string"
      hubDatabaseUserName = "string"
      interval = int
      schema = {
        masterSyncMemberName = "string"
        tables = [
          {
            columns = [
              {
                dataSize = "string"
                dataType = "string"
                quotedName = "string"
              }
            ]
            quotedName = "string"
          }
        ]
      }
      syncDatabaseId = "string"
      usePrivateLinkConnection = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers/databases/syncGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-150Valid characters:Alphanumerics, hyphens, and underscores. |
| sku | The name and capacity of the SKU. | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | SyncGroupProperties |


### SyncGroupProperties

| Name | Description | Value |
|-|-|-|
| conflictLoggingRetentionInDays | Conflict logging retention period. | int |
| conflictResolutionPolicy | Conflict resolution policy of the sync group. | 'HubWin''MemberWin' |
| enableConflictLogging | If conflict logging is enabled. | bool |
| hubDatabasePassword | Password for the sync group hub database credential. | string |
| hubDatabaseUserName | User name for the sync group hub database credential. | string |
| interval | Sync interval of the sync group. | int |
| schema | Sync schema of the sync group. | SyncGroupSchema |
| syncDatabaseId | ARM resource id of the sync database in the sync group. | string |
| usePrivateLinkConnection | If use private link connection is enabled. | bool |


### SyncGroupSchema

| Name | Description | Value |
|-|-|-|
| masterSyncMemberName | Name of master sync member where the schema is from. | string |
| tables | List of tables in sync group schema. | SyncGroupSchemaTable[] |


### SyncGroupSchemaTable

| Name | Description | Value |
|-|-|-|
| columns | List of columns in sync group schema. | SyncGroupSchemaTableColumn[] |
| quotedName | Quoted name of sync group schema table. | string |


### SyncGroupSchemaTableColumn

| Name | Description | Value |
|-|-|-|
| dataSize | Data size of the column. | string |
| dataType | Data type of the column. | string |
| quotedName | Quoted name of sync group table column. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
## Microsoft.Sql/servers/databases/syncGroups/syncMembers@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/syncGroups/syncMembers@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      databaseName = "string"
      databaseType = "string"
      password = "string"
      serverName = "string"
      sqlServerDatabaseId = "string"
      syncAgentId = "string"
      syncDirection = "string"
      syncMemberAzureDatabaseResourceId = "string"
      usePrivateLinkConnection = bool
      userName = "string"
    }
  })
}

```

### servers/databases/syncGroups/syncMembers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:syncGroups |
| properties | Resource properties. | SyncMemberProperties |


### SyncMemberProperties

| Name | Description | Value |
|-|-|-|
| databaseName | Database name of the member database in the sync member. | string |
| databaseType | Database type of the sync member. | 'AzureSqlDatabase''SqlServerDatabase' |
| password | Password of the member database in the sync member. | string |
| serverName | Server name of the member database in the sync member | string |
| sqlServerDatabaseId | SQL Server database id of the sync member. | string |
| syncAgentId | ARM resource id of the sync agent in the sync member. | string |
| syncDirection | Sync direction of the sync member. | 'Bidirectional''OneWayHubToMember''OneWayMemberToHub' |
| syncMemberAzureDatabaseResourceId | ARM resource id of the sync member logical database, for sync members in Azure. | string |
| usePrivateLinkConnection | Whether to use private link connection. | bool |
| userName | User name of the member database in the sync member. | string |
## Microsoft.Sql/servers/databases/transparentDataEncryption@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/transparentDataEncryption@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### servers/databases/transparentDataEncryption

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | TransparentDataEncryptionProperties |


### TransparentDataEncryptionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the transparent data encryption. | 'Disabled''Enabled' (required) |
## Microsoft.Sql/servers/databases/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/vulnerabilityAssessments@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

### servers/databases/vulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseVulnerabilityAssessmentProperties |


### DatabaseVulnerabilityAssessmentProperties

| Name | Description | Value |
|-|-|-|
| recurringScans | The recurring scans settings | VulnerabilityAssessmentRecurringScansProperties |
| storageAccountAccessKey | Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |
| storageContainerPath | A blob storage container path to hold the scan results (e.g.https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set | string |
| storageContainerSasKey | A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |


### VulnerabilityAssessmentRecurringScansProperties

| Name | Description | Value |
|-|-|-|
| emails | Specifies an array of e-mail addresses to which the scan notification is sent. | string[] |
| emailSubscriptionAdmins | Specifies that the schedule scan notification will be is sent to the subscription administrators. | bool |
| isEnabled | Recurring scans state. | bool |
## Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      baselineResults = [
        {
          result = [
            "string"
          ]
        }
      ]
    }
  })
}

```

### servers/databases/vulnerabilityAssessments/rules/bas...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: rules |
| properties | Resource properties. | DatabaseVulnerabilityAssessmentRuleBaselinePropertie... |


### DatabaseVulnerabilityAssessmentRuleBaselinePropertie...

| Name | Description | Value |
|-|-|-|
| baselineResults | The rule baseline result | DatabaseVulnerabilityAssessmentRuleBaselineItem[] (required) |


### DatabaseVulnerabilityAssessmentRuleBaselineItem

| Name | Description | Value |
|-|-|-|
| result | The rule baseline result | string[] (required) |
## Microsoft.Sql/servers/databases/workloadGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/workloadGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      importance = "string"
      maxResourcePercent = int
      maxResourcePercentPerRequest = int
      minResourcePercent = int
      minResourcePercentPerRequest = int
      queryExecutionTimeout = int
    }
  })
}

```

### servers/databases/workloadGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | WorkloadGroupProperties |


### WorkloadGroupProperties

| Name | Description | Value |
|-|-|-|
| importance | The workload group importance level. | string |
| maxResourcePercent | The workload group cap percentage resource. | int (required) |
| maxResourcePercentPerRequest | The workload group request maximum grant percentage. | int |
| minResourcePercent | The workload group minimum percentage resource. | int (required) |
| minResourcePercentPerRequest | The workload group request minimum grant percentage. | int (required) |
| queryExecutionTimeout | The workload group query execution timeout. | int |
## Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      context = "string"
      endTime = "string"
      importance = "string"
      label = "string"
      memberName = "string"
      startTime = "string"
    }
  })
}

```

### servers/databases/workloadGroups/workloadClassifiers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workloadGroups |
| properties | Resource properties. | WorkloadClassifierProperties |


### WorkloadClassifierProperties

| Name | Description | Value |
|-|-|-|
| context | The workload classifier context. | string |
| endTime | The workload classifier end time for classification. | string |
| importance | The workload classifier importance. | string |
| label | The workload classifier label. | string |
| memberName | The workload classifier member name. | string (required) |
| startTime | The workload classifier start time for classification. | string |
## Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/devOpsAuditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerDevOpsAuditSettingsProperties |


### ServerDevOpsAuditSettingsProperties

| Name | Description | Value |
|-|-|-|
| isAzureMonitorTargetEnabled | Specifies whether DevOps audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure DevOps audit, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should be also created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isManagedIdentityInUse | Specifies whether Managed Identity is used to access blob storage | bool |
| state | Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01"
  name = "string"
  parent_id = "string"
}

```

### servers/disasterRecoveryConfiguration

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
## Microsoft.Sql/servers/dnsAliases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/dnsAliases@2022-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### servers/dnsAliases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
## Microsoft.Sql/servers/elasticPools@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/elasticPools@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      highAvailabilityReplicaCount = int
      licenseType = "string"
      maintenanceConfigurationId = "string"
      maxSizeBytes = int
      minCapacity = int
      perDatabaseSettings = {
        maxCapacity = int
        minCapacity = int
      }
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers/elasticPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\/?or control charactersCan't end with period or space. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The elastic pool SKU.The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use theCapabilities_ListByLocationREST API or the following command:Azure CLI:az sql elastic-pool list-editions -l {location} -o table | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ElasticPoolProperties |


### ElasticPoolProperties

| Name | Description | Value |
|-|-|-|
| highAvailabilityReplicaCount | The number of secondary replicas associated with the elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools. | int |
| licenseType | The license type to apply for this elastic pool. | 'BasePrice''LicenseIncluded' |
| maintenanceConfigurationId | Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur. | string |
| maxSizeBytes | The storage limit for the database elastic pool in bytes. | int |
| minCapacity | Minimal capacity that serverless pool will not shrink below, if not paused | int |
| perDatabaseSettings | The per database settings for the elastic pool. | ElasticPoolPerDatabaseSettings |
| zoneRedundant | Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. | bool |


### ElasticPoolPerDatabaseSettings

| Name | Description | Value |
|-|-|-|
| maxCapacity | The maximum capacity any one database can consume. | int |
| minCapacity | The minimum capacity all databases are guaranteed. | int |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
## Microsoft.Sql/servers/encryptionProtector@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/encryptionProtector@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRotationEnabled = bool
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

### servers/encryptionProtector

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | EncryptionProtectorProperties |


### EncryptionProtectorProperties

| Name | Description | Value |
|-|-|-|
| autoRotationEnabled | Key auto rotation opt-in flag. Either true or false. | bool |
| serverKeyName | The name of the server key. | string |
| serverKeyType | The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |
## Microsoft.Sql/servers/extendedAuditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/extendedAuditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isManagedIdentityInUse = bool
      isStorageSecondaryKeyInUse = bool
      predicateExpression = "string"
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/extendedAuditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ExtendedServerBlobAuditingPolicyProperties |


### ExtendedServerBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPDBCC_GROUPDATABASE_OWNERSHIP_CHANGE_GROUPDATABASE_CHANGE_GROUPLEDGER_OPERATION_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isDevopsAuditEnabled | Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as trueWhen using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isManagedIdentityInUse | Specifies whether Managed Identity is used to access blob storage | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| predicateExpression | Specifies condition of where clause when creating an audit. | string |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Sql/servers/failoverGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/failoverGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      databases = [
        "string"
      ]
      partnerServers = [
        {
          id = "string"
        }
      ]
      readWriteEndpoint = {
        failoverPolicy = "string"
        failoverWithDataLossGracePeriodMinutes = int
      }
    }
  })
}

```

### servers/failoverGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen.Resource name must be unique across Azure. |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | FailoverGroupProperties |


### FailoverGroupProperties

| Name | Description | Value |
|-|-|-|
| databases | List of databases in the failover group. | string[] |
| partnerServers | List of partner server information for the failover group. | PartnerInfo[] (required) |
| readWriteEndpoint | Read-write endpoint of the failover group instance. | FailoverGroupReadWriteEndpoint(required) |


### PartnerInfo

| Name | Description | Value |
|-|-|-|
| id | Resource identifier of the partner server. | string (required) |


### FailoverGroupReadWriteEndpoint

| Name | Description | Value |
|-|-|-|
| failoverPolicy | Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | 'Automatic''Manual' (required) |
| failoverWithDataLossGracePeriodMinutes | Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | int |
## Microsoft.Sql/servers/firewallRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/firewallRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

### servers/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:;\/?or control charactersCan't end with period. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerFirewallRuleProperties |


### ServerFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses. | string |
| startIpAddress | The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses. | string |
## Microsoft.Sql/servers/ipv6FirewallRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/ipv6FirewallRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIPv6Address = "string"
      startIPv6Address = "string"
    }
  })
}

```

### servers/ipv6FirewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | IPv6ServerFirewallRuleProperties |


### IPv6ServerFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIPv6Address | The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpAddress. | string |
| startIPv6Address | The start IP address of the firewall rule. Must be IPv6 format. | string |
## Microsoft.Sql/servers/jobAgents@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      databaseId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers/jobAgents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The name and tier of the SKU. | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | JobAgentProperties |


### JobAgentProperties

| Name | Description | Value |
|-|-|-|
| databaseId | Resource ID of the database to store job metadata in. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
## Microsoft.Sql/servers/jobAgents/credentials@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/credentials@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = "string"
      username = "string"
    }
  })
}

```

### servers/jobAgents/credentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobAgents |
| properties | Resource properties. | JobCredentialProperties |


### JobCredentialProperties

| Name | Description | Value |
|-|-|-|
| password | The credential password. | string (required) |
| username | The credential user name. | string (required) |
## Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      schedule = {
        enabled = bool
        endTime = "string"
        interval = "string"
        startTime = "string"
        type = "string"
      }
    }
  })
}

```

### servers/jobAgents/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobAgents |
| properties | Resource properties. | JobProperties |


### JobProperties

| Name | Description | Value |
|-|-|-|
| description | User-defined description of the job. | string |
| schedule | Schedule properties of the job. | JobSchedule |


### JobSchedule

| Name | Description | Value |
|-|-|-|
| enabled | Whether or not the schedule is enabled. | bool |
| endTime | Schedule end time. | string |
| interval | Value of the schedule's recurring interval, if the ScheduleType is recurring. ISO8601 duration format. | string |
| startTime | Schedule start time. | string |
| type | Schedule interval type | 'Once''Recurring' |
## Microsoft.Sql/servers/jobAgents/jobs/executions@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs/executions@2022-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### servers/jobAgents/jobs/executions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobs |
## Microsoft.Sql/servers/jobAgents/jobs/steps@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs/steps@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        source = "Inline"
        type = "TSql"
        value = "string"
      }
      credential = "string"
      executionOptions = {
        initialRetryIntervalSeconds = int
        maximumRetryIntervalSeconds = int
        retryAttempts = int
        retryIntervalBackoffMultiplier = int
        timeoutSeconds = int
      }
      output = {
        credential = "string"
        databaseName = "string"
        resourceGroupName = "string"
        schemaName = "string"
        serverName = "string"
        subscriptionId = "string"
        tableName = "string"
        type = "SqlDatabase"
      }
      stepId = int
      targetGroup = "string"
    }
  })
}

```

### servers/jobAgents/jobs/steps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobs |
| properties | Resource properties. | JobStepProperties |


### JobStepProperties

| Name | Description | Value |
|-|-|-|
| action | The action payload of the job step. | JobStepAction(required) |
| credential | The resource ID of the job credential that will be used to connect to the targets. | string (required) |
| executionOptions | Execution options for the job step. | JobStepExecutionOptions |
| output | Output destination properties of the job step. | JobStepOutput |
| stepId | The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified. | int |
| targetGroup | The resource ID of the target group that the job step will be executed on. | string (required) |


### JobStepAction

| Name | Description | Value |
|-|-|-|
| source | The source of the action to execute. | 'Inline' |
| type | Type of action being executed by the job step. | 'TSql' |
| value | The action value, for example the text of the T-SQL script to execute. | string (required) |


### JobStepExecutionOptions

| Name | Description | Value |
|-|-|-|
| initialRetryIntervalSeconds | Initial delay between retries for job step execution. | int |
| maximumRetryIntervalSeconds | The maximum amount of time to wait between retries for job step execution. | int |
| retryAttempts | Maximum number of times the job step will be reattempted if the first attempt fails. | int |
| retryIntervalBackoffMultiplier | The backoff multiplier for the time between retries. | int |
| timeoutSeconds | Execution timeout for the job step. | int |


### JobStepOutput

| Name | Description | Value |
|-|-|-|
| credential | The resource ID of the credential to use to connect to the output destination. | string (required) |
| databaseName | The output destination database. | string (required) |
| resourceGroupName | The output destination resource group. | string |
| schemaName | The output destination schema. | string |
| serverName | The output destination server name. | string (required) |
| subscriptionId | The output destination subscription id. | string |
| tableName | The output destination table. | string (required) |
| type | The output destination type. | 'SqlDatabase' |
## Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      members = [
        {
          databaseName = "string"
          elasticPoolName = "string"
          membershipType = "string"
          refreshCredential = "string"
          serverName = "string"
          shardMapName = "string"
          type = "string"
        }
      ]
    }
  })
}

```

### servers/jobAgents/targetGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobAgents |
| properties | Resource properties. | JobTargetGroupProperties |


### JobTargetGroupProperties

| Name | Description | Value |
|-|-|-|
| members | Members of the target group. | JobTarget[] (required) |


### JobTarget

| Name | Description | Value |
|-|-|-|
| databaseName | The target database name. | string |
| elasticPoolName | The target elastic pool name. | string |
| membershipType | Whether the target is included or excluded from the group. | 'Exclude''Include' |
| refreshCredential | The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target. | string |
| serverName | The target server name. | string |
| shardMapName | The target shard map. | string |
| type | The target type. | 'SqlDatabase''SqlElasticPool''SqlServer''SqlShardMap''TargetGroup' (required) |
## Microsoft.Sql/servers/keys@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/keys@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "string"
      uri = "string"
    }
  })
}

```

### servers/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Valid characters:Must be in format:VaultName_KeyName_KeyVersion. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerKeyProperties |


### ServerKeyProperties

| Name | Description | Value |
|-|-|-|
| serverKeyType | The server key type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |
| uri | The URI of the server key. If the ServerKeyType is AzureKeyVault, then the URI is required. The AKV URI is required to be in this format: 'https://YourVaultName.vault.azure.net/keys/YourKeyName/YourKeyVersion' | string |
## Microsoft.Sql/servers/outboundFirewallRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/outboundFirewallRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### servers/outboundFirewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
## Microsoft.Sql/servers/privateEndpointConnections@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/privateEndpointConnections@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### servers/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Private endpoint which the connection belongs to. | PrivateEndpointProperty |
| privateLinkServiceConnectionState | Connection state of the private endpoint connection. | PrivateLinkServiceConnectionStateProperty |


### PrivateEndpointProperty

| Name | Description | Value |
|-|-|-|
| id | Resource id of the private endpoint. | string |


### PrivateLinkServiceConnectionStateProperty

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string (required) |
| status | The private link service connection status. | 'Approved''Disconnected''Pending''Rejected' (required) |
## Microsoft.Sql/servers/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/securityAlertPolicies@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | SecurityAlertsPolicyProperties |


### SecurityAlertsPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.Sql/servers/sqlVulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/sqlVulnerabilityAssessments@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### servers/sqlVulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | SqlVulnerabilityAssessmentPolicyProperties |


### SqlVulnerabilityAssessmentPolicyProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the SQL Vulnerability Assessment, whether it is enabled or disabled or a state has not been applied yet on the specific database or server. | 'Disabled''Enabled' |
## Microsoft.Sql/servers/syncAgents@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/syncAgents@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      syncDatabaseId = "string"
    }
  })
}

```

### servers/syncAgents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | SyncAgentProperties |


### SyncAgentProperties

| Name | Description | Value |
|-|-|-|
| syncDatabaseId | ARM resource id of the sync database in the sync agent. | string |
## Microsoft.Sql/servers/virtualNetworkRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/virtualNetworkRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      ignoreMissingVnetServiceEndpoint = bool
      virtualNetworkSubnetId = "string"
    }
  })
}

```

### servers/virtualNetworkRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | VirtualNetworkRuleProperties |


### VirtualNetworkRuleProperties

| Name | Description | Value |
|-|-|-|
| ignoreMissingVnetServiceEndpoint | Create firewall rule before the virtual network has vnet service endpoint enabled. | bool |
| virtualNetworkSubnetId | The ARM resource id of the virtual network subnet. | string (required) |
## Microsoft.Sql/servers/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/vulnerabilityAssessments@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

### servers/vulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerVulnerabilityAssessmentProperties |


### ServerVulnerabilityAssessmentProperties

| Name | Description | Value |
|-|-|-|
| recurringScans | The recurring scans settings | VulnerabilityAssessmentRecurringScansProperties |
| storageAccountAccessKey | Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |
| storageContainerPath | A blob storage container path to hold the scan results (e.g.https://myStorage.blob.core.windows.net/VaScans/). | string (required) |
| storageContainerSasKey | A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. Applies only if the storage account is not behind a Vnet or a firewall | string |


### VulnerabilityAssessmentRecurringScansProperties

| Name | Description | Value |
|-|-|-|
| emails | Specifies an array of e-mail addresses to which the scan notification is sent. | string[] |
| emailSubscriptionAdmins | Specifies that the schedule scan notification will be is sent to the subscription administrators. | bool |
| isEnabled | Recurring scans state. | bool |
