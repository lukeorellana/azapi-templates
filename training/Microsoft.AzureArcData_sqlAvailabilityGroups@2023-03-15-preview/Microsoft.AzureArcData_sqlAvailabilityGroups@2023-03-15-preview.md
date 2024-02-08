```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview"
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
      basicFeatures = bool
      clusterTypeDesc = "string"
      collectionTimestamp = "string"
      dbFailover = bool
      dtcSupport = bool
      instanceName = "string"
      isContained = bool
      isDistributed = bool
      requiredSynchronizedSecondariesCommit = int
      version = int
    }
  })
}

```

### sqlAvailabilityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | null | SqlAvailabilityGroupProperties |


### SqlAvailabilityGroupProperties

| Name | Description | Value |
|-|-|-|
| availabilityGroupId | Id GUID of the availability group. | string (required) |
| availabilityGroupName | The name of the availability group. | string (required) |
| basicFeatures | SQL Server basic availability group. | bool |
| clusterTypeDesc | SQL Server availability group cluster type description | string |
| collectionTimestamp | Timestamp for when the data was collected from the client machine. | string |
| dbFailover | SQL Server availability group failover for database health conditions. | bool |
| dtcSupport | SQL Server availability group DTC support enabled. | bool |
| instanceName | The name of the instance name which availability group primary is on. | string |
| isContained | SQL Server availability group contained system databases. | bool |
| isDistributed | SQL Server distributed availability group. | bool |
| requiredSynchronizedSecondariesCommit | Availability group required the number of synchronized secondary to commit. | int |
| version | SQL Server availability group current version. | int |


