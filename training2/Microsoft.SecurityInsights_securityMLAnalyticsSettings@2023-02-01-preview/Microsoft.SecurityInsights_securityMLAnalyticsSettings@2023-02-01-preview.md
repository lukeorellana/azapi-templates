```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see securityMLAnalyticsSettings objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### securityMLAnalyticsSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | Anomaly(required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |


### AnomalySecurityMLAnalyticsSettings

| Name | Description | Value |
|-|-|-|
| kind | The kind of security ML Analytics Settings | 'Anomaly' (required) |
| properties | Anomaly Security ML Analytics Settings properties | AnomalySecurityMLAnalyticsSettingsProperties |


### AnomalySecurityMLAnalyticsSettingsProperties

| Name | Description | Value |
|-|-|-|
| anomalySettingsVersion | The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not. | int |
| anomalyVersion | The anomaly version of the AnomalySecurityMLAnalyticsSettings. | string (required) |
| customizableObservations | The customizable observations of the AnomalySecurityMLAnalyticsSettings. | For Bicep, you can use theany()function. |
| description | The description of the SecurityMLAnalyticsSettings. | string |
| displayName | The display name for settings created by this SecurityMLAnalyticsSettings. | string (required) |
| enabled | Determines whether this settings is enabled or disabled. | bool (required) |
| frequency | The frequency that this SecurityMLAnalyticsSettings will be run. | string (required) |
| isDefaultSettings | Determines whether this anomaly security ml analytics settings is a default settings | bool (required) |
| requiredDataConnectors | The required data sources for this SecurityMLAnalyticsSettings | SecurityMLAnalyticsSettingsDataSource[] |
| settingsDefinitionId | The anomaly settings definition Id | string |
| settingsStatus | The anomaly SecurityMLAnalyticsSettings status | 'Flighting''Production' (required) |
| tactics | The tactics of the SecurityMLAnalyticsSettings | String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment' |
| techniques | The techniques of the SecurityMLAnalyticsSettings | string[] |


### SecurityMLAnalyticsSettingsDataSource

| Name | Description | Value |
|-|-|-|
| connectorId | The connector id that provides the following data types | string |
| dataTypes | The data types used by the security ml analytics settings | string[] |


