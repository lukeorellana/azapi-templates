```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityGroupId = "string"
      availabilityGroupName = "string"
      configure = {
        availabilityModeDesc = "string"
        backupPriority = int
        createDate = "string"
        endpointUrl = "string"
        failoverModeDesc = "string"
        modifyDate = "string"
        primaryRoleAllowConnectionsDesc = "string"
        readOnlyRoutingUrl = "string"
        readWriteRoutingUrl = "string"
        secondaryRoleAllowConnectionsDesc = "string"
        seedingModeDesc = "string"
        sessionTimeout = int
      }
      state = {
        availabilityGroupReplicaRole = "string"
        connectedStateDesc = "string"
        lastConnectErrorDescription = "string"
        lastConnectErrorTimestamp = "string"
        operationalStateDesc = "string"
        recoveryHealthDesc = "string"
        synchronizationHealthDesc = "string"
      }
    }
  })
}

```

### sqlServerInstances/sqlAvailabilityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlServerInstances |
| properties | Properties of Arc Sql Server availability group | SqlServerAvailabilityGroupResourceProperties(required) |


### SqlServerAvailabilityGroupResourceProperties

| Name | Description | Value |
|-|-|-|
| availabilityGroupId | ID GUID of the availability group. | string (required) |
| availabilityGroupName | the availability group name. | string |
| configure | null | AvailabilityGroupConfigure |
| state | null | AvailabilityGroupState |


### AvailabilityGroupConfigure

| Name | Description | Value |
|-|-|-|
| availabilityModeDesc | Availability Synchronization mode description of availability group replica. | string |
| backupPriority | Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group. | int |
| createDate | Date that the replica was created. | string |
| endpointUrl | Mirroring endpoint URL of availability group replica | string |
| failoverModeDesc | failover mode description of the availability group replica. | string |
| modifyDate | Date that the replica was modified. | string |
| primaryRoleAllowConnectionsDesc | Allowed the connections for primary role of the availability group replica. | string |
| readOnlyRoutingUrl | Connectivity endpoint (URL) of the read only availability replica. | string |
| readWriteRoutingUrl | Connectivity endpoint (URL) of the read write availability replica. | string |
| secondaryRoleAllowConnectionsDesc | Allowed the connections for secondary role of availability group replica. | string |
| seedingModeDesc | Describes seeding mode. | string |
| sessionTimeout | The time-out period of availability group session replica, in seconds. | int |


### AvailabilityGroupState

| Name | Description | Value |
|-|-|-|
| availabilityGroupReplicaRole | Role description of the availability group replica. | string |
| connectedStateDesc | Connected state description of the availability group replica. | string |
| lastConnectErrorDescription | Last connect error description of the availability group replica. | string |
| lastConnectErrorTimestamp | Last connect error time stamp of the availability group replica. | string |
| operationalStateDesc | Operation state description of the availability group replica | string |
| recoveryHealthDesc | Recovery health description of the availability group replica. | string |
| synchronizationHealthDesc | Synchronization health description of the availability group replica. | string |


