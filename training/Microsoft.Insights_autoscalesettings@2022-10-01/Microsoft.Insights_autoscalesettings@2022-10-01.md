```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/autoscalesettings@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabled = bool
      name = "string"
      notifications = [
        {
          email = {
            customEmails = [
              "string"
            ]
            sendToSubscriptionAdministrator = bool
            sendToSubscriptionCoAdministrators = bool
          }
          operation = "Scale"
          webhooks = [
            {
              properties = {}
              serviceUri = "string"
            }
          ]
        }
      ]
      predictiveAutoscalePolicy = {
        scaleLookAheadTime = "string"
        scaleMode = "string"
      }
      profiles = [
        {
          capacity = {
            default = "string"
            maximum = "string"
            minimum = "string"
          }
          fixedDate = {
            end = "string"
            start = "string"
            timeZone = "string"
          }
          name = "string"
          recurrence = {
            frequency = "string"
            schedule = {
              days = [
                "string"
              ]
              hours = [
                int
              ]
              minutes = [
                int
              ]
              timeZone = "string"
            }
          }
          rules = [
            {
              metricTrigger = {
                dimensions = [
                  {
                    DimensionName = "string"
                    Operator = "string"
                    Values = [
                      "string"
                    ]
                  }
                ]
                dividePerInstance = bool
                metricName = "string"
                metricNamespace = "string"
                metricResourceLocation = "string"
                metricResourceUri = "string"
                operator = "string"
                statistic = "string"
                threshold = int
                timeAggregation = "string"
                timeGrain = "string"
                timeWindow = "string"
              }
              scaleAction = {
                cooldown = "string"
                direction = "string"
                type = "string"
                value = "string"
              }
            }
          ]
        }
      ]
      targetResourceLocation = "string"
      targetResourceUri = "string"
    }
  })
}

```

### autoscalesettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. | Dictionary of tag names and values. SeeTags in templates |
| properties | The autoscale setting of the resource. | AutoscaleSetting(required) |


### AutoscaleSetting

| Name | Description | Value |
|-|-|-|
| enabled | the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'. | bool |
| name | the name of the autoscale setting. | string |
| notifications | the collection of notifications. | AutoscaleNotification[] |
| predictiveAutoscalePolicy | the predictive autoscale policy mode. | PredictiveAutoscalePolicy |
| profiles | the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified. | AutoscaleProfile[] (required)Constraints:Max length = 20 |
| targetResourceLocation | the location of the resource that the autoscale setting should be added to. | string |
| targetResourceUri | the resource identifier of the resource that the autoscale setting should be added to. | string |


### AutoscaleNotification

| Name | Description | Value |
|-|-|-|
| email | the email notification. | EmailNotification |
| operation | the operation associated with the notification and its value must be "scale" | 'Scale' (required) |
| webhooks | the collection of webhook notifications. | WebhookNotification[] |


### EmailNotification

| Name | Description | Value |
|-|-|-|
| customEmails | the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored. | string[] |
| sendToSubscriptionAdministrator | a value indicating whether to send email to subscription administrator. | bool |
| sendToSubscriptionCoAdministrators | a value indicating whether to send email to subscription co-administrators. | bool |


### WebhookNotification

| Name | Description | Value |
|-|-|-|
| properties | a property bag of settings. This value can be empty. | object |
| serviceUri | the service address to receive the notification. | string |


### PredictiveAutoscalePolicy

| Name | Description | Value |
|-|-|-|
| scaleLookAheadTime | the amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format. | string |
| scaleMode | the predictive autoscale mode | 'Disabled''Enabled''ForecastOnly' (required) |


### AutoscaleProfile

| Name | Description | Value |
|-|-|-|
| capacity | the number of instances that can be used during this profile. | ScaleCapacity(required) |
| fixedDate | the specific date-time for the profile. This element is not used if the Recurrence element is used. | TimeWindow |
| name | the name of the profile. | string (required) |
| recurrence | the repeating times at which this profile begins. This element is not used if the FixedDate element is used. | Recurrence |
| rules | the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified. | ScaleRule[] (required) |


### ScaleCapacity

| Name | Description | Value |
|-|-|-|
| default | the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default. | string (required) |
| maximum | the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription. | string (required) |
| minimum | the minimum number of instances for the resource. | string (required) |


### TimeWindow

| Name | Description | Value |
|-|-|-|
| end | the end time for the profile in ISO 8601 format. | string (required) |
| start | the start time for the profile in ISO 8601 format. | string (required) |
| timeZone | the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, TÃ¼rkiye Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time | string |


### Recurrence

| Name | Description | Value |
|-|-|-|
| frequency | the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, setscheduleto every day of the week. The frequency property specifies that the schedule is repeated weekly. | 'Day''Hour''Minute''Month''None''Second''Week''Year' (required) |
| schedule | the scheduling constraints for when the profile begins. | RecurrentSchedule(required) |


### RecurrentSchedule

| Name | Description | Value |
|-|-|-|
| days | the collection of days that the profile takes effect on. Possible values are Sunday through Saturday. | string[] (required) |
| hours | A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported). | int[] (required) |
| minutes | A collection of minutes at which the profile takes effect at. | int[] (required) |
| timeZone | the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, TÃ¼rkiye Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time | string (required) |


### ScaleRule

| Name | Description | Value |
|-|-|-|
| metricTrigger | the trigger that results in a scaling action. | MetricTrigger(required) |
| scaleAction | the parameters for the scaling action. | ScaleAction(required) |


### MetricTrigger

| Name | Description | Value |
|-|-|-|
| dimensions | List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}]. | ScaleRuleMetricDimension[] |
| dividePerInstance | a value indicating whether metric should divide per instance. | bool |
| metricName | the name of the metric that defines what the rule monitors. | string (required) |
| metricNamespace | the namespace of the metric that defines what the rule monitors. | string |
| metricResourceLocation | the location of the resource the rule monitors. | string |
| metricResourceUri | the resource identifier of the resource the rule monitors. | string (required) |
| operator | the operator that is used to compare the metric data and the threshold. | 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''NotEquals' (required) |
| statistic | the metric statistic type. How the metrics from multiple instances are combined. | 'Average''Count''Max''Min''Sum' (required) |
| threshold | the threshold of the metric that triggers the scale action. | int (required) |
| timeAggregation | time aggregation type. How the data that is collected should be combined over time. The default value is Average. | 'Average''Count''Last''Maximum''Minimum''Total' (required) |
| timeGrain | the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute. | string (required) |
| timeWindow | the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes. | string (required) |


### ScaleRuleMetricDimension

| Name | Description | Value |
|-|-|-|
| DimensionName | Name of the dimension. | string (required) |
| Operator | the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values | 'Equals''NotEquals' (required) |
| Values | list of dimension values. For example: ["App1","App2"]. | string[] (required) |


### ScaleAction

| Name | Description | Value |
|-|-|-|
| cooldown | the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format. | string (required) |
| direction | the scale direction. Whether the scaling action increases or decreases the number of instances. | 'Decrease''Increase''None' (required) |
| type | the type of action that should occur when the scale rule fires. | 'ChangeCount''ExactCount''PercentChangeCount''ServiceAllowedNextValue' (required) |
| value | the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1. | string |


