```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalconfigs@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        allowedOrigins = [
          "string"
        ]
      }
      csp = {
        allowedSources = [
          "string"
        ]
        mode = "string"
        reportUri = [
          "string"
        ]
      }
      delegation = {
        delegateRegistration = bool
        delegateSubscription = bool
        delegationUrl = "string"
        validationKey = "string"
      }
      enableBasicAuth = bool
      signin = {
        require = bool
      }
      signup = {
        termsOfService = {
          requireConsent = bool
          text = "string"
        }
      }
    }
  })
}

```

### service/portalconfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | The developer portal configuration contract properties. | PortalConfigProperties |


### PortalConfigProperties

| Name | Description | Value |
|-|-|-|
| cors | The developer portal Cross-Origin Resource Sharing (CORS) settings. | PortalConfigCorsProperties |
| csp | The developer portal Content Security Policy (CSP) settings. | PortalConfigCspProperties |
| delegation | The developer portal delegation settings. | PortalConfigDelegationProperties |
| enableBasicAuth | Enable or disable Basic authentication method. | bool |
| signin |  | PortalConfigPropertiesSignin |
| signup |  | PortalConfigPropertiesSignup |


### PortalConfigCorsProperties

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Allowed origins, e.g.https://trusted.com. | string[] |


### PortalConfigCspProperties

| Name | Description | Value |
|-|-|-|
| allowedSources | Allowed sources, e.g.*.trusted.com,trusted.com,https://. | string[] |
| mode | The mode of the developer portal Content Security Policy (CSP). | 'disabled''enabled''reportOnly' |
| reportUri | The URLs used by the browser to report CSP violations. | string[] |


### PortalConfigDelegationProperties

| Name | Description | Value |
|-|-|-|
| delegateRegistration | Enable or disable delegation for user registration. | bool |
| delegateSubscription | Enable or disable delegation for product subscriptions. | bool |
| delegationUrl | A delegation endpoint URL. | string |
| validationKey | A base64-encoded validation key to ensure requests originate from Azure API Management service. | string |


### PortalConfigPropertiesSignin

| Name | Description | Value |
|-|-|-|
| require | Redirect anonymous users to the sign-in page. | bool |


### PortalConfigPropertiesSignup

| Name | Description | Value |
|-|-|-|
| termsOfService | Terms of service settings. | PortalConfigTermsOfServiceProperties |


### PortalConfigTermsOfServiceProperties

| Name | Description | Value |
|-|-|-|
| requireConsent | Ask user for consent to the terms of service. | bool |
| text | A terms of service text. | string |


