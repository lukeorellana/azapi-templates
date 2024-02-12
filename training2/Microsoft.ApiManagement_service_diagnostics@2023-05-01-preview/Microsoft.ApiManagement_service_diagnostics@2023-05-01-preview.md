```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/diagnostics@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysLog = "allErrors"
      backend = {
        request = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
        response = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
      }
      frontend = {
        request = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
        response = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
      }
      httpCorrelationProtocol = "string"
      logClientIp = bool
      loggerId = "string"
      metrics = bool
      operationNameFormat = "string"
      sampling = {
        percentage = int
        samplingType = "fixed"
      }
      verbosity = "string"
    }
  })
}

```

### service/diagnostics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Diagnostic entity contract properties. | DiagnosticContractProperties |


### DiagnosticContractProperties

| Name | Description | Value |
|-|-|-|
| alwaysLog | Specifies for what type of messages sampling settings should not apply. | 'allErrors' |
| backend | Diagnostic settings for incoming/outgoing HTTP messages to the Backend | PipelineDiagnosticSettings |
| frontend | Diagnostic settings for incoming/outgoing HTTP messages to the Gateway. | PipelineDiagnosticSettings |
| httpCorrelationProtocol | Sets correlation protocol to use for Application Insights diagnostics. | 'Legacy''None''W3C' |
| logClientIp | Log the ClientIP. Default is false. | bool |
| loggerId | Resource Id of a target logger. | string (required) |
| metrics | Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings. | bool |
| operationNameFormat | The format of the Operation Name for Application Insights telemetries. Default is Name. | 'Name''Url' |
| sampling | Sampling settings for Diagnostic. | SamplingSettings |
| verbosity | The verbosity level applied to traces emitted by trace policies. | 'error''information''verbose' |


### PipelineDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| request | Diagnostic settings for request. | HttpMessageDiagnostic |
| response | Diagnostic settings for response. | HttpMessageDiagnostic |


### HttpMessageDiagnostic

| Name | Description | Value |
|-|-|-|
| body | Body logging settings. | BodyDiagnosticSettings |
| dataMasking | Data masking settings. | DataMasking |
| headers | Array of HTTP Headers to log. | string[] |


### BodyDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| bytes | Number of request body bytes to log. | int |


### DataMasking

| Name | Description | Value |
|-|-|-|
| headers | Masking settings for headers | DataMaskingEntity[] |
| queryParams | Masking settings for Url query parameters | DataMaskingEntity[] |


### DataMaskingEntity

| Name | Description | Value |
|-|-|-|
| mode | Data masking mode. | 'Hide''Mask' |
| value | The name of an entity to mask (e.g. a name of a header or a query parameter). | string |


### SamplingSettings

| Name | Description | Value |
|-|-|-|
| percentage | Rate of sampling for fixed-rate sampling. | int |
| samplingType | Sampling type. | 'fixed' |


