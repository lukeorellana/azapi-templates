```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/views@2022-10-05-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accumulated = "string"
      chart = "string"
      displayName = "string"
      kpis = [
        {
          enabled = bool
          id = "string"
          type = "string"
        }
      ]
      metric = "string"
      pivots = [
        {
          name = "string"
          type = "string"
        }
      ]
      query = {
        dataSet = {
          aggregation = {}
          configuration = {
            columns = [
              "string"
            ]
          }
          filter = {
            and = [
              {
              dimensions = {
                name = "string"
                operator = "string"
                values = [
                  "string"
                ]
              }
              or = [
                {
                tags = {
                  name = "string"
                  operator = "string"
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
          sorting = [
            {
              direction = "string"
              name = "string"
            }
          ]
        }
        includeMonetaryCommitment = bool
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "Usage"
      }
      scope = "string"
    }
    eTag = "string"
  })
}

```

### views

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| eTag | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | string |
| properties | The properties of the view. | ViewProperties |


### ViewProperties

| Name | Description | Value |
|-|-|-|
| accumulated | Show costs accumulated over time. | 'false''true' |
| chart | Chart type of the main view in Cost Analysis. Required. | 'Area''GroupedColumn''Line''StackedColumn''Table' |
| displayName | User input name of the view. Required. | string |
| kpis | List of KPIs to show in Cost Analysis UI. | KpiProperties[] |
| metric | Metric to use when displaying costs. | 'AHUB''ActualCost''AmortizedCost' |
| pivots | Configuration of 3 sub-views in the Cost Analysis UI. | PivotProperties[] |
| query | Query body configuration. Required. | ReportConfigDefinition |
| scope | Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope. | string |


### KpiProperties

| Name | Description | Value |
|-|-|-|
| enabled | show the KPI in the UI? | bool |
| id | ID of resource related to metric (budget). | string |
| type | KPI type (Forecast, Budget). | 'Budget''Forecast' |


### PivotProperties

| Name | Description | Value |
|-|-|-|
| name | Data field to show in view. | string |
| type | Data type to show in view. | 'Dimension''TagKey' |


### ReportConfigDefinition

| Name | Description | Value |
|-|-|-|
| dataSet | Has definition for data in this report config. | ReportConfigDataset |
| includeMonetaryCommitment | If true, report includes monetary commitment. | bool |
| timeframe | The time frame for pulling data for the report. If custom, then a specific time period must be provided. | 'Custom''MonthToDate''WeekToDate''YearToDate' (required) |
| timePeriod | Has time period for pulling data for the report. | ReportConfigTimePeriod |
| type | The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates. | 'Usage' (required) |


### ReportConfigDataset

| Name | Description | Value |
|-|-|-|
| aggregation | Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses. | object |
| configuration | Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided. | ReportConfigDatasetConfiguration |
| filter | Has filter expression to use in the report. | ReportConfigFilter |
| granularity | The granularity of rows in the report. | 'Daily''Monthly' |
| grouping | Array of group by expression to use in the report. Report can have up to 2 group by clauses. | ReportConfigGrouping[] |
| sorting | Array of order by expression to use in the report. | ReportConfigSorting[] |


### ReportConfigDatasetConfiguration

| Name | Description | Value |
|-|-|-|
| columns | Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns. | string[] |


### ReportConfigFilter

| Name | Description | Value |
|-|-|-|
| and | The logical "AND" expression. Must have at least 2 items. | ReportConfigFilter[] |
| dimensions | Has comparison expression for a dimension | ReportConfigComparisonExpression |
| or | The logical "OR" expression. Must have at least 2 items. | ReportConfigFilter[] |
| tags | Has comparison expression for a tag | object |


### ReportConfigComparisonExpression

| Name | Description | Value |
|-|-|-|
| name | The name of the column to use in comparison. | string (required) |
| operator | The operator to use for comparison. | 'Contains''In' (required) |
| values | Array of values to use for comparison | string[] (required) |


### ReportConfigGrouping

| Name | Description | Value |
|-|-|-|
| name | The name of the column to group. This version supports subscription lowest possible grain. | string (required) |
| type | Has type of the column to group. | 'Dimension''Tag' (required) |


### ReportConfigSorting

| Name | Description | Value |
|-|-|-|
| direction | Direction of sort. | 'Ascending''Descending' |
| name | The name of the column to sort. | string (required) |


### ReportConfigTimePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date to pull data from. | string (required) |
| to | The end date to pull data to. | string (required) |


