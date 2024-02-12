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


