## Microsoft.CostManagement/budgets@2019-04-01-preview

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
## Microsoft.CostManagement/cloudConnectors@2019-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/cloudConnectors@2019-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billingModel = "string"
      credentialsKey = "string"
      credentialsSecret = "string"
      defaultManagementGroupId = "string"
      displayName = "string"
      reportId = "string"
      subscriptionId = "string"
    }
    kind = "string"
  })
}

```

### cloudConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Connector kind (eg aws) | string |
| properties | Connector properties | ConnectorProperties |


### ConnectorProperties

| Name | Description | Value |
|-|-|-|
| billingModel | Connector billing model | 'autoUpgrade''expired''premium''trial' |
| credentialsKey | Credentials authentication key (eg AWS ARN) | string |
| credentialsSecret | Credentials secret (eg AWS ExternalId) | string |
| defaultManagementGroupId | Default ManagementGroupId | string |
| displayName | Connector DisplayName | string |
| reportId | Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources) | string |
| subscriptionId | Billing SubscriptionId | string |
## Microsoft.CostManagement/connectors@2018-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/connectors@2018-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      credentialsKey = "string"
      credentialsSecret = "string"
      displayName = "string"
      reportId = "string"
      status = "string"
    }
    kind = "string"
  })
}

```

### connectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Connector location | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Connector kind (eg aws) | string |
| properties | Connector properties | ConnectorProperties |


### ConnectorProperties

| Name | Description | Value |
|-|-|-|
| credentialsKey | Credentials authentication key (eg AWS ARN) | string |
| credentialsSecret | Credentials secret (eg AWS ExternalId) | string |
| displayName | Connector DisplayName (defaults to Name) | string |
| reportId | Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources) | string |
| status | Connector status | 'active''error''suspended' |
## Microsoft.CostManagement/costAllocationRules@2020-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/costAllocationRules@2020-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      details = {
        sourceResources = [
          {
            name = "string"
            resourceType = "string"
            values = [
              "string"
            ]
          }
        ]
        targetResources = [
          {
            name = "string"
            policyType = "FixedProportion"
            resourceType = "string"
            values = [
              {
                name = "string"
                percentage = int
              }
            ]
          }
        ]
      }
      status = "string"
    }
  })
}

```

### costAllocationRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Cost allocation rule properties | CostAllocationRuleProperties |


### CostAllocationRuleProperties

| Name | Description | Value |
|-|-|-|
| description | Description of a cost allocation rule. | string |
| details | Resource information for the cost allocation rule | CostAllocationRuleDetails(required) |
| status | Status of the rule | 'Active''NotActive''Processing' (required) |


### CostAllocationRuleDetails

| Name | Description | Value |
|-|-|-|
| sourceResources | Source resources for cost allocation. At this time, this list can contain no more than one element. | SourceCostAllocationResource[] |
| targetResources | Target resources for cost allocation. At this time, this list can contain no more than one element. | TargetCostAllocationResource[] |


### SourceCostAllocationResource

| Name | Description | Value |
|-|-|-|
| name | If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag | string (required) |
| resourceType | Type of resources contained in this cost allocation rule | 'Dimension''Tag' (required) |
| values | Source Resources for cost allocation. This list cannot contain more than 25 values. | string[] (required) |


### TargetCostAllocationResource

| Name | Description | Value |
|-|-|-|
| name | If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag | string (required) |
| policyType | Method of cost allocation for the rule | 'FixedProportion' (required) |
| resourceType | Type of resources contained in this cost allocation rule | 'Dimension''Tag' (required) |
| values | Target resources for cost allocation. This list cannot contain more than 25 values. | CostAllocationProportion[] (required) |


### CostAllocationProportion

| Name | Description | Value |
|-|-|-|
| name | Target resource for cost allocation | string (required) |
| percentage | Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00. | int (required) |
## Microsoft.CostManagement/exports@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/exports@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = {
        dataSet = {
          configuration = {
            columns = [
              "string"
            ]
          }
          granularity = "Daily"
        }
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "string"
      }
      deliveryInfo = {
        destination = {
          container = "string"
          resourceId = "string"
          rootFolderPath = "string"
          sasToken = "string"
          storageAccount = "string"
        }
      }
      format = "Csv"
      partitionData = bool
      runHistory = {}
      schedule = {
        recurrence = "string"
        recurrencePeriod = {
          from = "string"
          to = "string"
        }
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

### exports

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| eTag | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | string |
| properties | The properties of the export. | ExportProperties |


### ExportProperties

| Name | Description | Value |
|-|-|-|
| definition | Has the definition for the export. | ExportDefinition(required) |
| deliveryInfo | Has delivery information for the export. | ExportDeliveryInfo(required) |
| format | The format of the export being delivered. Currently only 'Csv' is supported. | 'Csv' |
| partitionData | If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes. | bool |
| runHistory | If requested, has the most recent run history for the export. | ExportExecutionListResult |
| schedule | Has schedule information for the export. | ExportSchedule |


### ExportDefinition

| Name | Description | Value |
|-|-|-|
| dataSet | The definition for data in the export. | ExportDataset |
| timeframe | The time frame for pulling data for the export. If custom, then a specific time period must be provided. | 'BillingMonthToDate''Custom''MonthToDate''TheLastBillingMonth''TheLastMonth''WeekToDate' (required) |
| timePeriod | Has time period for pulling data for the export. | ExportTimePeriod |
| type | The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations. | 'ActualCost''AmortizedCost''Usage' (required) |


### ExportDataset

| Name | Description | Value |
|-|-|-|
| configuration | The export dataset configuration. | ExportDatasetConfiguration |
| granularity | The granularity of rows in the export. Currently only 'Daily' is supported. | 'Daily' |


### ExportDatasetConfiguration

| Name | Description | Value |
|-|-|-|
| columns | Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples). | string[] |


### ExportTimePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date for export data. | string (required) |
| to | The end date for export data. | string (required) |


### ExportDeliveryInfo

| Name | Description | Value |
|-|-|-|
| destination | Has destination for the export being delivered. | ExportDeliveryDestination(required) |


### ExportDeliveryDestination

| Name | Description | Value |
|-|-|-|
| container | The name of the container where exports will be uploaded. If the container does not exist it will be created. | string (required) |
| resourceId | The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified. | string |
| rootFolderPath | The name of the directory where exports will be uploaded. | string |
| sasToken | A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified. | string |
| storageAccount | The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId. | string |


### ExportSchedule

| Name | Description | Value |
|-|-|-|
| recurrence | The schedule recurrence. | 'Annually''Daily''Monthly''Weekly' |
| recurrencePeriod | Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date. | ExportRecurrencePeriod |
| status | The status of the export's schedule. If 'Inactive', the export's schedule is paused. | 'Active''Inactive' |


### ExportRecurrencePeriod

| Name | Description | Value |
|-|-|-|
| from | The start date of recurrence. | string (required) |
| to | The end date of recurrence. | string |
## Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview"
  name = "string"
  parent_id = "string"
}

```

### externalSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
## Microsoft.CostManagement/markupRules@2022-10-05-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/markupRules@2022-10-05-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerDetails = {
        billingAccountId = "string"
        billingProfileId = "string"
      }
      description = "string"
      endDate = "string"
      percentage = int
      startDate = "string"
    }
    eTag = "string"
  })
}

```

### markupRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| eTag | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | string |
| properties | The properties of the markup rule. | MarkupRuleProperties |


### MarkupRuleProperties

| Name | Description | Value |
|-|-|-|
| customerDetails | Customer information for the markup rule. | CustomerMetadata(required) |
| description | The description of the markup rule. | string |
| endDate | Ending date of the markup rule. | string |
| percentage | The markup percentage of the rule. | int (required) |
| startDate | Starting date of the markup rule. | string (required) |


### CustomerMetadata

| Name | Description | Value |
|-|-|-|
| billingAccountId | Customer billing account id | string (required) |
| billingProfileId | Customer billing profile id | string (required) |
## Microsoft.CostManagement/reportconfigs@2018-05-31

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
## Microsoft.CostManagement/reports@2018-08-01-preview

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
## Microsoft.CostManagement/scheduledActions@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/scheduledActions@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      fileDestination = {
        fileFormats = "Csv"
      }
      notification = {
        language = "string"
        message = "string"
        regionalFormat = "string"
        subject = "string"
        to = [
          "string"
        ]
      }
      notificationEmail = "string"
      schedule = {
        dayOfMonth = int
        daysOfWeek = [
          "string"
        ]
        endDate = "string"
        frequency = "string"
        hourOfDay = int
        startDate = "string"
        weeksOfMonth = [
          "string"
        ]
      }
      scope = "string"
      status = "string"
      viewId = "string"
    }
    kind = "string"
    eTag = "string"
  })
}

```

### scheduledActions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Kind of the scheduled action. | 'Email''InsightAlert' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| eTag | Resource Etag. For update calls, eTag is mandatory. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required. | string |
| properties | The properties of the scheduled action. | ScheduledActionProperties |


### ScheduledActionProperties

| Name | Description | Value |
|-|-|-|
| displayName | Scheduled action name. | string (required) |
| fileDestination | Destination format of the view data. This is optional. | FileDestination |
| notification | Notification properties based on scheduled action kind. | NotificationProperties(required) |
| notificationEmail | Email address of the point of contact that should get the unsubscribe requests and notification emails. | string |
| schedule | Schedule of the scheduled action. | ScheduleProperties(required) |
| scope | Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope. | string |
| status | Status of the scheduled action. | 'Disabled''Enabled''Expired' (required) |
| viewId | Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample' | string (required) |


### FileDestination

| Name | Description | Value |
|-|-|-|
| fileFormats | Destination of the view data. Currently only CSV format is supported. | String array containing any of:'Csv' |


### NotificationProperties

| Name | Description | Value |
|-|-|-|
| language | Locale of the email. | string |
| message | Optional message to be added in the email. Length is limited to 250 characters. | string |
| regionalFormat | Regional format used for formatting date/time and currency values in the email. | string |
| subject | Subject of the email. Length is limited to 70 characters. | string (required) |
| to | Array of email addresses. | string[] (required) |


### ScheduleProperties

| Name | Description | Value |
|-|-|-|
| dayOfMonth | UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek. | int |
| daysOfWeek | Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| endDate | The end date and time of the scheduled action (UTC). | string (required) |
| frequency | Frequency of the schedule. | 'Daily''Monthly''Weekly' (required) |
| hourOfDay | UTC time at which cost analysis data will be emailed. | int |
| startDate | The start date and time of the scheduled action (UTC). | string (required) |
| weeksOfMonth | Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek. | String array containing any of:'First''Fourth''Last''Second''Third' |
## Microsoft.CostManagement/settings@2022-10-05-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/settings@2022-10-05-preview"
  name = "taginheritance"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
    eTag = "string"
  })
}

```

### settings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'taginheritance' |
| kind | Set the object type | taginheritance(required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| eTag | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | string |


### TagInheritanceSettingAutoGenerated

| Name | Description | Value |
|-|-|-|
| kind | Specifies the kind of settings. | 'taginheritance' (required) |
| properties | The properties of the tag inheritance setting. | TagInheritancePropertiesAutoGenerated |


### TagInheritancePropertiesAutoGenerated

| Name | Description | Value |
|-|-|-|
| preferContainerTags | When resource has the same tag as subscription or resource group and this property is set to true - the subscription or resource group tag will be applied. If subscription and resource group tags are also the same, subscription tag will be applied. | bool (required) |
## Microsoft.CostManagement/showbackRules@2019-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/showbackRules@2019-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      scopes = [
        {
          childScope = {
          id = "string"
          name = "string"
          type = "string"
        }
      ]
      status = "string"
      ruleType = "string"
      // For remaining properties, see ShowbackRuleProperties objects
    }
  })
}

```

### showbackRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Showback rule properties | ShowbackRuleProperties |


### ShowbackRuleProperties

| Name | Description | Value |
|-|-|-|
| description | Description of a showback rule. | string |
| scopes | List of authorized assigned scopes. | Scope[] |
| status | The current status of the showback rule. | 'Active''NotActive' |
| ruleType | Set the object type | CostAllocationCustomPrice(required) |


### Scope

| Name | Description | Value |
|-|-|-|
| childScope | The Scope model definition | Scope |
| id | Scope id | string |
| name | Scope name | string |
| type | Scope type | string |


### CostAllocationDetailsKind

| Name | Description | Value |
|-|-|-|
| ruleType | The rule type of the showback rule solution. | 'CostAllocation' (required) |
| details | The CostAllocation properties to validate. | CostAllocationDetails |


### CostAllocationDetails

| Name | Description | Value |
|-|-|-|
| policy | Cost allocation policy. | 'Evenly''Fixed''Proportional' |


### CustomPriceDetailsKind

| Name | Description | Value |
|-|-|-|
| ruleType | The rule type of the showback rule solution. | 'CustomPrice' (required) |
| details | The Custom price properties to validate. | CustomPriceDetails |


### CustomPriceDetails

| Name | Description | Value |
|-|-|-|
| benefits | Array of benefits. | String array containing any of:'AHUB''All''None''Reservations''Sum' |
| markups | List of markups. | Markup[] |
| pricesheet |  | string |


### Markup

| Name | Description | Value |
|-|-|-|
| percentage |  | string |
## Microsoft.CostManagement/views@2022-10-05-preview

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
