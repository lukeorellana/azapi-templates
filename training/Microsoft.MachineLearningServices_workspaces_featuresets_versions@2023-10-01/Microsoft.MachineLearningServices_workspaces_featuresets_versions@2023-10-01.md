```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featuresets/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      entities = [
        "string"
      ]
      isAnonymous = bool
      isArchived = bool
      materializationSettings = {
        notification = {
          emailOn = [
            "string"
          ]
          emails = [
            "string"
          ]
          webhooks = {
            {customized property} = {
              eventType = "string"
              webhookType = "string"
              // For remaining properties, see Webhook objects
            }
          }
        }
        resource = {
          instanceType = "string"
        }
        schedule = {
          endTime = "string"
          frequency = "string"
          interval = int
          schedule = {
            hours = [
              int
            ]
            minutes = [
              int
            ]
            monthDays = [
              int
            ]
            weekDays = [
              "string"
            ]
          }
          startTime = "string"
          timeZone = "string"
          triggerType = "string"
        }
        sparkConfiguration = {
          {customized property} = "string"
        }
        storeType = "string"
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      specification = {
        path = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/featuresets/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:featuresets |
| properties | [Required] Additional attributes of the entity. | FeaturesetVersionProperties(required) |


### FeaturesetVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| entities | Specifies list of entities | string[] |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| materializationSettings | Specifies the materialization settings | MaterializationSettings |
| properties | The asset property dictionary. | ResourceBaseProperties |
| specification | Specifies the feature spec details | FeaturesetSpecification |
| stage | Specifies the asset stage | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### MaterializationSettings

| Name | Description | Value |
|-|-|-|
| notification | Specifies the notification details | NotificationSetting |
| resource | Specifies the compute resource settings | MaterializationComputeResource |
| schedule | Specifies the schedule details | RecurrenceTrigger |
| sparkConfiguration | Specifies the spark compute settings | MaterializationSettingsSparkConfiguration |
| storeType | Specifies the stores to which materialization should happen | 'None''Offline''Online''OnlineAndOffline' |


### NotificationSetting

| Name | Description | Value |
|-|-|-|
| emailOn | Send email notification to user on specified notification type | String array containing any of:'JobCancelled''JobCompleted''JobFailed' |
| emails | This is the email recipient list which has a limitation of 499 characters in total concat with comma separator | string[] |
| webhooks | Send webhook callback to a service. Key is a user-provided name for the webhook. | NotificationSettingWebhooks |


### NotificationSettingWebhooks

| Name | Description | Value |
|-|-|-|
| {customized property} |  | Webhook |


### Webhook

| Name | Description | Value |
|-|-|-|
| eventType | Send callback on a specified notification event | string |
| webhookType | Set the object type | AzureDevOps(required) |


### AzureDevOpsWebhook

| Name | Description | Value |
|-|-|-|
| webhookType | [Required] Specifies the type of service to send a callback | 'AzureDevOps' (required) |


### MaterializationComputeResource

| Name | Description | Value |
|-|-|-|
| instanceType | Specifies the instance type | string |


### RecurrenceTrigger

| Name | Description | Value |
|-|-|-|
| endTime | Specifies end time of schedule in ISO 8601, but without a UTC offset. Referhttps://en.wikipedia.org/wiki/ISO_8601.Recommented format would be "2022-06-01T00:00:01"If not present, the schedule will run indefinitely | string |
| frequency | [Required] The frequency to trigger schedule. | 'Day''Hour''Minute''Month''Week' (required) |
| interval | [Required] Specifies schedule interval in conjunction with frequency | int (required) |
| schedule | The recurrence schedule. | RecurrenceSchedule |
| startTime | Specifies start time of schedule in ISO 8601 format, but without a UTC offset. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones | string |
| triggerType | [Required] | 'Cron''Recurrence' (required) |


### RecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | [Required] List of hours for the schedule. | int[] (required) |
| minutes | [Required] List of minutes for the schedule. | int[] (required) |
| monthDays | List of month days for the schedule | int[] |
| weekDays | List of days for the schedule. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### MaterializationSettingsSparkConfiguration

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### FeaturesetSpecification

| Name | Description | Value |
|-|-|-|
| path | Specifies the spec path | string |


