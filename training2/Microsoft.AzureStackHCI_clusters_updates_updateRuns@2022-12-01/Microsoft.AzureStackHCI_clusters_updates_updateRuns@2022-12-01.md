```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      duration = "string"
      lastUpdatedTime = "string"
      progress = {
        description = "string"
        endTimeUtc = "string"
        errorMessage = "string"
        lastUpdatedTimeUtc = "string"
        name = "string"
        startTimeUtc = "string"
        status = "string"
        steps = [
          {
      }
      state = "string"
      timeStarted = "string"
    }
  })
}

```

### clusters/updates/updateRuns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:updates |
| properties | Describes Update Run Properties. | UpdateRunProperties |


### UpdateRunProperties

| Name | Description | Value |
|-|-|-|
| duration | Duration of the update run. | string |
| lastUpdatedTime | Timestamp of the most recently completed step in the update run. | string |
| progress | Progress representation of the update run steps. | Step |
| state | State of the update run. | 'Failed''InProgress''Succeeded''Unknown' |
| timeStarted | Timestamp of the update run was started. | string |


### Step

| Name | Description | Value |
|-|-|-|
| description | More detailed description of the step. | string |
| endTimeUtc | When the step reached a terminal state. | string |
| errorMessage | Error message, specified if the step is in a failed state. | string |
| lastUpdatedTimeUtc | Completion time of this step or the last completed sub-step. | string |
| name | Name of the step. | string |
| startTimeUtc | When the step started, or empty if it has not started executing. | string |
| status | Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'. | string |
| steps | Recursive model for child steps of this step. | Step[] |


