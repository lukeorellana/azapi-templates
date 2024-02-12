```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      groupDatabaseId = "string"
      value = [
        {
          databaseStateDesc = "string"
          isCommitParticipant = bool
          isLocal = bool
          isPrimaryReplica = bool
          isSuspended = bool
          replicaName = "string"
          suspendReasonDesc = "string"
          synchronizationHealthDesc = "string"
          synchronizationStateDesc = "string"
        }
      ]
    }
  })
}

```

### sqlAvailabilityGroups/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlAvailabilityGroups |
| properties | Properties of Arc Sql Availability Group Multiple Database Replica | SqlAvailabilityGroupMultiDatabaseReplicaResourceProp...(required) |


### SqlAvailabilityGroupMultiDatabaseReplicaResourceProp...

| Name | Description | Value |
|-|-|-|
| groupDatabaseId | ID GUID of the database for availability group. | string |
| value | Array of  Arc Sql Availability Group Database Replicas. | SqlAvailabilityGroupDatabaseReplicaResourcePropertie...[] |


### SqlAvailabilityGroupDatabaseReplicaResourcePropertie...

| Name | Description | Value |
|-|-|-|
| databaseStateDesc | Description of the database state of the availability replica. | string |
| isCommitParticipant | Whether this replica is transaction committer. | bool |
| isLocal | Whether the availability database is local. | bool |
| isPrimaryReplica | Returns 1 if the replica is primary, or 0 if it is a secondary replica. | bool |
| isSuspended | Whether this data movement is suspended. | bool |
| replicaName | the database replica name. | string |
| suspendReasonDesc | Description of the database suspended state reason. | string |
| synchronizationHealthDesc | Description of the health of database. | string |
| synchronizationStateDesc | Description of the data-movement state. | string |


