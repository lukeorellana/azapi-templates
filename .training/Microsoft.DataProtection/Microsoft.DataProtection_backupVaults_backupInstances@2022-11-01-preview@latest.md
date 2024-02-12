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


