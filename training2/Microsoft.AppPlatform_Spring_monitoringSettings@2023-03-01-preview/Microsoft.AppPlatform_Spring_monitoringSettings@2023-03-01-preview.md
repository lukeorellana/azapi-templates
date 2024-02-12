```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appInsightsAgentVersions = {}
      appInsightsInstrumentationKey = "string"
      appInsightsSamplingRate = int
      error = {
        code = "string"
        message = "string"
      }
      traceEnabled = bool
    }
  })
}

```

### Spring/monitoringSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the Monitoring Setting resource | MonitoringSettingProperties |


### MonitoringSettingProperties

| Name | Description | Value |
|-|-|-|
| appInsightsAgentVersions | Indicates the versions of application insight agent | ApplicationInsightsAgentVersions |
| appInsightsInstrumentationKey | Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings | string |
| appInsightsSamplingRate | Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0] | int |
| error | Error when apply Monitoring Setting changes. | Error |
| traceEnabled | Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not | bool |


### Error

| Name | Description | Value |
|-|-|-|
| code | The code of error. | string |
| message | The message of error. | string |


