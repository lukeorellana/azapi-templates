```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewHistoryDefinitions@2021-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    decisions = [
      "string"
    ]
    displayName = "string"
    instances = [
      {
        properties = {
          displayName = "string"
          expiration = "string"
          fulfilledDateTime = "string"
          reviewHistoryPeriodEndDateTime = "string"
          reviewHistoryPeriodStartDateTime = "string"
          runDateTime = "string"
        }
      }
    ]
    scopes = [
      {
        excludeResourceId = "string"
        excludeRoleDefinitionId = "string"
        expandNestedMemberships = bool
        inactiveDuration = "string"
        includeAccessBelowResource = bool
        includeInheritedAccess = bool
      }
    ]
    settings = {
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
  })
}

```

### accessReviewHistoryDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| decisions | Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request. | String array containing any of:'Approve''Deny''DontKnow''NotNotified''NotReviewed' |
| displayName | The display name for the history definition. | string |
| instances | Set of access review history instances for this history definition. | AccessReviewHistoryInstance[] |
| scopes | A collection of scopes used when selecting review history data | AccessReviewScope[] |
| settings | Recurrence settings for recurring history reports, skip for one-time reports. | AccessReviewHistoryScheduleSettings |


### AccessReviewHistoryInstance

| Name | Description | Value |
|-|-|-|
| properties | Access Review History Definition Instance properties. | AccessReviewHistoryInstanceProperties |


### AccessReviewHistoryInstanceProperties

| Name | Description | Value |
|-|-|-|
| displayName | The display name for the parent history definition. | string |
| expiration | Date time when history data report expires and the associated data is deleted. | string |
| fulfilledDateTime | Date time when the history data report is scheduled to be generated. | string |
| reviewHistoryPeriodEndDateTime | Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports. | string |
| reviewHistoryPeriodStartDateTime | Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports. | string |
| runDateTime | Date time when the history data report is scheduled to be generated. | string |


### AccessReviewScope

| Name | Description | Value |
|-|-|-|
| excludeResourceId | This is used to indicate the resource id(s) to exclude | string |
| excludeRoleDefinitionId | This is used to indicate the role definition id(s) to exclude | string |
| expandNestedMemberships | Flag to indicate whether to expand nested memberships or not. | bool |
| inactiveDuration | Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds)) | string |
| includeAccessBelowResource | Flag to indicate whether to expand nested memberships or not. | bool |
| includeInheritedAccess | Flag to indicate whether to expand nested memberships or not. | bool |


### AccessReviewHistoryScheduleSettings

| Name | Description | Value |
|-|-|-|
| pattern | Access Review History Definition recurrence settings. | AccessReviewRecurrencePattern |
| range | Access Review History Definition recurrence settings. | AccessReviewRecurrenceRange |


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


