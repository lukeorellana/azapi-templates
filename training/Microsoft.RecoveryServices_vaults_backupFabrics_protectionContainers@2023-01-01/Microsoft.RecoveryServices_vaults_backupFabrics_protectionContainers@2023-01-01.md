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


