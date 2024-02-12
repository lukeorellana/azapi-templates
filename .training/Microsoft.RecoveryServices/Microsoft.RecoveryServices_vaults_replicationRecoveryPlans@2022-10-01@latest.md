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


