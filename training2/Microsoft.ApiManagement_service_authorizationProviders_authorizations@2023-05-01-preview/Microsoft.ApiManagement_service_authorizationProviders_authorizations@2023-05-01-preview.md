```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationProviders/authorizations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationType = "OAuth2"
      error = {
        code = "string"
        message = "string"
      }
      oauth2grantType = "string"
      parameters = {
        {customized property} = "string"
      }
      status = "string"
    }
  })
}

```

### service/authorizationProviders/authorizations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:authorizationProviders |
| properties | Properties of the Authorization Contract. | AuthorizationContractProperties |


### AuthorizationContractProperties

| Name | Description | Value |
|-|-|-|
| authorizationType | Authorization type options | 'OAuth2' |
| error | Authorization error details. | AuthorizationError |
| oauth2grantType | OAuth2 grant type options | 'AuthorizationCode''ClientCredentials' |
| parameters | Authorization parameters | AuthorizationContractPropertiesParameters |
| status | Status of the Authorization | string |


### AuthorizationError

| Name | Description | Value |
|-|-|-|
| code | Error code | string |
| message | Error message | string |


### AuthorizationContractPropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


