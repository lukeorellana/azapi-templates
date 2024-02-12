```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailySchedule = {
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      enabled = bool
      hourlySchedule = {
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      monthlySchedule = {
        daysOfMonth = "string"
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      weeklySchedule = {
        day = "string"
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
    }
  })
}

```

### netAppAccounts/snapshotPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Snapshot policy Properties | SnapshotPolicyProperties(required) |


### SnapshotPolicyProperties

| Name | Description | Value |
|-|-|-|
| dailySchedule | Schedule for daily snapshots | DailySchedule |
| enabled | The property to decide policy is enabled or not | bool |
| hourlySchedule | Schedule for hourly snapshots | HourlySchedule |
| monthlySchedule | Schedule for monthly snapshots | MonthlySchedule |
| weeklySchedule | Schedule for weekly snapshots | WeeklySchedule |


### DailySchedule

| Name | Description | Value |
|-|-|-|
| hour | Indicates which hour in UTC timezone a snapshot should be taken | int |
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Daily snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


### HourlySchedule

| Name | Description | Value |
|-|-|-|
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Hourly snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


### MonthlySchedule

| Name | Description | Value |
|-|-|-|
| daysOfMonth | Indicates which days of the month snapshot should be taken. A comma delimited string. | string |
| hour | Indicates which hour in UTC timezone a snapshot should be taken | int |
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Monthly snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


### WeeklySchedule

| Name | Description | Value |
|-|-|-|
| day | Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english | string |
| hour | Indicates which hour in UTC timezone a snapshot should be taken | int |
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Weekly snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


