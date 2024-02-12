```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/identityProviders@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowedTenants = [
        "string"
      ]
      authority = "string"
      clientId = "string"
      clientLibrary = "string"
      clientSecret = "string"
      passwordResetPolicyName = "string"
      profileEditingPolicyName = "string"
      signinPolicyName = "string"
      signinTenant = "string"
      signupPolicyName = "string"
      type = "string"
    }
  })
}

```

### service/identityProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Identity Provider contract properties. | IdentityProviderCreateContractPropertiesOrIdentityPr... |


### IdentityProviderCreateContractPropertiesOrIdentityPr...

| Name | Description | Value |
|-|-|-|
| allowedTenants | List of Allowed Tenants when configuring Azure Active Directory login. | string[] |
| authority | OpenID Connect discovery endpoint hostname for AAD or AAD B2C. | string |
| clientId | Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft. | string (required) |
| clientLibrary | The client library to be used in the developer portal. Only applies to AAD and AAD B2C Identity Provider. | string |
| clientSecret | Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string (required) |
| passwordResetPolicyName | Password Reset Policy Name. Only applies to AAD B2C Identity Provider. | string |
| profileEditingPolicyName | Profile Editing Policy Name. Only applies to AAD B2C Identity Provider. | string |
| signinPolicyName | Signin Policy Name. Only applies to AAD B2C Identity Provider. | string |
| signinTenant | The TenantId to use instead of Common when logging into Active Directory | string |
| signupPolicyName | Signup Policy Name. Only applies to AAD B2C Identity Provider. | string |
| type | Identity Provider Type identifier. | 'aad''aadB2C''facebook''google''microsoft''twitter' |


