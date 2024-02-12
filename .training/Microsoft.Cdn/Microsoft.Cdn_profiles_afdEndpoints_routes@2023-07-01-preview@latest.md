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


