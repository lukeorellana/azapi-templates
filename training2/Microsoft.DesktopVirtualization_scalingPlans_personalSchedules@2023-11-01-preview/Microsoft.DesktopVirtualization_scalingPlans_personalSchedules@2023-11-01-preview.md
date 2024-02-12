```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      daysOfWeek = [
        "string"
      ]
      offPeakActionOnDisconnect = "string"
      offPeakActionOnLogoff = "string"
      offPeakMinutesToWaitOnDisconnect = int
      offPeakMinutesToWaitOnLogoff = int
      offPeakStartTime = {
        hour = int
        minute = int
      }
      offPeakStartVMOnConnect = "string"
      peakActionOnDisconnect = "string"
      peakActionOnLogoff = "string"
      peakMinutesToWaitOnDisconnect = int
      peakMinutesToWaitOnLogoff = int
      peakStartTime = {
        hour = int
        minute = int
      }
      peakStartVMOnConnect = "string"
      rampDownActionOnDisconnect = "string"
      rampDownActionOnLogoff = "string"
      rampDownMinutesToWaitOnDisconnect = int
      rampDownMinutesToWaitOnLogoff = int
      rampDownStartTime = {
        hour = int
        minute = int
      }
      rampDownStartVMOnConnect = "string"
      rampUpActionOnDisconnect = "string"
      rampUpActionOnLogoff = "string"
      rampUpAutoStartHosts = "string"
      rampUpMinutesToWaitOnDisconnect = int
      rampUpMinutesToWaitOnLogoff = int
      rampUpStartTime = {
        hour = int
        minute = int
      }
      rampUpStartVMOnConnect = "string"
    }
  })
}

```

### scalingPlans/personalSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:scalingPlans |
| properties | Detailed properties for ScalingPlanPersonalSchedule | ScalingPlanPersonalScheduleProperties(required) |


### ScalingPlanPersonalScheduleProperties

| Name | Description | Value |
|-|-|-|
| daysOfWeek | Set of days of the week on which this schedule is active. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| offPeakActionOnDisconnect | Action to be taken after a user disconnect during the off-peak period. | 'Deallocate''Hibernate''None' |
| offPeakActionOnLogoff | Action to be taken after a logoff during the off-peak period. | 'Deallocate''Hibernate''None' |
| offPeakMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period. | intConstraints:Min value = 0 |
| offPeakMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period. | intConstraints:Min value = 0 |
| offPeakStartTime | Starting time for off-peak period. | Time |
| offPeakStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the off-peak phase. | 'Disable''Enable' |
| peakActionOnDisconnect | Action to be taken after a user disconnect during the peak period. | 'Deallocate''Hibernate''None' |
| peakActionOnLogoff | Action to be taken after a logoff during the peak period. | 'Deallocate''Hibernate''None' |
| peakMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period. | intConstraints:Min value = 0 |
| peakMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period. | intConstraints:Min value = 0 |
| peakStartTime | Starting time for peak period. | Time |
| peakStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the peak phase. | 'Disable''Enable' |
| rampDownActionOnDisconnect | Action to be taken after a user disconnect during the ramp down period. | 'Deallocate''Hibernate''None' |
| rampDownActionOnLogoff | Action to be taken after a logoff during the ramp down period. | 'Deallocate''Hibernate''None' |
| rampDownMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period. | intConstraints:Min value = 0 |
| rampDownMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period. | intConstraints:Min value = 0 |
| rampDownStartTime | Starting time for ramp down period. | Time |
| rampDownStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the ramp down phase. | 'Disable''Enable' |
| rampUpActionOnDisconnect | Action to be taken after a user disconnect during the ramp up period. | 'Deallocate''Hibernate''None' |
| rampUpActionOnLogoff | Action to be taken after a logoff during the ramp up period. | 'Deallocate''Hibernate''None' |
| rampUpAutoStartHosts | The desired startup behavior during the ramp up period for personal vms in the hostpool. | 'All''None''WithAssignedUser' |
| rampUpMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period. | intConstraints:Min value = 0 |
| rampUpMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period. | intConstraints:Min value = 0 |
| rampUpStartTime | Starting time for ramp up period. | Time |
| rampUpStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually. | 'Disable''Enable' |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required)Constraints:Min value = 0Max value = 23 |
| minute | The minute. | int (required)Constraints:Min value = 0Max value = 59 |


