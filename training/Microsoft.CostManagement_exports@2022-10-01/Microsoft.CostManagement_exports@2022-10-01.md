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


