```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/costs@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createdDate = "string"
      currencyCode = "string"
      endDateTime = "string"
      startDateTime = "string"
      targetCost = {
        costThresholds = [
          {
            displayOnChart = "string"
            notificationSent = "string"
            percentageThreshold = {
              thresholdValue = int
            }
            sendNotificationWhenExceeded = "string"
            thresholdId = "string"
          }
        ]
        cycleEndDateTime = "string"
        cycleStartDateTime = "string"
        cycleType = "string"
        status = "string"
        target = int
      }
    }
  })
}

```

### labs/costs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | LabCostProperties(required) |


### LabCostProperties

| Name | Description | Value |
|-|-|-|
| createdDate | The creation date of the cost. | string |
| currencyCode | The currency code of the cost. | string |
| endDateTime | The end time of the cost data. | string |
| startDateTime | The start time of the cost data. | string |
| targetCost | The target cost properties | TargetCostProperties |


### TargetCostProperties

| Name | Description | Value |
|-|-|-|
| costThresholds | Cost thresholds. | CostThresholdProperties[] |
| cycleEndDateTime | Reporting cycle end date. | string |
| cycleStartDateTime | Reporting cycle start date. | string |
| cycleType | Reporting cycle type. | 'CalendarMonth''Custom' |
| status | Target cost status | 'Disabled''Enabled' |
| target | Lab target cost | int |


### CostThresholdProperties

| Name | Description | Value |
|-|-|-|
| displayOnChart | Indicates whether this threshold will be displayed on cost charts. | 'Disabled''Enabled' |
| notificationSent | Indicates the datetime when notifications were last sent for this threshold. | string |
| percentageThreshold | The value of the percentage cost threshold. | PercentageCostThresholdProperties |
| sendNotificationWhenExceeded | Indicates whether notifications will be sent when this threshold is exceeded. | 'Disabled''Enabled' |
| thresholdId | The ID of the cost threshold item. | string |


### PercentageCostThresholdProperties

| Name | Description | Value |
|-|-|-|
| thresholdValue | The cost threshold value. | int |


