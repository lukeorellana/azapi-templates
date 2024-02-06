## Microsoft.RecoveryServices/vaults@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults@2023-01-01"
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
      encryption = {
        infrastructureEncryption = "string"
        kekIdentity = {
          userAssignedIdentity = "string"
          useSystemAssignedIdentity = bool
        }
        keyVaultProperties = {
          keyUri = "string"
        }
      }
      monitoringSettings = {
        azureMonitorAlertSettings = {
          alertsForAllJobFailures = "string"
        }
        classicAlertSettings = {
          alertsForCriticalOperations = "string"
        }
      }
      moveDetails = {}
      publicNetworkAccess = "string"
      redundancySettings = {}
      securitySettings = {
        immutabilitySettings = {
          state = "string"
        }
      }
      upgradeDetails = {}
    }
    sku = {
      capacity = "string"
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

### vaults

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-50Valid characters:Alphanumerics and hyphens.Start with letter. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Identifies the unique system identifier for each Azure resource. | Sku |
| etag | Optional ETag. | string |
| identity | Identity for the resource. | IdentityData |
| properties | Properties of the vault. | VaultProperties |


### IdentityData

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### VaultProperties

| Name | Description | Value |
|-|-|-|
| encryption | Customer Managed Key details of the resource. | VaultPropertiesEncryption |
| monitoringSettings | Monitoring Settings of the vault | MonitoringSettings |
| moveDetails | The details of the latest move operation performed on the Azure Resource | VaultPropertiesMoveDetails |
| publicNetworkAccess | property to enable or disable resource provider inbound network traffic from public clients | 'Disabled''Enabled' |
| redundancySettings | The redundancy Settings of a Vault | VaultPropertiesRedundancySettings |
| securitySettings | Security Settings of the vault | SecuritySettings |
| upgradeDetails | Details for upgrading vault. | UpgradeDetails |


### VaultPropertiesEncryption

| Name | Description | Value |
|-|-|-|
| infrastructureEncryption | Enabling/Disabling the Double Encryption state | 'Disabled''Enabled' |
| kekIdentity | The details of the identity used for CMK | CmkKekIdentity |
| keyVaultProperties | The properties of the Key Vault which hosts CMK | CmkKeyVaultProperties |


### CmkKekIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned | string |
| useSystemAssignedIdentity | Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field | bool |


### CmkKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyUri | The key uri of the Customer Managed Key | string |


### MonitoringSettings

| Name | Description | Value |
|-|-|-|
| azureMonitorAlertSettings | Settings for Azure Monitor based alerts | AzureMonitorAlertSettings |
| classicAlertSettings | Settings for classic alerts | ClassicAlertSettings |


### AzureMonitorAlertSettings

| Name | Description | Value |
|-|-|-|
| alertsForAllJobFailures |  | 'Disabled''Enabled' |


### ClassicAlertSettings

| Name | Description | Value |
|-|-|-|
| alertsForCriticalOperations |  | 'Disabled''Enabled' |


### SecuritySettings

| Name | Description | Value |
|-|-|-|
| immutabilitySettings | Immutability Settings of a vault | ImmutabilitySettings |


### ImmutabilitySettings

| Name | Description | Value |
|-|-|-|
| state |  | 'Disabled''Locked''Unlocked' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The sku capacity | string |
| family | The sku family | string |
| name | Name of SKU is RS0 (Recovery Services 0th version) and the tier is standard tier. They do not have affect on backend storage redundancy or any other vault settings. To manage storage redundancy, use the backupstorageconfig | 'RS0''Standard' (required) |
| size | The sku size | string |
| tier | The Sku tier. | string |
## Microsoft.RecoveryServices/vaults/backupconfig@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupconfig@2023-01-01"
  name = "vaultconfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enhancedSecurityState = "string"
      isSoftDeleteFeatureStateEditable = bool
      resourceGuardOperationRequests = [
        "string"
      ]
      softDeleteFeatureState = "string"
      storageModelType = "string"
      storageType = "string"
      storageTypeState = "string"
    }
    eTag = "string"
  })
}

```

### vaults/backupconfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'vaultconfig' |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | BackupResourceVaultConfigResource properties | BackupResourceVaultConfig |


### BackupResourceVaultConfig

| Name | Description | Value |
|-|-|-|
| enhancedSecurityState | Enabled or Disabled. | 'Disabled''Enabled''Invalid' |
| isSoftDeleteFeatureStateEditable | Is soft delete feature state editable | bool |
| resourceGuardOperationRequests | ResourceGuard Operation Requests | string[] |
| softDeleteFeatureState | Soft Delete feature state | 'Disabled''Enabled''Invalid' |
| storageModelType | Storage type. | 'GeoRedundant''Invalid''LocallyRedundant''ReadAccessGeoZoneRedundant''ZoneRedundant' |
| storageType | Storage type. | 'GeoRedundant''Invalid''LocallyRedundant''ReadAccessGeoZoneRedundant''ZoneRedundant' |
| storageTypeState | Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. | 'Invalid''Locked''Unlocked' |
## Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01"
  name = "backupResourceEncryptionConfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      encryptionAtRestType = "string"
      infrastructureEncryptionState = "string"
      keyUri = "string"
      lastUpdateStatus = "string"
      subscriptionId = "string"
    }
    eTag = "string"
  })
}

```

### vaults/backupEncryptionConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'backupResourceEncryptionConfig' |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | BackupResourceEncryptionConfigResource properties | BackupResourceEncryptionConfigOrBackupResourceEncryp... |


### BackupResourceEncryptionConfigOrBackupResourceEncryp...

| Name | Description | Value |
|-|-|-|
| encryptionAtRestType | Encryption At Rest Type | 'CustomerManaged''Invalid''MicrosoftManaged' |
| infrastructureEncryptionState |  | 'Disabled''Enabled''Invalid' |
| keyUri | Key Vault Key URI | string |
| lastUpdateStatus |  | 'Failed''FirstInitialization''Initialized''Invalid''NotEnabled''PartiallyFailed''PartiallySucceeded''Succeeded' |
| subscriptionId | Key Vault Subscription Id | string |
## Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupManagementType = "string"
      itemId = "string"
      policyId = "string"
      protectionState = "string"
      sourceResourceId = "string"
      protectionIntentItemType = "string"
      // For remaining properties, see ProtectionIntent objects
    }
    eTag = "string"
  })
}

```

### vaults/backupFabrics/backupProtectionIntent

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: backupFabrics |
| eTag | Optional ETag. | string |
| properties | ProtectionIntentResource properties | ProtectionIntent |


### ProtectionIntent

| Name | Description | Value |
|-|-|-|
| backupManagementType | Type of backup management for the backed up item. | 'AzureBackupServer''AzureIaasVM''AzureSql''AzureStorage''AzureWorkload''DPM''DefaultBackup''Invalid''MAB' |
| itemId | ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId | string |
| policyId | ID of the backup policy with which this item is backed up. | string |
| protectionState | Backup state of this backup item. | 'Invalid''NotProtected''Protected''Protecting''ProtectionFailed' |
| sourceResourceId | ARM ID of the resource to be backed up. | string |
| protectionIntentItemType | Set the object type | AzureResourceItemAzureWorkloadContainerAutoProtectionIntentAzureWorkloadSQLAutoProtectionIntent(required) |


### AzureResourceProtectionIntent

| Name | Description | Value |
|-|-|-|
| protectionIntentItemType | backup protectionIntent type. | 'AzureResourceItem' (required) |
| friendlyName | Friendly name of the VM represented by this backup item. | string |


### AzureWorkloadContainerAutoProtectionIntent

| Name | Description | Value |
|-|-|-|
| protectionIntentItemType | backup protectionIntent type. | 'AzureWorkloadContainerAutoProtectionIntent' (required) |


### AzureWorkloadSQLAutoProtectionIntent

| Name | Description | Value |
|-|-|-|
| protectionIntentItemType | backup protectionIntent type. | 'AzureWorkloadSQLAutoProtectionIntent' (required) |
| workloadItemType | Workload item type of the item for which intent is to be set | 'Invalid''SAPAseDatabase''SAPAseSystem''SAPHanaDBInstance''SAPHanaDatabase''SAPHanaSystem''SQLDataBase''SQLInstance' |
## Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupManagementType = "string"
      friendlyName = "string"
      healthStatus = "string"
      protectableObjectType = "string"
      registrationStatus = "string"
      containerType = "string"
      // For remaining properties, see ProtectionContainer objects
    }
    eTag = "string"
  })
}

```

### vaults/backupFabrics/protectionContainers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: backupFabrics |
| eTag | Optional ETag. | string |
| properties | ProtectionContainerResource properties | ProtectionContainer |


### ProtectionContainer

| Name | Description | Value |
|-|-|-|
| backupManagementType | Type of backup management for the container. | 'AzureBackupServer''AzureIaasVM''AzureSql''AzureStorage''AzureWorkload''DPM''DefaultBackup''Invalid''MAB' |
| friendlyName | Friendly name of the container. | string |
| healthStatus | Status of health of the container. | string |
| protectableObjectType | Type of the protectable object associated with this container | string |
| registrationStatus | Status of registration of the container with the Recovery Services Vault. | string |
| containerType | Set the object type | AzureBackupServerContainerAzureSqlContainerGenericContainerMicrosoft.ClassicCompute/virtualMachinesMicrosoft.Compute/virtualMachinesSQLAGWorkLoadContainerStorageContainerVMAppContainerWindows(required) |


### AzureBackupServerContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'AzureBackupServerContainer' (required) |
| canReRegister | Specifies whether the container is re-registrable. | bool |
| containerId | ID of container. | string |
| dpmAgentVersion | Backup engine Agent version | string |
| dpmServers | List of BackupEngines protecting the container | string[] |
| extendedInfo | Extended Info of the container. | DPMContainerExtendedInfo |
| protectedItemCount | Number of protected items in the BackupEngine | int |
| protectionStatus | Protection status of the container. | string |
| upgradeAvailable | To check if upgrade available | bool |


### DPMContainerExtendedInfo

| Name | Description | Value |
|-|-|-|
| lastRefreshedAt | Last refresh time of the DPMContainer. | string |


### AzureSqlContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'AzureSqlContainer' (required) |


### GenericContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'GenericContainer' (required) |
| extendedInformation | Extended information (not returned in List container API calls) | GenericContainerExtendedInfo |
| fabricName | Name of the container's fabric | string |


### GenericContainerExtendedInfo

| Name | Description | Value |
|-|-|-|
| containerIdentityInfo | Container identity information | ContainerIdentityInfo |
| rawCertData | Public key of container cert | string |
| serviceEndpoints | Azure Backup Service Endpoints for the container | object |


### ContainerIdentityInfo

| Name | Description | Value |
|-|-|-|
| aadTenantId | Protection container identity - AAD Tenant | string |
| audience | Protection container identity - Audience | string |
| servicePrincipalClientId | Protection container identity - AAD Service Principal | string |
| uniqueName | Unique name of the container | string |


### AzureIaaSClassicComputeVMContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'Microsoft.ClassicCompute/virtualMachines' (required) |
| resourceGroup | Resource group name of Recovery Services Vault. | string |
| virtualMachineId | Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container. | string |
| virtualMachineVersion | Specifies whether the container represents a Classic or an Azure Resource Manager VM. | string |


### AzureIaaSComputeVMContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'Microsoft.Compute/virtualMachines' (required) |
| resourceGroup | Resource group name of Recovery Services Vault. | string |
| virtualMachineId | Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container. | string |
| virtualMachineVersion | Specifies whether the container represents a Classic or an Azure Resource Manager VM. | string |


### AzureSqlagWorkloadContainerProtectionContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'SQLAGWorkLoadContainer' (required) |
| extendedInfo | Additional details of a workload container. | AzureWorkloadContainerExtendedInfo |
| lastUpdatedTime | Time stamp when this container was updated. | string |
| operationType | Re-Do Operation | 'Invalid''Register''Reregister' |
| sourceResourceId | ARM ID of the virtual machine represented by this Azure Workload Container | string |
| workloadType | Workload type for which registration was sent. | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |


### AzureWorkloadContainerExtendedInfo

| Name | Description | Value |
|-|-|-|
| hostServerName | Host Os Name in case of Stand Alone and Cluster Name in case of distributed container. | string |
| inquiryInfo | Inquiry Status for the container. | InquiryInfo |
| nodesList | List of the nodes in case of distributed container. | DistributedNodesInfo[] |


### InquiryInfo

| Name | Description | Value |
|-|-|-|
| errorDetail | Error Details if the Status is non-success. | ErrorDetail |
| inquiryDetails | Inquiry Details which will have workload specific details.For e.g. - For SQL and oracle this will contain different details. | WorkloadInquiryDetails[] |
| status | Inquiry Status for this container such asInProgress , Failed , Succeeded | string |


### WorkloadInquiryDetails

| Name | Description | Value |
|-|-|-|
| inquiryValidation | Inquiry validation such as permissions and other backup validations. | InquiryValidation |
| itemCount | Contains the protectable item Count inside this Container. | int |
| type | Type of the Workload such as SQL, Oracle etc. | string |


### InquiryValidation

| Name | Description | Value |
|-|-|-|
| errorDetail | Error Detail in case the status is non-success. | ErrorDetail |
| status | Status for the Inquiry Validation. | string |


### DistributedNodesInfo

| Name | Description | Value |
|-|-|-|
| errorDetail | Error Details if the Status is non-success. | ErrorDetail |
| nodeName | Name of the node under a distributed container. | string |
| status | Status of this Node.Failed , Succeeded | string |


### AzureStorageContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'StorageContainer' (required) |
| acquireStorageAccountLock | Whether storage account lock is to be acquired for this container or not. | 'Acquire''NotAcquire' |
| protectedItemCount | Number of items backed up in this container. | int |
| resourceGroup | Resource group name of Recovery Services Vault. | string |
| sourceResourceId | Fully qualified ARM url. | string |
| storageAccountVersion | Storage account version. | string |


### AzureVMAppContainerProtectionContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'VMAppContainer' (required) |
| extendedInfo | Additional details of a workload container. | AzureWorkloadContainerExtendedInfo |
| lastUpdatedTime | Time stamp when this container was updated. | string |
| operationType | Re-Do Operation | 'Invalid''Register''Reregister' |
| sourceResourceId | ARM ID of the virtual machine represented by this Azure Workload Container | string |
| workloadType | Workload type for which registration was sent. | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |


### MabContainer

| Name | Description | Value |
|-|-|-|
| containerType | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer | 'Windows' (required) |
| agentVersion | Agent version of this container. | string |
| canReRegister | Can the container be registered one more time. | bool |
| containerHealthState | Health state of mab container. | string |
| containerId | ContainerID represents the container. | int |
| extendedInfo | Additional information for this container | MabContainerExtendedInfo |
| mabContainerHealthDetails | Health details on this mab container. | MABContainerHealthDetails[] |
| protectedItemCount | Number of items backed up in this container. | int |


### MabContainerExtendedInfo

| Name | Description | Value |
|-|-|-|
| backupItems | List of backup items associated with this container. | string[] |
| backupItemType | Type of backup items associated with this container. | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |
| lastBackupStatus | Latest backup status of this container. | string |
| lastRefreshedAt | Time stamp when this container was refreshed. | string |
| policyName | Backup policy associated with this container. | string |


### MABContainerHealthDetails

| Name | Description | Value |
|-|-|-|
| code | Health Code | int |
| message | Health Message | string |
| recommendations | Health Recommended Actions | string[] |
| title | Health Title | string |
## Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupSetName = "string"
      containerName = "string"
      createMode = "string"
      deferredDeleteTimeInUTC = "string"
      deferredDeleteTimeRemaining = "string"
      isArchiveEnabled = bool
      isDeferredDeleteScheduleUpcoming = bool
      isRehydrate = bool
      isScheduledForDeferredDelete = bool
      lastRecoveryPoint = "string"
      policyId = "string"
      policyName = "string"
      resourceGuardOperationRequests = [
        "string"
      ]
      softDeleteRetentionPeriod = int
      sourceResourceId = "string"
      protectedItemType = "string"
      // For remaining properties, see ProtectedItem objects
    }
    eTag = "string"
  })
}

```

### vaults/backupFabrics/protectionContainers/protectedI...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:protectionContainers |
| eTag | Optional ETag. | string |
| properties | ProtectedItemResource properties | ProtectedItem |


### ProtectedItem

| Name | Description | Value |
|-|-|-|
| backupSetName | Name of the backup set the backup item belongs to | string |
| containerName | Unique name of container | string |
| createMode | Create mode to indicate recovery of existing soft deleted data source or creation of new data source. | 'Default''Invalid''Recover' |
| deferredDeleteTimeInUTC | Time for deferred deletion in UTC | string |
| deferredDeleteTimeRemaining | Time remaining before the DS marked for deferred delete is permanently deleted | string |
| isArchiveEnabled | Flag to identify whether datasource is protected in archive | bool |
| isDeferredDeleteScheduleUpcoming | Flag to identify whether the deferred deleted DS is to be purged soon | bool |
| isRehydrate | Flag to identify that deferred deleted DS is to be moved into Pause state | bool |
| isScheduledForDeferredDelete | Flag to identify whether the DS is scheduled for deferred delete | bool |
| lastRecoveryPoint | Timestamp when the last (latest) backup copy was created for this backup item. | string |
| policyId | ID of the backup policy with which this item is backed up. | string |
| policyName | Name of the policy used for protection | string |
| resourceGuardOperationRequests | ResourceGuardOperationRequests on which LAC check will be performed | string[] |
| softDeleteRetentionPeriod | Soft delete retention period in days | int |
| sourceResourceId | ARM ID of the resource to be backed up. | string |
| protectedItemType | Set the object type | AzureFileShareProtectedItemAzureVmWorkloadSAPAseDatabaseAzureVmWorkloadSAPHanaDatabaseAzureVmWorkloadSAPHanaDBInstanceAzureVmWorkloadSQLDatabaseDPMProtectedItemGenericProtectedItemMabFileFolderProtectedItemMicrosoft.ClassicCompute/virtualMachinesMicrosoft.Compute/virtualMachinesMicrosoft.Sql/servers/databases(required) |


### AzureFileshareProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureFileShareProtectedItem' (required) |
| extendedInfo | Additional information with this backup item. | AzureFileshareProtectedItemExtendedInfo |
| friendlyName | Friendly name of the fileshare represented by this backup item. | string |
| kpisHealths | Health details of different KPIs | object |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | string |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| protectionStatus | Backup status of this backup item. | string |


### AzureFileshareProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| oldestRecoveryPoint | The oldest backup copy available for this item in the service. | string |
| policyState | Indicates consistency of policy object and policy applied to this backup item. | string |
| recoveryPointCount | Number of available backup copies associated with this backup item. | int |


### AzureVmWorkloadSAPAseDatabaseProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSAPAseDatabase' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### AzureVmWorkloadProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| newestRecoveryPointInArchive | The latest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPoint | The oldest backup copy available for this backup item across all tiers. | string |
| oldestRecoveryPointInArchive | The oldest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPointInVault | The oldest backup copy available for this backup item in vault tier | string |
| policyState | Indicates consistency of policy object and policy applied to this backup item. | string |
| recoveryModel | Indicates consistency of policy object and policy applied to this backup item. | string |
| recoveryPointCount | Number of backup copies available for this backup item. | int |


### AzureVmWorkloadSAPHanaDatabaseProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSAPHanaDatabase' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### AzureVmWorkloadSAPHanaDBInstanceProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSAPHanaDBInstance' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### AzureVmWorkloadSQLDatabaseProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSQLDatabase' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### DPMProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'DPMProtectedItem' (required) |
| backupEngineName | Backup Management server protecting this backup item | string |
| extendedInfo | Extended info of the backup item. | DPMProtectedItemExtendedInfo |
| friendlyName | Friendly name of the managed item | string |
| protectionState | Protection state of the backup engine | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |


### DPMProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| diskStorageUsedInBytes | Used Disk storage in bytes. | string |
| isCollocated | To check if backup item is collocated. | bool |
| isPresentOnCloud | To check if backup item is cloud protected. | bool |
| lastBackupStatus | Last backup status information on backup item. | string |
| lastRefreshedAt | Last refresh time on backup item. | string |
| oldestRecoveryPoint | Oldest cloud recovery point time. | string |
| onPremiseLatestRecoveryPoint | latest disk recovery point time. | string |
| onPremiseOldestRecoveryPoint | Oldest disk recovery point time. | string |
| onPremiseRecoveryPointCount | disk recovery point count. | int |
| protectableObjectLoadPath | Attribute to provide information on various DBs. | object |
| protected | To check if backup item is disk protected. | bool |
| protectionGroupName | Protection group name of the backup item. | string |
| recoveryPointCount | cloud recovery point count. | int |
| totalDiskStorageSizeInBytes | total Disk storage in bytes. | string |


### GenericProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'GenericProtectedItem' (required) |
| fabricName | Name of this backup item's fabric. | string |
| friendlyName | Friendly name of the container. | string |
| policyState | Indicates consistency of policy object and policy applied to this backup item. | string |
| protectedItemId | Data Plane Service ID of the protected item. | int |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| sourceAssociations | Loosely coupled (type, value) associations (example - parent of a protected item) | object |


### MabFileFolderProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'MabFileFolderProtectedItem' (required) |
| computerName | Name of the computer associated with this backup item. | string |
| deferredDeleteSyncTimeInUTC | Sync time for deferred deletion in UTC | int |
| extendedInfo | Additional information with this backup item. | MabFileFolderProtectedItemExtendedInfo |
| friendlyName | Friendly name of this backup item. | string |
| lastBackupStatus | Status of last backup operation. | string |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| protectionState | Protected, ProtectionStopped, IRPending or ProtectionError | string |


### MabFileFolderProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| lastRefreshedAt | Last time when the agent data synced to service. | string |
| oldestRecoveryPoint | The oldest backup copy available. | string |
| recoveryPointCount | Number of backup copies associated with the backup item. | int |


### AzureIaaSClassicComputeVMProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'Microsoft.ClassicCompute/virtualMachines' (required) |
| extendedInfo | Additional information for this backup item. | AzureIaaSVMProtectedItemExtendedInfo |
| extendedProperties | Extended Properties for Azure IaasVM Backup. | ExtendedProperties |
| healthDetails | Health details on this backup item. | AzureIaaSVMHealthDetails[] |
| kpisHealths | Health details of different KPIs | object |
| lastBackupStatus | Last backup operation status. | string |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| protectionStatus | Backup status of this backup item. | string |


### AzureIaaSVMProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| newestRecoveryPointInArchive | The latest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPoint | The oldest backup copy available for this backup item across all tiers. | string |
| oldestRecoveryPointInArchive | The oldest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPointInVault | The oldest backup copy available for this backup item in vault tier | string |
| policyInconsistent | Specifies if backup policy associated with the backup item is inconsistent. | bool |
| recoveryPointCount | Number of backup copies available for this backup item. | int |


### ExtendedProperties

| Name | Description | Value |
|-|-|-|
| diskExclusionProperties | Extended Properties for Disk Exclusion. | DiskExclusionProperties |
| linuxVmApplicationName | Linux VM name | string |


### DiskExclusionProperties

| Name | Description | Value |
|-|-|-|
| diskLunList | List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection. | int[] |
| isInclusionList | Flag to indicate whether DiskLunList is to be included/ excluded from backup. | bool |


### AzureIaaSComputeVMProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'Microsoft.Compute/virtualMachines' (required) |
| extendedInfo | Additional information for this backup item. | AzureIaaSVMProtectedItemExtendedInfo |
| extendedProperties | Extended Properties for Azure IaasVM Backup. | ExtendedProperties |
| healthDetails | Health details on this backup item. | AzureIaaSVMHealthDetails[] |
| kpisHealths | Health details of different KPIs | object |
| lastBackupStatus | Last backup operation status. | string |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| protectionStatus | Backup status of this backup item. | string |


### AzureSqlProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'Microsoft.Sql/servers/databases' (required) |
| extendedInfo | Additional information for this backup item. | AzureSqlProtectedItemExtendedInfo |
| protectedItemDataId | Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services. | string |
| protectionState | Backup state of the backed up item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |


### AzureSqlProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| oldestRecoveryPoint | The oldest backup copy available for this item in the service. | string |
| policyState | State of the backup policy associated with this backup item. | string |
| recoveryPointCount | Number of available backup copies associated with this backup item. | int |
## Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      protectedItemsCount = int
      resourceGuardOperationRequests = [
        "string"
      ]
      backupManagementType = "string"
      // For remaining properties, see ProtectionPolicy objects
    }
    eTag = "string"
  })
}

```

### vaults/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-150Valid characters:Alphanumerics and hyphens.Start with letter. Can't end with hyphen. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | ProtectionPolicyResource properties | ProtectionPolicy |


### ProtectionPolicy

| Name | Description | Value |
|-|-|-|
| protectedItemsCount | Number of items associated with this policy. | int |
| resourceGuardOperationRequests | ResourceGuard Operation Requests | string[] |
| backupManagementType | Set the object type | AzureIaasVMAzureSqlAzureStorageAzureWorkloadGenericProtectionPolicyMAB(required) |


### AzureIaaSVMProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureIaasVM' (required) |
| instantRPDetails |  | InstantRPAdditionalDetails |
| instantRpRetentionRangeInDays | Instant RP retention policy range in days | int |
| policyType |  | 'Invalid''V1''V2' |
| retentionPolicy | Retention policy with the details on backup copy retention ranges. | RetentionPolicy |
| schedulePolicy | Backup schedule specified as part of backup policy. | SchedulePolicy |
| tieringPolicy | Tiering policy to automatically move RPs to another tierKey is Target Tier, defined in RecoveryPointTierType enum.Tiering policy specifies the criteria to move RP to the target tier. | object |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |


### InstantRPAdditionalDetails

| Name | Description | Value |
|-|-|-|
| azureBackupRGNamePrefix |  | string |
| azureBackupRGNameSuffix |  | string |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| retentionPolicyType | Set the object type | LongTermRetentionPolicySimpleRetentionPolicy(required) |


### LongTermRetentionPolicy

| Name | Description | Value |
|-|-|-|
| retentionPolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'LongTermRetentionPolicy' (required) |
| dailySchedule | Daily retention schedule of the protection policy. | DailyRetentionSchedule |
| monthlySchedule | Monthly retention schedule of the protection policy. | MonthlyRetentionSchedule |
| weeklySchedule | Weekly retention schedule of the protection policy. | WeeklyRetentionSchedule |
| yearlySchedule | Yearly retention schedule of the protection policy. | YearlyRetentionSchedule |


### DailyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionTimes | Retention times of retention policy. | string[] |


### RetentionDuration

| Name | Description | Value |
|-|-|-|
| count | Count of duration types. Retention duration is obtained by the counting the duration type Count times.For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks. | int |
| durationType | Retention duration type of retention policy. | 'Days''Invalid''Months''Weeks''Years' |


### MonthlyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionScheduleDaily | Daily retention format for monthly retention policy. | DailyRetentionFormat |
| retentionScheduleFormatType | Retention schedule format type for monthly retention policy. | 'Daily''Invalid''Weekly' |
| retentionScheduleWeekly | Weekly retention format for monthly retention policy. | WeeklyRetentionFormat |
| retentionTimes | Retention times of retention policy. | string[] |


### DailyRetentionFormat

| Name | Description | Value |
|-|-|-|
| daysOfTheMonth | List of days of the month. | Day[] |


### Day

| Name | Description | Value |
|-|-|-|
| date | Date of the month | int |
| isLast | Whether Date is last date of month | bool |


### WeeklyRetentionFormat

| Name | Description | Value |
|-|-|-|
| daysOfTheWeek | List of days of the week. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| weeksOfTheMonth | List of weeks of month. | String array containing any of:'First''Fourth''Invalid''Last''Second''Third' |


### WeeklyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| daysOfTheWeek | List of days of week for weekly retention policy. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionTimes | Retention times of retention policy. | string[] |


### YearlyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| monthsOfYear | List of months of year of yearly retention policy. | String array containing any of:'April''August''December''February''Invalid''January''July''June''March''May''November''October''September' |
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionScheduleDaily | Daily retention format for yearly retention policy. | DailyRetentionFormat |
| retentionScheduleFormatType | Retention schedule format for yearly retention policy. | 'Daily''Invalid''Weekly' |
| retentionScheduleWeekly | Weekly retention format for yearly retention policy. | WeeklyRetentionFormat |
| retentionTimes | Retention times of retention policy. | string[] |


### SimpleRetentionPolicy

| Name | Description | Value |
|-|-|-|
| retentionPolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'SimpleRetentionPolicy' (required) |
| retentionDuration | Retention duration of the protection policy. | RetentionDuration |


### SchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | Set the object type | LogSchedulePolicyLongTermSchedulePolicySimpleSchedulePolicySimpleSchedulePolicyV2(required) |


### LogSchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'LogSchedulePolicy' (required) |
| scheduleFrequencyInMins | Frequency of the log schedule operation of this policy in minutes. | int |


### LongTermSchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'LongTermSchedulePolicy' (required) |


### SimpleSchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'SimpleSchedulePolicy' (required) |
| hourlySchedule | Hourly Schedule of this Policy | HourlySchedule |
| scheduleRunDays | List of days of week this schedule has to be run. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| scheduleRunFrequency | Frequency of the schedule operation of this policy. | 'Daily''Hourly''Invalid''Weekly' |
| scheduleRunTimes | List of times of day this schedule has to be run. | string[] |
| scheduleWeeklyFrequency | At every number weeks this schedule has to be run. | int |


### HourlySchedule

| Name | Description | Value |
|-|-|-|
| interval | Interval at which backup needs to be triggered. For hourly the valuecan be 4/6/8/12 | int |
| scheduleWindowDuration | To specify duration of the backup window | int |
| scheduleWindowStartTime | To specify start time of the backup window | string |


### SimpleSchedulePolicyV2

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'SimpleSchedulePolicyV2' (required) |
| dailySchedule | Daily schedule of this policy | DailySchedule |
| hourlySchedule | hourly schedule of this policy | HourlySchedule |
| scheduleRunFrequency | Frequency of the schedule operation of this policy. | 'Daily''Hourly''Invalid''Weekly' |
| weeklySchedule | Weekly schedule of this policy | WeeklySchedule |


### DailySchedule

| Name | Description | Value |
|-|-|-|
| scheduleRunTimes | List of times of day this schedule has to be run. | string[] |


### WeeklySchedule

| Name | Description | Value |
|-|-|-|
| scheduleRunDays |  | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| scheduleRunTimes | List of times of day this schedule has to be run. | string[] |


### AzureSqlProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureSql' (required) |
| retentionPolicy | Retention policy details. | RetentionPolicy |


### AzureFileShareProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureStorage' (required) |
| retentionPolicy | Retention policy with the details on backup copy retention ranges. | RetentionPolicy |
| schedulePolicy | Backup schedule specified as part of backup policy. | SchedulePolicy |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |
| workLoadType | Type of workload for the backup management | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |


### AzureVmWorkloadProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureWorkload' (required) |
| makePolicyConsistent | Fix the policy inconsistency | bool |
| settings | Common settings for the backup management | Settings |
| subProtectionPolicy | List of sub-protection policies which includes schedule and retention | SubProtectionPolicy[] |
| workLoadType | Type of workload for the backup management | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |


### Settings

| Name | Description | Value |
|-|-|-|
| isCompression | Workload compression flag. This has been added so that 'isSqlCompression'will be deprecated once clients upgrade to consider this flag. | bool |
| issqlcompression | SQL compression flag | bool |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |


### SubProtectionPolicy

| Name | Description | Value |
|-|-|-|
| policyType | Type of backup policy type | 'CopyOnlyFull''Differential''Full''Incremental''Invalid''Log''SnapshotCopyOnlyFull''SnapshotFull' |
| retentionPolicy | Retention policy with the details on backup copy retention ranges. | RetentionPolicy |
| schedulePolicy | Backup schedule specified as part of backup policy. | SchedulePolicy |
| tieringPolicy | Tiering policy to automatically move RPs to another tier.Key is Target Tier, defined in RecoveryPointTierType enum.Tiering policy specifies the criteria to move RP to the target tier. | object |


### GenericProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'GenericProtectionPolicy' (required) |
| fabricName | Name of this policy's fabric. | string |
| subProtectionPolicy | List of sub-protection policies which includes schedule and retention | SubProtectionPolicy[] |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |


### MabProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'MAB' (required) |
| retentionPolicy | Retention policy details. | RetentionPolicy |
| schedulePolicy | Backup schedule of backup policy. | SchedulePolicy |
## Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
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
    eTag = "string"
  })
}

```

### vaults/backupResourceGuardProxies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
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
## Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-01"
  name = "vaultstorageconfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      crossRegionRestoreFlag = bool
      dedupState = "string"
      storageModelType = "string"
      storageType = "string"
      storageTypeState = "string"
      xcoolState = "string"
    }
    eTag = "string"
  })
}

```

### vaults/backupstorageconfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'vaultstorageconfig' |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | BackupResourceConfigResource properties | BackupResourceConfig |


### BackupResourceConfig

| Name | Description | Value |
|-|-|-|
| crossRegionRestoreFlag | Opt in details of Cross Region Restore feature. | bool |
| dedupState | Vault Dedup state | 'Disabled''Enabled''Invalid' |
| storageModelType | Storage type | 'GeoRedundant''Invalid''LocallyRedundant''ReadAccessGeoZoneRedundant''ZoneRedundant' |
| storageType | Storage type. | 'GeoRedundant''Invalid''LocallyRedundant''ReadAccessGeoZoneRedundant''ZoneRedundant' |
| storageTypeState | Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. | 'Invalid''Locked''Unlocked' |
| xcoolState | Vault x-cool state | 'Disabled''Enabled''Invalid' |
## Microsoft.RecoveryServices/vaults/certificates@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/certificates@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authType = "string"
    }
  })
}

```

### vaults/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Raw certificate data. | RawCertificateData |


### RawCertificateData

| Name | Description | Value |
|-|-|-|
| authType | Specifies the authentication type. | 'AAD''ACS''AccessControlService''AzureActiveDirectory''Invalid' |
| certificate | The base64 encoded certificate raw data string | For Bicep, you can use theany()function. |
## Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01"
  name = "vaultExtendedInfo"
  parent_id = "string"
  body = jsonencode({
    properties = {
      algorithm = "string"
      encryptionKey = "string"
      encryptionKeyThumbprint = "string"
      integrityKey = "string"
    }
    etag = "string"
  })
}

```

### vaults/extendedInformation

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'vaultExtendedInfo' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| etag | Optional ETag. | string |
| properties | Vault extended information. | VaultExtendedInfo |


### VaultExtendedInfo

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm for Vault ExtendedInfo | string |
| encryptionKey | Encryption key. | string |
| encryptionKeyThumbprint | Encryption key thumbprint. | string |
| integrityKey | Integrity key. | string |
## Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    eTag = "string"
  })
}

```

### vaults/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | PrivateEndpointConnectionResource properties | PrivateEndpointConnection |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| groupIds | Group Ids for the Private Endpoint | String array containing any of:'AzureBackup''AzureBackup_secondary''AzureSiteRecovery' |
| privateEndpoint | Gets or sets private endpoint associated with the private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | Gets or sets private link service connection state | PrivateLinkServiceConnectionState |
| provisioningState | Gets or sets provisioning state of the private endpoint connection | 'Deleting''Failed''Pending''Succeeded' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | Gets or sets id | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionRequired | Gets or sets actions required | string |
| description | Gets or sets description | string |
| status | Gets or sets the status | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.RecoveryServices/vaults/replicationAlertSettings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationAlertSettings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customEmailAddresses = [
        "string"
      ]
      locale = "string"
      sendToOwners = "string"
    }
  })
}

```

### vaults/replicationAlertSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | The properties of a configure alert request. | ConfigureAlertRequestPropertiesOrAlertProperties |


### ConfigureAlertRequestPropertiesOrAlertProperties

| Name | Description | Value |
|-|-|-|
| customEmailAddresses | The custom email address for sending emails. | string[] |
| locale | The locale for the email notification. | string |
| sendToOwners | A value indicating whether to send email to subscription administrator. | string |
## Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customDetails = {
        instanceType = "string"
        // For remaining properties, see FabricSpecificCreationInputOrFabricSpecificDetails objects
      }
    }
  })
}

```

### vaults/replicationFabrics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Fabric creation input. | FabricCreationInputPropertiesOrFabricProperties |


### FabricCreationInputPropertiesOrFabricProperties

| Name | Description | Value |
|-|-|-|
| customDetails | Fabric provider specific creation input. | FabricSpecificCreationInputOrFabricSpecificDetails |


### FabricSpecificCreationInputOrFabricSpecificDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | AzureHyperVSiteInMageRcmVMMVMwareVMwareV2(required) |


### AzureFabricCreationInputOrAzureFabricSpecificDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'Azure' (required) |
| location | The Location. | string |


### HyperVSiteDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'HyperVSite' (required) |


### InMageRcmFabricCreationInputOrInMageRcmFabricSpecifi...

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'InMageRcm' (required) |
| physicalSiteId | The ARM Id of the physical site. | string (required) |
| sourceAgentIdentity | The identity provider input for source agent authentication. | IdentityProviderInput(required) |
| vmwareSiteId | The ARM Id of the VMware site. | string (required) |


### IdentityProviderInput

| Name | Description | Value |
|-|-|-|
| aadAuthority | The base authority for Azure Active Directory authentication. | string (required) |
| applicationId | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| audience | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| objectId | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| tenantId | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |


### VmmDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'VMM' (required) |


### VMwareDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'VMware' (required) |


### VMwareV2FabricCreationInputOrVMwareV2FabricSpecificD...

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'VMwareV2' (required) |
| migrationSolutionId | The ARM Id of the migration solution. | string (required) |
| physicalSiteId | The ARM Id of the physical site. | string |
| vmwareSiteId | The ARM Id of the VMware site. | string |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      fabricSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see FabricSpecificCreateNetworkMappingInput objects
      }
      recoveryFabricName = "string"
      recoveryNetworkId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationNetworks/replic...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: replicationNetworks |
| properties | Input properties for creating network mapping. | CreateNetworkMappingInputPropertiesOrNetworkMappingP...(required) |


### CreateNetworkMappingInputPropertiesOrNetworkMappingP...

| Name | Description | Value |
|-|-|-|
| fabricSpecificDetails | Fabric specific input properties. | FabricSpecificCreateNetworkMappingInput |
| recoveryFabricName | Recovery fabric Name. | string |
| recoveryNetworkId | Recovery network Id. | string (required) |


### FabricSpecificCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | AzureToAzureVmmToAzureVmmToVmm(required) |


### AzureToAzureCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The instance type. | 'AzureToAzure' (required) |
| primaryNetworkId | The primary azure vnet Id. | string (required) |


### VmmToAzureCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The instance type. | 'VmmToAzure' (required) |


### VmmToVmmCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The instance type. | 'VmmToVmm' (required) |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificInput = [
        {
          instanceType = "string"
          // For remaining properties, see ReplicationProviderSpecificContainerCreationInput objects
        }
      ]
    }
  })
}

```

### vaults/replicationFabrics/replicationProtectionConta...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
| properties | Create protection container input properties. | CreateProtectionContainerInputPropertiesOrProtection... |


### CreateProtectionContainerInputPropertiesOrProtection...

| Name | Description | Value |
|-|-|-|
| providerSpecificInput | Provider specific inputs for container creation. | ReplicationProviderSpecificContainerCreationInput[] |


### ReplicationProviderSpecificContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2AA2ACrossClusterMigrationVMwareCbt(required) |


### A2AContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |


### A2ACrossClusterMigrationContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2ACrossClusterMigration' (required) |


### VMwareCbtContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'VMwareCbt' (required) |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings objects
      }
    }
  })
}

```

### vaults/replicationFabrics/replicationProtectionConta...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationProtectionContainers |
| properties | Enable migration input properties. | EnableMigrationInputPropertiesOrMigrationItemPropert...(required) |


### EnableMigrationInputPropertiesOrMigrationItemPropert...

| Name | Description | Value |
|-|-|-|
| policyId | The policy Id. | string (required) |
| providerSpecificDetails | The provider specific details. | EnableMigrationProviderSpecificInputOrMigrationProvi...(required) |


### EnableMigrationProviderSpecificInputOrMigrationProvi...

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | VMwareCbt(required) |


### VMwareCbtEnableMigrationInputOrVMwareCbtMigrationDet...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'VMwareCbt' (required) |
| dataMoverRunAsAccountId | The data mover run as account Id. | string (required) |
| disksToInclude | The disks to include list. | VMwareCbtDiskInput[] (required) |
| licenseType | License type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| performAutoResync | A value indicating whether auto resync is to be done. | string |
| performSqlBulkRegistration | A value indicating whether bulk SQL RP registration to be done. | string |
| seedDiskTags | The tags for the seed disks. | object |
| snapshotRunAsAccountId | The snapshot run as account Id. | string (required) |
| sqlServerLicenseType | The SQL Server license type. | 'AHUB''NoLicenseType''NotSpecified''PAYG' |
| targetAvailabilitySetId | The target availability set ARM Id. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetBootDiagnosticsStorageAccountId | The target boot diagnostics storage account ARM Id. | string |
| targetDiskTags | The tags for the target disks. | object |
| targetNetworkId | The target network ARM Id. | string (required) |
| targetNicTags | The tags for the target NICs. | object |
| targetProximityPlacementGroupId | The target proximity placement group ARM Id. | string |
| targetResourceGroupId | The target resource group ARM Id. | string (required) |
| targetSubnetName | The target subnet name. | string |
| targetVmName | The target VM name. | string |
| targetVmSize | The target VM size. | string |
| targetVmTags | The target VM tags. | object |
| testNetworkId | The selected test network ARM Id. | string |
| testSubnetName | The selected test subnet name. | string |
| vmwareMachineId | The ARM Id of the VM discovered in VMware. | string (required) |


### VMwareCbtDiskInput

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| diskId | The disk Id. | string (required) |
| diskType | The disk type. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| isOSDisk | A value indicating whether the disk is the OS disk. | string (required) |
| logStorageAccountId | The log storage account ARM Id. | string (required) |
| logStorageAccountSasSecretName | The key vault secret name of the log storage account. | string (required) |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      protectableItemId = "string"
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings objects
      }
    }
  })
}

```

### vaults/replicationFabrics/replicationProtectionConta...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationProtectionContainers |
| properties | Enable protection input properties. | EnableProtectionInputPropertiesOrReplicationProtecte... |


### EnableProtectionInputPropertiesOrReplicationProtecte...

| Name | Description | Value |
|-|-|-|
| policyId | The Policy Id. | string |
| protectableItemId | The protectable item Id. | string |
| providerSpecificDetails | The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null. | EnableProtectionProviderSpecificInputOrReplicationPr... |


### EnableProtectionProviderSpecificInputOrReplicationPr...

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2AA2ACrossClusterMigrationHyperVReplica2012HyperVReplica2012R2HyperVReplicaAzureHyperVReplicaBaseReplicationDetailsInMageInMageAzureV2InMageRcmInMageRcmFailback(required) |


### A2AEnableProtectionInputOrA2AReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |
| diskEncryptionInfo | The recovery disk encryption information (for two pass flows). | DiskEncryptionInfo |
| fabricObjectId | The fabric specific object Id of the virtual machine. | string (required) |
| multiVmGroupId | The multi vm group id. | string |
| multiVmGroupName | The multi vm group name. | string |
| recoveryAvailabilitySetId | The recovery availability set Id. | string |
| recoveryAvailabilityZone | The recovery availability zone. | string |
| recoveryAzureNetworkId | The recovery Azure virtual network ARM id. | string |
| recoveryBootDiagStorageAccountId | The boot diagnostic storage account. | string |
| recoveryCapacityReservationGroupId | The recovery capacity reservation group Id. | string |
| recoveryCloudServiceId | The recovery cloud service Id. Valid for V1 scenarios. | string |
| recoveryContainerId | The recovery container Id. | string |
| recoveryExtendedLocation | The recovery extended location. | ExtendedLocation |
| recoveryProximityPlacementGroupId | The recovery proximity placement group Id. | string |
| recoveryResourceGroupId | The recovery resource group Id. Valid for V2 scenarios. | string |
| recoverySubnetName | The recovery subnet name. | string |
| recoveryVirtualMachineScaleSetId | The virtual machine scale set Id. | string |
| vmDisks | The list of vm disk details. | A2AVmDiskInputDetails[] |
| vmManagedDisks | The list of vm managed disk details. | A2AVmManagedDiskInputDetails[] |


### DiskEncryptionInfo

| Name | Description | Value |
|-|-|-|
| diskEncryptionKeyInfo | The recovery KeyVault reference for secret. | DiskEncryptionKeyInfo |
| keyEncryptionKeyInfo | The recovery KeyVault reference for key. | KeyEncryptionKeyInfo |


### DiskEncryptionKeyInfo

| Name | Description | Value |
|-|-|-|
| keyVaultResourceArmId | The KeyVault resource ARM id for secret. | string |
| secretIdentifier | The secret url / identifier. | string |


### KeyEncryptionKeyInfo

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The key URL / identifier. | string |
| keyVaultResourceArmId | The KeyVault resource ARM Id for key. | string |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string (required) |
| type | The extended location type. | 'EdgeZone' (required) |


### A2AVmDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskUri | The disk Uri. | string (required) |
| primaryStagingAzureStorageAccountId | The primary staging storage account Id. | string (required) |
| recoveryAzureStorageAccountId | The recovery VHD storage account Id. | string (required) |


### A2AVmManagedDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionInfo | The recovery disk encryption information (for one / single pass flows). | DiskEncryptionInfo |
| diskId | The disk Id. | string (required) |
| primaryStagingAzureStorageAccountId | The primary staging storage account Arm Id. | string (required) |
| recoveryDiskEncryptionSetId | The recovery disk encryption set Id. | string |
| recoveryReplicaDiskAccountType | The replica disk type. Its an optional value and will be same as source disk type if not user provided. | string |
| recoveryResourceGroupId | The target resource group Arm Id. | string (required) |
| recoveryTargetDiskAccountType | The target disk type after failover. Its an optional value and will be same as source disk type if not user provided. | string |


### A2ACrossClusterMigrationEnableProtectionInputOrA2ACr...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2ACrossClusterMigration' (required) |
| fabricObjectId | The fabric specific object Id of the virtual machine. | string |
| recoveryContainerId | The recovery container Id. | string |


### HyperVReplicaReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplica2012' (required) |


### HyperVReplicaBlueReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplica2012R2' (required) |


### HyperVReplicaAzureEnableProtectionInputOrHyperVRepli...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplicaAzure' (required) |
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| disksToInclude | The list of VHD Ids of disks to be protected. | string[] |
| disksToIncludeForManagedDisks | The disks to include list for managed disks. | HyperVReplicaAzureDiskInputDetails[] |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| enableRdpOnTargetOption | The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum. | string |
| hvHostVmId | The Hyper-V host VM Id. | string |
| licenseType | License type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| logStorageAccountId | The storage account to be used for logging during replication. | string |
| osType | The OS type associated with VM. | string |
| seedManagedDiskTags | The tags for the seed managed disks. | object |
| sqlServerLicenseType | The SQL Server license type. | 'AHUB''NoLicenseType''NotSpecified''PAYG' |
| targetAvailabilitySetId | The target availability set ARM Id for resource manager deployment. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetAzureNetworkId | The selected target Azure network Id. | string |
| targetAzureSubnetId | The selected target Azure subnet Id. | string |
| targetAzureV1ResourceGroupId | The Id of the target resource group (for classic deployment) in which the failover VM is to be created. | string |
| targetAzureV2ResourceGroupId | The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created. | string |
| targetAzureVmName | The target azure VM Name. | string |
| targetManagedDiskTags | The tags for the target managed disks. | object |
| targetNicTags | The tags for the target NICs. | object |
| targetProximityPlacementGroupId | The proximity placement group ARM Id. | string |
| targetStorageAccountId | The storage account Id. | string |
| targetVmSize | The target VM size. | string |
| targetVmTags | The target VM tags. | object |
| useManagedDisks | A value indicating whether managed disks should be used during failover. | string |
| useManagedDisksForReplication | A value indicating whether managed disks should be used during replication. | string |
| vhdId | The OS disk VHD id associated with VM. | string |
| vmName | The VM Name. | string |


### HyperVReplicaAzureDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM ID. | string |
| diskId | The DiskId. | string |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| logStorageAccountId | The LogStorageAccountId. | string |


### HyperVReplicaBaseReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplicaBaseReplicationDetails' (required) |


### InMageEnableProtectionInputOrInMageReplicationDetail...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMage' (required) |
| datastoreName | The target datastore name. | string |
| diskExclusionInput | The enable disk exclusion input. | InMageDiskExclusionInput |
| disksToInclude | The disks to include list. | string[] |
| masterTargetId | The Master Target Id. | string (required) |
| multiVmGroupId | The multi VM group Id. | string (required) |
| multiVmGroupName | The multi VM group name. | string (required) |
| processServerId | The Process Server Id. | string (required) |
| retentionDrive | The retention drive to use on the MT. | string (required) |
| runAsAccountId | The CS account Id. | string |
| vmFriendlyName | The VM Name. | string |


### InMageDiskExclusionInput

| Name | Description | Value |
|-|-|-|
| diskSignatureOptions | The guest disk signature based option for disk exclusion. | InMageDiskSignatureExclusionOptions[] |
| volumeOptions | The volume label based option for disk exclusion. | InMageVolumeExclusionOptions[] |


### InMageDiskSignatureExclusionOptions

| Name | Description | Value |
|-|-|-|
| diskSignature | The guest signature of disk to be excluded from replication. | string |


### InMageVolumeExclusionOptions

| Name | Description | Value |
|-|-|-|
| onlyExcludeIfSingleVolume | The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false. | string |
| volumeLabel | The volume label. The disk having any volume with this label will be excluded from replication. | string |


### InMageAzureV2EnableProtectionInputOrInMageAzureV2Rep...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageAzureV2' (required) |
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| disksToInclude | The disks to include list. | InMageAzureV2DiskInputDetails[] |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| enableRdpOnTargetOption | The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum. | string |
| licenseType | License type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| logStorageAccountId | The storage account to be used for logging during replication. | string |
| masterTargetId | The Master target Id. | string |
| multiVmGroupId | The multi VM group Id. | string |
| multiVmGroupName | The multi VM group name. | string |
| processServerId | The Process Server Id. | string |
| runAsAccountId | The CS account Id. | string |
| seedManagedDiskTags | The tags for the seed managed disks. | object |
| sqlServerLicenseType | The SQL Server license type. | 'AHUB''NoLicenseType''NotSpecified''PAYG' |
| storageAccountId | The storage account Id. | string |
| targetAvailabilitySetId | The target availability set ARM Id for resource manager deployment. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetAzureNetworkId | The selected target Azure network Id. | string |
| targetAzureSubnetId | The selected target Azure subnet Id. | string |
| targetAzureV1ResourceGroupId | The Id of the target resource group (for classic deployment) in which the failover VM is to be created. | string |
| targetAzureV2ResourceGroupId | The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created. | string |
| targetAzureVmName | The target azure VM Name. | string |
| targetManagedDiskTags | The tags for the target managed disks. | object |
| targetNicTags | The tags for the target NICs. | object |
| targetProximityPlacementGroupId | The proximity placement group ARM Id. | string |
| targetVmSize | The target VM size. | string |
| targetVmTags | The target VM tags. | object |


### InMageAzureV2DiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM ID. | string |
| diskId | The DiskId. | string |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| logStorageAccountId | The LogStorageAccountId. | string |


### InMageRcmEnableProtectionInputOrInMageRcmReplication...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageRcm' (required) |
| disksDefault | The default disk input. | InMageRcmDisksDefaultInput |
| disksToInclude | The disks to include list. | InMageRcmDiskInput[] |
| fabricDiscoveryMachineId | The ARM Id of discovered machine. | string (required) |
| licenseType | The license type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| multiVmGroupName | The multi VM group name. | string |
| processServerId | The process server Id. | string (required) |
| runAsAccountId | The run-as account Id. | string |
| targetAvailabilitySetId | The target availability set ARM Id. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetBootDiagnosticsStorageAccountId | The target boot diagnostics storage account ARM Id. | string |
| targetNetworkId | The selected target network ARM Id. | string |
| targetProximityPlacementGroupId | The target proximity placement group Id. | string |
| targetResourceGroupId | The target resource group ARM Id. | string (required) |
| targetSubnetName | The selected target subnet name. | string |
| targetVmName | The target VM name. | string |
| targetVmSize | The target VM size. | string |
| testNetworkId | The selected test network ARM Id. | string |
| testSubnetName | The selected test subnet name. | string |


### InMageRcmDisksDefaultInput

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| diskType | The disk type. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |
| logStorageAccountId | The log storage account ARM Id. | string (required) |


### InMageRcmDiskInput

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| diskId | The disk Id. | string (required) |
| diskType | The disk type. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |
| logStorageAccountId | The log storage account ARM Id. | string (required) |


### InMageRcmFailbackReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageRcmFailback' (required) |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      providerSpecificInput = {
        instanceType = "string"
        // For remaining properties, see ReplicationProviderSpecificContainerMappingInput objects
      }
      targetProtectionContainerId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationProtectionConta...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationProtectionContainers |
| properties | Configure protection input properties. | CreateProtectionContainerMappingInputPropertiesOrPro... |


### CreateProtectionContainerMappingInputPropertiesOrPro...

| Name | Description | Value |
|-|-|-|
| policyId | Applicable policy. | string |
| providerSpecificInput | Provider specific input for pairing. | ReplicationProviderSpecificContainerMappingInput |
| targetProtectionContainerId | The target unique protection container name. | string |


### ReplicationProviderSpecificContainerMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2AVMwareCbt(required) |


### A2AContainerMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |
| agentAutoUpdateStatus | A value indicating whether the auto update is enabled. | 'Disabled''Enabled' |
| automationAccountArmId | The automation account arm id. | string |
| automationAccountAuthenticationType | A value indicating the type authentication to use for automation Account. | 'RunAsAccount''SystemAssignedIdentity' |


### VMwareCbtContainerMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'VMwareCbt' (required) |
| keyVaultId | The target key vault ARM Id. | string |
| keyVaultUri | The target key vault URL. | string |
| serviceBusConnectionStringSecretName | The secret name of the service bus connection string. | string |
| storageAccountId | The storage account ARM Id. | string (required) |
| storageAccountSasSecretName | The secret name of the storage account. | string |
| targetLocation | The target location. | string (required) |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
      biosId = "string"
      dataPlaneAuthenticationIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
      machineId = "string"
      machineName = "string"
      resourceAccessIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
    }
  })
}

```

### vaults/replicationFabrics/replicationRecoveryService...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
| properties | The properties of an add provider request. | AddRecoveryServicesProviderInputPropertiesOrRecovery...(required) |


### AddRecoveryServicesProviderInputPropertiesOrRecovery...

| Name | Description | Value |
|-|-|-|
| authenticationIdentityInput | The identity provider input for DRA authentication. | IdentityProviderInput(required) |
| biosId | The Bios Id of the machine. | string |
| dataPlaneAuthenticationIdentityInput | The identity provider input for data plane authentication. | IdentityProviderInput |
| machineId | The Id of the machine where the provider is getting added. | string |
| machineName | The name of the machine where the provider is getting added. | string (required) |
| resourceAccessIdentityInput | The identity provider input for resource access. | IdentityProviderInput(required) |


### IdentityProviderInput

| Name | Description | Value |
|-|-|-|
| aadAuthority | The base authority for Azure Active Directory authentication. | string (required) |
| applicationId | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| audience | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| objectId | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| tenantId | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      targetStorageClassificationId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationStorageClassifi...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: replicationStorageClassifications |
| properties | Storage mapping input properties. | StorageMappingInputPropertiesOrStorageClassification... |


### StorageMappingInputPropertiesOrStorageClassification...

| Name | Description | Value |
|-|-|-|
| targetStorageClassificationId | The ID of the storage object. | string |
## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      friendlyName = "string"
      ipAddress = "string"
      port = "string"
      processServerId = "string"
      runAsAccountId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationvCenters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
| properties | The properties of an add vCenter request. | AddVCenterRequestPropertiesOrVCenterProperties |


### AddVCenterRequestPropertiesOrVCenterProperties

| Name | Description | Value |
|-|-|-|
| friendlyName | The friendly name of the vCenter. | string |
| ipAddress | The IP address of the vCenter to be discovered. | string |
| port | The port number for discovery. | string |
| processServerId | The process server Id from where the discovery is orchestrated. | string |
| runAsAccountId | The account Id which has privileges to discover the vCenter. | string |
## Microsoft.RecoveryServices/vaults/replicationPolicies@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationPolicies@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificInput = {
        instanceType = "string"
        // For remaining properties, see PolicyProviderSpecificInput objects
      }
    }
  })
}

```

### vaults/replicationPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Policy creation properties. | CreatePolicyInputPropertiesOrPolicyProperties |


### CreatePolicyInputPropertiesOrPolicyProperties

| Name | Description | Value |
|-|-|-|
| providerSpecificInput | The ReplicationProviderSettings. | PolicyProviderSpecificInput |


### PolicyProviderSpecificInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2AA2ACrossClusterMigrationHyperVReplica2012R2HyperVReplicaAzureInMageInMageAzureV2InMageRcmInMageRcmFailbackVMwareCbt(required) |


### A2APolicyCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |
| multiVmSyncStatus | A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'. | 'Disable''Enable' (required) |
| recoveryPointHistory | The duration in minutes until which the recovery points need to be stored. | int |


### A2ACrossClusterMigrationPolicyCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2ACrossClusterMigration' (required) |


### HyperVReplicaBluePolicyInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplica2012R2' (required) |
| allowedAuthenticationType | A value indicating the authentication type. | int |
| applicationConsistentSnapshotFrequencyInHours | A value indicating the application consistent frequency. | int |
| compression | A value indicating whether compression has to be enabled. | string |
| initialReplicationMethod | A value indicating whether IR is online. | string |
| offlineReplicationExportPath | A value indicating the offline IR export path. | string |
| offlineReplicationImportPath | A value indicating the offline IR import path. | string |
| onlineReplicationStartTime | A value indicating the online IR start time. | string |
| recoveryPoints | A value indicating the number of recovery points. | int |
| replicaDeletion | A value indicating whether the VM has to be auto deleted. | string |
| replicationFrequencyInSeconds | A value indicating the replication interval. | int |
| replicationPort | A value indicating the recovery HTTPS port. | int |


### HyperVReplicaAzurePolicyInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplicaAzure' (required) |
| applicationConsistentSnapshotFrequencyInHours | The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM. | int |
| onlineReplicationStartTime | The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately. | string |
| recoveryPointHistoryDuration | The duration (in hours) to which point the recovery history needs to be maintained. | int |
| replicationInterval | The replication interval. | int |
| storageAccounts | The list of storage accounts to which the VMs in the primary cloud can replicate to. | string[] |


### InMagePolicyInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMage' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| multiVmSyncStatus | A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'. | 'Disable''Enable' (required) |
| recoveryPointHistory | The duration in minutes until which the recovery points need to be stored. | int |
| recoveryPointThresholdInMinutes | The recovery point threshold in minutes. | int |


### InMageAzureV2PolicyInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageAzureV2' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |
| multiVmSyncStatus | A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'. | 'Disable''Enable' (required) |
| recoveryPointHistory | The duration in minutes until which the recovery points need to be stored. | int |
| recoveryPointThresholdInMinutes | The recovery point threshold in minutes. | int |


### InMageRcmPolicyCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageRcm' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |
| enableMultiVmSync | A value indicating whether multi-VM sync has to be enabled. | string |
| recoveryPointHistoryInMinutes | The duration in minutes until which the recovery points need to be stored. | int |


### InMageRcmFailbackPolicyCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageRcmFailback' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |


### VMwareCbtPolicyCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'VMwareCbt' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |
| recoveryPointHistoryInMinutes | The duration in minutes until which the recovery points need to be stored. | int |
## Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings objects
      }
    }
  })
}

```

### vaults/replicationProtectionIntents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Create protection intent input properties. | CreateProtectionIntentPropertiesOrReplicationProtect... |


### CreateProtectionIntentPropertiesOrReplicationProtect...

| Name | Description | Value |
|-|-|-|
| providerSpecificDetails | The ReplicationProviderInput. For A2A provider, it will be A2ACreateProtectionIntentInput object. | CreateProtectionIntentProviderSpecificDetailsOrRepli... |


### CreateProtectionIntentProviderSpecificDetailsOrRepli...

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2A(required) |


### A2ACreateProtectionIntentInputOrA2AReplicationIntent...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |
| agentAutoUpdateStatus | A value indicating whether the auto update is enabled. | 'Disabled''Enabled' |
| automationAccountArmId | The automation account arm id. | string |
| automationAccountAuthenticationType | A value indicating the authentication type for automation account. The default value is "RunAsAccount". | 'RunAsAccount''SystemAssignedIdentity' |
| autoProtectionOfDataDisk | A value indicating whether the auto protection is enabled. | 'Disabled''Enabled' |
| diskEncryptionInfo | The recovery disk encryption information (for two pass flows). | DiskEncryptionInfo |
| fabricObjectId | The fabric specific object Id of the virtual machine. | string (required) |
| multiVmGroupId | The multi vm group id. | string |
| multiVmGroupName | The multi vm group name. | string |
| primaryLocation | The primary location for the virtual machine. | string (required) |
| primaryStagingStorageAccountCustomInput | The primary staging storage account input. | StorageAccountCustomDetails |
| protectionProfileCustomInput | The protection profile custom inputs. | ProtectionProfileCustomDetails |
| recoveryAvailabilitySetCustomInput | The recovery availability set input. | RecoveryAvailabilitySetCustomDetails |
| recoveryAvailabilityType | The recovery availability type of the virtual machine. | 'AvailabilitySet''AvailabilityZone''Single' (required) |
| recoveryAvailabilityZone | The recovery availability zone. | string |
| recoveryBootDiagStorageAccount | The boot diagnostic storage account. | StorageAccountCustomDetails |
| recoveryLocation | The recovery location for the virtual machine. | string (required) |
| recoveryProximityPlacementGroupCustomInput | The recovery proximity placement group custom input. | RecoveryProximityPlacementGroupCustomDetails |
| recoveryResourceGroupId | The recovery resource group Id. Valid for V2 scenarios. | string (required) |
| recoverySubscriptionId | The recovery subscription Id of the virtual machine. | string (required) |
| recoveryVirtualNetworkCustomInput | The recovery virtual network input. | RecoveryVirtualNetworkCustomDetails |
| vmDisks | The list of vm disk inputs. | A2AProtectionIntentDiskInputDetails[] |
| vmManagedDisks | The list of vm managed disk inputs. | A2AProtectionIntentManagedDiskInputDetails[] |


### DiskEncryptionInfo

| Name | Description | Value |
|-|-|-|
| diskEncryptionKeyInfo | The recovery KeyVault reference for secret. | DiskEncryptionKeyInfo |
| keyEncryptionKeyInfo | The recovery KeyVault reference for key. | KeyEncryptionKeyInfo |


### DiskEncryptionKeyInfo

| Name | Description | Value |
|-|-|-|
| keyVaultResourceArmId | The KeyVault resource ARM id for secret. | string |
| secretIdentifier | The secret url / identifier. | string |


### KeyEncryptionKeyInfo

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The key URL / identifier. | string |
| keyVaultResourceArmId | The KeyVault resource ARM Id for key. | string |


### StorageAccountCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingStorageAccount

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| azureStorageAccountId | The storage account Arm Id. Throw error, if resource does not exists. | string (required) |


### ProtectionProfileCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | ExistingNew(required) |


### ExistingProtectionProfile

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| protectionProfileId | The protection profile Arm Id. Throw error, if resource does not exists. | string (required) |


### NewProtectionProfile

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'New' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |
| multiVmSyncStatus | A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'. | 'Disable''Enable' (required) |
| policyName | The protection profile input. | string (required) |
| recoveryPointHistory | The duration in minutes until which the recovery points need to be stored. | int |


### RecoveryAvailabilitySetCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingRecoveryAvailabilitySet

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoveryAvailabilitySetId | The recovery availability set Id. Will throw error, if resource does not exist. | string |


### RecoveryProximityPlacementGroupCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingRecoveryProximityPlacementGroup

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoveryProximityPlacementGroupId | The recovery proximity placement group Id. Will throw error, if resource does not exist. | string |


### RecoveryVirtualNetworkCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | ExistingNew(required) |


### ExistingRecoveryVirtualNetwork

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoverySubnetName | The recovery subnet name. | string |
| recoveryVirtualNetworkId | The recovery virtual network Id. Will throw error, if resource does not exist. | string (required) |


### NewRecoveryVirtualNetwork

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'New' (required) |
| recoveryVirtualNetworkName | The recovery virtual network name. | string |
| recoveryVirtualNetworkResourceGroupName | The name of the resource group to be used to create the recovery virtual network. If absent, target network would be created in the same resource group as target VM. | string |


### A2AProtectionIntentDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskUri | The disk Uri. | string (required) |
| primaryStagingStorageAccountCustomInput | The primary staging storage account input. | StorageAccountCustomDetails |
| recoveryAzureStorageAccountCustomInput | The recovery VHD storage account input. | StorageAccountCustomDetails |


### A2AProtectionIntentManagedDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionInfo | The recovery disk encryption information (for one / single pass flows). | DiskEncryptionInfo |
| diskId | The disk Id. | string (required) |
| primaryStagingStorageAccountCustomInput | The primary staging storage account input. | StorageAccountCustomDetails |
| recoveryDiskEncryptionSetId | The recovery disk encryption set Id. | string |
| recoveryReplicaDiskAccountType | The replica disk type. Its an optional value and will be same as source disk type if not user provided. | string |
| recoveryResourceGroupCustomInput | The recovery resource group input. | RecoveryResourceGroupCustomDetails |
| recoveryTargetDiskAccountType | The target disk type after failover. Its an optional value and will be same as source disk type if not user provided. | string |


### RecoveryResourceGroupCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingRecoveryResourceGroup

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoveryResourceGroupId | The recovery resource group Id. Valid for V2 scenarios. | string |
## Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      failoverDeploymentModel = "string"
      groups = [
        {
          endGroupActions = [
            {
              actionName = "string"
              customDetails = {
                instanceType = "string"
                // For remaining properties, see RecoveryPlanActionDetails objects
              }
              failoverDirections = [
                "string"
              ]
              failoverTypes = [
                "string"
              ]
            }
          ]
          groupType = "string"
          replicationProtectedItems = [
            {
              id = "string"
              virtualMachineId = "string"
            }
          ]
          startGroupActions = [
            {
              actionName = "string"
              customDetails = {
                instanceType = "string"
                // For remaining properties, see RecoveryPlanActionDetails objects
              }
              failoverDirections = [
                "string"
              ]
              failoverTypes = [
                "string"
              ]
            }
          ]
        }
      ]
      primaryFabricId = "string"
      providerSpecificInput = [
        {
          instanceType = "string"
          // For remaining properties, see RecoveryPlanProviderSpecificInput objects
        }
      ]
      recoveryFabricId = "string"
    }
  })
}

```

### vaults/replicationRecoveryPlans

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Recovery plan creation properties. | CreateRecoveryPlanInputPropertiesOrRecoveryPlanPrope...(required) |


### CreateRecoveryPlanInputPropertiesOrRecoveryPlanPrope...

| Name | Description | Value |
|-|-|-|
| failoverDeploymentModel | The failover deployment model. | 'Classic''NotApplicable''ResourceManager' |
| groups | The recovery plan groups. | RecoveryPlanGroup[] (required) |
| primaryFabricId | The primary fabric Id. | string (required) |
| providerSpecificInput | The provider specific input. | RecoveryPlanProviderSpecificInput[] |
| recoveryFabricId | The recovery fabric Id. | string (required) |


### RecoveryPlanGroup

| Name | Description | Value |
|-|-|-|
| endGroupActions | The end group actions. | RecoveryPlanAction[] |
| groupType | The group type. | 'Boot''Failover''Shutdown' (required) |
| replicationProtectedItems | The list of protected items. | RecoveryPlanProtectedItem[] |
| startGroupActions | The start group actions. | RecoveryPlanAction[] |


### RecoveryPlanAction

| Name | Description | Value |
|-|-|-|
| actionName | The action name. | string (required) |
| customDetails | The custom details. | RecoveryPlanActionDetails(required) |
| failoverDirections | The list of failover directions. | String array containing any of:'PrimaryToRecovery''RecoveryToPrimary' (required) |
| failoverTypes | The list of failover types. | String array containing any of:'CancelFailover''ChangePit''Commit''CompleteMigration''DisableProtection''Failback''FinalizeFailback''PlannedFailover''RepairReplication''ReverseReplicate''SwitchProtection''TestFailover''TestFailoverCleanup''UnplannedFailover' (required) |


### RecoveryPlanActionDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | AutomationRunbookActionDetailsManualActionDetailsScriptActionDetails(required) |


### RecoveryPlanAutomationRunbookActionDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values). | 'AutomationRunbookActionDetails' (required) |
| fabricLocation | The fabric location. | 'Primary''Recovery' (required) |
| runbookId | The runbook ARM Id. | string |
| timeout | The runbook timeout. | string |


### RecoveryPlanManualActionDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values). | 'ManualActionDetails' (required) |
| description | The manual action description. | string |


### RecoveryPlanScriptActionDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values). | 'ScriptActionDetails' (required) |
| fabricLocation | The fabric location. | 'Primary''Recovery' (required) |
| path | The script path. | string (required) |
| timeout | The script timeout. | string |


### RecoveryPlanProtectedItem

| Name | Description | Value |
|-|-|-|
| id | The ARM Id of the recovery plan protected item. | string |
| virtualMachineId | The virtual machine Id. | string |


### RecoveryPlanProviderSpecificInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2A(required) |


### RecoveryPlanA2AInput

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the Instance type. | 'A2A' (required) |
| primaryExtendedLocation | The primary extended location. | ExtendedLocation |
| primaryZone | The primary zone. | string |
| recoveryExtendedLocation | The recovery extended location. | ExtendedLocation |
| recoveryZone | The recovery zone. | string |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string (required) |
| type | The extended location type. | 'EdgeZone' (required) |
## Microsoft.RecoveryServices/vaults/replicationVaultSettings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationVaultSettings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      migrationSolutionId = "string"
      vmwareToAzureProviderType = "string"
    }
  })
}

```

### vaults/replicationVaultSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Vault setting creation input properties. | VaultSettingCreationInputPropertiesOrVaultSettingPro...(required) |


### VaultSettingCreationInputPropertiesOrVaultSettingPro...

| Name | Description | Value |
|-|-|-|
| migrationSolutionId | The migration solution Id. | string |
| vmwareToAzureProviderType | VMware to Azure provider type. | string |
