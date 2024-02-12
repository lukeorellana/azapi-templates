```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiRevision = "string"
      apiRevisionDescription = "string"
      apiType = "string"
      apiVersion = "string"
      apiVersionDescription = "string"
      apiVersionSet = {
        description = "string"
        id = "string"
        name = "string"
        versionHeaderName = "string"
        versioningScheme = "string"
        versionQueryName = "string"
      }
      apiVersionSetId = "string"
      authenticationSettings = {
        oAuth2 = {
          authorizationServerId = "string"
          scope = "string"
        }
        oAuth2AuthenticationSettings = [
          {
            authorizationServerId = "string"
            scope = "string"
          }
        ]
        openid = {
          bearerTokenSendingMethods = [
            "string"
          ]
          openidProviderId = "string"
        }
        openidAuthenticationSettings = [
          {
            bearerTokenSendingMethods = [
              "string"
            ]
            openidProviderId = "string"
          }
        ]
      }
      contact = {
        email = "string"
        name = "string"
        url = "string"
      }
      description = "string"
      displayName = "string"
      format = "string"
      isCurrent = bool
      license = {
        name = "string"
        url = "string"
      }
      path = "string"
      protocols = [
        "string"
      ]
      serviceUrl = "string"
      sourceApiId = "string"
      subscriptionKeyParameterNames = {
        header = "string"
        query = "string"
      }
      subscriptionRequired = bool
      termsOfServiceUrl = "string"
      translateRequiredQueryParameters = "string"
      type = "string"
      value = "string"
      wsdlSelector = {
        wsdlEndpointName = "string"
        wsdlServiceName = "string"
      }
    }
  })
}

```

### service/apis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | API entity create of update properties. | ApiCreateOrUpdatePropertiesOrApiContractProperties |


### ApiCreateOrUpdatePropertiesOrApiContractProperties

| Name | Description | Value |
|-|-|-|
| apiRevision | Describes the revision of the API. If no value is provided, default revision 1 is created | string |
| apiRevisionDescription | Description of the API Revision. | string |
| apiType | Type of API to create.*httpcreates a REST API*soapcreates a SOAP pass-through API*websocketcreates websocket API*graphqlcreates GraphQL API.New types can be added in the future. | 'graphql''grpc''http''odata''soap''websocket' |
| apiVersion | Indicates the version identifier of the API if the API is versioned | string |
| apiVersionDescription | Description of the API Version. | string |
| apiVersionSet | Version set details | ApiVersionSetContractDetails |
| apiVersionSetId | A resource identifier for the related ApiVersionSet. | string |
| authenticationSettings | Collection of authentication settings included into this API. | AuthenticationSettingsContract |
| contact | Contact information for the API. | ApiContactInformation |
| description | Description of the API. May include HTML formatting tags. | string |
| displayName | API name. Must be 1 to 300 characters long. | string |
| format | Format of the Content in which the API is getting imported. New formats can be added in the future | 'graphql-link''grpc''grpc-link''odata''odata-link''openapi''openapi+json''openapi+json-link''openapi-link''swagger-json''swagger-link-json''wadl-link-json''wadl-xml''wsdl''wsdl-link' |
| isCurrent | Indicates if API revision is current api revision. | bool |
| license | License information for the API. | ApiLicenseInformation |
| path | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | string (required) |
| protocols | Describes on which protocols the operations in this API can be invoked. | String array containing any of:'http''https''ws''wss' |
| serviceUrl | Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. | string |
| sourceApiId | API identifier of the source API. | string |
| subscriptionKeyParameterNames | Protocols over which API is made available. | SubscriptionKeyParameterNamesContract |
| subscriptionRequired | Specifies whether an API or Product subscription is required for accessing the API. | bool |
| termsOfServiceUrl | A URL to the Terms of Service for the API. MUST be in the format of a URL. | string |
| translateRequiredQueryParameters | Strategy of translating required query parameters to template ones. By default has value 'template'. Possible values: 'template', 'query' | 'query''template' |
| type | Type of API. | 'graphql''grpc''http''odata''soap''websocket' |
| value | Content value when Importing an API. | string |
| wsdlSelector | Criteria to limit import of WSDL to a subset of the document. | ApiCreateOrUpdatePropertiesWsdlSelector |


### ApiVersionSetContractDetails

| Name | Description | Value |
|-|-|-|
| description | Description of API Version Set. | string |
| id | Identifier for existing API Version Set. Omit this value to create a new Version Set. | string |
| name | The display Name of the API Version Set. | string |
| versionHeaderName | Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader. | string |
| versioningScheme | An value that determines where the API Version identifier will be located in a HTTP request. | 'Header''Query''Segment' |
| versionQueryName | Name of query parameter that indicates the API Version if versioningScheme is set toquery. | string |


### AuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| oAuth2 | OAuth2 Authentication settings | OAuth2AuthenticationSettingsContract |
| oAuth2AuthenticationSettings | Collection of OAuth2 authentication settings included into this API. | OAuth2AuthenticationSettingsContract[] |
| openid | OpenID Connect Authentication Settings | OpenIdAuthenticationSettingsContract |
| openidAuthenticationSettings | Collection of Open ID Connect authentication settings included into this API. | OpenIdAuthenticationSettingsContract[] |


### OAuth2AuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| authorizationServerId | OAuth authorization server identifier. | string |
| scope | operations scope. | string |


### OpenIdAuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| bearerTokenSendingMethods | How to send token to the server. | String array containing any of:'authorizationHeader''query' |
| openidProviderId | OAuth authorization server identifier. | string |


### ApiContactInformation

| Name | Description | Value |
|-|-|-|
| email | The email address of the contact person/organization. MUST be in the format of an email address | string |
| name | The identifying name of the contact person/organization | string |
| url | The URL pointing to the contact information. MUST be in the format of a URL | string |


### ApiLicenseInformation

| Name | Description | Value |
|-|-|-|
| name | The license name used for the API | string |
| url | A URL to the license used for the API. MUST be in the format of a URL | string |


### SubscriptionKeyParameterNamesContract

| Name | Description | Value |
|-|-|-|
| header | Subscription key header name. | string |
| query | Subscription key query string parameter name. | string |


### ApiCreateOrUpdatePropertiesWsdlSelector

| Name | Description | Value |
|-|-|-|
| wsdlEndpointName | Name of endpoint(port) to import from WSDL | string |
| wsdlServiceName | Name of service to import from WSDL | string |


