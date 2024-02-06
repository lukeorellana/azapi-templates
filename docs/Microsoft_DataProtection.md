## Microsoft.DataProtection/backupVaults@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults@2022-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      monitoringSettings = {
        azureMonitorAlertSettings = {
          alertsForAllJobFailures = "string"
        }
      }
      securitySettings = {
        immutabilitySettings = {
          state = "string"
        }
        softDeleteSettings = {
          retentionDurationInDays = int
          state = "string"
        }
      }
      storageSettings = [
        {
          datastoreType = "string"
          type = "string"
        }
      ]
    }
    eTag = "string"
  })
}

```

### backupVaults

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| eTag | Optional ETag. | string |
| identity | Input Managed Identity Details | DppIdentityDetails |
| properties | BackupVaultResource properties | BackupVault(required) |


### DppIdentityDetails

| Name | Description | Value |
|-|-|-|
| type | The identityType which can be either SystemAssigned or None | string |


### BackupVault

| Name | Description | Value |
|-|-|-|
| monitoringSettings | Monitoring Settings | MonitoringSettings |
| securitySettings | Security Settings | SecuritySettings |
| storageSettings | Storage Settings | StorageSetting[] (required) |


### MonitoringSettings

| Name | Description | Value |
|-|-|-|
| azureMonitorAlertSettings | Settings for Azure Monitor based alerts | AzureMonitorAlertSettings |


### AzureMonitorAlertSettings

| Name | Description | Value |
|-|-|-|
| alertsForAllJobFailures |  | 'Disabled''Enabled' |


### SecuritySettings

| Name | Description | Value |
|-|-|-|
| immutabilitySettings | Immutability Settings at vault level | ImmutabilitySettings |
| softDeleteSettings | Soft delete related settings | SoftDeleteSettings |


### ImmutabilitySettings

| Name | Description | Value |
|-|-|-|
| state | Immutability state | 'Disabled''Locked''Unlocked' |


### SoftDeleteSettings

| Name | Description | Value |
|-|-|-|
| retentionDurationInDays | Soft delete retention duration | int |
| state | State of soft delete | 'AlwaysOn''Off''On' |


### StorageSetting

| Name | Description | Value |
|-|-|-|
| datastoreType | Gets or sets the type of the datastore. | 'ArchiveStore''SnapshotStore''VaultStore' |
| type | Gets or sets the type. | 'GeoRedundant''LocallyRedundant''ZoneRedundant' |
## Microsoft.DataProtection/backupVaults/backupInstances@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupInstances@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      datasourceAuthCredentials = {
        objectType = "string"
        // For remaining properties, see AuthCredentials objects
      }
      dataSourceInfo = {
        datasourceType = "string"
        objectType = "string"
        resourceID = "string"
        resourceLocation = "string"
        resourceName = "string"
        resourceType = "string"
        resourceUri = "string"
      }
      dataSourceSetInfo = {
        datasourceType = "string"
        objectType = "string"
        resourceID = "string"
        resourceLocation = "string"
        resourceName = "string"
        resourceType = "string"
        resourceUri = "string"
      }
      friendlyName = "string"
      objectType = "string"
      policyInfo = {
        policyId = "string"
        policyParameters = {
          backupDatasourceParametersList = [
            {
              objectType = "string"
              // For remaining properties, see BackupDatasourceParameters objects
            }
          ]
          dataStoreParametersList = [
            {
              dataStoreType = "string"
              objectType = "string"
              // For remaining properties, see DataStoreParameters objects
            }
          ]
        }
      }
      validationType = "string"
    }
  })
}

```

### backupVaults/backupInstances

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Proxy Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupVaults |
| properties | BackupInstanceResource properties | BackupInstance |


### BackupInstance

| Name | Description | Value |
|-|-|-|
| datasourceAuthCredentials | Credentials to use to authenticate with data source provider. | AuthCredentials |
| dataSourceInfo | Gets or sets the data source information. | Datasource(required) |
| dataSourceSetInfo | Gets or sets the data source set information. | DatasourceSet |
| friendlyName | Gets or sets the Backup Instance friendly name. | string |
| objectType |  | string (required) |
| policyInfo | Gets or sets the policy information. | PolicyInfo(required) |
| validationType | Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again. | 'DeepValidation''ShallowValidation' |


### AuthCredentials

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | SecretStoreBasedAuthCredentials(required) |


### SecretStoreBasedAuthCredentials

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'SecretStoreBasedAuthCredentials' (required) |
| secretStoreResource | Secret store resource | SecretStoreResource |


### SecretStoreResource

| Name | Description | Value |
|-|-|-|
| secretStoreType | Gets or sets the type of secret store | 'AzureKeyVault''Invalid' (required) |
| uri | Uri to get to the resource | string |
| value | Gets or sets value stored in secret store resource | string |


### Datasource

| Name | Description | Value |
|-|-|-|
| datasourceType | DatasourceType of the resource. | string |
| objectType | Type of Datasource object, used to initialize the right inherited type | string |
| resourceID | Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault. | string (required) |
| resourceLocation | Location of datasource. | string |
| resourceName | Unique identifier of the resource in the context of parent. | string |
| resourceType | Resource Type of Datasource. | string |
| resourceUri | Uri of the resource. | string |


### DatasourceSet

| Name | Description | Value |
|-|-|-|
| datasourceType | DatasourceType of the resource. | string |
| objectType | Type of Datasource object, used to initialize the right inherited type | string |
| resourceID | Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault. | string (required) |
| resourceLocation | Location of datasource. | string |
| resourceName | Unique identifier of the resource in the context of parent. | string |
| resourceType | Resource Type of Datasource. | string |
| resourceUri | Uri of the resource. | string |


### PolicyInfo

| Name | Description | Value |
|-|-|-|
| policyId |  | string (required) |
| policyParameters | Policy parameters for the backup instance | PolicyParameters |


### PolicyParameters

| Name | Description | Value |
|-|-|-|
| backupDatasourceParametersList | Gets or sets the Backup Data Source Parameters | BackupDatasourceParameters[] |
| dataStoreParametersList | Gets or sets the DataStore Parameters | DataStoreParameters[] |


### BackupDatasourceParameters

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | BlobBackupDatasourceParametersKubernetesClusterBackupDatasourceParameters(required) |


### BlobBackupDatasourceParameters

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'BlobBackupDatasourceParameters' (required) |
| containersList | List of containers to be backed up during configuration of backup of blobs | string[] (required) |


### KubernetesClusterBackupDatasourceParameters

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'KubernetesClusterBackupDatasourceParameters' (required) |
| excludedNamespaces | Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during restore. | string[] |
| excludedResourceTypes | Gets or sets the exclude resource types property. This property sets the resource types to be excluded during restore. | string[] |
| includeClusterScopeResources | Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during restore. | bool (required) |
| includedNamespaces | Gets or sets the include namespaces property. This property sets the namespaces to be included during restore. | string[] |
| includedResourceTypes | Gets or sets the include resource types property. This property sets the resource types to be included during restore. | string[] |
| labelSelectors | Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during restore. | string[] |
| snapshotVolumes | Gets or sets the volume snapshot property. This property if enabled will take volume snapshots during restore. | bool (required) |


### DataStoreParameters

| Name | Description | Value |
|-|-|-|
| dataStoreType | type of datastore; Operational/Vault/Archive | 'ArchiveStore''OperationalStore''VaultStore' (required) |
| objectType | Set the object type | AzureOperationalStoreParameters(required) |


### AzureOperationalStoreParameters

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AzureOperationalStoreParameters' (required) |
| resourceGroupId | Gets or sets the Snapshot Resource Group Uri. | string |
## Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      datasourceTypes = [
        "string"
      ]
      objectType = "string"
      // For remaining properties, see BaseBackupPolicy objects
    }
  })
}

```

### backupVaults/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupVaults |
| properties | BaseBackupPolicyResource properties | BaseBackupPolicy |


### BaseBackupPolicy

| Name | Description | Value |
|-|-|-|
| datasourceTypes | Type of datasource for the backup management | string[] (required) |
| objectType | Set the object type | BackupPolicy(required) |


### BackupPolicy

| Name | Description | Value |
|-|-|-|
| objectType |  | 'BackupPolicy' (required) |
| policyRules | Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc | BasePolicyRule[] (required) |


### BasePolicyRule

| Name | Description | Value |
|-|-|-|
| name |  | string (required) |
| objectType | Set the object type | AzureBackupRuleAzureRetentionRule(required) |


### AzureBackupRule

| Name | Description | Value |
|-|-|-|
| objectType |  | 'AzureBackupRule' (required) |
| backupParameters | BackupParameters base | BackupParameters |
| dataStore | DataStoreInfo base | DataStoreInfoBase(required) |
| trigger | Trigger context | TriggerContext(required) |


### BackupParameters

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | AzureBackupParams(required) |


### AzureBackupParams

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AzureBackupParams' (required) |
| backupType | BackupType ; Full/Incremental etc | string (required) |


### DataStoreInfoBase

| Name | Description | Value |
|-|-|-|
| dataStoreType | type of datastore; Operational/Vault/Archive | 'ArchiveStore''OperationalStore''VaultStore' (required) |
| objectType | Type of Datasource object, used to initialize the right inherited type | string (required) |


### TriggerContext

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | AdhocBasedTriggerContextScheduleBasedTriggerContext(required) |


### AdhocBasedTriggerContext

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AdhocBasedTriggerContext' (required) |
| taggingCriteria | Tagging Criteria containing retention tag for adhoc backup. | AdhocBasedTaggingCriteria(required) |


### AdhocBasedTaggingCriteria

| Name | Description | Value |
|-|-|-|
| tagInfo | Retention tag information | RetentionTag |


### RetentionTag

| Name | Description | Value |
|-|-|-|
| tagName | Retention Tag Name to relate it to retention rule. | string (required) |


### ScheduleBasedTriggerContext

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'ScheduleBasedTriggerContext' (required) |
| schedule | Schedule for this backup | BackupSchedule(required) |
| taggingCriteria | List of tags that can be applicable for given schedule. | TaggingCriteria[] (required) |


### BackupSchedule

| Name | Description | Value |
|-|-|-|
| repeatingTimeIntervals | ISO 8601 repeating time interval format | string[] (required) |
| timeZone | Time zone for a schedule. Example: Pacific Standard Time | string |


### TaggingCriteria

| Name | Description | Value |
|-|-|-|
| criteria | Criteria which decides whether the tag can be applied to a triggered backup. | BackupCriteria[] |
| isDefault | Specifies if tag is default. | bool (required) |
| taggingPriority | Retention Tag priority. | int (required) |
| tagInfo | Retention tag information | RetentionTag(required) |


### BackupCriteria

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | ScheduleBasedBackupCriteria(required) |


### ScheduleBasedBackupCriteria

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'ScheduleBasedBackupCriteria' (required) |
| absoluteCriteria | it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"and should be part of AbsoluteMarker enum | String array containing any of:'AllBackup''FirstOfDay''FirstOfMonth''FirstOfWeek''FirstOfYear' |
| daysOfMonth | This is day of the month from 1 to 28 other wise last of month | Day[] |
| daysOfTheWeek | It should be Sunday/Monday/T..../Saturday | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| monthsOfYear | It should be January/February/....../December | String array containing any of:'April''August''December''February''January''July''June''March''May''November''October''September' |
| scheduleTimes | List of schedule times for backup | string[] |
| weeksOfTheMonth | It should be First/Second/Third/Fourth/Last | String array containing any of:'First''Fourth''Last''Second''Third' |


### Day

| Name | Description | Value |
|-|-|-|
| date | Date of the month | int |
| isLast | Whether Date is last date of month | bool |


### AzureRetentionRule

| Name | Description | Value |
|-|-|-|
| objectType |  | 'AzureRetentionRule' (required) |
| isDefault |  | bool |
| lifecycles |  | SourceLifeCycle[] (required) |


### SourceLifeCycle

| Name | Description | Value |
|-|-|-|
| deleteAfter | Delete Option | DeleteOption(required) |
| sourceDataStore | DataStoreInfo base | DataStoreInfoBase(required) |
| targetDataStoreCopySettings |  | TargetCopySetting[] |


### DeleteOption

| Name | Description | Value |
|-|-|-|
| duration | Duration of deletion after given timespan | string (required) |
| objectType | Set the object type | AbsoluteDeleteOption(required) |


### AbsoluteDeleteOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AbsoluteDeleteOption' (required) |


### TargetCopySetting

| Name | Description | Value |
|-|-|-|
| copyAfter | It can be CustomCopyOption or ImmediateCopyOption. | CopyOption(required) |
| dataStore | Info of target datastore | DataStoreInfoBase(required) |


### CopyOption

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | CopyOnExpiryOptionCustomCopyOptionImmediateCopyOption(required) |


### CopyOnExpiryOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'CopyOnExpiryOption' (required) |


### CustomCopyOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'CustomCopyOption' (required) |
| duration | Data copied after given timespan | string |


### ImmediateCopyOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'ImmediateCopyOption' (required) |
## Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      lastUpdatedTime = "string"
      resourceGuardOperationDetails = [
        {
          defaultResourceRequest = "string"
          vaultCriticalOperation = "string"
        }
      ]
      resourceGuardResourceId = "string"
    }
  })
}

```

### backupVaults/backupResourceGuardProxies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupVaults |
| properties | ResourceGuardProxyBaseResource properties | ResourceGuardProxyBase |


### ResourceGuardProxyBase

| Name | Description | Value |
|-|-|-|
| description |  | string |
| lastUpdatedTime |  | string |
| resourceGuardOperationDetails |  | ResourceGuardOperationDetail[] |
| resourceGuardResourceId |  | string |


### ResourceGuardOperationDetail

| Name | Description | Value |
|-|-|-|
| defaultResourceRequest |  | string |
| vaultCriticalOperation |  | string |
## Microsoft.DataProtection/resourceGuards@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/resourceGuards@2022-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      vaultCriticalOperationExclusionList = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

### resourceGuards

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| eTag | Optional ETag. | string |
| identity | Input Managed Identity Details | DppIdentityDetails |
| properties | ResourceGuardResource properties | ResourceGuard |


### DppIdentityDetails

| Name | Description | Value |
|-|-|-|
| type | The identityType which can be either SystemAssigned or None | string |


### ResourceGuard

| Name | Description | Value |
|-|-|-|
| vaultCriticalOperationExclusionList | List of critical operations which are not protected by this resourceGuard | string[] |
