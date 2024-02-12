```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/reports@2018-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = {
        dataset = {
          aggregation = {}
          configuration = {
            columns = [
              "string"
            ]
          }
          filter = {
            and = [
              {
              dimension = {
                name = "string"
                operator = "In"
                values = [
                  "string"
                ]
              }
              not = {
              or = [
                {
                tag = {
                  name = "string"
                  operator = "In"
                  values = [
                    "string"
                  ]
                }
          }
          granularity = "string"
          grouping = [
            {
              name = "string"
              type = "string"
            }
          ]
        }
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "Usage"
      }
      deliveryInfo = {
        destination = {
          container = "string"
          resourceId = "string"
          rootFolderPath = "string"
        }
      }
      format = "Csv"
      schedule = {
        recurrence = "string"
        recurrencePeriod = {
          from = "string"
          to = "string"
        }
        status = "string"
      }
    }
  })
}

```

### reports

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the report. | ReportProperties |


### ReportProperties

| Name | Description | Value |
|-|-|-|
| definition | Has definition for the report. | ReportDefinition(required) |
| deliveryInfo | Has delivery information for the report. | ReportDeliveryInfo(required) |
| format | The format of the report being delivered. | 'Csv' |
| schedule | Has schedule information for the report. | ReportSchedule |


### ReportDefinition

| Name | Description | Value |
|-|-|-|
| dataset | Has definition for data in this report. | ReportDataset |
| timeframe | The time frame for pulling data for the report. If custom, then a specific time period must be provided. | 'Custom''MonthToDate''WeekToDate' (required) |
| timePeriod | Has time period for pulling data for the report. | ReportTimePeriod |
| type | The type of the report. | 'Usage' (required) |


### ReportDataset

| Name | Description | Value |
|-|-|-|
| aggregation | Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses. | object |
| configuration | Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided. | ReportDatasetConfiguration |
| filter | Has filter expression to use in the report. | ReportFilter |
| granularity | The granularity of rows in the report. | 'Daily''Hourly' |
| grouping | Array of group by expression to use in the report. Report can have up to 2 group by clauses. | ReportGrouping[] |


### ReportDatasetConfiguration

| Name | Description | Value |
|-|-|-|
| columns | Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns. | string[] |


### ReportFilter

| Name | Description | Value |
|-|-|-|
| and | The logical "AND" expression. Must have at least 2 items. | ReportFilter[] |
| dimension | Has comparison expression for a dimension | ReportComparisonExpression |
| not | The logical "NOT" expression. | ReportFilter |
| or | The logical "OR" expression. Must have at least 2 items. | ReportFilter[] |
| tag | Has comparison expression for a tag | ReportComparisonExpression |


### ReportComparisonExpression

| Name | Description | Value |
|-|-|-|
| name | The name of the column to use in comparison. | string (required) |
| operator | The operator to use for comparison. | 'In' (required) |
| values | Array of values to use for comparison | string[] (required) |


### ReportGrouping

| Name | Description | Value |
|-|-|-|
| name | The name of the column to group. | string (required) |
| type | Has type of the column to group. | 'Dimension''Tag' (required) |


### ReportTimePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date to pull data from. | string (required) |
| to | The end date to pull data to. | string (required) |


### ReportDeliveryInfo

| Name | Description | Value |
|-|-|-|
| destination | Has destination for the report being delivered. | ReportDeliveryDestination(required) |


### ReportDeliveryDestination

| Name | Description | Value |
|-|-|-|
| container | The name of the container where reports will be uploaded. | string (required) |
| resourceId | The resource id of the storage account where reports will be delivered. | string (required) |
| rootFolderPath | The name of the directory where reports will be uploaded. | string |


### ReportSchedule

| Name | Description | Value |
|-|-|-|
| recurrence | The schedule recurrence. | 'Annually''Daily''Monthly''Weekly' (required) |
| recurrencePeriod | Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date. | ReportRecurrencePeriod |
| status | The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused. | 'Active''Inactive' |


### ReportRecurrencePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date of recurrence. | string (required) |
| to | The end date of recurrence. | string |


