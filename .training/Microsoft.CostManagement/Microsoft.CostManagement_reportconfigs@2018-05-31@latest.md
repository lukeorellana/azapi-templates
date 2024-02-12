```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/reportconfigs@2018-05-31"
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
          granularity = "Daily"
          grouping = [
            {
              columnType = "string"
              name = "string"
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

### reportconfigs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the report config. | ReportConfigProperties |


### ReportConfigProperties

| Name | Description | Value |
|-|-|-|
| definition | Has definition for the report config. | ReportConfigDefinition(required) |
| deliveryInfo | Has delivery information for the report config. | ReportConfigDeliveryInfo(required) |
| format | The format of the report being delivered. | 'Csv' |
| schedule | Has schedule information for the report config. | ReportConfigSchedule |


### ReportConfigDefinition

| Name | Description | Value |
|-|-|-|
| dataset | Has definition for data in this report config. | ReportConfigDataset |
| timeframe | The time frame for pulling data for the report. If custom, then a specific time period must be provided. | 'Custom''MonthToDate''WeekToDate''YearToDate' (required) |
| timePeriod | Has time period for pulling data for the report. | ReportConfigTimePeriod |
| type | The type of the report. | 'Usage' (required) |


### ReportConfigDataset

| Name | Description | Value |
|-|-|-|
| aggregation | Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses. | object |
| configuration | Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided. | ReportConfigDatasetConfiguration |
| filter | Has filter expression to use in the report. | ReportConfigFilter |
| granularity | The granularity of rows in the report. | 'Daily' |
| grouping | Array of group by expression to use in the report. Report can have up to 2 group by clauses. | ReportConfigGrouping[] |


### ReportConfigDatasetConfiguration

| Name | Description | Value |
|-|-|-|
| columns | Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns. | string[] |


### ReportConfigFilter

| Name | Description | Value |
|-|-|-|
| and | The logical "AND" expression. Must have at least 2 items. | ReportConfigFilter[] |
| dimension | Has comparison expression for a dimension | ReportConfigComparisonExpression |
| not | The logical "NOT" expression. | ReportConfigFilter |
| or | The logical "OR" expression. Must have at least 2 items. | ReportConfigFilter[] |
| tag | Has comparison expression for a tag | ReportConfigComparisonExpression |


### ReportConfigComparisonExpression

| Name | Description | Value |
|-|-|-|
| name | The name of the column to use in comparison. | string (required) |
| operator | The operator to use for comparison. | 'In' (required) |
| values | Array of values to use for comparison | string[] (required) |


### ReportConfigGrouping

| Name | Description | Value |
|-|-|-|
| columnType | Has type of the column to group. | 'Dimension''Tag' (required) |
| name | The name of the column to group. | string (required) |


### ReportConfigTimePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date to pull data from. | string (required) |
| to | The end date to pull data to. | string (required) |


### ReportConfigDeliveryInfo

| Name | Description | Value |
|-|-|-|
| destination | Has destination for the report being delivered. | ReportConfigDeliveryDestination(required) |


### ReportConfigDeliveryDestination

| Name | Description | Value |
|-|-|-|
| container | The name of the container where reports will be uploaded. | string (required) |
| resourceId | The resource id of the storage account where reports will be delivered. | string (required) |
| rootFolderPath | The name of the directory where reports will be uploaded. | string |


### ReportConfigSchedule

| Name | Description | Value |
|-|-|-|
| recurrence | The schedule recurrence. | 'Annually''Daily''Monthly''Weekly' (required) |
| recurrencePeriod | Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date. | ReportConfigRecurrencePeriod(required) |
| status | The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused. | 'Active''Inactive' |


### ReportConfigRecurrencePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date of recurrence. | string (required) |
| to | The end date of recurrence. If not provided, we default this to 10 years from the start date. | string |


