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


