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


