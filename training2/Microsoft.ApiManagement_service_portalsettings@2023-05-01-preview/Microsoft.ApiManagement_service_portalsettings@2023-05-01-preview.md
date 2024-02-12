```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview"
  name = "delegation"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subscriptions = {
        enabled = bool
      }
      url = "string"
      userRegistration = {
        enabled = bool
      }
      validationKey = "string"
    }
  })
}

```

### service/portalsettings-delegation

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'delegation' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Delegation settings contract properties. | PortalDelegationSettingsProperties |


### PortalDelegationSettingsProperties

| Name | Description | Value |
|-|-|-|
| subscriptions | Subscriptions delegation settings. | SubscriptionsDelegationSettingsProperties |
| url | A delegation Url. | string |
| userRegistration | User registration delegation settings. | RegistrationDelegationSettingsProperties |
| validationKey | A base64-encoded validation key to validate, that a request is coming from Azure API Management. | string |


### SubscriptionsDelegationSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabled | Enable or disable delegation for subscriptions. | bool |


### RegistrationDelegationSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabled | Enable or disable delegation for user registration. | bool |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview"
  name = "signin"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
    }
  })
}

```

### service/portalsettings-signin

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'signin' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Sign-in settings contract properties. | PortalSigninSettingProperties |


### PortalSigninSettingProperties

| Name | Description | Value |
|-|-|-|
| enabled | Redirect Anonymous users to the Sign-In page. | bool |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview"
  name = "signup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      termsOfService = {
        consentRequired = bool
        enabled = bool
        text = "string"
      }
    }
  })
}

```

### service/portalsettings-signup

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'signup' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Sign-up settings contract properties. | PortalSignupSettingsProperties |


### PortalSignupSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabled | Allow users to sign up on a developer portal. | bool |
| termsOfService | Terms of service contract properties. | TermsOfServiceProperties |


### TermsOfServiceProperties

| Name | Description | Value |
|-|-|-|
| consentRequired | Ask user for consent to the terms of service. | bool |
| enabled | Display terms of service during a sign-up process. | bool |
| text | A terms of service text. | string |


