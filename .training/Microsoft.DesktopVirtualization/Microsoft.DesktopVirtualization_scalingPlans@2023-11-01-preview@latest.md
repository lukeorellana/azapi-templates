```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans@2023-11-01-preview"
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
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      description = "string"
      exclusionTag = "string"
      friendlyName = "string"
      hostPoolReferences = [
        {
          hostPoolArmPath = "string"
          scalingPlanEnabled = bool
        }
      ]
      hostPoolType = "Pooled"
      schedules = [
        {
          daysOfWeek = [
            "string"
          ]
          name = "string"
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
      ]
      timeZone = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### scalingPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for scaling plan. | ScalingPlanProperties(required) |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### ScalingPlanProperties

| Name | Description | Value |
|-|-|-|
| description | Description of scaling plan. | string |
| exclusionTag | Exclusion tag for scaling plan. | string |
| friendlyName | User friendly name of scaling plan. | string |
| hostPoolReferences | List of ScalingHostPoolReference definitions. | ScalingHostPoolReference[] |
| hostPoolType | HostPool type for desktop. | 'Pooled' |
| schedules | List of ScalingPlanPooledSchedule definitions. | ScalingSchedule[] |
| timeZone | Timezone of the scaling plan. | string (required) |


### ScalingHostPoolReference

| Name | Description | Value |
|-|-|-|
| hostPoolArmPath | Arm path of referenced hostpool. | string |
| scalingPlanEnabled | Is the scaling plan enabled for this hostpool. | bool |


### ScalingSchedule

| Name | Description | Value |
|-|-|-|
| daysOfWeek | Set of days of the week on which this schedule is active. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| name | Name of the ScalingPlanPooledSchedule. | string |
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


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


