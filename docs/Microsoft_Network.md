## Microsoft.Network/frontDoors@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/frontDoors@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backends = [
              {
                address = "string"
                backendHostHeader = "string"
                enabledState = "string"
                httpPort = int
                httpsPort = int
                priority = int
                privateLinkAlias = "string"
                privateLinkApprovalMessage = "string"
                privateLinkLocation = "string"
                privateLinkResourceId = "string"
                weight = int
              }
            ]
            healthProbeSettings = {
              id = "string"
            }
            loadBalancingSettings = {
              id = "string"
            }
          }
        }
      ]
      backendPoolsSettings = {
        enforceCertificateNameCheck = "string"
        sendRecvTimeoutSeconds = int
      }
      enabledState = "string"
      friendlyName = "string"
      frontendEndpoints = [
        {
          id = "string"
          name = "string"
          properties = {
            hostName = "string"
            sessionAffinityEnabledState = "string"
            sessionAffinityTtlSeconds = int
            webApplicationFirewallPolicyLink = {
              id = "string"
            }
          }
        }
      ]
      healthProbeSettings = [
        {
          id = "string"
          name = "string"
          properties = {
            enabledState = "string"
            healthProbeMethod = "string"
            intervalInSeconds = int
            path = "string"
            protocol = "string"
          }
        }
      ]
      loadBalancingSettings = [
        {
          id = "string"
          name = "string"
          properties = {
            additionalLatencyMilliseconds = int
            sampleSize = int
            successfulSamplesRequired = int
          }
        }
      ]
      routingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            acceptedProtocols = [
              "string"
            ]
            enabledState = "string"
            frontendEndpoints = [
              {
                id = "string"
              }
            ]
            patternsToMatch = [
              "string"
            ]
            routeConfiguration = {
              @odata.type = "string"
              // For remaining properties, see RouteConfiguration objects
            }
            rulesEngine = {
              id = "string"
            }
            webApplicationFirewallPolicyLink = {
              id = "string"
            }
          }
        }
      ]
    }
  })
}

```

### frontDoors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 5-64Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Front Door Load Balancer | FrontDoorProperties |


### FrontDoorProperties

| Name | Description | Value |
|-|-|-|
| backendPools | Backend pools available to routing rules. | BackendPool[] |
| backendPoolsSettings | Settings for all backendPools | BackendPoolsSettings |
| enabledState | Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| friendlyName | A friendly name for the frontDoor | string |
| frontendEndpoints | Frontend endpoints available to routing rules. | FrontendEndpoint[] |
| healthProbeSettings | Health probe settings associated with this Front Door instance. | HealthProbeSettingsModel[] |
| loadBalancingSettings | Load balancing settings associated with this Front Door instance. | LoadBalancingSettingsModel[] |
| routingRules | Routing rules associated with this Front Door. | RoutingRule[] |


### BackendPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Resource name. | string |
| properties | Properties of the Front Door Backend Pool | BackendPoolProperties |


### BackendPoolProperties

| Name | Description | Value |
|-|-|-|
| backends | The set of backends for this pool | Backend[] |
| healthProbeSettings | L7 health probe settings for a backend pool | SubResource |
| loadBalancingSettings | Load balancing settings for a backend pool | SubResource |


### Backend

| Name | Description | Value |
|-|-|-|
| address | Location of the backend (IP address or FQDN) | string |
| backendHostHeader | The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host. | string |
| enabledState | Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| httpPort | The HTTP TCP port number. Must be between 1 and 65535. | int |
| httpsPort | The HTTPS TCP port number. Must be between 1 and 65535. | int |
| priority | Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy. | int |
| privateLinkAlias | The Alias of the Private Link resource. Populating this optional field indicates that this backend is 'Private' | string |
| privateLinkApprovalMessage | A custom message to be included in the approval request to connect to the Private Link | string |
| privateLinkLocation | The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated | string |
| privateLinkResourceId | The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private' | string |
| weight | Weight of this endpoint for load balancing purposes. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### BackendPoolsSettings

| Name | Description | Value |
|-|-|-|
| enforceCertificateNameCheck | Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests. | 'Disabled''Enabled' |
| sendRecvTimeoutSeconds | Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns. | int |


### FrontendEndpoint

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Resource name. | string |
| properties | Properties of the Frontend endpoint | FrontendEndpointProperties |


### FrontendEndpointProperties

| Name | Description | Value |
|-|-|-|
| hostName | The host name of the frontendEndpoint. Must be a domain name. | string |
| sessionAffinityEnabledState | Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| sessionAffinityTtlSeconds | UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable. | int |
| webApplicationFirewallPolicyLink | Defines the Web Application Firewall policy for each host (if applicable) | FrontendEndpointUpdateParametersWebApplicationFirewa... |


### FrontendEndpointUpdateParametersWebApplicationFirewa...

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### HealthProbeSettingsModel

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Resource name. | string |
| properties | Properties of the health probe settings | HealthProbeSettingsProperties |


### HealthProbeSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabledState | Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool. | 'Disabled''Enabled' |
| healthProbeMethod | Configures which HTTP method to use to probe the backends defined under backendPools. | 'GET''HEAD' |
| intervalInSeconds | The number of seconds between health probes. | int |
| path | The path to use for the health probe. Default is / | string |
| protocol | Protocol scheme to use for this probe | 'Http''Https' |


### LoadBalancingSettingsModel

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Resource name. | string |
| properties | Properties of the load balancing settings | LoadBalancingSettingsProperties |


### LoadBalancingSettingsProperties

| Name | Description | Value |
|-|-|-|
| additionalLatencyMilliseconds | The additional latency in milliseconds for probes to fall into the lowest latency bucket | int |
| sampleSize | The number of samples to consider for load balancing decisions | int |
| successfulSamplesRequired | The number of samples within the sample period that must succeed | int |


### RoutingRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Resource name. | string |
| properties | Properties of the Front Door Routing Rule | RoutingRuleProperties |


### RoutingRuleProperties

| Name | Description | Value |
|-|-|-|
| acceptedProtocols | Protocol schemes to match for this rule | String array containing any of:'Http''Https' |
| enabledState | Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| frontendEndpoints | Frontend endpoints associated with this rule | SubResource[] |
| patternsToMatch | The route patterns of the rule. | string[] |
| routeConfiguration | A reference to the routing configuration. | RouteConfiguration |
| rulesEngine | A reference to a specific Rules Engine Configuration to apply to this route. | SubResource |
| webApplicationFirewallPolicyLink | Defines the Web Application Firewall policy for each routing rule (if applicable) | RoutingRuleUpdateParametersWebApplicationFirewallPol... |


### RouteConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration(required) |


### ForwardingConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type |  | '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (required) |
| backendPool | A reference to the BackendPool which this rule routes to. | SubResource |
| cacheConfiguration | The caching configuration associated with this rule. | CacheConfiguration |
| customForwardingPath | A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path. | string |
| forwardingProtocol | Protocol this rule will use when forwarding traffic to backends. | 'HttpOnly''HttpsOnly''MatchRequest' |


### CacheConfiguration

| Name | Description | Value |
|-|-|-|
| cacheDuration | The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year | string |
| dynamicCompression | Whether to use dynamic compression for cached content | 'Disabled''Enabled' |
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryParameterStripDirective | Treatment of URL query terms when forming the cache key. | 'StripAll''StripAllExcept''StripNone''StripOnly' |


### RedirectConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type |  | '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (required) |
| customFragment | Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #. | string |
| customHost | Host to redirect. Leave empty to use the incoming host as the destination host. | string |
| customPath | The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path. | string |
| customQueryString | The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in {key}={value} format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &. | string |
| redirectProtocol | The protocol of the destination to where the traffic is redirected | 'HttpOnly''HttpsOnly''MatchRequest' |
| redirectType | The redirect type the rule will use when redirecting traffic. | 'Found''Moved''PermanentRedirect''TemporaryRedirect' |


### RoutingRuleUpdateParametersWebApplicationFirewallPol...

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/frontDoors/rulesEngines@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/frontDoors/rulesEngines@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rules = [
        {
          action = {
            requestHeaderActions = [
              {
                headerActionType = "string"
                headerName = "string"
                value = "string"
              }
            ]
            responseHeaderActions = [
              {
                headerActionType = "string"
                headerName = "string"
                value = "string"
              }
            ]
            routeConfigurationOverride = {
              @odata.type = "string"
              // For remaining properties, see RouteConfiguration objects
            }
          }
          matchConditions = [
            {
              negateCondition = bool
              rulesEngineMatchValue = [
                "string"
              ]
              rulesEngineMatchVariable = "string"
              rulesEngineOperator = "string"
              selector = "string"
              transforms = [
                "string"
              ]
            }
          ]
          matchProcessingBehavior = "string"
          name = "string"
          priority = int
        }
      ]
    }
  })
}

```

### frontDoors/rulesEngines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:frontDoors |
| properties | Properties of the Rules Engine Configuration. | RulesEngineProperties |


### RulesEngineProperties

| Name | Description | Value |
|-|-|-|
| rules | A list of rules that define a particular Rules Engine Configuration. | RulesEngineRule[] |


### RulesEngineRule

| Name | Description | Value |
|-|-|-|
| action | Actions to perform on the request and response if all of the match conditions are met. | RulesEngineAction(required) |
| matchConditions | A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run. | RulesEngineMatchCondition[] |
| matchProcessingBehavior | If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue. | 'Continue''Stop' |
| name | A name to refer to this specific rule. | string (required) |
| priority | A priority assigned to this rule. | int (required) |


### RulesEngineAction

| Name | Description | Value |
|-|-|-|
| requestHeaderActions | A list of header actions to apply from the request from AFD to the origin. | HeaderAction[] |
| responseHeaderActions | A list of header actions to apply from the response from AFD to the client. | HeaderAction[] |
| routeConfigurationOverride | Override the route configuration. | RouteConfiguration |


### HeaderAction

| Name | Description | Value |
|-|-|-|
| headerActionType | Which type of manipulation to apply to the header. | 'Append''Delete''Overwrite' (required) |
| headerName | The name of the header this action will apply to. | string (required) |
| value | The value to update the given header name with. This value is not used if the actionType is Delete. | string |


### RouteConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration(required) |


### ForwardingConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type |  | '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration' (required) |
| backendPool | A reference to the BackendPool which this rule routes to. | SubResource |
| cacheConfiguration | The caching configuration associated with this rule. | CacheConfiguration |
| customForwardingPath | A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path. | string |
| forwardingProtocol | Protocol this rule will use when forwarding traffic to backends. | 'HttpOnly''HttpsOnly''MatchRequest' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### CacheConfiguration

| Name | Description | Value |
|-|-|-|
| cacheDuration | The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year | string |
| dynamicCompression | Whether to use dynamic compression for cached content | 'Disabled''Enabled' |
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryParameterStripDirective | Treatment of URL query terms when forming the cache key. | 'StripAll''StripAllExcept''StripNone''StripOnly' |


### RedirectConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type |  | '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration' (required) |
| customFragment | Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #. | string |
| customHost | Host to redirect. Leave empty to use the incoming host as the destination host. | string |
| customPath | The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path. | string |
| customQueryString | The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in {key}={value} format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &. | string |
| redirectProtocol | The protocol of the destination to where the traffic is redirected | 'HttpOnly''HttpsOnly''MatchRequest' |
| redirectType | The redirect type the rule will use when redirecting traffic. | 'Found''Moved''PermanentRedirect''TemporaryRedirect' |


### RulesEngineMatchCondition

| Name | Description | Value |
|-|-|-|
| negateCondition | Describes if this is negate condition or not | bool |
| rulesEngineMatchValue | Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match. | string[] (required) |
| rulesEngineMatchVariable | Match Variable | 'IsMobile''PostArgs''QueryString''RemoteAddr''RequestBody''RequestFilename''RequestFilenameExtension''RequestHeader''RequestMethod''RequestPath''RequestScheme''RequestUri' (required) |
| rulesEngineOperator | Describes operator to apply to the match condition. | 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual' (required) |
| selector | Name of selector in RequestHeader or RequestBody to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
## Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01

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
## Microsoft.Network/NetworkExperimentProfiles@2019-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/NetworkExperimentProfiles@2019-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabledState = "string"
    }
    etag = "string"
  })
}

```

### NetworkExperimentProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | Gets a unique read-only string that changes whenever the resource is updated. | string |
| properties | The properties of a Profile | ProfileProperties |


### ProfileProperties

| Name | Description | Value |
|-|-|-|
| enabledState | The state of the Experiment | 'Disabled''Enabled' |
## Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      enabledState = "string"
      endpointA = {
        endpoint = "string"
        name = "string"
      }
      endpointB = {
        endpoint = "string"
        name = "string"
      }
    }
  })
}

```

### NetworkExperimentProfiles/Experiments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:NetworkExperimentProfiles |
| properties | The properties of an Experiment | ExperimentProperties |


### ExperimentProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the details or intents of the Experiment | string |
| enabledState | The state of the Experiment | 'Disabled''Enabled' |
| endpointA | The endpoint A of an experiment | Endpoint |
| endpointB | The endpoint B of an experiment | Endpoint |


### Endpoint

| Name | Description | Value |
|-|-|-|
| endpoint | The endpoint URL | string |
| name | The name of the endpoint | string |
## Microsoft.Network/dnsForwardingRulesets@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsResolverOutboundEndpoints = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

### dnsForwardingRulesets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DNS forwarding ruleset. | DnsForwardingRulesetProperties(required) |


### DnsForwardingRulesetProperties

| Name | Description | Value |
|-|-|-|
| dnsResolverOutboundEndpoints | The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers. | SubResource[] (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |
## Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      domainName = "string"
      forwardingRuleState = "string"
      metadata = {}
      targetDnsServers = [
        {
          ipAddress = "string"
          port = int
        }
      ]
    }
  })
}

```

### dnsForwardingRulesets/forwardingRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsForwardingRulesets |
| properties | Properties of the forwarding rule. | ForwardingRuleProperties(required) |


### ForwardingRuleProperties

| Name | Description | Value |
|-|-|-|
| domainName | The domain name for the forwarding rule. | string (required) |
| forwardingRuleState | The state of forwarding rule. | 'Disabled''Enabled' |
| metadata | Metadata attached to the forwarding rule. | object |
| targetDnsServers | DNS servers to forward the DNS query to. | TargetDnsServer[] (required) |


### TargetDnsServer

| Name | Description | Value |
|-|-|-|
| ipAddress | DNS server IP address. | string (required) |
| port | DNS server port. | int |
## Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metadata = {}
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

### dnsForwardingRulesets/virtualNetworkLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsForwardingRulesets |
| properties | Properties of the virtual network link. | VirtualNetworkLinkProperties(required) |


### VirtualNetworkLinkProperties

| Name | Description | Value |
|-|-|-|
| metadata | Metadata attached to the virtual network link. | object |
| virtualNetwork | The reference to the virtual network. This cannot be changed after creation. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |
## Microsoft.Network/dnsResolvers@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

### dnsResolvers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DNS resolver. | DnsResolverProperties(required) |


### DnsResolverProperties

| Name | Description | Value |
|-|-|-|
| virtualNetwork | The reference to the virtual network. This cannot be changed after creation. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |
## Microsoft.Network/dnsResolvers/inboundEndpoints@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers/inboundEndpoints@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ipConfigurations = [
        {
          privateIpAddress = "string"
          privateIpAllocationMethod = "string"
          subnet = {
            id = "string"
          }
        }
      ]
    }
  })
}

```

### dnsResolvers/inboundEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsResolvers |
| properties | Properties of the inbound endpoint. | InboundEndpointProperties(required) |


### InboundEndpointProperties

| Name | Description | Value |
|-|-|-|
| ipConfigurations | IP configurations for the inbound endpoint. | IpConfiguration[] (required) |


### IpConfiguration

| Name | Description | Value |
|-|-|-|
| privateIpAddress | Private IP address of the IP configuration. | string |
| privateIpAllocationMethod | Private IP address allocation method. | 'Dynamic''Static' |
| subnet | The reference to the subnet bound to the IP configuration. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |
## Microsoft.Network/dnsResolvers/outboundEndpoints@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers/outboundEndpoints@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      subnet = {
        id = "string"
      }
    }
  })
}

```

### dnsResolvers/outboundEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsResolvers |
| properties | Properties of the outbound endpoint. | OutboundEndpointProperties(required) |


### OutboundEndpointProperties

| Name | Description | Value |
|-|-|-|
| subnet | The reference to the subnet used for the outbound endpoint. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |
## Microsoft.Network/dnsZones@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones@2018-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      registrationVirtualNetworks = [
        {
          id = "string"
        }
      ]
      resolutionVirtualNetworks = [
        {
          id = "string"
        }
      ]
      zoneType = "string"
    }
    etag = "string"
  })
}

```

### dnsZones

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63 characters2 to 34 labelsEach label is a set of characters separated by a period. For example,contoso.comhas 2 labels.Valid characters:Each label can contain alphanumerics, underscores, and hyphens.Each label is separated by a period. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | The etag of the zone. | string |
| properties | The properties of the zone. | ZoneProperties |


### ZoneProperties

| Name | Description | Value |
|-|-|-|
| registrationVirtualNetworks | A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private. | SubResource[] |
| resolutionVirtualNetworks | A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private. | SubResource[] |
| zoneType | The type of this DNS zone (Public or Private). | 'Private''Public' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |
## Microsoft.Network/dnsZones/A@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/A@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/A

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/AAAA@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/AAAA@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/AAAA

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/CAA@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/CAA@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/CAA

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/CNAME@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/CNAME@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/CNAME

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/MX@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/MX@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/MX

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/NS@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/NS@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/NS

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/PTR@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/PTR@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/PTR

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/SOA@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/SOA@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/SOA

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/SRV@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/SRV@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/SRV

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/dnsZones/TXT@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/TXT@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/TXT

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    etag = "string"
  })
}

```

### privateDnsZones

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63 characters2 to 34 labelsEach label is a set of characters separated by a period. For example,contoso.comhas 2 labels.Valid characters:Each label can contain alphanumerics, underscores, and hyphens.Each label is separated by a period. |
| location | The Azure Region where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | The ETag of the zone. | string |
| properties | Properties of the Private DNS zone. | PrivateZoneProperties |
## Microsoft.Network/privateDnsZones/A@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/A@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/A

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/AAAA@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/AAAA@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/AAAA

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/CNAME@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/CNAME@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/CNAME

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/MX@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/MX@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/MX

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/PTR@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/PTR@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/PTR

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/SOA@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/SOA@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/SOA

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/SRV@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/SRV@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/SRV

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/TXT@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/TXT@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### privateDnsZones/TXT

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |
## Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      registrationEnabled = bool
      virtualNetwork = {
        id = "string"
      }
    }
    etag = "string"
  })
}

```

### privateDnsZones/virtualNetworkLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | The Azure Region where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the virtual network link. | string |
| properties | Properties of the virtual network link to the Private DNS zone. | VirtualNetworkLinkProperties |


### VirtualNetworkLinkProperties

| Name | Description | Value |
|-|-|-|
| registrationEnabled | Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? | bool |
| virtualNetwork | The reference of the virtual network. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/applicationGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      authenticationCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
          }
        }
      ]
      autoscaleConfiguration = {
        maxCapacity = int
        minCapacity = int
      }
      backendAddressPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddresses = [
              {
                fqdn = "string"
                ipAddress = "string"
              }
            ]
          }
        }
      ]
      backendHttpSettingsCollection = [
        {
          id = "string"
          name = "string"
          properties = {
            affinityCookieName = "string"
            authenticationCertificates = [
              {
                id = "string"
              }
            ]
            connectionDraining = {
              drainTimeoutInSec = int
              enabled = bool
            }
            cookieBasedAffinity = "string"
            hostName = "string"
            path = "string"
            pickHostNameFromBackendAddress = bool
            port = int
            probe = {
              id = "string"
            }
            probeEnabled = bool
            protocol = "string"
            requestTimeout = int
            trustedRootCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      backendSettingsCollection = [
        {
          id = "string"
          name = "string"
          properties = {
            hostName = "string"
            pickHostNameFromBackendAddress = bool
            port = int
            probe = {
              id = "string"
            }
            protocol = "string"
            timeout = int
            trustedRootCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      customErrorConfigurations = [
        {
          customErrorPageUrl = "string"
          statusCode = "string"
        }
      ]
      enableFips = bool
      enableHttp2 = bool
      firewallPolicy = {
        id = "string"
      }
      forceFirewallPolicyAssociation = bool
      frontendIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAddress = "string"
            privateIPAllocationMethod = "string"
            privateLinkConfiguration = {
              id = "string"
            }
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      frontendPorts = [
        {
          id = "string"
          name = "string"
          properties = {
            port = int
          }
        }
      ]
      gatewayIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            subnet = {
              id = "string"
            }
          }
        }
      ]
      globalConfiguration = {
        enableRequestBuffering = bool
        enableResponseBuffering = bool
      }
      httpListeners = [
        {
          id = "string"
          name = "string"
          properties = {
            customErrorConfigurations = [
              {
                customErrorPageUrl = "string"
                statusCode = "string"
              }
            ]
            firewallPolicy = {
              id = "string"
            }
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = {
              id = "string"
            }
            hostName = "string"
            hostNames = [
              "string"
            ]
            protocol = "string"
            requireServerNameIndication = bool
            sslCertificate = {
              id = "string"
            }
            sslProfile = {
              id = "string"
            }
          }
        }
      ]
      listeners = [
        {
          id = "string"
          name = "string"
          properties = {
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = {
              id = "string"
            }
            protocol = "string"
            sslCertificate = {
              id = "string"
            }
            sslProfile = {
              id = "string"
            }
          }
        }
      ]
      loadDistributionPolicies = [
        {
          id = "string"
          name = "string"
          properties = {
            loadDistributionAlgorithm = "string"
            loadDistributionTargets = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  weightPerServer = int
                }
              }
            ]
          }
        }
      ]
      privateLinkConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            ipConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  primary = bool
                  privateIPAddress = "string"
                  privateIPAllocationMethod = "string"
                  subnet = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      probes = [
        {
          id = "string"
          name = "string"
          properties = {
            host = "string"
            interval = int
            match = {
              body = "string"
              statusCodes = [
                "string"
              ]
            }
            minServers = int
            path = "string"
            pickHostNameFromBackendHttpSettings = bool
            pickHostNameFromBackendSettings = bool
            port = int
            protocol = "string"
            timeout = int
            unhealthyThreshold = int
          }
        }
      ]
      redirectConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            includePath = bool
            includeQueryString = bool
            pathRules = [
              {
                id = "string"
              }
            ]
            redirectType = "string"
            requestRoutingRules = [
              {
                id = "string"
              }
            ]
            targetListener = {
              id = "string"
            }
            targetUrl = "string"
            urlPathMaps = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      requestRoutingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendHttpSettings = {
              id = "string"
            }
            httpListener = {
              id = "string"
            }
            loadDistributionPolicy = {
              id = "string"
            }
            priority = int
            redirectConfiguration = {
              id = "string"
            }
            rewriteRuleSet = {
              id = "string"
            }
            ruleType = "string"
            urlPathMap = {
              id = "string"
            }
          }
        }
      ]
      rewriteRuleSets = [
        {
          id = "string"
          name = "string"
          properties = {
            rewriteRules = [
              {
                actionSet = {
                  requestHeaderConfigurations = [
                    {
                      headerName = "string"
                      headerValue = "string"
                    }
                  ]
                  responseHeaderConfigurations = [
                    {
                      headerName = "string"
                      headerValue = "string"
                    }
                  ]
                  urlConfiguration = {
                    modifiedPath = "string"
                    modifiedQueryString = "string"
                    reroute = bool
                  }
                }
                conditions = [
                  {
                    ignoreCase = bool
                    negate = bool
                    pattern = "string"
                    variable = "string"
                  }
                ]
                name = "string"
                ruleSequence = int
              }
            ]
          }
        }
      ]
      routingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendSettings = {
              id = "string"
            }
            listener = {
              id = "string"
            }
            priority = int
            ruleType = "string"
          }
        }
      ]
      sku = {
        capacity = int
        name = "string"
        tier = "string"
      }
      sslCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
            keyVaultSecretId = "string"
            password = "string"
          }
        }
      ]
      sslPolicy = {
        cipherSuites = [
          "string"
        ]
        disabledSslProtocols = [
          "string"
        ]
        minProtocolVersion = "string"
        policyName = "string"
        policyType = "string"
      }
      sslProfiles = [
        {
          id = "string"
          name = "string"
          properties = {
            clientAuthConfiguration = {
              verifyClientCertIssuerDN = bool
              verifyClientRevocation = "string"
            }
            sslPolicy = {
              cipherSuites = [
                "string"
              ]
              disabledSslProtocols = [
                "string"
              ]
              minProtocolVersion = "string"
              policyName = "string"
              policyType = "string"
            }
            trustedClientCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      trustedClientCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
          }
        }
      ]
      trustedRootCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
            keyVaultSecretId = "string"
          }
        }
      ]
      urlPathMaps = [
        {
          id = "string"
          name = "string"
          properties = {
            defaultBackendAddressPool = {
              id = "string"
            }
            defaultBackendHttpSettings = {
              id = "string"
            }
            defaultLoadDistributionPolicy = {
              id = "string"
            }
            defaultRedirectConfiguration = {
              id = "string"
            }
            defaultRewriteRuleSet = {
              id = "string"
            }
            pathRules = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  backendHttpSettings = {
                    id = "string"
                  }
                  firewallPolicy = {
                    id = "string"
                  }
                  loadDistributionPolicy = {
                    id = "string"
                  }
                  paths = [
                    "string"
                  ]
                  redirectConfiguration = {
                    id = "string"
                  }
                  rewriteRuleSet = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      webApplicationFirewallConfiguration = {
        disabledRuleGroups = [
          {
            ruleGroupName = "string"
            rules = [
              int
            ]
          }
        ]
        enabled = bool
        exclusions = [
          {
            matchVariable = "string"
            selector = "string"
            selectorMatchOperator = "string"
          }
        ]
        fileUploadLimitInMb = int
        firewallMode = "string"
        maxRequestBodySize = int
        maxRequestBodySizeInKb = int
        requestBodyCheck = bool
        ruleSetType = "string"
        ruleSetVersion = "string"
      }
    }
    zones = [
      "string"
    ]
  })
}

```

### applicationGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the application gateway, if configured. | ManagedServiceIdentity |
| properties | Properties of the application gateway. | ApplicationGatewayPropertiesFormat |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ApplicationGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authenticationCertificates | Authentication certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayAuthenticationCertificate[] |
| autoscaleConfiguration | Autoscale Configuration. | ApplicationGatewayAutoscaleConfiguration |
| backendAddressPools | Backend address pool of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayBackendAddressPool[] |
| backendHttpSettingsCollection | Backend http settings of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayBackendHttpSettings[] |
| backendSettingsCollection | Backend settings of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayBackendSettings[] |
| customErrorConfigurations | Custom error configurations of the application gateway resource. | ApplicationGatewayCustomError[] |
| enableFips | Whether FIPS is enabled on the application gateway resource. | bool |
| enableHttp2 | Whether HTTP2 is enabled on the application gateway resource. | bool |
| firewallPolicy | Reference to the FirewallPolicy resource. | SubResource |
| forceFirewallPolicyAssociation | If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config. | bool |
| frontendIPConfigurations | Frontend IP addresses of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayFrontendIPConfiguration[] |
| frontendPorts | Frontend ports of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayFrontendPort[] |
| gatewayIPConfigurations | Subnets of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayIPConfiguration[] |
| globalConfiguration | Global Configuration. | ApplicationGatewayGlobalConfiguration |
| httpListeners | Http listeners of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayHttpListener[] |
| listeners | Listeners of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayListener[] |
| loadDistributionPolicies | Load distribution policies of the application gateway resource. | ApplicationGatewayLoadDistributionPolicy[] |
| privateLinkConfigurations | PrivateLink configurations on application gateway. | ApplicationGatewayPrivateLinkConfiguration[] |
| probes | Probes of the application gateway resource. | ApplicationGatewayProbe[] |
| redirectConfigurations | Redirect configurations of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayRedirectConfiguration[] |
| requestRoutingRules | Request routing rules of the application gateway resource. | ApplicationGatewayRequestRoutingRule[] |
| rewriteRuleSets | Rewrite rules for the application gateway resource. | ApplicationGatewayRewriteRuleSet[] |
| routingRules | Routing rules of the application gateway resource. | ApplicationGatewayRoutingRule[] |
| sku | SKU of the application gateway resource. | ApplicationGatewaySku |
| sslCertificates | SSL certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewaySslCertificate[] |
| sslPolicy | SSL policy of the application gateway resource. | ApplicationGatewaySslPolicy |
| sslProfiles | SSL profiles of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewaySslProfile[] |
| trustedClientCertificates | Trusted client certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayTrustedClientCertificate[] |
| trustedRootCertificates | Trusted Root certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayTrustedRootCertificate[] |
| urlPathMaps | URL path map of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayUrlPathMap[] |
| webApplicationFirewallConfiguration | Web application firewall configuration. | ApplicationGatewayWebApplicationFirewallConfiguratio... |


### ApplicationGatewayAuthenticationCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the authentication certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway authentication certificate. | ApplicationGatewayAuthenticationCertificatePropertie... |


### ApplicationGatewayAuthenticationCertificatePropertie...

| Name | Description | Value |
|-|-|-|
| data | Certificate public data. | string |


### ApplicationGatewayAutoscaleConfiguration

| Name | Description | Value |
|-|-|-|
| maxCapacity | Upper bound on number of Application Gateway capacity. | int |
| minCapacity | Lower bound on number of Application Gateway capacity. | int (required) |


### ApplicationGatewayBackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend address pool that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend address pool. | ApplicationGatewayBackendAddressPoolPropertiesFormat |


### ApplicationGatewayBackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddresses | Backend addresses. | ApplicationGatewayBackendAddress[] |


### ApplicationGatewayBackendAddress

| Name | Description | Value |
|-|-|-|
| fqdn | Fully qualified domain name (FQDN). | string |
| ipAddress | IP address. | string |


### ApplicationGatewayBackendHttpSettings

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend http settings that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend HTTP settings. | ApplicationGatewayBackendHttpSettingsPropertiesForma... |


### ApplicationGatewayBackendHttpSettingsPropertiesForma...

| Name | Description | Value |
|-|-|-|
| affinityCookieName | Cookie name to use for the affinity cookie. | string |
| authenticationCertificates | Array of references to application gateway authentication certificates. | SubResource[] |
| connectionDraining | Connection draining of the backend http settings resource. | ApplicationGatewayConnectionDraining |
| cookieBasedAffinity | Cookie based affinity. | 'Disabled''Enabled' |
| hostName | Host header to be sent to the backend servers. | string |
| path | Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null. | string |
| pickHostNameFromBackendAddress | Whether to pick host header should be picked from the host name of the backend server. Default value is false. | bool |
| port | The destination port on the backend. | int |
| probe | Probe resource of an application gateway. | SubResource |
| probeEnabled | Whether the probe is enabled. Default value is false. | bool |
| protocol | The protocol used to communicate with the backend. | 'Http''Https''Tcp''Tls' |
| requestTimeout | Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds. | int |
| trustedRootCertificates | Array of references to application gateway trusted root certificates. | SubResource[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ApplicationGatewayConnectionDraining

| Name | Description | Value |
|-|-|-|
| drainTimeoutInSec | The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds. | int (required) |
| enabled | Whether connection draining is enabled or not. | bool (required) |


### ApplicationGatewayBackendSettings

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend settings that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend settings. | ApplicationGatewayBackendSettingsPropertiesFormat |


### ApplicationGatewayBackendSettingsPropertiesFormat

| Name | Description | Value |
|-|-|-|
| hostName | Server name indication to be sent to the backend servers for Tls protocol. | string |
| pickHostNameFromBackendAddress | Whether to pick server name indication from the host name of the backend server for Tls protocol. Default value is false. | bool |
| port | The destination port on the backend. | int |
| probe | Probe resource of an application gateway. | SubResource |
| protocol | The protocol used to communicate with the backend. | 'Http''Https''Tcp''Tls' |
| timeout | Connection timeout in seconds. Application Gateway will fail the request if response is not received within ConnectionTimeout. Acceptable values are from 1 second to 86400 seconds. | int |
| trustedRootCertificates | Array of references to application gateway trusted root certificates. | SubResource[] |


### ApplicationGatewayCustomError

| Name | Description | Value |
|-|-|-|
| customErrorPageUrl | Error page URL of the application gateway custom error. | string |
| statusCode | Status code of the application gateway custom error. | 'HttpStatus400''HttpStatus403''HttpStatus404''HttpStatus405''HttpStatus408''HttpStatus500''HttpStatus502''HttpStatus503''HttpStatus504' |


### ApplicationGatewayFrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the frontend IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway frontend IP configuration. | ApplicationGatewayFrontendIPConfigurationPropertiesF... |


### ApplicationGatewayFrontendIPConfigurationPropertiesF...

| Name | Description | Value |
|-|-|-|
| privateIPAddress | PrivateIPAddress of the network interface IP Configuration. | string |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| privateLinkConfiguration | Reference to the application gateway private link configuration. | SubResource |
| publicIPAddress | Reference to the PublicIP resource. | SubResource |
| subnet | Reference to the subnet resource. | SubResource |


### ApplicationGatewayFrontendPort

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the frontend port that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway frontend port. | ApplicationGatewayFrontendPortPropertiesFormat |


### ApplicationGatewayFrontendPortPropertiesFormat

| Name | Description | Value |
|-|-|-|
| port | Frontend port. | int |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### ApplicationGatewayGlobalConfiguration

| Name | Description | Value |
|-|-|-|
| enableRequestBuffering | Enable request buffering. | bool |
| enableResponseBuffering | Enable response buffering. | bool |


### ApplicationGatewayHttpListener

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the HTTP listener that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway HTTP listener. | ApplicationGatewayHttpListenerPropertiesFormat |


### ApplicationGatewayHttpListenerPropertiesFormat

| Name | Description | Value |
|-|-|-|
| customErrorConfigurations | Custom error configurations of the HTTP listener. | ApplicationGatewayCustomError[] |
| firewallPolicy | Reference to the FirewallPolicy resource. | SubResource |
| frontendIPConfiguration | Frontend IP configuration resource of an application gateway. | SubResource |
| frontendPort | Frontend port resource of an application gateway. | SubResource |
| hostName | Host name of HTTP listener. | string |
| hostNames | List of Host names for HTTP Listener that allows special wildcard characters as well. | string[] |
| protocol | Protocol of the HTTP listener. | 'Http''Https''Tcp''Tls' |
| requireServerNameIndication | Applicable only if protocol is https. Enables SNI for multi-hosting. | bool |
| sslCertificate | SSL certificate resource of an application gateway. | SubResource |
| sslProfile | SSL profile resource of the application gateway. | SubResource |


### ApplicationGatewayListener

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the listener that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway listener. | ApplicationGatewayListenerPropertiesFormat |


### ApplicationGatewayListenerPropertiesFormat

| Name | Description | Value |
|-|-|-|
| frontendIPConfiguration | Frontend IP configuration resource of an application gateway. | SubResource |
| frontendPort | Frontend port resource of an application gateway. | SubResource |
| protocol | Protocol of the listener. | 'Http''Https''Tcp''Tls' |
| sslCertificate | SSL certificate resource of an application gateway. | SubResource |
| sslProfile | SSL profile resource of the application gateway. | SubResource |


### ApplicationGatewayLoadDistributionPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the load distribution policy that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway load distribution policy. | ApplicationGatewayLoadDistributionPolicyPropertiesFo... |


### ApplicationGatewayLoadDistributionPolicyPropertiesFo...

| Name | Description | Value |
|-|-|-|
| loadDistributionAlgorithm | Load Distribution Targets resource of an application gateway. | 'IpHash''LeastConnections''RoundRobin' |
| loadDistributionTargets | Load Distribution Targets resource of an application gateway. | ApplicationGatewayLoadDistributionTarget[] |


### ApplicationGatewayLoadDistributionTarget

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the load distribution policy that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway load distribution target. | ApplicationGatewayLoadDistributionTargetPropertiesFo... |


### ApplicationGatewayLoadDistributionTargetPropertiesFo...

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of the application gateway. | SubResource |
| weightPerServer | Weight per server. Range between 1 and 100. | int |


### ApplicationGatewayPrivateLinkConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the private link configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway private link configuration. | ApplicationGatewayPrivateLinkConfigurationProperties |


### ApplicationGatewayPrivateLinkConfigurationProperties

| Name | Description | Value |
|-|-|-|
| ipConfigurations | An array of application gateway private link ip configurations. | ApplicationGatewayPrivateLinkIpConfiguration[] |


### ApplicationGatewayPrivateLinkIpConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of application gateway private link ip configuration. | string |
| properties | Properties of an application gateway private link ip configuration. | ApplicationGatewayPrivateLinkIpConfigurationProperti... |


### ApplicationGatewayPrivateLinkIpConfigurationProperti...

| Name | Description | Value |
|-|-|-|
| primary | Whether the ip configuration is primary or not. | bool |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| subnet | Reference to the subnet resource. | SubResource |


### ApplicationGatewayProbe

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the probe that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway probe. | ApplicationGatewayProbePropertiesFormat |


### ApplicationGatewayProbePropertiesFormat

| Name | Description | Value |
|-|-|-|
| host | Host name to send the probe to. | string |
| interval | The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds. | int |
| match | Criterion for classifying a healthy probe response. | ApplicationGatewayProbeHealthResponseMatch |
| minServers | Minimum number of servers that are always marked healthy. Default value is 0. | int |
| path | Relative path of probe. Valid path starts from '/'. Probe is sent to {Protocol}://{host}:{port}{path}. | string |
| pickHostNameFromBackendHttpSettings | Whether the host header should be picked from the backend http settings. Default value is false. | bool |
| pickHostNameFromBackendSettings | Whether the server name indication should be picked from the backend settings for Tls protocol. Default value is false. | bool |
| port | Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Basic, Standard_v2 and WAF_v2 only. | int |
| protocol | The protocol used for the probe. | 'Http''Https''Tcp''Tls' |
| timeout | The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds. | int |
| unhealthyThreshold | The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20. | int |


### ApplicationGatewayProbeHealthResponseMatch

| Name | Description | Value |
|-|-|-|
| body | Body that must be contained in the health response. Default value is empty. | string |
| statusCodes | Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399. | string[] |


### ApplicationGatewayRedirectConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the redirect configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway redirect configuration. | ApplicationGatewayRedirectConfigurationPropertiesFor... |


### ApplicationGatewayRedirectConfigurationPropertiesFor...

| Name | Description | Value |
|-|-|-|
| includePath | Include path in the redirected url. | bool |
| includeQueryString | Include query string in the redirected url. | bool |
| pathRules | Path rules specifying redirect configuration. | SubResource[] |
| redirectType | HTTP redirection type. | 'Found''Permanent''SeeOther''Temporary' |
| requestRoutingRules | Request routing specifying redirect configuration. | SubResource[] |
| targetListener | Reference to a listener to redirect the request to. | SubResource |
| targetUrl | Url to redirect the request to. | string |
| urlPathMaps | Url path maps specifying default redirect configuration. | SubResource[] |


### ApplicationGatewayRequestRoutingRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the request routing rule that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway request routing rule. | ApplicationGatewayRequestRoutingRulePropertiesFormat |


### ApplicationGatewayRequestRoutingRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of the application gateway. | SubResource |
| backendHttpSettings | Backend http settings resource of the application gateway. | SubResource |
| httpListener | Http listener resource of the application gateway. | SubResource |
| loadDistributionPolicy | Load Distribution Policy resource of the application gateway. | SubResource |
| priority | Priority of the request routing rule. | int |
| redirectConfiguration | Redirect configuration resource of the application gateway. | SubResource |
| rewriteRuleSet | Rewrite Rule Set resource in Basic rule of the application gateway. | SubResource |
| ruleType | Rule type. | 'Basic''PathBasedRouting' |
| urlPathMap | URL path map resource of the application gateway. | SubResource |


### ApplicationGatewayRewriteRuleSet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the rewrite rule set that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway rewrite rule set. | ApplicationGatewayRewriteRuleSetPropertiesFormat |


### ApplicationGatewayRewriteRuleSetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| rewriteRules | Rewrite rules in the rewrite rule set. | ApplicationGatewayRewriteRule[] |


### ApplicationGatewayRewriteRule

| Name | Description | Value |
|-|-|-|
| actionSet | Set of actions to be done as part of the rewrite Rule. | ApplicationGatewayRewriteRuleActionSet |
| conditions | Conditions based on which the action set execution will be evaluated. | ApplicationGatewayRewriteRuleCondition[] |
| name | Name of the rewrite rule that is unique within an Application Gateway. | string |
| ruleSequence | Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet. | int |


### ApplicationGatewayRewriteRuleActionSet

| Name | Description | Value |
|-|-|-|
| requestHeaderConfigurations | Request Header Actions in the Action Set. | ApplicationGatewayHeaderConfiguration[] |
| responseHeaderConfigurations | Response Header Actions in the Action Set. | ApplicationGatewayHeaderConfiguration[] |
| urlConfiguration | Url Configuration Action in the Action Set. | ApplicationGatewayUrlConfiguration |


### ApplicationGatewayHeaderConfiguration

| Name | Description | Value |
|-|-|-|
| headerName | Header name of the header configuration. | string |
| headerValue | Header value of the header configuration. | string |


### ApplicationGatewayUrlConfiguration

| Name | Description | Value |
|-|-|-|
| modifiedPath | Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null. | string |
| modifiedQueryString | Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null. | string |
| reroute | If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false. | bool |


### ApplicationGatewayRewriteRuleCondition

| Name | Description | Value |
|-|-|-|
| ignoreCase | Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison. | bool |
| negate | Setting this value as truth will force to check the negation of the condition given by the user. | bool |
| pattern | The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition. | string |
| variable | The condition parameter of the RewriteRuleCondition. | string |


### ApplicationGatewayRoutingRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the routing rule that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway routing rule. | ApplicationGatewayRoutingRulePropertiesFormat |


### ApplicationGatewayRoutingRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of the application gateway. | SubResource |
| backendSettings | Backend settings resource of the application gateway. | SubResource |
| listener | Listener resource of the application gateway. | SubResource |
| priority | Priority of the routing rule. | int (required) |
| ruleType | Rule type. | 'Basic''PathBasedRouting' |


### ApplicationGatewaySku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity (instance count) of an application gateway. | int |
| name | Name of an application gateway SKU. | 'Basic''Standard_Large''Standard_Medium''Standard_Small''Standard_v2''WAF_Large''WAF_Medium''WAF_v2' |
| tier | Tier of an application gateway. | 'Basic''Standard''Standard_v2''WAF''WAF_v2' |


### ApplicationGatewaySslCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the SSL certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway SSL certificate. | ApplicationGatewaySslCertificatePropertiesFormat |


### ApplicationGatewaySslCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| data | Base-64 encoded pfx certificate. Only applicable in PUT Request. | string |
| keyVaultSecretId | Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. | string |
| password | Password for the pfx file specified in data. Only applicable in PUT request. | string |


### ApplicationGatewaySslPolicy

| Name | Description | Value |
|-|-|-|
| cipherSuites | Ssl cipher suites to be enabled in the specified order to application gateway. | String array containing any of:'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA''TLS_DHE_DSS_WITH_AES_128_CBC_SHA''TLS_DHE_DSS_WITH_AES_128_CBC_SHA256''TLS_DHE_DSS_WITH_AES_256_CBC_SHA''TLS_DHE_DSS_WITH_AES_256_CBC_SHA256''TLS_DHE_RSA_WITH_AES_128_CBC_SHA''TLS_DHE_RSA_WITH_AES_128_GCM_SHA256''TLS_DHE_RSA_WITH_AES_256_CBC_SHA''TLS_DHE_RSA_WITH_AES_256_GCM_SHA384''TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA''TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256''TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256''TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA''TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384''TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384''TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA''TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256''TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256''TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA''TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384''TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384''TLS_RSA_WITH_3DES_EDE_CBC_SHA''TLS_RSA_WITH_AES_128_CBC_SHA''TLS_RSA_WITH_AES_128_CBC_SHA256''TLS_RSA_WITH_AES_128_GCM_SHA256''TLS_RSA_WITH_AES_256_CBC_SHA''TLS_RSA_WITH_AES_256_CBC_SHA256''TLS_RSA_WITH_AES_256_GCM_SHA384' |
| disabledSslProtocols | Ssl protocols to be disabled on application gateway. | String array containing any of:'TLSv1_0''TLSv1_1''TLSv1_2''TLSv1_3' |
| minProtocolVersion | Minimum version of Ssl protocol to be supported on application gateway. | 'TLSv1_0''TLSv1_1''TLSv1_2''TLSv1_3' |
| policyName | Name of Ssl predefined policy. | 'AppGwSslPolicy20150501''AppGwSslPolicy20170401''AppGwSslPolicy20170401S''AppGwSslPolicy20220101''AppGwSslPolicy20220101S' |
| policyType | Type of Ssl Policy. | 'Custom''CustomV2''Predefined' |


### ApplicationGatewaySslProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the SSL profile that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway SSL profile. | ApplicationGatewaySslProfilePropertiesFormat |


### ApplicationGatewaySslProfilePropertiesFormat

| Name | Description | Value |
|-|-|-|
| clientAuthConfiguration | Client authentication configuration of the application gateway resource. | ApplicationGatewayClientAuthConfiguration |
| sslPolicy | SSL policy of the application gateway resource. | ApplicationGatewaySslPolicy |
| trustedClientCertificates | Array of references to application gateway trusted client certificates. | SubResource[] |


### ApplicationGatewayClientAuthConfiguration

| Name | Description | Value |
|-|-|-|
| verifyClientCertIssuerDN | Verify client certificate issuer name on the application gateway. | bool |
| verifyClientRevocation | Verify client certificate revocation status. | 'None''OCSP' |


### ApplicationGatewayTrustedClientCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the trusted client certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway trusted client certificate. | ApplicationGatewayTrustedClientCertificateProperties... |


### ApplicationGatewayTrustedClientCertificateProperties...

| Name | Description | Value |
|-|-|-|
| data | Certificate public data. | string |


### ApplicationGatewayTrustedRootCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the trusted root certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway trusted root certificate. | ApplicationGatewayTrustedRootCertificatePropertiesFo... |


### ApplicationGatewayTrustedRootCertificatePropertiesFo...

| Name | Description | Value |
|-|-|-|
| data | Certificate public data. | string |
| keyVaultSecretId | Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. | string |


### ApplicationGatewayUrlPathMap

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the URL path map that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway URL path map. | ApplicationGatewayUrlPathMapPropertiesFormat |


### ApplicationGatewayUrlPathMapPropertiesFormat

| Name | Description | Value |
|-|-|-|
| defaultBackendAddressPool | Default backend address pool resource of URL path map. | SubResource |
| defaultBackendHttpSettings | Default backend http settings resource of URL path map. | SubResource |
| defaultLoadDistributionPolicy | Default Load Distribution Policy resource of URL path map. | SubResource |
| defaultRedirectConfiguration | Default redirect configuration resource of URL path map. | SubResource |
| defaultRewriteRuleSet | Default Rewrite rule set resource of URL path map. | SubResource |
| pathRules | Path rule of URL path map resource. | ApplicationGatewayPathRule[] |


### ApplicationGatewayPathRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the path rule that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway path rule. | ApplicationGatewayPathRulePropertiesFormat |


### ApplicationGatewayPathRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of URL path map path rule. | SubResource |
| backendHttpSettings | Backend http settings resource of URL path map path rule. | SubResource |
| firewallPolicy | Reference to the FirewallPolicy resource. | SubResource |
| loadDistributionPolicy | Load Distribution Policy resource of URL path map path rule. | SubResource |
| paths | Path rules of URL path map. | string[] |
| redirectConfiguration | Redirect configuration resource of URL path map path rule. | SubResource |
| rewriteRuleSet | Rewrite rule set resource of URL path map path rule. | SubResource |


### ApplicationGatewayWebApplicationFirewallConfiguratio...

| Name | Description | Value |
|-|-|-|
| disabledRuleGroups | The disabled rule groups. | ApplicationGatewayFirewallDisabledRuleGroup[] |
| enabled | Whether the web application firewall is enabled or not. | bool (required) |
| exclusions | The exclusion list. | ApplicationGatewayFirewallExclusion[] |
| fileUploadLimitInMb | Maximum file upload size in Mb for WAF. | int |
| firewallMode | Web application firewall mode. | 'Detection''Prevention' (required) |
| maxRequestBodySize | Maximum request body size for WAF. | int |
| maxRequestBodySizeInKb | Maximum request body size in Kb for WAF. | int |
| requestBodyCheck | Whether allow WAF to check request Body. | bool |
| ruleSetType | The type of the web application firewall rule set. Possible values are: 'OWASP'. | string (required) |
| ruleSetVersion | The version of the rule set type. | string (required) |


### ApplicationGatewayFirewallDisabledRuleGroup

| Name | Description | Value |
|-|-|-|
| ruleGroupName | The name of the rule group that will be disabled. | string (required) |
| rules | The list of rules that will be disabled. If null, all rules of the rule group will be disabled. | int[] |


### ApplicationGatewayFirewallExclusion

| Name | Description | Value |
|-|-|-|
| matchVariable | The variable to be excluded. | string (required) |
| selector | When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to. | string (required) |
| selectorMatchOperator | When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to. | string (required) |
## Microsoft.Network/applicationGateways/privateEndpointConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationGateways/privateEndpointConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### applicationGateways/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationGateways |
| properties | Properties of the application gateway private endpoint connection. | ApplicationGatewayPrivateEndpointConnectionPropertie... |


### ApplicationGatewayPrivateEndpointConnectionPropertie...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | string |
## Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01

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
## Microsoft.Network/applicationSecurityGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationSecurityGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### applicationSecurityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
## Microsoft.Network/azureFirewalls@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/azureFirewalls@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalProperties = {}
      applicationRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                fqdnTags = [
                  "string"
                ]
                name = "string"
                protocols = [
                  {
                    port = int
                    protocolType = "string"
                  }
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
                targetFqdns = [
                  "string"
                ]
              }
            ]
          }
        }
      ]
      firewallPolicy = {
        id = "string"
      }
      hubIPAddresses = {
        privateIPAddress = "string"
        publicIPs = {
          addresses = [
            {
              address = "string"
            }
          ]
          count = int
        }
      }
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      managementIpConfiguration = {
        id = "string"
        name = "string"
        properties = {
          publicIPAddress = {
            id = "string"
          }
          subnet = {
            id = "string"
          }
        }
      }
      natRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                destinationAddresses = [
                  "string"
                ]
                destinationPorts = [
                  "string"
                ]
                name = "string"
                protocols = [
                  "string"
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
                translatedAddress = "string"
                translatedFqdn = "string"
                translatedPort = "string"
              }
            ]
          }
        }
      ]
      networkRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                destinationAddresses = [
                  "string"
                ]
                destinationFqdns = [
                  "string"
                ]
                destinationIpGroups = [
                  "string"
                ]
                destinationPorts = [
                  "string"
                ]
                name = "string"
                protocols = [
                  "string"
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
              }
            ]
          }
        }
      ]
      sku = {
        name = "string"
        tier = "string"
      }
      threatIntelMode = "string"
      virtualHub = {
        id = "string"
      }
    }
    zones = [
      "string"
    ]
  })
}

```

### azureFirewalls

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the azure firewall. | AzureFirewallPropertiesFormat |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### AzureFirewallPropertiesFormat

| Name | Description | Value |
|-|-|-|
| additionalProperties | The additional properties used to further config this azure firewall. | object |
| applicationRuleCollections | Collection of application rule collections used by Azure Firewall. | AzureFirewallApplicationRuleCollection[] |
| firewallPolicy | The firewallPolicy associated with this azure firewall. | SubResource |
| hubIPAddresses | IP addresses associated with AzureFirewall. | HubIPAddresses |
| ipConfigurations | IP configuration of the Azure Firewall resource. | AzureFirewallIPConfiguration[] |
| managementIpConfiguration | IP configuration of the Azure Firewall used for management traffic. | AzureFirewallIPConfiguration |
| natRuleCollections | Collection of NAT rule collections used by Azure Firewall. | AzureFirewallNatRuleCollection[] |
| networkRuleCollections | Collection of network rule collections used by Azure Firewall. | AzureFirewallNetworkRuleCollection[] |
| sku | The Azure Firewall Resource SKU. | AzureFirewallSku |
| threatIntelMode | The operation mode for Threat Intelligence. | 'Alert''Deny''Off' |
| virtualHub | The virtualHub to which the firewall belongs. | SubResource |


### AzureFirewallApplicationRuleCollection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall application rule collection. | AzureFirewallApplicationRuleCollectionPropertiesForm... |


### AzureFirewallApplicationRuleCollectionPropertiesForm...

| Name | Description | Value |
|-|-|-|
| action | The action type of a rule collection. | AzureFirewallRCAction |
| priority | Priority of the application rule collection resource. | int |
| rules | Collection of rules used by a application rule collection. | AzureFirewallApplicationRule[] |


### AzureFirewallRCAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'Allow''Deny' |


### AzureFirewallApplicationRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| fqdnTags | List of FQDN Tags for this rule. | string[] |
| name | Name of the application rule. | string |
| protocols | Array of ApplicationRuleProtocols. | AzureFirewallApplicationRuleProtocol[] |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| targetFqdns | List of FQDNs for this rule. | string[] |


### AzureFirewallApplicationRuleProtocol

| Name | Description | Value |
|-|-|-|
| port | Port number for the protocol, cannot be greater than 64000. This field is optional. | int |
| protocolType | Protocol type. | 'Http''Https''Mssql' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### HubIPAddresses

| Name | Description | Value |
|-|-|-|
| privateIPAddress | Private IP Address associated with azure firewall. | string |
| publicIPs | Public IP addresses associated with azure firewall. | HubPublicIPAddresses |


### HubPublicIPAddresses

| Name | Description | Value |
|-|-|-|
| addresses | The list of Public IP addresses associated with azure firewall or IP addresses to be retained. | AzureFirewallPublicIPAddress[] |
| count | The number of Public IP addresses associated with azure firewall. | int |


### AzureFirewallPublicIPAddress

| Name | Description | Value |
|-|-|-|
| address | Public IP Address value. | string |


### AzureFirewallIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall IP configuration. | AzureFirewallIPConfigurationPropertiesFormat |


### AzureFirewallIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicIPAddress | Reference to the PublicIP resource. This field is a mandatory input if subnet is not null. | SubResource |
| subnet | Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'. | SubResource |


### AzureFirewallNatRuleCollection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall NAT rule collection. | AzureFirewallNatRuleCollectionProperties |


### AzureFirewallNatRuleCollectionProperties

| Name | Description | Value |
|-|-|-|
| action | The action type of a NAT rule collection. | AzureFirewallNatRCAction |
| priority | Priority of the NAT rule collection resource. | int |
| rules | Collection of rules used by a NAT rule collection. | AzureFirewallNatRule[] |


### AzureFirewallNatRCAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'Dnat''Snat' |


### AzureFirewallNatRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| destinationAddresses | List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags. | string[] |
| destinationPorts | List of destination ports. | string[] |
| name | Name of the NAT rule. | string |
| protocols | Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| translatedAddress | The translated address for this NAT rule. | string |
| translatedFqdn | The translated FQDN for this NAT rule. | string |
| translatedPort | The translated port for this NAT rule. | string |


### AzureFirewallNetworkRuleCollection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | string |
| properties | Properties of the azure firewall network rule collection. | AzureFirewallNetworkRuleCollectionPropertiesFormat |


### AzureFirewallNetworkRuleCollectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| action | The action type of a rule collection. | AzureFirewallRCAction |
| priority | Priority of the network rule collection resource. | int |
| rules | Collection of rules used by a network rule collection. | AzureFirewallNetworkRule[] |


### AzureFirewallNetworkRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| destinationAddresses | List of destination IP addresses. | string[] |
| destinationFqdns | List of destination FQDNs. | string[] |
| destinationIpGroups | List of destination IpGroups for this rule. | string[] |
| destinationPorts | List of destination ports. | string[] |
| name | Name of the network rule. | string |
| protocols | Array of AzureFirewallNetworkRuleProtocols. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |


### AzureFirewallSku

| Name | Description | Value |
|-|-|-|
| name | Name of an Azure Firewall SKU. | 'AZFW_Hub''AZFW_VNet' |
| tier | Tier of an Azure Firewall. | 'Basic''Premium''Standard' |
## Microsoft.Network/bastionHosts@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/bastionHosts@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableCopyPaste = bool
      dnsName = "string"
      enableFileCopy = bool
      enableIpConnect = bool
      enableKerberos = bool
      enableShareableLink = bool
      enableTunneling = bool
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      scaleUnits = int
    }
    sku = {
      name = "string"
    }
  })
}

```

### bastionHosts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of this Bastion Host. | Sku |
| properties | Represents the bastion host resource. | BastionHostPropertiesFormat |


### BastionHostPropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableCopyPaste | Enable/Disable Copy/Paste feature of the Bastion Host resource. | bool |
| dnsName | FQDN for the endpoint on which bastion host is accessible. | string |
| enableFileCopy | Enable/Disable File Copy feature of the Bastion Host resource. | bool |
| enableIpConnect | Enable/Disable IP Connect feature of the Bastion Host resource. | bool |
| enableKerberos | Enable/Disable Kerberos feature of the Bastion Host resource. | bool |
| enableShareableLink | Enable/Disable Shareable Link of the Bastion Host resource. | bool |
| enableTunneling | Enable/Disable Tunneling feature of the Bastion Host resource. | bool |
| ipConfigurations | IP configuration of the Bastion Host resource. | BastionHostIPConfiguration[] |
| scaleUnits | The scale units for the Bastion Host resource. | int |


### BastionHostIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Represents the ip configuration associated with the resource. | BastionHostIPConfigurationPropertiesFormat |


### BastionHostIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAllocationMethod | Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | Reference of the PublicIP resource. | SubResource(required) |
| subnet | Reference of the subnet resource. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of this Bastion Host. | 'Basic''Standard' |
## Microsoft.Network/cloudServiceSlots@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/cloudServiceSlots@2023-04-01"
  name = "swap"
  parent_id = "string"
  body = jsonencode({
    properties = {
      slotType = "string"
    }
  })
}

```

### cloudServiceSlots

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'swap' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Swap resource properties | SwapResourceProperties |


### SwapResourceProperties

| Name | Description | Value |
|-|-|-|
| slotType | Specifies slot info on a cloud service | 'Production''Staging' |
## Microsoft.Network/connections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/connections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      connectionMode = "string"
      connectionProtocol = "string"
      connectionType = "string"
      dpdTimeoutSeconds = int
      egressNatRules = [
        {
          id = "string"
        }
      ]
      enableBgp = bool
      enablePrivateLinkFastPath = bool
      expressRouteGatewayBypass = bool
      gatewayCustomBgpIpAddresses = [
        {
          customBgpIpAddress = "string"
          ipConfigurationId = "string"
        }
      ]
      ingressNatRules = [
        {
          id = "string"
        }
      ]
      ipsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      localNetworkGateway2 = {
        id = "string"
        location = "string"
        properties = {
          bgpSettings = {
            asn = int
            bgpPeeringAddress = "string"
            bgpPeeringAddresses = [
              {
                customBgpIpAddresses = [
                  "string"
                ]
                ipconfigurationId = "string"
              }
            ]
            peerWeight = int
          }
          fqdn = "string"
          gatewayIpAddress = "string"
          localNetworkAddressSpace = {
            addressPrefixes = [
              "string"
            ]
          }
        }
        tags = {}
      }
      peer = {
        id = "string"
      }
      routingWeight = int
      sharedKey = "string"
      trafficSelectorPolicies = [
        {
          localAddressRanges = [
            "string"
          ]
          remoteAddressRanges = [
            "string"
          ]
        }
      ]
      useLocalAzureIpAddress = bool
      usePolicyBasedTrafficSelectors = bool
      virtualNetworkGateway1 = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          activeActive = bool
          adminState = "string"
          allowRemoteVnetTraffic = bool
          allowVirtualWanTraffic = bool
          bgpSettings = {
            asn = int
            bgpPeeringAddress = "string"
            bgpPeeringAddresses = [
              {
                customBgpIpAddresses = [
                  "string"
                ]
                ipconfigurationId = "string"
              }
            ]
            peerWeight = int
          }
          customRoutes = {
            addressPrefixes = [
              "string"
            ]
          }
          disableIPSecReplayProtection = bool
          enableBgp = bool
          enableBgpRouteTranslationForNat = bool
          enableDnsForwarding = bool
          enablePrivateIpAddress = bool
          gatewayDefaultSite = {
            id = "string"
          }
          gatewayType = "string"
          ipConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                privateIPAllocationMethod = "string"
                publicIPAddress = {
                  id = "string"
                }
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          natRules = [
            {
              id = "string"
              name = "string"
              properties = {
                externalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                internalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                ipConfigurationId = "string"
                mode = "string"
                type = "string"
              }
            }
          ]
          sku = {
            name = "string"
            tier = "string"
          }
          virtualNetworkGatewayPolicyGroups = [
            {
              id = "string"
              name = "string"
              properties = {
                isDefault = bool
                policyMembers = [
                  {
                    attributeType = "string"
                    attributeValue = "string"
                    name = "string"
                  }
                ]
                priority = int
              }
            }
          ]
          vNetExtendedLocationResourceId = "string"
          vpnClientConfiguration = {
            aadAudience = "string"
            aadIssuer = "string"
            aadTenant = "string"
            radiusServerAddress = "string"
            radiusServers = [
              {
                radiusServerAddress = "string"
                radiusServerScore = int
                radiusServerSecret = "string"
              }
            ]
            radiusServerSecret = "string"
            vngClientConnectionConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  virtualNetworkGatewayPolicyGroups = [
                    {
                      id = "string"
                    }
                  ]
                  vpnClientAddressPool = {
                    addressPrefixes = [
                      "string"
                    ]
                  }
                }
              }
            ]
            vpnAuthenticationTypes = [
              "string"
            ]
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
            vpnClientIpsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            vpnClientProtocols = [
              "string"
            ]
            vpnClientRevokedCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  thumbprint = "string"
                }
              }
            ]
            vpnClientRootCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  publicCertData = "string"
                }
              }
            ]
          }
          vpnGatewayGeneration = "string"
          vpnType = "string"
        }
        tags = {}
      }
      virtualNetworkGateway2 = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          activeActive = bool
          adminState = "string"
          allowRemoteVnetTraffic = bool
          allowVirtualWanTraffic = bool
          bgpSettings = {
            asn = int
            bgpPeeringAddress = "string"
            bgpPeeringAddresses = [
              {
                customBgpIpAddresses = [
                  "string"
                ]
                ipconfigurationId = "string"
              }
            ]
            peerWeight = int
          }
          customRoutes = {
            addressPrefixes = [
              "string"
            ]
          }
          disableIPSecReplayProtection = bool
          enableBgp = bool
          enableBgpRouteTranslationForNat = bool
          enableDnsForwarding = bool
          enablePrivateIpAddress = bool
          gatewayDefaultSite = {
            id = "string"
          }
          gatewayType = "string"
          ipConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                privateIPAllocationMethod = "string"
                publicIPAddress = {
                  id = "string"
                }
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          natRules = [
            {
              id = "string"
              name = "string"
              properties = {
                externalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                internalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                ipConfigurationId = "string"
                mode = "string"
                type = "string"
              }
            }
          ]
          sku = {
            name = "string"
            tier = "string"
          }
          virtualNetworkGatewayPolicyGroups = [
            {
              id = "string"
              name = "string"
              properties = {
                isDefault = bool
                policyMembers = [
                  {
                    attributeType = "string"
                    attributeValue = "string"
                    name = "string"
                  }
                ]
                priority = int
              }
            }
          ]
          vNetExtendedLocationResourceId = "string"
          vpnClientConfiguration = {
            aadAudience = "string"
            aadIssuer = "string"
            aadTenant = "string"
            radiusServerAddress = "string"
            radiusServers = [
              {
                radiusServerAddress = "string"
                radiusServerScore = int
                radiusServerSecret = "string"
              }
            ]
            radiusServerSecret = "string"
            vngClientConnectionConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  virtualNetworkGatewayPolicyGroups = [
                    {
                      id = "string"
                    }
                  ]
                  vpnClientAddressPool = {
                    addressPrefixes = [
                      "string"
                    ]
                  }
                }
              }
            ]
            vpnAuthenticationTypes = [
              "string"
            ]
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
            vpnClientIpsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            vpnClientProtocols = [
              "string"
            ]
            vpnClientRevokedCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  thumbprint = "string"
                }
              }
            ]
            vpnClientRootCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  publicCertData = "string"
                }
              }
            ]
          }
          vpnGatewayGeneration = "string"
          vpnType = "string"
        }
        tags = {}
      }
    }
  })
}

```

### connections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the virtual network gateway connection. | VirtualNetworkGatewayConnectionPropertiesFormat(required) |


### VirtualNetworkGatewayConnectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authorizationKey | The authorizationKey. | string |
| connectionMode | The connection mode for this connection. | 'Default''InitiatorOnly''ResponderOnly' |
| connectionProtocol | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| connectionType | Gateway connection type. | 'ExpressRoute''IPsec''VPNClient''Vnet2Vnet' (required) |
| dpdTimeoutSeconds | The dead peer detection timeout of this connection in seconds. | int |
| egressNatRules | List of egress NatRules. | SubResource[] |
| enableBgp | EnableBgp flag. | bool |
| enablePrivateLinkFastPath | Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled. | bool |
| expressRouteGatewayBypass | Bypass ExpressRoute Gateway for data forwarding. | bool |
| gatewayCustomBgpIpAddresses | GatewayCustomBgpIpAddresses to be used for virtual network gateway Connection. | GatewayCustomBgpIpAddressIpConfiguration[] |
| ingressNatRules | List of ingress NatRules. | SubResource[] |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| localNetworkGateway2 | The reference to local network gateway resource. | LocalNetworkGateway |
| peer | The reference to peerings resource. | SubResource |
| routingWeight | The routing weight. | int |
| sharedKey | The IPSec shared key. | string |
| trafficSelectorPolicies | The Traffic Selector Policies to be considered by this connection. | TrafficSelectorPolicy[] |
| useLocalAzureIpAddress | Use private local Azure IP for the connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| virtualNetworkGateway1 | The reference to virtual network gateway resource. | VirtualNetworkGateway(required) |
| virtualNetworkGateway2 | The reference to virtual network gateway resource. | VirtualNetworkGateway |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### GatewayCustomBgpIpAddressIpConfiguration

| Name | Description | Value |
|-|-|-|
| customBgpIpAddress | The custom BgpPeeringAddress which belongs to IpconfigurationId. | string (required) |
| ipConfigurationId | The IpconfigurationId of ipconfiguration which belongs to gateway. | string (required) |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### LocalNetworkGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the local network gateway. | LocalNetworkGatewayPropertiesFormat(required) |
| tags | Resource tags. | object |


### LocalNetworkGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| bgpSettings | Local network gateway's BGP speaker settings. | BgpSettings |
| fqdn | FQDN of local network gateway. | string |
| gatewayIpAddress | IP address of local network gateway. | string |
| localNetworkAddressSpace | Local network site address space. | AddressSpace |


### BgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |
| bgpPeeringAddresses | BGP peering address with IP configuration ID for virtual network gateway. | IPConfigurationBgpPeeringAddress[] |
| peerWeight | The weight added to routes learned from this BGP speaker. | int |


### IPConfigurationBgpPeeringAddress

| Name | Description | Value |
|-|-|-|
| customBgpIpAddresses | The list of custom BGP peering addresses which belong to IP configuration. | string[] |
| ipconfigurationId | The ID of IP configuration which belongs to gateway. | string |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### TrafficSelectorPolicy

| Name | Description | Value |
|-|-|-|
| localAddressRanges | A collection of local address spaces in CIDR format. | string[] (required) |
| remoteAddressRanges | A collection of remote address spaces in CIDR format. | string[] (required) |


### VirtualNetworkGateway

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of type local virtual network gateway. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the virtual network gateway. | VirtualNetworkGatewayPropertiesFormat(required) |
| tags | Resource tags. | object |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### VirtualNetworkGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| activeActive | ActiveActive flag. | bool |
| adminState | Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet | 'Disabled''Enabled' |
| allowRemoteVnetTraffic | Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN. | bool |
| allowVirtualWanTraffic | Configures this gateway to accept traffic from remote Virtual WAN networks. | bool |
| bgpSettings | Virtual network gateway's BGP speaker settings. | BgpSettings |
| customRoutes | The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient. | AddressSpace |
| disableIPSecReplayProtection | disableIPSecReplayProtection flag. | bool |
| enableBgp | Whether BGP is enabled for this virtual network gateway or not. | bool |
| enableBgpRouteTranslationForNat | EnableBgpRouteTranslationForNat flag. | bool |
| enableDnsForwarding | Whether dns forwarding is enabled or not. | bool |
| enablePrivateIpAddress | Whether private IP needs to be enabled on this gateway for connections or not. | bool |
| gatewayDefaultSite | The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting. | SubResource |
| gatewayType | The type of this virtual network gateway. | 'ExpressRoute''LocalGateway''Vpn' |
| ipConfigurations | IP configurations for virtual network gateway. | VirtualNetworkGatewayIPConfiguration[] |
| natRules | NatRules for virtual network gateway. | VirtualNetworkGatewayNatRule[] |
| sku | The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway. | VirtualNetworkGatewaySku |
| virtualNetworkGatewayPolicyGroups | The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway. | VirtualNetworkGatewayPolicyGroup[] |
| vNetExtendedLocationResourceId | Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet. | string |
| vpnClientConfiguration | The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations. | VpnClientConfiguration |
| vpnGatewayGeneration | The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN. | 'Generation1''Generation2''None' |
| vpnType | The type of this virtual network gateway. | 'PolicyBased''RouteBased' |


### VirtualNetworkGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the virtual network gateway ip configuration. | VirtualNetworkGatewayIPConfigurationPropertiesFormat |


### VirtualNetworkGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the public IP resource. | SubResource |
| subnet | The reference to the subnet resource. | SubResource |


### VirtualNetworkGatewayNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the Virtual Network Gateway NAT rule. | VirtualNetworkGatewayNatRuleProperties |


### VirtualNetworkGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |


### VirtualNetworkGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Gateway SKU name. | 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ' |
| tier | Gateway SKU tier. | 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ' |


### VirtualNetworkGatewayPolicyGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of tVirtualNetworkGatewayPolicyGroup. | VirtualNetworkGatewayPolicyGroupProperties |


### VirtualNetworkGatewayPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not. | bool (required) |
| policyMembers | Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup. | VirtualNetworkGatewayPolicyGroupMember[] (required) |
| priority | Priority for VirtualNetworkGatewayPolicyGroup. | int (required) |


### VirtualNetworkGatewayPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember. | string |
| name | Name of the VirtualNetworkGatewayPolicyGroupMember. | string |


### VpnClientConfiguration

| Name | Description | Value |
|-|-|-|
| aadAudience | The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| aadIssuer | The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| aadTenant | The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| radiusServerAddress | The radius server address property of the VirtualNetworkGateway resource for vpn client connection. | string |
| radiusServers | The radiusServers property for multiple radius server configuration. | RadiusServer[] |
| radiusServerSecret | The radius secret property of the VirtualNetworkGateway resource for vpn client connection. | string |
| vngClientConnectionConfigurations | per ip address pool connection policy for virtual network gateway P2S client. | VngClientConnectionConfiguration[] |
| vpnAuthenticationTypes | VPN authentication types for the virtual network gateway.. | String array containing any of:'AAD''Certificate''Radius' |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace |
| vpnClientIpsecPolicies | VpnClientIpsecPolicies for virtual network gateway P2S client. | IpsecPolicy[] |
| vpnClientProtocols | VpnClientProtocols for Virtual network gateway. | String array containing any of:'IkeV2''OpenVPN''SSTP' |
| vpnClientRevokedCertificates | VpnClientRevokedCertificate for Virtual network gateway. | VpnClientRevokedCertificate[] |
| vpnClientRootCertificates | VpnClientRootCertificate for virtual network gateway. | VpnClientRootCertificate[] |


### RadiusServer

| Name | Description | Value |
|-|-|-|
| radiusServerAddress | The address of this radius server. | string (required) |
| radiusServerScore | The initial score assigned to this radius server. | int |
| radiusServerSecret | The secret used for this radius server. | string |


### VngClientConnectionConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client root certificate. | VngClientConnectionConfigurationProperties |


### VngClientConnectionConfigurationProperties

| Name | Description | Value |
|-|-|-|
| virtualNetworkGatewayPolicyGroups | List of references to virtualNetworkGatewayPolicyGroups | SubResource[] (required) |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace(required) |


### VpnClientRevokedCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client revoked certificate. | VpnClientRevokedCertificatePropertiesFormat |


### VpnClientRevokedCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| thumbprint | The revoked VPN client certificate thumbprint. | string |


### VpnClientRootCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client root certificate. | VpnClientRootCertificatePropertiesFormat(required) |


### VpnClientRootCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicCertData | The certificate public data. | string (required) |
## Microsoft.Network/customIpPrefixes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/customIpPrefixes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asn = "string"
      authorizationMessage = "string"
      cidr = "string"
      commissionedState = "string"
      customIpPrefixParent = {
        id = "string"
      }
      expressRouteAdvertise = bool
      geo = "string"
      noInternetAdvertise = bool
      prefixType = "string"
      signedMessage = "string"
    }
    zones = [
      "string"
    ]
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### customIpPrefixes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the custom IP prefix. | ExtendedLocation |
| properties | Custom IP prefix properties. | CustomIpPrefixPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### CustomIpPrefixPropertiesFormat

| Name | Description | Value |
|-|-|-|
| asn | The ASN for CIDR advertising. Should be an integer as string. | string |
| authorizationMessage | Authorization message for WAN validation. | string |
| cidr | The prefix range in CIDR notation. Should include the start address and the prefix length. | string |
| commissionedState | The commissioned state of the Custom IP Prefix. | 'Commissioned''CommissionedNoInternetAdvertise''Commissioning''Decommissioning''Deprovisioned''Deprovisioning''Provisioned''Provisioning' |
| customIpPrefixParent | The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix. | SubResource |
| expressRouteAdvertise | Whether to do express route advertise. | bool |
| geo | The Geo for CIDR advertising. Should be an Geo code. | 'AFRI''APAC''AQ''EURO''GLOBAL''LATAM''ME''NAM''OCEANIA' |
| noInternetAdvertise | Whether to Advertise the range to Internet. | bool |
| prefixType | Type of custom IP prefix. Should be Singular, Parent, or Child. | 'Child''Parent''Singular' |
| signedMessage | Signed message for WAN validation. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/ddosCustomPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ddosCustomPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### ddosCustomPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DDoS custom policy. | DdosCustomPolicyPropertiesFormat |
## Microsoft.Network/ddosProtectionPlans@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ddosProtectionPlans@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### ddosProtectionPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DDoS protection plan. | DdosProtectionPlanPropertiesFormat |
## Microsoft.Network/dscpConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dscpConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      destinationIpRanges = [
        {
          endIP = "string"
          startIP = "string"
        }
      ]
      destinationPortRanges = [
        {
          end = int
          start = int
        }
      ]
      markings = [
        int
      ]
      protocol = "string"
      qosDefinitionCollection = [
        {
          destinationIpRanges = [
            {
              endIP = "string"
              startIP = "string"
            }
          ]
          destinationPortRanges = [
            {
              end = int
              start = int
            }
          ]
          markings = [
            int
          ]
          protocol = "string"
          sourceIpRanges = [
            {
              endIP = "string"
              startIP = "string"
            }
          ]
          sourcePortRanges = [
            {
              end = int
              start = int
            }
          ]
        }
      ]
      sourceIpRanges = [
        {
          endIP = "string"
          startIP = "string"
        }
      ]
      sourcePortRanges = [
        {
          end = int
          start = int
        }
      ]
    }
  })
}

```

### dscpConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the network interface. | DscpConfigurationPropertiesFormat |


### DscpConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| destinationIpRanges | Destination IP ranges. | QosIpRange[] |
| destinationPortRanges | Destination port ranges. | QosPortRange[] |
| markings | List of markings to be used in the configuration. | int[] |
| protocol | RNM supported protocol types. | 'Ah''All''DoNotUse''Esp''Gre''Icmp''Tcp''Udp''Vxlan' |
| qosDefinitionCollection | QoS object definitions | QosDefinition[] |
| sourceIpRanges | Source IP ranges. | QosIpRange[] |
| sourcePortRanges | Sources port ranges. | QosPortRange[] |


### QosIpRange

| Name | Description | Value |
|-|-|-|
| endIP | End IP Address. | string |
| startIP | Start IP Address. | string |


### QosPortRange

| Name | Description | Value |
|-|-|-|
| end | Qos Port Range end. | int |
| start | Qos Port Range start. | int |


### QosDefinition

| Name | Description | Value |
|-|-|-|
| destinationIpRanges | Destination IP ranges. | QosIpRange[] |
| destinationPortRanges | Destination port ranges. | QosPortRange[] |
| markings | List of markings to be used in the configuration. | int[] |
| protocol | RNM supported protocol types. | 'Ah''All''DoNotUse''Esp''Gre''Icmp''Tcp''Udp''Vxlan' |
| sourceIpRanges | Source IP ranges. | QosIpRange[] |
| sourcePortRanges | Sources port ranges. | QosPortRange[] |
## Microsoft.Network/expressRouteCircuits@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowClassicOperations = bool
      authorizationKey = "string"
      authorizations = [
        {
          id = "string"
          name = "string"
          properties = {
            authorizationKey = "string"
            authorizationUseStatus = "string"
          }
        }
      ]
      bandwidthInGbps = int
      circuitProvisioningState = "string"
      expressRoutePort = {
        id = "string"
      }
      gatewayManagerEtag = "string"
      globalReachEnabled = bool
      peerings = [
        {
          id = "string"
          name = "string"
          properties = {
            azureASN = int
            connections = [
              {
                id = "string"
                name = "string"
                properties = {
                  addressPrefix = "string"
                  authorizationKey = "string"
                  expressRouteCircuitPeering = {
                    id = "string"
                  }
                  ipv6CircuitConnectionConfig = {
                    addressPrefix = "string"
                  }
                  peerExpressRouteCircuitPeering = {
                    id = "string"
                  }
                }
              }
            ]
            expressRouteConnection = {}
            gatewayManagerEtag = "string"
            ipv6PeeringConfig = {
              microsoftPeeringConfig = {
                advertisedCommunities = [
                  "string"
                ]
                advertisedPublicPrefixes = [
                  "string"
                ]
                customerASN = int
                legacyMode = int
                routingRegistryName = "string"
              }
              primaryPeerAddressPrefix = "string"
              routeFilter = {
                id = "string"
              }
              secondaryPeerAddressPrefix = "string"
              state = "string"
            }
            microsoftPeeringConfig = {
              advertisedCommunities = [
                "string"
              ]
              advertisedPublicPrefixes = [
                "string"
              ]
              customerASN = int
              legacyMode = int
              routingRegistryName = "string"
            }
            peerASN = int
            peeringType = "string"
            primaryAzurePort = "string"
            primaryPeerAddressPrefix = "string"
            routeFilter = {
              id = "string"
            }
            secondaryAzurePort = "string"
            secondaryPeerAddressPrefix = "string"
            sharedKey = "string"
            state = "string"
            stats = {
              primarybytesIn = int
              primarybytesOut = int
              secondarybytesIn = int
              secondarybytesOut = int
            }
            vlanId = int
          }
        }
      ]
      serviceKey = "string"
      serviceProviderNotes = "string"
      serviceProviderProperties = {
        bandwidthInMbps = int
        peeringLocation = "string"
        serviceProviderName = "string"
      }
      serviceProviderProvisioningState = "string"
    }
    sku = {
      family = "string"
      name = "string"
      tier = "string"
    }
  })
}

```

### expressRouteCircuits

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU. | ExpressRouteCircuitSku |
| properties | Properties of the express route circuit. | ExpressRouteCircuitPropertiesFormat |


### ExpressRouteCircuitPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowClassicOperations | Allow classic operations. | bool |
| authorizationKey | The authorizationKey. | string |
| authorizations | The list of authorizations. | ExpressRouteCircuitAuthorization[] |
| bandwidthInGbps | The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource. | int |
| circuitProvisioningState | The CircuitProvisioningState state of the resource. | string |
| expressRoutePort | The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource. | SubResource |
| gatewayManagerEtag | The GatewayManager Etag. | string |
| globalReachEnabled | Flag denoting global reach status. | bool |
| peerings | The list of peerings. | ExpressRouteCircuitPeering[] |
| serviceKey | The ServiceKey. | string |
| serviceProviderNotes | The ServiceProviderNotes. | string |
| serviceProviderProperties | The ServiceProviderProperties. | ExpressRouteCircuitServiceProviderProperties |
| serviceProviderProvisioningState | The ServiceProviderProvisioningState state of the resource. | 'Deprovisioning''NotProvisioned''Provisioned''Provisioning' |


### ExpressRouteCircuitAuthorization

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the express route circuit authorization. | AuthorizationPropertiesFormat |


### AuthorizationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authorizationKey | The authorization key. | string |
| authorizationUseStatus | The authorization use status. | 'Available''InUse' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ExpressRouteCircuitPeering

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the express route circuit peering. | ExpressRouteCircuitPeeringPropertiesFormat |


### ExpressRouteCircuitPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| azureASN | The Azure ASN. | int |
| connections | The list of circuit connections associated with Azure Private Peering for this circuit. | ExpressRouteCircuitConnection[] |
| expressRouteConnection | The ExpressRoute connection. | ExpressRouteConnectionId |
| gatewayManagerEtag | The GatewayManager Etag. | string |
| ipv6PeeringConfig | The IPv6 peering configuration. | Ipv6ExpressRouteCircuitPeeringConfig |
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| peerASN | The peer ASN. | int |
| peeringType | The peering type. | 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering' |
| primaryAzurePort | The primary port. | string |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryAzurePort | The secondary port. | string |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| sharedKey | The shared key. | string |
| state | The peering state. | 'Disabled''Enabled' |
| stats | The peering stats of express route circuit. | ExpressRouteCircuitStats |
| vlanId | The VLAN ID. | int |


### ExpressRouteCircuitConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the express route circuit connection. | ExpressRouteCircuitConnectionPropertiesFormat |


### ExpressRouteCircuitConnectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | /29 IP address space to carve out Customer addresses for tunnels. | string |
| authorizationKey | The authorization key. | string |
| expressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection. | SubResource |
| ipv6CircuitConnectionConfig | IPv6 Address PrefixProperties of the express route circuit connection. | Ipv6CircuitConnectionConfig |
| peerExpressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the peered circuit. | SubResource |


### Ipv6CircuitConnectionConfig

| Name | Description | Value |
|-|-|-|
| addressPrefix | /125 IP address space to carve out customer addresses for global reach. | string |


### Ipv6ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| state | The state of peering. | 'Disabled''Enabled' |


### ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| advertisedCommunities | The communities of bgp peering. Specified for microsoft peering. | string[] |
| advertisedPublicPrefixes | The reference to AdvertisedPublicPrefixes. | string[] |
| customerASN | The CustomerASN of the peering. | int |
| legacyMode | The legacy mode of the peering. | int |
| routingRegistryName | The RoutingRegistryName of the configuration. | string |


### ExpressRouteCircuitStats

| Name | Description | Value |
|-|-|-|
| primarybytesIn | The Primary BytesIn of the peering. | int |
| primarybytesOut | The primary BytesOut of the peering. | int |
| secondarybytesIn | The secondary BytesIn of the peering. | int |
| secondarybytesOut | The secondary BytesOut of the peering. | int |


### ExpressRouteCircuitServiceProviderProperties

| Name | Description | Value |
|-|-|-|
| bandwidthInMbps | The BandwidthInMbps. | int |
| peeringLocation | The peering location. | string |
| serviceProviderName | The serviceProviderName. | string |


### ExpressRouteCircuitSku

| Name | Description | Value |
|-|-|-|
| family | The family of the SKU. | 'MeteredData''UnlimitedData' |
| name | The name of the SKU. | string |
| tier | The tier of the SKU. | 'Basic''Local''Premium''Standard' |
## Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      authorizationUseStatus = "string"
    }
  })
}

```

### expressRouteCircuits/authorizations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteCircuits |
| properties | Properties of the express route circuit authorization. | AuthorizationPropertiesFormat |


### AuthorizationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authorizationKey | The authorization key. | string |
| authorizationUseStatus | The authorization use status. | 'Available''InUse' |
## Microsoft.Network/expressRouteCircuits/peerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureASN = int
      connections = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            authorizationKey = "string"
            expressRouteCircuitPeering = {
              id = "string"
            }
            ipv6CircuitConnectionConfig = {
              addressPrefix = "string"
            }
            peerExpressRouteCircuitPeering = {
              id = "string"
            }
          }
        }
      ]
      expressRouteConnection = {}
      gatewayManagerEtag = "string"
      ipv6PeeringConfig = {
        microsoftPeeringConfig = {
          advertisedCommunities = [
            "string"
          ]
          advertisedPublicPrefixes = [
            "string"
          ]
          customerASN = int
          legacyMode = int
          routingRegistryName = "string"
        }
        primaryPeerAddressPrefix = "string"
        routeFilter = {
          id = "string"
        }
        secondaryPeerAddressPrefix = "string"
        state = "string"
      }
      microsoftPeeringConfig = {
        advertisedCommunities = [
          "string"
        ]
        advertisedPublicPrefixes = [
          "string"
        ]
        customerASN = int
        legacyMode = int
        routingRegistryName = "string"
      }
      peerASN = int
      peeringType = "string"
      primaryAzurePort = "string"
      primaryPeerAddressPrefix = "string"
      routeFilter = {
        id = "string"
      }
      secondaryAzurePort = "string"
      secondaryPeerAddressPrefix = "string"
      sharedKey = "string"
      state = "string"
      stats = {
        primarybytesIn = int
        primarybytesOut = int
        secondarybytesIn = int
        secondarybytesOut = int
      }
      vlanId = int
    }
  })
}

```

### expressRouteCircuits/peerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteCircuits |
| properties | Properties of the express route circuit peering. | ExpressRouteCircuitPeeringPropertiesFormat |


### ExpressRouteCircuitPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| azureASN | The Azure ASN. | int |
| connections | The list of circuit connections associated with Azure Private Peering for this circuit. | ExpressRouteCircuitConnection[] |
| expressRouteConnection | The ExpressRoute connection. | ExpressRouteConnectionId |
| gatewayManagerEtag | The GatewayManager Etag. | string |
| ipv6PeeringConfig | The IPv6 peering configuration. | Ipv6ExpressRouteCircuitPeeringConfig |
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| peerASN | The peer ASN. | int |
| peeringType | The peering type. | 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering' |
| primaryAzurePort | The primary port. | string |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryAzurePort | The secondary port. | string |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| sharedKey | The shared key. | string |
| state | The peering state. | 'Disabled''Enabled' |
| stats | The peering stats of express route circuit. | ExpressRouteCircuitStats |
| vlanId | The VLAN ID. | int |


### ExpressRouteCircuitConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the express route circuit connection. | ExpressRouteCircuitConnectionPropertiesFormat |


### ExpressRouteCircuitConnectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | /29 IP address space to carve out Customer addresses for tunnels. | string |
| authorizationKey | The authorization key. | string |
| expressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection. | SubResource |
| ipv6CircuitConnectionConfig | IPv6 Address PrefixProperties of the express route circuit connection. | Ipv6CircuitConnectionConfig |
| peerExpressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the peered circuit. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Ipv6CircuitConnectionConfig

| Name | Description | Value |
|-|-|-|
| addressPrefix | /125 IP address space to carve out customer addresses for global reach. | string |


### Ipv6ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| state | The state of peering. | 'Disabled''Enabled' |


### ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| advertisedCommunities | The communities of bgp peering. Specified for microsoft peering. | string[] |
| advertisedPublicPrefixes | The reference to AdvertisedPublicPrefixes. | string[] |
| customerASN | The CustomerASN of the peering. | int |
| legacyMode | The legacy mode of the peering. | int |
| routingRegistryName | The RoutingRegistryName of the configuration. | string |


### ExpressRouteCircuitStats

| Name | Description | Value |
|-|-|-|
| primarybytesIn | The Primary BytesIn of the peering. | int |
| primarybytesOut | The primary BytesOut of the peering. | int |
| secondarybytesIn | The secondary BytesIn of the peering. | int |
| secondarybytesOut | The secondary BytesOut of the peering. | int |
## Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      authorizationKey = "string"
      expressRouteCircuitPeering = {
        id = "string"
      }
      ipv6CircuitConnectionConfig = {
        addressPrefix = "string"
      }
      peerExpressRouteCircuitPeering = {
        id = "string"
      }
    }
  })
}

```

### expressRouteCircuits/peerings/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peerings |
| properties | Properties of the express route circuit connection. | ExpressRouteCircuitConnectionPropertiesFormat |


### ExpressRouteCircuitConnectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | /29 IP address space to carve out Customer addresses for tunnels. | string |
| authorizationKey | The authorization key. | string |
| expressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection. | SubResource |
| ipv6CircuitConnectionConfig | IPv6 Address PrefixProperties of the express route circuit connection. | Ipv6CircuitConnectionConfig |
| peerExpressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the peered circuit. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Ipv6CircuitConnectionConfig

| Name | Description | Value |
|-|-|-|
| addressPrefix | /125 IP address space to carve out customer addresses for global reach. | string |
## Microsoft.Network/expressRouteCrossConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCrossConnections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      expressRouteCircuit = {
        id = "string"
      }
      peerings = [
        {
          id = "string"
          name = "string"
          properties = {
            gatewayManagerEtag = "string"
            ipv6PeeringConfig = {
              microsoftPeeringConfig = {
                advertisedCommunities = [
                  "string"
                ]
                advertisedPublicPrefixes = [
                  "string"
                ]
                customerASN = int
                legacyMode = int
                routingRegistryName = "string"
              }
              primaryPeerAddressPrefix = "string"
              routeFilter = {
                id = "string"
              }
              secondaryPeerAddressPrefix = "string"
              state = "string"
            }
            microsoftPeeringConfig = {
              advertisedCommunities = [
                "string"
              ]
              advertisedPublicPrefixes = [
                "string"
              ]
              customerASN = int
              legacyMode = int
              routingRegistryName = "string"
            }
            peerASN = int
            peeringType = "string"
            primaryPeerAddressPrefix = "string"
            secondaryPeerAddressPrefix = "string"
            sharedKey = "string"
            state = "string"
            vlanId = int
          }
        }
      ]
      serviceProviderNotes = "string"
      serviceProviderProvisioningState = "string"
    }
  })
}

```

### expressRouteCrossConnections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the express route cross connection. | ExpressRouteCrossConnectionProperties |


### ExpressRouteCrossConnectionProperties

| Name | Description | Value |
|-|-|-|
| expressRouteCircuit | The ExpressRouteCircuit. | ExpressRouteCircuitReference |
| peerings | The list of peerings. | ExpressRouteCrossConnectionPeering[] |
| serviceProviderNotes | Additional read only notes set by the connectivity provider. | string |
| serviceProviderProvisioningState | The provisioning state of the circuit in the connectivity provider system. | 'Deprovisioning''NotProvisioned''Provisioned''Provisioning' |


### ExpressRouteCircuitReference

| Name | Description | Value |
|-|-|-|
| id | Corresponding Express Route Circuit Id. | string |


### ExpressRouteCrossConnectionPeering

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the express route cross connection peering. | ExpressRouteCrossConnectionPeeringProperties |


### ExpressRouteCrossConnectionPeeringProperties

| Name | Description | Value |
|-|-|-|
| gatewayManagerEtag | The GatewayManager Etag. | string |
| ipv6PeeringConfig | The IPv6 peering configuration. | Ipv6ExpressRouteCircuitPeeringConfig |
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| peerASN | The peer ASN. | int |
| peeringType | The peering type. | 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering' |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| sharedKey | The shared key. | string |
| state | The peering state. | 'Disabled''Enabled' |
| vlanId | The VLAN ID. | int |


### Ipv6ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| state | The state of peering. | 'Disabled''Enabled' |


### ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| advertisedCommunities | The communities of bgp peering. Specified for microsoft peering. | string[] |
| advertisedPublicPrefixes | The reference to AdvertisedPublicPrefixes. | string[] |
| customerASN | The CustomerASN of the peering. | int |
| legacyMode | The legacy mode of the peering. | int |
| routingRegistryName | The RoutingRegistryName of the configuration. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      gatewayManagerEtag = "string"
      ipv6PeeringConfig = {
        microsoftPeeringConfig = {
          advertisedCommunities = [
            "string"
          ]
          advertisedPublicPrefixes = [
            "string"
          ]
          customerASN = int
          legacyMode = int
          routingRegistryName = "string"
        }
        primaryPeerAddressPrefix = "string"
        routeFilter = {
          id = "string"
        }
        secondaryPeerAddressPrefix = "string"
        state = "string"
      }
      microsoftPeeringConfig = {
        advertisedCommunities = [
          "string"
        ]
        advertisedPublicPrefixes = [
          "string"
        ]
        customerASN = int
        legacyMode = int
        routingRegistryName = "string"
      }
      peerASN = int
      peeringType = "string"
      primaryPeerAddressPrefix = "string"
      secondaryPeerAddressPrefix = "string"
      sharedKey = "string"
      state = "string"
      vlanId = int
    }
  })
}

```

### expressRouteCrossConnections/peerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteCrossConnections |
| properties | Properties of the express route cross connection peering. | ExpressRouteCrossConnectionPeeringProperties |


### ExpressRouteCrossConnectionPeeringProperties

| Name | Description | Value |
|-|-|-|
| gatewayManagerEtag | The GatewayManager Etag. | string |
| ipv6PeeringConfig | The IPv6 peering configuration. | Ipv6ExpressRouteCircuitPeeringConfig |
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| peerASN | The peer ASN. | int |
| peeringType | The peering type. | 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering' |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| sharedKey | The shared key. | string |
| state | The peering state. | 'Disabled''Enabled' |
| vlanId | The VLAN ID. | int |


### Ipv6ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| state | The state of peering. | 'Disabled''Enabled' |


### ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| advertisedCommunities | The communities of bgp peering. Specified for microsoft peering. | string[] |
| advertisedPublicPrefixes | The reference to AdvertisedPublicPrefixes. | string[] |
| customerASN | The CustomerASN of the peering. | int |
| legacyMode | The legacy mode of the peering. | int |
| routingRegistryName | The RoutingRegistryName of the configuration. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/expressRouteGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowNonVirtualWanTraffic = bool
      autoScaleConfiguration = {
        bounds = {
          max = int
          min = int
        }
      }
      expressRouteConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            authorizationKey = "string"
            enableInternetSecurity = bool
            enablePrivateLinkFastPath = bool
            expressRouteCircuitPeering = {
              id = "string"
            }
            expressRouteGatewayBypass = bool
            routingConfiguration = {
              associatedRouteTable = {
                id = "string"
              }
              inboundRouteMap = {
                id = "string"
              }
              outboundRouteMap = {
                id = "string"
              }
              propagatedRouteTables = {
                ids = [
                  {
                    id = "string"
                  }
                ]
                labels = [
                  "string"
                ]
              }
              vnetRoutes = {
                staticRoutes = [
                  {
                    addressPrefixes = [
                      "string"
                    ]
                    name = "string"
                    nextHopIpAddress = "string"
                  }
                ]
                staticRoutesConfig = {
                  vnetLocalRouteOverrideCriteria = "string"
                }
              }
            }
            routingWeight = int
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

### expressRouteGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the express route gateway. | ExpressRouteGatewayProperties |


### ExpressRouteGatewayProperties

| Name | Description | Value |
|-|-|-|
| allowNonVirtualWanTraffic | Configures this gateway to accept traffic from non Virtual WAN networks. | bool |
| autoScaleConfiguration | Configuration for auto scaling. | ExpressRouteGatewayPropertiesAutoScaleConfiguration |
| expressRouteConnections | List of ExpressRoute connections to the ExpressRoute gateway. | ExpressRouteConnection[] |
| virtualHub | The Virtual Hub where the ExpressRoute gateway is or will be deployed. | VirtualHubId(required) |


### ExpressRouteGatewayPropertiesAutoScaleConfiguration

| Name | Description | Value |
|-|-|-|
| bounds | Minimum and maximum number of scale units to deploy. | ExpressRouteGatewayPropertiesAutoScaleConfigurationB... |


### ExpressRouteGatewayPropertiesAutoScaleConfigurationB...

| Name | Description | Value |
|-|-|-|
| max | Maximum number of scale units deployed for ExpressRoute gateway. | int |
| min | Minimum number of scale units deployed for ExpressRoute gateway. | int |


### ExpressRouteConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource. | string (required) |
| properties | Properties of the express route connection. | ExpressRouteConnectionProperties |


### ExpressRouteConnectionProperties

| Name | Description | Value |
|-|-|-|
| authorizationKey | Authorization key to establish the connection. | string |
| enableInternetSecurity | Enable internet security. | bool |
| enablePrivateLinkFastPath | Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled. | bool |
| expressRouteCircuitPeering | The ExpressRoute circuit peering. | ExpressRouteCircuitPeeringId(required) |
| expressRouteGatewayBypass | Enable FastPath to vWan Firewall hub. | bool |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| routingWeight | The routing weight associated to the connection. | int |


### ExpressRouteCircuitPeeringId

| Name | Description | Value |
|-|-|-|
| id | The ID of the ExpressRoute circuit peering. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |


### VirtualHubId

| Name | Description | Value |
|-|-|-|
| id | The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription. | string |
## Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      enableInternetSecurity = bool
      enablePrivateLinkFastPath = bool
      expressRouteCircuitPeering = {
        id = "string"
      }
      expressRouteGatewayBypass = bool
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
      routingWeight = int
    }
  })
}

```

### expressRouteGateways/expressRouteConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteGateways |
| properties | Properties of the express route connection. | ExpressRouteConnectionProperties |


### ExpressRouteConnectionProperties

| Name | Description | Value |
|-|-|-|
| authorizationKey | Authorization key to establish the connection. | string |
| enableInternetSecurity | Enable internet security. | bool |
| enablePrivateLinkFastPath | Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled. | bool |
| expressRouteCircuitPeering | The ExpressRoute circuit peering. | ExpressRouteCircuitPeeringId(required) |
| expressRouteGatewayBypass | Enable FastPath to vWan Firewall hub. | bool |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| routingWeight | The routing weight associated to the connection. | int |


### ExpressRouteCircuitPeeringId

| Name | Description | Value |
|-|-|-|
| id | The ID of the ExpressRoute circuit peering. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |
## Microsoft.Network/ExpressRoutePorts@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ExpressRoutePorts@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      bandwidthInGbps = int
      billingType = "string"
      encapsulation = "string"
      links = [
        {
          id = "string"
          name = "string"
          properties = {
            adminState = "string"
            macSecConfig = {
              cakSecretIdentifier = "string"
              cipher = "string"
              cknSecretIdentifier = "string"
              sciState = "string"
            }
          }
        }
      ]
      peeringLocation = "string"
    }
  })
}

```

### ExpressRoutePorts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of ExpressRoutePort, if configured. | ManagedServiceIdentity |
| properties | ExpressRoutePort properties. | ExpressRoutePortPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ExpressRoutePortPropertiesFormat

| Name | Description | Value |
|-|-|-|
| bandwidthInGbps | Bandwidth of procured ports in Gbps. | int |
| billingType | The billing type of the ExpressRoutePort resource. | 'MeteredData''UnlimitedData' |
| encapsulation | Encapsulation method on physical ports. | 'Dot1Q''QinQ' |
| links | The set of physical links of the ExpressRoutePort resource. | ExpressRouteLink[] |
| peeringLocation | The name of the peering location that the ExpressRoutePort is mapped to physically. | string |


### ExpressRouteLink

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of child port resource that is unique among child port resources of the parent. | string |
| properties | ExpressRouteLink properties. | ExpressRouteLinkPropertiesFormat |


### ExpressRouteLinkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | Administrative state of the physical port. | 'Disabled''Enabled' |
| macSecConfig | MacSec configuration. | ExpressRouteLinkMacSecConfig |


### ExpressRouteLinkMacSecConfig

| Name | Description | Value |
|-|-|-|
| cakSecretIdentifier | Keyvault Secret Identifier URL containing Mac security CAK key. | string |
| cipher | Mac security cipher. | 'GcmAes128''GcmAes256''GcmAesXpn128''GcmAesXpn256' |
| cknSecretIdentifier | Keyvault Secret Identifier URL containing Mac security CKN key. | string |
| sciState | Sci mode enabled/disabled. | 'Disabled''Enabled' |
## Microsoft.Network/expressRoutePorts/authorizations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRoutePorts/authorizations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### expressRoutePorts/authorizations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRoutePorts |
| properties | ExpressRoutePort properties. | ExpressRoutePortAuthorizationPropertiesFormat |
## Microsoft.Network/firewallPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      basePolicy = {
        id = "string"
      }
      dnsSettings = {
        enableProxy = bool
        requireProxyForNetworkRules = bool
        servers = [
          "string"
        ]
      }
      explicitProxy = {
        enableExplicitProxy = bool
        enablePacFile = bool
        httpPort = int
        httpsPort = int
        pacFile = "string"
        pacFilePort = int
      }
      insights = {
        isEnabled = bool
        logAnalyticsResources = {
          defaultWorkspaceId = {
            id = "string"
          }
          workspaces = [
            {
              region = "string"
              workspaceId = {
                id = "string"
              }
            }
          ]
        }
        retentionDays = int
      }
      intrusionDetection = {
        configuration = {
          bypassTrafficSettings = [
            {
              description = "string"
              destinationAddresses = [
                "string"
              ]
              destinationIpGroups = [
                "string"
              ]
              destinationPorts = [
                "string"
              ]
              name = "string"
              protocol = "string"
              sourceAddresses = [
                "string"
              ]
              sourceIpGroups = [
                "string"
              ]
            }
          ]
          privateRanges = [
            "string"
          ]
          signatureOverrides = [
            {
              id = "string"
              mode = "string"
            }
          ]
        }
        mode = "string"
      }
      sku = {
        tier = "string"
      }
      snat = {
        autoLearnPrivateRanges = "string"
        privateRanges = [
          "string"
        ]
      }
      sql = {
        allowSqlRedirect = bool
      }
      threatIntelMode = "string"
      threatIntelWhitelist = {
        fqdns = [
          "string"
        ]
        ipAddresses = [
          "string"
        ]
      }
      transportSecurity = {
        certificateAuthority = {
          keyVaultSecretId = "string"
          name = "string"
        }
      }
    }
  })
}

```

### firewallPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the firewall policy. | ManagedServiceIdentity |
| properties | Properties of the firewall policy. | FirewallPolicyPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### FirewallPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| basePolicy | The parent firewall policy from which rules are inherited. | SubResource |
| dnsSettings | DNS Proxy Settings definition. | DnsSettings |
| explicitProxy | Explicit Proxy Settings definition. | ExplicitProxy |
| insights | Insights on Firewall Policy. | FirewallPolicyInsights |
| intrusionDetection | The configuration for Intrusion detection. | FirewallPolicyIntrusionDetection |
| sku | The Firewall Policy SKU. | FirewallPolicySku |
| snat | The private IP addresses/IP ranges to which traffic will not be SNAT. | FirewallPolicySnat |
| sql | SQL Settings definition. | FirewallPolicySQL |
| threatIntelMode | The operation mode for Threat Intelligence. | 'Alert''Deny''Off' |
| threatIntelWhitelist | ThreatIntel Allowlist for Firewall Policy. | FirewallPolicyThreatIntelWhitelist |
| transportSecurity | TLS Configuration definition. | FirewallPolicyTransportSecurity |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### DnsSettings

| Name | Description | Value |
|-|-|-|
| enableProxy | Enable DNS Proxy on Firewalls attached to the Firewall Policy. | bool |
| requireProxyForNetworkRules | FQDNs in Network Rules are supported when set to true. | bool |
| servers | List of Custom DNS Servers. | string[] |


### ExplicitProxy

| Name | Description | Value |
|-|-|-|
| enableExplicitProxy | When set to true, explicit proxy mode is enabled. | bool |
| enablePacFile | When set to true, pac file port and url needs to be provided. | bool |
| httpPort | Port number for explicit proxy http protocol, cannot be greater than 64000. | int |
| httpsPort | Port number for explicit proxy https protocol, cannot be greater than 64000. | int |
| pacFile | SAS URL for PAC file. | string |
| pacFilePort | Port number for firewall to serve PAC file. | int |


### FirewallPolicyInsights

| Name | Description | Value |
|-|-|-|
| isEnabled | A flag to indicate if the insights are enabled on the policy. | bool |
| logAnalyticsResources | Workspaces needed to configure the Firewall Policy Insights. | FirewallPolicyLogAnalyticsResources |
| retentionDays | Number of days the insights should be enabled on the policy. | int |


### FirewallPolicyLogAnalyticsResources

| Name | Description | Value |
|-|-|-|
| defaultWorkspaceId | The default workspace Id for Firewall Policy Insights. | SubResource |
| workspaces | List of workspaces for Firewall Policy Insights. | FirewallPolicyLogAnalyticsWorkspace[] |


### FirewallPolicyLogAnalyticsWorkspace

| Name | Description | Value |
|-|-|-|
| region | Region to configure the Workspace. | string |
| workspaceId | The workspace Id for Firewall Policy Insights. | SubResource |


### FirewallPolicyIntrusionDetection

| Name | Description | Value |
|-|-|-|
| configuration | Intrusion detection configuration properties. | FirewallPolicyIntrusionDetectionConfiguration |
| mode | Intrusion detection general state. | 'Alert''Deny''Off' |


### FirewallPolicyIntrusionDetectionConfiguration

| Name | Description | Value |
|-|-|-|
| bypassTrafficSettings | List of rules for traffic to bypass. | FirewallPolicyIntrusionDetectionBypassTrafficSpecifi...[] |
| privateRanges | IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property | string[] |
| signatureOverrides | List of specific signatures states. | FirewallPolicyIntrusionDetectionSignatureSpecificati...[] |


### FirewallPolicyIntrusionDetectionBypassTrafficSpecifi...

| Name | Description | Value |
|-|-|-|
| description | Description of the bypass traffic rule. | string |
| destinationAddresses | List of destination IP addresses or ranges for this rule. | string[] |
| destinationIpGroups | List of destination IpGroups for this rule. | string[] |
| destinationPorts | List of destination ports or ranges. | string[] |
| name | Name of the bypass traffic rule. | string |
| protocol | The rule bypass protocol. | 'ANY''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses or ranges for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |


### FirewallPolicyIntrusionDetectionSignatureSpecificati...

| Name | Description | Value |
|-|-|-|
| id | Signature id. | string |
| mode | The signature state. | 'Alert''Deny''Off' |


### FirewallPolicySku

| Name | Description | Value |
|-|-|-|
| tier | Tier of Firewall Policy. | 'Basic''Premium''Standard' |


### FirewallPolicySnat

| Name | Description | Value |
|-|-|-|
| autoLearnPrivateRanges | The operation mode for automatically learning private ranges to not be SNAT | 'Disabled''Enabled' |
| privateRanges | List of private IP addresses/IP address ranges to not be SNAT. | string[] |


### FirewallPolicySQL

| Name | Description | Value |
|-|-|-|
| allowSqlRedirect | A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999. | bool |


### FirewallPolicyThreatIntelWhitelist

| Name | Description | Value |
|-|-|-|
| fqdns | List of FQDNs for the ThreatIntel Allowlist. | string[] |
| ipAddresses | List of IP addresses for the ThreatIntel Allowlist. | string[] |


### FirewallPolicyTransportSecurity

| Name | Description | Value |
|-|-|-|
| certificateAuthority | The CA used for intermediate CA generation. | FirewallPolicyCertificateAuthority |


### FirewallPolicyCertificateAuthority

| Name | Description | Value |
|-|-|-|
| keyVaultSecretId | Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. | string |
| name | Name of the CA certificate. | string |
## Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      priority = int
      ruleCollections = [
        {
          name = "string"
          priority = int
          ruleCollectionType = "string"
          // For remaining properties, see FirewallPolicyRuleCollection objects
        }
      ]
    }
  })
}

```

### firewallPolicies/ruleCollectionGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:firewallPolicies |
| properties | The properties of the firewall policy rule collection group. | FirewallPolicyRuleCollectionGroupProperties |


### FirewallPolicyRuleCollectionGroupProperties

| Name | Description | Value |
|-|-|-|
| priority | Priority of the Firewall Policy Rule Collection Group resource. | int |
| ruleCollections | Group of Firewall Policy rule collections. | FirewallPolicyRuleCollection[] |


### FirewallPolicyRuleCollection

| Name | Description | Value |
|-|-|-|
| name | The name of the rule collection. | string |
| priority | Priority of the Firewall Policy Rule Collection resource. | int |
| ruleCollectionType | Set the object type | FirewallPolicyFilterRuleCollectionFirewallPolicyNatRuleCollection(required) |


### FirewallPolicyFilterRuleCollection

| Name | Description | Value |
|-|-|-|
| ruleCollectionType | The type of the rule collection. | 'FirewallPolicyFilterRuleCollection' (required) |
| action | The action type of a Filter rule collection. | FirewallPolicyFilterRuleCollectionAction |
| rules | List of rules included in a rule collection. | FirewallPolicyRule[] |


### FirewallPolicyFilterRuleCollectionAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'Allow''Deny' |


### FirewallPolicyRule

| Name | Description | Value |
|-|-|-|
| description | Description of the rule. | string |
| name | Name of the rule. | string |
| ruleType | Set the object type | ApplicationRuleNatRuleNetworkRule(required) |


### ApplicationRule

| Name | Description | Value |
|-|-|-|
| ruleType | Rule Type. | 'ApplicationRule' (required) |
| destinationAddresses | List of destination IP addresses or Service Tags. | string[] |
| fqdnTags | List of FQDN Tags for this rule. | string[] |
| httpHeadersToInsert | List of HTTP/S headers to insert. | FirewallPolicyHttpHeaderToInsert[] |
| protocols | Array of Application Protocols. | FirewallPolicyRuleApplicationProtocol[] |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| targetFqdns | List of FQDNs for this rule. | string[] |
| targetUrls | List of Urls for this rule condition. | string[] |
| terminateTLS | Terminate TLS connections for this rule. | bool |
| webCategories | List of destination azure web categories. | string[] |


### FirewallPolicyHttpHeaderToInsert

| Name | Description | Value |
|-|-|-|
| headerName | Contains the name of the header | string |
| headerValue | Contains the value of the header | string |


### FirewallPolicyRuleApplicationProtocol

| Name | Description | Value |
|-|-|-|
| port | Port number for the protocol, cannot be greater than 64000. | int |
| protocolType | Protocol type. | 'Http''Https' |


### NatRule

| Name | Description | Value |
|-|-|-|
| ruleType | Rule Type. | 'NatRule' (required) |
| destinationAddresses | List of destination IP addresses or Service Tags. | string[] |
| destinationPorts | List of destination ports. | string[] |
| ipProtocols | Array of FirewallPolicyRuleNetworkProtocols. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |
| translatedAddress | The translated address for this NAT rule. | string |
| translatedFqdn | The translated FQDN for this NAT rule. | string |
| translatedPort | The translated port for this NAT rule. | string |


### NetworkRule

| Name | Description | Value |
|-|-|-|
| ruleType | Rule Type. | 'NetworkRule' (required) |
| destinationAddresses | List of destination IP addresses or Service Tags. | string[] |
| destinationFqdns | List of destination FQDNs. | string[] |
| destinationIpGroups | List of destination IpGroups for this rule. | string[] |
| destinationPorts | List of destination ports. | string[] |
| ipProtocols | Array of FirewallPolicyRuleNetworkProtocols. | String array containing any of:'Any''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |


### FirewallPolicyNatRuleCollection

| Name | Description | Value |
|-|-|-|
| ruleCollectionType | The type of the rule collection. | 'FirewallPolicyNatRuleCollection' (required) |
| action | The action type of a Nat rule collection. | FirewallPolicyNatRuleCollectionAction |
| rules | List of rules included in a rule collection. | FirewallPolicyRule[] |


### FirewallPolicyNatRuleCollectionAction

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'DNAT' |
## Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      signatures = {}
    }
  })
}

```

### firewallPolicies/signatureOverrides

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:firewallPolicies |
| properties | Will contain the properties of the resource (the actual signature overrides) | SignaturesOverridesProperties |


### SignaturesOverridesProperties

| Name | Description | Value |
|-|-|-|
| signatures | Dictionary of {string} | object |
## Microsoft.Network/IpAllocations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/IpAllocations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allocationTags = {}
      ipamAllocationId = "string"
      prefix = "string"
      prefixLength = int
      prefixType = "string"
      type = "string"
    }
  })
}

```

### IpAllocations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the IpAllocation. | IpAllocationPropertiesFormat |


### IpAllocationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allocationTags | IpAllocation tags. | object |
| ipamAllocationId | The IPAM allocation ID. | string |
| prefix | The address prefix for the IpAllocation. | string |
| prefixLength | The address prefix length for the IpAllocation. | int |
| prefixType | The address prefix Type for the IpAllocation. | 'IPv4''IPv6' |
| type | The type for the IpAllocation. | 'Hypernet''Undefined' |
## Microsoft.Network/ipGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ipGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ipAddresses = [
        "string"
      ]
    }
  })
}

```

### ipGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the IpGroups. | IpGroupPropertiesFormat |


### IpGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ipAddresses | IpAddresses/IpAddressPrefixes in the IpGroups resource. | string[] |
## Microsoft.Network/loadBalancers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendAddressPools = [
        {
          id = "string"
          name = "string"
          properties = {
            drainPeriodInSeconds = int
            loadBalancerBackendAddresses = [
              {
                name = "string"
                properties = {
                  adminState = "string"
                  ipAddress = "string"
                  loadBalancerFrontendIPConfiguration = {
                    id = "string"
                  }
                  subnet = {
                    id = "string"
                  }
                  virtualNetwork = {
                    id = "string"
                  }
                }
              }
            ]
            location = "string"
            syncMode = "string"
            tunnelInterfaces = [
              {
                identifier = int
                port = int
                protocol = "string"
                type = "string"
              }
            ]
            virtualNetwork = {
              id = "string"
            }
          }
        }
      ]
      frontendIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            gatewayLoadBalancer = {
              id = "string"
            }
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              extendedLocation = {
                name = "string"
                type = "EdgeZone"
              }
              id = "string"
              location = "string"
              properties = {
                ddosSettings = {
                  ddosProtectionPlan = {
                    id = "string"
                  }
                  protectionMode = "string"
                }
                deleteOption = "string"
                dnsSettings = {
                  domainNameLabel = "string"
                  domainNameLabelScope = "string"
                  fqdn = "string"
                  reverseFqdn = "string"
                }
                idleTimeoutInMinutes = int
                ipAddress = "string"
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                linkedPublicIPAddress = {
                  public-ip-address-object
                }
                migrationPhase = "string"
                natGateway = {
                  id = "string"
                  location = "string"
                  properties = {
                    idleTimeoutInMinutes = int
                    publicIpAddresses = [
                      {
                        id = "string"
                      }
                    ]
                    publicIpPrefixes = [
                      {
                        id = "string"
                      }
                    ]
                  }
                  sku = {
                    name = "Standard"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPAddressVersion = "string"
                publicIPAllocationMethod = "string"
                publicIPPrefix = {
                  id = "string"
                }
                servicePublicIPAddress = {
                  public-ip-address-object
                }
              }
              sku = {
                name = "string"
                tier = "string"
              }
              tags = {}
              zones = [
                "string"
              ]
            }
            publicIPPrefix = {
              id = "string"
            }
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
          }
          zones = [
            "string"
          ]
        }
      ]
      inboundNatPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backendPort = int
            enableFloatingIP = bool
            enableTcpReset = bool
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPortRangeEnd = int
            frontendPortRangeStart = int
            idleTimeoutInMinutes = int
            protocol = "string"
          }
        }
      ]
      inboundNatRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendPort = int
            enableFloatingIP = bool
            enableTcpReset = bool
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = int
            frontendPortRangeEnd = int
            frontendPortRangeStart = int
            idleTimeoutInMinutes = int
            protocol = "string"
          }
        }
      ]
      loadBalancingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendAddressPools = [
              {
                id = "string"
              }
            ]
            backendPort = int
            disableOutboundSnat = bool
            enableFloatingIP = bool
            enableTcpReset = bool
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = int
            idleTimeoutInMinutes = int
            loadDistribution = "string"
            probe = {
              id = "string"
            }
            protocol = "string"
          }
        }
      ]
      outboundRules = [
        {
          id = "string"
          name = "string"
          properties = {
            allocatedOutboundPorts = int
            backendAddressPool = {
              id = "string"
            }
            enableTcpReset = bool
            frontendIPConfigurations = [
              {
                id = "string"
              }
            ]
            idleTimeoutInMinutes = int
            protocol = "string"
          }
        }
      ]
      probes = [
        {
          id = "string"
          name = "string"
          properties = {
            intervalInSeconds = int
            numberOfProbes = int
            port = int
            probeThreshold = int
            protocol = "string"
            requestPath = "string"
          }
        }
      ]
    }
    sku = {
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### loadBalancers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The load balancer SKU. | LoadBalancerSku |
| extendedLocation | The extended location of the load balancer. | ExtendedLocation |
| properties | Properties of load balancer. | LoadBalancerPropertiesFormat |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### LoadBalancerPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPools | Collection of backend address pools used by a load balancer. | BackendAddressPool[] |
| frontendIPConfigurations | Object representing the frontend IPs to be used for the load balancer. | FrontendIPConfiguration[] |
| inboundNatPools | Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound NAT rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules. | InboundNatPool[] |
| inboundNatRules | Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules. | InboundNatRule[] |
| loadBalancingRules | Object collection representing the load balancing rules Gets the provisioning. | LoadBalancingRule[] |
| outboundRules | The outbound rules. | OutboundRule[] |
| probes | Collection of probe objects used in the load balancer. | Probe[] |


### BackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer backend address pool. | BackendAddressPoolPropertiesFormat |


### BackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| drainPeriodInSeconds | Amount of seconds Load Balancer waits for before sending RESET to client and backend address. | int |
| loadBalancerBackendAddresses | An array of backend addresses. | LoadBalancerBackendAddress[] |
| location | The location of the backend address pool. | string |
| syncMode | Backend address synchronous mode for the backend pool | 'Automatic''Manual' |
| tunnelInterfaces | An array of gateway load balancer tunnel interfaces. | GatewayLoadBalancerTunnelInterface[] |
| virtualNetwork | A reference to a virtual network. | SubResource |


### LoadBalancerBackendAddress

| Name | Description | Value |
|-|-|-|
| name | Name of the backend address. | string |
| properties | Properties of load balancer backend address pool. | LoadBalancerBackendAddressPropertiesFormat |


### LoadBalancerBackendAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections. | 'Down''None''Up' |
| ipAddress | IP Address belonging to the referenced virtual network. | string |
| loadBalancerFrontendIPConfiguration | Reference to the frontend ip address configuration defined in regional loadbalancer. | SubResource |
| subnet | Reference to an existing subnet. | SubResource |
| virtualNetwork | Reference to an existing virtual network. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### GatewayLoadBalancerTunnelInterface

| Name | Description | Value |
|-|-|-|
| identifier | Identifier of gateway load balancer tunnel interface. | int |
| port | Port of gateway load balancer tunnel interface. | int |
| protocol | Protocol of gateway load balancer tunnel interface. | 'Native''None''VXLAN' |
| type | Traffic type of gateway load balancer tunnel interface. | 'External''Internal''None' |


### FrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of the load balancer probe. | FrontendIPConfigurationPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### FrontendIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the Public IP resource. | PublicIPAddress |
| publicIPPrefix | The reference to the Public IP Prefix resource. | SubResource |
| subnet | The reference to the subnet resource. | Subnet |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |


### InboundNatPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer inbound nat pool. | InboundNatPoolPropertiesFormat |


### InboundNatPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendPort | The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535. | int (required) |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPortRangeEnd | The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535. | int (required) |
| frontendPortRangeStart | The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534. | int (required) |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the inbound NAT pool. | 'All''Tcp''Udp' (required) |


### InboundNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer inbound NAT rule. | InboundNatRulePropertiesFormat |


### InboundNatRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to backendAddressPool resource. | SubResource |
| backendPort | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | int |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeEnd | The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeStart | The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' |


### LoadBalancingRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer load balancing rule. | LoadBalancingRulePropertiesFormat |


### LoadBalancingRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs. | SubResource |
| backendAddressPools | An array of references to pool of DIPs. | SubResource[] |
| backendPort | The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port". | int |
| disableOutboundSnat | Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule. | bool |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port". | int (required) |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| loadDistribution | The load distribution policy for this rule. | 'Default''SourceIP''SourceIPProtocol' |
| probe | The reference to the load balancer probe used by the load balancing rule. | SubResource |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' (required) |


### OutboundRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer outbound rule. | OutboundRulePropertiesFormat |


### OutboundRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| allocatedOutboundPorts | The number of outbound ports to be used for NAT. | int |
| backendAddressPool | A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs. | SubResource(required) |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfigurations | The Frontend IP addresses of the load balancer. | SubResource[] (required) |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. | int |
| protocol | The protocol for the outbound rule in load balancer. | 'All''Tcp''Udp' (required) |


### Probe

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer probe. | ProbePropertiesFormat |


### ProbePropertiesFormat

| Name | Description | Value |
|-|-|-|
| intervalInSeconds | The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5. | int |
| numberOfProbes | The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure. | int |
| port | The port for communicating the probe. Possible values range from 1 to 65535, inclusive. | int (required) |
| probeThreshold | The number of consecutive successful or failed probes in order to allow or deny traffic from being delivered to this endpoint. After failing the number of consecutive probes equal to this value, the endpoint will be taken out of rotation and require the same number of successful consecutive probes to be placed back in rotation. | int |
| protocol | The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful. | 'Http''Https''Tcp' (required) |
| requestPath | The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value. | string |


### LoadBalancerSku

| Name | Description | Value |
|-|-|-|
| name | Name of a load balancer SKU. | 'Basic''Gateway''Standard' |
| tier | Tier of a load balancer SKU. | 'Global''Regional' |
## Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      drainPeriodInSeconds = int
      loadBalancerBackendAddresses = [
        {
          name = "string"
          properties = {
            adminState = "string"
            ipAddress = "string"
            loadBalancerFrontendIPConfiguration = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
            virtualNetwork = {
              id = "string"
            }
          }
        }
      ]
      location = "string"
      syncMode = "string"
      tunnelInterfaces = [
        {
          identifier = int
          port = int
          protocol = "string"
          type = "string"
        }
      ]
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

### loadBalancers/backendAddressPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:loadBalancers |
| properties | Properties of load balancer backend address pool. | BackendAddressPoolPropertiesFormat |


### BackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| drainPeriodInSeconds | Amount of seconds Load Balancer waits for before sending RESET to client and backend address. | int |
| loadBalancerBackendAddresses | An array of backend addresses. | LoadBalancerBackendAddress[] |
| location | The location of the backend address pool. | string |
| syncMode | Backend address synchronous mode for the backend pool | 'Automatic''Manual' |
| tunnelInterfaces | An array of gateway load balancer tunnel interfaces. | GatewayLoadBalancerTunnelInterface[] |
| virtualNetwork | A reference to a virtual network. | SubResource |


### LoadBalancerBackendAddress

| Name | Description | Value |
|-|-|-|
| name | Name of the backend address. | string |
| properties | Properties of load balancer backend address pool. | LoadBalancerBackendAddressPropertiesFormat |


### LoadBalancerBackendAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections. | 'Down''None''Up' |
| ipAddress | IP Address belonging to the referenced virtual network. | string |
| loadBalancerFrontendIPConfiguration | Reference to the frontend ip address configuration defined in regional loadbalancer. | SubResource |
| subnet | Reference to an existing subnet. | SubResource |
| virtualNetwork | Reference to an existing virtual network. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### GatewayLoadBalancerTunnelInterface

| Name | Description | Value |
|-|-|-|
| identifier | Identifier of gateway load balancer tunnel interface. | int |
| port | Port of gateway load balancer tunnel interface. | int |
| protocol | Protocol of gateway load balancer tunnel interface. | 'Native''None''VXLAN' |
| type | Traffic type of gateway load balancer tunnel interface. | 'External''Internal''None' |
## Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendAddressPool = {
        id = "string"
      }
      backendPort = int
      enableFloatingIP = bool
      enableTcpReset = bool
      frontendIPConfiguration = {
        id = "string"
      }
      frontendPort = int
      frontendPortRangeEnd = int
      frontendPortRangeStart = int
      idleTimeoutInMinutes = int
      protocol = "string"
    }
  })
}

```

### loadBalancers/inboundNatRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:loadBalancers |
| properties | Properties of load balancer inbound NAT rule. | InboundNatRulePropertiesFormat |


### InboundNatRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to backendAddressPool resource. | SubResource |
| backendPort | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | int |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeEnd | The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeStart | The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/localNetworkGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/localNetworkGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      fqdn = "string"
      gatewayIpAddress = "string"
      localNetworkAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
    }
  })
}

```

### localNetworkGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the local network gateway. | LocalNetworkGatewayPropertiesFormat(required) |


### LocalNetworkGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| bgpSettings | Local network gateway's BGP speaker settings. | BgpSettings |
| fqdn | FQDN of local network gateway. | string |
| gatewayIpAddress | IP address of local network gateway. | string |
| localNetworkAddressSpace | Local network site address space. | AddressSpace |


### BgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |
| bgpPeeringAddresses | BGP peering address with IP configuration ID for virtual network gateway. | IPConfigurationBgpPeeringAddress[] |
| peerWeight | The weight added to routes learned from this BGP speaker. | int |


### IPConfigurationBgpPeeringAddress

| Name | Description | Value |
|-|-|-|
| customBgpIpAddresses | The list of custom BGP peering addresses which belong to IP configuration. | string[] |
| ipconfigurationId | The ID of IP configuration which belongs to gateway. | string |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |
## Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerId = "string"
    }
  })
}

```

### managementGroups/networkManagerConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: managementGroups |
| properties | The scope connection properties | NetworkManagerConnectionProperties |


### NetworkManagerConnectionProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the scope connection. | string |
| networkManagerId | Network Manager Id. | string |
## Microsoft.Network/natGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/natGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      idleTimeoutInMinutes = int
      publicIpAddresses = [
        {
          id = "string"
        }
      ]
      publicIpPrefixes = [
        {
          id = "string"
        }
      ]
    }
    zones = [
      "string"
    ]
    sku = {
      name = "Standard"
    }
  })
}

```

### natGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The nat gateway SKU. | NatGatewaySku |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |
## Microsoft.Network/networkInterfaces@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkInterfaces@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      auxiliaryMode = "string"
      auxiliarySku = "string"
      disableTcpStateTracking = bool
      dnsSettings = {
        dnsServers = [
          "string"
        ]
        internalDnsNameLabel = "string"
      }
      enableAcceleratedNetworking = bool
      enableIPForwarding = bool
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            applicationGatewayBackendAddressPools = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddresses = [
                    {
                      fqdn = "string"
                      ipAddress = "string"
                    }
                  ]
                }
              }
            ]
            applicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            gatewayLoadBalancer = {
              id = "string"
            }
            loadBalancerBackendAddressPools = [
              {
                id = "string"
                name = "string"
                properties = {
                  drainPeriodInSeconds = int
                  loadBalancerBackendAddresses = [
                    {
                      name = "string"
                      properties = {
                        adminState = "string"
                        ipAddress = "string"
                        loadBalancerFrontendIPConfiguration = {
                          id = "string"
                        }
                        subnet = {
                          id = "string"
                        }
                        virtualNetwork = {
                          id = "string"
                        }
                      }
                    }
                  ]
                  location = "string"
                  syncMode = "string"
                  tunnelInterfaces = [
                    {
                      identifier = int
                      port = int
                      protocol = "string"
                      type = "string"
                    }
                  ]
                  virtualNetwork = {
                    id = "string"
                  }
                }
              }
            ]
            loadBalancerInboundNatRules = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  backendPort = int
                  enableFloatingIP = bool
                  enableTcpReset = bool
                  frontendIPConfiguration = {
                    id = "string"
                  }
                  frontendPort = int
                  frontendPortRangeEnd = int
                  frontendPortRangeStart = int
                  idleTimeoutInMinutes = int
                  protocol = "string"
                }
              }
            ]
            primary = bool
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              extendedLocation = {
                name = "string"
                type = "EdgeZone"
              }
              id = "string"
              location = "string"
              properties = {
                ddosSettings = {
                  ddosProtectionPlan = {
                    id = "string"
                  }
                  protectionMode = "string"
                }
                deleteOption = "string"
                dnsSettings = {
                  domainNameLabel = "string"
                  domainNameLabelScope = "string"
                  fqdn = "string"
                  reverseFqdn = "string"
                }
                idleTimeoutInMinutes = int
                ipAddress = "string"
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                linkedPublicIPAddress = {
                  public-ip-address-object
                }
                migrationPhase = "string"
                natGateway = {
                  id = "string"
                  location = "string"
                  properties = {
                    idleTimeoutInMinutes = int
                    publicIpAddresses = [
                      {
                        id = "string"
                      }
                    ]
                    publicIpPrefixes = [
                      {
                        id = "string"
                      }
                    ]
                  }
                  sku = {
                    name = "Standard"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPAddressVersion = "string"
                publicIPAllocationMethod = "string"
                publicIPPrefix = {
                  id = "string"
                }
                servicePublicIPAddress = {
                  public-ip-address-object
                }
              }
              sku = {
                name = "string"
                tier = "string"
              }
              tags = {}
              zones = [
                "string"
              ]
            }
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
            virtualNetworkTaps = [
              {
                id = "string"
                location = "string"
                properties = {
                  destinationLoadBalancerFrontEndIPConfiguration = {
                    id = "string"
                    name = "string"
                    properties = {
                      gatewayLoadBalancer = {
                        id = "string"
                      }
                      privateIPAddress = "string"
                      privateIPAddressVersion = "string"
                      privateIPAllocationMethod = "string"
                      publicIPAddress = {
                        extendedLocation = {
                          name = "string"
                          type = "EdgeZone"
                        }
                        id = "string"
                        location = "string"
                        properties = {
                          ddosSettings = {
                            ddosProtectionPlan = {
                              id = "string"
                            }
                            protectionMode = "string"
                          }
                          deleteOption = "string"
                          dnsSettings = {
                            domainNameLabel = "string"
                            domainNameLabelScope = "string"
                            fqdn = "string"
                            reverseFqdn = "string"
                          }
                          idleTimeoutInMinutes = int
                          ipAddress = "string"
                          ipTags = [
                            {
                              ipTagType = "string"
                              tag = "string"
                            }
                          ]
                          linkedPublicIPAddress = {
                            public-ip-address-object
                          }
                          migrationPhase = "string"
                          natGateway = {
                            id = "string"
                            location = "string"
                            properties = {
                              idleTimeoutInMinutes = int
                              publicIpAddresses = [
                                {
                                  id = "string"
                                }
                              ]
                              publicIpPrefixes = [
                                {
                                  id = "string"
                                }
                              ]
                            }
                            sku = {
                              name = "Standard"
                            }
                            tags = {}
                            zones = [
                              "string"
                            ]
                          }
                          publicIPAddressVersion = "string"
                          publicIPAllocationMethod = "string"
                          publicIPPrefix = {
                            id = "string"
                          }
                          servicePublicIPAddress = {
                            public-ip-address-object
                          }
                        }
                        sku = {
                          name = "string"
                          tier = "string"
                        }
                        tags = {}
                        zones = [
                          "string"
                        ]
                      }
                      publicIPPrefix = {
                        id = "string"
                      }
                      subnet = {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          addressPrefixes = [
                            "string"
                          ]
                          applicationGatewayIPConfigurations = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                subnet = {
                                  id = "string"
                                }
                              }
                            }
                          ]
                          delegations = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                serviceName = "string"
                              }
                              type = "string"
                            }
                          ]
                          ipAllocations = [
                            {
                              id = "string"
                            }
                          ]
                          natGateway = {
                            id = "string"
                          }
                          networkSecurityGroup = {
                            id = "string"
                            location = "string"
                            properties = {
                              flushConnection = bool
                              securityRules = [
                                {
                                  id = "string"
                                  name = "string"
                                  properties = {
                                    access = "string"
                                    description = "string"
                                    destinationAddressPrefix = "string"
                                    destinationAddressPrefixes = [
                                      "string"
                                    ]
                                    destinationApplicationSecurityGroups = [
                                      {
                                        id = "string"
                                        location = "string"
                                        properties = {}
                                        tags = {}
                                      }
                                    ]
                                    destinationPortRange = "string"
                                    destinationPortRanges = [
                                      "string"
                                    ]
                                    direction = "string"
                                    priority = int
                                    protocol = "string"
                                    sourceAddressPrefix = "string"
                                    sourceAddressPrefixes = [
                                      "string"
                                    ]
                                    sourceApplicationSecurityGroups = [
                                      {
                                        id = "string"
                                        location = "string"
                                        properties = {}
                                        tags = {}
                                      }
                                    ]
                                    sourcePortRange = "string"
                                    sourcePortRanges = [
                                      "string"
                                    ]
                                  }
                                  type = "string"
                                }
                              ]
                            }
                            tags = {}
                          }
                          privateEndpointNetworkPolicies = "string"
                          privateLinkServiceNetworkPolicies = "string"
                          routeTable = {
                            id = "string"
                            location = "string"
                            properties = {
                              disableBgpRoutePropagation = bool
                              routes = [
                                {
                                  id = "string"
                                  name = "string"
                                  properties = {
                                    addressPrefix = "string"
                                    hasBgpOverride = bool
                                    nextHopIpAddress = "string"
                                    nextHopType = "string"
                                  }
                                  type = "string"
                                }
                              ]
                            }
                            tags = {}
                          }
                          serviceEndpointPolicies = [
                            {
                              id = "string"
                              location = "string"
                              properties = {
                                contextualServiceEndpointPolicies = [
                                  "string"
                                ]
                                serviceAlias = "string"
                                serviceEndpointPolicyDefinitions = [
                                  {
                                    id = "string"
                                    name = "string"
                                    properties = {
                                      description = "string"
                                      service = "string"
                                      serviceResources = [
                                        "string"
                                      ]
                                    }
                                    type = "string"
                                  }
                                ]
                              }
                              tags = {}
                            }
                          ]
                          serviceEndpoints = [
                            {
                              locations = [
                                "string"
                              ]
                              service = "string"
                            }
                          ]
                        }
                        type = "string"
                      }
                    }
                    zones = [
                      "string"
                    ]
                  }
                  destinationNetworkInterfaceIPConfiguration = {
                  destinationPort = int
                }
                tags = {}
              }
            ]
          }
          type = "string"
        }
      ]
      migrationPhase = "string"
      networkSecurityGroup = {
        id = "string"
        location = "string"
        properties = {
          flushConnection = bool
          securityRules = [
            {
              id = "string"
              name = "string"
              properties = {
                access = "string"
                description = "string"
                destinationAddressPrefix = "string"
                destinationAddressPrefixes = [
                  "string"
                ]
                destinationApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                destinationPortRange = "string"
                destinationPortRanges = [
                  "string"
                ]
                direction = "string"
                priority = int
                protocol = "string"
                sourceAddressPrefix = "string"
                sourceAddressPrefixes = [
                  "string"
                ]
                sourceApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                sourcePortRange = "string"
                sourcePortRanges = [
                  "string"
                ]
              }
              type = "string"
            }
          ]
        }
        tags = {}
      }
      nicType = "string"
      privateLinkService = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          autoApproval = {
            subscriptions = [
              "string"
            ]
          }
          enableProxyProtocol = bool
          fqdns = [
            "string"
          ]
          ipConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                primary = bool
                privateIPAddress = "string"
                privateIPAddressVersion = "string"
                privateIPAllocationMethod = "string"
                subnet = {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    addressPrefixes = [
                      "string"
                    ]
                    applicationGatewayIPConfigurations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          subnet = {
                            id = "string"
                          }
                        }
                      }
                    ]
                    delegations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          serviceName = "string"
                        }
                        type = "string"
                      }
                    ]
                    ipAllocations = [
                      {
                        id = "string"
                      }
                    ]
                    natGateway = {
                      id = "string"
                    }
                    networkSecurityGroup = {
                      id = "string"
                      location = "string"
                      properties = {
                        flushConnection = bool
                        securityRules = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              access = "string"
                              description = "string"
                              destinationAddressPrefix = "string"
                              destinationAddressPrefixes = [
                                "string"
                              ]
                              destinationApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              destinationPortRange = "string"
                              destinationPortRanges = [
                                "string"
                              ]
                              direction = "string"
                              priority = int
                              protocol = "string"
                              sourceAddressPrefix = "string"
                              sourceAddressPrefixes = [
                                "string"
                              ]
                              sourceApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              sourcePortRange = "string"
                              sourcePortRanges = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    privateEndpointNetworkPolicies = "string"
                    privateLinkServiceNetworkPolicies = "string"
                    routeTable = {
                      id = "string"
                      location = "string"
                      properties = {
                        disableBgpRoutePropagation = bool
                        routes = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              addressPrefix = "string"
                              hasBgpOverride = bool
                              nextHopIpAddress = "string"
                              nextHopType = "string"
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    serviceEndpointPolicies = [
                      {
                        id = "string"
                        location = "string"
                        properties = {
                          contextualServiceEndpointPolicies = [
                            "string"
                          ]
                          serviceAlias = "string"
                          serviceEndpointPolicyDefinitions = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                description = "string"
                                service = "string"
                                serviceResources = [
                                  "string"
                                ]
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                    ]
                    serviceEndpoints = [
                      {
                        locations = [
                          "string"
                        ]
                        service = "string"
                      }
                    ]
                  }
                  type = "string"
                }
              }
            }
          ]
          loadBalancerFrontendIpConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                gatewayLoadBalancer = {
                  id = "string"
                }
                privateIPAddress = "string"
                privateIPAddressVersion = "string"
                privateIPAllocationMethod = "string"
                publicIPAddress = {
                  extendedLocation = {
                    name = "string"
                    type = "EdgeZone"
                  }
                  id = "string"
                  location = "string"
                  properties = {
                    ddosSettings = {
                      ddosProtectionPlan = {
                        id = "string"
                      }
                      protectionMode = "string"
                    }
                    deleteOption = "string"
                    dnsSettings = {
                      domainNameLabel = "string"
                      domainNameLabelScope = "string"
                      fqdn = "string"
                      reverseFqdn = "string"
                    }
                    idleTimeoutInMinutes = int
                    ipAddress = "string"
                    ipTags = [
                      {
                        ipTagType = "string"
                        tag = "string"
                      }
                    ]
                    linkedPublicIPAddress = {
                      public-ip-address-object
                    }
                    migrationPhase = "string"
                    natGateway = {
                      id = "string"
                      location = "string"
                      properties = {
                        idleTimeoutInMinutes = int
                        publicIpAddresses = [
                          {
                            id = "string"
                          }
                        ]
                        publicIpPrefixes = [
                          {
                            id = "string"
                          }
                        ]
                      }
                      sku = {
                        name = "Standard"
                      }
                      tags = {}
                      zones = [
                        "string"
                      ]
                    }
                    publicIPAddressVersion = "string"
                    publicIPAllocationMethod = "string"
                    publicIPPrefix = {
                      id = "string"
                    }
                    servicePublicIPAddress = {
                      public-ip-address-object
                    }
                  }
                  sku = {
                    name = "string"
                    tier = "string"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPPrefix = {
                  id = "string"
                }
                subnet = {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    addressPrefixes = [
                      "string"
                    ]
                    applicationGatewayIPConfigurations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          subnet = {
                            id = "string"
                          }
                        }
                      }
                    ]
                    delegations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          serviceName = "string"
                        }
                        type = "string"
                      }
                    ]
                    ipAllocations = [
                      {
                        id = "string"
                      }
                    ]
                    natGateway = {
                      id = "string"
                    }
                    networkSecurityGroup = {
                      id = "string"
                      location = "string"
                      properties = {
                        flushConnection = bool
                        securityRules = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              access = "string"
                              description = "string"
                              destinationAddressPrefix = "string"
                              destinationAddressPrefixes = [
                                "string"
                              ]
                              destinationApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              destinationPortRange = "string"
                              destinationPortRanges = [
                                "string"
                              ]
                              direction = "string"
                              priority = int
                              protocol = "string"
                              sourceAddressPrefix = "string"
                              sourceAddressPrefixes = [
                                "string"
                              ]
                              sourceApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              sourcePortRange = "string"
                              sourcePortRanges = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    privateEndpointNetworkPolicies = "string"
                    privateLinkServiceNetworkPolicies = "string"
                    routeTable = {
                      id = "string"
                      location = "string"
                      properties = {
                        disableBgpRoutePropagation = bool
                        routes = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              addressPrefix = "string"
                              hasBgpOverride = bool
                              nextHopIpAddress = "string"
                              nextHopType = "string"
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    serviceEndpointPolicies = [
                      {
                        id = "string"
                        location = "string"
                        properties = {
                          contextualServiceEndpointPolicies = [
                            "string"
                          ]
                          serviceAlias = "string"
                          serviceEndpointPolicyDefinitions = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                description = "string"
                                service = "string"
                                serviceResources = [
                                  "string"
                                ]
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                    ]
                    serviceEndpoints = [
                      {
                        locations = [
                          "string"
                        ]
                        service = "string"
                      }
                    ]
                  }
                  type = "string"
                }
              }
              zones = [
                "string"
              ]
            }
          ]
          visibility = {
            subscriptions = [
              "string"
            ]
          }
        }
        tags = {}
      }
      workloadType = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### networkInterfaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the network interface. | ExtendedLocation |
| properties | Properties of the network interface. | NetworkInterfacePropertiesFormat |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### NetworkInterfacePropertiesFormat

| Name | Description | Value |
|-|-|-|
| auxiliaryMode | Auxiliary mode of Network Interface resource. | 'AcceleratedConnections''Floating''MaxConnections''None' |
| auxiliarySku | Auxiliary sku of Network Interface resource. | 'A1''A2''A4''A8''None' |
| disableTcpStateTracking | Indicates whether to disable tcp state tracking. | bool |
| dnsSettings | The DNS settings in network interface. | NetworkInterfaceDnsSettings |
| enableAcceleratedNetworking | If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking. | bool |
| enableIPForwarding | Indicates whether IP forwarding is enabled on this network interface. | bool |
| ipConfigurations | A list of IPConfigurations of the network interface. | NetworkInterfaceIPConfiguration[] |
| migrationPhase | Migration phase of Network Interface resource. | 'Abort''Commit''Committed''None''Prepare' |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| nicType | Type of Network Interface resource. | 'Elastic''Standard' |
| privateLinkService | Privatelinkservice of the network interface resource. | PrivateLinkService |
| workloadType | WorkloadType of the NetworkInterface for BareMetal resources | string |


### NetworkInterfaceDnsSettings

| Name | Description | Value |
|-|-|-|
| dnsServers | List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection. | string[] |
| internalDnsNameLabel | Relative DNS name for this NIC used for internal communications between VMs in the same virtual network. | string |


### NetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Network interface IP configuration properties. | NetworkInterfaceIPConfigurationPropertiesFormat |
| type | Resource type. | string |


### NetworkInterfaceIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | The reference to ApplicationGatewayBackendAddressPool resource. | ApplicationGatewayBackendAddressPool[] |
| applicationSecurityGroups | Application security groups in which the IP configuration is included. | ApplicationSecurityGroup[] |
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| loadBalancerBackendAddressPools | The reference to LoadBalancerBackendAddressPool resource. | BackendAddressPool[] |
| loadBalancerInboundNatRules | A list of references of LoadBalancerInboundNatRules. | InboundNatRule[] |
| primary | Whether this is a primary customer address on the network interface. | bool |
| privateIPAddress | Private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | Public IP address bound to the IP configuration. | PublicIPAddress |
| subnet | Subnet bound to the IP configuration. | Subnet |
| virtualNetworkTaps | The reference to Virtual Network Taps. | VirtualNetworkTap[] |


### ApplicationGatewayBackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend address pool that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend address pool. | ApplicationGatewayBackendAddressPoolPropertiesFormat |


### ApplicationGatewayBackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddresses | Backend addresses. | ApplicationGatewayBackendAddress[] |


### ApplicationGatewayBackendAddress

| Name | Description | Value |
|-|-|-|
| fqdn | Fully qualified domain name (FQDN). | string |
| ipAddress | IP address. | string |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### BackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer backend address pool. | BackendAddressPoolPropertiesFormat |


### BackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| drainPeriodInSeconds | Amount of seconds Load Balancer waits for before sending RESET to client and backend address. | int |
| loadBalancerBackendAddresses | An array of backend addresses. | LoadBalancerBackendAddress[] |
| location | The location of the backend address pool. | string |
| syncMode | Backend address synchronous mode for the backend pool | 'Automatic''Manual' |
| tunnelInterfaces | An array of gateway load balancer tunnel interfaces. | GatewayLoadBalancerTunnelInterface[] |
| virtualNetwork | A reference to a virtual network. | SubResource |


### LoadBalancerBackendAddress

| Name | Description | Value |
|-|-|-|
| name | Name of the backend address. | string |
| properties | Properties of load balancer backend address pool. | LoadBalancerBackendAddressPropertiesFormat |


### LoadBalancerBackendAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections. | 'Down''None''Up' |
| ipAddress | IP Address belonging to the referenced virtual network. | string |
| loadBalancerFrontendIPConfiguration | Reference to the frontend ip address configuration defined in regional loadbalancer. | SubResource |
| subnet | Reference to an existing subnet. | SubResource |
| virtualNetwork | Reference to an existing virtual network. | SubResource |


### GatewayLoadBalancerTunnelInterface

| Name | Description | Value |
|-|-|-|
| identifier | Identifier of gateway load balancer tunnel interface. | int |
| port | Port of gateway load balancer tunnel interface. | int |
| protocol | Protocol of gateway load balancer tunnel interface. | 'Native''None''VXLAN' |
| type | Traffic type of gateway load balancer tunnel interface. | 'External''Internal''None' |


### InboundNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer inbound NAT rule. | InboundNatRulePropertiesFormat |


### InboundNatRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to backendAddressPool resource. | SubResource |
| backendPort | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | int |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeEnd | The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeStart | The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |


### VirtualNetworkTap

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Virtual Network Tap Properties. | VirtualNetworkTapPropertiesFormat |
| tags | Resource tags. | object |


### VirtualNetworkTapPropertiesFormat

| Name | Description | Value |
|-|-|-|
| destinationLoadBalancerFrontEndIPConfiguration | The reference to the private IP address on the internal Load Balancer that will receive the tap. | FrontendIPConfiguration |
| destinationNetworkInterfaceIPConfiguration | The reference to the private IP Address of the collector nic that will receive the tap. | NetworkInterfaceIPConfiguration |
| destinationPort | The VXLAN destination port that will receive the tapped traffic. | int |


### FrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of the load balancer probe. | FrontendIPConfigurationPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### FrontendIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the Public IP resource. | PublicIPAddress |
| publicIPPrefix | The reference to the Public IP Prefix resource. | SubResource |
| subnet | The reference to the subnet resource. | Subnet |


### PrivateLinkService

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the load balancer. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the private link service. | PrivateLinkServiceProperties |
| tags | Resource tags. | object |


### PrivateLinkServiceProperties

| Name | Description | Value |
|-|-|-|
| autoApproval | The auto-approval list of the private link service. | PrivateLinkServicePropertiesAutoApproval |
| enableProxyProtocol | Whether the private link service is enabled for proxy protocol or not. | bool |
| fqdns | The list of Fqdn. | string[] |
| ipConfigurations | An array of private link service IP configurations. | PrivateLinkServiceIpConfiguration[] |
| loadBalancerFrontendIpConfigurations | An array of references to the load balancer IP configurations. | FrontendIPConfiguration[] |
| visibility | The visibility list of the private link service. | PrivateLinkServicePropertiesVisibility |


### PrivateLinkServicePropertiesAutoApproval

| Name | Description | Value |
|-|-|-|
| subscriptions | The list of subscriptions. | string[] |


### PrivateLinkServiceIpConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of private link service ip configuration. | string |
| properties | Properties of the private link service ip configuration. | PrivateLinkServiceIpConfigurationProperties |


### PrivateLinkServiceIpConfigurationProperties

| Name | Description | Value |
|-|-|-|
| primary | Whether the ip configuration is primary or not. | bool |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| subnet | The reference to the subnet resource. | Subnet |


### PrivateLinkServicePropertiesVisibility

| Name | Description | Value |
|-|-|-|
| subscriptions | The list of subscriptions. | string[] |
## Microsoft.Network/networkInterfaces/tapConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkInterfaces/tapConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      virtualNetworkTap = {
        id = "string"
        location = "string"
        properties = {
          destinationLoadBalancerFrontEndIPConfiguration = {
            id = "string"
            name = "string"
            properties = {
              gatewayLoadBalancer = {
                id = "string"
              }
              privateIPAddress = "string"
              privateIPAddressVersion = "string"
              privateIPAllocationMethod = "string"
              publicIPAddress = {
                extendedLocation = {
                  name = "string"
                  type = "EdgeZone"
                }
                id = "string"
                location = "string"
                properties = {
                  ddosSettings = {
                    ddosProtectionPlan = {
                      id = "string"
                    }
                    protectionMode = "string"
                  }
                  deleteOption = "string"
                  dnsSettings = {
                    domainNameLabel = "string"
                    domainNameLabelScope = "string"
                    fqdn = "string"
                    reverseFqdn = "string"
                  }
                  idleTimeoutInMinutes = int
                  ipAddress = "string"
                  ipTags = [
                    {
                      ipTagType = "string"
                      tag = "string"
                    }
                  ]
                  linkedPublicIPAddress = {
                    public-ip-address-object
                  }
                  migrationPhase = "string"
                  natGateway = {
                    id = "string"
                    location = "string"
                    properties = {
                      idleTimeoutInMinutes = int
                      publicIpAddresses = [
                        {
                          id = "string"
                        }
                      ]
                      publicIpPrefixes = [
                        {
                          id = "string"
                        }
                      ]
                    }
                    sku = {
                      name = "Standard"
                    }
                    tags = {}
                    zones = [
                      "string"
                    ]
                  }
                  publicIPAddressVersion = "string"
                  publicIPAllocationMethod = "string"
                  publicIPPrefix = {
                    id = "string"
                  }
                  servicePublicIPAddress = {
                    public-ip-address-object
                  }
                }
                sku = {
                  name = "string"
                  tier = "string"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              publicIPPrefix = {
                id = "string"
              }
              subnet = {
                id = "string"
                name = "string"
                properties = {
                  addressPrefix = "string"
                  addressPrefixes = [
                    "string"
                  ]
                  applicationGatewayIPConfigurations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        subnet = {
                          id = "string"
                        }
                      }
                    }
                  ]
                  delegations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        serviceName = "string"
                      }
                      type = "string"
                    }
                  ]
                  ipAllocations = [
                    {
                      id = "string"
                    }
                  ]
                  natGateway = {
                    id = "string"
                  }
                  networkSecurityGroup = {
                    id = "string"
                    location = "string"
                    properties = {
                      flushConnection = bool
                      securityRules = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            access = "string"
                            description = "string"
                            destinationAddressPrefix = "string"
                            destinationAddressPrefixes = [
                              "string"
                            ]
                            destinationApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            destinationPortRange = "string"
                            destinationPortRanges = [
                              "string"
                            ]
                            direction = "string"
                            priority = int
                            protocol = "string"
                            sourceAddressPrefix = "string"
                            sourceAddressPrefixes = [
                              "string"
                            ]
                            sourceApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            sourcePortRange = "string"
                            sourcePortRanges = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  privateEndpointNetworkPolicies = "string"
                  privateLinkServiceNetworkPolicies = "string"
                  routeTable = {
                    id = "string"
                    location = "string"
                    properties = {
                      disableBgpRoutePropagation = bool
                      routes = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            addressPrefix = "string"
                            hasBgpOverride = bool
                            nextHopIpAddress = "string"
                            nextHopType = "string"
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  serviceEndpointPolicies = [
                    {
                      id = "string"
                      location = "string"
                      properties = {
                        contextualServiceEndpointPolicies = [
                          "string"
                        ]
                        serviceAlias = "string"
                        serviceEndpointPolicyDefinitions = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              description = "string"
                              service = "string"
                              serviceResources = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                  ]
                  serviceEndpoints = [
                    {
                      locations = [
                        "string"
                      ]
                      service = "string"
                    }
                  ]
                }
                type = "string"
              }
            }
            zones = [
              "string"
            ]
          }
          destinationNetworkInterfaceIPConfiguration = {
            id = "string"
            name = "string"
            properties = {
              applicationGatewayBackendAddressPools = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    backendAddresses = [
                      {
                        fqdn = "string"
                        ipAddress = "string"
                      }
                    ]
                  }
                }
              ]
              applicationSecurityGroups = [
                {
                  id = "string"
                  location = "string"
                  properties = {}
                  tags = {}
                }
              ]
              gatewayLoadBalancer = {
                id = "string"
              }
              loadBalancerBackendAddressPools = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    drainPeriodInSeconds = int
                    loadBalancerBackendAddresses = [
                      {
                        name = "string"
                        properties = {
                          adminState = "string"
                          ipAddress = "string"
                          loadBalancerFrontendIPConfiguration = {
                            id = "string"
                          }
                          subnet = {
                            id = "string"
                          }
                          virtualNetwork = {
                            id = "string"
                          }
                        }
                      }
                    ]
                    location = "string"
                    syncMode = "string"
                    tunnelInterfaces = [
                      {
                        identifier = int
                        port = int
                        protocol = "string"
                        type = "string"
                      }
                    ]
                    virtualNetwork = {
                      id = "string"
                    }
                  }
                }
              ]
              loadBalancerInboundNatRules = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    backendAddressPool = {
                      id = "string"
                    }
                    backendPort = int
                    enableFloatingIP = bool
                    enableTcpReset = bool
                    frontendIPConfiguration = {
                      id = "string"
                    }
                    frontendPort = int
                    frontendPortRangeEnd = int
                    frontendPortRangeStart = int
                    idleTimeoutInMinutes = int
                    protocol = "string"
                  }
                }
              ]
              primary = bool
              privateIPAddress = "string"
              privateIPAddressVersion = "string"
              privateIPAllocationMethod = "string"
              publicIPAddress = {
                extendedLocation = {
                  name = "string"
                  type = "EdgeZone"
                }
                id = "string"
                location = "string"
                properties = {
                  ddosSettings = {
                    ddosProtectionPlan = {
                      id = "string"
                    }
                    protectionMode = "string"
                  }
                  deleteOption = "string"
                  dnsSettings = {
                    domainNameLabel = "string"
                    domainNameLabelScope = "string"
                    fqdn = "string"
                    reverseFqdn = "string"
                  }
                  idleTimeoutInMinutes = int
                  ipAddress = "string"
                  ipTags = [
                    {
                      ipTagType = "string"
                      tag = "string"
                    }
                  ]
                  linkedPublicIPAddress = {
                    public-ip-address-object
                  }
                  migrationPhase = "string"
                  natGateway = {
                    id = "string"
                    location = "string"
                    properties = {
                      idleTimeoutInMinutes = int
                      publicIpAddresses = [
                        {
                          id = "string"
                        }
                      ]
                      publicIpPrefixes = [
                        {
                          id = "string"
                        }
                      ]
                    }
                    sku = {
                      name = "Standard"
                    }
                    tags = {}
                    zones = [
                      "string"
                    ]
                  }
                  publicIPAddressVersion = "string"
                  publicIPAllocationMethod = "string"
                  publicIPPrefix = {
                    id = "string"
                  }
                  servicePublicIPAddress = {
                    public-ip-address-object
                  }
                }
                sku = {
                  name = "string"
                  tier = "string"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              subnet = {
                id = "string"
                name = "string"
                properties = {
                  addressPrefix = "string"
                  addressPrefixes = [
                    "string"
                  ]
                  applicationGatewayIPConfigurations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        subnet = {
                          id = "string"
                        }
                      }
                    }
                  ]
                  delegations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        serviceName = "string"
                      }
                      type = "string"
                    }
                  ]
                  ipAllocations = [
                    {
                      id = "string"
                    }
                  ]
                  natGateway = {
                    id = "string"
                  }
                  networkSecurityGroup = {
                    id = "string"
                    location = "string"
                    properties = {
                      flushConnection = bool
                      securityRules = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            access = "string"
                            description = "string"
                            destinationAddressPrefix = "string"
                            destinationAddressPrefixes = [
                              "string"
                            ]
                            destinationApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            destinationPortRange = "string"
                            destinationPortRanges = [
                              "string"
                            ]
                            direction = "string"
                            priority = int
                            protocol = "string"
                            sourceAddressPrefix = "string"
                            sourceAddressPrefixes = [
                              "string"
                            ]
                            sourceApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            sourcePortRange = "string"
                            sourcePortRanges = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  privateEndpointNetworkPolicies = "string"
                  privateLinkServiceNetworkPolicies = "string"
                  routeTable = {
                    id = "string"
                    location = "string"
                    properties = {
                      disableBgpRoutePropagation = bool
                      routes = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            addressPrefix = "string"
                            hasBgpOverride = bool
                            nextHopIpAddress = "string"
                            nextHopType = "string"
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  serviceEndpointPolicies = [
                    {
                      id = "string"
                      location = "string"
                      properties = {
                        contextualServiceEndpointPolicies = [
                          "string"
                        ]
                        serviceAlias = "string"
                        serviceEndpointPolicyDefinitions = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              description = "string"
                              service = "string"
                              serviceResources = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                  ]
                  serviceEndpoints = [
                    {
                      locations = [
                        "string"
                      ]
                      service = "string"
                    }
                  ]
                }
                type = "string"
              }
              virtualNetworkTaps = [
                {
            }
            type = "string"
          }
          destinationPort = int
        }
        tags = {}
      }
    }
  })
}

```

### networkInterfaces/tapConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkInterfaces |
| properties | Properties of the Virtual Network Tap configuration. | NetworkInterfaceTapConfigurationPropertiesFormat |


### NetworkInterfaceTapConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| virtualNetworkTap | The reference to the Virtual Network Tap resource. | VirtualNetworkTap |


### VirtualNetworkTap

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Virtual Network Tap Properties. | VirtualNetworkTapPropertiesFormat |
| tags | Resource tags. | object |


### VirtualNetworkTapPropertiesFormat

| Name | Description | Value |
|-|-|-|
| destinationLoadBalancerFrontEndIPConfiguration | The reference to the private IP address on the internal Load Balancer that will receive the tap. | FrontendIPConfiguration |
| destinationNetworkInterfaceIPConfiguration | The reference to the private IP Address of the collector nic that will receive the tap. | NetworkInterfaceIPConfiguration |
| destinationPort | The VXLAN destination port that will receive the tapped traffic. | int |


### FrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of the load balancer probe. | FrontendIPConfigurationPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### FrontendIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the Public IP resource. | PublicIPAddress |
| publicIPPrefix | The reference to the Public IP Prefix resource. | SubResource |
| subnet | The reference to the subnet resource. | Subnet |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |


### NetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Network interface IP configuration properties. | NetworkInterfaceIPConfigurationPropertiesFormat |
| type | Resource type. | string |


### NetworkInterfaceIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | The reference to ApplicationGatewayBackendAddressPool resource. | ApplicationGatewayBackendAddressPool[] |
| applicationSecurityGroups | Application security groups in which the IP configuration is included. | ApplicationSecurityGroup[] |
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| loadBalancerBackendAddressPools | The reference to LoadBalancerBackendAddressPool resource. | BackendAddressPool[] |
| loadBalancerInboundNatRules | A list of references of LoadBalancerInboundNatRules. | InboundNatRule[] |
| primary | Whether this is a primary customer address on the network interface. | bool |
| privateIPAddress | Private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | Public IP address bound to the IP configuration. | PublicIPAddress |
| subnet | Subnet bound to the IP configuration. | Subnet |
| virtualNetworkTaps | The reference to Virtual Network Taps. | VirtualNetworkTap[] |


### ApplicationGatewayBackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend address pool that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend address pool. | ApplicationGatewayBackendAddressPoolPropertiesFormat |


### ApplicationGatewayBackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddresses | Backend addresses. | ApplicationGatewayBackendAddress[] |


### ApplicationGatewayBackendAddress

| Name | Description | Value |
|-|-|-|
| fqdn | Fully qualified domain name (FQDN). | string |
| ipAddress | IP address. | string |


### BackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer backend address pool. | BackendAddressPoolPropertiesFormat |


### BackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| drainPeriodInSeconds | Amount of seconds Load Balancer waits for before sending RESET to client and backend address. | int |
| loadBalancerBackendAddresses | An array of backend addresses. | LoadBalancerBackendAddress[] |
| location | The location of the backend address pool. | string |
| syncMode | Backend address synchronous mode for the backend pool | 'Automatic''Manual' |
| tunnelInterfaces | An array of gateway load balancer tunnel interfaces. | GatewayLoadBalancerTunnelInterface[] |
| virtualNetwork | A reference to a virtual network. | SubResource |


### LoadBalancerBackendAddress

| Name | Description | Value |
|-|-|-|
| name | Name of the backend address. | string |
| properties | Properties of load balancer backend address pool. | LoadBalancerBackendAddressPropertiesFormat |


### LoadBalancerBackendAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections. | 'Down''None''Up' |
| ipAddress | IP Address belonging to the referenced virtual network. | string |
| loadBalancerFrontendIPConfiguration | Reference to the frontend ip address configuration defined in regional loadbalancer. | SubResource |
| subnet | Reference to an existing subnet. | SubResource |
| virtualNetwork | Reference to an existing virtual network. | SubResource |


### GatewayLoadBalancerTunnelInterface

| Name | Description | Value |
|-|-|-|
| identifier | Identifier of gateway load balancer tunnel interface. | int |
| port | Port of gateway load balancer tunnel interface. | int |
| protocol | Protocol of gateway load balancer tunnel interface. | 'Native''None''VXLAN' |
| type | Traffic type of gateway load balancer tunnel interface. | 'External''Internal''None' |


### InboundNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer inbound NAT rule. | InboundNatRulePropertiesFormat |


### InboundNatRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to backendAddressPool resource. | SubResource |
| backendPort | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | int |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeEnd | The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeStart | The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' |
## Microsoft.Network/networkManagerConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagerConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerId = "string"
    }
  })
}

```

### networkManagerConnections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The scope connection properties | NetworkManagerConnectionProperties |


### NetworkManagerConnectionProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network manager connection. | string |
| networkManagerId | Network Manager Id. | string |
## Microsoft.Network/networkManagers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerScopeAccesses = [
        "string"
      ]
      networkManagerScopes = {
        managementGroups = [
          "string"
        ]
        subscriptions = [
          "string"
        ]
      }
    }
  })
}

```

### networkManagers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The network manager properties | NetworkManagerProperties |


### NetworkManagerProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network manager. | string |
| networkManagerScopeAccesses | Scope Access. | String array containing any of:'Connectivity''SecurityAdmin' (required) |
| networkManagerScopes | Scope of Network Manager. | NetworkManagerPropertiesNetworkManagerScopes(required) |


### NetworkManagerPropertiesNetworkManagerScopes

| Name | Description | Value |
|-|-|-|
| managementGroups | List of management groups. | string[] |
| subscriptions | List of subscriptions. | string[] |
## Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          groupConnectivity = "string"
          isGlobal = "string"
          networkGroupId = "string"
          useHubGateway = "string"
        }
      ]
      connectivityTopology = "string"
      deleteExistingPeering = "string"
      description = "string"
      hubs = [
        {
          resourceId = "string"
          resourceType = "string"
        }
      ]
      isGlobal = "string"
    }
  })
}

```

### networkManagers/connectivityConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | Properties of a network manager connectivity configuration | ConnectivityConfigurationProperties |


### ConnectivityConfigurationProperties

| Name | Description | Value |
|-|-|-|
| appliesToGroups | Groups for configuration | ConnectivityGroupItem[] (required) |
| connectivityTopology | Connectivity topology type. | 'HubAndSpoke''Mesh' (required) |
| deleteExistingPeering | Flag if need to remove current existing peerings. | 'False''True' |
| description | A description of the connectivity configuration. | string |
| hubs | List of hubItems | Hub[] |
| isGlobal | Flag if global mesh is supported. | 'False''True' |


### ConnectivityGroupItem

| Name | Description | Value |
|-|-|-|
| groupConnectivity | Group connectivity type. | 'DirectlyConnected''None' (required) |
| isGlobal | Flag if global is supported. | 'False''True' |
| networkGroupId | Network group Id. | string (required) |
| useHubGateway | Flag if need to use hub gateway. | 'False''True' |


### Hub

| Name | Description | Value |
|-|-|-|
| resourceId | Resource Id. | string |
| resourceType | Resource Type. | string |
## Microsoft.Network/networkManagers/networkGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/networkGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
    }
  })
}

```

### networkManagers/networkGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | The Network Group properties | NetworkGroupProperties |


### NetworkGroupProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network group. | string |
## Microsoft.Network/networkManagers/networkGroups/staticMembers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/networkGroups/staticMembers@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resourceId = "string"
    }
  })
}

```

### networkManagers/networkGroups/staticMembers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkGroups |
| properties | The Static Member properties | StaticMemberProperties |


### StaticMemberProperties

| Name | Description | Value |
|-|-|-|
| resourceId | Resource Id. | string |
## Microsoft.Network/networkManagers/scopeConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/scopeConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      resourceId = "string"
      tenantId = "string"
    }
  })
}

```

### networkManagers/scopeConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | The scope connection properties | ScopeConnectionProperties |


### ScopeConnectionProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the scope connection. | string |
| resourceId | Resource ID. | string |
| tenantId | Tenant ID. | string |
## Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applyOnNetworkIntentPolicyBasedServices = [
        "string"
      ]
      description = "string"
    }
  })
}

```

### networkManagers/securityAdminConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | Indicates the properties for the network manager security admin configuration. | SecurityAdminConfigurationPropertiesFormat |


### SecurityAdminConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| applyOnNetworkIntentPolicyBasedServices | Enum list of network intent policy based services. | String array containing any of:'All''AllowRulesOnly''None' |
| description | A description of the security configuration. | string |
## Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          networkGroupId = "string"
        }
      ]
      description = "string"
    }
  })
}

```

### networkManagers/securityAdminConfigurations/ruleColl...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:securityAdminConfigurations |
| properties | Indicates the properties for the network manager admin rule collection. | AdminRuleCollectionPropertiesFormat |


### AdminRuleCollectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| appliesToGroups | Groups for configuration | NetworkManagerSecurityGroupItem[] (required) |
| description | A description of the admin rule collection. | string |


### NetworkManagerSecurityGroupItem

| Name | Description | Value |
|-|-|-|
| networkGroupId | Network manager group Id. | string (required) |
## Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see networkManagers/securityAdminConfigurations/ruleCollections/rules objects
  body = jsonencode({
    kind = "string"
  })
}

```

### networkManagers/securityAdminConfigurations/ruleColl...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | CustomDefault(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:ruleCollections |


### AdminRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Custom' (required) |
| properties | Indicates the properties of the security admin rule | AdminPropertiesFormat |


### AdminPropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | Indicates the access allowed for this particular rule | 'Allow''AlwaysAllow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| destinations | The destination address prefixes. CIDR or destination IP ranges. | AddressPrefixItem[] |
| direction | Indicates if the traffic matched against the rule in inbound or outbound. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | 'Ah''Any''Esp''Icmp''Tcp''Udp' (required) |
| sourcePortRanges | The source port ranges. | string[] |
| sources | The CIDR or source IP ranges. | AddressPrefixItem[] |


### AddressPrefixItem

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address prefix. | string |
| addressPrefixType | Address prefix type. | 'IPPrefix''ServiceTag' |


### DefaultAdminRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Default' (required) |
| properties | Indicates the properties of the security admin rule | DefaultAdminPropertiesFormat |


### DefaultAdminPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flag | Default rule flag. | string |
## Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deleteExistingNSGs = "string"
      description = "string"
    }
  })
}

```

### networkManagers/securityUserConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | Indicates the properties for the network manager security user configuration. | SecurityUserConfigurationPropertiesFormat |


### SecurityUserConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| deleteExistingNSGs | Flag if need to delete existing network security groups. | 'False''True' |
| description | A description of the security user configuration. | string |
## Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          networkGroupId = "string"
        }
      ]
      description = "string"
    }
  })
}

```

### networkManagers/securityUserConfigurations/ruleColle...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:securityUserConfigurations |
| properties | Indicates the properties for the network manager user rule collection. | UserRuleCollectionPropertiesFormat |


### UserRuleCollectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| appliesToGroups | Groups for configuration | NetworkManagerSecurityGroupItem[] (required) |
| description | A description of the user rule collection. | string |


### NetworkManagerSecurityGroupItem

| Name | Description | Value |
|-|-|-|
| networkGroupId | Network manager group Id. | string (required) |
## Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see networkManagers/securityUserConfigurations/ruleCollections/rules objects
  body = jsonencode({
    kind = "string"
  })
}

```

### networkManagers/securityUserConfigurations/ruleColle...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | CustomDefault(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:ruleCollections |


### UserRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Custom' (required) |
| properties | Indicates the properties of the security user rule | UserRulePropertiesFormat |


### UserRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| destinations | The destination address prefixes. CIDR or destination IP ranges. | AddressPrefixItem[] |
| direction | Indicates if the traffic matched against the rule in inbound or outbound. | 'Inbound''Outbound' (required) |
| protocol | Network protocol this rule applies to. | 'Ah''Any''Esp''Icmp''Tcp''Udp' (required) |
| sourcePortRanges | The source port ranges. | string[] |
| sources | The CIDR or source IP ranges. | AddressPrefixItem[] |


### AddressPrefixItem

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address prefix. | string |
| addressPrefixType | Address prefix type. | 'IPPrefix''ServiceTag' |


### DefaultUserRule

| Name | Description | Value |
|-|-|-|
| kind | Whether the rule is custom or default. | 'Default' (required) |
| properties | Indicates the properties of the security default user rule | DefaultUserRulePropertiesFormat |


### DefaultUserRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| flag | Default rule flag. | string |
## Microsoft.Network/networkProfiles@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkProfiles@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containerNetworkInterfaceConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            containerNetworkInterfaces = [
              {
                id = "string"
              }
            ]
            ipConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  subnet = {
                    id = "string"
                    name = "string"
                    properties = {
                      addressPrefix = "string"
                      addressPrefixes = [
                        "string"
                      ]
                      applicationGatewayIPConfigurations = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            subnet = {
                              id = "string"
                            }
                          }
                        }
                      ]
                      delegations = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            serviceName = "string"
                          }
                          type = "string"
                        }
                      ]
                      ipAllocations = [
                        {
                          id = "string"
                        }
                      ]
                      natGateway = {
                        id = "string"
                      }
                      networkSecurityGroup = {
                        id = "string"
                        location = "string"
                        properties = {
                          flushConnection = bool
                          securityRules = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                access = "string"
                                description = "string"
                                destinationAddressPrefix = "string"
                                destinationAddressPrefixes = [
                                  "string"
                                ]
                                destinationApplicationSecurityGroups = [
                                  {
                                    id = "string"
                                    location = "string"
                                    properties = {}
                                    tags = {}
                                  }
                                ]
                                destinationPortRange = "string"
                                destinationPortRanges = [
                                  "string"
                                ]
                                direction = "string"
                                priority = int
                                protocol = "string"
                                sourceAddressPrefix = "string"
                                sourceAddressPrefixes = [
                                  "string"
                                ]
                                sourceApplicationSecurityGroups = [
                                  {
                                    id = "string"
                                    location = "string"
                                    properties = {}
                                    tags = {}
                                  }
                                ]
                                sourcePortRange = "string"
                                sourcePortRanges = [
                                  "string"
                                ]
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                      privateEndpointNetworkPolicies = "string"
                      privateLinkServiceNetworkPolicies = "string"
                      routeTable = {
                        id = "string"
                        location = "string"
                        properties = {
                          disableBgpRoutePropagation = bool
                          routes = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                addressPrefix = "string"
                                hasBgpOverride = bool
                                nextHopIpAddress = "string"
                                nextHopType = "string"
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                      serviceEndpointPolicies = [
                        {
                          id = "string"
                          location = "string"
                          properties = {
                            contextualServiceEndpointPolicies = [
                              "string"
                            ]
                            serviceAlias = "string"
                            serviceEndpointPolicyDefinitions = [
                              {
                                id = "string"
                                name = "string"
                                properties = {
                                  description = "string"
                                  service = "string"
                                  serviceResources = [
                                    "string"
                                  ]
                                }
                                type = "string"
                              }
                            ]
                          }
                          tags = {}
                        }
                      ]
                      serviceEndpoints = [
                        {
                          locations = [
                            "string"
                          ]
                          service = "string"
                        }
                      ]
                    }
                    type = "string"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  })
}

```

### networkProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Network profile properties. | NetworkProfilePropertiesFormat |


### NetworkProfilePropertiesFormat

| Name | Description | Value |
|-|-|-|
| containerNetworkInterfaceConfigurations | List of chid container network interface configurations. | ContainerNetworkInterfaceConfiguration[] |


### ContainerNetworkInterfaceConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource. This name can be used to access the resource. | string |
| properties | Container network interface configuration properties. | ContainerNetworkInterfaceConfigurationPropertiesForm... |


### ContainerNetworkInterfaceConfigurationPropertiesForm...

| Name | Description | Value |
|-|-|-|
| containerNetworkInterfaces | A list of container network interfaces created from this container network interface configuration. | SubResource[] |
| ipConfigurations | A list of ip configurations of the container network interface configuration. | IPConfigurationProfile[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### IPConfigurationProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource. This name can be used to access the resource. | string |
| properties | Properties of the IP configuration profile. | IPConfigurationProfilePropertiesFormat |


### IPConfigurationProfilePropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | The reference to the subnet resource to create a container network interface ip configuration. | Subnet |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |
## Microsoft.Network/networkSecurityGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      flushConnection = bool
      securityRules = [
        {
          id = "string"
          name = "string"
          properties = {
            access = "string"
            description = "string"
            destinationAddressPrefix = "string"
            destinationAddressPrefixes = [
              "string"
            ]
            destinationApplicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            destinationPortRange = "string"
            destinationPortRanges = [
              "string"
            ]
            direction = "string"
            priority = int
            protocol = "string"
            sourceAddressPrefix = "string"
            sourceAddressPrefixes = [
              "string"
            ]
            sourceApplicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            sourcePortRange = "string"
            sourcePortRanges = [
              "string"
            ]
          }
          type = "string"
        }
      ]
    }
  })
}

```

### networkSecurityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |
## Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      access = "string"
      description = "string"
      destinationAddressPrefix = "string"
      destinationAddressPrefixes = [
        "string"
      ]
      destinationApplicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      destinationPortRange = "string"
      destinationPortRanges = [
        "string"
      ]
      direction = "string"
      priority = int
      protocol = "string"
      sourceAddressPrefix = "string"
      sourceAddressPrefixes = [
        "string"
      ]
      sourceApplicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      sourcePortRange = "string"
      sourcePortRanges = [
        "string"
      ]
    }
  })
}

```

### networkSecurityGroups/securityRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkSecurityGroups |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |
## Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
    }
  })
}

```

### networkSecurityPerimeters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The network security perimeter properties | NetworkSecurityPerimeterProperties |


### NetworkSecurityPerimeterProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network security perimeter. | string |
| displayName | A friendly name for the network security perimeter. | string |
## Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoApprovedRemotePerimeterResourceId = "string"
      description = "string"
      localInboundProfiles = [
        "string"
      ]
      remoteInboundProfiles = [
        "string"
      ]
    }
  })
}

```

### networkSecurityPerimeters/links

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkSecurityPerimeters |
| properties | Properties of the network security perimeter link resource. | NspLinkProperties |


### NspLinkProperties

| Name | Description | Value |
|-|-|-|
| autoApprovedRemotePerimeterResourceId | Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource. | string |
| description | A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars. | string |
| localInboundProfiles | Local Inbound profile names to which Inbound is allowed. Use [''] to allow inbound to all profiles. It's default value is ['']. | string[] |
| remoteInboundProfiles | Remote Inbound profile names to which Inbound is allowed. Use [''] to allow inbound to all profiles. This property can only be updated in auto-approval mode. It's default value is ['']. | string[] |
## Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### networkSecurityPerimeters/profiles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkSecurityPerimeters |
| properties | Properties of the network security perimeter profile | NspProfileProperties |
## Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressPrefixes = [
        "string"
      ]
      direction = "string"
      emailAddresses = [
        "string"
      ]
      fullyQualifiedDomainNames = [
        "string"
      ]
      phoneNumbers = [
        "string"
      ]
      subscriptions = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

### networkSecurityPerimeters/profiles/accessRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | Properties of the NSP access rule. | NspAccessRuleProperties |


### NspAccessRuleProperties

| Name | Description | Value |
|-|-|-|
| addressPrefixes | Inbound address prefixes (IPv4/IPv6) | string[] |
| direction | Direction that specifies whether the access rules is inbound/outbound. | 'Inbound''Outbound' |
| emailAddresses | Outbound rules email address format. | string[] |
| fullyQualifiedDomainNames | Outbound rules fully qualified domain name format. | string[] |
| phoneNumbers | Outbound rules phone number format. | string[] |
| subscriptions | List of subscription ids | SubscriptionId[] |


### SubscriptionId

| Name | Description | Value |
|-|-|-|
| id | Subscription id in the ARM id format. | string |
## Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessMode = "string"
      privateLinkResource = {
        id = "string"
      }
      profile = {
        id = "string"
      }
    }
  })
}

```

### networkSecurityPerimeters/resourceAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkSecurityPerimeters |
| properties | Properties of the NSP resource association. | NspAssociationProperties |


### NspAssociationProperties

| Name | Description | Value |
|-|-|-|
| accessMode | Access mode on the association. | 'Audit''Enforced''Learning' |
| privateLinkResource | The PaaS resource to be associated. | SubResource |
| profile | Profile id to which the PaaS resource is associated. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/networkVirtualAppliances@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      additionalNics = [
        {
          hasPublicIp = bool
          name = "string"
        }
      ]
      bootStrapConfigurationBlobs = [
        "string"
      ]
      cloudInitConfiguration = "string"
      cloudInitConfigurationBlobs = [
        "string"
      ]
      delegation = {
        serviceName = "string"
      }
      nvaSku = {
        bundledScaleUnit = "string"
        marketPlaceVersion = "string"
        vendor = "string"
      }
      partnerManagedResource = {}
      sshPublicKey = "string"
      virtualApplianceAsn = int
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

### networkVirtualAppliances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The service principal that has read access to cloud-init and config blob. | ManagedServiceIdentity |
| properties | Properties of the Network Virtual Appliance. | NetworkVirtualAppliancePropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### NetworkVirtualAppliancePropertiesFormat

| Name | Description | Value |
|-|-|-|
| additionalNics | Details required for Additional Network Interface. | VirtualApplianceAdditionalNicProperties[] |
| bootStrapConfigurationBlobs | BootStrapConfigurationBlobs storage URLs. | string[] |
| cloudInitConfiguration | CloudInitConfiguration string in plain text. | string |
| cloudInitConfigurationBlobs | CloudInitConfigurationBlob storage URLs. | string[] |
| delegation | The delegation for the Virtual Appliance | DelegationProperties |
| nvaSku | Network Virtual Appliance SKU. | VirtualApplianceSkuProperties |
| partnerManagedResource | The delegation for the Virtual Appliance | PartnerManagedResourceProperties |
| sshPublicKey | Public key for SSH login. | string |
| virtualApplianceAsn | VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported. | int |
| virtualHub | The Virtual Hub where Network Virtual Appliance is being deployed. | SubResource |


### VirtualApplianceAdditionalNicProperties

| Name | Description | Value |
|-|-|-|
| hasPublicIp | Flag (true or false) for Intent for Public Ip on additional nic | bool |
| name | Name of additional nic | string |


### DelegationProperties

| Name | Description | Value |
|-|-|-|
| serviceName | The service name to which the NVA is delegated. | string |


### VirtualApplianceSkuProperties

| Name | Description | Value |
|-|-|-|
| bundledScaleUnit | Virtual Appliance Scale Unit. | string |
| marketPlaceVersion | Virtual Appliance Version. | string |
| vendor | Virtual Appliance Vendor. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rules = [
        {
          destinationPortRange = int
          protocol = "string"
          sourceAddressPrefix = "string"
        }
      ]
    }
  })
}

```

### networkVirtualAppliances/inboundSecurityRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkVirtualAppliances |
| properties | The properties of the Inbound Security Rules. | InboundSecurityRuleProperties |


### InboundSecurityRuleProperties

| Name | Description | Value |
|-|-|-|
| rules | List of allowed rules. | InboundSecurityRules[] |


### InboundSecurityRules

| Name | Description | Value |
|-|-|-|
| destinationPortRange | NVA port ranges to be opened up. One needs to provide specific ports. | int |
| protocol | Protocol. This should be either TCP or UDP. | 'TCP''UDP' |
| sourceAddressPrefix | The CIDR or source IP range. Only /30, /31 and /32 Ip ranges are allowed. | string |
## Microsoft.Network/networkVirtualAppliances/networkVirtualApplianceConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/networkVirtualApplianceConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      asn = int
      bgpPeerAddress = [
        "string"
      ]
      enableInternetSecurity = bool
      name = "string"
      routingConfiguration = {
        associatedRouteTable = {
          resourceUri = "string"
        }
        inboundRouteMap = {
          resourceUri = "string"
        }
        outboundRouteMap = {
          resourceUri = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              resourceUri = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
      }
      tunnelIdentifier = int
    }
  })
}

```

### networkVirtualAppliances/networkVirtualApplianceConn...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkVirtualAppliances |
| properties | Properties of the express route connection. | NetworkVirtualApplianceConnectionProperties |


### NetworkVirtualApplianceConnectionProperties

| Name | Description | Value |
|-|-|-|
| asn | Network Virtual Appliance ASN. | int |
| bgpPeerAddress | List of bgpPeerAddresses for the NVA instances | string[] |
| enableInternetSecurity | Enable internet security. | bool |
| name | The name of the resource. | string |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfigurationNfv |
| tunnelIdentifier | Unique identifier for the connection. | int |


### RoutingConfigurationNfv

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | RoutingConfigurationNfvSubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | RoutingConfigurationNfvSubResource |
| outboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for outbound advertised routes. | RoutingConfigurationNfvSubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTableNfv |


### RoutingConfigurationNfvSubResource

| Name | Description | Value |
|-|-|-|
| resourceUri | Resource ID. | string |


### PropagatedRouteTableNfv

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | RoutingConfigurationNfvSubResource[] |
| labels | The list of labels. | string[] |
## Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      o365Policy = {
        breakOutCategories = {
          allow = bool
          default = bool
          optimize = bool
        }
      }
    }
  })
}

```

### networkVirtualAppliances/virtualApplianceSites

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkVirtualAppliances |
| properties | The properties of the Virtual Appliance Sites. | VirtualApplianceSiteProperties |


### VirtualApplianceSiteProperties

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address Prefix. | string |
| o365Policy | Office 365 Policy. | Office365PolicyProperties |


### Office365PolicyProperties

| Name | Description | Value |
|-|-|-|
| breakOutCategories | Office 365 breakout categories. | BreakOutCategoryPolicies |


### BreakOutCategoryPolicies

| Name | Description | Value |
|-|-|-|
| allow | Flag to control breakout of o365 allow category. | bool |
| default | Flag to control breakout of o365 default category. | bool |
| optimize | Flag to control breakout of o365 optimize category. | bool |
## Microsoft.Network/networkWatchers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### networkWatchers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the network watcher. | NetworkWatcherPropertiesFormat |
## Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoStart = bool
      destination = {
        address = "string"
        port = int
        resourceId = "string"
      }
      endpoints = [
        {
          address = "string"
          coverageLevel = "string"
          filter = {
            items = [
              {
                address = "string"
                type = "AgentAddress"
              }
            ]
            type = "Include"
          }
          name = "string"
          resourceId = "string"
          scope = {
            exclude = [
              {
                address = "string"
              }
            ]
            include = [
              {
                address = "string"
              }
            ]
          }
          type = "string"
        }
      ]
      monitoringIntervalInSeconds = int
      notes = "string"
      outputs = [
        {
          type = "Workspace"
          workspaceSettings = {
            workspaceResourceId = "string"
          }
        }
      ]
      source = {
        port = int
        resourceId = "string"
      }
      testConfigurations = [
        {
          httpConfiguration = {
            method = "string"
            path = "string"
            port = int
            preferHTTPS = bool
            requestHeaders = [
              {
                name = "string"
                value = "string"
              }
            ]
            validStatusCodeRanges = [
              "string"
            ]
          }
          icmpConfiguration = {
            disableTraceRoute = bool
          }
          name = "string"
          preferredIPVersion = "string"
          protocol = "string"
          successThreshold = {
            checksFailedPercent = int
            roundTripTimeMs = int
          }
          tcpConfiguration = {
            destinationPortBehavior = "string"
            disableTraceRoute = bool
            port = int
          }
          testFrequencySec = int
        }
      ]
      testGroups = [
        {
          destinations = [
            "string"
          ]
          disable = bool
          name = "string"
          sources = [
            "string"
          ]
          testConfigurations = [
            "string"
          ]
        }
      ]
    }
  })
}

```

### networkWatchers/connectionMonitors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Connection monitor location. | string |
| tags | Connection monitor tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkWatchers |
| properties | Properties of the connection monitor. | ConnectionMonitorParametersOrConnectionMonitorResult...(required) |


### ConnectionMonitorParametersOrConnectionMonitorResult...

| Name | Description | Value |
|-|-|-|
| autoStart | Determines if the connection monitor will start automatically once created. | bool |
| destination | Describes the destination of connection monitor. | ConnectionMonitorDestination |
| endpoints | List of connection monitor endpoints. | ConnectionMonitorEndpoint[] |
| monitoringIntervalInSeconds | Monitoring interval in seconds. | int |
| notes | Optional notes to be associated with the connection monitor. | string |
| outputs | List of connection monitor outputs. | ConnectionMonitorOutput[] |
| source | Describes the source of connection monitor. | ConnectionMonitorSource |
| testConfigurations | List of connection monitor test configurations. | ConnectionMonitorTestConfiguration[] |
| testGroups | List of connection monitor test groups. | ConnectionMonitorTestGroup[] |


### ConnectionMonitorDestination

| Name | Description | Value |
|-|-|-|
| address | Address of the connection monitor destination (IP or domain name). | string |
| port | The destination port used by connection monitor. | int |
| resourceId | The ID of the resource used as the destination by connection monitor. | string |


### ConnectionMonitorEndpoint

| Name | Description | Value |
|-|-|-|
| address | Address of the connection monitor endpoint (IP or domain name). | string |
| coverageLevel | Test coverage for the endpoint. | 'AboveAverage''Average''BelowAverage''Default''Full''Low' |
| filter | Filter for sub-items within the endpoint. | ConnectionMonitorEndpointFilter |
| name | The name of the connection monitor endpoint. | string (required) |
| resourceId | Resource ID of the connection monitor endpoint. | string |
| scope | Endpoint scope. | ConnectionMonitorEndpointScope |
| type | The endpoint type. | 'AzureArcVM''AzureSubnet''AzureVM''AzureVMSS''AzureVNet''ExternalAddress''MMAWorkspaceMachine''MMAWorkspaceNetwork' |


### ConnectionMonitorEndpointFilter

| Name | Description | Value |
|-|-|-|
| items | List of items in the filter. | ConnectionMonitorEndpointFilterItem[] |
| type | The behavior of the endpoint filter. Currently only 'Include' is supported. | 'Include' |


### ConnectionMonitorEndpointFilterItem

| Name | Description | Value |
|-|-|-|
| address | The address of the filter item. | string |
| type | The type of item included in the filter. Currently only 'AgentAddress' is supported. | 'AgentAddress' |


### ConnectionMonitorEndpointScope

| Name | Description | Value |
|-|-|-|
| exclude | List of items which needs to be excluded from the endpoint scope. | ConnectionMonitorEndpointScopeItem[] |
| include | List of items which needs to be included to the endpoint scope. | ConnectionMonitorEndpointScopeItem[] |


### ConnectionMonitorEndpointScopeItem

| Name | Description | Value |
|-|-|-|
| address | The address of the endpoint item. Supported types are IPv4/IPv6 subnet mask or IPv4/IPv6 IP address. | string |


### ConnectionMonitorOutput

| Name | Description | Value |
|-|-|-|
| type | Connection monitor output destination type. Currently, only "Workspace" is supported. | 'Workspace' |
| workspaceSettings | Describes the settings for producing output into a log analytics workspace. | ConnectionMonitorWorkspaceSettings |


### ConnectionMonitorWorkspaceSettings

| Name | Description | Value |
|-|-|-|
| workspaceResourceId | Log analytics workspace resource ID. | string |


### ConnectionMonitorSource

| Name | Description | Value |
|-|-|-|
| port | The source port used by connection monitor. | int |
| resourceId | The ID of the resource used as the source by connection monitor. | string (required) |


### ConnectionMonitorTestConfiguration

| Name | Description | Value |
|-|-|-|
| httpConfiguration | The parameters used to perform test evaluation over HTTP. | ConnectionMonitorHttpConfiguration |
| icmpConfiguration | The parameters used to perform test evaluation over ICMP. | ConnectionMonitorIcmpConfiguration |
| name | The name of the connection monitor test configuration. | string (required) |
| preferredIPVersion | The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters. | 'IPv4''IPv6' |
| protocol | The protocol to use in test evaluation. | 'Http''Icmp''Tcp' (required) |
| successThreshold | The threshold for declaring a test successful. | ConnectionMonitorSuccessThreshold |
| tcpConfiguration | The parameters used to perform test evaluation over TCP. | ConnectionMonitorTcpConfiguration |
| testFrequencySec | The frequency of test evaluation, in seconds. | int |


### ConnectionMonitorHttpConfiguration

| Name | Description | Value |
|-|-|-|
| method | The HTTP method to use. | 'Get''Post' |
| path | The path component of the URI. For instance, "/dir1/dir2". | string |
| port | The port to connect to. | int |
| preferHTTPS | Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit. | bool |
| requestHeaders | The HTTP headers to transmit with the request. | HttpHeader[] |
| validStatusCodeRanges | HTTP status codes to consider successful. For instance, "2xx,301-304,418". | string[] |


### HttpHeader

| Name | Description | Value |
|-|-|-|
| name | The name in HTTP header. | string |
| value | The value in HTTP header. | string |


### ConnectionMonitorIcmpConfiguration

| Name | Description | Value |
|-|-|-|
| disableTraceRoute | Value indicating whether path evaluation with trace route should be disabled. | bool |


### ConnectionMonitorSuccessThreshold

| Name | Description | Value |
|-|-|-|
| checksFailedPercent | The maximum percentage of failed checks permitted for a test to evaluate as successful. | int |
| roundTripTimeMs | The maximum round-trip time in milliseconds permitted for a test to evaluate as successful. | int |


### ConnectionMonitorTcpConfiguration

| Name | Description | Value |
|-|-|-|
| destinationPortBehavior | Destination port behavior. | 'ListenIfAvailable''None' |
| disableTraceRoute | Value indicating whether path evaluation with trace route should be disabled. | bool |
| port | The port to connect to. | int |


### ConnectionMonitorTestGroup

| Name | Description | Value |
|-|-|-|
| destinations | List of destination endpoint names. | string[] (required) |
| disable | Value indicating whether test group is disabled. | bool |
| name | The name of the connection monitor test group. | string (required) |
| sources | List of source endpoint names. | string[] (required) |
| testConfigurations | List of test configuration names. | string[] (required) |
## Microsoft.Network/networkWatchers/flowLogs@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/flowLogs@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabled = bool
      flowAnalyticsConfiguration = {
        networkWatcherFlowAnalyticsConfiguration = {
          enabled = bool
          trafficAnalyticsInterval = int
          workspaceId = "string"
          workspaceRegion = "string"
          workspaceResourceId = "string"
        }
      }
      format = {
        type = "JSON"
        version = int
      }
      retentionPolicy = {
        days = int
        enabled = bool
      }
      storageId = "string"
      targetResourceId = "string"
    }
  })
}

```

### networkWatchers/flowLogs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkWatchers |
| properties | Properties of the flow log. | FlowLogPropertiesFormat |


### FlowLogPropertiesFormat

| Name | Description | Value |
|-|-|-|
| enabled | Flag to enable/disable flow logging. | bool |
| flowAnalyticsConfiguration | Parameters that define the configuration of traffic analytics. | TrafficAnalyticsProperties |
| format | Parameters that define the flow log format. | FlowLogFormatParameters |
| retentionPolicy | Parameters that define the retention policy for flow log. | RetentionPolicyParameters |
| storageId | ID of the storage account which is used to store the flow log. | string (required) |
| targetResourceId | ID of network security group to which flow log will be applied. | string (required) |


### TrafficAnalyticsProperties

| Name | Description | Value |
|-|-|-|
| networkWatcherFlowAnalyticsConfiguration | Parameters that define the configuration of traffic analytics. | TrafficAnalyticsConfigurationProperties |


### TrafficAnalyticsConfigurationProperties

| Name | Description | Value |
|-|-|-|
| enabled | Flag to enable/disable traffic analytics. | bool |
| trafficAnalyticsInterval | The interval in minutes which would decide how frequently TA service should do flow analytics. | int |
| workspaceId | The resource guid of the attached workspace. | string |
| workspaceRegion | The location of the attached workspace. | string |
| workspaceResourceId | Resource Id of the attached workspace. | string |


### FlowLogFormatParameters

| Name | Description | Value |
|-|-|-|
| type | The file type of flow log. | 'JSON' |
| version | The version (revision) of the flow log. | int |


### RetentionPolicyParameters

| Name | Description | Value |
|-|-|-|
| days | Number of days to retain flow log records. | int |
| enabled | Flag to enable/disable retention. | bool |
## Microsoft.Network/networkWatchers/packetCaptures@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/packetCaptures@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bytesToCapturePerPacket = int
      filters = [
        {
          localIPAddress = "string"
          localPort = "string"
          protocol = "string"
          remoteIPAddress = "string"
          remotePort = "string"
        }
      ]
      scope = {
        exclude = [
          "string"
        ]
        include = [
          "string"
        ]
      }
      storageLocation = {
        filePath = "string"
        storageId = "string"
        storagePath = "string"
      }
      target = "string"
      targetType = "string"
      timeLimitInSeconds = int
      totalBytesPerSession = int
    }
  })
}

```

### networkWatchers/packetCaptures

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkWatchers |
| properties | Properties of the packet capture. | PacketCaptureParametersOrPacketCaptureResultProperti...(required) |


### PacketCaptureParametersOrPacketCaptureResultProperti...

| Name | Description | Value |
|-|-|-|
| bytesToCapturePerPacket | Number of bytes captured per packet, the remaining bytes are truncated. | int |
| filters | A list of packet capture filters. | PacketCaptureFilter[] |
| scope | A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS. | PacketCaptureMachineScope |
| storageLocation | The storage location for a packet capture session. | PacketCaptureStorageLocation(required) |
| target | The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported. | string (required) |
| targetType | Target type of the resource provided. | 'AzureVM''AzureVMSS' |
| timeLimitInSeconds | Maximum duration of the capture session in seconds. | int |
| totalBytesPerSession | Maximum size of the capture output. | int |


### PacketCaptureFilter

| Name | Description | Value |
|-|-|-|
| localIPAddress | Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |
| localPort | Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |
| protocol | Protocol to be filtered on. | 'Any''TCP''UDP' |
| remoteIPAddress | Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |
| remotePort | Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |


### PacketCaptureMachineScope

| Name | Description | Value |
|-|-|-|
| exclude | List of AzureVMSS instances which has to be excluded from the AzureVMSS from running packet capture. | string[] |
| include | List of AzureVMSS instances to run packet capture on. | string[] |


### PacketCaptureStorageLocation

| Name | Description | Value |
|-|-|-|
| filePath | A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional. | string |
| storageId | The ID of the storage account to save the packet capture session. Required if no local file path is provided. | string |
| storagePath | The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture. | string |
## Microsoft.Network/p2svpnGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/p2svpnGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customDnsServers = [
        "string"
      ]
      isRoutingPreferenceInternet = bool
      p2SConnectionConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            enableInternetSecurity = bool
            routingConfiguration = {
              associatedRouteTable = {
                id = "string"
              }
              inboundRouteMap = {
                id = "string"
              }
              outboundRouteMap = {
                id = "string"
              }
              propagatedRouteTables = {
                ids = [
                  {
                    id = "string"
                  }
                ]
                labels = [
                  "string"
                ]
              }
              vnetRoutes = {
                staticRoutes = [
                  {
                    addressPrefixes = [
                      "string"
                    ]
                    name = "string"
                    nextHopIpAddress = "string"
                  }
                ]
                staticRoutesConfig = {
                  vnetLocalRouteOverrideCriteria = "string"
                }
              }
            }
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
      vpnGatewayScaleUnit = int
      vpnServerConfiguration = {
        id = "string"
      }
    }
  })
}

```

### p2svpnGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the P2SVpnGateway. | P2SVpnGatewayProperties |


### P2SVpnGatewayProperties

| Name | Description | Value |
|-|-|-|
| customDnsServers | List of all customer specified DNS servers IP addresses. | string[] |
| isRoutingPreferenceInternet | Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway. | bool |
| p2SConnectionConfigurations | List of all p2s connection configurations of the gateway. | P2SConnectionConfiguration[] |
| virtualHub | The VirtualHub to which the gateway belongs. | SubResource |
| vpnGatewayScaleUnit | The scale unit for this p2s vpn gateway. | int |
| vpnServerConfiguration | The VpnServerConfiguration to which the p2sVpnGateway is attached to. | SubResource |


### P2SConnectionConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the P2S connection configuration. | P2SConnectionConfigurationProperties |


### P2SConnectionConfigurationProperties

| Name | Description | Value |
|-|-|-|
| enableInternetSecurity | Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not. | bool |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |
## Microsoft.Network/privateEndpoints@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateEndpoints@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      customDnsConfigs = [
        {
          fqdn = "string"
          ipAddresses = [
            "string"
          ]
        }
      ]
      customNetworkInterfaceName = "string"
      ipConfigurations = [
        {
          name = "string"
          properties = {
            groupId = "string"
            memberName = "string"
            privateIPAddress = "string"
          }
        }
      ]
      manualPrivateLinkServiceConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            privateLinkServiceId = "string"
            requestMessage = "string"
          }
        }
      ]
      privateLinkServiceConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            privateLinkServiceId = "string"
            requestMessage = "string"
          }
        }
      ]
      subnet = {
        id = "string"
        name = "string"
        properties = {
          addressPrefix = "string"
          addressPrefixes = [
            "string"
          ]
          applicationGatewayIPConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          delegations = [
            {
              id = "string"
              name = "string"
              properties = {
                serviceName = "string"
              }
              type = "string"
            }
          ]
          ipAllocations = [
            {
              id = "string"
            }
          ]
          natGateway = {
            id = "string"
          }
          networkSecurityGroup = {
            id = "string"
            location = "string"
            properties = {
              flushConnection = bool
              securityRules = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    access = "string"
                    description = "string"
                    destinationAddressPrefix = "string"
                    destinationAddressPrefixes = [
                      "string"
                    ]
                    destinationApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    destinationPortRange = "string"
                    destinationPortRanges = [
                      "string"
                    ]
                    direction = "string"
                    priority = int
                    protocol = "string"
                    sourceAddressPrefix = "string"
                    sourceAddressPrefixes = [
                      "string"
                    ]
                    sourceApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    sourcePortRange = "string"
                    sourcePortRanges = [
                      "string"
                    ]
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
          routeTable = {
            id = "string"
            location = "string"
            properties = {
              disableBgpRoutePropagation = bool
              routes = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    hasBgpOverride = bool
                    nextHopIpAddress = "string"
                    nextHopType = "string"
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          serviceEndpointPolicies = [
            {
              id = "string"
              location = "string"
              properties = {
                contextualServiceEndpointPolicies = [
                  "string"
                ]
                serviceAlias = "string"
                serviceEndpointPolicyDefinitions = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      description = "string"
                      service = "string"
                      serviceResources = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
          ]
          serviceEndpoints = [
            {
              locations = [
                "string"
              ]
              service = "string"
            }
          ]
        }
        type = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### privateEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the load balancer. | ExtendedLocation |
| properties | Properties of the private endpoint. | PrivateEndpointProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PrivateEndpointProperties

| Name | Description | Value |
|-|-|-|
| applicationSecurityGroups | Application security groups in which the private endpoint IP configuration is included. | ApplicationSecurityGroup[] |
| customDnsConfigs | An array of custom dns configurations. | CustomDnsConfigPropertiesFormat[] |
| customNetworkInterfaceName | The custom name of the network interface attached to the private endpoint. | string |
| ipConfigurations | A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints. | PrivateEndpointIPConfiguration[] |
| manualPrivateLinkServiceConnections | A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource. | PrivateLinkServiceConnection[] |
| privateLinkServiceConnections | A grouping of information about the connection to the remote resource. | PrivateLinkServiceConnection[] |
| subnet | The ID of the subnet from which the private IP will be allocated. | Subnet |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### CustomDnsConfigPropertiesFormat

| Name | Description | Value |
|-|-|-|
| fqdn | Fqdn that resolves to private endpoint ip address. | string |
| ipAddresses | A list of private ip addresses of the private endpoint. | string[] |


### PrivateEndpointIPConfiguration

| Name | Description | Value |
|-|-|-|
| name | The name of the resource that is unique within a resource group. | string |
| properties | Properties of private endpoint IP configurations. | PrivateEndpointIPConfigurationProperties |


### PrivateEndpointIPConfigurationProperties

| Name | Description | Value |
|-|-|-|
| groupId | The ID of a group obtained from the remote resource that this private endpoint should connect to. | string |
| memberName | The member name of a group obtained from the remote resource that this private endpoint should connect to. | string |
| privateIPAddress | A private ip address obtained from the private endpoint's subnet. | string |


### PrivateLinkServiceConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the private link service connection. | PrivateLinkServiceConnectionProperties |


### PrivateLinkServiceConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. | string[] |
| privateLinkServiceConnectionState | A collection of read-only information about the state of the connection to the remote resource. | PrivateLinkServiceConnectionState |
| privateLinkServiceId | The resource id of private link service. | string |
| requestMessage | A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | string |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |
## Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateDnsZoneConfigs = [
        {
          name = "string"
          properties = {
            privateDnsZoneId = "string"
          }
        }
      ]
    }
  })
}

```

### privateEndpoints/privateDnsZoneGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateEndpoints |
| properties | Properties of the private dns zone group. | PrivateDnsZoneGroupPropertiesFormat |


### PrivateDnsZoneGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateDnsZoneConfigs | A collection of private dns zone configurations of the private dns zone group. | PrivateDnsZoneConfig[] |


### PrivateDnsZoneConfig

| Name | Description | Value |
|-|-|-|
| name | Name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the private dns zone configuration. | PrivateDnsZonePropertiesFormat |


### PrivateDnsZonePropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateDnsZoneId | The resource id of the private dns zone. | string |
## Microsoft.Network/privateLinkServices@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateLinkServices@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoApproval = {
        subscriptions = [
          "string"
        ]
      }
      enableProxyProtocol = bool
      fqdns = [
        "string"
      ]
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            primary = bool
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
          }
        }
      ]
      loadBalancerFrontendIpConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            gatewayLoadBalancer = {
              id = "string"
            }
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              extendedLocation = {
                name = "string"
                type = "EdgeZone"
              }
              id = "string"
              location = "string"
              properties = {
                ddosSettings = {
                  ddosProtectionPlan = {
                    id = "string"
                  }
                  protectionMode = "string"
                }
                deleteOption = "string"
                dnsSettings = {
                  domainNameLabel = "string"
                  domainNameLabelScope = "string"
                  fqdn = "string"
                  reverseFqdn = "string"
                }
                idleTimeoutInMinutes = int
                ipAddress = "string"
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                linkedPublicIPAddress = {
                  public-ip-address-object
                }
                migrationPhase = "string"
                natGateway = {
                  id = "string"
                  location = "string"
                  properties = {
                    idleTimeoutInMinutes = int
                    publicIpAddresses = [
                      {
                        id = "string"
                      }
                    ]
                    publicIpPrefixes = [
                      {
                        id = "string"
                      }
                    ]
                  }
                  sku = {
                    name = "Standard"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPAddressVersion = "string"
                publicIPAllocationMethod = "string"
                publicIPPrefix = {
                  id = "string"
                }
                servicePublicIPAddress = {
                  public-ip-address-object
                }
              }
              sku = {
                name = "string"
                tier = "string"
              }
              tags = {}
              zones = [
                "string"
              ]
            }
            publicIPPrefix = {
              id = "string"
            }
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
          }
          zones = [
            "string"
          ]
        }
      ]
      visibility = {
        subscriptions = [
          "string"
        ]
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### privateLinkServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the load balancer. | ExtendedLocation |
| properties | Properties of the private link service. | PrivateLinkServiceProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PrivateLinkServiceProperties

| Name | Description | Value |
|-|-|-|
| autoApproval | The auto-approval list of the private link service. | PrivateLinkServicePropertiesAutoApproval |
| enableProxyProtocol | Whether the private link service is enabled for proxy protocol or not. | bool |
| fqdns | The list of Fqdn. | string[] |
| ipConfigurations | An array of private link service IP configurations. | PrivateLinkServiceIpConfiguration[] |
| loadBalancerFrontendIpConfigurations | An array of references to the load balancer IP configurations. | FrontendIPConfiguration[] |
| visibility | The visibility list of the private link service. | PrivateLinkServicePropertiesVisibility |


### PrivateLinkServicePropertiesAutoApproval

| Name | Description | Value |
|-|-|-|
| subscriptions | The list of subscriptions. | string[] |


### PrivateLinkServiceIpConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of private link service ip configuration. | string |
| properties | Properties of the private link service ip configuration. | PrivateLinkServiceIpConfigurationProperties |


### PrivateLinkServiceIpConfigurationProperties

| Name | Description | Value |
|-|-|-|
| primary | Whether the ip configuration is primary or not. | bool |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| subnet | The reference to the subnet resource. | Subnet |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |


### FrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of the load balancer probe. | FrontendIPConfigurationPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### FrontendIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the Public IP resource. | PublicIPAddress |
| publicIPPrefix | The reference to the Public IP Prefix resource. | SubResource |
| subnet | The reference to the subnet resource. | Subnet |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### PrivateLinkServicePropertiesVisibility

| Name | Description | Value |
|-|-|-|
| subscriptions | The list of subscriptions. | string[] |
## Microsoft.Network/privateLinkServices/privateEndpointConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateLinkServices/privateEndpointConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### privateLinkServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkServices |
| properties | Properties of the private end point connection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | string |
## Microsoft.Network/publicIPAddresses@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/publicIPAddresses@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ddosSettings = {
        ddosProtectionPlan = {
          id = "string"
        }
        protectionMode = "string"
      }
      deleteOption = "string"
      dnsSettings = {
        domainNameLabel = "string"
        domainNameLabelScope = "string"
        fqdn = "string"
        reverseFqdn = "string"
      }
      idleTimeoutInMinutes = int
      ipAddress = "string"
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      linkedPublicIPAddress = {
        public-ip-address-object
      }
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      migrationPhase = "string"
      natGateway = {
        id = "string"
        location = "string"
        properties = {
          idleTimeoutInMinutes = int
          publicIpAddresses = [
            {
              id = "string"
            }
          ]
          publicIpPrefixes = [
            {
              id = "string"
            }
          ]
        }
        sku = {
          name = "Standard"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      publicIPAddressVersion = "string"
      publicIPAllocationMethod = "string"
      publicIPPrefix = {
        id = "string"
      }
      servicePublicIPAddress = {
        public-ip-address-object
      }
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### publicIPAddresses

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The public IP address SKU. | PublicIPAddressSku |
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |
## Microsoft.Network/publicIPPrefixes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/publicIPPrefixes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customIPPrefix = {
        id = "string"
      }
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      natGateway = {
        id = "string"
        location = "string"
        properties = {
          idleTimeoutInMinutes = int
          publicIpAddresses = [
            {
              id = "string"
            }
          ]
          publicIpPrefixes = [
            {
              id = "string"
            }
          ]
        }
        sku = {
          name = "Standard"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      prefixLength = int
      publicIPAddressVersion = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      name = "Standard"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### publicIPPrefixes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The public IP prefix SKU. | PublicIPPrefixSku |
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| properties | Public IP prefix properties. | PublicIPPrefixPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPPrefixPropertiesFormat

| Name | Description | Value |
|-|-|-|
| customIPPrefix | The customIpPrefix that this prefix is associated with. | object |
| ipTags | The list of tags associated with the public IP prefix. | IpTag[] |
| natGateway | NatGateway of Public IP Prefix. | NatGateway |
| prefixLength | The Length of the Public IP Prefix. | int |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPPrefixSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP prefix SKU. | 'Standard' |
| tier | Tier of a public IP prefix SKU. | 'Global''Regional' |
## Microsoft.Network/routeFilters@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeFilters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      rules = [
        {
          id = "string"
          location = "string"
          name = "string"
          properties = {
            access = "string"
            communities = [
              "string"
            ]
            routeFilterRuleType = "Community"
          }
        }
      ]
    }
  })
}

```

### routeFilters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the route filter. | RouteFilterPropertiesFormat |


### RouteFilterPropertiesFormat

| Name | Description | Value |
|-|-|-|
| rules | Collection of RouteFilterRules contained within a route filter. | RouteFilterRule[] |


### RouteFilterRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route filter rule. | RouteFilterRulePropertiesFormat |


### RouteFilterRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The access type of the rule. | 'Allow''Deny' (required) |
| communities | The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']. | string[] (required) |
| routeFilterRuleType | The rule type of the rule. | 'Community' (required) |
## Microsoft.Network/routeFilters/routeFilterRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeFilters/routeFilterRules@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      access = "string"
      communities = [
        "string"
      ]
      routeFilterRuleType = "Community"
    }
  })
}

```

### routeFilters/routeFilterRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:routeFilters |
| properties | Properties of the route filter rule. | RouteFilterRulePropertiesFormat |


### RouteFilterRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The access type of the rule. | 'Allow''Deny' (required) |
| communities | The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']. | string[] (required) |
| routeFilterRuleType | The rule type of the rule. | 'Community' (required) |
## Microsoft.Network/routeTables@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeTables@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableBgpRoutePropagation = bool
      routes = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            hasBgpOverride = bool
            nextHopIpAddress = "string"
            nextHopType = "string"
          }
          type = "string"
        }
      ]
    }
  })
}

```

### routeTables

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the route table. | RouteTablePropertiesFormat |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |
## Microsoft.Network/routeTables/routes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeTables/routes@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      hasBgpOverride = bool
      nextHopIpAddress = "string"
      nextHopType = "string"
    }
  })
}

```

### routeTables/routes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:routeTables |
| properties | Properties of the route. | RoutePropertiesFormat |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |
## Microsoft.Network/securityPartnerProviders@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/securityPartnerProviders@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      securityProviderName = "string"
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

### securityPartnerProviders

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Security Partner Provider. | SecurityPartnerProviderPropertiesFormat |


### SecurityPartnerProviderPropertiesFormat

| Name | Description | Value |
|-|-|-|
| securityProviderName | The security provider name. | 'Checkpoint''IBoss''ZScaler' |
| virtualHub | The virtualHub to which the Security Partner Provider belongs. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/serviceEndpointPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/serviceEndpointPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      contextualServiceEndpointPolicies = [
        "string"
      ]
      serviceAlias = "string"
      serviceEndpointPolicyDefinitions = [
        {
          id = "string"
          name = "string"
          properties = {
            description = "string"
            service = "string"
            serviceResources = [
              "string"
            ]
          }
          type = "string"
        }
      ]
    }
  })
}

```

### serviceEndpointPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |
## Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      service = "string"
      serviceResources = [
        "string"
      ]
    }
  })
}

```

### serviceEndpointPolicies/serviceEndpointPolicyDefinit...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serviceEndpointPolicies |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |
## Microsoft.Network/virtualHubs@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      allowBranchToBranchTraffic = bool
      azureFirewall = {
        id = "string"
      }
      expressRouteGateway = {
        id = "string"
      }
      hubRoutingPreference = "string"
      p2SVpnGateway = {
        id = "string"
      }
      preferredRoutingGateway = "string"
      routeTable = {
        routes = [
          {
            addressPrefixes = [
              "string"
            ]
            nextHopIpAddress = "string"
          }
        ]
      }
      securityPartnerProvider = {
        id = "string"
      }
      securityProviderName = "string"
      sku = "string"
      virtualHubRouteTableV2s = [
        {
          id = "string"
          name = "string"
          properties = {
            attachedConnections = [
              "string"
            ]
            routes = [
              {
                destinations = [
                  "string"
                ]
                destinationType = "string"
                nextHops = [
                  "string"
                ]
                nextHopType = "string"
              }
            ]
          }
        }
      ]
      virtualRouterAsn = int
      virtualRouterAutoScaleConfiguration = {
        minCapacity = int
      }
      virtualRouterIps = [
        "string"
      ]
      virtualWan = {
        id = "string"
      }
      vpnGateway = {
        id = "string"
      }
    }
  })
}

```

### virtualHubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the virtual hub. | VirtualHubProperties |


### VirtualHubProperties

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address-prefix for this VirtualHub. | string |
| allowBranchToBranchTraffic | Flag to control transit for VirtualRouter hub. | bool |
| azureFirewall | The azureFirewall associated with this VirtualHub. | SubResource |
| expressRouteGateway | The expressRouteGateway associated with this VirtualHub. | SubResource |
| hubRoutingPreference | The hubRoutingPreference of this VirtualHub. | 'ASPath''ExpressRoute''VpnGateway' |
| p2SVpnGateway | The P2SVpnGateway associated with this VirtualHub. | SubResource |
| preferredRoutingGateway | The preferred gateway to route on-prem traffic | 'ExpressRoute''None''VpnGateway' |
| routeTable | The routeTable associated with this virtual hub. | VirtualHubRouteTable |
| securityPartnerProvider | The securityPartnerProvider associated with this VirtualHub. | SubResource |
| securityProviderName | The Security Provider name. | string |
| sku | The sku of this VirtualHub. | string |
| virtualHubRouteTableV2s | List of all virtual hub route table v2s associated with this VirtualHub. | VirtualHubRouteTableV2[] |
| virtualRouterAsn | VirtualRouter ASN. | int |
| virtualRouterAutoScaleConfiguration | The VirtualHub Router autoscale configuration. | VirtualRouterAutoScaleConfiguration |
| virtualRouterIps | VirtualRouter IPs. | string[] |
| virtualWan | The VirtualWAN to which the VirtualHub belongs. | SubResource |
| vpnGateway | The VpnGateway associated with this VirtualHub. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### VirtualHubRouteTable

| Name | Description | Value |
|-|-|-|
| routes | List of all routes. | VirtualHubRoute[] |


### VirtualHubRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all addressPrefixes. | string[] |
| nextHopIpAddress | NextHop ip address. | string |


### VirtualHubRouteTableV2

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the virtual hub route table v2. | VirtualHubRouteTableV2Properties |


### VirtualHubRouteTableV2Properties

| Name | Description | Value |
|-|-|-|
| attachedConnections | List of all connections attached to this route table v2. | string[] |
| routes | List of all routes. | VirtualHubRouteV2[] |


### VirtualHubRouteV2

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations. | string[] |
| destinationType | The type of destinations. | string |
| nextHops | NextHops ip address. | string[] |
| nextHopType | The type of next hops. | string |


### VirtualRouterAutoScaleConfiguration

| Name | Description | Value |
|-|-|-|
| minCapacity | The minimum number of scale units for VirtualHub Router. | int |
## Microsoft.Network/virtualHubs/bgpConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/bgpConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hubVirtualNetworkConnection = {
        id = "string"
      }
      peerAsn = int
      peerIp = "string"
    }
  })
}

```

### virtualHubs/bgpConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | The properties of the Bgp connections. | BgpConnectionProperties |


### BgpConnectionProperties

| Name | Description | Value |
|-|-|-|
| hubVirtualNetworkConnection | The reference to the HubVirtualNetworkConnection resource. | SubResource |
| peerAsn | Peer ASN. | int |
| peerIp | Peer IP. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      labels = [
        "string"
      ]
      routes = [
        {
          destinations = [
            "string"
          ]
          destinationType = "string"
          name = "string"
          nextHop = "string"
          nextHopType = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/hubRouteTables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the RouteTable resource. | HubRouteTableProperties |


### HubRouteTableProperties

| Name | Description | Value |
|-|-|-|
| labels | List of labels associated with this route table. | string[] |
| routes | List of all routes. | HubRoute[] |


### HubRoute

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations. | string[] (required) |
| destinationType | The type of destinations (eg: CIDR, ResourceId, Service). | string (required) |
| name | The name of the Route that is unique within a RouteTable. This name can be used to access this route. | string (required) |
| nextHop | NextHop resource ID. | string (required) |
| nextHopType | The type of next hop (eg: ResourceId). | string (required) |
## Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowHubToRemoteVnetTransit = bool
      allowRemoteVnetToUseHubVnetGateways = bool
      enableInternetSecurity = bool
      remoteVirtualNetwork = {
        id = "string"
      }
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
    }
  })
}

```

### virtualHubs/hubVirtualNetworkConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the hub virtual network connection. | HubVirtualNetworkConnectionProperties |


### HubVirtualNetworkConnectionProperties

| Name | Description | Value |
|-|-|-|
| allowHubToRemoteVnetTransit | Deprecated: VirtualHub to RemoteVnet transit to enabled or not. | bool |
| allowRemoteVnetToUseHubVnetGateways | Deprecated: Allow RemoteVnet to use Virtual Hub's gateways. | bool |
| enableInternetSecurity | Enable internet security. | bool |
| remoteVirtualNetwork | Reference to the remote virtual network. | SubResource |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |
## Microsoft.Network/virtualHubs/ipConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/ipConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateIPAddress = "string"
      privateIPAllocationMethod = "string"
      publicIPAddress = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          ddosSettings = {
            ddosProtectionPlan = {
              id = "string"
            }
            protectionMode = "string"
          }
          deleteOption = "string"
          dnsSettings = {
            domainNameLabel = "string"
            domainNameLabelScope = "string"
            fqdn = "string"
            reverseFqdn = "string"
          }
          idleTimeoutInMinutes = int
          ipAddress = "string"
          ipTags = [
            {
              ipTagType = "string"
              tag = "string"
            }
          ]
          linkedPublicIPAddress = {
            public-ip-address-object
          }
          migrationPhase = "string"
          natGateway = {
            id = "string"
            location = "string"
            properties = {
              idleTimeoutInMinutes = int
              publicIpAddresses = [
                {
                  id = "string"
                }
              ]
              publicIpPrefixes = [
                {
                  id = "string"
                }
              ]
            }
            sku = {
              name = "Standard"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          publicIPAddressVersion = "string"
          publicIPAllocationMethod = "string"
          publicIPPrefix = {
            id = "string"
          }
          servicePublicIPAddress = {
            public-ip-address-object
          }
        }
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      subnet = {
        id = "string"
        name = "string"
        properties = {
          addressPrefix = "string"
          addressPrefixes = [
            "string"
          ]
          applicationGatewayIPConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          delegations = [
            {
              id = "string"
              name = "string"
              properties = {
                serviceName = "string"
              }
              type = "string"
            }
          ]
          ipAllocations = [
            {
              id = "string"
            }
          ]
          natGateway = {
            id = "string"
          }
          networkSecurityGroup = {
            id = "string"
            location = "string"
            properties = {
              flushConnection = bool
              securityRules = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    access = "string"
                    description = "string"
                    destinationAddressPrefix = "string"
                    destinationAddressPrefixes = [
                      "string"
                    ]
                    destinationApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    destinationPortRange = "string"
                    destinationPortRanges = [
                      "string"
                    ]
                    direction = "string"
                    priority = int
                    protocol = "string"
                    sourceAddressPrefix = "string"
                    sourceAddressPrefixes = [
                      "string"
                    ]
                    sourceApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    sourcePortRange = "string"
                    sourcePortRanges = [
                      "string"
                    ]
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
          routeTable = {
            id = "string"
            location = "string"
            properties = {
              disableBgpRoutePropagation = bool
              routes = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    hasBgpOverride = bool
                    nextHopIpAddress = "string"
                    nextHopType = "string"
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          serviceEndpointPolicies = [
            {
              id = "string"
              location = "string"
              properties = {
                contextualServiceEndpointPolicies = [
                  "string"
                ]
                serviceAlias = "string"
                serviceEndpointPolicyDefinitions = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      description = "string"
                      service = "string"
                      serviceResources = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
          ]
          serviceEndpoints = [
            {
              locations = [
                "string"
              ]
              service = "string"
            }
          ]
        }
        type = "string"
      }
    }
  })
}

```

### virtualHubs/ipConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | The properties of the Virtual Hub IPConfigurations. | HubIPConfigurationPropertiesFormat |


### HubIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the public IP resource. | PublicIPAddress |
| subnet | The reference to the subnet resource. | Subnet |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |
## Microsoft.Network/virtualHubs/routeMaps@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routeMaps@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      associatedInboundConnections = [
        "string"
      ]
      associatedOutboundConnections = [
        "string"
      ]
      rules = [
        {
          actions = [
            {
              parameters = [
                {
                  asPath = [
                    "string"
                  ]
                  community = [
                    "string"
                  ]
                  routePrefix = [
                    "string"
                  ]
                }
              ]
              type = "string"
            }
          ]
          matchCriteria = [
            {
              asPath = [
                "string"
              ]
              community = [
                "string"
              ]
              matchCondition = "string"
              routePrefix = [
                "string"
              ]
            }
          ]
          name = "string"
          nextStepIfMatched = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/routeMaps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the RouteMap resource. | RouteMapProperties |


### RouteMapProperties

| Name | Description | Value |
|-|-|-|
| associatedInboundConnections | List of connections which have this RoutMap associated for inbound traffic. | string[] |
| associatedOutboundConnections | List of connections which have this RoutMap associated for outbound traffic. | string[] |
| rules | List of RouteMap rules to be applied. | RouteMapRule[] |


### RouteMapRule

| Name | Description | Value |
|-|-|-|
| actions | List of actions which will be applied on a match. | Action[] |
| matchCriteria | List of matching criterion which will be applied to traffic. | Criterion[] |
| name | The unique name for the rule. | string |
| nextStepIfMatched | Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'. | 'Continue''Terminate''Unknown' |


### Action

| Name | Description | Value |
|-|-|-|
| parameters | List of parameters relevant to the action.For instance if type is drop then parameters has list of prefixes to be dropped.If type is add, parameters would have list of ASN numbers to be added | Parameter[] |
| type | Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.' | 'Add''Drop''Remove''Replace''Unknown' |


### Parameter

| Name | Description | Value |
|-|-|-|
| asPath | List of AS paths. | string[] |
| community | List of BGP communities. | string[] |
| routePrefix | List of route prefixes. | string[] |


### Criterion

| Name | Description | Value |
|-|-|-|
| asPath | List of AS paths which this criteria matches. | string[] |
| community | List of BGP communities which this criteria matches. | string[] |
| matchCondition | Match condition to apply RouteMap rules. | 'Contains''Equals''NotContains''NotEquals''Unknown' |
| routePrefix | List of route prefixes which this criteria matches. | string[] |
## Microsoft.Network/virtualHubs/routeTables@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routeTables@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      attachedConnections = [
        "string"
      ]
      routes = [
        {
          destinations = [
            "string"
          ]
          destinationType = "string"
          nextHops = [
            "string"
          ]
          nextHopType = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/routeTables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the virtual hub route table v2. | VirtualHubRouteTableV2Properties |


### VirtualHubRouteTableV2Properties

| Name | Description | Value |
|-|-|-|
| attachedConnections | List of all connections attached to this route table v2. | string[] |
| routes | List of all routes. | VirtualHubRouteV2[] |


### VirtualHubRouteV2

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations. | string[] |
| destinationType | The type of destinations. | string |
| nextHops | NextHops ip address. | string[] |
| nextHopType | The type of next hops. | string |
## Microsoft.Network/virtualHubs/routingIntent@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routingIntent@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      routingPolicies = [
        {
          destinations = [
            "string"
          ]
          name = "string"
          nextHop = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/routingIntent

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the RoutingIntent resource. | RoutingIntentProperties |


### RoutingIntentProperties

| Name | Description | Value |
|-|-|-|
| routingPolicies | List of routing policies. | RoutingPolicy[] |


### RoutingPolicy

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations which this routing policy is applicable to (for example: Internet, PrivateTraffic). | string[] (required) |
| name | The unique name for the routing policy. | string (required) |
| nextHop | The next hop resource id on which this routing policy is applicable to. | string (required) |
## Microsoft.Network/virtualNetworkGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activeActive = bool
      adminState = "string"
      allowRemoteVnetTraffic = bool
      allowVirtualWanTraffic = bool
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      customRoutes = {
        addressPrefixes = [
          "string"
        ]
      }
      disableIPSecReplayProtection = bool
      enableBgp = bool
      enableBgpRouteTranslationForNat = bool
      enableDnsForwarding = bool
      enablePrivateIpAddress = bool
      gatewayDefaultSite = {
        id = "string"
      }
      gatewayType = "string"
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      natRules = [
        {
          id = "string"
          name = "string"
          properties = {
            externalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            internalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            ipConfigurationId = "string"
            mode = "string"
            type = "string"
          }
        }
      ]
      sku = {
        name = "string"
        tier = "string"
      }
      virtualNetworkGatewayPolicyGroups = [
        {
          id = "string"
          name = "string"
          properties = {
            isDefault = bool
            policyMembers = [
              {
                attributeType = "string"
                attributeValue = "string"
                name = "string"
              }
            ]
            priority = int
          }
        }
      ]
      vNetExtendedLocationResourceId = "string"
      vpnClientConfiguration = {
        aadAudience = "string"
        aadIssuer = "string"
        aadTenant = "string"
        radiusServerAddress = "string"
        radiusServers = [
          {
            radiusServerAddress = "string"
            radiusServerScore = int
            radiusServerSecret = "string"
          }
        ]
        radiusServerSecret = "string"
        vngClientConnectionConfigurations = [
          {
            id = "string"
            name = "string"
            properties = {
              virtualNetworkGatewayPolicyGroups = [
                {
                  id = "string"
                }
              ]
              vpnClientAddressPool = {
                addressPrefixes = [
                  "string"
                ]
              }
            }
          }
        ]
        vpnAuthenticationTypes = [
          "string"
        ]
        vpnClientAddressPool = {
          addressPrefixes = [
            "string"
          ]
        }
        vpnClientIpsecPolicies = [
          {
            dhGroup = "string"
            ikeEncryption = "string"
            ikeIntegrity = "string"
            ipsecEncryption = "string"
            ipsecIntegrity = "string"
            pfsGroup = "string"
            saDataSizeKilobytes = int
            saLifeTimeSeconds = int
          }
        ]
        vpnClientProtocols = [
          "string"
        ]
        vpnClientRevokedCertificates = [
          {
            id = "string"
            name = "string"
            properties = {
              thumbprint = "string"
            }
          }
        ]
        vpnClientRootCertificates = [
          {
            id = "string"
            name = "string"
            properties = {
              publicCertData = "string"
            }
          }
        ]
      }
      vpnGatewayGeneration = "string"
      vpnType = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### virtualNetworkGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of type local virtual network gateway. | ExtendedLocation |
| properties | Properties of the virtual network gateway. | VirtualNetworkGatewayPropertiesFormat(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### VirtualNetworkGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| activeActive | ActiveActive flag. | bool |
| adminState | Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet | 'Disabled''Enabled' |
| allowRemoteVnetTraffic | Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN. | bool |
| allowVirtualWanTraffic | Configures this gateway to accept traffic from remote Virtual WAN networks. | bool |
| bgpSettings | Virtual network gateway's BGP speaker settings. | BgpSettings |
| customRoutes | The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient. | AddressSpace |
| disableIPSecReplayProtection | disableIPSecReplayProtection flag. | bool |
| enableBgp | Whether BGP is enabled for this virtual network gateway or not. | bool |
| enableBgpRouteTranslationForNat | EnableBgpRouteTranslationForNat flag. | bool |
| enableDnsForwarding | Whether dns forwarding is enabled or not. | bool |
| enablePrivateIpAddress | Whether private IP needs to be enabled on this gateway for connections or not. | bool |
| gatewayDefaultSite | The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting. | SubResource |
| gatewayType | The type of this virtual network gateway. | 'ExpressRoute''LocalGateway''Vpn' |
| ipConfigurations | IP configurations for virtual network gateway. | VirtualNetworkGatewayIPConfiguration[] |
| natRules | NatRules for virtual network gateway. | VirtualNetworkGatewayNatRule[] |
| sku | The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway. | VirtualNetworkGatewaySku |
| virtualNetworkGatewayPolicyGroups | The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway. | VirtualNetworkGatewayPolicyGroup[] |
| vNetExtendedLocationResourceId | Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet. | string |
| vpnClientConfiguration | The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations. | VpnClientConfiguration |
| vpnGatewayGeneration | The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN. | 'Generation1''Generation2''None' |
| vpnType | The type of this virtual network gateway. | 'PolicyBased''RouteBased' |


### BgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |
| bgpPeeringAddresses | BGP peering address with IP configuration ID for virtual network gateway. | IPConfigurationBgpPeeringAddress[] |
| peerWeight | The weight added to routes learned from this BGP speaker. | int |


### IPConfigurationBgpPeeringAddress

| Name | Description | Value |
|-|-|-|
| customBgpIpAddresses | The list of custom BGP peering addresses which belong to IP configuration. | string[] |
| ipconfigurationId | The ID of IP configuration which belongs to gateway. | string |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### VirtualNetworkGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the virtual network gateway ip configuration. | VirtualNetworkGatewayIPConfigurationPropertiesFormat |


### VirtualNetworkGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the public IP resource. | SubResource |
| subnet | The reference to the subnet resource. | SubResource |


### VirtualNetworkGatewayNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the Virtual Network Gateway NAT rule. | VirtualNetworkGatewayNatRuleProperties |


### VirtualNetworkGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |


### VirtualNetworkGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Gateway SKU name. | 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ' |
| tier | Gateway SKU tier. | 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ' |


### VirtualNetworkGatewayPolicyGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of tVirtualNetworkGatewayPolicyGroup. | VirtualNetworkGatewayPolicyGroupProperties |


### VirtualNetworkGatewayPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not. | bool (required) |
| policyMembers | Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup. | VirtualNetworkGatewayPolicyGroupMember[] (required) |
| priority | Priority for VirtualNetworkGatewayPolicyGroup. | int (required) |


### VirtualNetworkGatewayPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember. | string |
| name | Name of the VirtualNetworkGatewayPolicyGroupMember. | string |


### VpnClientConfiguration

| Name | Description | Value |
|-|-|-|
| aadAudience | The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| aadIssuer | The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| aadTenant | The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| radiusServerAddress | The radius server address property of the VirtualNetworkGateway resource for vpn client connection. | string |
| radiusServers | The radiusServers property for multiple radius server configuration. | RadiusServer[] |
| radiusServerSecret | The radius secret property of the VirtualNetworkGateway resource for vpn client connection. | string |
| vngClientConnectionConfigurations | per ip address pool connection policy for virtual network gateway P2S client. | VngClientConnectionConfiguration[] |
| vpnAuthenticationTypes | VPN authentication types for the virtual network gateway.. | String array containing any of:'AAD''Certificate''Radius' |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace |
| vpnClientIpsecPolicies | VpnClientIpsecPolicies for virtual network gateway P2S client. | IpsecPolicy[] |
| vpnClientProtocols | VpnClientProtocols for Virtual network gateway. | String array containing any of:'IkeV2''OpenVPN''SSTP' |
| vpnClientRevokedCertificates | VpnClientRevokedCertificate for Virtual network gateway. | VpnClientRevokedCertificate[] |
| vpnClientRootCertificates | VpnClientRootCertificate for virtual network gateway. | VpnClientRootCertificate[] |


### RadiusServer

| Name | Description | Value |
|-|-|-|
| radiusServerAddress | The address of this radius server. | string (required) |
| radiusServerScore | The initial score assigned to this radius server. | int |
| radiusServerSecret | The secret used for this radius server. | string |


### VngClientConnectionConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client root certificate. | VngClientConnectionConfigurationProperties |


### VngClientConnectionConfigurationProperties

| Name | Description | Value |
|-|-|-|
| virtualNetworkGatewayPolicyGroups | List of references to virtualNetworkGatewayPolicyGroups | SubResource[] (required) |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace(required) |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### VpnClientRevokedCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client revoked certificate. | VpnClientRevokedCertificatePropertiesFormat |


### VpnClientRevokedCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| thumbprint | The revoked VPN client certificate thumbprint. | string |


### VpnClientRootCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client root certificate. | VpnClientRootCertificatePropertiesFormat(required) |


### VpnClientRootCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicCertData | The certificate public data. | string (required) |
## Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      externalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      internalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      ipConfigurationId = "string"
      mode = "string"
      type = "string"
    }
  })
}

```

### virtualNetworkGateways/natRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworkGateways |
| properties | Properties of the Virtual Network Gateway NAT rule. | VirtualNetworkGatewayNatRuleProperties |


### VirtualNetworkGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |
## Microsoft.Network/virtualNetworks@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      bgpCommunities = {
        virtualNetworkCommunity = "string"
      }
      ddosProtectionPlan = {
        id = "string"
      }
      dhcpOptions = {
        dnsServers = [
          "string"
        ]
      }
      enableDdosProtection = bool
      enableVmProtection = bool
      encryption = {
        enabled = bool
        enforcement = "string"
      }
      flowTimeoutInMinutes = int
      ipAllocations = [
        {
          id = "string"
        }
      ]
      subnets = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            addressPrefixes = [
              "string"
            ]
            applicationGatewayIPConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  subnet = {
                    id = "string"
                  }
                }
              }
            ]
            delegations = [
              {
                id = "string"
                name = "string"
                properties = {
                  serviceName = "string"
                }
                type = "string"
              }
            ]
            ipAllocations = [
              {
                id = "string"
              }
            ]
            natGateway = {
              id = "string"
            }
            networkSecurityGroup = {
              id = "string"
              location = "string"
              properties = {
                flushConnection = bool
                securityRules = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      access = "string"
                      description = "string"
                      destinationAddressPrefix = "string"
                      destinationAddressPrefixes = [
                        "string"
                      ]
                      destinationApplicationSecurityGroups = [
                        {
                          id = "string"
                          location = "string"
                          properties = {}
                          tags = {}
                        }
                      ]
                      destinationPortRange = "string"
                      destinationPortRanges = [
                        "string"
                      ]
                      direction = "string"
                      priority = int
                      protocol = "string"
                      sourceAddressPrefix = "string"
                      sourceAddressPrefixes = [
                        "string"
                      ]
                      sourceApplicationSecurityGroups = [
                        {
                          id = "string"
                          location = "string"
                          properties = {}
                          tags = {}
                        }
                      ]
                      sourcePortRange = "string"
                      sourcePortRanges = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
            privateEndpointNetworkPolicies = "string"
            privateLinkServiceNetworkPolicies = "string"
            routeTable = {
              id = "string"
              location = "string"
              properties = {
                disableBgpRoutePropagation = bool
                routes = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      addressPrefix = "string"
                      hasBgpOverride = bool
                      nextHopIpAddress = "string"
                      nextHopType = "string"
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
            serviceEndpointPolicies = [
              {
                id = "string"
                location = "string"
                properties = {
                  contextualServiceEndpointPolicies = [
                    "string"
                  ]
                  serviceAlias = "string"
                  serviceEndpointPolicyDefinitions = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        description = "string"
                        service = "string"
                        serviceResources = [
                          "string"
                        ]
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
            ]
            serviceEndpoints = [
              {
                locations = [
                  "string"
                ]
                service = "string"
              }
            ]
          }
          type = "string"
        }
      ]
      virtualNetworkPeerings = [
        {
          id = "string"
          name = "string"
          properties = {
            allowForwardedTraffic = bool
            allowGatewayTransit = bool
            allowVirtualNetworkAccess = bool
            doNotVerifyRemoteGateways = bool
            peeringState = "string"
            peeringSyncLevel = "string"
            remoteAddressSpace = {
              addressPrefixes = [
                "string"
              ]
            }
            remoteBgpCommunities = {
              virtualNetworkCommunity = "string"
            }
            remoteVirtualNetwork = {
              id = "string"
            }
            remoteVirtualNetworkAddressSpace = {
              addressPrefixes = [
                "string"
              ]
            }
            useRemoteGateways = bool
          }
          type = "string"
        }
      ]
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### virtualNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the virtual network. | ExtendedLocation |
| properties | Properties of the virtual network. | VirtualNetworkPropertiesFormat |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### VirtualNetworkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressSpace | The AddressSpace that contains an array of IP address ranges that can be used by subnets. | AddressSpace |
| bgpCommunities | Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET. | VirtualNetworkBgpCommunities |
| ddosProtectionPlan | The DDoS protection plan associated with the virtual network. | SubResource |
| dhcpOptions | The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network. | DhcpOptions |
| enableDdosProtection | Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource. | bool |
| enableVmProtection | Indicates if VM protection is enabled for all the subnets in the virtual network. | bool |
| encryption | Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet. | VirtualNetworkEncryption |
| flowTimeoutInMinutes | The FlowTimeout value (in minutes) for the Virtual Network | int |
| ipAllocations | Array of IpAllocation which reference this VNET. | SubResource[] |
| subnets | A list of subnets in a Virtual Network. | Subnet[] |
| virtualNetworkPeerings | A list of peerings in a Virtual Network. | VirtualNetworkPeering[] |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### VirtualNetworkBgpCommunities

| Name | Description | Value |
|-|-|-|
| virtualNetworkCommunity | The BGP community associated with the virtual network. | string (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### DhcpOptions

| Name | Description | Value |
|-|-|-|
| dnsServers | The list of DNS servers IP addresses. | string[] |


### VirtualNetworkEncryption

| Name | Description | Value |
|-|-|-|
| enabled | Indicates if encryption is enabled on the virtual network. | bool (required) |
| enforcement | If the encrypted VNet allows VM that does not support encryption | 'AllowUnencrypted''DropUnencrypted' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |


### VirtualNetworkPeering

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the virtual network peering. | VirtualNetworkPeeringPropertiesFormat |
| type | Resource type. | string |


### VirtualNetworkPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowForwardedTraffic | Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network. | bool |
| allowGatewayTransit | If gateway links can be used in remote virtual networking to link to this virtual network. | bool |
| allowVirtualNetworkAccess | Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space. | bool |
| doNotVerifyRemoteGateways | If we need to verify the provisioning state of the remote gateway. | bool |
| peeringState | The status of the virtual network peering. | 'Connected''Disconnected''Initiated' |
| peeringSyncLevel | The peering sync status of the virtual network peering. | 'FullyInSync''LocalAndRemoteNotInSync''LocalNotInSync''RemoteNotInSync' |
| remoteAddressSpace | The reference to the address space peered with the remote virtual network. | AddressSpace |
| remoteBgpCommunities | The reference to the remote virtual network's Bgp Communities. | VirtualNetworkBgpCommunities |
| remoteVirtualNetwork | The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (/azure/virtual-network/virtual-network-create-peering). | SubResource |
| remoteVirtualNetworkAddressSpace | The reference to the current address space of the remote virtual network. | AddressSpace |
| useRemoteGateways | If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. | bool |
## Microsoft.Network/virtualNetworks/subnets@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks/subnets@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      addressPrefixes = [
        "string"
      ]
      applicationGatewayIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            subnet = {
              id = "string"
            }
          }
        }
      ]
      delegations = [
        {
          id = "string"
          name = "string"
          properties = {
            serviceName = "string"
          }
          type = "string"
        }
      ]
      ipAllocations = [
        {
          id = "string"
        }
      ]
      natGateway = {
        id = "string"
      }
      networkSecurityGroup = {
        id = "string"
        location = "string"
        properties = {
          flushConnection = bool
          securityRules = [
            {
              id = "string"
              name = "string"
              properties = {
                access = "string"
                description = "string"
                destinationAddressPrefix = "string"
                destinationAddressPrefixes = [
                  "string"
                ]
                destinationApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                destinationPortRange = "string"
                destinationPortRanges = [
                  "string"
                ]
                direction = "string"
                priority = int
                protocol = "string"
                sourceAddressPrefix = "string"
                sourceAddressPrefixes = [
                  "string"
                ]
                sourceApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                sourcePortRange = "string"
                sourcePortRanges = [
                  "string"
                ]
              }
              type = "string"
            }
          ]
        }
        tags = {}
      }
      privateEndpointNetworkPolicies = "string"
      privateLinkServiceNetworkPolicies = "string"
      routeTable = {
        id = "string"
        location = "string"
        properties = {
          disableBgpRoutePropagation = bool
          routes = [
            {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                hasBgpOverride = bool
                nextHopIpAddress = "string"
                nextHopType = "string"
              }
              type = "string"
            }
          ]
        }
        tags = {}
      }
      serviceEndpointPolicies = [
        {
          id = "string"
          location = "string"
          properties = {
            contextualServiceEndpointPolicies = [
              "string"
            ]
            serviceAlias = "string"
            serviceEndpointPolicyDefinitions = [
              {
                id = "string"
                name = "string"
                properties = {
                  description = "string"
                  service = "string"
                  serviceResources = [
                    "string"
                  ]
                }
                type = "string"
              }
            ]
          }
          tags = {}
        }
      ]
      serviceEndpoints = [
        {
          locations = [
            "string"
          ]
          service = "string"
        }
      ]
    }
  })
}

```

### virtualNetworks/subnets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworks |
| properties | Properties of the subnet. | SubnetPropertiesFormat |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |
## Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowForwardedTraffic = bool
      allowGatewayTransit = bool
      allowVirtualNetworkAccess = bool
      doNotVerifyRemoteGateways = bool
      peeringState = "string"
      peeringSyncLevel = "string"
      remoteAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      remoteBgpCommunities = {
        virtualNetworkCommunity = "string"
      }
      remoteVirtualNetwork = {
        id = "string"
      }
      remoteVirtualNetworkAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      useRemoteGateways = bool
    }
  })
}

```

### virtualNetworks/virtualNetworkPeerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworks |
| properties | Properties of the virtual network peering. | VirtualNetworkPeeringPropertiesFormat |


### VirtualNetworkPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowForwardedTraffic | Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network. | bool |
| allowGatewayTransit | If gateway links can be used in remote virtual networking to link to this virtual network. | bool |
| allowVirtualNetworkAccess | Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space. | bool |
| doNotVerifyRemoteGateways | If we need to verify the provisioning state of the remote gateway. | bool |
| peeringState | The status of the virtual network peering. | 'Connected''Disconnected''Initiated' |
| peeringSyncLevel | The peering sync status of the virtual network peering. | 'FullyInSync''LocalAndRemoteNotInSync''LocalNotInSync''RemoteNotInSync' |
| remoteAddressSpace | The reference to the address space peered with the remote virtual network. | AddressSpace |
| remoteBgpCommunities | The reference to the remote virtual network's Bgp Communities. | VirtualNetworkBgpCommunities |
| remoteVirtualNetwork | The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (/azure/virtual-network/virtual-network-create-peering). | SubResource |
| remoteVirtualNetworkAddressSpace | The reference to the current address space of the remote virtual network. | AddressSpace |
| useRemoteGateways | If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. | bool |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### VirtualNetworkBgpCommunities

| Name | Description | Value |
|-|-|-|
| virtualNetworkCommunity | The BGP community associated with the virtual network. | string (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/virtualNetworkTaps@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkTaps@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      destinationLoadBalancerFrontEndIPConfiguration = {
        id = "string"
        name = "string"
        properties = {
          gatewayLoadBalancer = {
            id = "string"
          }
          privateIPAddress = "string"
          privateIPAddressVersion = "string"
          privateIPAllocationMethod = "string"
          publicIPAddress = {
            extendedLocation = {
              name = "string"
              type = "EdgeZone"
            }
            id = "string"
            location = "string"
            properties = {
              ddosSettings = {
                ddosProtectionPlan = {
                  id = "string"
                }
                protectionMode = "string"
              }
              deleteOption = "string"
              dnsSettings = {
                domainNameLabel = "string"
                domainNameLabelScope = "string"
                fqdn = "string"
                reverseFqdn = "string"
              }
              idleTimeoutInMinutes = int
              ipAddress = "string"
              ipTags = [
                {
                  ipTagType = "string"
                  tag = "string"
                }
              ]
              linkedPublicIPAddress = {
                public-ip-address-object
              }
              migrationPhase = "string"
              natGateway = {
                id = "string"
                location = "string"
                properties = {
                  idleTimeoutInMinutes = int
                  publicIpAddresses = [
                    {
                      id = "string"
                    }
                  ]
                  publicIpPrefixes = [
                    {
                      id = "string"
                    }
                  ]
                }
                sku = {
                  name = "Standard"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              publicIPAddressVersion = "string"
              publicIPAllocationMethod = "string"
              publicIPPrefix = {
                id = "string"
              }
              servicePublicIPAddress = {
                public-ip-address-object
              }
            }
            sku = {
              name = "string"
              tier = "string"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          publicIPPrefix = {
            id = "string"
          }
          subnet = {
            id = "string"
            name = "string"
            properties = {
              addressPrefix = "string"
              addressPrefixes = [
                "string"
              ]
              applicationGatewayIPConfigurations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              delegations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    serviceName = "string"
                  }
                  type = "string"
                }
              ]
              ipAllocations = [
                {
                  id = "string"
                }
              ]
              natGateway = {
                id = "string"
              }
              networkSecurityGroup = {
                id = "string"
                location = "string"
                properties = {
                  flushConnection = bool
                  securityRules = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        access = "string"
                        description = "string"
                        destinationAddressPrefix = "string"
                        destinationAddressPrefixes = [
                          "string"
                        ]
                        destinationApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        destinationPortRange = "string"
                        destinationPortRanges = [
                          "string"
                        ]
                        direction = "string"
                        priority = int
                        protocol = "string"
                        sourceAddressPrefix = "string"
                        sourceAddressPrefixes = [
                          "string"
                        ]
                        sourceApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        sourcePortRange = "string"
                        sourcePortRanges = [
                          "string"
                        ]
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              privateEndpointNetworkPolicies = "string"
              privateLinkServiceNetworkPolicies = "string"
              routeTable = {
                id = "string"
                location = "string"
                properties = {
                  disableBgpRoutePropagation = bool
                  routes = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        addressPrefix = "string"
                        hasBgpOverride = bool
                        nextHopIpAddress = "string"
                        nextHopType = "string"
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              serviceEndpointPolicies = [
                {
                  id = "string"
                  location = "string"
                  properties = {
                    contextualServiceEndpointPolicies = [
                      "string"
                    ]
                    serviceAlias = "string"
                    serviceEndpointPolicyDefinitions = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          description = "string"
                          service = "string"
                          serviceResources = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
              ]
              serviceEndpoints = [
                {
                  locations = [
                    "string"
                  ]
                  service = "string"
                }
              ]
            }
            type = "string"
          }
        }
        zones = [
          "string"
        ]
      }
      destinationNetworkInterfaceIPConfiguration = {
        id = "string"
        name = "string"
        properties = {
          applicationGatewayBackendAddressPools = [
            {
              id = "string"
              name = "string"
              properties = {
                backendAddresses = [
                  {
                    fqdn = "string"
                    ipAddress = "string"
                  }
                ]
              }
            }
          ]
          applicationSecurityGroups = [
            {
              id = "string"
              location = "string"
              properties = {}
              tags = {}
            }
          ]
          gatewayLoadBalancer = {
            id = "string"
          }
          loadBalancerBackendAddressPools = [
            {
              id = "string"
              name = "string"
              properties = {
                drainPeriodInSeconds = int
                loadBalancerBackendAddresses = [
                  {
                    name = "string"
                    properties = {
                      adminState = "string"
                      ipAddress = "string"
                      loadBalancerFrontendIPConfiguration = {
                        id = "string"
                      }
                      subnet = {
                        id = "string"
                      }
                      virtualNetwork = {
                        id = "string"
                      }
                    }
                  }
                ]
                location = "string"
                syncMode = "string"
                tunnelInterfaces = [
                  {
                    identifier = int
                    port = int
                    protocol = "string"
                    type = "string"
                  }
                ]
                virtualNetwork = {
                  id = "string"
                }
              }
            }
          ]
          loadBalancerInboundNatRules = [
            {
              id = "string"
              name = "string"
              properties = {
                backendAddressPool = {
                  id = "string"
                }
                backendPort = int
                enableFloatingIP = bool
                enableTcpReset = bool
                frontendIPConfiguration = {
                  id = "string"
                }
                frontendPort = int
                frontendPortRangeEnd = int
                frontendPortRangeStart = int
                idleTimeoutInMinutes = int
                protocol = "string"
              }
            }
          ]
          primary = bool
          privateIPAddress = "string"
          privateIPAddressVersion = "string"
          privateIPAllocationMethod = "string"
          publicIPAddress = {
            extendedLocation = {
              name = "string"
              type = "EdgeZone"
            }
            id = "string"
            location = "string"
            properties = {
              ddosSettings = {
                ddosProtectionPlan = {
                  id = "string"
                }
                protectionMode = "string"
              }
              deleteOption = "string"
              dnsSettings = {
                domainNameLabel = "string"
                domainNameLabelScope = "string"
                fqdn = "string"
                reverseFqdn = "string"
              }
              idleTimeoutInMinutes = int
              ipAddress = "string"
              ipTags = [
                {
                  ipTagType = "string"
                  tag = "string"
                }
              ]
              linkedPublicIPAddress = {
                public-ip-address-object
              }
              migrationPhase = "string"
              natGateway = {
                id = "string"
                location = "string"
                properties = {
                  idleTimeoutInMinutes = int
                  publicIpAddresses = [
                    {
                      id = "string"
                    }
                  ]
                  publicIpPrefixes = [
                    {
                      id = "string"
                    }
                  ]
                }
                sku = {
                  name = "Standard"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              publicIPAddressVersion = "string"
              publicIPAllocationMethod = "string"
              publicIPPrefix = {
                id = "string"
              }
              servicePublicIPAddress = {
                public-ip-address-object
              }
            }
            sku = {
              name = "string"
              tier = "string"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          subnet = {
            id = "string"
            name = "string"
            properties = {
              addressPrefix = "string"
              addressPrefixes = [
                "string"
              ]
              applicationGatewayIPConfigurations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              delegations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    serviceName = "string"
                  }
                  type = "string"
                }
              ]
              ipAllocations = [
                {
                  id = "string"
                }
              ]
              natGateway = {
                id = "string"
              }
              networkSecurityGroup = {
                id = "string"
                location = "string"
                properties = {
                  flushConnection = bool
                  securityRules = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        access = "string"
                        description = "string"
                        destinationAddressPrefix = "string"
                        destinationAddressPrefixes = [
                          "string"
                        ]
                        destinationApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        destinationPortRange = "string"
                        destinationPortRanges = [
                          "string"
                        ]
                        direction = "string"
                        priority = int
                        protocol = "string"
                        sourceAddressPrefix = "string"
                        sourceAddressPrefixes = [
                          "string"
                        ]
                        sourceApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        sourcePortRange = "string"
                        sourcePortRanges = [
                          "string"
                        ]
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              privateEndpointNetworkPolicies = "string"
              privateLinkServiceNetworkPolicies = "string"
              routeTable = {
                id = "string"
                location = "string"
                properties = {
                  disableBgpRoutePropagation = bool
                  routes = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        addressPrefix = "string"
                        hasBgpOverride = bool
                        nextHopIpAddress = "string"
                        nextHopType = "string"
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              serviceEndpointPolicies = [
                {
                  id = "string"
                  location = "string"
                  properties = {
                    contextualServiceEndpointPolicies = [
                      "string"
                    ]
                    serviceAlias = "string"
                    serviceEndpointPolicyDefinitions = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          description = "string"
                          service = "string"
                          serviceResources = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
              ]
              serviceEndpoints = [
                {
                  locations = [
                    "string"
                  ]
                  service = "string"
                }
              ]
            }
            type = "string"
          }
          virtualNetworkTaps = [
            {
              id = "string"
              location = "string"
              properties = {
              tags = {}
            }
          ]
        }
        type = "string"
      }
      destinationPort = int
    }
  })
}

```

### virtualNetworkTaps

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Virtual Network Tap Properties. | VirtualNetworkTapPropertiesFormat |


### VirtualNetworkTapPropertiesFormat

| Name | Description | Value |
|-|-|-|
| destinationLoadBalancerFrontEndIPConfiguration | The reference to the private IP address on the internal Load Balancer that will receive the tap. | FrontendIPConfiguration |
| destinationNetworkInterfaceIPConfiguration | The reference to the private IP Address of the collector nic that will receive the tap. | NetworkInterfaceIPConfiguration |
| destinationPort | The VXLAN destination port that will receive the tapped traffic. | int |


### FrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of the load balancer probe. | FrontendIPConfigurationPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### FrontendIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the Public IP resource. | PublicIPAddress |
| publicIPPrefix | The reference to the Public IP Prefix resource. | SubResource |
| subnet | The reference to the subnet resource. | Subnet |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | SubnetPropertiesFormat |
| type | Resource type. | string |


### SubnetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The address prefix for the subnet. | string |
| addressPrefixes | List of address prefixes for the subnet. | string[] |
| applicationGatewayIPConfigurations | Application gateway IP configurations of virtual network resource. | ApplicationGatewayIPConfiguration[] |
| delegations | An array of references to the delegations on the subnet. | Delegation[] |
| ipAllocations | Array of IpAllocation which reference this subnet. | SubResource[] |
| natGateway | Nat gateway associated with this subnet. | SubResource |
| networkSecurityGroup | The reference to the NetworkSecurityGroup resource. | NetworkSecurityGroup |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'Disabled''Enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'Disabled''Enabled' |
| routeTable | The reference to the RouteTable resource. | RouteTable |
| serviceEndpointPolicies | An array of service endpoint policies. | ServiceEndpointPolicy[] |
| serviceEndpoints | An array of service endpoints. | ServiceEndpointPropertiesFormat[] |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### Delegation

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a subnet. This name can be used to access the resource. | string |
| properties | Properties of the subnet. | ServiceDelegationPropertiesFormat |
| type | Resource type. | string |


### ServiceDelegationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| serviceName | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | string |


### NetworkSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the network security group. | NetworkSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### NetworkSecurityGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| flushConnection | When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation. | bool |
| securityRules | A collection of security rules of the network security group. | SecurityRule[] |


### SecurityRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the security rule. | SecurityRulePropertiesFormat |
| type | The type of the resource. | string |


### SecurityRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'Allow''Deny' (required) |
| description | A description for this rule. Restricted to 140 chars. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationApplicationSecurityGroups | The application security group specified as destination. | ApplicationSecurityGroup[] |
| destinationPortRange | The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. | 'Inbound''Outbound' (required) |
| priority | The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | '*''Ah''Esp''Icmp''Tcp''Udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourceApplicationSecurityGroups | The application security group specified as source. | ApplicationSecurityGroup[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ApplicationSecurityGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the application security group. | ApplicationSecurityGroupPropertiesFormat |
| tags | Resource tags. | object |


### RouteTable

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the route table. | RouteTablePropertiesFormat |
| tags | Resource tags. | object |


### RouteTablePropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableBgpRoutePropagation | Whether to disable the routes learned by BGP on that route table. True means disable. | bool |
| routes | Collection of routes contained within a route table. | Route[] |


### Route

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route. | RoutePropertiesFormat |
| type | The type of the resource. | string |


### RoutePropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | The destination CIDR to which the route applies. | string |
| hasBgpOverride | A value indicating whether this route overrides overlapping BGP routes regardless of LPM. | bool |
| nextHopIpAddress | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
| nextHopType | The type of Azure hop the packet should be sent to. | 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal' (required) |


### ServiceEndpointPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Properties of the service end point policy. | ServiceEndpointPolicyPropertiesFormat |
| tags | Resource tags. | object |


### ServiceEndpointPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| contextualServiceEndpointPolicies | A collection of contextual service endpoint policy. | string[] |
| serviceAlias | The alias indicating if the policy belongs to a service | string |
| serviceEndpointPolicyDefinitions | A collection of service endpoint policy definitions of the service endpoint policy. | ServiceEndpointPolicyDefinition[] |


### ServiceEndpointPolicyDefinition

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |
| type | The type of the resource. | string |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


### ServiceEndpointPropertiesFormat

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string |


### NetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Network interface IP configuration properties. | NetworkInterfaceIPConfigurationPropertiesFormat |
| type | Resource type. | string |


### NetworkInterfaceIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | The reference to ApplicationGatewayBackendAddressPool resource. | ApplicationGatewayBackendAddressPool[] |
| applicationSecurityGroups | Application security groups in which the IP configuration is included. | ApplicationSecurityGroup[] |
| gatewayLoadBalancer | The reference to gateway load balancer frontend IP. | SubResource |
| loadBalancerBackendAddressPools | The reference to LoadBalancerBackendAddressPool resource. | BackendAddressPool[] |
| loadBalancerInboundNatRules | A list of references of LoadBalancerInboundNatRules. | InboundNatRule[] |
| primary | Whether this is a primary customer address on the network interface. | bool |
| privateIPAddress | Private IP address of the IP configuration. | string |
| privateIPAddressVersion | Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | Public IP address bound to the IP configuration. | PublicIPAddress |
| subnet | Subnet bound to the IP configuration. | Subnet |
| virtualNetworkTaps | The reference to Virtual Network Taps. | VirtualNetworkTap[] |


### ApplicationGatewayBackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend address pool that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend address pool. | ApplicationGatewayBackendAddressPoolPropertiesFormat |


### ApplicationGatewayBackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddresses | Backend addresses. | ApplicationGatewayBackendAddress[] |


### ApplicationGatewayBackendAddress

| Name | Description | Value |
|-|-|-|
| fqdn | Fully qualified domain name (FQDN). | string |
| ipAddress | IP address. | string |


### BackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer backend address pool. | BackendAddressPoolPropertiesFormat |


### BackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| drainPeriodInSeconds | Amount of seconds Load Balancer waits for before sending RESET to client and backend address. | int |
| loadBalancerBackendAddresses | An array of backend addresses. | LoadBalancerBackendAddress[] |
| location | The location of the backend address pool. | string |
| syncMode | Backend address synchronous mode for the backend pool | 'Automatic''Manual' |
| tunnelInterfaces | An array of gateway load balancer tunnel interfaces. | GatewayLoadBalancerTunnelInterface[] |
| virtualNetwork | A reference to a virtual network. | SubResource |


### LoadBalancerBackendAddress

| Name | Description | Value |
|-|-|-|
| name | Name of the backend address. | string |
| properties | Properties of load balancer backend address pool. | LoadBalancerBackendAddressPropertiesFormat |


### LoadBalancerBackendAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections. | 'Down''None''Up' |
| ipAddress | IP Address belonging to the referenced virtual network. | string |
| loadBalancerFrontendIPConfiguration | Reference to the frontend ip address configuration defined in regional loadbalancer. | SubResource |
| subnet | Reference to an existing subnet. | SubResource |
| virtualNetwork | Reference to an existing virtual network. | SubResource |


### GatewayLoadBalancerTunnelInterface

| Name | Description | Value |
|-|-|-|
| identifier | Identifier of gateway load balancer tunnel interface. | int |
| port | Port of gateway load balancer tunnel interface. | int |
| protocol | Protocol of gateway load balancer tunnel interface. | 'Native''None''VXLAN' |
| type | Traffic type of gateway load balancer tunnel interface. | 'External''Internal''None' |


### InboundNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource. | string |
| properties | Properties of load balancer inbound NAT rule. | InboundNatRulePropertiesFormat |


### InboundNatRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to backendAddressPool resource. | SubResource |
| backendPort | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | int |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeEnd | The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeStart | The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' |


### VirtualNetworkTap

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Virtual Network Tap Properties. | VirtualNetworkTapPropertiesFormat |
| tags | Resource tags. | object |
## Microsoft.Network/virtualRouters@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualRouters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hostedGateway = {
        id = "string"
      }
      hostedSubnet = {
        id = "string"
      }
      virtualRouterAsn = int
      virtualRouterIps = [
        "string"
      ]
    }
  })
}

```

### virtualRouters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Virtual Router. | VirtualRouterPropertiesFormat |


### VirtualRouterPropertiesFormat

| Name | Description | Value |
|-|-|-|
| hostedGateway | The Gateway on which VirtualRouter is hosted. | SubResource |
| hostedSubnet | The Subnet on which VirtualRouter is hosted. | SubResource |
| virtualRouterAsn | VirtualRouter ASN. | int |
| virtualRouterIps | VirtualRouter IPs. | string[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Network/virtualRouters/peerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualRouters/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      peerAsn = int
      peerIp = "string"
    }
  })
}

```

### virtualRouters/peerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualRouters |
| properties | The properties of the Virtual Router Peering. | VirtualRouterPeeringProperties |


### VirtualRouterPeeringProperties

| Name | Description | Value |
|-|-|-|
| peerAsn | Peer ASN. | int |
| peerIp | Peer IP. | string |
## Microsoft.Network/virtualWans@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualWans@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowBranchToBranchTraffic = bool
      allowVnetToVnetTraffic = bool
      disableVpnEncryption = bool
      type = "string"
    }
  })
}

```

### virtualWans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the virtual WAN. | VirtualWanProperties |


### VirtualWanProperties

| Name | Description | Value |
|-|-|-|
| allowBranchToBranchTraffic | True if branch to branch traffic is allowed. | bool |
| allowVnetToVnetTraffic | True if Vnet to Vnet traffic is allowed. | bool |
| disableVpnEncryption | Vpn encryption to be disabled or not. | bool |
| type | The type of the VirtualWAN. | string |
## Microsoft.Network/vpnGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      connections = [
        {
          id = "string"
          name = "string"
          properties = {
            connectionBandwidth = int
            dpdTimeoutSeconds = int
            enableBgp = bool
            enableInternetSecurity = bool
            enableRateLimiting = bool
            ipsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            remoteVpnSite = {
              id = "string"
            }
            routingConfiguration = {
              associatedRouteTable = {
                id = "string"
              }
              inboundRouteMap = {
                id = "string"
              }
              outboundRouteMap = {
                id = "string"
              }
              propagatedRouteTables = {
                ids = [
                  {
                    id = "string"
                  }
                ]
                labels = [
                  "string"
                ]
              }
              vnetRoutes = {
                staticRoutes = [
                  {
                    addressPrefixes = [
                      "string"
                    ]
                    name = "string"
                    nextHopIpAddress = "string"
                  }
                ]
                staticRoutesConfig = {
                  vnetLocalRouteOverrideCriteria = "string"
                }
              }
            }
            routingWeight = int
            sharedKey = "string"
            trafficSelectorPolicies = [
              {
                localAddressRanges = [
                  "string"
                ]
                remoteAddressRanges = [
                  "string"
                ]
              }
            ]
            useLocalAzureIpAddress = bool
            usePolicyBasedTrafficSelectors = bool
            vpnConnectionProtocolType = "string"
            vpnLinkConnections = [
              {
                id = "string"
                name = "string"
                properties = {
                  connectionBandwidth = int
                  egressNatRules = [
                    {
                      id = "string"
                    }
                  ]
                  enableBgp = bool
                  enableRateLimiting = bool
                  ingressNatRules = [
                    {
                      id = "string"
                    }
                  ]
                  ipsecPolicies = [
                    {
                      dhGroup = "string"
                      ikeEncryption = "string"
                      ikeIntegrity = "string"
                      ipsecEncryption = "string"
                      ipsecIntegrity = "string"
                      pfsGroup = "string"
                      saDataSizeKilobytes = int
                      saLifeTimeSeconds = int
                    }
                  ]
                  routingWeight = int
                  sharedKey = "string"
                  useLocalAzureIpAddress = bool
                  usePolicyBasedTrafficSelectors = bool
                  vpnConnectionProtocolType = "string"
                  vpnGatewayCustomBgpAddresses = [
                    {
                      customBgpIpAddress = "string"
                      ipConfigurationId = "string"
                    }
                  ]
                  vpnLinkConnectionMode = "string"
                  vpnSiteLink = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      enableBgpRouteTranslationForNat = bool
      isRoutingPreferenceInternet = bool
      natRules = [
        {
          id = "string"
          name = "string"
          properties = {
            externalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            internalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            ipConfigurationId = "string"
            mode = "string"
            type = "string"
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
      vpnGatewayScaleUnit = int
    }
  })
}

```

### vpnGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the VPN gateway. | VpnGatewayProperties |


### VpnGatewayProperties

| Name | Description | Value |
|-|-|-|
| bgpSettings | Local network gateway's BGP speaker settings. | BgpSettings |
| connections | List of all vpn connections to the gateway. | VpnConnection[] |
| enableBgpRouteTranslationForNat | Enable BGP routes translation for NAT on this VpnGateway. | bool |
| isRoutingPreferenceInternet | Enable Routing Preference property for the Public IP Interface of the VpnGateway. | bool |
| natRules | List of all the nat Rules associated with the gateway. | VpnGatewayNatRule[] |
| virtualHub | The VirtualHub to which the gateway belongs. | SubResource |
| vpnGatewayScaleUnit | The scale unit for this vpn gateway. | int |


### BgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |
| bgpPeeringAddresses | BGP peering address with IP configuration ID for virtual network gateway. | IPConfigurationBgpPeeringAddress[] |
| peerWeight | The weight added to routes learned from this BGP speaker. | int |


### IPConfigurationBgpPeeringAddress

| Name | Description | Value |
|-|-|-|
| customBgpIpAddresses | The list of custom BGP peering addresses which belong to IP configuration. | string[] |
| ipconfigurationId | The ID of IP configuration which belongs to gateway. | string |


### VpnConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN connection. | VpnConnectionProperties |


### VpnConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionBandwidth | Expected bandwidth in MBPS. | int |
| dpdTimeoutSeconds | DPD timeout in seconds for vpn connection. | int |
| enableBgp | EnableBgp flag. | bool |
| enableInternetSecurity | Enable internet security. | bool |
| enableRateLimiting | EnableBgp flag. | bool |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| remoteVpnSite | Id of the connected vpn site. | SubResource |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| routingWeight | Routing weight for vpn connection. | int |
| sharedKey | SharedKey for the vpn connection. | string |
| trafficSelectorPolicies | The Traffic Selector Policies to be considered by this connection. | TrafficSelectorPolicy[] |
| useLocalAzureIpAddress | Use local azure ip to initiate connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| vpnConnectionProtocolType | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| vpnLinkConnections | List of all vpn site link connections to the gateway. | VpnSiteLinkConnection[] |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |


### TrafficSelectorPolicy

| Name | Description | Value |
|-|-|-|
| localAddressRanges | A collection of local address spaces in CIDR format. | string[] (required) |
| remoteAddressRanges | A collection of remote address spaces in CIDR format. | string[] (required) |


### VpnSiteLinkConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN site link connection. | VpnSiteLinkConnectionProperties |


### VpnSiteLinkConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionBandwidth | Expected bandwidth in MBPS. | int |
| egressNatRules | List of egress NatRules. | SubResource[] |
| enableBgp | EnableBgp flag. | bool |
| enableRateLimiting | EnableBgp flag. | bool |
| ingressNatRules | List of ingress NatRules. | SubResource[] |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| routingWeight | Routing weight for vpn connection. | int |
| sharedKey | SharedKey for the vpn connection. | string |
| useLocalAzureIpAddress | Use local azure ip to initiate connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| vpnConnectionProtocolType | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| vpnGatewayCustomBgpAddresses | vpnGatewayCustomBgpAddresses used by this connection. | GatewayCustomBgpIpAddressIpConfiguration[] |
| vpnLinkConnectionMode | Vpn link connection mode. | 'Default''InitiatorOnly''ResponderOnly' |
| vpnSiteLink | Id of the connected vpn site link. | SubResource |


### GatewayCustomBgpIpAddressIpConfiguration

| Name | Description | Value |
|-|-|-|
| customBgpIpAddress | The custom BgpPeeringAddress which belongs to IpconfigurationId. | string (required) |
| ipConfigurationId | The IpconfigurationId of ipconfiguration which belongs to gateway. | string (required) |


### VpnGatewayNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VpnGateway NAT rule. | VpnGatewayNatRuleProperties |


### VpnGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |
## Microsoft.Network/vpnGateways/natRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways/natRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      externalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      internalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      ipConfigurationId = "string"
      mode = "string"
      type = "string"
    }
  })
}

```

### vpnGateways/natRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vpnGateways |
| properties | Properties of the VpnGateway NAT rule. | VpnGatewayNatRuleProperties |


### VpnGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |
## Microsoft.Network/vpnGateways/vpnConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways/vpnConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionBandwidth = int
      dpdTimeoutSeconds = int
      enableBgp = bool
      enableInternetSecurity = bool
      enableRateLimiting = bool
      ipsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      remoteVpnSite = {
        id = "string"
      }
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
      routingWeight = int
      sharedKey = "string"
      trafficSelectorPolicies = [
        {
          localAddressRanges = [
            "string"
          ]
          remoteAddressRanges = [
            "string"
          ]
        }
      ]
      useLocalAzureIpAddress = bool
      usePolicyBasedTrafficSelectors = bool
      vpnConnectionProtocolType = "string"
      vpnLinkConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            connectionBandwidth = int
            egressNatRules = [
              {
                id = "string"
              }
            ]
            enableBgp = bool
            enableRateLimiting = bool
            ingressNatRules = [
              {
                id = "string"
              }
            ]
            ipsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            routingWeight = int
            sharedKey = "string"
            useLocalAzureIpAddress = bool
            usePolicyBasedTrafficSelectors = bool
            vpnConnectionProtocolType = "string"
            vpnGatewayCustomBgpAddresses = [
              {
                customBgpIpAddress = "string"
                ipConfigurationId = "string"
              }
            ]
            vpnLinkConnectionMode = "string"
            vpnSiteLink = {
              id = "string"
            }
          }
        }
      ]
    }
  })
}

```

### vpnGateways/vpnConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vpnGateways |
| properties | Properties of the VPN connection. | VpnConnectionProperties |


### VpnConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionBandwidth | Expected bandwidth in MBPS. | int |
| dpdTimeoutSeconds | DPD timeout in seconds for vpn connection. | int |
| enableBgp | EnableBgp flag. | bool |
| enableInternetSecurity | Enable internet security. | bool |
| enableRateLimiting | EnableBgp flag. | bool |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| remoteVpnSite | Id of the connected vpn site. | SubResource |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| routingWeight | Routing weight for vpn connection. | int |
| sharedKey | SharedKey for the vpn connection. | string |
| trafficSelectorPolicies | The Traffic Selector Policies to be considered by this connection. | TrafficSelectorPolicy[] |
| useLocalAzureIpAddress | Use local azure ip to initiate connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| vpnConnectionProtocolType | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| vpnLinkConnections | List of all vpn site link connections to the gateway. | VpnSiteLinkConnection[] |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |


### TrafficSelectorPolicy

| Name | Description | Value |
|-|-|-|
| localAddressRanges | A collection of local address spaces in CIDR format. | string[] (required) |
| remoteAddressRanges | A collection of remote address spaces in CIDR format. | string[] (required) |


### VpnSiteLinkConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN site link connection. | VpnSiteLinkConnectionProperties |


### VpnSiteLinkConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionBandwidth | Expected bandwidth in MBPS. | int |
| egressNatRules | List of egress NatRules. | SubResource[] |
| enableBgp | EnableBgp flag. | bool |
| enableRateLimiting | EnableBgp flag. | bool |
| ingressNatRules | List of ingress NatRules. | SubResource[] |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| routingWeight | Routing weight for vpn connection. | int |
| sharedKey | SharedKey for the vpn connection. | string |
| useLocalAzureIpAddress | Use local azure ip to initiate connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| vpnConnectionProtocolType | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| vpnGatewayCustomBgpAddresses | vpnGatewayCustomBgpAddresses used by this connection. | GatewayCustomBgpIpAddressIpConfiguration[] |
| vpnLinkConnectionMode | Vpn link connection mode. | 'Default''InitiatorOnly''ResponderOnly' |
| vpnSiteLink | Id of the connected vpn site link. | SubResource |


### GatewayCustomBgpIpAddressIpConfiguration

| Name | Description | Value |
|-|-|-|
| customBgpIpAddress | The custom BgpPeeringAddress which belongs to IpconfigurationId. | string (required) |
| ipConfigurationId | The IpconfigurationId of ipconfiguration which belongs to gateway. | string (required) |
## Microsoft.Network/vpnServerConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnServerConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aadAuthenticationParameters = {
        aadAudience = "string"
        aadIssuer = "string"
        aadTenant = "string"
      }
      configurationPolicyGroups = [
        {
          id = "string"
          name = "string"
          properties = {
            isDefault = bool
            policyMembers = [
              {
                attributeType = "string"
                attributeValue = "string"
                name = "string"
              }
            ]
            priority = int
          }
        }
      ]
      name = "string"
      radiusClientRootCertificates = [
        {
          name = "string"
          thumbprint = "string"
        }
      ]
      radiusServerAddress = "string"
      radiusServerRootCertificates = [
        {
          name = "string"
          publicCertData = "string"
        }
      ]
      radiusServers = [
        {
          radiusServerAddress = "string"
          radiusServerScore = int
          radiusServerSecret = "string"
        }
      ]
      radiusServerSecret = "string"
      vpnAuthenticationTypes = [
        "string"
      ]
      vpnClientIpsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      vpnClientRevokedCertificates = [
        {
          name = "string"
          thumbprint = "string"
        }
      ]
      vpnClientRootCertificates = [
        {
          name = "string"
          publicCertData = "string"
        }
      ]
      vpnProtocols = [
        "string"
      ]
    }
  })
}

```

### vpnServerConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the P2SVpnServer configuration. | VpnServerConfigurationProperties |


### VpnServerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| aadAuthenticationParameters | The set of aad vpn authentication parameters. | AadAuthenticationParameters |
| configurationPolicyGroups | List of all VpnServerConfigurationPolicyGroups. | VpnServerConfigurationPolicyGroup[] |
| name | The name of the VpnServerConfiguration that is unique within a resource group. | string |
| radiusClientRootCertificates | Radius client root certificate of VpnServerConfiguration. | VpnServerConfigRadiusClientRootCertificate[] |
| radiusServerAddress | The radius server address property of the VpnServerConfiguration resource for point to site client connection. | string |
| radiusServerRootCertificates | Radius Server root certificate of VpnServerConfiguration. | VpnServerConfigRadiusServerRootCertificate[] |
| radiusServers | Multiple Radius Server configuration for VpnServerConfiguration. | RadiusServer[] |
| radiusServerSecret | The radius secret property of the VpnServerConfiguration resource for point to site client connection. | string |
| vpnAuthenticationTypes | VPN authentication types for the VpnServerConfiguration. | String array containing any of:'AAD''Certificate''Radius' |
| vpnClientIpsecPolicies | VpnClientIpsecPolicies for VpnServerConfiguration. | IpsecPolicy[] |
| vpnClientRevokedCertificates | VPN client revoked certificate of VpnServerConfiguration. | VpnServerConfigVpnClientRevokedCertificate[] |
| vpnClientRootCertificates | VPN client root certificate of VpnServerConfiguration. | VpnServerConfigVpnClientRootCertificate[] |
| vpnProtocols | VPN protocols for the VpnServerConfiguration. | String array containing any of:'IkeV2''OpenVPN' |


### AadAuthenticationParameters

| Name | Description | Value |
|-|-|-|
| aadAudience | AAD Vpn authentication parameter AAD audience. | string |
| aadIssuer | AAD Vpn authentication parameter AAD issuer. | string |
| aadTenant | AAD Vpn authentication parameter AAD tenant. | string |


### VpnServerConfigurationPolicyGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupProperties |


### VpnServerConfigurationPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VpnServerConfigurationPolicyGroup or not. | bool |
| policyMembers | Multiple PolicyMembers for VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupMember[] |
| priority | Priority for VpnServerConfigurationPolicyGroup. | int |


### VpnServerConfigurationPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VpnServerConfigurationPolicyGroupMember. | string |
| name | Name of the VpnServerConfigurationPolicyGroupMember. | string |


### VpnServerConfigRadiusClientRootCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| thumbprint | The Radius client root certificate thumbprint. | string |


### VpnServerConfigRadiusServerRootCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| publicCertData | The certificate public data. | string |


### RadiusServer

| Name | Description | Value |
|-|-|-|
| radiusServerAddress | The address of this radius server. | string (required) |
| radiusServerScore | The initial score assigned to this radius server. | int |
| radiusServerSecret | The secret used for this radius server. | string |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### VpnServerConfigVpnClientRevokedCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| thumbprint | The revoked VPN client certificate thumbprint. | string |


### VpnServerConfigVpnClientRootCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| publicCertData | The certificate public data. | string |
## Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isDefault = bool
      policyMembers = [
        {
          attributeType = "string"
          attributeValue = "string"
          name = "string"
        }
      ]
      priority = int
    }
  })
}

```

### vpnServerConfigurations/configurationPolicyGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vpnServerConfigurations |
| properties | Properties of the VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupProperties |


### VpnServerConfigurationPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VpnServerConfigurationPolicyGroup or not. | bool |
| policyMembers | Multiple PolicyMembers for VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupMember[] |
| priority | Priority for VpnServerConfigurationPolicyGroup. | int |


### VpnServerConfigurationPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VpnServerConfigurationPolicyGroupMember. | string |
| name | Name of the VpnServerConfigurationPolicyGroupMember. | string |
## Microsoft.Network/vpnSites@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnSites@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      bgpProperties = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      deviceProperties = {
        deviceModel = "string"
        deviceVendor = "string"
        linkSpeedInMbps = int
      }
      ipAddress = "string"
      isSecuritySite = bool
      o365Policy = {
        breakOutCategories = {
          allow = bool
          default = bool
          optimize = bool
        }
      }
      siteKey = "string"
      virtualWan = {
        id = "string"
      }
      vpnSiteLinks = [
        {
          id = "string"
          name = "string"
          properties = {
            bgpProperties = {
              asn = int
              bgpPeeringAddress = "string"
            }
            fqdn = "string"
            ipAddress = "string"
            linkProperties = {
              linkProviderName = "string"
              linkSpeedInMbps = int
            }
          }
        }
      ]
    }
  })
}

```

### vpnSites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the VPN site. | VpnSiteProperties |


### VpnSiteProperties

| Name | Description | Value |
|-|-|-|
| addressSpace | The AddressSpace that contains an array of IP address ranges. | AddressSpace |
| bgpProperties | The set of bgp properties. | BgpSettings |
| deviceProperties | The device properties. | DeviceProperties |
| ipAddress | The ip-address for the vpn-site. | string |
| isSecuritySite | IsSecuritySite flag. | bool |
| o365Policy | Office365 Policy. | O365PolicyProperties |
| siteKey | The key for vpn-site that can be used for connections. | string |
| virtualWan | The VirtualWAN to which the vpnSite belongs. | SubResource |
| vpnSiteLinks | List of all vpn site links. | VpnSiteLink[] |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### BgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |
| bgpPeeringAddresses | BGP peering address with IP configuration ID for virtual network gateway. | IPConfigurationBgpPeeringAddress[] |
| peerWeight | The weight added to routes learned from this BGP speaker. | int |


### IPConfigurationBgpPeeringAddress

| Name | Description | Value |
|-|-|-|
| customBgpIpAddresses | The list of custom BGP peering addresses which belong to IP configuration. | string[] |
| ipconfigurationId | The ID of IP configuration which belongs to gateway. | string |


### DeviceProperties

| Name | Description | Value |
|-|-|-|
| deviceModel | Model of the device. | string |
| deviceVendor | Name of the device Vendor. | string |
| linkSpeedInMbps | Link speed. | int |


### O365PolicyProperties

| Name | Description | Value |
|-|-|-|
| breakOutCategories | Office365 breakout categories. | O365BreakOutCategoryPolicies |


### O365BreakOutCategoryPolicies

| Name | Description | Value |
|-|-|-|
| allow | Flag to control allow category. | bool |
| default | Flag to control default category. | bool |
| optimize | Flag to control optimize category. | bool |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### VpnSiteLink

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN site link. | VpnSiteLinkProperties |


### VpnSiteLinkProperties

| Name | Description | Value |
|-|-|-|
| bgpProperties | The set of bgp properties. | VpnLinkBgpSettings |
| fqdn | FQDN of vpn-site-link. | string |
| ipAddress | The ip-address for the vpn-site-link. | string |
| linkProperties | The link provider properties. | VpnLinkProviderProperties |


### VpnLinkBgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |


### VpnLinkProviderProperties

| Name | Description | Value |
|-|-|-|
| linkProviderName | Name of the link provider. | string |
| linkSpeedInMbps | Link speed. | int |
## Microsoft.Network/trafficmanagerprofiles@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles@2022-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowedEndpointRecordTypes = [
        "string"
      ]
      dnsConfig = {
        relativeName = "string"
        ttl = int
      }
      endpoints = [
        {
          id = "string"
          name = "string"
          properties = {
            alwaysServe = "string"
            customHeaders = [
              {
                name = "string"
                value = "string"
              }
            ]
            endpointLocation = "string"
            endpointMonitorStatus = "string"
            endpointStatus = "string"
            geoMapping = [
              "string"
            ]
            minChildEndpoints = int
            minChildEndpointsIPv4 = int
            minChildEndpointsIPv6 = int
            priority = int
            subnets = [
              {
                first = "string"
                last = "string"
                scope = int
              }
            ]
            target = "string"
            targetResourceId = "string"
            weight = int
          }
          type = "string"
        }
      ]
      maxReturn = int
      monitorConfig = {
        customHeaders = [
          {
            name = "string"
            value = "string"
          }
        ]
        expectedStatusCodeRanges = [
          {
            max = int
            min = int
          }
        ]
        intervalInSeconds = int
        path = "string"
        port = int
        profileMonitorStatus = "string"
        protocol = "string"
        timeoutInSeconds = int
        toleratedNumberOfFailures = int
      }
      profileStatus = "string"
      trafficRoutingMethod = "string"
      trafficViewEnrollmentStatus = "string"
    }
  })
}

```

### trafficmanagerprofiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Alphanumerics, hyphens, and periods.Start and end with alphanumeric.Resource name must be unique across Azure. |
| location | The Azure Region where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the Traffic Manager profile. | ProfileProperties |


### ProfileProperties

| Name | Description | Value |
|-|-|-|
| allowedEndpointRecordTypes | The list of allowed endpoint record types. | String array containing any of:'Any''DomainName''IPv4Address''IPv6Address' |
| dnsConfig | The DNS settings of the Traffic Manager profile. | DnsConfig |
| endpoints | The list of endpoints in the Traffic Manager profile. | Endpoint[] |
| maxReturn | Maximum number of endpoints to be returned for MultiValue routing type. | int |
| monitorConfig | The endpoint monitoring settings of the Traffic Manager profile. | MonitorConfig |
| profileStatus | The status of the Traffic Manager profile. | 'Disabled''Enabled' |
| trafficRoutingMethod | The traffic routing method of the Traffic Manager profile. | 'Geographic''MultiValue''Performance''Priority''Subnet''Weighted' |
| trafficViewEnrollmentStatus | Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile. | 'Disabled''Enabled' |


### DnsConfig

| Name | Description | Value |
|-|-|-|
| relativeName | The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile. | string |
| ttl | The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile. | int |


### Endpoint

| Name | Description | Value |
|-|-|-|
| id | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} | string |
| name | The name of the resource | string |
| properties | The properties of the Traffic Manager endpoint. | EndpointProperties |
| type | The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. | string |


### EndpointProperties

| Name | Description | Value |
|-|-|-|
| alwaysServe | If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method. | 'Disabled''Enabled' |
| customHeaders | List of custom headers. | EndpointPropertiesCustomHeadersItem[] |
| endpointLocation | Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. | string |
| endpointMonitorStatus | The monitoring status of the endpoint. | 'CheckingEndpoint''Degraded''Disabled''Inactive''Online''Stopped''Unmonitored' |
| endpointStatus | The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. | 'Disabled''Enabled' |
| geoMapping | The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. | string[] |
| minChildEndpoints | The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv4 | The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv6 | The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| priority | The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value. | int |
| subnets | The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints. | EndpointPropertiesSubnetsItem[] |
| target | The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. | string |
| targetResourceId | The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. | string |
| weight | The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000. | int |


### EndpointPropertiesCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### EndpointPropertiesSubnetsItem

| Name | Description | Value |
|-|-|-|
| first | First address in the subnet. | string |
| last | Last address in the subnet. | string |
| scope | Block size (number of leading bits in the subnet mask). | int |


### MonitorConfig

| Name | Description | Value |
|-|-|-|
| customHeaders | List of custom headers. | MonitorConfigCustomHeadersItem[] |
| expectedStatusCodeRanges | List of expected status code ranges. | MonitorConfigExpectedStatusCodeRangesItem[] |
| intervalInSeconds | The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile. | int |
| path | The path relative to the endpoint domain name used to probe for endpoint health. | string |
| port | The TCP port used to probe for endpoint health. | int |
| profileMonitorStatus | The profile-level monitoring status of the Traffic Manager profile. | 'CheckingEndpoints''Degraded''Disabled''Inactive''Online' |
| protocol | The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health. | 'HTTP''HTTPS''TCP' |
| timeoutInSeconds | The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check. | int |
| toleratedNumberOfFailures | The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check. | int |


### MonitorConfigCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### MonitorConfigExpectedStatusCodeRangesItem

| Name | Description | Value |
|-|-|-|
| max | Max status code. | int |
| min | Min status code. | int |
## Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

### trafficmanagerprofiles/AzureEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:trafficmanagerprofiles |
| properties | The properties of the Traffic Manager endpoint. | EndpointProperties |


### EndpointProperties

| Name | Description | Value |
|-|-|-|
| alwaysServe | If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method. | 'Disabled''Enabled' |
| customHeaders | List of custom headers. | EndpointPropertiesCustomHeadersItem[] |
| endpointLocation | Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. | string |
| endpointMonitorStatus | The monitoring status of the endpoint. | 'CheckingEndpoint''Degraded''Disabled''Inactive''Online''Stopped''Unmonitored' |
| endpointStatus | The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. | 'Disabled''Enabled' |
| geoMapping | The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. | string[] |
| minChildEndpoints | The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv4 | The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv6 | The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| priority | The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value. | int |
| subnets | The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints. | EndpointPropertiesSubnetsItem[] |
| target | The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. | string |
| targetResourceId | The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. | string |
| weight | The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000. | int |


### EndpointPropertiesCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### EndpointPropertiesSubnetsItem

| Name | Description | Value |
|-|-|-|
| first | First address in the subnet. | string |
| last | Last address in the subnet. | string |
| scope | Block size (number of leading bits in the subnet mask). | int |
## Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

### trafficmanagerprofiles/ExternalEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:trafficmanagerprofiles |
| properties | The properties of the Traffic Manager endpoint. | EndpointProperties |


### EndpointProperties

| Name | Description | Value |
|-|-|-|
| alwaysServe | If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method. | 'Disabled''Enabled' |
| customHeaders | List of custom headers. | EndpointPropertiesCustomHeadersItem[] |
| endpointLocation | Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. | string |
| endpointMonitorStatus | The monitoring status of the endpoint. | 'CheckingEndpoint''Degraded''Disabled''Inactive''Online''Stopped''Unmonitored' |
| endpointStatus | The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. | 'Disabled''Enabled' |
| geoMapping | The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. | string[] |
| minChildEndpoints | The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv4 | The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv6 | The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| priority | The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value. | int |
| subnets | The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints. | EndpointPropertiesSubnetsItem[] |
| target | The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. | string |
| targetResourceId | The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. | string |
| weight | The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000. | int |


### EndpointPropertiesCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### EndpointPropertiesSubnetsItem

| Name | Description | Value |
|-|-|-|
| first | First address in the subnet. | string |
| last | Last address in the subnet. | string |
| scope | Block size (number of leading bits in the subnet mask). | int |
## Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

### trafficmanagerprofiles/NestedEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:trafficmanagerprofiles |
| properties | The properties of the Traffic Manager endpoint. | EndpointProperties |


### EndpointProperties

| Name | Description | Value |
|-|-|-|
| alwaysServe | If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method. | 'Disabled''Enabled' |
| customHeaders | List of custom headers. | EndpointPropertiesCustomHeadersItem[] |
| endpointLocation | Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. | string |
| endpointMonitorStatus | The monitoring status of the endpoint. | 'CheckingEndpoint''Degraded''Disabled''Inactive''Online''Stopped''Unmonitored' |
| endpointStatus | The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. | 'Disabled''Enabled' |
| geoMapping | The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. | string[] |
| minChildEndpoints | The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv4 | The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv6 | The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| priority | The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value. | int |
| subnets | The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints. | EndpointPropertiesSubnetsItem[] |
| target | The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. | string |
| targetResourceId | The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. | string |
| weight | The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000. | int |


### EndpointPropertiesCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### EndpointPropertiesSubnetsItem

| Name | Description | Value |
|-|-|-|
| first | First address in the subnet. | string |
| last | Last address in the subnet. | string |
| scope | Block size (number of leading bits in the subnet mask). | int |
## Microsoft.Network/trafficManagerUserMetricsKeys@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficManagerUserMetricsKeys@2022-04-01"
  name = "default"
  parent_id = "string"
}

```

### trafficManagerUserMetricsKeys

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
