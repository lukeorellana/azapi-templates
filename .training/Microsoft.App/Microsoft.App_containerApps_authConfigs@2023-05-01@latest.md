```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps/authConfigs@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        unauthenticatedClientAction = "string"
      }
      httpSettings = {
        forwardProxy = {
          convention = "string"
          customHostHeaderName = "string"
          customProtoHeaderName = "string"
        }
        requireHttps = bool
        routes = {
          apiPrefix = "string"
        }
      }
      identityProviders = {
        apple = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        azureActiveDirectory = {
          enabled = bool
          isAutoProvisioned = bool
          login = {
            disableWWWAuthenticate = bool
            loginParameters = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretCertificateIssuer = "string"
            clientSecretCertificateSubjectAlternativeName = "string"
            clientSecretCertificateThumbprint = "string"
            clientSecretSettingName = "string"
            openIdIssuer = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
            defaultAuthorizationPolicy = {
              allowedApplications = [
                "string"
              ]
              allowedPrincipals = {
                groups = [
                  "string"
                ]
                identities = [
                  "string"
                ]
              }
            }
            jwtClaimChecks = {
              allowedClientApplications = [
                "string"
              ]
              allowedGroups = [
                "string"
              ]
            }
          }
        }
        azureStaticWebApps = {
          enabled = bool
          registration = {
            clientId = "string"
          }
        }
        customOpenIdConnectProviders = {}
        facebook = {
          enabled = bool
          graphApiVersion = "string"
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            appId = "string"
            appSecretSettingName = "string"
          }
        }
        gitHub = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        google = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
          }
        }
        twitter = {
          enabled = bool
          registration = {
            consumerKey = "string"
            consumerSecretSettingName = "string"
          }
        }
      }
      login = {
        allowedExternalRedirectUrls = [
          "string"
        ]
        cookieExpiration = {
          convention = "string"
          timeToExpiration = "string"
        }
        nonce = {
          nonceExpirationInterval = "string"
          validateNonce = bool
        }
        preserveUrlFragmentsForLogins = bool
        routes = {
          logoutEndpoint = "string"
        }
      }
      platform = {
        enabled = bool
        runtimeVersion = "string"
      }
    }
  })
}

```

### containerApps/authConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containerApps |
| properties | AuthConfig resource specific properties | AuthConfigProperties |


### AuthConfigProperties

| Name | Description | Value |
|-|-|-|
| globalValidation | The configuration settings that determines the validation flow of users using  Service Authentication/Authorization. | GlobalValidation |
| httpSettings | The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization. | HttpSettings |
| identityProviders | The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization. | IdentityProviders |
| login | The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization. | Login |
| platform | The configuration settings of the platform of ContainerApp Service Authentication/Authorization. | AuthPlatform |


### GlobalValidation

| Name | Description | Value |
|-|-|-|
| excludedPaths | The paths for which unauthenticated flow would not be redirected to the login page. | string[] |
| redirectToProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | string |
| unauthenticatedClientAction | The action to take when an unauthenticated client attempts to access the app. | 'AllowAnonymous''RedirectToLoginPage''Return401''Return403' |


### HttpSettings

| Name | Description | Value |
|-|-|-|
| forwardProxy | The configuration settings of a forward proxy used to make the requests. | ForwardProxy |
| requireHttps | falseif the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise,true. | bool |
| routes | The configuration settings of the paths HTTP requests. | HttpSettingsRoutes |


### ForwardProxy

| Name | Description | Value |
|-|-|-|
| convention | The convention used to determine the url of the request made. | 'Custom''NoProxy''Standard' |
| customHostHeaderName | The name of the header containing the host of the request. | string |
| customProtoHeaderName | The name of the header containing the scheme of the request. | string |


### HttpSettingsRoutes

| Name | Description | Value |
|-|-|-|
| apiPrefix | The prefix that should precede all the authentication/authorization paths. | string |


### IdentityProviders

| Name | Description | Value |
|-|-|-|
| apple | The configuration settings of the Apple provider. | Apple |
| azureActiveDirectory | The configuration settings of the Azure Active directory provider. | AzureActiveDirectory |
| azureStaticWebApps | The configuration settings of the Azure Static Web Apps provider. | AzureStaticWebApps |
| customOpenIdConnectProviders | The map of the name of the alias of each custom Open ID Connect provider to theconfiguration settings of the custom Open ID Connect provider. | object |
| facebook | The configuration settings of the Facebook provider. | Facebook |
| gitHub | The configuration settings of the GitHub provider. | GitHub |
| google | The configuration settings of the Google provider. | Google |
| twitter | The configuration settings of the Twitter provider. | Twitter |


### Apple

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Apple provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the Apple registration. | AppleRegistration |


### LoginScopes

| Name | Description | Value |
|-|-|-|
| scopes | A list of the scopes that should be requested while authenticating. | string[] |


### AppleRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of the app used for login. | string |
| clientSecretSettingName | The app setting name that contains the client secret. | string |


### AzureActiveDirectory

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Azure Active Directory provider should not be enabled despite the set registration; otherwise,true. | bool |
| isAutoProvisioned | Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.This is an internal flag primarily intended to support the Azure Management Portal. Users should notread or write to this property. | bool |
| login | The configuration settings of the Azure Active Directory login flow. | AzureActiveDirectoryLogin |
| registration | The configuration settings of the Azure Active Directory app registration. | AzureActiveDirectoryRegistration |
| validation | The configuration settings of the Azure Active Directory token validation flow. | AzureActiveDirectoryValidation |


### AzureActiveDirectoryLogin

| Name | Description | Value |
|-|-|-|
| disableWWWAuthenticate | trueif the www-authenticate provider should be omitted from the request; otherwise,false. | bool |
| loginParameters | Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value". | string[] |


### AzureActiveDirectoryRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecretCertificateIssuer | An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts asa replacement for the Client Secret Certificate Thumbprint. It is also optional. | string |
| clientSecretCertificateSubjectAlternativeName | An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts asa replacement for the Client Secret Certificate Thumbprint. It is also optional. | string |
| clientSecretCertificateThumbprint | An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional. | string |
| clientSecretSettingName | The app setting name that contains the client secret of the relying party application. | string |
| openIdIssuer | The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://login.microsoftonline.com/v2.0/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html | string |


### AzureActiveDirectoryValidation

| Name | Description | Value |
|-|-|-|
| allowedAudiences | The list of audiences that can make successful authentication/authorization requests. | string[] |
| defaultAuthorizationPolicy | The configuration settings of the default authorization policy. | DefaultAuthorizationPolicy |
| jwtClaimChecks | The configuration settings of the checks that should be made while validating the JWT Claims. | JwtClaimChecks |


### DefaultAuthorizationPolicy

| Name | Description | Value |
|-|-|-|
| allowedApplications | The configuration settings of the Azure Active Directory allowed applications. | string[] |
| allowedPrincipals | The configuration settings of the Azure Active Directory allowed principals. | AllowedPrincipals |


### AllowedPrincipals

| Name | Description | Value |
|-|-|-|
| groups | The list of the allowed groups. | string[] |
| identities | The list of the allowed identities. | string[] |


### JwtClaimChecks

| Name | Description | Value |
|-|-|-|
| allowedClientApplications | The list of the allowed client applications. | string[] |
| allowedGroups | The list of the allowed groups. | string[] |


### AzureStaticWebApps

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise,true. | bool |
| registration | The configuration settings of the Azure Static Web Apps registration. | AzureStaticWebAppsRegistration |


### AzureStaticWebAppsRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of the app used for login. | string |


### Facebook

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Facebook provider should not be enabled despite the set registration; otherwise,true. | bool |
| graphApiVersion | The version of the Facebook api to be used while logging in. | string |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the Facebook provider. | AppRegistration |


### AppRegistration

| Name | Description | Value |
|-|-|-|
| appId | The App ID of the app used for login. | string |
| appSecretSettingName | The app setting name that contains the app secret. | string |


### GitHub

| Name | Description | Value |
|-|-|-|
| enabled | falseif the GitHub provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the GitHub provider. | ClientRegistration |


### ClientRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of the app used for login. | string |
| clientSecretSettingName | The app setting name that contains the client secret. | string |


### Google

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Google provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the Google provider. | ClientRegistration |
| validation | The configuration settings of the Azure Active Directory token validation flow. | AllowedAudiencesValidation |


### AllowedAudiencesValidation

| Name | Description | Value |
|-|-|-|
| allowedAudiences | The configuration settings of the allowed list of audiences from which to validate the JWT token. | string[] |


### Twitter

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Twitter provider should not be enabled despite the set registration; otherwise,true. | bool |
| registration | The configuration settings of the app registration for the Twitter provider. | TwitterRegistration |


### TwitterRegistration

| Name | Description | Value |
|-|-|-|
| consumerKey | The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| consumerSecretSettingName | The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in. | string |


### Login

| Name | Description | Value |
|-|-|-|
| allowedExternalRedirectUrls | External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed. | string[] |
| cookieExpiration | The configuration settings of the session cookie's expiration. | CookieExpiration |
| nonce | The configuration settings of the nonce used in the login flow. | Nonce |
| preserveUrlFragmentsForLogins | trueif the fragments from the request are preserved after the login request is made; otherwise,false. | bool |
| routes | The routes that specify the endpoints used for login and logout requests. | LoginRoutes |


### CookieExpiration

| Name | Description | Value |
|-|-|-|
| convention | The convention used when determining the session cookie's expiration. | 'FixedTime''IdentityProviderDerived' |
| timeToExpiration | The time after the request is made when the session cookie should expire. | string |


### Nonce

| Name | Description | Value |
|-|-|-|
| nonceExpirationInterval | The time after the request is made when the nonce should expire. | string |
| validateNonce | falseif the nonce should not be validated while completing the login flow; otherwise,true. | bool |


### LoginRoutes

| Name | Description | Value |
|-|-|-|
| logoutEndpoint | The endpoint at which a logout request should be made. | string |


### AuthPlatform

| Name | Description | Value |
|-|-|-|
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |


