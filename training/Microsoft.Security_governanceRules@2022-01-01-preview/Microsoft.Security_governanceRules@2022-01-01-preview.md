```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/governanceRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conditionSets = [ object ]
      description = "string"
      displayName = "string"
      excludedScopes = [
        "string"
      ]
      governanceEmailNotification = {
        disableManagerEmailNotification = bool
        disableOwnerEmailNotification = bool
      }
      includeMemberScopes = bool
      isDisabled = bool
      isGracePeriod = bool
      metadata = {}
      ownerSource = {
        type = "string"
        value = "string"
      }
      remediationTimeframe = "string"
      rulePriority = int
      ruleType = "string"
      sourceResourceType = "Assessments"
    }
  })
}

```

### governanceRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of a governance rule | GovernanceRuleProperties |


### GovernanceRuleProperties

| Name | Description | Value |
|-|-|-|
| conditionSets | The governance rule conditionSets - see examples | any[] (required) |
| description | Description of the governance rule | string |
| displayName | Display name of the governance rule | string (required) |
| excludedScopes | Excluded scopes, filter out the descendants of the scope (on management scopes) | string[] |
| governanceEmailNotification | The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners | GovernanceRuleEmailNotification |
| includeMemberScopes | Defines whether the rule is management scope rule (master connector as a single scope or management scope) | bool |
| isDisabled | Defines whether the rule is active/inactive | bool |
| isGracePeriod | Defines whether there is a grace period on the governance rule | bool |
| metadata | The governance rule metadata | GovernanceRuleMetadata |
| ownerSource | The owner source for the governance rule - e.g. Manually by user@contoso.com - see example | GovernanceRuleOwnerSource(required) |
| remediationTimeframe | Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days | stringConstraints:Pattern =^[0-9]+\.[0-9]{2}:[0-9]{2}:[0-9]{2}$ |
| rulePriority | The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed | int (required)Constraints:Min value = 0Max value = 1000 |
| ruleType | The rule type of the governance rule, defines the source of the rule e.g. Integrated | 'Integrated''ServiceNow' (required) |
| sourceResourceType | The governance rule source, what the rule affects, e.g. Assessments | 'Assessments' (required) |


### GovernanceRuleEmailNotification

| Name | Description | Value |
|-|-|-|
| disableManagerEmailNotification | Defines whether manager email notifications are disabled | bool |
| disableOwnerEmailNotification | Defines whether owner email notifications are disabled | bool |


### GovernanceRuleOwnerSource

| Name | Description | Value |
|-|-|-|
| type | The owner type for the governance rule owner source | 'ByTag''Manually' |
| value | The source value e.g. tag key like owner name or email address | string |


