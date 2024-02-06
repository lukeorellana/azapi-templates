## Microsoft.Cdn/cdnWebApplicationFirewallPolicies@2023-07-01-preview

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
## Microsoft.Cdn/profiles@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles@2023-07-01-preview"
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
      originResponseTimeoutSeconds = int
    }
    sku = {
      name = "string"
    }
  })
}

```

### profiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile. | Sku(required) |
| identity | Managed service identity (system assigned and/or user assigned identities). | ManagedServiceIdentity |
| properties | The JSON object that contains the properties required to create a profile. | ProfileProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ProfileProperties

| Name | Description | Value |
|-|-|-|
| originResponseTimeoutSeconds | Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns. | intConstraints:Min value = 16 |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the pricing tier. | 'Custom_Verizon''Premium_AzureFrontDoor''Premium_Verizon''StandardPlus_955BandWidth_ChinaCdn''StandardPlus_AvgBandWidth_ChinaCdn''StandardPlus_ChinaCdn''Standard_955BandWidth_ChinaCdn''Standard_Akamai''Standard_AvgBandWidth_ChinaCdn''Standard_AzureFrontDoor''Standard_ChinaCdn''Standard_Microsoft''Standard_Verizon' |
## Microsoft.Cdn/profiles/afdEndpoints@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/afdEndpoints@2023-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoGeneratedDomainNameLabelScope = "string"
      enabledState = "string"
    }
  })
}

```

### profiles/afdEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties required to create an endpoint. | AFDEndpointProperties |


### AFDEndpointProperties

| Name | Description | Value |
|-|-|-|
| autoGeneratedDomainNameLabelScope | Indicates the endpoint name reuse scope. The default value is TenantReuse. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| enabledState | Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
## Microsoft.Cdn/profiles/afdEndpoints/routes@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/afdEndpoints/routes@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cacheConfiguration = {
        compressionSettings = {
          contentTypesToCompress = [
            "string"
          ]
          isCompressionEnabled = bool
        }
        queryParameters = "string"
        queryStringCachingBehavior = "string"
      }
      customDomains = [
        {
          id = "string"
        }
      ]
      enabledState = "string"
      forwardingProtocol = "string"
      httpsRedirect = "string"
      linkToDefaultDomain = "string"
      originGroup = {
        id = "string"
      }
      originPath = "string"
      patternsToMatch = [
        "string"
      ]
      ruleSets = [
        {
          id = "string"
        }
      ]
      supportedProtocols = [
        "string"
      ]
    }
  })
}

```

### profiles/afdEndpoints/routes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:afdEndpoints |
| properties | The JSON object that contains the properties of the Routes to create. | RouteProperties |


### RouteProperties

| Name | Description | Value |
|-|-|-|
| cacheConfiguration | The caching configuration for this route. To disable caching, do not provide a cacheConfiguration object. | AfdRouteCacheConfiguration |
| customDomains | Domains referenced by this endpoint. | ActivatedResourceReference[] |
| enabledState | Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| forwardingProtocol | Protocol this rule will use when forwarding traffic to backends. | 'HttpOnly''HttpsOnly''MatchRequest' |
| httpsRedirect | Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed. | 'Disabled''Enabled' |
| linkToDefaultDomain | whether this route will be linked to the default endpoint domain. | 'Disabled''Enabled' |
| originGroup | A reference to the origin group. | ResourceReference |
| originPath | A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath. | string |
| patternsToMatch | The route patterns of the rule. | string[] |
| ruleSets | rule sets referenced by this endpoint. | ResourceReference[] |
| supportedProtocols | List of supported protocols for this route. | String array containing any of:'Http''Https' |


### AfdRouteCacheConfiguration

| Name | Description | Value |
|-|-|-|
| compressionSettings | compression settings. | CompressionSettings |
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryStringCachingBehavior | Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings. | 'IgnoreQueryString''IgnoreSpecifiedQueryStrings''IncludeSpecifiedQueryStrings''UseQueryString' |


### CompressionSettings

| Name | Description | Value |
|-|-|-|
| contentTypesToCompress | List of content types on which compression applies. The value should be a valid MIME type. | string[] |
| isCompressionEnabled | Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB. | bool |


### ActivatedResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Cdn/profiles/customDomains@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/customDomains@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureDnsZone = {
        id = "string"
      }
      extendedProperties = {
        {customized property} = "string"
      }
      hostName = "string"
      preValidatedCustomDomainResourceId = {
        id = "string"
      }
      tlsSettings = {
        certificateType = "string"
        minimumTlsVersion = "string"
        secret = {
          id = "string"
        }
      }
    }
  })
}

```

### profiles/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the domain to create. | AFDDomainProperties |


### AFDDomainProperties

| Name | Description | Value |
|-|-|-|
| azureDnsZone | Resource reference to the Azure DNS zone | ResourceReference |
| extendedProperties | Key-Value pair representing migration properties for domains. | AFDDomainPropertiesExtendedProperties |
| hostName | The host name of the domain. Must be a domain name. | string (required) |
| preValidatedCustomDomainResourceId | Resource reference to the Azure resource where custom domain ownership was prevalidated | ResourceReference |
| tlsSettings | The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default. | AFDDomainHttpsParameters |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### AFDDomainPropertiesExtendedProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AFDDomainHttpsParameters

| Name | Description | Value |
|-|-|-|
| certificateType | Defines the source of the SSL certificate. | 'AzureFirstPartyManagedCertificate''CustomerCertificate''ManagedCertificate' (required) |
| minimumTlsVersion | TLS protocol version that will be used for Https | 'TLS10''TLS12' |
| secret | Resource reference to the secret. ie. subs/rg/profile/secret | ResourceReference |
## Microsoft.Cdn/profiles/endpoints@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints@2023-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      contentTypesToCompress = [
        "string"
      ]
      defaultOriginGroup = {
        id = "string"
      }
      deliveryPolicy = {
        description = "string"
        rules = [
          {
            actions = [
              {
                name = "string"
                // For remaining properties, see DeliveryRuleActionAutoGenerated objects
              }
            ]
            conditions = [
              {
                name = "string"
                // For remaining properties, see DeliveryRuleCondition objects
              }
            ]
            name = "string"
            order = int
          }
        ]
      }
      geoFilters = [
        {
          action = "string"
          countryCodes = [
            "string"
          ]
          relativePath = "string"
        }
      ]
      isCompressionEnabled = bool
      isHttpAllowed = bool
      isHttpsAllowed = bool
      optimizationType = "string"
      originGroups = [
        {
          name = "string"
          properties = {
            healthProbeSettings = {
              probeIntervalInSeconds = int
              probePath = "string"
              probeProtocol = "string"
              probeRequestType = "string"
            }
            origins = [
              {
                id = "string"
              }
            ]
            responseBasedOriginErrorDetectionSettings = {
              httpErrorRanges = [
                {
                  begin = int
                  end = int
                }
              ]
              responseBasedDetectedErrorTypes = "string"
              responseBasedFailoverThresholdPercentage = int
            }
            trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
          }
        }
      ]
      originHostHeader = "string"
      originPath = "string"
      origins = [
        {
          name = "string"
          properties = {
            enabled = bool
            hostName = "string"
            httpPort = int
            httpsPort = int
            originHostHeader = "string"
            priority = int
            privateLinkAlias = "string"
            privateLinkApprovalMessage = "string"
            privateLinkLocation = "string"
            privateLinkResourceId = "string"
            weight = int
          }
        }
      ]
      probePath = "string"
      queryStringCachingBehavior = "string"
      urlSigningKeys = [
        {
          keyId = "string"
          keySourceParameters = {
            resourceGroupName = "string"
            secretName = "string"
            secretVersion = "string"
            subscriptionId = "string"
            typeName = "KeyVaultSigningKeyParameters"
            vaultName = "string"
          }
        }
      ]
      webApplicationFirewallPolicyLink = {
        id = "string"
      }
    }
  })
}

```

### profiles/endpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties required to create an endpoint. | EndpointProperties |


### EndpointProperties

| Name | Description | Value |
|-|-|-|
| contentTypesToCompress | List of content types on which compression applies. The value should be a valid MIME type. | string[] |
| defaultOriginGroup | A reference to the origin group. | ResourceReference |
| deliveryPolicy | A policy that specifies the delivery rules to be used for an endpoint. | EndpointPropertiesUpdateParametersDeliveryPolicy |
| geoFilters | List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/ | GeoFilter[] |
| isCompressionEnabled | Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB. | bool |
| isHttpAllowed | Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed. | bool |
| isHttpsAllowed | Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed. | bool |
| optimizationType | Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization. | 'DynamicSiteAcceleration''GeneralMediaStreaming''GeneralWebDelivery''LargeFileDownload''VideoOnDemandMediaStreaming' |
| originGroups | The origin groups comprising of origins that are used for load balancing the traffic based on availability. | DeepCreatedOriginGroup[] |
| originHostHeader | The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. | string |
| originPath | A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath. | string |
| origins | The source of the content being delivered via CDN. | DeepCreatedOrigin[] (required) |
| probePath | Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin. | string |
| queryStringCachingBehavior | Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL. | 'BypassCaching''IgnoreQueryString''NotSet''UseQueryString' |
| urlSigningKeys | List of keys used to validate the signed URL hashes. | UrlSigningKey[] |
| webApplicationFirewallPolicyLink | Defines the Web Application Firewall policy for the endpoint (if applicable) | EndpointPropertiesUpdateParametersWebApplicationFire... |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### EndpointPropertiesUpdateParametersDeliveryPolicy

| Name | Description | Value |
|-|-|-|
| description | User-friendly description of the policy. | string |
| rules | A list of the delivery rules. | DeliveryRule[] (required) |


### DeliveryRule

| Name | Description | Value |
|-|-|-|
| actions | A list of actions that are executed when all the conditions of a rule are satisfied. | DeliveryRuleActionAutoGenerated[] (required) |
| conditions | A list of conditions that must be matched for the actions to be executed | DeliveryRuleCondition[] |
| name | Name of the rule | string |
| order | The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,â¦â¦â¦}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied. | int (required) |


### DeliveryRuleActionAutoGenerated

| Name | Description | Value |
|-|-|-|
| name | Set the object type | AfdUrlSigningCacheExpirationCacheKeyQueryStringModifyRequestHeaderModifyResponseHeaderOriginGroupOverrideRouteConfigurationOverrideUrlRedirectUrlRewriteUrlSigning(required) |


### AfdUrlSigningAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'AfdUrlSigning' (required) |
| parameters | Defines the parameters for the action. | AfdUrlSigningActionParameters(required) |


### AfdUrlSigningActionParameters

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm to use for URL signing | 'SHA256' |
| keyGroupReference | Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/keyGroups/{keyGroupName} | ResourceReference(required) |
| parameterNameOverride | Defines which query string parameters in the url to be considered for expires, key id etc. | UrlSigningParamIdentifier[] |
| typeName |  | 'DeliveryRuleAfdUrlSigningActionParameters' (required) |


### UrlSigningParamIdentifier

| Name | Description | Value |
|-|-|-|
| paramIndicator | Indicates the purpose of the parameter | 'Expires''KeyId''Signature' (required) |
| paramName | Parameter name | string (required) |


### DeliveryRuleCacheExpirationAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'CacheExpiration' (required) |
| parameters | Defines the parameters for the action. | CacheExpirationActionParameters(required) |


### CacheExpirationActionParameters

| Name | Description | Value |
|-|-|-|
| cacheBehavior | Caching behavior for the requests | 'BypassCache''Override''SetIfMissing' (required) |
| cacheDuration | The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss | string |
| cacheType | The level at which the content needs to be cached. | 'All' (required) |
| typeName |  | 'DeliveryRuleCacheExpirationActionParameters' (required) |


### DeliveryRuleCacheKeyQueryStringAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'CacheKeyQueryString' (required) |
| parameters | Defines the parameters for the action. | CacheKeyQueryStringActionParameters(required) |


### CacheKeyQueryStringActionParameters

| Name | Description | Value |
|-|-|-|
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryStringBehavior | Caching behavior for the requests | 'Exclude''ExcludeAll''Include''IncludeAll' (required) |
| typeName |  | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' (required) |


### DeliveryRuleRequestHeaderAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'ModifyRequestHeader' (required) |
| parameters | Defines the parameters for the action. | HeaderActionParameters(required) |


### HeaderActionParameters

| Name | Description | Value |
|-|-|-|
| headerAction | Action to perform | 'Append''Delete''Overwrite' (required) |
| headerName | Name of the header to modify | string (required) |
| typeName |  | 'DeliveryRuleHeaderActionParameters' (required) |
| value | Value for the specified action | string |


### DeliveryRuleResponseHeaderAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'ModifyResponseHeader' (required) |
| parameters | Defines the parameters for the action. | HeaderActionParameters(required) |


### OriginGroupOverrideAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'OriginGroupOverride' (required) |
| parameters | Defines the parameters for the action. | OriginGroupOverrideActionParameters(required) |


### OriginGroupOverrideActionParameters

| Name | Description | Value |
|-|-|-|
| originGroup | defines the OriginGroup that would override the DefaultOriginGroup. | ResourceReference(required) |
| typeName |  | 'DeliveryRuleOriginGroupOverrideActionParameters' (required) |


### DeliveryRuleRouteConfigurationOverrideAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'RouteConfigurationOverride' (required) |
| parameters | Defines the parameters for the action. | RouteConfigurationOverrideActionParameters(required) |


### RouteConfigurationOverrideActionParameters

| Name | Description | Value |
|-|-|-|
| cacheConfiguration | The caching configuration associated with this rule. To disable caching, do not provide a cacheConfiguration object. | CacheConfiguration |
| originGroupOverride | A reference to the origin group override configuration. Leave empty to use the default origin group on route. | OriginGroupOverride |
| typeName |  | 'DeliveryRuleRouteConfigurationOverrideActionParameters' (required) |


### CacheConfiguration

| Name | Description | Value |
|-|-|-|
| cacheBehavior | Caching behavior for the requests | 'HonorOrigin''OverrideAlways''OverrideIfOriginMissing' |
| cacheDuration | The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss | string |
| isCompressionEnabled | Indicates whether content compression is enabled. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB. | 'Disabled''Enabled' |
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryStringCachingBehavior | Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings. | 'IgnoreQueryString''IgnoreSpecifiedQueryStrings''IncludeSpecifiedQueryStrings''UseQueryString' |


### OriginGroupOverride

| Name | Description | Value |
|-|-|-|
| forwardingProtocol | Protocol this rule will use when forwarding traffic to backends. | 'HttpOnly''HttpsOnly''MatchRequest' |
| originGroup | defines the OriginGroup that would override the DefaultOriginGroup on route. | ResourceReference |


### UrlRedirectAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'UrlRedirect' (required) |
| parameters | Defines the parameters for the action. | UrlRedirectActionParameters(required) |


### UrlRedirectActionParameters

| Name | Description | Value |
|-|-|-|
| customFragment | Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #. | string |
| customHostname | Host to redirect. Leave empty to use the incoming host as the destination host. | string |
| customPath | The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path. | string |
| customQueryString | The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in {key}={value} format. ? and & will be added automatically so do not include them. | string |
| destinationProtocol | Protocol to use for the redirect. The default value is MatchRequest | 'Http''Https''MatchRequest' |
| redirectType | The redirect type the rule will use when redirecting traffic. | 'Found''Moved''PermanentRedirect''TemporaryRedirect' (required) |
| typeName |  | 'DeliveryRuleUrlRedirectActionParameters' (required) |


### UrlRewriteAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'UrlRewrite' (required) |
| parameters | Defines the parameters for the action. | UrlRewriteActionParameters(required) |


### UrlRewriteActionParameters

| Name | Description | Value |
|-|-|-|
| destination | Define the relative URL to which the above requests will be rewritten by. | string (required) |
| preserveUnmatchedPath | Whether to preserve unmatched path. Default value is true. | bool |
| sourcePattern | define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched. | string (required) |
| typeName |  | 'DeliveryRuleUrlRewriteActionParameters' (required) |


### UrlSigningAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'UrlSigning' (required) |
| parameters | Defines the parameters for the action. | UrlSigningActionParameters(required) |


### UrlSigningActionParameters

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm to use for URL signing | 'SHA256' |
| parameterNameOverride | Defines which query string parameters in the url to be considered for expires, key id etc. | UrlSigningParamIdentifier[] |
| typeName |  | 'DeliveryRuleUrlSigningActionParameters' (required) |


### DeliveryRuleCondition

| Name | Description | Value |
|-|-|-|
| name | Set the object type | ClientPortCookiesHostNameHttpVersionIsDevicePostArgsQueryStringRemoteAddressRequestBodyRequestHeaderRequestMethodRequestSchemeRequestUriServerPortSocketAddrSslProtocolUrlFileExtensionUrlFileNameUrlPath(required) |


### DeliveryRuleClientPortCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'ClientPort' (required) |
| parameters | Defines the parameters for the condition. | ClientPortMatchConditionParameters(required) |


### ClientPortMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleClientPortConditionParameters' (required) |


### DeliveryRuleCookiesCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'Cookies' (required) |
| parameters | Defines the parameters for the condition. | CookiesMatchConditionParameters(required) |


### CookiesMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Name of Cookies to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleCookiesConditionParameters' (required) |


### DeliveryRuleHostNameCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'HostName' (required) |
| parameters | Defines the parameters for the condition. | HostNameMatchConditionParameters(required) |


### HostNameMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleHostNameConditionParameters' (required) |


### DeliveryRuleHttpVersionCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'HttpVersion' (required) |
| parameters | Defines the parameters for the condition. | HttpVersionMatchConditionParameters(required) |


### HttpVersionMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleHttpVersionConditionParameters' (required) |


### DeliveryRuleIsDeviceCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'IsDevice' (required) |
| parameters | Defines the parameters for the condition. | IsDeviceMatchConditionParameters(required) |


### IsDeviceMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'Desktop''Mobile' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleIsDeviceConditionParameters' (required) |


### DeliveryRulePostArgsCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'PostArgs' (required) |
| parameters | Defines the parameters for the condition. | PostArgsMatchConditionParameters(required) |


### PostArgsMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Name of PostArg to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRulePostArgsConditionParameters' (required) |


### DeliveryRuleQueryStringCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'QueryString' (required) |
| parameters | Defines the parameters for the condition. | QueryStringMatchConditionParameters(required) |


### QueryStringMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleQueryStringConditionParameters' (required) |


### DeliveryRuleRemoteAddressCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RemoteAddress' (required) |
| parameters | Defines the parameters for the condition. | RemoteAddressMatchConditionParameters(required) |


### RemoteAddressMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match. | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''GeoMatch''IPMatch' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRemoteAddressConditionParameters' (required) |


### DeliveryRuleRequestBodyCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestBody' (required) |
| parameters | Defines the parameters for the condition. | RequestBodyMatchConditionParameters(required) |


### RequestBodyMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestBodyConditionParameters' (required) |


### DeliveryRuleRequestHeaderCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestHeader' (required) |
| parameters | Defines the parameters for the condition. | RequestHeaderMatchConditionParameters(required) |


### RequestHeaderMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Name of Header to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestHeaderConditionParameters' (required) |


### DeliveryRuleRequestMethodCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestMethod' (required) |
| parameters | Defines the parameters for the condition. | RequestMethodMatchConditionParameters(required) |


### RequestMethodMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'DELETE''GET''HEAD''OPTIONS''POST''PUT''TRACE' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestMethodConditionParameters' (required) |


### DeliveryRuleRequestSchemeCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestScheme' (required) |
| parameters | Defines the parameters for the condition. | RequestSchemeMatchConditionParameters(required) |


### RequestSchemeMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'HTTP''HTTPS' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestSchemeConditionParameters' (required) |


### DeliveryRuleRequestUriCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestUri' (required) |
| parameters | Defines the parameters for the condition. | RequestUriMatchConditionParameters(required) |


### RequestUriMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestUriConditionParameters' (required) |


### DeliveryRuleServerPortCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'ServerPort' (required) |
| parameters | Defines the parameters for the condition. | ServerPortMatchConditionParameters(required) |


### ServerPortMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleServerPortConditionParameters' (required) |


### DeliveryRuleSocketAddrCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'SocketAddr' (required) |
| parameters | Defines the parameters for the condition. | SocketAddrMatchConditionParameters(required) |


### SocketAddrMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''IPMatch' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleSocketAddrConditionParameters' (required) |


### DeliveryRuleSslProtocolCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'SslProtocol' (required) |
| parameters | Defines the parameters for the condition. | SslProtocolMatchConditionParameters(required) |


### SslProtocolMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'TLSv1''TLSv1.1''TLSv1.2' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleSslProtocolConditionParameters' (required) |


### DeliveryRuleUrlFileExtensionCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'UrlFileExtension' (required) |
| parameters | Defines the parameters for the condition. | UrlFileExtensionMatchConditionParameters(required) |


### UrlFileExtensionMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' (required) |


### DeliveryRuleUrlFileNameCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'UrlFileName' (required) |
| parameters | Defines the parameters for the condition. | UrlFileNameMatchConditionParameters(required) |


### UrlFileNameMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleUrlFilenameConditionParameters' (required) |


### DeliveryRuleUrlPathCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'UrlPath' (required) |
| parameters | Defines the parameters for the condition. | UrlPathMatchConditionParameters(required) |


### UrlPathMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx''Wildcard' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleUrlPathMatchConditionParameters' (required) |


### GeoFilter

| Name | Description | Value |
|-|-|-|
| action | Action of the geo filter, i.e. allow or block access. | 'Allow''Block' (required) |
| countryCodes | Two letter country or region codes defining user country or region access in a geo filter, e.g. AU, MX, US. | string[] (required) |
| relativePath | Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.) | string (required) |


### DeepCreatedOriginGroup

| Name | Description | Value |
|-|-|-|
| name | Origin group name which must be unique within the endpoint. | string (required) |
| properties | Properties of the origin group created on the CDN endpoint. | DeepCreatedOriginGroupProperties |


### DeepCreatedOriginGroupProperties

| Name | Description | Value |
|-|-|-|
| healthProbeSettings | Health probe settings to the origin that is used to determine the health of the origin. | HealthProbeParameters |
| origins | The source of the content being delivered via CDN within given origin group. | ResourceReference[] (required) |
| responseBasedOriginErrorDetectionSettings | The JSON object that contains the properties to determine origin health using real requests/responses.This property is currently not supported. | ResponseBasedOriginErrorDetectionParameters |
| trafficRestorationTimeToHealedOrNewEndpointsInMinutes | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | intConstraints:Min value = 0Max value = 50 |


### HealthProbeParameters

| Name | Description | Value |
|-|-|-|
| probeIntervalInSeconds | The number of seconds between health probes.Default is 240sec. | intConstraints:Min value = 1Max value = 255 |
| probePath | The path relative to the origin that is used to determine the health of the origin. | string |
| probeProtocol | Protocol to use for health probe. | 'Http''Https''NotSet' |
| probeRequestType | The type of health probe request that is made. | 'GET''HEAD''NotSet' |


### ResponseBasedOriginErrorDetectionParameters

| Name | Description | Value |
|-|-|-|
| httpErrorRanges | The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy. | HttpErrorRangeParameters[] |
| responseBasedDetectedErrorTypes | Type of response errors for real user requests for which origin will be deemed unhealthy | 'None''TcpAndHttpErrors''TcpErrorsOnly' |
| responseBasedFailoverThresholdPercentage | The percentage of failed requests in the sample where failover should trigger. | intConstraints:Min value = 0Max value = 100 |


### HttpErrorRangeParameters

| Name | Description | Value |
|-|-|-|
| begin | The inclusive start of the http status code range. | intConstraints:Min value = 100Max value = 999 |
| end | The inclusive end of the http status code range. | intConstraints:Min value = 100Max value = 999 |


### DeepCreatedOrigin

| Name | Description | Value |
|-|-|-|
| name | Origin name which must be unique within the endpoint. | string (required) |
| properties | Properties of the origin created on the CDN endpoint. | DeepCreatedOriginProperties |


### DeepCreatedOriginProperties

| Name | Description | Value |
|-|-|-|
| enabled | Origin is enabled for load balancing or not. By default, origin is always enabled. | bool |
| hostName | The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint. | string (required) |
| httpPort | The value of the HTTP port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| httpsPort | The value of the HTTPS port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| originHostHeader | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. | string |
| priority | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5. | intConstraints:Min value = 1Max value = 5 |
| privateLinkAlias | The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private' | string |
| privateLinkApprovalMessage | A custom message to be included in the approval request to connect to the Private Link. | string |
| privateLinkLocation | The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated | string |
| privateLinkResourceId | The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private' | string |
| weight | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | intConstraints:Min value = 1Max value = 1000 |


### UrlSigningKey

| Name | Description | Value |
|-|-|-|
| keyId | Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash. | string (required) |
| keySourceParameters | Defines the parameters for using customer key vault for Url Signing Key. | KeyVaultSigningKeyParameters(required) |


### KeyVaultSigningKeyParameters

| Name | Description | Value |
|-|-|-|
| resourceGroupName | Resource group of the user's Key Vault containing the secret | string (required) |
| secretName | The name of secret in Key Vault. | string (required) |
| secretVersion | The version(GUID) of secret in Key Vault. | string (required) |
| subscriptionId | Subscription Id of the user's Key Vault containing the secret | string (required) |
| typeName |  | 'KeyVaultSigningKeyParameters' (required) |
| vaultName | The name of the user's Key Vault containing the secret | string (required) |


### EndpointPropertiesUpdateParametersWebApplicationFire...

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Cdn/profiles/endpoints/customDomains@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/customDomains@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostName = "string"
    }
  })
}

```

### profiles/endpoints/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:endpoints |
| properties | The JSON object that contains the properties of the custom domain to create. | CustomDomainPropertiesParametersOrCustomDomainProper... |


### CustomDomainPropertiesParametersOrCustomDomainProper...

| Name | Description | Value |
|-|-|-|
| hostName | The host name of the custom domain. Must be a domain name. | string (required) |
## Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      healthProbeSettings = {
        probeIntervalInSeconds = int
        probePath = "string"
        probeProtocol = "string"
        probeRequestType = "string"
      }
      origins = [
        {
          id = "string"
        }
      ]
      responseBasedOriginErrorDetectionSettings = {
        httpErrorRanges = [
          {
            begin = int
            end = int
          }
        ]
        responseBasedDetectedErrorTypes = "string"
        responseBasedFailoverThresholdPercentage = int
      }
      trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
    }
  })
}

```

### profiles/endpoints/originGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:endpoints |
| properties | The JSON object that contains the properties of the origin group. | OriginGroupProperties |


### OriginGroupProperties

| Name | Description | Value |
|-|-|-|
| healthProbeSettings | Health probe settings to the origin that is used to determine the health of the origin. | HealthProbeParameters |
| origins | The source of the content being delivered via CDN within given origin group. | ResourceReference[] |
| responseBasedOriginErrorDetectionSettings | The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported. | ResponseBasedOriginErrorDetectionParameters |
| trafficRestorationTimeToHealedOrNewEndpointsInMinutes | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | intConstraints:Min value = 0Max value = 50 |


### HealthProbeParameters

| Name | Description | Value |
|-|-|-|
| probeIntervalInSeconds | The number of seconds between health probes.Default is 240sec. | intConstraints:Min value = 1Max value = 255 |
| probePath | The path relative to the origin that is used to determine the health of the origin. | string |
| probeProtocol | Protocol to use for health probe. | 'Http''Https''NotSet' |
| probeRequestType | The type of health probe request that is made. | 'GET''HEAD''NotSet' |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ResponseBasedOriginErrorDetectionParameters

| Name | Description | Value |
|-|-|-|
| httpErrorRanges | The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy. | HttpErrorRangeParameters[] |
| responseBasedDetectedErrorTypes | Type of response errors for real user requests for which origin will be deemed unhealthy | 'None''TcpAndHttpErrors''TcpErrorsOnly' |
| responseBasedFailoverThresholdPercentage | The percentage of failed requests in the sample where failover should trigger. | intConstraints:Min value = 0Max value = 100 |


### HttpErrorRangeParameters

| Name | Description | Value |
|-|-|-|
| begin | The inclusive start of the http status code range. | intConstraints:Min value = 100Max value = 999 |
| end | The inclusive end of the http status code range. | intConstraints:Min value = 100Max value = 999 |
## Microsoft.Cdn/profiles/endpoints/origins@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/origins@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      hostName = "string"
      httpPort = int
      httpsPort = int
      originHostHeader = "string"
      priority = int
      privateLinkAlias = "string"
      privateLinkApprovalMessage = "string"
      privateLinkLocation = "string"
      privateLinkResourceId = "string"
      weight = int
    }
  })
}

```

### profiles/endpoints/origins

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:endpoints |
| properties | The JSON object that contains the properties of the origin. | OriginProperties |


### OriginProperties

| Name | Description | Value |
|-|-|-|
| enabled | Origin is enabled for load balancing or not | bool |
| hostName | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint. | string |
| httpPort | The value of the HTTP port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| httpsPort | The value of the HTTPS port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| originHostHeader | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint | string |
| priority | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5 | intConstraints:Min value = 1Max value = 5 |
| privateLinkAlias | The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private' | string |
| privateLinkApprovalMessage | A custom message to be included in the approval request to connect to the Private Link. | string |
| privateLinkLocation | The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated | string |
| privateLinkResourceId | The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private' | string |
| weight | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | intConstraints:Min value = 1Max value = 1000 |
## Microsoft.Cdn/profiles/keyGroups@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/keyGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyReferences = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

### profiles/keyGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the key group to create. | KeyGroupProperties |


### KeyGroupProperties

| Name | Description | Value |
|-|-|-|
| keyReferences | Names of UrlSigningKey type secret objects | ResourceReference[] |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
## Microsoft.Cdn/profiles/originGroups@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/originGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      healthProbeSettings = {
        probeIntervalInSeconds = int
        probePath = "string"
        probeProtocol = "string"
        probeRequestType = "string"
      }
      loadBalancingSettings = {
        additionalLatencyInMilliseconds = int
        sampleSize = int
        successfulSamplesRequired = int
      }
      sessionAffinityState = "string"
      trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
    }
  })
}

```

### profiles/originGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the origin group. | AFDOriginGroupProperties |


### AFDOriginGroupProperties

| Name | Description | Value |
|-|-|-|
| healthProbeSettings | Health probe settings to the origin that is used to determine the health of the origin. | HealthProbeParameters |
| loadBalancingSettings | Load balancing settings for a backend pool | LoadBalancingSettingsParameters |
| sessionAffinityState | Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| trafficRestorationTimeToHealedOrNewEndpointsInMinutes | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | intConstraints:Min value = 0Max value = 50 |


### HealthProbeParameters

| Name | Description | Value |
|-|-|-|
| probeIntervalInSeconds | The number of seconds between health probes.Default is 240sec. | intConstraints:Min value = 1Max value = 255 |
| probePath | The path relative to the origin that is used to determine the health of the origin. | string |
| probeProtocol | Protocol to use for health probe. | 'Http''Https''NotSet' |
| probeRequestType | The type of health probe request that is made. | 'GET''HEAD''NotSet' |


### LoadBalancingSettingsParameters

| Name | Description | Value |
|-|-|-|
| additionalLatencyInMilliseconds | The additional latency in milliseconds for probes to fall into the lowest latency bucket | int |
| sampleSize | The number of samples to consider for load balancing decisions | int |
| successfulSamplesRequired | The number of samples within the sample period that must succeed | int |
## Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureOrigin = {
        id = "string"
      }
      enabledState = "string"
      enforceCertificateNameCheck = bool
      hostName = "string"
      httpPort = int
      httpsPort = int
      originHostHeader = "string"
      priority = int
      sharedPrivateLinkResource = {
        groupId = "string"
        privateLink = {
          id = "string"
        }
        privateLinkLocation = "string"
        requestMessage = "string"
        status = "string"
      }
      weight = int
    }
  })
}

```

### profiles/originGroups/origins

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:originGroups |
| properties | The JSON object that contains the properties of the origin. | AFDOriginProperties |


### AFDOriginProperties

| Name | Description | Value |
|-|-|-|
| azureOrigin | Resource reference to the Azure origin resource. | ResourceReference |
| enabledState | Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool. | 'Disabled''Enabled' |
| enforceCertificateNameCheck | Whether to enable certificate name check at origin level | bool |
| hostName | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint. | string |
| httpPort | The value of the HTTP port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| httpsPort | The value of the HTTPS port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| originHostHeader | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint | string |
| priority | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5 | intConstraints:Min value = 1Max value = 5 |
| sharedPrivateLinkResource | The properties of the private link resource for private origin. | SharedPrivateLinkResourceProperties |
| weight | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | intConstraints:Min value = 1Max value = 1000 |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### SharedPrivateLinkResourceProperties

| Name | Description | Value |
|-|-|-|
| groupId | The group id from the provider of resource the shared private link resource is for. | string |
| privateLink | The resource id of the resource the shared private link resource is for. | ResourceReference |
| privateLinkLocation | The location of the shared private link resource | string |
| requestMessage | The request message for requesting approval of the shared private link resource. | string |
| status | Status of the shared private link resource. Can be Pending, Approved, Rejected, Disconnected, or Timeout. | 'Approved''Disconnected''Pending''Rejected''Timeout' |
## Microsoft.Cdn/profiles/ruleSets@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/ruleSets@2023-07-01-preview"
  name = "string"
  parent_id = "string"
}

```

### profiles/ruleSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
## Microsoft.Cdn/profiles/ruleSets/rules@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/ruleSets/rules@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        {
          name = "string"
          // For remaining properties, see DeliveryRuleActionAutoGenerated objects
        }
      ]
      conditions = [
        {
          name = "string"
          // For remaining properties, see DeliveryRuleCondition objects
        }
      ]
      matchProcessingBehavior = "string"
      order = int
    }
  })
}

```

### profiles/ruleSets/rules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:ruleSets |
| properties | The JSON object that contains the properties of the Rules to create. | RuleProperties |


### RuleProperties

| Name | Description | Value |
|-|-|-|
| actions | A list of actions that are executed when all the conditions of a rule are satisfied. | DeliveryRuleActionAutoGenerated[] |
| conditions | A list of conditions that must be matched for the actions to be executed | DeliveryRuleCondition[] |
| matchProcessingBehavior | If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue. | 'Continue''Stop' |
| order | The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,â¦â¦â¦}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied. | int |


### DeliveryRuleActionAutoGenerated

| Name | Description | Value |
|-|-|-|
| name | Set the object type | AfdUrlSigningCacheExpirationCacheKeyQueryStringModifyRequestHeaderModifyResponseHeaderOriginGroupOverrideRouteConfigurationOverrideUrlRedirectUrlRewriteUrlSigning(required) |


### AfdUrlSigningAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'AfdUrlSigning' (required) |
| parameters | Defines the parameters for the action. | AfdUrlSigningActionParameters(required) |


### AfdUrlSigningActionParameters

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm to use for URL signing | 'SHA256' |
| keyGroupReference | Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/keyGroups/{keyGroupName} | ResourceReference(required) |
| parameterNameOverride | Defines which query string parameters in the url to be considered for expires, key id etc. | UrlSigningParamIdentifier[] |
| typeName |  | 'DeliveryRuleAfdUrlSigningActionParameters' (required) |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### UrlSigningParamIdentifier

| Name | Description | Value |
|-|-|-|
| paramIndicator | Indicates the purpose of the parameter | 'Expires''KeyId''Signature' (required) |
| paramName | Parameter name | string (required) |


### DeliveryRuleCacheExpirationAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'CacheExpiration' (required) |
| parameters | Defines the parameters for the action. | CacheExpirationActionParameters(required) |


### CacheExpirationActionParameters

| Name | Description | Value |
|-|-|-|
| cacheBehavior | Caching behavior for the requests | 'BypassCache''Override''SetIfMissing' (required) |
| cacheDuration | The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss | string |
| cacheType | The level at which the content needs to be cached. | 'All' (required) |
| typeName |  | 'DeliveryRuleCacheExpirationActionParameters' (required) |


### DeliveryRuleCacheKeyQueryStringAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'CacheKeyQueryString' (required) |
| parameters | Defines the parameters for the action. | CacheKeyQueryStringActionParameters(required) |


### CacheKeyQueryStringActionParameters

| Name | Description | Value |
|-|-|-|
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryStringBehavior | Caching behavior for the requests | 'Exclude''ExcludeAll''Include''IncludeAll' (required) |
| typeName |  | 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters' (required) |


### DeliveryRuleRequestHeaderAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'ModifyRequestHeader' (required) |
| parameters | Defines the parameters for the action. | HeaderActionParameters(required) |


### HeaderActionParameters

| Name | Description | Value |
|-|-|-|
| headerAction | Action to perform | 'Append''Delete''Overwrite' (required) |
| headerName | Name of the header to modify | string (required) |
| typeName |  | 'DeliveryRuleHeaderActionParameters' (required) |
| value | Value for the specified action | string |


### DeliveryRuleResponseHeaderAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'ModifyResponseHeader' (required) |
| parameters | Defines the parameters for the action. | HeaderActionParameters(required) |


### OriginGroupOverrideAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'OriginGroupOverride' (required) |
| parameters | Defines the parameters for the action. | OriginGroupOverrideActionParameters(required) |


### OriginGroupOverrideActionParameters

| Name | Description | Value |
|-|-|-|
| originGroup | defines the OriginGroup that would override the DefaultOriginGroup. | ResourceReference(required) |
| typeName |  | 'DeliveryRuleOriginGroupOverrideActionParameters' (required) |


### DeliveryRuleRouteConfigurationOverrideAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'RouteConfigurationOverride' (required) |
| parameters | Defines the parameters for the action. | RouteConfigurationOverrideActionParameters(required) |


### RouteConfigurationOverrideActionParameters

| Name | Description | Value |
|-|-|-|
| cacheConfiguration | The caching configuration associated with this rule. To disable caching, do not provide a cacheConfiguration object. | CacheConfiguration |
| originGroupOverride | A reference to the origin group override configuration. Leave empty to use the default origin group on route. | OriginGroupOverride |
| typeName |  | 'DeliveryRuleRouteConfigurationOverrideActionParameters' (required) |


### CacheConfiguration

| Name | Description | Value |
|-|-|-|
| cacheBehavior | Caching behavior for the requests | 'HonorOrigin''OverrideAlways''OverrideIfOriginMissing' |
| cacheDuration | The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss | string |
| isCompressionEnabled | Indicates whether content compression is enabled. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB. | 'Disabled''Enabled' |
| queryParameters | query parameters to include or exclude (comma separated). | string |
| queryStringCachingBehavior | Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings. | 'IgnoreQueryString''IgnoreSpecifiedQueryStrings''IncludeSpecifiedQueryStrings''UseQueryString' |


### OriginGroupOverride

| Name | Description | Value |
|-|-|-|
| forwardingProtocol | Protocol this rule will use when forwarding traffic to backends. | 'HttpOnly''HttpsOnly''MatchRequest' |
| originGroup | defines the OriginGroup that would override the DefaultOriginGroup on route. | ResourceReference |


### UrlRedirectAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'UrlRedirect' (required) |
| parameters | Defines the parameters for the action. | UrlRedirectActionParameters(required) |


### UrlRedirectActionParameters

| Name | Description | Value |
|-|-|-|
| customFragment | Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #. | string |
| customHostname | Host to redirect. Leave empty to use the incoming host as the destination host. | string |
| customPath | The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path. | string |
| customQueryString | The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in {key}={value} format. ? and & will be added automatically so do not include them. | string |
| destinationProtocol | Protocol to use for the redirect. The default value is MatchRequest | 'Http''Https''MatchRequest' |
| redirectType | The redirect type the rule will use when redirecting traffic. | 'Found''Moved''PermanentRedirect''TemporaryRedirect' (required) |
| typeName |  | 'DeliveryRuleUrlRedirectActionParameters' (required) |


### UrlRewriteAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'UrlRewrite' (required) |
| parameters | Defines the parameters for the action. | UrlRewriteActionParameters(required) |


### UrlRewriteActionParameters

| Name | Description | Value |
|-|-|-|
| destination | Define the relative URL to which the above requests will be rewritten by. | string (required) |
| preserveUnmatchedPath | Whether to preserve unmatched path. Default value is true. | bool |
| sourcePattern | define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched. | string (required) |
| typeName |  | 'DeliveryRuleUrlRewriteActionParameters' (required) |


### UrlSigningAction

| Name | Description | Value |
|-|-|-|
| name | The name of the action for the delivery rule. | 'UrlSigning' (required) |
| parameters | Defines the parameters for the action. | UrlSigningActionParameters(required) |


### UrlSigningActionParameters

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm to use for URL signing | 'SHA256' |
| parameterNameOverride | Defines which query string parameters in the url to be considered for expires, key id etc. | UrlSigningParamIdentifier[] |
| typeName |  | 'DeliveryRuleUrlSigningActionParameters' (required) |


### DeliveryRuleCondition

| Name | Description | Value |
|-|-|-|
| name | Set the object type | ClientPortCookiesHostNameHttpVersionIsDevicePostArgsQueryStringRemoteAddressRequestBodyRequestHeaderRequestMethodRequestSchemeRequestUriServerPortSocketAddrSslProtocolUrlFileExtensionUrlFileNameUrlPath(required) |


### DeliveryRuleClientPortCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'ClientPort' (required) |
| parameters | Defines the parameters for the condition. | ClientPortMatchConditionParameters(required) |


### ClientPortMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleClientPortConditionParameters' (required) |


### DeliveryRuleCookiesCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'Cookies' (required) |
| parameters | Defines the parameters for the condition. | CookiesMatchConditionParameters(required) |


### CookiesMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Name of Cookies to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleCookiesConditionParameters' (required) |


### DeliveryRuleHostNameCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'HostName' (required) |
| parameters | Defines the parameters for the condition. | HostNameMatchConditionParameters(required) |


### HostNameMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleHostNameConditionParameters' (required) |


### DeliveryRuleHttpVersionCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'HttpVersion' (required) |
| parameters | Defines the parameters for the condition. | HttpVersionMatchConditionParameters(required) |


### HttpVersionMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleHttpVersionConditionParameters' (required) |


### DeliveryRuleIsDeviceCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'IsDevice' (required) |
| parameters | Defines the parameters for the condition. | IsDeviceMatchConditionParameters(required) |


### IsDeviceMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'Desktop''Mobile' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleIsDeviceConditionParameters' (required) |


### DeliveryRulePostArgsCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'PostArgs' (required) |
| parameters | Defines the parameters for the condition. | PostArgsMatchConditionParameters(required) |


### PostArgsMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Name of PostArg to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRulePostArgsConditionParameters' (required) |


### DeliveryRuleQueryStringCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'QueryString' (required) |
| parameters | Defines the parameters for the condition. | QueryStringMatchConditionParameters(required) |


### QueryStringMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleQueryStringConditionParameters' (required) |


### DeliveryRuleRemoteAddressCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RemoteAddress' (required) |
| parameters | Defines the parameters for the condition. | RemoteAddressMatchConditionParameters(required) |


### RemoteAddressMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match. | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''GeoMatch''IPMatch' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRemoteAddressConditionParameters' (required) |


### DeliveryRuleRequestBodyCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestBody' (required) |
| parameters | Defines the parameters for the condition. | RequestBodyMatchConditionParameters(required) |


### RequestBodyMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestBodyConditionParameters' (required) |


### DeliveryRuleRequestHeaderCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestHeader' (required) |
| parameters | Defines the parameters for the condition. | RequestHeaderMatchConditionParameters(required) |


### RequestHeaderMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| selector | Name of Header to be matched | string |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestHeaderConditionParameters' (required) |


### DeliveryRuleRequestMethodCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestMethod' (required) |
| parameters | Defines the parameters for the condition. | RequestMethodMatchConditionParameters(required) |


### RequestMethodMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'DELETE''GET''HEAD''OPTIONS''POST''PUT''TRACE' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestMethodConditionParameters' (required) |


### DeliveryRuleRequestSchemeCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestScheme' (required) |
| parameters | Defines the parameters for the condition. | RequestSchemeMatchConditionParameters(required) |


### RequestSchemeMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'HTTP''HTTPS' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestSchemeConditionParameters' (required) |


### DeliveryRuleRequestUriCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'RequestUri' (required) |
| parameters | Defines the parameters for the condition. | RequestUriMatchConditionParameters(required) |


### RequestUriMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleRequestUriConditionParameters' (required) |


### DeliveryRuleServerPortCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'ServerPort' (required) |
| parameters | Defines the parameters for the condition. | ServerPortMatchConditionParameters(required) |


### ServerPortMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleServerPortConditionParameters' (required) |


### DeliveryRuleSocketAddrCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'SocketAddr' (required) |
| parameters | Defines the parameters for the condition. | SocketAddrMatchConditionParameters(required) |


### SocketAddrMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''IPMatch' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleSocketAddrConditionParameters' (required) |


### DeliveryRuleSslProtocolCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'SslProtocol' (required) |
| parameters | Defines the parameters for the condition. | SslProtocolMatchConditionParameters(required) |


### SslProtocolMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | String array containing any of:'TLSv1''TLSv1.1''TLSv1.2' |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Equal' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleSslProtocolConditionParameters' (required) |


### DeliveryRuleUrlFileExtensionCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'UrlFileExtension' (required) |
| parameters | Defines the parameters for the condition. | UrlFileExtensionMatchConditionParameters(required) |


### UrlFileExtensionMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleUrlFileExtensionMatchConditionParameters' (required) |


### DeliveryRuleUrlFileNameCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'UrlFileName' (required) |
| parameters | Defines the parameters for the condition. | UrlFileNameMatchConditionParameters(required) |


### UrlFileNameMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleUrlFilenameConditionParameters' (required) |


### DeliveryRuleUrlPathCondition

| Name | Description | Value |
|-|-|-|
| name | The name of the condition for the delivery rule. | 'UrlPath' (required) |
| parameters | Defines the parameters for the condition. | UrlPathMatchConditionParameters(required) |


### UrlPathMatchConditionParameters

| Name | Description | Value |
|-|-|-|
| matchValues | The match value for the condition of the delivery rule | string[] |
| negateCondition | Describes if this is negate condition or not | bool |
| operator | Describes operator to be matched | 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx''Wildcard' (required) |
| transforms | List of transforms | String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode' |
| typeName |  | 'DeliveryRuleUrlPathMatchConditionParameters' (required) |
## Microsoft.Cdn/profiles/secrets@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/secrets@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        type = "string"
        // For remaining properties, see SecretParameters objects
      }
    }
  })
}

```

### profiles/secrets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the Secret to create. | SecretProperties |


### SecretProperties

| Name | Description | Value |
|-|-|-|
| parameters | object which contains secret parameters | SecretParameters |


### SecretParameters

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureFirstPartyManagedCertificateCustomerCertificateManagedCertificateUrlSigningKey(required) |


### AzureFirstPartyManagedCertificateParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'AzureFirstPartyManagedCertificate' (required) |
| subjectAlternativeNames | The list of SANs. | string[] |


### CustomerCertificateParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'CustomerCertificate' (required) |
| secretSource | Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{certificateName} | ResourceReference(required) |
| secretVersion | Version of the secret to be used | string |
| subjectAlternativeNames | The list of SANs. | string[] |
| useLatestVersion | Whether to use the latest version for the certificate | bool |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ManagedCertificateParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'ManagedCertificate' (required) |


### UrlSigningKeyParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'UrlSigningKey' (required) |
| keyId | Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash. | string (required) |
| secretSource | Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName} | ResourceReference(required) |
| secretVersion | Version of the secret to be used | string |
## Microsoft.Cdn/profiles/securityPolicies@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/securityPolicies@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        type = "string"
        // For remaining properties, see SecurityPolicyPropertiesParameters objects
      }
    }
  })
}

```

### profiles/securityPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The json object that contains properties required to create a security policy | SecurityPolicyProperties |


### SecurityPolicyProperties

| Name | Description | Value |
|-|-|-|
| parameters | object which contains security policy parameters | SecurityPolicyPropertiesParameters |


### SecurityPolicyPropertiesParameters

| Name | Description | Value |
|-|-|-|
| type | Set the object type | WebApplicationFirewall(required) |


### SecurityPolicyWebApplicationFirewallParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the Security policy to create. | 'WebApplicationFirewall' (required) |
| associations | Waf associations | SecurityPolicyWebApplicationFirewallAssociation[] |
| wafPolicy | Resource ID. | ResourceReference |


### SecurityPolicyWebApplicationFirewallAssociation

| Name | Description | Value |
|-|-|-|
| domains | List of domains. | ActivatedResourceReference[] |
| patternsToMatch | List of paths | string[] |


### ActivatedResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
