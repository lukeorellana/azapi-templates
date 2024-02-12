```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationServers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationEndpoint = "string"
      authorizationMethods = [
        "string"
      ]
      bearerTokenSendingMethods = [
        "string"
      ]
      clientAuthenticationMethod = [
        "string"
      ]
      clientId = "string"
      clientRegistrationEndpoint = "string"
      clientSecret = "string"
      defaultScope = "string"
      description = "string"
      displayName = "string"
      grantTypes = [
        "string"
      ]
      resourceOwnerPassword = "string"
      resourceOwnerUsername = "string"
      supportState = bool
      tokenBodyParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      tokenEndpoint = "string"
      useInApiDocumentation = bool
      useInTestConsole = bool
    }
  })
}

```

### service/authorizationServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the External OAuth authorization server Contract. | AuthorizationServerContractProperties |


### AuthorizationServerContractProperties

| Name | Description | Value |
|-|-|-|
| authorizationEndpoint | OAuth authorization endpoint. Seehttp://tools.ietf.org/html/rfc6749#section-3.2. | string (required) |
| authorizationMethods | HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional. | String array containing any of:'DELETE''GET''HEAD''OPTIONS''PATCH''POST''PUT''TRACE' |
| bearerTokenSendingMethods | Specifies the mechanism by which access token is passed to the API. | String array containing any of:'authorizationHeader''query' |
| clientAuthenticationMethod | Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format. | String array containing any of:'Basic''Body' |
| clientId | Client or app id registered with this authorization server. | string (required) |
| clientRegistrationEndpoint | Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced. | string (required) |
| clientSecret | Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |
| defaultScope | Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values. | string |
| description | Description of the authorization server. Can contain HTML formatting tags. | string |
| displayName | User-friendly authorization server name. | string (required) |
| grantTypes | Form of an authorization grant, which the client uses to request the access token. | String array containing any of:'authorizationCode''clientCredentials''implicit''resourceOwnerPassword' (required) |
| resourceOwnerPassword | Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password. | string |
| resourceOwnerUsername | Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username. | string |
| supportState | If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security. | bool |
| tokenBodyParameters | Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}. | TokenBodyParameterContract[] |
| tokenEndpoint | OAuth token endpoint. Contains absolute URI to entity being referenced. | string |
| useInApiDocumentation | If true, the authorization server will be used in the API documentation in the developer portal. False by default if no value is provided. | bool |
| useInTestConsole | If true, the authorization server may be used in the developer portal test console. True by default if no value is provided. | bool |


### TokenBodyParameterContract

| Name | Description | Value |
|-|-|-|
| name | body parameter name. | string (required) |
| value | body parameter value. | string (required) |


