```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      days = [
        "string"
      ]
      rateInMbps = int
      start = "string"
      stop = "string"
    }
  })
}

```

### dataBoxEdgeDevices/bandwidthSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The properties of the bandwidth schedule. | BandwidthScheduleProperties(required) |


### BandwidthScheduleProperties

| Name | Description | Value |
|-|-|-|
| days | The days of the week when this schedule is applicable. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
| rateInMbps | The bandwidth rate in Mbps. | int (required) |
| start | The start time of the schedule in UTC. | string (required) |
| stop | The stop time of the schedule in UTC. | string (required) |


