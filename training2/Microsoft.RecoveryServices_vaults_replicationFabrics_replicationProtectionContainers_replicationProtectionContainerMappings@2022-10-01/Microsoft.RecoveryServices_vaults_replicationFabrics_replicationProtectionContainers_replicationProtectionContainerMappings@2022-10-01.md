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


