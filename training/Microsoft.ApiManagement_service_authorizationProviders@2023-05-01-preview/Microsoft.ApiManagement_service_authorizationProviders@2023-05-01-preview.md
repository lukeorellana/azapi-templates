```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationProviders@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      identityProvider = "string"
      oauth2 = {
        grantTypes = {
          authorizationCode = {
            {customized property} = "string"
          }
          clientCredentials = {
            {customized property} = "string"
          }
        }
        redirectUrl = "string"
      }
    }
  })
}

```

### service/authorizationProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Authorization Provider Contract. | AuthorizationProviderContractProperties |


### AuthorizationProviderContractProperties

| Name | Description | Value |
|-|-|-|
| displayName | Authorization Provider name. Must be 1 to 300 characters long. | string |
| identityProvider | Identity provider name. Must be 1 to 300 characters long. | string |
| oauth2 | OAuth2 settings | AuthorizationProviderOAuth2Settings |


### AuthorizationProviderOAuth2Settings

| Name | Description | Value |
|-|-|-|
| grantTypes | OAuth2 settings | AuthorizationProviderOAuth2GrantTypes |
| redirectUrl | Redirect URL to be set in the OAuth application. | string |


### AuthorizationProviderOAuth2GrantTypes

| Name | Description | Value |
|-|-|-|
| authorizationCode | OAuth2 authorization code grant parameters | AuthorizationProviderOAuth2GrantTypesAuthorizationCo... |
| clientCredentials | OAuth2 client credential grant parameters | AuthorizationProviderOAuth2GrantTypesClientCredentia... |


### AuthorizationProviderOAuth2GrantTypesAuthorizationCo...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AuthorizationProviderOAuth2GrantTypesClientCredentia...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


