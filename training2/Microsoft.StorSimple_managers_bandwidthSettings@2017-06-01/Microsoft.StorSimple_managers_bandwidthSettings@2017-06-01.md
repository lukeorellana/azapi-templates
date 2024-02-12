```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      schedules = [
        {
          days = [
            "string"
          ]
          rateInMbps = int
          start = {
            hours = int
            minutes = int
            seconds = int
          }
          stop = {
            hours = int
            minutes = int
            seconds = int
          }
        }
      ]
    }
    kind = "Series8000"
  })
}

```

### managers/bandwidthSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The properties of the bandwidth setting. | BandwidthRateSettingProperties(required) |


### BandwidthRateSettingProperties

| Name | Description | Value |
|-|-|-|
| schedules | The schedules. | BandwidthSchedule[] (required) |


### BandwidthSchedule

| Name | Description | Value |
|-|-|-|
| days | The days of the week when this schedule is applicable. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
| rateInMbps | The rate in Mbps. | int (required) |
| start | The start time of the schedule. | Time(required) |
| stop | The stop time of the schedule. | Time(required) |


### Time

| Name | Description | Value |
|-|-|-|
| hours | The hour. | int (required) |
| minutes | The minute. | int (required) |
| seconds | The second. | int (required) |


