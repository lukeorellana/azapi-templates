```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customRules = [
        {
          action = "string"
          groupByUserSession = [
            {
              groupByVariables = [
                {
                  variableName = "string"
                }
              ]
            }
          ]
          matchConditions = [
            {
              matchValues = [
                "string"
              ]
              matchVariables = [
                {
                  selector = "string"
                  variableName = "string"
                }
              ]
              negationConditon = bool
              operator = "string"
              transforms = [
                "string"
              ]
            }
          ]
          name = "string"
          priority = int
          rateLimitDuration = "string"
          rateLimitThreshold = int
          ruleType = "string"
          state = "string"
        }
      ]
      managedRules = {
        exclusions = [
          {
            exclusionManagedRuleSets = [
              {
                ruleGroups = [
                  {
                    ruleGroupName = "string"
                    rules = [
                      {
                        ruleId = "string"
                      }
                    ]
                  }
                ]
                ruleSetType = "string"
                ruleSetVersion = "string"
              }
            ]
            matchVariable = "string"
            selector = "string"
            selectorMatchOperator = "string"
          }
        ]
        managedRuleSets = [
          {
            ruleGroupOverrides = [
              {
                ruleGroupName = "string"
                rules = [
                  {
                    action = "string"
                    ruleId = "string"
                    state = "string"
                  }
                ]
              }
            ]
            ruleSetType = "string"
            ruleSetVersion = "string"
          }
        ]
      }
      policySettings = {
        customBlockResponseBody = "string"
        customBlockResponseStatusCode = int
        fileUploadEnforcement = bool
        fileUploadLimitInMb = int
        logScrubbing = {
          scrubbingRules = [
            {
              matchVariable = "string"
              selector = "string"
              selectorMatchOperator = "string"
              state = "string"
            }
          ]
          state = "string"
        }
        maxRequestBodySizeInKb = int
        mode = "string"
        requestBodyCheck = bool
        requestBodyEnforcement = bool
        requestBodyInspectLimitInKB = int
        state = "string"
      }
    }
  })
}

```

### ApplicationGatewayWebApplicationFirewallPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the web application firewall policy. | WebApplicationFirewallPolicyPropertiesFormat |


### WebApplicationFirewallPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| customRules | The custom rules inside the policy. | WebApplicationFirewallCustomRule[] |
| managedRules | Describes the managedRules structure. | ManagedRulesDefinition(required) |
| policySettings | The PolicySettings for policy. | PolicySettings |


### WebApplicationFirewallCustomRule

| Name | Description | Value |
|-|-|-|
| action | Type of Actions. | 'Allow''Block''Log' (required) |
| groupByUserSession | List of user session identifier group by clauses. | GroupByUserSession[] |
| matchConditions | List of match conditions. | MatchCondition[] (required) |
| name | The name of the resource that is unique within a policy. This name can be used to access the resource. | string |
| priority | Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value. | int (required) |
| rateLimitDuration | Duration over which Rate Limit policy will be applied. Applies only when ruleType is RateLimitRule. | 'FiveMins''OneMin' |
| rateLimitThreshold | Rate Limit threshold to apply in case ruleType is RateLimitRule. Must be greater than or equal to 1 | int |
| ruleType | The rule type. | 'Invalid''MatchRule''RateLimitRule' (required) |
| state | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | 'Disabled''Enabled' |


### GroupByUserSession

| Name | Description | Value |
|-|-|-|
| groupByVariables | List of group by clause variables. | GroupByVariable[] (required) |


### GroupByVariable

| Name | Description | Value |
|-|-|-|
| variableName | User Session clause variable. | 'ClientAddr''GeoLocation''None' (required) |


### MatchCondition

| Name | Description | Value |
|-|-|-|
| matchValues | Match value. | string[] (required) |
| matchVariables | List of match variables. | MatchVariable[] (required) |
| negationConditon | Whether this is negate condition or not. | bool |
| operator | The operator to be matched. | 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual''Regex' (required) |
| transforms | List of transforms. | String array containing any of:'HtmlEntityDecode''Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |


### MatchVariable

| Name | Description | Value |
|-|-|-|
| selector | The selector of match variable. | string |
| variableName | Match Variable. | 'PostArgs''QueryString''RemoteAddr''RequestBody''RequestCookies''RequestHeaders''RequestMethod''RequestUri' (required) |


### ManagedRulesDefinition

| Name | Description | Value |
|-|-|-|
| exclusions | The Exclusions that are applied on the policy. | OwaspCrsExclusionEntry[] |
| managedRuleSets | The managed rule sets that are associated with the policy. | ManagedRuleSet[] (required) |


### OwaspCrsExclusionEntry

| Name | Description | Value |
|-|-|-|
| exclusionManagedRuleSets | The managed rule sets that are associated with the exclusion. | ExclusionManagedRuleSet[] |
| matchVariable | The variable to be excluded. | 'RequestArgKeys''RequestArgNames''RequestArgValues''RequestCookieKeys''RequestCookieNames''RequestCookieValues''RequestHeaderKeys''RequestHeaderNames''RequestHeaderValues' (required) |
| selector | When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to. | string (required) |
| selectorMatchOperator | When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to. | 'Contains''EndsWith''Equals''EqualsAny''StartsWith' (required) |


### ExclusionManagedRuleSet

| Name | Description | Value |
|-|-|-|
| ruleGroups | Defines the rule groups to apply to the rule set. | ExclusionManagedRuleGroup[] |
| ruleSetType | Defines the rule set type to use. | string (required) |
| ruleSetVersion | Defines the version of the rule set to use. | string (required) |


### ExclusionManagedRuleGroup

| Name | Description | Value |
|-|-|-|
| ruleGroupName | The managed rule group for exclusion. | string (required) |
| rules | List of rules that will be excluded. If none specified, all rules in the group will be excluded. | ExclusionManagedRule[] |


### ExclusionManagedRule

| Name | Description | Value |
|-|-|-|
| ruleId | Identifier for the managed rule. | string (required) |


### ManagedRuleSet

| Name | Description | Value |
|-|-|-|
| ruleGroupOverrides | Defines the rule group overrides to apply to the rule set. | ManagedRuleGroupOverride[] |
| ruleSetType | Defines the rule set type to use. | string (required) |
| ruleSetVersion | Defines the version of the rule set to use. | string (required) |


### ManagedRuleGroupOverride

| Name | Description | Value |
|-|-|-|
| ruleGroupName | The managed rule group to override. | string (required) |
| rules | List of rules that will be disabled. If none specified, all rules in the group will be disabled. | ManagedRuleOverride[] |


### ManagedRuleOverride

| Name | Description | Value |
|-|-|-|
| action | Describes the override action to be applied when rule matches. | 'Allow''AnomalyScoring''Block''Log' |
| ruleId | Identifier for the managed rule. | string (required) |
| state | The state of the managed rule. Defaults to Disabled if not specified. | 'Disabled''Enabled' |


### PolicySettings

| Name | Description | Value |
|-|-|-|
| customBlockResponseBody | If the action type is block, customer can override the response body. The body must be specified in base64 encoding. | string |
| customBlockResponseStatusCode | If the action type is block, customer can override the response status code. | int |
| fileUploadEnforcement | Whether allow WAF to enforce file upload limits. | bool |
| fileUploadLimitInMb | Maximum file upload size in Mb for WAF. | int |
| logScrubbing | To scrub sensitive log fields | PolicySettingsLogScrubbing |
| maxRequestBodySizeInKb | Maximum request body size in Kb for WAF. | int |
| mode | The mode of the policy. | 'Detection''Prevention' |
| requestBodyCheck | Whether to allow WAF to check request Body. | bool |
| requestBodyEnforcement | Whether allow WAF to enforce request body limits. | bool |
| requestBodyInspectLimitInKB | Max inspection limit in KB for request body inspection for WAF. | int |
| state | The state of the policy. | 'Disabled''Enabled' |


### PolicySettingsLogScrubbing

| Name | Description | Value |
|-|-|-|
| scrubbingRules | The rules that are applied to the logs for scrubbing. | WebApplicationFirewallScrubbingRules[] |
| state | State of the log scrubbing config. Default value is Enabled. | 'Disabled''Enabled' |


### WebApplicationFirewallScrubbingRules

| Name | Description | Value |
|-|-|-|
| matchVariable | The variable to be scrubbed from the logs. | 'RequestArgNames''RequestCookieNames''RequestHeaderNames''RequestIPAddress''RequestJSONArgNames''RequestPostArgNames' (required) |
| selector | When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to. | string |
| selectorMatchOperator | When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to. | 'Equals''EqualsAny' (required) |
| state | Defines the state of log scrubbing rule. Default value is Enabled. | 'Disabled''Enabled' |


