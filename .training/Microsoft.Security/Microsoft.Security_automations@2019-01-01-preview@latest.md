```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/automations@2019-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        {
          actionType = "string"
          // For remaining properties, see AutomationAction objects
        }
      ]
      description = "string"
      isEnabled = bool
      scopes = [
        {
          description = "string"
          scopePath = "string"
        }
      ]
      sources = [
        {
          eventSource = "string"
          ruleSets = [
            {
              rules = [
                {
                  expectedValue = "string"
                  operator = "string"
                  propertyJPath = "string"
                  propertyType = "string"
                }
              ]
            }
          ]
        }
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

### automations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Security automation data | AutomationProperties |


### AutomationProperties

| Name | Description | Value |
|-|-|-|
| actions | A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true. | AutomationAction[] |
| description | The security automation description. | string |
| isEnabled | Indicates whether the security automation is enabled. | bool |
| scopes | A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes. | AutomationScope[] |
| sources | A collection of the source event types which evaluate the security automation set of rules. | AutomationSource[] |


### AutomationAction

| Name | Description | Value |
|-|-|-|
| actionType | Set the object type | EventHubLogicAppWorkspace(required) |


### AutomationActionEventHub

| Name | Description | Value |
|-|-|-|
| actionType | The type of the action that will be triggered by the Automation | 'EventHub' (required) |
| connectionString | The target Event Hub connection string (it will not be included in any response). | string |
| eventHubResourceId | The target Event Hub Azure Resource ID. | string |


### AutomationActionLogicApp

| Name | Description | Value |
|-|-|-|
| actionType | The type of the action that will be triggered by the Automation | 'LogicApp' (required) |
| logicAppResourceId | The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App | string |
| uri | The Logic App trigger URI endpoint (it will not be included in any response). | string |


### AutomationActionWorkspace

| Name | Description | Value |
|-|-|-|
| actionType | The type of the action that will be triggered by the Automation | 'Workspace' (required) |
| workspaceResourceId | The fully qualified Log Analytics Workspace Azure Resource ID. | string |


### AutomationScope

| Name | Description | Value |
|-|-|-|
| description | The resources scope description. | string |
| scopePath | The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs). | string |


### AutomationSource

| Name | Description | Value |
|-|-|-|
| eventSource | A valid event source type. | 'Alerts''Assessments''AssessmentsSnapshot''RegulatoryComplianceAssessment''RegulatoryComplianceAssessmentSnapshot''SecureScoreControls''SecureScoreControlsSnapshot''SecureScores''SecureScoresSnapshot''SubAssessments''SubAssessmentsSnapshot' |
| ruleSets | A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or'). | AutomationRuleSet[] |


### AutomationRuleSet

| Name | Description | Value |
|-|-|-|
| rules |  | AutomationTriggeringRule[] |


### AutomationTriggeringRule

| Name | Description | Value |
|-|-|-|
| expectedValue | The expected value. | string |
| operator | A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType. | 'Contains''EndsWith''Equals''GreaterThan''GreaterThanOrEqualTo''LesserThan''LesserThanOrEqualTo''NotEquals''StartsWith' |
| propertyJPath | The JPath of the entity model property that should be checked. | string |
| propertyType | The data type of the compared operands (string, integer, floating point number or a boolean [true/false]] | 'Boolean''Integer''Number''String' |


