```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customRules = {
        rules = [
          {
            action = "string"
            enabledState = "string"
            matchConditions = [
              {
                matchValue = [
                  "string"
                ]
                matchVariable = "string"
                negateCondition = bool
                operator = "string"
                selector = "string"
                transforms = [
                  "string"
                ]
              }
            ]
            name = "string"
            priority = int
            rateLimitDurationInMinutes = int
            rateLimitThreshold = int
            ruleType = "string"
          }
        ]
      }
      managedRules = {
        managedRuleSets = [
          {
            exclusions = [
              {
                matchVariable = "string"
                selector = "string"
                selectorMatchOperator = "string"
              }
            ]
            ruleGroupOverrides = [
              {
                exclusions = [
                  {
                    matchVariable = "string"
                    selector = "string"
                    selectorMatchOperator = "string"
                  }
                ]
                ruleGroupName = "string"
                rules = [
                  {
                    action = "string"
                    enabledState = "string"
                    exclusions = [
                      {
                        matchVariable = "string"
                        selector = "string"
                        selectorMatchOperator = "string"
                      }
                    ]
                    ruleId = "string"
                  }
                ]
              }
            ]
            ruleSetAction = "string"
            ruleSetType = "string"
            ruleSetVersion = "string"
          }
        ]
      }
      policySettings = {
        customBlockResponseBody = "string"
        customBlockResponseStatusCode = int
        enabledState = "string"
        mode = "string"
        redirectUrl = "string"
        requestBodyCheck = "string"
      }
    }
    sku = {
      name = "string"
    }
    etag = "string"
  })
}

```

### FrontDoorWebApplicationFirewallPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128Valid characters:Alphanumerics.Start with letter. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified. | Sku |
| etag | Gets a unique read-only string that changes whenever the resource is updated. | string |
| properties | Properties of the web application firewall policy. | WebApplicationFirewallPolicyProperties |


### WebApplicationFirewallPolicyProperties

| Name | Description | Value |
|-|-|-|
| customRules | Describes custom rules inside the policy. | CustomRuleList |
| managedRules | Describes managed rules inside the policy. | ManagedRuleSetList |
| policySettings | Describes settings for the policy. | PolicySettings |


### CustomRuleList

| Name | Description | Value |
|-|-|-|
| rules | List of rules | CustomRule[] |


### CustomRule

| Name | Description | Value |
|-|-|-|
| action | Describes what action to be applied when rule matches. | 'Allow''Block''Log''Redirect' (required) |
| enabledState | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | 'Disabled''Enabled' |
| matchConditions | List of match conditions. | MatchCondition[] (required) |
| name | Describes the name of the rule. | string |
| priority | Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value. | int (required) |
| rateLimitDurationInMinutes | Time window for resetting the rate limit count. Default is 1 minute. | int |
| rateLimitThreshold | Number of allowed requests per client within the time window. | int |
| ruleType | Describes type of rule. | 'MatchRule''RateLimitRule' (required) |


### MatchCondition

| Name | Description | Value |
|-|-|-|
| matchValue | List of possible match values. | string[] (required) |
| matchVariable | Request variable to compare with. | 'Cookies''PostArgs''QueryString''RemoteAddr''RequestBody''RequestHeader''RequestMethod''RequestUri''SocketAddr' (required) |
| negateCondition | Describes if the result of this condition should be negated. | bool |
| operator | Comparison type to use for matching with the variable value. | 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null. | string |
| transforms | List of transforms. | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |


### ManagedRuleSetList

| Name | Description | Value |
|-|-|-|
| managedRuleSets | List of rule sets. | ManagedRuleSet[] |


### ManagedRuleSet

| Name | Description | Value |
|-|-|-|
| exclusions | Describes the exclusions that are applied to all rules in the set. | ManagedRuleExclusion[] |
| ruleGroupOverrides | Defines the rule group overrides to apply to the rule set. | ManagedRuleGroupOverride[] |
| ruleSetAction | Defines the rule set action. | 'Block''Log''Redirect' |
| ruleSetType | Defines the rule set type to use. | string (required) |
| ruleSetVersion | Defines the version of the rule set to use. | string (required) |


### ManagedRuleExclusion

| Name | Description | Value |
|-|-|-|
| matchVariable | The variable type to be excluded. | 'QueryStringArgNames''RequestBodyJsonArgNames''RequestBodyPostArgNames''RequestCookieNames''RequestHeaderNames' (required) |
| selector | Selector value for which elements in the collection this exclusion applies to. | string (required) |
| selectorMatchOperator | Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to. | 'Contains''EndsWith''Equals''EqualsAny''StartsWith' (required) |


### ManagedRuleGroupOverride

| Name | Description | Value |
|-|-|-|
| exclusions | Describes the exclusions that are applied to all rules in the group. | ManagedRuleExclusion[] |
| ruleGroupName | Describes the managed rule group to override. | string (required) |
| rules | List of rules that will be disabled. If none specified, all rules in the group will be disabled. | ManagedRuleOverride[] |


### ManagedRuleOverride

| Name | Description | Value |
|-|-|-|
| action | Describes the override action to be applied when rule matches. | 'Allow''Block''Log''Redirect' |
| enabledState | Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified. | 'Disabled''Enabled' |
| exclusions | Describes the exclusions that are applied to this specific rule. | ManagedRuleExclusion[] |
| ruleId | Identifier for the managed rule. | string (required) |


### PolicySettings

| Name | Description | Value |
|-|-|-|
| customBlockResponseBody | If the action type is block, customer can override the response body. The body must be specified in base64 encoding. | string |
| customBlockResponseStatusCode | If the action type is block, customer can override the response status code. | int |
| enabledState | Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified. | 'Disabled''Enabled' |
| mode | Describes if it is in detection mode or prevention mode at policy level. | 'Detection''Prevention' |
| redirectUrl | If action type is redirect, this field represents redirect URL for the client. | string |
| requestBodyCheck | Describes if policy managed rules will inspect the request body content. | 'Disabled''Enabled' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the pricing tier. | 'Classic_AzureFrontDoor''Premium_AzureFrontDoor''Standard_AzureFrontDoor' |


