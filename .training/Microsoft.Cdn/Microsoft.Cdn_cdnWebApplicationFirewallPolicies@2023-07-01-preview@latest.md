```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/cdnWebApplicationFirewallPolicies@2023-07-01-preview"
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
          }
        ]
      }
      extendedProperties = {
        {customized property} = "string"
      }
      managedRules = {
        managedRuleSets = [
          {
            anomalyScore = int
            ruleGroupOverrides = [
              {
                ruleGroupName = "string"
                rules = [
                  {
                    action = "string"
                    enabledState = "string"
                    ruleId = "string"
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
        defaultCustomBlockResponseBody = "string"
        defaultCustomBlockResponseStatusCode = int
        defaultRedirectUrl = "string"
        enabledState = "string"
        mode = "string"
      }
      rateLimitRules = {
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
          }
        ]
      }
    }
    sku = {
      name = "string"
    }
    etag = "string"
  })
}

```

### cdnWebApplicationFirewallPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy. | Sku(required) |
| etag | Gets a unique read-only string that changes whenever the resource is updated. | string |
| properties | Properties of the web application firewall policy. | CdnWebApplicationFirewallPolicyProperties |


### CdnWebApplicationFirewallPolicyProperties

| Name | Description | Value |
|-|-|-|
| customRules | Describes custom rules inside the policy. | CustomRuleList |
| extendedProperties | Key-Value pair representing additional properties for Web Application Firewall policy. | CdnWebApplicationFirewallPolicyPropertiesExtendedPro... |
| managedRules | Describes managed rules inside the policy. | ManagedRuleSetList |
| policySettings | Describes  policySettings for policy | PolicySettings |
| rateLimitRules | Describes rate limit rules inside the policy. | RateLimitRuleList |


### CustomRuleList

| Name | Description | Value |
|-|-|-|
| rules | List of rules | CustomRule[] |


### CustomRule

| Name | Description | Value |
|-|-|-|
| action | Describes what action to be applied when rule matches | 'Allow''Block''Log''Redirect' (required) |
| enabledState | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | 'Disabled''Enabled' |
| matchConditions | List of match conditions. | MatchCondition[] (required) |
| name | Defines the name of the custom rule | string (required) |
| priority | Defines in what order this rule be evaluated in the overall list of custom rules | int (required)Constraints:Min value = 0Max value = 1000 |


### MatchCondition

| Name | Description | Value |
|-|-|-|
| matchValue | List of possible match values. | string[] (required) |
| matchVariable | Match variable to compare against. | 'Cookies''PostArgs''QueryString''RemoteAddr''RequestBody''RequestHeader''RequestMethod''RequestUri''SocketAddr' (required) |
| negateCondition | Describes if the result of this condition should be negated. | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Selector can used to match a specific key for QueryString, Cookies, RequestHeader or PostArgs. | string |
| transforms | List of transforms. | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |


### CdnWebApplicationFirewallPolicyPropertiesExtendedPro...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ManagedRuleSetList

| Name | Description | Value |
|-|-|-|
| managedRuleSets | List of rule sets. | ManagedRuleSet[] |


### ManagedRuleSet

| Name | Description | Value |
|-|-|-|
| anomalyScore | Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests. | intConstraints:Min value = 0Max value = 20 |
| ruleGroupOverrides | Defines the rule overrides to apply to the rule set. | ManagedRuleGroupOverride[] |
| ruleSetType | Defines the rule set type to use. | string (required) |
| ruleSetVersion | Defines the version of the rule set to use. | string (required) |


### ManagedRuleGroupOverride

| Name | Description | Value |
|-|-|-|
| ruleGroupName | Describes the managed rule group within the rule set to override | string (required) |
| rules | List of rules that will be enabled. If none specified, all rules in the group will be disabled. | ManagedRuleOverride[] |


### ManagedRuleOverride

| Name | Description | Value |
|-|-|-|
| action | Describes the override action to be applied when rule matches. | 'Allow''Block''Log''Redirect' |
| enabledState | Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified. | 'Disabled''Enabled' |
| ruleId | Identifier for the managed rule. | string (required) |


### PolicySettings

| Name | Description | Value |
|-|-|-|
| defaultCustomBlockResponseBody | If the action type is block, customer can override the response body. The body must be specified in base64 encoding. | stringConstraints:Pattern =^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$ |
| defaultCustomBlockResponseStatusCode | If the action type is block, this field defines the default customer overridable http response status code. | int |
| defaultRedirectUrl | If action type is redirect, this field represents the default redirect URL for the client. | string |
| enabledState | describes if the policy is in enabled state or disabled state | 'Disabled''Enabled' |
| mode | Describes if it is in detection mode or prevention mode at policy level. | 'Detection''Prevention' |


### RateLimitRuleList

| Name | Description | Value |
|-|-|-|
| rules | List of rules | RateLimitRule[] |


### RateLimitRule

| Name | Description | Value |
|-|-|-|
| action | Describes what action to be applied when rule matches | 'Allow''Block''Log''Redirect' (required) |
| enabledState | Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. | 'Disabled''Enabled' |
| matchConditions | List of match conditions. | MatchCondition[] (required) |
| name | Defines the name of the custom rule | string (required) |
| priority | Defines in what order this rule be evaluated in the overall list of custom rules | int (required)Constraints:Min value = 0Max value = 1000 |
| rateLimitDurationInMinutes | Defines rate limit duration. Default is 1 minute. | int (required)Constraints:Min value = 0Max value = 60 |
| rateLimitThreshold | Defines rate limit threshold. | int (required)Constraints:Min value = 0 |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the pricing tier. | 'Custom_Verizon''Premium_AzureFrontDoor''Premium_Verizon''StandardPlus_955BandWidth_ChinaCdn''StandardPlus_AvgBandWidth_ChinaCdn''StandardPlus_ChinaCdn''Standard_955BandWidth_ChinaCdn''Standard_Akamai''Standard_AvgBandWidth_ChinaCdn''Standard_AzureFrontDoor''Standard_ChinaCdn''Standard_Microsoft''Standard_Verizon' |


