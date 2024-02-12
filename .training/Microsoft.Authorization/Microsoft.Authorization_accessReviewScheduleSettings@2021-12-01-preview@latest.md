```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewScheduleSettings@2021-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    autoApplyDecisionsEnabled = bool
    defaultDecision = "string"
    defaultDecisionEnabled = bool
    instanceDurationInDays = int
    justificationRequiredOnApproval = bool
    mailNotificationsEnabled = bool
    recommendationLookBackDuration = "string"
    recommendationsEnabled = bool
    recurrence = {
      pattern = {
        interval = int
        type = "string"
      }
      range = {
        endDate = "string"
        numberOfOccurrences = int
        startDate = "string"
        type = "string"
      }
    }
    reminderNotificationsEnabled = bool
  })
}

```

### accessReviewScheduleSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| autoApplyDecisionsEnabled | Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review. | bool |
| defaultDecision | This specifies the behavior for the autoReview feature when an access review completes. | 'Approve''Deny''Recommendation' |
| defaultDecisionEnabled | Flag to indicate whether reviewers are required to provide a justification when reviewing access. | bool |
| instanceDurationInDays | The duration in days for an instance. | int |
| justificationRequiredOnApproval | Flag to indicate whether the reviewer is required to pass justification when recording a decision. | bool |
| mailNotificationsEnabled | Flag to indicate whether sending mails to reviewers and the review creator is enabled. | bool |
| recommendationLookBackDuration | Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds)) | string |
| recommendationsEnabled | Flag to indicate whether showing recommendations to reviewers is enabled. | bool |
| recurrence | Access Review Settings. | AccessReviewRecurrenceSettings |
| reminderNotificationsEnabled | Flag to indicate whether sending reminder emails to reviewers are enabled. | bool |


### AccessReviewRecurrenceSettings

| Name | Description | Value |
|-|-|-|
| pattern | Access Review schedule definition recurrence pattern. | AccessReviewRecurrencePattern |
| range | Access Review schedule definition recurrence range. | AccessReviewRecurrenceRange |


### AccessReviewRecurrencePattern

| Name | Description | Value |
|-|-|-|
| interval | The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly. | int |
| type | The recurrence type : weekly, monthly, etc. | 'absoluteMonthly''weekly' |


### AccessReviewRecurrenceRange

| Name | Description | Value |
|-|-|-|
| endDate | The DateTime when the review is scheduled to end. Required if type is endDate | string |
| numberOfOccurrences | The number of times to repeat the access review. Required and must be positive if type is numbered. | int |
| startDate | The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create. | string |
| type | The recurrence range type. The possible values are: endDate, noEnd, numbered. | 'endDate''noEnd''numbered' |


