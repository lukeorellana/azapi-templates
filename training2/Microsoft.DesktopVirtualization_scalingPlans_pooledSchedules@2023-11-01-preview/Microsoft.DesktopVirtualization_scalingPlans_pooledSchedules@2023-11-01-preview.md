```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      daysOfWeek = [
        "string"
      ]
      offPeakLoadBalancingAlgorithm = "string"
      offPeakStartTime = {
        hour = int
        minute = int
      }
      peakLoadBalancingAlgorithm = "string"
      peakStartTime = {
        hour = int
        minute = int
      }
      rampDownCapacityThresholdPct = int
      rampDownForceLogoffUsers = bool
      rampDownLoadBalancingAlgorithm = "string"
      rampDownMinimumHostsPct = int
      rampDownNotificationMessage = "string"
      rampDownStartTime = {
        hour = int
        minute = int
      }
      rampDownStopHostsWhen = "string"
      rampDownWaitTimeMinutes = int
      rampUpCapacityThresholdPct = int
      rampUpLoadBalancingAlgorithm = "string"
      rampUpMinimumHostsPct = int
      rampUpStartTime = {
        hour = int
        minute = int
      }
    }
  })
}

```

### scalingPlans/pooledSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:scalingPlans |
| properties | Detailed properties for ScalingPlanPooledSchedule | ScalingPlanPooledScheduleProperties(required) |


### ScalingPlanPooledScheduleProperties

| Name | Description | Value |
|-|-|-|
| daysOfWeek | Set of days of the week on which this schedule is active. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| offPeakLoadBalancingAlgorithm | Load balancing algorithm for off-peak period. | 'BreadthFirst''DepthFirst' |
| offPeakStartTime | Starting time for off-peak period. | Time |
| peakLoadBalancingAlgorithm | Load balancing algorithm for peak period. | 'BreadthFirst''DepthFirst' |
| peakStartTime | Starting time for peak period. | Time |
| rampDownCapacityThresholdPct | Capacity threshold for ramp down period. | intConstraints:Min value = 1Max value = 100 |
| rampDownForceLogoffUsers | Should users be logged off forcefully from hosts. | bool |
| rampDownLoadBalancingAlgorithm | Load balancing algorithm for ramp down period. | 'BreadthFirst''DepthFirst' |
| rampDownMinimumHostsPct | Minimum host percentage for ramp down period. | intConstraints:Min value = 0Max value = 100 |
| rampDownNotificationMessage | Notification message for users during ramp down period. | string |
| rampDownStartTime | Starting time for ramp down period. | Time |
| rampDownStopHostsWhen | Specifies when to stop hosts during ramp down period. | 'ZeroActiveSessions''ZeroSessions' |
| rampDownWaitTimeMinutes | Number of minutes to wait to stop hosts during ramp down period. | int |
| rampUpCapacityThresholdPct | Capacity threshold for ramp up period. | intConstraints:Min value = 1Max value = 100 |
| rampUpLoadBalancingAlgorithm | Load balancing algorithm for ramp up period. | 'BreadthFirst''DepthFirst' |
| rampUpMinimumHostsPct | Minimum host percentage for ramp up period. | intConstraints:Min value = 0Max value = 100 |
| rampUpStartTime | Starting time for ramp up period. | Time |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required)Constraints:Min value = 0Max value = 23 |
| minute | The minute. | int (required)Constraints:Min value = 0Max value = 59 |


