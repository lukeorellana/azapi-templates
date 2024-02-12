```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageCache/amlFilesystems@2023-05-01"
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
      encryptionSettings = {
        keyEncryptionKey = {
          keyUrl = "string"
          sourceVault = {
            id = "string"
          }
        }
      }
      filesystemSubnet = "string"
      hsm = {
        settings = {
          container = "string"
          importPrefix = "string"
          loggingContainer = "string"
        }
      }
      maintenanceWindow = {
        dayOfWeek = "string"
        timeOfDayUTC = "string"
      }
      storageCapacityTiB = int
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
    }
  })
}

```

### amlFilesystems

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU for the resource. | SkuName |
| identity | The managed identity used by the AML file system, if configured. | AmlFilesystemIdentity |
| properties | Properties of the AML file system. | AmlFilesystemProperties |
| zones | Availability zones for resources. This field should only contain a single element in the array. | string[] |


### AmlFilesystemIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. | 'None''UserAssigned' |
| userAssignedIdentities | A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary. | object |


### AmlFilesystemProperties

| Name | Description | Value |
|-|-|-|
| encryptionSettings | Specifies encryption settings of the AML file system. | AmlFilesystemEncryptionSettings |
| filesystemSubnet | Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space. | string (required) |
| hsm | Hydration and archive settings and status | AmlFilesystemPropertiesHsm |
| maintenanceWindow | Start time of a 30-minute weekly maintenance window. | AmlFilesystemPropertiesMaintenanceWindow(required) |
| storageCapacityTiB | The size of the AML file system, in TiB. This might be rounded up. | int (required) |


### AmlFilesystemEncryptionSettings

| Name | Description | Value |
|-|-|-|
| keyEncryptionKey | Specifies the location of the encryption key in Key Vault. | KeyVaultKeyReference |


### KeyVaultKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | The URL referencing a key encryption key in key vault. | string (required) |
| sourceVault | Describes a resource Id to source key vault. | KeyVaultKeyReferenceSourceVault(required) |


### KeyVaultKeyReferenceSourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### AmlFilesystemPropertiesHsm

| Name | Description | Value |
|-|-|-|
| settings | Specifies HSM settings of the AML file system. | AmlFilesystemHsmSettings |


### AmlFilesystemHsmSettings

| Name | Description | Value |
|-|-|-|
| container | Resource ID of storage container used for hydrating the namespace and archiving from the namespace. The resource provider must have permission to create SAS tokens on the storage account. | string (required) |
| importPrefix | Only blobs in the non-logging container that start with this path/prefix get hydrated into the cluster namespace. | string |
| loggingContainer | Resource ID of storage container used for logging events and errors.  Must be a separate container in the same storage account as the hydration and archive container. The resource provider must have permission to create SAS tokens on the storage account. | string (required) |


### AmlFilesystemPropertiesMaintenanceWindow

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week on which the maintenance window will occur. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| timeOfDayUTC | The time of day (in UTC) to start the maintenance window. | string |


### SkuName

| Name | Description | Value |
|-|-|-|
| name | SKU name for this resource. | string |


