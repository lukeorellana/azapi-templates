```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SqlVirtualMachine/sqlVirtualMachines@2022-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      assessmentSettings = {
        enable = bool
        runImmediately = bool
        schedule = {
          dayOfWeek = "string"
          enable = bool
          monthlyOccurrence = int
          startTime = "string"
          weeklyInterval = int
        }
      }
      autoBackupSettings = {
        backupScheduleType = "string"
        backupSystemDbs = bool
        daysOfWeek = [
          "string"
        ]
        enable = bool
        enableEncryption = bool
        fullBackupFrequency = "string"
        fullBackupStartTime = int
        fullBackupWindowHours = int
        logBackupFrequency = int
        password = "string"
        retentionPeriod = int
        storageAccessKey = "string"
        storageAccountUrl = "string"
        storageContainerName = "string"
      }
      autoPatchingSettings = {
        dayOfWeek = "string"
        enable = bool
        maintenanceWindowDuration = int
        maintenanceWindowStartingHour = int
      }
      enableAutomaticUpgrade = bool
      keyVaultCredentialSettings = {
        azureKeyVaultUrl = "string"
        credentialName = "string"
        enable = bool
        servicePrincipalName = "string"
        servicePrincipalSecret = "string"
      }
      leastPrivilegeMode = "string"
      serverConfigurationsManagementSettings = {
        additionalFeaturesServerConfigurations = {
          isRServicesEnabled = bool
        }
        azureAdAuthenticationSettings = {
          clientId = "string"
        }
        sqlConnectivityUpdateSettings = {
          connectivityType = "string"
          port = int
          sqlAuthUpdatePassword = "string"
          sqlAuthUpdateUserName = "string"
        }
        sqlInstanceSettings = {
          collation = "string"
          isIfiEnabled = bool
          isLpimEnabled = bool
          isOptimizeForAdHocWorkloadsEnabled = bool
          maxDop = int
          maxServerMemoryMB = int
          minServerMemoryMB = int
        }
        sqlStorageUpdateSettings = {
          diskConfigurationType = "string"
          diskCount = int
          startingDeviceId = int
        }
        sqlWorkloadTypeUpdateSettings = {
          sqlWorkloadType = "string"
        }
      }
      sqlImageOffer = "string"
      sqlImageSku = "string"
      sqlManagement = "string"
      sqlServerLicenseType = "string"
      sqlVirtualMachineGroupResourceId = "string"
      storageConfigurationSettings = {
        diskConfigurationType = "string"
        sqlDataSettings = {
          defaultFilePath = "string"
          luns = [
            int
          ]
        }
        sqlLogSettings = {
          defaultFilePath = "string"
          luns = [
            int
          ]
        }
        sqlSystemDbOnDataDisk = bool
        sqlTempDbSettings = {
          dataFileCount = int
          dataFileSize = int
          dataGrowth = int
          defaultFilePath = "string"
          logFileSize = int
          logGrowth = int
          luns = [
            int
          ]
          persistFolder = bool
          persistFolderPath = "string"
        }
        storageWorkloadType = "string"
      }
      virtualMachineResourceId = "string"
      wsfcDomainCredentials = {
        clusterBootstrapAccountPassword = "string"
        clusterOperatorAccountPassword = "string"
        sqlServiceAccountPassword = "string"
      }
      wsfcStaticIp = "string"
    }
  })
}

```

### sqlVirtualMachines

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Azure Active Directory identity of the server. | ResourceIdentity |
| properties | Resource properties. | SqlVirtualMachineProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'None''SystemAssigned' |


### SqlVirtualMachineProperties

| Name | Description | Value |
|-|-|-|
| assessmentSettings | SQL best practices Assessment Settings. | AssessmentSettings |
| autoBackupSettings | Auto backup settings for SQL Server. | AutoBackupSettings |
| autoPatchingSettings | Auto patching settings for applying critical security updates to SQL virtual machine. | AutoPatchingSettings |
| enableAutomaticUpgrade | Enable automatic upgrade of Sql IaaS extension Agent. | bool |
| keyVaultCredentialSettings | Key vault credential settings. | KeyVaultCredentialSettings |
| leastPrivilegeMode | SQL IaaS Agent least privilege mode. | 'Enabled''NotSet' |
| serverConfigurationsManagementSettings | SQL Server configuration management settings. | ServerConfigurationsManagementSettings |
| sqlImageOffer | SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016. | string |
| sqlImageSku | SQL Server edition type. | 'Developer''Enterprise''Express''Standard''Web' |
| sqlManagement | SQL Server Management type. | 'Full''LightWeight''NoAgent' |
| sqlServerLicenseType | SQL Server license type. | 'AHUB''DR''PAYG' |
| sqlVirtualMachineGroupResourceId | ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of. | string |
| storageConfigurationSettings | Storage Configuration Settings. | StorageConfigurationSettings |
| virtualMachineResourceId | ARM Resource id of underlying virtual machine created from SQL marketplace image. | string |
| wsfcDomainCredentials | Domain credentials for setting up Windows Server Failover Cluster for SQL availability group. | WsfcDomainCredentials |
| wsfcStaticIp | Domain credentials for setting up Windows Server Failover Cluster for SQL availability group. | string |


### AssessmentSettings

| Name | Description | Value |
|-|-|-|
| enable | Enable or disable SQL best practices Assessment feature on SQL virtual machine. | bool |
| runImmediately | Run SQL best practices Assessment immediately on SQL virtual machine. | bool |
| schedule | Schedule for SQL best practices Assessment. | Schedule |


### Schedule

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week to run assessment. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| enable | Enable or disable assessment schedule on SQL virtual machine. | bool |
| monthlyOccurrence | Occurrence of the DayOfWeek day within a month to schedule assessment. Takes values: 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month | int |
| startTime | Time of the day in HH:mm format. Eg. 17:30 | string |
| weeklyInterval | Number of weeks to schedule between 2 assessment runs. Takes value from 1-6 | int |


### AutoBackupSettings

| Name | Description | Value |
|-|-|-|
| backupScheduleType | Backup schedule type. | 'Automated''Manual' |
| backupSystemDbs | Include or exclude system databases from auto backup. | bool |
| daysOfWeek | Days of the week for the backups when FullBackupFrequency is set to Weekly. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| enable | Enable or disable autobackup on SQL virtual machine. | bool |
| enableEncryption | Enable or disable encryption for backup on SQL virtual machine. | bool |
| fullBackupFrequency | Frequency of full backups. In both cases, full backups begin during the next scheduled time window. | 'Daily''Weekly' |
| fullBackupStartTime | Start time of a given day during which full backups can take place. 0-23 hours. | int |
| fullBackupWindowHours | Duration of the time window of a given day during which full backups can take place. 1-23 hours. | int |
| logBackupFrequency | Frequency of log backups. 5-60 minutes. | int |
| password | Password for encryption on backup. | string |
| retentionPeriod | Retention period of backup: 1-90 days. | int |
| storageAccessKey | Storage account key where backup will be taken to. | string |
| storageAccountUrl | Storage account url where backup will be taken to. | string |
| storageContainerName | Storage container name where backup will be taken to. | string |


### AutoPatchingSettings

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of week to apply the patch on. | 'Everyday''Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| enable | Enable or disable autopatching on SQL virtual machine. | bool |
| maintenanceWindowDuration | Duration of patching. | int |
| maintenanceWindowStartingHour | Hour of the day when patching is initiated. Local VM time. | int |


### KeyVaultCredentialSettings

| Name | Description | Value |
|-|-|-|
| azureKeyVaultUrl | Azure Key Vault url. | string |
| credentialName | Credential name. | string |
| enable | Enable or disable key vault credential setting. | bool |
| servicePrincipalName | Service principal name to access key vault. | string |
| servicePrincipalSecret | Service principal name secret to access key vault. | string |


### ServerConfigurationsManagementSettings

| Name | Description | Value |
|-|-|-|
| additionalFeaturesServerConfigurations | Additional SQL feature settings. | AdditionalFeaturesServerConfigurations |
| azureAdAuthenticationSettings | Azure AD authentication Settings. | AADAuthenticationSettings |
| sqlConnectivityUpdateSettings | SQL connectivity type settings. | SqlConnectivityUpdateSettings |
| sqlInstanceSettings | SQL Instance settings. | SQLInstanceSettings |
| sqlStorageUpdateSettings | SQL storage update settings. | SqlStorageUpdateSettings |
| sqlWorkloadTypeUpdateSettings | SQL workload type settings. | SqlWorkloadTypeUpdateSettings |


### AdditionalFeaturesServerConfigurations

| Name | Description | Value |
|-|-|-|
| isRServicesEnabled | Enable or disable R services (SQL 2016 onwards). | bool |


### AADAuthenticationSettings

| Name | Description | Value |
|-|-|-|
| clientId | The client Id of the Managed Identity to query Microsoft Graph API. An empty string must be used for the system assigned Managed Identity | string |


### SqlConnectivityUpdateSettings

| Name | Description | Value |
|-|-|-|
| connectivityType | SQL Server connectivity option. | 'LOCAL''PRIVATE''PUBLIC' |
| port | SQL Server port. | int |
| sqlAuthUpdatePassword | SQL Server sysadmin login password. | string |
| sqlAuthUpdateUserName | SQL Server sysadmin login to create. | string |


### SQLInstanceSettings

| Name | Description | Value |
|-|-|-|
| collation | SQL Server Collation. | string |
| isIfiEnabled | SQL Server IFI. | bool |
| isLpimEnabled | SQL Server LPIM. | bool |
| isOptimizeForAdHocWorkloadsEnabled | SQL Server Optimize for Adhoc workloads. | bool |
| maxDop | SQL Server MAXDOP. | int |
| maxServerMemoryMB | SQL Server maximum memory. | int |
| minServerMemoryMB | SQL Server minimum memory. | int |


### SqlStorageUpdateSettings

| Name | Description | Value |
|-|-|-|
| diskConfigurationType | Disk configuration to apply to SQL Server. | 'ADD''EXTEND''NEW' |
| diskCount | Virtual machine disk count. | int |
| startingDeviceId | Device id of the first disk to be updated. | int |


### SqlWorkloadTypeUpdateSettings

| Name | Description | Value |
|-|-|-|
| sqlWorkloadType | SQL Server workload type. | 'DW''GENERAL''OLTP' |


### StorageConfigurationSettings

| Name | Description | Value |
|-|-|-|
| diskConfigurationType | Disk configuration to apply to SQL Server. | 'ADD''EXTEND''NEW' |
| sqlDataSettings | SQL Server Data Storage Settings. | SQLStorageSettings |
| sqlLogSettings | SQL Server Log Storage Settings. | SQLStorageSettings |
| sqlSystemDbOnDataDisk | SQL Server SystemDb Storage on DataPool if true. | bool |
| sqlTempDbSettings | SQL Server TempDb Storage Settings. | SQLTempDbSettings |
| storageWorkloadType | Storage workload type. | 'DW''GENERAL''OLTP' |


### SQLStorageSettings

| Name | Description | Value |
|-|-|-|
| defaultFilePath | SQL Server default file path | string |
| luns | Logical Unit Numbers for the disks. | int[] |


### SQLTempDbSettings

| Name | Description | Value |
|-|-|-|
| dataFileCount | SQL Server tempdb data file count | int |
| dataFileSize | SQL Server tempdb data file size | int |
| dataGrowth | SQL Server tempdb data file autoGrowth size | int |
| defaultFilePath | SQL Server default file path | string |
| logFileSize | SQL Server tempdb log file size | int |
| logGrowth | SQL Server tempdb log file autoGrowth size | int |
| luns | Logical Unit Numbers for the disks. | int[] |
| persistFolder | SQL Server tempdb persist folder choice | bool |
| persistFolderPath | SQL Server tempdb persist folder location | string |


### WsfcDomainCredentials

| Name | Description | Value |
|-|-|-|
| clusterBootstrapAccountPassword | Cluster bootstrap account password. | string |
| clusterOperatorAccountPassword | Cluster operator account password. | string |
| sqlServiceAccountPassword | SQL service account password. | string |

