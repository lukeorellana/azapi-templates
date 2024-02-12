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


