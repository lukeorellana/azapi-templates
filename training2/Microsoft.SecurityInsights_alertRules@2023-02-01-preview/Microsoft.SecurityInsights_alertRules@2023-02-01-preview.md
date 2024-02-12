```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/alertRules@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see alertRules objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### alertRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | FusionMicrosoftSecurityIncidentCreationMLBehaviorAnalyticsNRTScheduledThreatIntelligence(required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |


### FusionAlertRule

| Name | Description | Value |
|-|-|-|
| kind | The kind of the alert rule | 'Fusion' (required) |
| properties | Fusion alert rule properties | FusionAlertRuleProperties |


### FusionAlertRuleProperties

| Name | Description | Value |
|-|-|-|
| alertRuleTemplateName | The Name of the alert rule template used to create this rule. | string (required) |
| enabled | Determines whether this alert rule is enabled or disabled. | bool (required) |
| scenarioExclusionPatterns | Configuration to exclude scenarios in fusion detection. | FusionScenarioExclusionPattern[] |
| sourceSettings | Configuration for all supported source signals in fusion detection. | FusionSourceSettings[] |


### FusionScenarioExclusionPattern

| Name | Description | Value |
|-|-|-|
| dateAddedInUTC | DateTime when scenario exclusion pattern is added in UTC. | string (required) |
| exclusionPattern | Scenario exclusion pattern. | string (required) |


### FusionSourceSettings

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether this source signal is enabled or disabled in Fusion detection. | bool (required) |
| sourceName | Name of the Fusion source signal. Refer to Fusion alert rule template for supported values. | string (required) |
| sourceSubTypes | Configuration for all source subtypes under this source signal consumed in fusion detection. | FusionSourceSubTypeSetting[] |


### FusionSourceSubTypeSetting

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether this source subtype under source signal is enabled or disabled in Fusion detection. | bool (required) |
| severityFilters | Severity configuration for a source subtype consumed in fusion detection. | FusionSubTypeSeverityFilter(required) |
| sourceSubTypeName | The Name of the source subtype under a given source signal in Fusion detection. Refer to Fusion alert rule template for supported values. | string (required) |


### FusionSubTypeSeverityFilter

| Name | Description | Value |
|-|-|-|
| filters | Individual Severity configuration settings for a given source subtype consumed in Fusion detection. | FusionSubTypeSeverityFiltersItem[] |


### FusionSubTypeSeverityFiltersItem

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether this severity is enabled or disabled for this source subtype consumed in Fusion detection. | bool (required) |
| severity | The Severity for a given source subtype consumed in Fusion detection. | 'High''Informational''Low''Medium' (required) |


### MicrosoftSecurityIncidentCreationAlertRule

| Name | Description | Value |
|-|-|-|
| kind | The kind of the alert rule | 'MicrosoftSecurityIncidentCreation' (required) |
| properties | MicrosoftSecurityIncidentCreation rule properties | MicrosoftSecurityIncidentCreationAlertRuleProperties |


### MicrosoftSecurityIncidentCreationAlertRuleProperties

| Name | Description | Value |
|-|-|-|
| alertRuleTemplateName | The Name of the alert rule template used to create this rule. | string |
| description | The description of the alert rule. | string |
| displayName | The display name for alerts created by this alert rule. | string (required) |
| displayNamesExcludeFilter | the alerts' displayNames on which the cases will not be generated | string[] |
| displayNamesFilter | the alerts' displayNames on which the cases will be generated | string[] |
| enabled | Determines whether this alert rule is enabled or disabled. | bool (required) |
| productFilter | The alerts' productName on which the cases will be generated | 'Azure Active Directory Identity Protection''Azure Advanced Threat Protection''Azure Security Center for IoT''Azure Security Center''Microsoft Cloud App Security''Microsoft Defender Advanced Threat Protection''Office 365 Advanced Threat Protection' (required) |
| severitiesFilter | the alerts' severities on which the cases will be generated | String array containing any of:'High''Informational''Low''Medium' |


### MLBehaviorAnalyticsAlertRule

| Name | Description | Value |
|-|-|-|
| kind | The kind of the alert rule | 'MLBehaviorAnalytics' (required) |
| properties | MLBehaviorAnalytics alert rule properties | MLBehaviorAnalyticsAlertRuleProperties |


### MLBehaviorAnalyticsAlertRuleProperties

| Name | Description | Value |
|-|-|-|
| alertRuleTemplateName | The Name of the alert rule template used to create this rule. | string (required) |
| enabled | Determines whether this alert rule is enabled or disabled. | bool (required) |


### NrtAlertRule

| Name | Description | Value |
|-|-|-|
| kind | The kind of the alert rule | 'NRT' (required) |
| properties | NRT alert rule properties | NrtAlertRuleProperties |


### NrtAlertRuleProperties

| Name | Description | Value |
|-|-|-|
| alertDetailsOverride | The alert details override settings | AlertDetailsOverride |
| alertRuleTemplateName | The Name of the alert rule template used to create this rule. | string |
| customDetails | Dictionary of string key-value pairs of columns to be attached to the alert | object |
| description | The description of the alert rule. | string |
| displayName | The display name for alerts created by this alert rule. | string (required) |
| enabled | Determines whether this alert rule is enabled or disabled. | bool (required) |
| entityMappings | Array of the entity mappings of the alert rule | EntityMapping[] |
| eventGroupingSettings | The event grouping settings. | EventGroupingSettings |
| incidentConfiguration | The settings of the incidents that created from alerts triggered by this analytics rule | IncidentConfiguration |
| query | The query that creates alerts for this rule. | string (required) |
| sentinelEntitiesMappings | Array of the sentinel entity mappings of the alert rule | SentinelEntityMapping[] |
| severity | The severity for alerts created by this alert rule. | 'High''Informational''Low''Medium' (required) |
| suppressionDuration | The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered. | string (required) |
| suppressionEnabled | Determines whether the suppression for this alert rule is enabled or disabled. | bool (required) |
| tactics | The tactics of the alert rule | String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment' |
| techniques | The techniques of the alert rule | string[] |
| templateVersion | The version of the alert rule template used to create this rule - in format {a.b.c}, where all are numbers, for example 0 {1.0.2} | string |


### AlertDetailsOverride

| Name | Description | Value |
|-|-|-|
| alertDescriptionFormat | the format containing columns name(s) to override the alert description | string |
| alertDisplayNameFormat | the format containing columns name(s) to override the alert name | string |
| alertDynamicProperties | List of additional dynamic properties to override | AlertPropertyMapping[] |
| alertSeverityColumnName | the column name to take the alert severity from | string |
| alertTacticsColumnName | the column name to take the alert tactics from | string |


### AlertPropertyMapping

| Name | Description | Value |
|-|-|-|
| alertProperty | The V3 alert property | 'AlertLink''ConfidenceLevel''ConfidenceScore''ExtendedLinks''ProductComponentName''ProductName''ProviderName''RemediationSteps''Techniques' |
| value | the column name to use to override this property | string |


### EntityMapping

| Name | Description | Value |
|-|-|-|
| entityType | The V3 type of the mapped entity | 'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''IP''MailCluster''MailMessage''Mailbox''Malware''Process''RegistryKey''RegistryValue''SecurityGroup''SubmissionMail''URL' |
| fieldMappings | array of field mappings for the given entity mapping | FieldMapping[] |


### FieldMapping

| Name | Description | Value |
|-|-|-|
| columnName | the column name to be mapped to the identifier | string |
| identifier | the V3 identifier of the entity | string |


### EventGroupingSettings

| Name | Description | Value |
|-|-|-|
| aggregationKind | The event grouping aggregation kinds | 'AlertPerResult''SingleAlert' |


### IncidentConfiguration

| Name | Description | Value |
|-|-|-|
| createIncident | Create incidents from alerts triggered by this analytics rule | bool (required) |
| groupingConfiguration | Set how the alerts that are triggered by this analytics rule, are grouped into incidents | GroupingConfiguration |


### GroupingConfiguration

| Name | Description | Value |
|-|-|-|
| enabled | Grouping enabled | bool (required) |
| groupByAlertDetails | A list of alert details to group by (when matchingMethod is Selected) | String array containing any of:'DisplayName''Severity' |
| groupByCustomDetails | A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used. | string[] |
| groupByEntities | A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used. | String array containing any of:'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''IP''MailCluster''MailMessage''Mailbox''Malware''Process''RegistryKey''RegistryValue''SecurityGroup''SubmissionMail''URL' |
| lookbackDuration | Limit the group to alerts created within the lookback duration (in ISO 8601 duration format) | string (required) |
| matchingMethod | Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty. | 'AllEntities''AnyAlert''Selected' (required) |
| reopenClosedIncident | Re-open closed matching incidents | bool (required) |


### SentinelEntityMapping

| Name | Description | Value |
|-|-|-|
| columnName | the column name to be mapped to the SentinelEntities | string |


### ScheduledAlertRule

| Name | Description | Value |
|-|-|-|
| kind | The kind of the alert rule | 'Scheduled' (required) |
| properties | Scheduled alert rule properties | ScheduledAlertRuleProperties |


### ScheduledAlertRuleProperties

| Name | Description | Value |
|-|-|-|
| alertDetailsOverride | The alert details override settings | AlertDetailsOverride |
| alertRuleTemplateName | The Name of the alert rule template used to create this rule. | string |
| customDetails | Dictionary of string key-value pairs of columns to be attached to the alert | object |
| description | The description of the alert rule. | string |
| displayName | The display name for alerts created by this alert rule. | string (required) |
| enabled | Determines whether this alert rule is enabled or disabled. | bool (required) |
| entityMappings | Array of the entity mappings of the alert rule | EntityMapping[] |
| eventGroupingSettings | The event grouping settings. | EventGroupingSettings |
| incidentConfiguration | The settings of the incidents that created from alerts triggered by this analytics rule | IncidentConfiguration |
| query | The query that creates alerts for this rule. | string |
| queryFrequency | The frequency (in ISO 8601 duration format) for this alert rule to run. | string |
| queryPeriod | The period (in ISO 8601 duration format) that this alert rule looks at. | string |
| sentinelEntitiesMappings | Array of the sentinel entity mappings of the alert rule | SentinelEntityMapping[] |
| severity | The severity for alerts created by this alert rule. | 'High''Informational''Low''Medium' |
| suppressionDuration | The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered. | string (required) |
| suppressionEnabled | Determines whether the suppression for this alert rule is enabled or disabled. | bool (required) |
| tactics | The tactics of the alert rule | String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment' |
| techniques | The techniques of the alert rule | string[] |
| templateVersion | The version of the alert rule template used to create this rule - in format {a.b.c}, where all are numbers, for example 0 {1.0.2} | string |
| triggerOperator | The operation against the threshold that triggers alert rule. | 'Equal''GreaterThan''LessThan''NotEqual' |
| triggerThreshold | The threshold triggers this alert rule. | int |


### ThreatIntelligenceAlertRule

| Name | Description | Value |
|-|-|-|
| kind | The kind of the alert rule | 'ThreatIntelligence' (required) |
| properties | Threat Intelligence alert rule properties | ThreatIntelligenceAlertRuleProperties |


### ThreatIntelligenceAlertRuleProperties

| Name | Description | Value |
|-|-|-|
| alertRuleTemplateName | The Name of the alert rule template used to create this rule. | string (required) |
| enabled | Determines whether this alert rule is enabled or disabled. | bool (required) |


