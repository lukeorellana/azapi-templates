## Microsoft.SecurityInsights/alertRules@2023-02-01-preview

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
## Microsoft.SecurityInsights/alertRules/actions@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/alertRules/actions@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      logicAppResourceId = "string"
      triggerUri = "string"
    }
    etag = "string"
  })
}

```

### alertRules/actions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:alertRules |
| etag | Etag of the azure resource | string |
| properties | Action properties for put request | ActionRequestPropertiesOrActionResponseProperties |


### ActionRequestPropertiesOrActionResponseProperties

| Name | Description | Value |
|-|-|-|
| logicAppResourceId | Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}. | string (required) |
| triggerUri | Logic App Callback URL for this specific workflow. | string (required) |
## Microsoft.SecurityInsights/automationRules@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/automationRules@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        {
          order = int
          actionType = "string"
          // For remaining properties, see AutomationRuleAction objects
        }
      ]
      displayName = "string"
      order = int
      triggeringLogic = {
        conditions = [
          {
            conditionType = "string"
            // For remaining properties, see AutomationRuleCondition objects
          }
        ]
        expirationTimeUtc = "string"
        isEnabled = bool
        triggersOn = "string"
        triggersWhen = "string"
      }
    }
    etag = "string"
  })
}

```

### automationRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Automation rule properties | AutomationRuleProperties(required) |


### AutomationRuleProperties

| Name | Description | Value |
|-|-|-|
| actions | The actions to execute when the automation rule is triggered. | AutomationRuleAction[] (required) |
| displayName | The display name of the automation rule. | string (required) |
| order | The order of execution of the automation rule. | int (required) |
| triggeringLogic | Describes automation rule triggering logic. | AutomationRuleTriggeringLogic(required) |


### AutomationRuleAction

| Name | Description | Value |
|-|-|-|
| order |  | int (required) |
| actionType | Set the object type | AddIncidentTaskModifyPropertiesRunPlaybook(required) |


### AutomationRuleAddIncidentTaskAction

| Name | Description | Value |
|-|-|-|
| actionType | The type of the automation rule action. | 'AddIncidentTask' (required) |
| actionConfiguration |  | AddIncidentTaskActionProperties |


### AddIncidentTaskActionProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the task. | string |
| title | The title of the task. | string (required) |


### AutomationRuleModifyPropertiesAction

| Name | Description | Value |
|-|-|-|
| actionType | The type of the automation rule action. | 'ModifyProperties' (required) |
| actionConfiguration |  | IncidentPropertiesAction |


### IncidentPropertiesAction

| Name | Description | Value |
|-|-|-|
| classification | The reason the incident was closed | 'BenignPositive''FalsePositive''TruePositive''Undetermined' |
| classificationComment | Describes the reason the incident was closed. | string |
| classificationReason | The classification reason the incident was closed with | 'InaccurateData''IncorrectAlertLogic''SuspiciousActivity''SuspiciousButExpected' |
| labels | List of labels to add to the incident. | IncidentLabel[] |
| owner | Information on the user an incident is assigned to | IncidentOwnerInfo |
| severity | The severity of the incident | 'High''Informational''Low''Medium' |
| status | The status of the incident | 'Active''Closed''New' |


### IncidentLabel

| Name | Description | Value |
|-|-|-|
| labelName | The name of the label | string (required) |


### IncidentOwnerInfo

| Name | Description | Value |
|-|-|-|
| assignedTo | The name of the user the incident is assigned to. | string |
| email | The email of the user the incident is assigned to. | string |
| objectId | The object id of the user the incident is assigned to. | string |
| ownerType | The type of the owner the incident is assigned to. | 'Group''Unknown''User' |
| userPrincipalName | The user principal name of the user the incident is assigned to. | string |


### AutomationRuleRunPlaybookAction

| Name | Description | Value |
|-|-|-|
| actionType | The type of the automation rule action. | 'RunPlaybook' (required) |
| actionConfiguration |  | PlaybookActionProperties |


### PlaybookActionProperties

| Name | Description | Value |
|-|-|-|
| logicAppResourceId | The resource id of the playbook resource. | string |
| tenantId | The tenant id of the playbook resource. | string |


### AutomationRuleTriggeringLogic

| Name | Description | Value |
|-|-|-|
| conditions | The conditions to evaluate to determine if the automation rule should be triggered on a given object. | AutomationRuleCondition[] |
| expirationTimeUtc | Determines when the automation rule should automatically expire and be disabled. | string |
| isEnabled | Determines whether the automation rule is enabled or disabled. | bool (required) |
| triggersOn |  | 'Alerts''Incidents' (required) |
| triggersWhen |  | 'Created''Updated' (required) |


### AutomationRuleCondition

| Name | Description | Value |
|-|-|-|
| conditionType | Set the object type | BooleanPropertyPropertyArrayPropertyArrayChangedPropertyChanged(required) |


### BooleanConditionProperties

| Name | Description | Value |
|-|-|-|
| conditionType |  | 'Boolean' (required) |
| conditionProperties |  | AutomationRuleBooleanCondition |


### AutomationRuleBooleanCondition

| Name | Description | Value |
|-|-|-|
| innerConditions |  | AutomationRuleCondition[] |
| operator |  | 'And''Or' |


### PropertyConditionProperties

| Name | Description | Value |
|-|-|-|
| conditionType |  | 'Property' (required) |
| conditionProperties |  | AutomationRulePropertyValuesCondition |


### AutomationRulePropertyValuesCondition

| Name | Description | Value |
|-|-|-|
| operator |  | 'Contains''EndsWith''Equals''NotContains''NotEndsWith''NotEquals''NotStartsWith''StartsWith' |
| propertyName | The property to evaluate in an automation rule property condition. | 'AccountAadTenantId''AccountAadUserId''AccountNTDomain''AccountName''AccountObjectGuid''AccountPUID''AccountSid''AccountUPNSuffix''AlertAnalyticRuleIds''AlertProductNames''AzureResourceResourceId''AzureResourceSubscriptionId''CloudApplicationAppId''CloudApplicationAppName''DNSDomainName''FileDirectory''FileHashValue''FileName''HostAzureID''HostNTDomain''HostName''HostNetBiosName''HostOSVersion''IPAddress''IncidentCustomDetailsKey''IncidentCustomDetailsValue''IncidentDescription''IncidentLabel''IncidentProviderName''IncidentRelatedAnalyticRuleIds''IncidentSeverity''IncidentStatus''IncidentTactics''IncidentTitle''IncidentUpdatedBySource''IoTDeviceId''IoTDeviceModel''IoTDeviceName''IoTDeviceOperatingSystem''IoTDeviceType''IoTDeviceVendor''MailMessageDeliveryAction''MailMessageDeliveryLocation''MailMessageP1Sender''MailMessageP2Sender''MailMessageRecipient''MailMessageSenderIP''MailMessageSubject''MailboxDisplayName''MailboxPrimaryAddress''MailboxUPN''MalwareCategory''MalwareName''ProcessCommandLine''ProcessId''RegistryKey''RegistryValueData''Url' |
| propertyValues |  | string[] |


### PropertyArrayConditionProperties

| Name | Description | Value |
|-|-|-|
| conditionType |  | 'PropertyArray' (required) |
| conditionProperties |  | AutomationRulePropertyArrayValuesCondition |


### AutomationRulePropertyArrayValuesCondition

| Name | Description | Value |
|-|-|-|
| arrayConditionType |  | 'AnyItem' |
| arrayType |  | 'CustomDetailValues''CustomDetails' |
| itemConditions |  | AutomationRuleCondition[] |


### PropertyArrayChangedConditionProperties

| Name | Description | Value |
|-|-|-|
| conditionType |  | 'PropertyArrayChanged' (required) |
| conditionProperties |  | AutomationRulePropertyArrayChangedValuesCondition |


### AutomationRulePropertyArrayChangedValuesCondition

| Name | Description | Value |
|-|-|-|
| arrayType |  | 'Alerts''Comments''Labels''Tactics' |
| changeType |  | 'Added' |


### PropertyChangedConditionProperties

| Name | Description | Value |
|-|-|-|
| conditionType |  | 'PropertyChanged' (required) |
| conditionProperties |  | AutomationRulePropertyValuesChangedCondition |


### AutomationRulePropertyValuesChangedCondition

| Name | Description | Value |
|-|-|-|
| changeType |  | 'ChangedFrom''ChangedTo' |
| operator |  | 'Contains''EndsWith''Equals''NotContains''NotEndsWith''NotEquals''NotStartsWith''StartsWith' |
| propertyName |  | 'IncidentOwner''IncidentSeverity''IncidentStatus' |
| propertyValues |  | string[] |
## Microsoft.SecurityInsights/bookmarks@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/bookmarks@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      created = "string"
      createdBy = {
        objectId = "string"
      }
      displayName = "string"
      entityMappings = [
        {
          entityType = "string"
          fieldMappings = [
            {
              identifier = "string"
              value = "string"
            }
          ]
        }
      ]
      eventTime = "string"
      incidentInfo = {
        incidentId = "string"
        relationName = "string"
        severity = "string"
        title = "string"
      }
      labels = [
        "string"
      ]
      notes = "string"
      query = "string"
      queryEndTime = "string"
      queryResult = "string"
      queryStartTime = "string"
      tactics = [
        "string"
      ]
      techniques = [
        "string"
      ]
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
    }
    etag = "string"
  })
}

```

### bookmarks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Bookmark properties | BookmarkProperties |


### BookmarkProperties

| Name | Description | Value |
|-|-|-|
| created | The time the bookmark was created | string |
| createdBy | Describes a user that created the bookmark | UserInfo |
| displayName | The display name of the bookmark | string (required) |
| entityMappings | Describes the entity mappings of the bookmark | BookmarkEntityMappings[] |
| eventTime | The bookmark event time | string |
| incidentInfo | Describes an incident that relates to bookmark | IncidentInfo |
| labels | List of labels relevant to this bookmark | string[] |
| notes | The notes of the bookmark | string |
| query | The query of the bookmark. | string (required) |
| queryEndTime | The end time for the query | string |
| queryResult | The query result of the bookmark. | string |
| queryStartTime | The start time for the query | string |
| tactics | A list of relevant mitre attacks | String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment' |
| techniques | A list of relevant mitre techniques | string[] |
| updated | The last time the bookmark was updated | string |
| updatedBy | Describes a user that updated the bookmark | UserInfo |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |


### BookmarkEntityMappings

| Name | Description | Value |
|-|-|-|
| entityType | The entity type | string |
| fieldMappings | Array of fields mapping for that entity type | EntityFieldMapping[] |


### EntityFieldMapping

| Name | Description | Value |
|-|-|-|
| identifier | Alert V3 identifier | string |
| value | The value of the identifier | string |


### IncidentInfo

| Name | Description | Value |
|-|-|-|
| incidentId | Incident Id | string |
| relationName | Relation Name | string |
| severity | The severity of the incident | 'High''Informational''Low''Medium' |
| title | The title of the incident | string |
## Microsoft.SecurityInsights/bookmarks/relations@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/bookmarks/relations@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relatedResourceId = "string"
    }
    etag = "string"
  })
}

```

### bookmarks/relations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:bookmarks |
| etag | Etag of the azure resource | string |
| properties | Relation properties | RelationProperties |


### RelationProperties

| Name | Description | Value |
|-|-|-|
| relatedResourceId | The resource ID of the related resource | string (required) |
## Microsoft.SecurityInsights/cases@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      closedReasonText = "string"
      closeReason = "string"
      description = "string"
      endTimeUtc = "string"
      labels = [
        "string"
      ]
      owner = {
        objectId = "string"
      }
      severity = "string"
      startTimeUtc = "string"
      status = "string"
      title = "string"
    }
    etag = "string"
  })
}

```

### cases

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Case properties | CaseProperties |


### CaseProperties

| Name | Description | Value |
|-|-|-|
| closedReasonText | the case close reason details | string |
| closeReason | The reason the case was closed | 'Dismissed''FalsePositive''Other''Resolved''TruePositive' |
| description | The description of the case | string |
| endTimeUtc | The end time of the case | string |
| labels | List of labels relevant to this case | string[] |
| owner | Describes a user that the case is assigned to | UserInfo |
| severity | The severity of the case | 'Critical''High''Informational''Low''Medium' (required) |
| startTimeUtc | The start time of the case | string |
| status | The status of the case | 'Closed''Draft''InProgress''New' (required) |
| title | The title of the case | string (required) |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |
## Microsoft.SecurityInsights/cases/comments@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases/comments@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      message = "string"
    }
  })
}

```

### cases/comments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cases |
| properties | Case comment properties | CaseCommentProperties |


### CaseCommentProperties

| Name | Description | Value |
|-|-|-|
| message | The comment message | string (required) |
## Microsoft.SecurityInsights/cases/relations@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases/relations@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relationName = "string"
      sourceRelationNode = {
        etag = "string"
        relationAdditionalProperties = {}
        relationNodeId = "string"
      }
      targetRelationNode = {
        etag = "string"
        relationAdditionalProperties = {}
        relationNodeId = "string"
      }
    }
    etag = "string"
  })
}

```

### cases/relations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cases |
| etag | ETag for relation | string |
| properties | Relation input properties | RelationsModelInputPropertiesOrCaseRelationPropertie... |


### RelationsModelInputPropertiesOrCaseRelationPropertie...

| Name | Description | Value |
|-|-|-|
| relationName | Name of relation | string |
| sourceRelationNode | Relation source node | RelationNode |
| targetRelationNode | Relation target node | RelationNode |


### RelationNode

| Name | Description | Value |
|-|-|-|
| etag | Etag for relation node | string |
| relationAdditionalProperties | Additional set of properties | object |
| relationNodeId | Relation Node Id | string |
## Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataConnectors objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### dataConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | AmazonWebServicesCloudTrailAmazonWebServicesS3APIPollingAzureActiveDirectoryAzureAdvancedThreatProtectionAzureSecurityCenterDynamics365GenericUIIOTMicrosoftCloudAppSecurityMicrosoftDefenderAdvancedThreatProtectionMicrosoftPurviewInformationProtectionMicrosoftThreatIntelligenceMicrosoftThreatProtectionOffice365Office365ProjectOfficeATPOfficeIRMOfficePowerBIThreatIntelligenceThreatIntelligenceTaxii(required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |


### AwsCloudTrailDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AmazonWebServicesCloudTrail' (required) |
| properties | Amazon Web Services CloudTrail data connector properties. | AwsCloudTrailDataConnectorProperties |


### AwsCloudTrailDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AwsCloudTrailDataConnectorDataTypes(required) |


### AwsCloudTrailDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | AwsCloudTrailDataConnectorDataTypesLogs(required) |


### AwsCloudTrailDataConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### AwsS3DataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AmazonWebServicesS3' (required) |
| properties | Amazon Web Services S3 data connector properties. | AwsS3DataConnectorProperties |


### AwsS3DataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AwsS3DataConnectorDataTypes(required) |
| destinationTable | The logs destination table name in LogAnalytics. | string (required) |
| roleArn | The Aws Role Arn that is used to access the Aws account. | string (required) |
| sqsUrls | The AWS sqs urls for the connector. | string[] (required) |


### AwsS3DataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | AwsS3DataConnectorDataTypesLogs(required) |


### AwsS3DataConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### CodelessApiPollingDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'APIPolling' (required) |
| properties | Codeless poling data connector properties | ApiPollingParameters |


### ApiPollingParameters

| Name | Description | Value |
|-|-|-|
| connectorUiConfig | Config to describe the instructions blade | CodelessUiConnectorConfigProperties |
| pollingConfig | Config to describe the polling instructions | CodelessConnectorPollingConfigProperties |


### CodelessUiConnectorConfigProperties

| Name | Description | Value |
|-|-|-|
| availability | Connector Availability Status | Availability(required) |
| connectivityCriteria | Define the way the connector check connectivity | CodelessUiConnectorConfigPropertiesConnectivityCrite...[] (required) |
| customImage | An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery | string |
| dataTypes | Data types to check for last data received | CodelessUiConnectorConfigPropertiesDataTypesItem[] (required) |
| descriptionMarkdown | Connector description | string (required) |
| graphQueries | The graph query to show the current data status | CodelessUiConnectorConfigPropertiesGraphQueriesItem[] (required) |
| graphQueriesTableName | Name of the table the connector will insert the data to | string (required) |
| instructionSteps | Instruction steps to enable the connector | CodelessUiConnectorConfigPropertiesInstructionStepsI...[] (required) |
| permissions | Permissions required for the connector | Permissions(required) |
| publisher | Connector publisher name | string (required) |
| sampleQueries | The sample queries for the connector | CodelessUiConnectorConfigPropertiesSampleQueriesItem[] (required) |
| title | Connector blade title | string (required) |


### Availability

| Name | Description | Value |
|-|-|-|
| isPreview | Set connector as preview | bool |
| status | The connector Availability Status | '1' |


### CodelessUiConnectorConfigPropertiesConnectivityCrite...

| Name | Description | Value |
|-|-|-|
| type | type of connectivity | 'IsConnectedQuery' |
| value | Queries for checking connectivity | string[] |


### CodelessUiConnectorConfigPropertiesDataTypesItem

| Name | Description | Value |
|-|-|-|
| lastDataReceivedQuery | Query for indicate last data received | string |
| name | Name of the data type to show in the graph. can be use with {{graphQueriesTableName}} placeholder | string |


### CodelessUiConnectorConfigPropertiesGraphQueriesItem

| Name | Description | Value |
|-|-|-|
| baseQuery | The base query for the graph | string |
| legend | The legend for the graph | string |
| metricName | the metric that the query is checking | string |


### CodelessUiConnectorConfigPropertiesInstructionStepsI...

| Name | Description | Value |
|-|-|-|
| description | Instruction step description | string |
| instructions | Instruction step details | InstructionStepsInstructionsItem[] |
| title | Instruction step title | string |


### InstructionStepsInstructionsItem

| Name | Description | Value |
|-|-|-|
| parameters | The parameters for the setting | For Bicep, you can use theany()function. |
| type | The kind of the setting | 'CopyableLabel''InfoMessage''InstructionStepsGroup' (required) |


### Permissions

| Name | Description | Value |
|-|-|-|
| customs | Customs permissions required for the connector | PermissionsCustomsItem[] |
| resourceProvider | Resource provider permissions required for the connector | PermissionsResourceProviderItem[] |


### PermissionsCustomsItem

| Name | Description | Value |
|-|-|-|
| description | Customs permissions description | string |
| name | Customs permissions name | string |


### PermissionsResourceProviderItem

| Name | Description | Value |
|-|-|-|
| permissionsDisplayText | Permission description text | string |
| provider | Provider name | 'Microsoft.Authorization/policyAssignments''Microsoft.OperationalInsights/solutions''Microsoft.OperationalInsights/workspaces''Microsoft.OperationalInsights/workspaces/datasources''Microsoft.OperationalInsights/workspaces/sharedKeys''microsoft.aadiam/diagnosticSettings' |
| providerDisplayName | Permission provider display name | string |
| requiredPermissions | Required permissions for the connector | RequiredPermissions |
| scope | Permission provider scope | 'ResourceGroup''Subscription''Workspace' |


### RequiredPermissions

| Name | Description | Value |
|-|-|-|
| action | action permission | bool |
| delete | delete permission | bool |
| read | read permission | bool |
| write | write permission | bool |


### CodelessUiConnectorConfigPropertiesSampleQueriesItem

| Name | Description | Value |
|-|-|-|
| description | The sample query description | string |
| query | the sample query | string |


### CodelessConnectorPollingConfigProperties

| Name | Description | Value |
|-|-|-|
| auth | Describe the authentication type of the poller | CodelessConnectorPollingAuthProperties(required) |
| isActive | The poller active status | bool |
| paging | Describe the poll request paging config of the poller | CodelessConnectorPollingPagingProperties |
| request | Describe the poll request config parameters of the poller | CodelessConnectorPollingRequestProperties(required) |
| response | Describe the response config parameters of the poller | CodelessConnectorPollingResponseProperties |


### CodelessConnectorPollingAuthProperties

| Name | Description | Value |
|-|-|-|
| apiKeyIdentifier | A prefix send in the header before the actual token | string |
| apiKeyName | The header name which the token is sent with | string |
| authorizationEndpoint | The endpoint used to authorize the user, used in Oauth 2.0 flow | string |
| authorizationEndpointQueryParameters | The query parameters used in authorization request, used in Oauth 2.0 flow | For Bicep, you can use theany()function. |
| authType | The authentication type | string (required) |
| flowName | Describes the flow name, for example 'AuthCode' for Oauth 2.0 | string |
| isApiKeyInPostPayload | Marks if the key should sent in header | string |
| isClientSecretInHeader | Marks if we should send the client secret in header or payload, used in Oauth 2.0 flow | bool |
| redirectionEndpoint | The redirect endpoint where we will get the authorization code, used in Oauth 2.0 flow | string |
| scope | The OAuth token scope | string |
| tokenEndpoint | The endpoint used to issue a token, used in Oauth 2.0 flow | string |
| tokenEndpointHeaders | The query headers used in token request, used in Oauth 2.0 flow | For Bicep, you can use theany()function. |
| tokenEndpointQueryParameters | The query parameters used in token request, used in Oauth 2.0 flow | For Bicep, you can use theany()function. |


### CodelessConnectorPollingPagingProperties

| Name | Description | Value |
|-|-|-|
| nextPageParaName | Defines the name of a next page attribute | string |
| nextPageTokenJsonPath | Defines the path to a next page token JSON | string |
| pageCountAttributePath | Defines the path to a page count attribute | string |
| pageSize | Defines the paging size | int |
| pageSizeParaName | Defines the name of the page size parameter | string |
| pageTimeStampAttributePath | Defines the path to a paging time stamp attribute | string |
| pageTotalCountAttributePath | Defines the path to a page total count attribute | string |
| pagingType | Describes the type. could be 'None', 'PageToken', 'PageCount', 'TimeStamp' | string (required) |
| searchTheLatestTimeStampFromEventsList | Determines whether to search for the latest time stamp in the events list | string |


### CodelessConnectorPollingRequestProperties

| Name | Description | Value |
|-|-|-|
| apiEndpoint | Describe the endpoint we should pull the data from | string (required) |
| endTimeAttributeName | This will be used the query events from the end of the time window | string |
| headers | Describe the headers sent in the poll request | For Bicep, you can use theany()function. |
| httpMethod | The http method type we will use in the poll request, GET or POST | string (required) |
| queryParameters | Describe the query parameters sent in the poll request | For Bicep, you can use theany()function. |
| queryParametersTemplate | For advanced scenarios for example user name/password embedded in nested JSON payload | string |
| queryTimeFormat | The time format will be used the query events in a specific window | string (required) |
| queryWindowInMin | The window interval we will use the pull the data | int (required) |
| rateLimitQps | Defines the rate limit QPS | int |
| retryCount | Describe the amount of time we should try and poll the data in case of failure | int |
| startTimeAttributeName | This will be used the query events from a start of the time window | string |
| timeoutInSeconds | The number of seconds we will consider as a request timeout | int |


### CodelessConnectorPollingResponseProperties

| Name | Description | Value |
|-|-|-|
| eventsJsonPaths | Describes the path we should extract the data in the response | string[] (required) |
| isGzipCompressed | Describes if the data in the response is Gzip | bool |
| successStatusJsonPath | Describes the path we should extract the status code in the response | string |
| successStatusValue | Describes the path we should extract the status value in the response | string |


### AADDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AzureActiveDirectory' (required) |
| properties | AAD (Azure Active Directory) data connector properties. | AADDataConnectorProperties |


### AADDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### AlertsDataTypeOfDataConnector

| Name | Description | Value |
|-|-|-|
| alerts | Alerts data type connection. | DataConnectorDataTypeCommon(required) |


### DataConnectorDataTypeCommon

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### AatpDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AzureAdvancedThreatProtection' (required) |
| properties | AATP (Azure Advanced Threat Protection) data connector properties. | AatpDataConnectorProperties |


### AatpDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### ASCDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AzureSecurityCenter' (required) |
| properties | ASC (Azure Security Center) data connector properties. | ASCDataConnectorProperties |


### ASCDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| subscriptionId | The subscription id to connect to, and get the data from. | string |


### Dynamics365DataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'Dynamics365' (required) |
| properties | Dynamics365 data connector properties. | Dynamics365DataConnectorProperties |


### Dynamics365DataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | Dynamics365DataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### Dynamics365DataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| dynamics365CdsActivities | Common Data Service data type connection. | Dynamics365DataConnectorDataTypesDynamics365CdsActiv...(required) |


### Dynamics365DataConnectorDataTypesDynamics365CdsActiv...

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### CodelessUiDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'GenericUI' (required) |
| properties | Codeless UI data connector properties | CodelessParameters |


### CodelessParameters

| Name | Description | Value |
|-|-|-|
| connectorUiConfig | Config to describe the instructions blade | CodelessUiConnectorConfigProperties |


### IoTDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'IOT' (required) |
| properties | IoT data connector properties. | IoTDataConnectorProperties |


### IoTDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| subscriptionId | The subscription id to connect to, and get the data from. | string |


### McasDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftCloudAppSecurity' (required) |
| properties | MCAS (Microsoft Cloud App Security) data connector properties. | McasDataConnectorProperties |


### McasDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | McasDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### McasDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| alerts | Alerts data type connection. | DataConnectorDataTypeCommon(required) |
| discoveryLogs | Discovery log data type connection. | DataConnectorDataTypeCommon |


### MdatpDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftDefenderAdvancedThreatProtection' (required) |
| properties | MDATP (Microsoft Defender Advanced Threat Protection) data connector properties. | MdatpDataConnectorProperties |


### MdatpDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MicrosoftPurviewInformationProtectionDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftPurviewInformationProtection' (required) |
| properties | Microsoft Purview Information Protection data connector properties. | MicrosoftPurviewInformationProtectionDataConnectorPr... |


### MicrosoftPurviewInformationProtectionDataConnectorPr...

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | MicrosoftPurviewInformationProtectionConnectorDataTy...(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MicrosoftPurviewInformationProtectionConnectorDataTy...

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | MicrosoftPurviewInformationProtectionConnectorDataTy...(required) |


### MicrosoftPurviewInformationProtectionConnectorDataTy...

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MstiDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftThreatIntelligence' (required) |
| properties | Microsoft Threat Intelligence data connector properties. | MstiDataConnectorProperties |


### MstiDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | MstiDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MstiDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| bingSafetyPhishingURL | Data type for Microsoft Threat Intelligence Platforms data connector. | MstiDataConnectorDataTypesBingSafetyPhishingURL(required) |
| microsoftEmergingThreatFeed | Data type for Microsoft Threat Intelligence Platforms data connector. | MstiDataConnectorDataTypesMicrosoftEmergingThreatFee...(required) |


### MstiDataConnectorDataTypesBingSafetyPhishingURL

| Name | Description | Value |
|-|-|-|
| lookbackPeriod | lookback period | string (required) |
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MstiDataConnectorDataTypesMicrosoftEmergingThreatFee...

| Name | Description | Value |
|-|-|-|
| lookbackPeriod | lookback period | string (required) |
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MTPDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftThreatProtection' (required) |
| properties | MTP (Microsoft Threat Protection) data connector properties. | MTPDataConnectorProperties |


### MTPDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | MTPDataConnectorDataTypes(required) |
| filteredProviders | The available filtered providers for the connector. | MtpFilteredProviders |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MTPDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| alerts | Alerts data type for Microsoft Threat Protection Platforms data connector. | MTPDataConnectorDataTypesAlerts |
| incidents | Incidents data type for Microsoft Threat Protection Platforms data connector. | MTPDataConnectorDataTypesIncidents(required) |


### MTPDataConnectorDataTypesAlerts

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MTPDataConnectorDataTypesIncidents

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MtpFilteredProviders

| Name | Description | Value |
|-|-|-|
| alerts | Alerts filtered providers. When filters are not applied, all alerts will stream through the MTP pipeline, still in private preview for all products EXCEPT MDA and MDI, which are in GA state. | String array containing any of:'microsoftDefenderForCloudApps''microsoftDefenderForIdentity' (required) |


### OfficeDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'Office365' (required) |
| properties | Office data connector properties. | OfficeDataConnectorProperties |


### OfficeDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | OfficeDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficeDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| exchange | Exchange data type connection. | OfficeDataConnectorDataTypesExchange(required) |
| sharePoint | SharePoint data type connection. | OfficeDataConnectorDataTypesSharePoint(required) |
| teams | Teams data type connection. | OfficeDataConnectorDataTypesTeams(required) |


### OfficeDataConnectorDataTypesExchange

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### OfficeDataConnectorDataTypesSharePoint

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### OfficeDataConnectorDataTypesTeams

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### Office365ProjectDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'Office365Project' (required) |
| properties | Office Microsoft Project data connector properties. | Office365ProjectDataConnectorProperties |


### Office365ProjectDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | Office365ProjectConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### Office365ProjectConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | Office365ProjectConnectorDataTypesLogs(required) |


### Office365ProjectConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### OfficeATPDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'OfficeATP' (required) |
| properties | OfficeATP (Office 365 Advanced Threat Protection) data connector properties. | OfficeATPDataConnectorProperties |


### OfficeATPDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficeIRMDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'OfficeIRM' (required) |
| properties | OfficeIRM (Microsoft Insider Risk Management) data connector properties. | OfficeIRMDataConnectorProperties |


### OfficeIRMDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficePowerBIDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'OfficePowerBI' (required) |
| properties | Office Microsoft PowerBI data connector properties. | OfficePowerBIDataConnectorProperties |


### OfficePowerBIDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | OfficePowerBIConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficePowerBIConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | OfficePowerBIConnectorDataTypesLogs(required) |


### OfficePowerBIConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### TIDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'ThreatIntelligence' (required) |
| properties | TI (Threat Intelligence) data connector properties. | TIDataConnectorProperties |


### TIDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | TIDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |
| tipLookbackPeriod | The lookback period for the feed to be imported. | string |


### TIDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| indicators | Data type for indicators connection. | TIDataConnectorDataTypesIndicators(required) |


### TIDataConnectorDataTypesIndicators

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### TiTaxiiDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'ThreatIntelligenceTaxii' (required) |
| properties | Threat intelligence TAXII data connector properties. | TiTaxiiDataConnectorProperties |


### TiTaxiiDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| collectionId | The collection id of the TAXII server. | string |
| dataTypes | The available data types for Threat Intelligence TAXII data connector. | TiTaxiiDataConnectorDataTypes(required) |
| friendlyName | The friendly name for the TAXII server. | string |
| password | The password for the TAXII server. | string |
| pollingFrequency | The polling frequency for the TAXII server. | 'OnceADay''OnceAMinute''OnceAnHour' (required) |
| taxiiLookbackPeriod | The lookback period for the TAXII server. | string |
| taxiiServer | The API root for the TAXII server. | string |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |
| userName | The userName for the TAXII server. | string |
| workspaceId | The workspace id. | string |


### TiTaxiiDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| taxiiClient | Data type for TAXII connector. | TiTaxiiDataConnectorDataTypesTaxiiClient(required) |


### TiTaxiiDataConnectorDataTypesTaxiiClient

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |
## Microsoft.SecurityInsights/entityQueries@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/entityQueries@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see entityQueries objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### entityQueries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | ActivityExpansion(required) |
| etag | Etag of the azure resource | string |


### ActivityCustomEntityQueryOrActivityEntityQuery

| Name | Description | Value |
|-|-|-|
| kind | the entity query kind | 'Activity' (required) |
| properties | Activity entity query properties | ActivityEntityQueriesProperties |


### ActivityEntityQueriesProperties

| Name | Description | Value |
|-|-|-|
| content | The entity query content to display in timeline | string |
| description | The entity query description | string |
| enabled | Determines whether this activity is enabled or disabled. | bool |
| entitiesFilter | The query applied only to entities matching to all filters | object |
| inputEntityType | The type of the query's source entity | 'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''HuntingBookmark''IP''IoTDevice''MailCluster''MailMessage''Mailbox''Malware''Nic''Process''RegistryKey''RegistryValue''SecurityAlert''SecurityGroup''SubmissionMail''URL' |
| queryDefinitions | The Activity query definitions | ActivityEntityQueriesPropertiesQueryDefinitions |
| requiredInputFieldsSets | List of the fields of the source entity that are required to run the query | string[][] |
| templateName | The template id this activity was created from | string |
| title | The entity query title | string |


### ActivityEntityQueriesPropertiesQueryDefinitions

| Name | Description | Value |
|-|-|-|
| query | The Activity query to run on a given entity | string |


### ExpansionEntityQuery

| Name | Description | Value |
|-|-|-|
| kind | the entity query kind | 'Expansion' (required) |
## Microsoft.SecurityInsights/fileImports@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/fileImports@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      importFile = {
        fileFormat = "string"
        fileName = "string"
        fileSize = int
      }
      ingestionMode = "string"
      source = "string"
    }
  })
}

```

### fileImports

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | File import properties | FileImportProperties |


### FileImportProperties

| Name | Description | Value |
|-|-|-|
| contentType | The content type of this file. | 'BasicIndicator''StixIndicator''Unspecified' (required) |
| importFile | Represents the imported file. | FileMetadata(required) |
| ingestionMode | Describes how to ingest the records in the file. | 'IngestAnyValidRecords''IngestOnlyIfAllAreValid''Unspecified' (required) |
| source | The source for the data in the file. | string (required) |


### FileMetadata

| Name | Description | Value |
|-|-|-|
| fileFormat | The format of the file | 'CSV''JSON''Unspecified' |
| fileName | The name of the file. | string |
| fileSize | The size of the file. | int |
## Microsoft.SecurityInsights/incidents@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      classification = "string"
      classificationComment = "string"
      classificationReason = "string"
      description = "string"
      firstActivityTimeUtc = "string"
      labels = [
        {
          labelName = "string"
        }
      ]
      lastActivityTimeUtc = "string"
      owner = {
        assignedTo = "string"
        email = "string"
        objectId = "string"
        ownerType = "string"
        userPrincipalName = "string"
      }
      providerIncidentId = "string"
      providerName = "string"
      severity = "string"
      status = "string"
      teamInformation = {}
      title = "string"
    }
    etag = "string"
  })
}

```

### incidents

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties |  | IncidentProperties |


### IncidentProperties

| Name | Description | Value |
|-|-|-|
| classification | The reason the incident was closed | 'BenignPositive''FalsePositive''TruePositive''Undetermined' |
| classificationComment | Describes the reason the incident was closed | string |
| classificationReason | The classification reason the incident was closed with | 'InaccurateData''IncorrectAlertLogic''SuspiciousActivity''SuspiciousButExpected' |
| description | The description of the incident | string |
| firstActivityTimeUtc | The time of the first activity in the incident | string |
| labels | List of labels relevant to this incident | IncidentLabel[] |
| lastActivityTimeUtc | The time of the last activity in the incident | string |
| owner | Describes a user that the incident is assigned to | IncidentOwnerInfo |
| providerIncidentId | The incident ID assigned by the incident provider | string |
| providerName | The name of the source provider that generated the incident | string |
| severity | The severity of the incident | 'High''Informational''Low''Medium' (required) |
| status | The status of the incident | 'Active''Closed''New' (required) |
| teamInformation | Describes a team for the incident | TeamInformation |
| title | The title of the incident | string (required) |


### IncidentLabel

| Name | Description | Value |
|-|-|-|
| labelName | The name of the label | string (required) |


### IncidentOwnerInfo

| Name | Description | Value |
|-|-|-|
| assignedTo | The name of the user the incident is assigned to. | string |
| email | The email of the user the incident is assigned to. | string |
| objectId | The object id of the user the incident is assigned to. | string |
| ownerType | The type of the owner the incident is assigned to. | 'Group''Unknown''User' |
| userPrincipalName | The user principal name of the user the incident is assigned to. | string |
## Microsoft.SecurityInsights/incidents/comments@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/comments@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      message = "string"
    }
    etag = "string"
  })
}

```

### incidents/comments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:incidents |
| etag | Etag of the azure resource | string |
| properties | Incident comment properties | IncidentCommentProperties |


### IncidentCommentProperties

| Name | Description | Value |
|-|-|-|
| message | The comment message | string (required) |
## Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relatedResourceId = "string"
    }
    etag = "string"
  })
}

```

### incidents/relations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:incidents |
| etag | Etag of the azure resource | string |
| properties | Relation properties | RelationProperties |


### RelationProperties

| Name | Description | Value |
|-|-|-|
| relatedResourceId | The resource ID of the related resource | string (required) |
## Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdBy = {
        email = "string"
        name = "string"
        objectId = "string"
        userPrincipalName = "string"
      }
      description = "string"
      lastModifiedBy = {
        email = "string"
        name = "string"
        objectId = "string"
        userPrincipalName = "string"
      }
      status = "string"
      title = "string"
    }
    etag = "string"
  })
}

```

### incidents/tasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:incidents |
| etag | Etag of the azure resource | string |
| properties |  | IncidentTaskProperties(required) |


### IncidentTaskProperties

| Name | Description | Value |
|-|-|-|
| createdBy | Information on the client (user or application) that made some action | ClientInfo |
| description | The description of the task | string |
| lastModifiedBy | Information on the client (user or application) that made some action | ClientInfo |
| status |  | 'Completed''New' (required) |
| title | The title of the task | string (required) |


### ClientInfo

| Name | Description | Value |
|-|-|-|
| email | The email of the client. | string |
| name | The name of the client. | string |
| objectId | The object id of the client. | string |
| userPrincipalName | The user principal name of the client. | string |
## Microsoft.SecurityInsights/metadata@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/metadata@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      author = {
        email = "string"
        link = "string"
        name = "string"
      }
      categories = {
        domains = [
          "string"
        ]
        verticals = [
          "string"
        ]
      }
      contentId = "string"
      contentSchemaVersion = "string"
      customVersion = "string"
      dependencies = {
        contentId = "string"
        criteria = [
          {
          kind = "string"
          name = "string"
          operator = "string"
          version = "string"
      }
      firstPublishDate = "string"
      icon = "string"
      kind = "string"
      lastPublishDate = "string"
      parentId = "string"
      previewImages = [
        "string"
      ]
      previewImagesDark = [
        "string"
      ]
      providers = [
        "string"
      ]
      source = {
        kind = "string"
        name = "string"
        sourceId = "string"
      }
      support = {
        email = "string"
        link = "string"
        name = "string"
        tier = "string"
      }
      threatAnalysisTactics = [
        "string"
      ]
      threatAnalysisTechniques = [
        "string"
      ]
      version = "string"
    }
    etag = "string"
  })
}

```

### metadata

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Metadata properties | MetadataProperties |


### MetadataProperties

| Name | Description | Value |
|-|-|-|
| author | The creator of the content item. | MetadataAuthor |
| categories | Categories for the solution content item | MetadataCategories |
| contentId | Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name | string |
| contentSchemaVersion | Schema version of the content. Can be used to distinguish between different flow based on the schema version | string |
| customVersion | The custom version of the content. A optional free text | string |
| dependencies | Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats. | MetadataDependencies |
| firstPublishDate | first publish date solution content item | string |
| icon | the icon identifier. this id can later be fetched from the solution template | string |
| kind | The kind of content the metadata is for. | 'AnalyticsRule''AnalyticsRuleTemplate''AutomationRule''AzureFunction''DataConnector''DataType''HuntingQuery''InvestigationQuery''LogicAppsCustomConnector''Parser''Playbook''PlaybookTemplate''Solution''Watchlist''WatchlistTemplate''Workbook''WorkbookTemplate' (required) |
| lastPublishDate | last publish date for the solution content item | string |
| parentId | Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group) | string (required) |
| previewImages | preview image file names. These will be taken from the solution artifacts | string[] |
| previewImagesDark | preview image file names. These will be taken from the solution artifacts. used for dark theme support | string[] |
| providers | Providers for the solution content item | string[] |
| source | Source of the content.  This is where/how it was created. | MetadataSource |
| support | Support information for the metadata - type, name, contact information | MetadataSupport |
| threatAnalysisTactics | the tactics the resource covers | string[] |
| threatAnalysisTechniques | the techniques the resource covers, these have to be aligned with the tactics being used | string[] |
| version | Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks | string |


### MetadataAuthor

| Name | Description | Value |
|-|-|-|
| email | Email of author contact | string |
| link | Link for author/vendor page | string |
| name | Name of the author. Company or person. | string |


### MetadataCategories

| Name | Description | Value |
|-|-|-|
| domains | domain for the solution content item | string[] |
| verticals | Industry verticals for the solution content item | string[] |


### MetadataDependencies

| Name | Description | Value |
|-|-|-|
| contentId | Id of the content item we depend on | string |
| criteria | This is the list of dependencies we must fulfill, according to the AND/OR operator | MetadataDependencies[] |
| kind | Type of the content item we depend on | 'AnalyticsRule''AnalyticsRuleTemplate''AutomationRule''AzureFunction''DataConnector''DataType''HuntingQuery''InvestigationQuery''LogicAppsCustomConnector''Parser''Playbook''PlaybookTemplate''Solution''Watchlist''WatchlistTemplate''Workbook''WorkbookTemplate' |
| name | Name of the content item | string |
| operator | Operator used for list of dependencies in criteria array. | 'AND''OR' |
| version | Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required. | string |


### MetadataSource

| Name | Description | Value |
|-|-|-|
| kind | Source type of the content | 'Community''LocalWorkspace''Solution''SourceRepository' (required) |
| name | Name of the content source.  The repo name, solution name, LA workspace name etc. | string |
| sourceId | ID of the content source.  The solution ID, workspace ID, etc | string |


### MetadataSupport

| Name | Description | Value |
|-|-|-|
| email | Email of support contact | string |
| link | Link for support help, like to support page to open a ticket etc. | string |
| name | Name of the support contact. Company or person. | string |
| tier | Type of support for content item | 'Community''Microsoft''Partner' (required) |
## Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerManagedKey = bool
    }
    etag = "string"
  })
}

```

### onboardingStates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | The Sentinel onboarding state object | SentinelOnboardingStateProperties |


### SentinelOnboardingStateProperties

| Name | Description | Value |
|-|-|-|
| customerManagedKey | Flag that indicates the status of the CMK setting | bool |
## Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-02-01-preview

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
## Microsoft.SecurityInsights/settings@2023-02-01-preview

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
## Microsoft.SecurityInsights/sourcecontrols@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/sourcecontrols@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentTypes = [
        "string"
      ]
      description = "string"
      displayName = "string"
      id = "string"
      lastDeploymentInfo = {
        deployment = {
          deploymentId = "string"
          deploymentLogsUrl = "string"
          deploymentResult = "string"
          deploymentState = "string"
          deploymentTime = "string"
        }
        deploymentFetchStatus = "string"
        message = "string"
      }
      repository = {
        branch = "string"
        deploymentLogsUrl = "string"
        displayUrl = "string"
        pathMapping = [
          {
            contentType = "string"
            path = "string"
          }
        ]
        url = "string"
      }
      repositoryResourceInfo = {
        azureDevOpsResourceInfo = {
          pipelineId = "string"
          serviceConnectionId = "string"
        }
        gitHubResourceInfo = {
          appInstallationId = "string"
        }
        webhook = {
          rotateWebhookSecret = bool
          webhookId = "string"
          webhookSecretUpdateTime = "string"
          webhookUrl = "string"
        }
      }
      repoType = "string"
      version = "string"
    }
    etag = "string"
  })
}

```

### sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | source control properties | SourceControlProperties |


### SourceControlProperties

| Name | Description | Value |
|-|-|-|
| contentTypes | Array of source control content types. | String array containing any of:'AnalyticRule''Workbook' (required) |
| description | A description of the source control | string |
| displayName | The display name of the source control | string (required) |
| id | The id (a Guid) of the source control | string |
| lastDeploymentInfo | Information regarding the latest deployment for the source control. | DeploymentInfo |
| repository | Repository metadata. | Repository(required) |
| repositoryResourceInfo | Information regarding the resources created in user's repository. | RepositoryResourceInfo |
| repoType | The repository type of the source control | 'DevOps''Github' (required) |
| version | The version number associated with the source control | 'V1''V2' |


### DeploymentInfo

| Name | Description | Value |
|-|-|-|
| deployment | Deployment information. | Deployment |
| deploymentFetchStatus | Status while fetching the last deployment. | 'NotFound''Success''Unauthorized' |
| message | Additional details about the deployment that can be shown to the user. | string |


### Deployment

| Name | Description | Value |
|-|-|-|
| deploymentId | Deployment identifier. | string |
| deploymentLogsUrl | Url to access repository action logs. | string |
| deploymentResult | The outcome of the deployment. | 'Canceled''Failed''Success' |
| deploymentState | Current status of the deployment. | 'Canceling''Completed''In_Progress''Queued' |
| deploymentTime | The time when the deployment finished. | string |


### Repository

| Name | Description | Value |
|-|-|-|
| branch | Branch name of repository. | string |
| deploymentLogsUrl | Url to access repository action logs. | string |
| displayUrl | Display url of repository. | string |
| pathMapping | Dictionary of source control content type and path mapping. | ContentPathMap[] |
| url | Url of repository. | string |


### ContentPathMap

| Name | Description | Value |
|-|-|-|
| contentType | Content type. | 'AnalyticRule''Workbook' |
| path | The path to the content. | string |


### RepositoryResourceInfo

| Name | Description | Value |
|-|-|-|
| azureDevOpsResourceInfo | Resources created in Azure DevOps for this source-control. | AzureDevOpsResourceInfo |
| gitHubResourceInfo | Resources created in GitHub for this source-control. | GitHubResourceInfo |
| webhook | The webhook object created for the source-control. | Webhook |


### AzureDevOpsResourceInfo

| Name | Description | Value |
|-|-|-|
| pipelineId | Id of the pipeline created for the source-control. | string |
| serviceConnectionId | Id of the service-connection created for the source-control. | string |


### GitHubResourceInfo

| Name | Description | Value |
|-|-|-|
| appInstallationId | GitHub application installation id. | string |


### Webhook

| Name | Description | Value |
|-|-|-|
| rotateWebhookSecret | A flag to instruct the backend service to rotate webhook secret. | bool |
| webhookId | Unique identifier for the webhook. | string |
| webhookSecretUpdateTime | Time when the webhook secret was updated. | string |
| webhookUrl | URL that gets invoked by the webhook. | string |
## Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      confidence = int
      created = "string"
      createdByRef = "string"
      defanged = bool
      description = "string"
      displayName = "string"
      extensions = {}
      externalId = "string"
      externalLastUpdatedTimeUtc = "string"
      externalReferences = [
        {
          description = "string"
          externalId = "string"
          hashes = {}
          sourceName = "string"
          url = "string"
        }
      ]
      granularMarkings = [
        {
          language = "string"
          markingRef = int
          selectors = [
            "string"
          ]
        }
      ]
      indicatorTypes = [
        "string"
      ]
      killChainPhases = [
        {
          killChainName = "string"
          phaseName = "string"
        }
      ]
      labels = [
        "string"
      ]
      language = "string"
      lastUpdatedTimeUtc = "string"
      modified = "string"
      objectMarkingRefs = [
        "string"
      ]
      parsedPattern = [
        {
          patternTypeKey = "string"
          patternTypeValues = [
            {
              value = "string"
              valueType = "string"
            }
          ]
        }
      ]
      pattern = "string"
      patternType = "string"
      patternVersion = "string"
      revoked = bool
      source = "string"
      threatIntelligenceTags = [
        "string"
      ]
      threatTypes = [
        "string"
      ]
      validFrom = "string"
      validUntil = "string"
    }
    etag = "string"
  })
}

```

### threatIntelligence/indicators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: threatIntelligence |
| etag | Etag of the azure resource | string |
| properties | Threat Intelligence Entity properties | ThreatIntelligenceIndicatorProperties |


### ThreatIntelligenceIndicatorProperties

| Name | Description | Value |
|-|-|-|
| confidence | Confidence of threat intelligence entity | int |
| created | Created by | string |
| createdByRef | Created by reference of threat intelligence entity | string |
| defanged | Is threat intelligence entity defanged | bool |
| description | Description of a threat intelligence entity | string |
| displayName | Display name of a threat intelligence entity | string |
| extensions | Extensions map | object |
| externalId | External ID of threat intelligence entity | string |
| externalLastUpdatedTimeUtc | External last updated time in UTC | string |
| externalReferences | External References | ThreatIntelligenceExternalReference[] |
| granularMarkings | Granular Markings | ThreatIntelligenceGranularMarkingModel[] |
| indicatorTypes | Indicator types of threat intelligence entities | string[] |
| killChainPhases | Kill chain phases | ThreatIntelligenceKillChainPhase[] |
| labels | Labels  of threat intelligence entity | string[] |
| language | Language of threat intelligence entity | string |
| lastUpdatedTimeUtc | Last updated time in UTC | string |
| modified | Modified by | string |
| objectMarkingRefs | Threat intelligence entity object marking references | string[] |
| parsedPattern | Parsed patterns | ThreatIntelligenceParsedPattern[] |
| pattern | Pattern of a threat intelligence entity | string |
| patternType | Pattern type of a threat intelligence entity | string |
| patternVersion | Pattern version of a threat intelligence entity | string |
| revoked | Is threat intelligence entity revoked | bool |
| source | Source of a threat intelligence entity | string |
| threatIntelligenceTags | List of tags | string[] |
| threatTypes | Threat types | string[] |
| validFrom | Valid from | string |
| validUntil | Valid until | string |


### ThreatIntelligenceExternalReference

| Name | Description | Value |
|-|-|-|
| description | External reference description | string |
| externalId | External reference ID | string |
| hashes | External reference hashes | object |
| sourceName | External reference source name | string |
| url | External reference URL | string |


### ThreatIntelligenceGranularMarkingModel

| Name | Description | Value |
|-|-|-|
| language | Language granular marking model | string |
| markingRef | marking reference granular marking model | int |
| selectors | granular marking model selectors | string[] |


### ThreatIntelligenceKillChainPhase

| Name | Description | Value |
|-|-|-|
| killChainName | Kill chainName name | string |
| phaseName | Phase name | string |


### ThreatIntelligenceParsedPattern

| Name | Description | Value |
|-|-|-|
| patternTypeKey | Pattern type key | string |
| patternTypeValues | Pattern type keys | ThreatIntelligenceParsedPatternTypeValue[] |


### ThreatIntelligenceParsedPatternTypeValue

| Name | Description | Value |
|-|-|-|
| value | Value of parsed pattern | string |
| valueType | Type of the value | string |
## Microsoft.SecurityInsights/watchlists@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/watchlists@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      created = "string"
      createdBy = {
        objectId = "string"
      }
      defaultDuration = "string"
      description = "string"
      displayName = "string"
      isDeleted = bool
      itemsSearchKey = "string"
      labels = [
        "string"
      ]
      numberOfLinesToSkip = int
      provider = "string"
      rawContent = "string"
      source = "string"
      sourceType = "string"
      tenantId = "string"
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
      uploadStatus = "string"
      watchlistAlias = "string"
      watchlistId = "string"
      watchlistType = "string"
    }
    etag = "string"
  })
}

```

### watchlists

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| etag | Etag of the azure resource | string |
| properties | Watchlist properties | WatchlistProperties |


### WatchlistProperties

| Name | Description | Value |
|-|-|-|
| contentType | The content type of the raw content. Example : text/csv or text/tsv | string |
| created | The time the watchlist was created | string |
| createdBy | Describes a user that created the watchlist | UserInfo |
| defaultDuration | The default duration of a watchlist (in ISO 8601 duration format) | string |
| description | A description of the watchlist | string |
| displayName | The display name of the watchlist | string (required) |
| isDeleted | A flag that indicates if the watchlist is deleted or not | bool |
| itemsSearchKey | The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address. | string (required) |
| labels | List of labels relevant to this watchlist | string[] |
| numberOfLinesToSkip | The number of lines in a csv/tsv content to skip before the header | int |
| provider | The provider of the watchlist | string (required) |
| rawContent | The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint | string |
| source | The filename of the watchlist, called 'source' | string |
| sourceType | The sourceType of the watchlist | 'Local file''Remote storage' |
| tenantId | The tenantId where the watchlist belongs to | string |
| updated | The last time the watchlist was updated | string |
| updatedBy | Describes a user that updated the watchlist | UserInfo |
| uploadStatus | The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted | string |
| watchlistAlias | The alias of the watchlist | string |
| watchlistId | The id (a Guid) of the watchlist | string |
| watchlistType | The type of the watchlist | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |
## Microsoft.SecurityInsights/watchlists/watchlistItems@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/watchlists/watchlistItems@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      created = "string"
      createdBy = {
        objectId = "string"
      }
      entityMapping = {}
      isDeleted = bool
      itemsKeyValue = {}
      tenantId = "string"
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
      watchlistItemId = "string"
      watchlistItemType = "string"
    }
    etag = "string"
  })
}

```

### watchlists/watchlistItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:watchlists |
| etag | Etag of the azure resource | string |
| properties | Watchlist Item properties | WatchlistItemProperties |


### WatchlistItemProperties

| Name | Description | Value |
|-|-|-|
| created | The time the watchlist item was created | string |
| createdBy | Describes a user that created the watchlist item | UserInfo |
| entityMapping | key-value pairs for a watchlist item entity mapping | object |
| isDeleted | A flag that indicates if the watchlist item is deleted or not | bool |
| itemsKeyValue | key-value pairs for a watchlist item | object (required) |
| tenantId | The tenantId to which the watchlist item belongs to | string |
| updated | The last time the watchlist item was updated | string |
| updatedBy | Describes a user that updated the watchlist item | UserInfo |
| watchlistItemId | The id (a Guid) of the watchlist item | string |
| watchlistItemType | The type of the watchlist item | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |
