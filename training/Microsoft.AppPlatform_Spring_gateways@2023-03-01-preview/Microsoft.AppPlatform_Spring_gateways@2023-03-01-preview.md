```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiMetadataProperties = {
        description = "string"
        documentation = "string"
        serverUrl = "string"
        title = "string"
        version = "string"
      }
      apmTypes = [
        "string"
      ]
      clientAuth = {
        certificates = [
          "string"
        ]
        certificateVerification = "string"
      }
      corsProperties = {
        allowCredentials = bool
        allowedHeaders = [
          "string"
        ]
        allowedMethods = [
          "string"
        ]
        allowedOrigins = [
          "string"
        ]
        exposedHeaders = [
          "string"
        ]
        maxAge = int
      }
      environmentVariables = {
        properties = {}
        secrets = {}
      }
      httpsOnly = bool
      public = bool
      resourceRequests = {
        cpu = "string"
        memory = "string"
      }
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        issuerUri = "string"
        scope = [
          "string"
        ]
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the Spring Cloud Gateway resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Spring Cloud Gateway properties payload | GatewayProperties |


### GatewayProperties

| Name | Description | Value |
|-|-|-|
| apiMetadataProperties | API metadata property for Spring Cloud Gateway | GatewayApiMetadataProperties |
| apmTypes | Collection of APM type used in Spring Cloud Gateway | String array containing any of:'AppDynamics''ApplicationInsights''Dynatrace''ElasticAPM''NewRelic' |
| clientAuth | Client-Certification Authentication. | GatewayPropertiesClientAuth |
| corsProperties | Cross-Origin Resource Sharing property | GatewayCorsProperties |
| environmentVariables | Environment variables of Spring Cloud Gateway | GatewayPropertiesEnvironmentVariables |
| httpsOnly | Indicate if only https is allowed. | bool |
| public | Indicates whether the Spring Cloud Gateway exposes endpoint. | bool |
| resourceRequests | The requested resource quantity for required CPU and Memory. | GatewayResourceRequests |
| ssoProperties | Single sign-on related configuration | SsoProperties |


### GatewayApiMetadataProperties

| Name | Description | Value |
|-|-|-|
| description | Detailed description of the APIs available on the Gateway instance (default:Generated OpenAPI 3 document that describes the API routes configured.) | string |
| documentation | Location of additional documentation for the APIs available on the Gateway instance | string |
| serverUrl | Base URL that API consumers will use to access APIs on the Gateway instance. | string |
| title | Title describing the context of the APIs available on the Gateway instance (default:Spring Cloud Gateway for K8S) | string |
| version | Version of APIs available on this Gateway instance (default:unspecified). | string |


### GatewayPropertiesClientAuth

| Name | Description | Value |
|-|-|-|
| certificates | Collection of certificate resource Ids in Azure Spring Apps. | string[] |
| certificateVerification | Whether to enable certificate verification or not | 'Disabled''Enabled' |


### GatewayCorsProperties

| Name | Description | Value |
|-|-|-|
| allowCredentials | Whether user credentials are supported on cross-site requests. Valid values:true,false. | bool |
| allowedHeaders | Allowed headers in cross-site requests. The special value*allows actual requests to send any header. | string[] |
| allowedMethods | Allowed HTTP methods on cross-site requests. The special value*allows all methods. If not set,GETandHEADare allowed by default. | string[] |
| allowedOrigins | Allowed origins to make cross-site requests. The special value*allows all domains. | string[] |
| exposedHeaders | HTTP response headers to expose for cross-site requests. | string[] |
| maxAge | How long, in seconds, the response from a pre-flight request can be cached by clients. | int |


### GatewayPropertiesEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| properties | Non-sensitive properties | object |
| secrets | Sensitive properties | object |


### GatewayResourceRequests

| Name | Description | Value |
|-|-|-|
| cpu | Cpu allocated to each Spring Cloud Gateway instance. | string |
| memory | Memory allocated to each Spring Cloud Gateway instance. | string |


### SsoProperties

| Name | Description | Value |
|-|-|-|
| clientId | The public identifier for the application | string |
| clientSecret | The secret known only to the application and the authorization server | string |
| issuerUri | The URI of Issuer Identifier | string |
| scope | It defines the specific actions applications can be allowed to do on a user's behalf | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |


