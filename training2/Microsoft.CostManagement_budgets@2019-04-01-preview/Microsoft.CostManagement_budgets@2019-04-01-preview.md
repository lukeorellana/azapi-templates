```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/budgets@2019-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      amount = int
      category = "string"
      filter = {
        and = [
          {
          dimension = {
            name = "string"
            operator = "string"
            values = [
              "string"
            ]
          }
          not = {
          or = [
            {
            tag = {
              name = "string"
              operator = "string"
              values = [
                "string"
              ]
            }
      }
      notifications = {}
      timeGrain = "string"
      timePeriod = {
        endDate = "string"
        startDate = "string"
      }
    }
    eTag = "string"
  })
}

```

### budgets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| eTag | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | string |
| properties | The properties of the budget. | BudgetProperties |


### BudgetProperties

| Name | Description | Value |
|-|-|-|
| amount | The total amount of cost to track with the budget | int (required) |
| category | The category of the budget, whether the budget tracks cost or usage. | 'Cost''Usage' (required) |
| filter | May be used to filter budgets. | ReportConfigFilter |
| notifications | Dictionary of notifications associated with the budget. Budget can have up to five notifications. | object |
| timeGrain | The time covered by a budget. Tracking of the amount will be reset based on the time grain. | 'Annually''Monthly''Quarterly' (required) |
| timePeriod | Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date. | BudgetTimePeriod(required) |


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
| operator | The operator to use for comparison. | 'Contains''In' (required) |
| values | Array of values to use for comparison | string[] (required) |


### BudgetTimePeriod

| Name | Description | Value |
|-|-|-|
| endDate | The end date for the budget. If not provided, we default this to 10 years from the start date. | string |
| startDate | The start date for the budget. | string (required) |


