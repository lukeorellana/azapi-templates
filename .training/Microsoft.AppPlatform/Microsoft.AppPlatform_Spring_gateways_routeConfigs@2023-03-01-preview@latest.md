```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appResourceId = "string"
      filters = [
        "string"
      ]
      openApi = {
        uri = "string"
      }
      predicates = [
        "string"
      ]
      protocol = "string"
      routes = [
        {
          description = "string"
          filters = [
            "string"
          ]
          order = int
          predicates = [
            "string"
          ]
          ssoEnabled = bool
          tags = [
            "string"
          ]
          title = "string"
          tokenRelay = bool
          uri = "string"
        }
      ]
      ssoEnabled = bool
    }
  })
}

```

### Spring/gateways/routeConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | API route config of the Spring Cloud Gateway | GatewayRouteConfigProperties |


### GatewayRouteConfigProperties

| Name | Description | Value |
|-|-|-|
| appResourceId | The resource Id of the Azure Spring Apps app, required unless route definesuri. | string |
| filters | To modify the request before sending it to the target endpoint, or the received response in app level. | string[] |
| openApi | OpenAPI properties of Spring Cloud Gateway route config. | GatewayRouteConfigOpenApiProperties |
| predicates | A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request. | string[] |
| protocol | Protocol of routed Azure Spring Apps applications. | 'HTTP''HTTPS' |
| routes | Array of API routes, each route contains properties such astitle,uri,ssoEnabled,predicates,filters. | GatewayApiRoute[] |
| ssoEnabled | Enable Single Sign-On in app level. | bool |


### GatewayRouteConfigOpenApiProperties

| Name | Description | Value |
|-|-|-|
| uri | The URI of OpenAPI specification. | string |


### GatewayApiRoute

| Name | Description | Value |
|-|-|-|
| description | A description, will be applied to methods in the generated OpenAPI documentation. | string |
| filters | To modify the request before sending it to the target endpoint, or the received response. | string[] |
| order | Route processing order. | int |
| predicates | A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request. | string[] |
| ssoEnabled | Enable sso validation. | bool |
| tags | Classification tags, will be applied to methods in the generated OpenAPI documentation. | string[] |
| title | A title, will be applied to methods in the generated OpenAPI documentation. | string |
| tokenRelay | Pass currently-authenticated user's identity token to application service, default is 'false' | bool |
| uri | Full uri, will overrideappName. | string |


