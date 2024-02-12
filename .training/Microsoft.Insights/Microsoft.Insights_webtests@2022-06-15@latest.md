```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/webtests@2022-06-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      Configuration = {
        WebTest = "string"
      }
      Description = "string"
      Enabled = bool
      Frequency = int
      Kind = "string"
      Locations = [
        {
          Id = "string"
        }
      ]
      Name = "string"
      Request = {
        FollowRedirects = bool
        Headers = [
          {
            key = "string"
            value = "string"
          }
        ]
        HttpVerb = "string"
        ParseDependentRequests = bool
        RequestBody = "string"
        RequestUrl = "string"
      }
      RetryEnabled = bool
      SyntheticMonitorId = "string"
      Timeout = int
      ValidationRules = {
        ContentValidation = {
          ContentMatch = "string"
          IgnoreCase = bool
          PassIfTextFound = bool
        }
        ExpectedHttpStatusCode = int
        IgnoreHttpStatusCode = bool
        SSLCertRemainingLifetimeCheck = int
        SSLCheck = bool
      }
    }
    kind = "string"
  })
}

```

### webtests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of WebTest that this web test watches. Choices are ping, multistep and standard. | 'multistep''ping''standard' |
| properties | Metadata describing a web test for an Azure resource. | WebTestProperties |


### WebTestProperties

| Name | Description | Value |
|-|-|-|
| Configuration | An XML configuration specification for a WebTest. | WebTestPropertiesConfiguration |
| Description | User defined description for this WebTest. | string |
| Enabled | Is the test actively being monitored. | bool |
| Frequency | Interval in seconds between test runs for this WebTest. Default value is 300. | int |
| Kind | The kind of web test this is, valid choices are ping, multistep and standard. | 'multistep''ping''standard' (required) |
| Locations | A list of where to physically run the tests from to give global coverage for accessibility of your application. | WebTestGeolocation[] (required) |
| Name | User defined name if this WebTest. | string (required) |
| Request | The collection of request properties | WebTestPropertiesRequest |
| RetryEnabled | Allow for retries should this WebTest fail. | bool |
| SyntheticMonitorId | Unique ID of this WebTest. This is typically the same value as the Name field. | string (required) |
| Timeout | Seconds until this WebTest will timeout and fail. Default value is 30. | int |
| ValidationRules | The collection of validation rule properties | WebTestPropertiesValidationRules |


### WebTestPropertiesConfiguration

| Name | Description | Value |
|-|-|-|
| WebTest | The XML specification of a WebTest to run against an application. | string |


### WebTestGeolocation

| Name | Description | Value |
|-|-|-|
| Id | Location ID for the WebTest to run from. | string |


### WebTestPropertiesRequest

| Name | Description | Value |
|-|-|-|
| FollowRedirects | Follow redirects for this web test. | bool |
| Headers | List of headers and their values to add to the WebTest call. | HeaderField[] |
| HttpVerb | Http verb to use for this web test. | string |
| ParseDependentRequests | Parse Dependent request for this WebTest. | bool |
| RequestBody | Base64 encoded string body to send with this web test. | string |
| RequestUrl | Url location to test. | string |


### HeaderField

| Name | Description | Value |
|-|-|-|
| key | The name of the header. | string |
| value | The value of the header. | string |


### WebTestPropertiesValidationRules

| Name | Description | Value |
|-|-|-|
| ContentValidation | The collection of content validation properties | WebTestPropertiesValidationRulesContentValidation |
| ExpectedHttpStatusCode | Validate that the WebTest returns the http status code provided. | int |
| IgnoreHttpStatusCode | When set, validation will ignore the status code. | bool |
| SSLCertRemainingLifetimeCheck | A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true. | int |
| SSLCheck | Checks to see if the SSL cert is still valid. | bool |


### WebTestPropertiesValidationRulesContentValidation

| Name | Description | Value |
|-|-|-|
| ContentMatch | Content to look for in the return of the WebTest.  Must not be null or empty. | string |
| IgnoreCase | When set, this value makes the ContentMatch validation case insensitive. | bool |
| PassIfTextFound | When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match | bool |


