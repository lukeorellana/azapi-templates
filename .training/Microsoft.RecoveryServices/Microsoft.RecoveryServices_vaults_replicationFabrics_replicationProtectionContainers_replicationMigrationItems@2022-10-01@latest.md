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


