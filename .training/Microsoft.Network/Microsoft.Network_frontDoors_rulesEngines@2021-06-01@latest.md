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


