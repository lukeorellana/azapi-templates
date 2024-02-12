```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      gatewayIds = [
        "string"
      ]
      httpsOnly = bool
      public = bool
      sourceUrls = [
        "string"
      ]
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

### Spring/apiPortals

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the API portal resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | API portal properties payload | ApiPortalProperties |


### ApiPortalProperties

| Name | Description | Value |
|-|-|-|
| gatewayIds | The array of resource Ids of gateway to integrate with API portal. | string[] |
| httpsOnly | Indicate if only https is allowed. | bool |
| public | Indicates whether the API portal exposes endpoint. | bool |
| sourceUrls | Collection of OpenAPI source URL locations. | string[] |
| ssoProperties | Single sign-on related configuration | SsoProperties |


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


