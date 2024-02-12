```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/loggers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        {customized property} = "string"
      }
      description = "string"
      isBuffered = bool
      loggerType = "string"
      resourceId = "string"
    }
  })
}

```

### service/loggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Logger entity contract properties. | LoggerContractProperties |


### LoggerContractProperties

| Name | Description | Value |
|-|-|-|
| credentials | The name and SendRule connection string of the event hub for azureEventHub logger.Instrumentation key for applicationInsights logger. | LoggerContractPropertiesCredentials |
| description | Logger description. | string |
| isBuffered | Whether records are buffered in the logger before publishing. Default is assumed to be true. | bool |
| loggerType | Logger type. | 'applicationInsights''azureEventHub''azureMonitor' (required) |
| resourceId | Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource). | string |


### LoggerContractPropertiesCredentials

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


