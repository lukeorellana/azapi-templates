```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/settings@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### settings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | AnomaliesEntityAnalyticsEyesOnUeba(required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |


### Anomalies

| Name | Description | Value |
|-|-|-|
| kind | The kind of the setting | 'Anomalies' (required) |
| properties | Anomalies properties | AnomaliesSettingsProperties |


### EntityAnalytics

| Name | Description | Value |
|-|-|-|
| kind | The kind of the setting | 'EntityAnalytics' (required) |
| properties | EntityAnalytics properties | EntityAnalyticsProperties |


### EntityAnalyticsProperties

| Name | Description | Value |
|-|-|-|
| entityProviders | The relevant entity providers that are synced | String array containing any of:'ActiveDirectory''AzureActiveDirectory' |


### EyesOn

| Name | Description | Value |
|-|-|-|
| kind | The kind of the setting | 'EyesOn' (required) |
| properties | EyesOn properties | EyesOnSettingsProperties |


### Ueba

| Name | Description | Value |
|-|-|-|
| kind | The kind of the setting | 'Ueba' (required) |
| properties | Ueba properties | UebaProperties |


### UebaProperties

| Name | Description | Value |
|-|-|-|
| dataSources | The relevant data sources that enriched by ueba | String array containing any of:'AuditLogs''AzureActivity''SecurityEvent''SigninLogs' |


