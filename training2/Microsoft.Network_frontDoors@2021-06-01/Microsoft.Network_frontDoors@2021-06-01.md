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


