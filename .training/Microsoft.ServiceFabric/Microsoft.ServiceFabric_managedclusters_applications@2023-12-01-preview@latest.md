```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applications@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
        }
      ]
      parameters = {
        {customized property} = "string"
      }
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      version = "string"
    }
  })
}

```

### managedclusters/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedclusters |
| identity | Describes the managed identities for an Azure resource. | ManagedIdentity |
| properties | The application resource properties. | ApplicationResourceProperties |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity for the resource. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | UserAssignedIdentityMap |


### UserAssignedIdentityMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ApplicationResourceProperties

| Name | Description | Value |
|-|-|-|
| managedIdentities | List of user assigned identities for the application, each mapped to a friendly name. | ApplicationUserAssignedIdentity[] |
| parameters | List of application parameters with overridden values from their default values specified in the application manifest. | ApplicationParameterList |
| upgradePolicy | Describes the policy for a monitored application upgrade. | ApplicationUpgradePolicy |
| version | The version of the application type as defined in the application manifest.This name must be the full Arm Resource ID for the referenced application type version. | string |


### ApplicationUserAssignedIdentity

| Name | Description | Value |
|-|-|-|
| name | The friendly name of user assigned identity. | string (required) |
| principalId | The principal id of user assigned identity. | string (required) |


### ApplicationParameterList

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ApplicationUpgradePolicy

| Name | Description | Value |
|-|-|-|
| applicationHealthPolicy | Defines a health policy used to evaluate the health of an application or one of its children entities. | ApplicationHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| instanceCloseDelayDuration | Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description. | int |
| recreateApplication | Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed. | bool |
| rollingUpgradeMonitoringPolicy | The policy used for monitoring the application upgrade | RollingUpgradeMonitoringPolicy |
| upgradeMode | The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto. | 'Monitored''UnmonitoredAuto' |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | int |


### ApplicationHealthPolicy

| Name | Description | Value |
|-|-|-|
| considerWarningAsError | Indicates whether warnings are treated with the same severity as errors. | bool (required) |
| defaultServiceTypeHealthPolicy | The health policy used by default to evaluate the health of a service type. | ServiceTypeHealthPolicy |
| maxPercentUnhealthyDeployedApplications | The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero. | int (required) |
| serviceTypeHealthPolicyMap | The map with service type health policy per service type name. The map is empty by default. | ServiceTypeHealthPolicyMap |


### ServiceTypeHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentUnhealthyPartitionsPerService | The maximum allowed percentage of unhealthy partitions per service.The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.The computation rounds up to tolerate one failure on small numbers of partitions. | int (required) |
| maxPercentUnhealthyReplicasPerPartition | The maximum allowed percentage of unhealthy replicas per partition.The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.The computation rounds up to tolerate one failure on small numbers of replicas. | int (required) |
| maxPercentUnhealthyServices | The maximum allowed percentage of unhealthy services.The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.The computation rounds up to tolerate one failure on small numbers of services. | int (required) |


### ServiceTypeHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ServiceTypeHealthPolicy |


### RollingUpgradeMonitoringPolicy

| Name | Description | Value |
|-|-|-|
| failureAction | The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode. | 'Manual''Rollback' (required) |
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| healthCheckWaitDuration | The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| upgradeTimeout | The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |


