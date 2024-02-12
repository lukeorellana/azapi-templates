```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-appsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'appsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Settings. | object |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "authsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadClaimsAuthorization = "string"
      additionalLoginParams = [
        "string"
      ]
      allowedAudiences = [
        "string"
      ]
      allowedExternalRedirectUrls = [
        "string"
      ]
      authFilePath = "string"
      clientId = "string"
      clientSecret = "string"
      clientSecretCertificateThumbprint = "string"
      clientSecretSettingName = "string"
      configVersion = "string"
      defaultProvider = "string"
      enabled = bool
      facebookAppId = "string"
      facebookAppSecret = "string"
      facebookAppSecretSettingName = "string"
      facebookOAuthScopes = [
        "string"
      ]
      gitHubClientId = "string"
      gitHubClientSecret = "string"
      gitHubClientSecretSettingName = "string"
      gitHubOAuthScopes = [
        "string"
      ]
      googleClientId = "string"
      googleClientSecret = "string"
      googleClientSecretSettingName = "string"
      googleOAuthScopes = [
        "string"
      ]
      isAuthFromFile = "string"
      issuer = "string"
      microsoftAccountClientId = "string"
      microsoftAccountClientSecret = "string"
      microsoftAccountClientSecretSettingName = "string"
      microsoftAccountOAuthScopes = [
        "string"
      ]
      runtimeVersion = "string"
      tokenRefreshExtensionHours = int
      tokenStoreEnabled = bool
      twitterConsumerKey = "string"
      twitterConsumerSecret = "string"
      twitterConsumerSecretSettingName = "string"
      unauthenticatedClientAction = "string"
      validateIssuer = bool
    }
    kind = "string"
  })
}

```

### sites/slots/config-authsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'authsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteAuthSettings resource specific properties | SiteAuthSettingsProperties |


### SiteAuthSettingsProperties

| Name | Description | Value |
|-|-|-|
| aadClaimsAuthorization | Gets a JSON string containing the Azure AD Acl settings. | string |
| additionalLoginParams | Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value". | string[] |
| allowedAudiences | Allowed audience values to consider when validating JSON Web Tokens issued byAzure Active Directory. Note that theClientIDvalue is always considered anallowed audience, regardless of this setting. | string[] |
| allowedExternalRedirectUrls | External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed. | string[] |
| authFilePath | The path of the config file containing auth settings.If the path is relative, base will the site's root directory. | string |
| clientId | The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecret | The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecretCertificateThumbprint | An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional. | string |
| clientSecretSettingName | The app setting name that contains the client secret of the relying party application. | string |
| configVersion | The ConfigVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of the control plane for Authentication / Authorization. | string |
| defaultProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | 'AzureActiveDirectory''Facebook''Github''Google''MicrosoftAccount''Twitter' |
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| facebookAppId | The App ID of the Facebook app used for login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string |
| facebookAppSecret | The App Secret of the Facebook app used for Facebook Login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string |
| facebookAppSecretSettingName | The app setting name that contains the app secret used for Facebook Login. | string |
| facebookOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.This setting is optional.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string[] |
| gitHubClientId | The Client Id of the GitHub app used for login.This setting is required for enabling Github login | string |
| gitHubClientSecret | The Client Secret of the GitHub app used for Github Login.This setting is required for enabling Github login. | string |
| gitHubClientSecretSettingName | The app setting name that contains the client secret of the Githubapp used for GitHub Login. | string |
| gitHubOAuthScopes | The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.This setting is optional | string[] |
| googleClientId | The OpenID Connect Client ID for the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string |
| googleClientSecret | The client secret associated with the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string |
| googleClientSecretSettingName | The app setting name that contains the client secret associated withthe Google web application. | string |
| googleOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string[] |
| isAuthFromFile | "true" if the auth config settings should be read from a file,"false" otherwise | string |
| issuer | The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://sts.windows.net/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html | string |
| microsoftAccountClientId | The OAuth 2.0 client ID that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm | string |
| microsoftAccountClientSecret | The OAuth 2.0 client secret that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm | string |
| microsoftAccountClientSecretSettingName | The app setting name containing the OAuth 2.0 client secret that was created for theapp used for authentication. | string |
| microsoftAccountOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.This setting is optional. If not specified, "wl.basic" is used as the default scope.Microsoft Account Scopes and permissions documentation:https://msdn.microsoft.com/library/dn631845.aspx | string[] |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |
| tokenRefreshExtensionHours | The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours. | int |
| tokenStoreEnabled | trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse. | bool |
| twitterConsumerKey | The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| twitterConsumerSecret | The OAuth 1.0a consumer secret of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| twitterConsumerSecretSettingName | The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in. | string |
| unauthenticatedClientAction | The action to take when an unauthenticated client attempts to access the app. | 'AllowAnonymous''RedirectToLoginPage' |
| validateIssuer | Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such. | bool |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "authsettingsV2"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        requireAuthentication = bool
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
        legacyMicrosoftAccount = {
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
        tokenStore = {
          azureBlobStorage = {
            sasUrlSettingName = "string"
          }
          enabled = bool
          fileSystem = {
            directory = "string"
          }
          tokenRefreshExtensionHours = int
        }
      }
      platform = {
        configFilePath = "string"
        enabled = bool
        runtimeVersion = "string"
      }
    }
    kind = "string"
  })
}

```

### sites/slots/config-authsettingsV2

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'authsettingsV2' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteAuthSettingsV2 resource specific properties | SiteAuthSettingsV2Properties |


### SiteAuthSettingsV2Properties

| Name | Description | Value |
|-|-|-|
| globalValidation | The configuration settings that determines the validation flow of users using App Service Authentication/Authorization. | GlobalValidation |
| httpSettings | The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization. | HttpSettings |
| identityProviders | The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization. | IdentityProviders |
| login | The configuration settings of the login flow of users using App Service Authentication/Authorization. | Login |
| platform | The configuration settings of the platform of App Service Authentication/Authorization. | AuthPlatform |


### GlobalValidation

| Name | Description | Value |
|-|-|-|
| excludedPaths | The paths for which unauthenticated flow would not be redirected to the login page. | string[] |
| redirectToProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | string |
| requireAuthentication | trueif the authentication flow is required any request is made; otherwise,false. | bool |
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
| legacyMicrosoftAccount | The configuration settings of the legacy Microsoft Account provider. | LegacyMicrosoftAccount |
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


### LegacyMicrosoftAccount

| Name | Description | Value |
|-|-|-|
| enabled | falseif the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the legacy Microsoft Account provider. | ClientRegistration |
| validation | The configuration settings of the legacy Microsoft Account provider token validation flow. | AllowedAudiencesValidation |


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
| tokenStore | The configuration settings of the token store. | TokenStore |


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


### TokenStore

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | The configuration settings of the storage of the tokens if blob storage is used. | BlobStorageTokenStore |
| enabled | trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse. | bool |
| fileSystem | The configuration settings of the storage of the tokens if a file system is used. | FileSystemTokenStore |
| tokenRefreshExtensionHours | The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours. | int |


### BlobStorageTokenStore

| Name | Description | Value |
|-|-|-|
| sasUrlSettingName | The name of the app setting containing the SAS URL of the blob storage containing the tokens. | string |


### FileSystemTokenStore

| Name | Description | Value |
|-|-|-|
| directory | The directory in which the tokens will be stored. | string |


### AuthPlatform

| Name | Description | Value |
|-|-|-|
| configFilePath | The path of the config file containing auth settings if they come from a file.If the path is relative, base will the site's root directory. | string |
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "azurestorageaccounts"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-azurestorageaccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'azurestorageaccounts' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Azure storage accounts. | object |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "backup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupName = "string"
      backupSchedule = {
        frequencyInterval = int
        frequencyUnit = "string"
        keepAtLeastOneBackup = bool
        retentionPeriodInDays = int
        startTime = "string"
      }
      databases = [
        {
          connectionString = "string"
          connectionStringName = "string"
          databaseType = "string"
          name = "string"
        }
      ]
      enabled = bool
      storageAccountUrl = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/config-backup

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'backup' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | BackupRequest resource specific properties | BackupRequestProperties |


### BackupRequestProperties

| Name | Description | Value |
|-|-|-|
| backupName | Name of the backup. | string |
| backupSchedule | Schedule for the backup if it is executed periodically. | BackupSchedule |
| databases | Databases included in the backup. | DatabaseBackupSetting[] |
| enabled | True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled. | bool |
| storageAccountUrl | SAS URL to the container. | string (required) |


### BackupSchedule

| Name | Description | Value |
|-|-|-|
| frequencyInterval | How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day) | int (required) |
| frequencyUnit | The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7) | 'Day''Hour' (required) |
| keepAtLeastOneBackup | True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise. | bool (required) |
| retentionPeriodInDays | After how many days backups should be deleted. | int (required) |
| startTime | When the schedule should start working. | string |


### DatabaseBackupSetting

| Name | Description | Value |
|-|-|-|
| connectionString | Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. | string |
| connectionStringName | Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.This is used during restore with overwrite connection strings options. | string |
| databaseType | Database type (e.g. SqlAzure / MySql). | 'LocalMySql''MySql''PostgreSql''SqlAzure' (required) |
| name |  | string |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "connectionstrings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-connectionstrings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'connectionstrings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Connection strings. | object |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "logs"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationLogs = {
        azureBlobStorage = {
          level = "string"
          retentionInDays = int
          sasUrl = "string"
        }
        azureTableStorage = {
          level = "string"
          sasUrl = "string"
        }
        fileSystem = {
          level = "string"
        }
      }
      detailedErrorMessages = {
        enabled = bool
      }
      failedRequestsTracing = {
        enabled = bool
      }
      httpLogs = {
        azureBlobStorage = {
          enabled = bool
          retentionInDays = int
          sasUrl = "string"
        }
        fileSystem = {
          enabled = bool
          retentionInDays = int
          retentionInMb = int
        }
      }
    }
    kind = "string"
  })
}

```

### sites/slots/config-logs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'logs' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteLogsConfig resource specific properties | SiteLogsConfigProperties |


### SiteLogsConfigProperties

| Name | Description | Value |
|-|-|-|
| applicationLogs | Application logs configuration. | ApplicationLogsConfig |
| detailedErrorMessages | Detailed error messages configuration. | EnabledConfig |
| failedRequestsTracing | Failed requests tracing configuration. | EnabledConfig |
| httpLogs | HTTP logs configuration. | HttpLogsConfig |


### ApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | Application logs to blob storage configuration. | AzureBlobStorageApplicationLogsConfig |
| azureTableStorage | Application logs to azure table storage configuration. | AzureTableStorageApplicationLogsConfig |
| fileSystem | Application logs to file system configuration. | FileSystemApplicationLogsConfig |


### AzureBlobStorageApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |
| retentionInDays | Retention in days.Remove blobs older than X days.0 or lower means no retention. | int |
| sasUrl | SAS url to a azure blob container with read/write/list/delete permissions. | string |


### AzureTableStorageApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |
| sasUrl | SAS URL to an Azure table with add/query/delete permissions. | string (required) |


### FileSystemApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |


### EnabledConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |


### HttpLogsConfig

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | Http logs to azure blob storage configuration. | AzureBlobStorageHttpLogsConfig |
| fileSystem | Http logs to file system configuration. | FileSystemHttpLogsConfig |


### AzureBlobStorageHttpLogsConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |
| retentionInDays | Retention in days.Remove blobs older than X days.0 or lower means no retention. | int |
| sasUrl | SAS url to a azure blob container with read/write/list/delete permissions. | string |


### FileSystemHttpLogsConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |
| retentionInDays | Retention in days.Remove files older than X days.0 or lower means no retention. | int |
| retentionInMb | Maximum size in megabytes that http log files can use.When reached old log files will be removed to make space for new ones.Value can range between 25 and 100. | int |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "metadata"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-metadata

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'metadata' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Settings. | object |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "pushsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dynamicTagsJson = "string"
      isPushEnabled = bool
      tagsRequiringAuth = "string"
      tagWhitelistJson = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/config-pushsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'pushsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acrUseManagedIdentityCreds = bool
      acrUserManagedIdentityID = "string"
      alwaysOn = bool
      apiDefinition = {
        url = "string"
      }
      apiManagementConfig = {
        id = "string"
      }
      appCommandLine = "string"
      appSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      autoHealEnabled = bool
      autoHealRules = {
        actions = {
          actionType = "string"
          customAction = {
            exe = "string"
            parameters = "string"
          }
          minProcessExecutionTime = "string"
        }
        triggers = {
          privateBytesInKB = int
          requests = {
            count = int
            timeInterval = "string"
          }
          slowRequests = {
            count = int
            path = "string"
            timeInterval = "string"
            timeTaken = "string"
          }
          slowRequestsWithPath = [
            {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
          ]
          statusCodes = [
            {
              count = int
              path = "string"
              status = int
              subStatus = int
              timeInterval = "string"
              win32Status = int
            }
          ]
          statusCodesRange = [
            {
              count = int
              path = "string"
              statusCodes = "string"
              timeInterval = "string"
            }
          ]
        }
      }
      autoSwapSlotName = "string"
      azureStorageAccounts = {}
      connectionStrings = [
        {
          connectionString = "string"
          name = "string"
          type = "string"
        }
      ]
      cors = {
        allowedOrigins = [
          "string"
        ]
        supportCredentials = bool
      }
      defaultDocuments = [
        "string"
      ]
      detailedErrorLoggingEnabled = bool
      documentRoot = "string"
      elasticWebAppScaleLimit = int
      experiments = {
        rampUpRules = [
          {
            actionHostName = "string"
            changeDecisionCallbackUrl = "string"
            changeIntervalInMinutes = int
            changeStep = int
            maxReroutePercentage = int
            minReroutePercentage = int
            name = "string"
            reroutePercentage = int
          }
        ]
      }
      ftpsState = "string"
      functionAppScaleLimit = int
      functionsRuntimeScaleMonitoringEnabled = bool
      handlerMappings = [
        {
          arguments = "string"
          extension = "string"
          scriptProcessor = "string"
        }
      ]
      healthCheckPath = "string"
      http20Enabled = bool
      httpLoggingEnabled = bool
      ipSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      ipSecurityRestrictionsDefaultAction = "string"
      javaContainer = "string"
      javaContainerVersion = "string"
      javaVersion = "string"
      keyVaultReferenceIdentity = "string"
      limits = {
        maxDiskSizeInMb = int
        maxMemoryInMb = int
        maxPercentageCpu = int
      }
      linuxFxVersion = "string"
      loadBalancing = "string"
      localMySqlEnabled = bool
      logsDirectorySizeLimit = int
      managedPipelineMode = "string"
      managedServiceIdentityId = int
      metadata = [
        {
          name = "string"
          value = "string"
        }
      ]
      minimumElasticInstanceCount = int
      minTlsVersion = "string"
      netFrameworkVersion = "string"
      nodeVersion = "string"
      numberOfWorkers = int
      phpVersion = "string"
      powerShellVersion = "string"
      preWarmedInstanceCount = int
      publicNetworkAccess = "string"
      publishingUsername = "string"
      push = {
        kind = "string"
        properties = {
          dynamicTagsJson = "string"
          isPushEnabled = bool
          tagsRequiringAuth = "string"
          tagWhitelistJson = "string"
        }
      }
      pythonVersion = "string"
      remoteDebuggingEnabled = bool
      remoteDebuggingVersion = "string"
      requestTracingEnabled = bool
      requestTracingExpirationTime = "string"
      scmIpSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      scmIpSecurityRestrictionsDefaultAction = "string"
      scmIpSecurityRestrictionsUseMain = bool
      scmMinTlsVersion = "string"
      scmType = "string"
      tracingOptions = "string"
      use32BitWorkerProcess = bool
      virtualApplications = [
        {
          physicalPath = "string"
          preloadEnabled = bool
          virtualDirectories = [
            {
              physicalPath = "string"
              virtualPath = "string"
            }
          ]
          virtualPath = "string"
        }
      ]
      vnetName = "string"
      vnetPrivatePortsCount = int
      vnetRouteAllEnabled = bool
      websiteTimeZone = "string"
      webSocketsEnabled = bool
      windowsFxVersion = "string"
      xManagedServiceIdentityId = int
    }
    kind = "string"
  })
}

```

### sites/slots/config-web

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'web' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Core resource properties | SiteConfig |


### SiteConfig

| Name | Description | Value |
|-|-|-|
| acrUseManagedIdentityCreds | Flag to use Managed Identity Creds for ACR pull | bool |
| acrUserManagedIdentityID | If using user managed identity, the user managed identity ClientId | string |
| alwaysOn | trueif Always On is enabled; otherwise,false. | bool |
| apiDefinition | Information about the formal API definition for the app. | ApiDefinitionInfo |
| apiManagementConfig | Azure API management settings linked to the app. | ApiManagementConfig |
| appCommandLine | App command line to launch. | string |
| appSettings | Application settings. | NameValuePair[] |
| autoHealEnabled | trueif Auto Heal is enabled; otherwise,false. | bool |
| autoHealRules | Auto Heal rules. | AutoHealRules |
| autoSwapSlotName | Auto-swap slot name. | string |
| azureStorageAccounts | List of Azure Storage Accounts. | object |
| connectionStrings | Connection strings. | ConnStringInfo[] |
| cors | Cross-Origin Resource Sharing (CORS) settings. | CorsSettings |
| defaultDocuments | Default documents. | string[] |
| detailedErrorLoggingEnabled | trueif detailed error logging is enabled; otherwise,false. | bool |
| documentRoot | Document root. | string |
| elasticWebAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue | int |
| experiments | This is work around for polymorphic types. | Experiments |
| ftpsState | State of FTP / FTPS service | 'AllAllowed''Disabled''FtpsOnly' |
| functionAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans | int |
| functionsRuntimeScaleMonitoringEnabled | Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status. | bool |
| handlerMappings | Handler mappings. | HandlerMapping[] |
| healthCheckPath | Health check path | string |
| http20Enabled | Http20Enabled: configures a web site to allow clients to connect over http2.0 | bool |
| httpLoggingEnabled | trueif HTTP logging is enabled; otherwise,false. | bool |
| ipSecurityRestrictions | IP security restrictions for main. | IpSecurityRestriction[] |
| ipSecurityRestrictionsDefaultAction | Default action for main access restriction if no rules are matched. | 'Allow''Deny' |
| javaContainer | Java container. | string |
| javaContainerVersion | Java container version. | string |
| javaVersion | Java version. | string |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| limits | Site limits. | SiteLimits |
| linuxFxVersion | Linux App Framework and version | string |
| loadBalancing | Site load balancing. | 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic' |
| localMySqlEnabled | trueto enable local MySQL; otherwise,false. | bool |
| logsDirectorySizeLimit | HTTP logs directory size limit. | int |
| managedPipelineMode | Managed pipeline mode. | 'Classic''Integrated' |
| managedServiceIdentityId | Managed Service Identity Id | int |
| metadata | Application metadata. This property cannot be retrieved, since it may contain secrets. | NameValuePair[] |
| minimumElasticInstanceCount | Number of minimum instance count for a siteThis setting only applies to the Elastic Plans | int |
| minTlsVersion | MinTlsVersion: configures the minimum version of TLS required for SSL requests | '1.0''1.1''1.2' |
| netFrameworkVersion | .NET Framework version. | string |
| nodeVersion | Version of Node.js. | string |
| numberOfWorkers | Number of workers. | int |
| phpVersion | Version of PHP. | string |
| powerShellVersion | Version of PowerShell. | string |
| preWarmedInstanceCount | Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans | int |
| publicNetworkAccess | Property to allow or block all public traffic. | string |
| publishingUsername | Publishing user name. | string |
| push | Push endpoint settings. | PushSettings |
| pythonVersion | Version of Python. | string |
| remoteDebuggingEnabled | trueif remote debugging is enabled; otherwise,false. | bool |
| remoteDebuggingVersion | Remote debugging version. | string |
| requestTracingEnabled | trueif request tracing is enabled; otherwise,false. | bool |
| requestTracingExpirationTime | Request tracing expiration time. | string |
| scmIpSecurityRestrictions | IP security restrictions for scm. | IpSecurityRestriction[] |
| scmIpSecurityRestrictionsDefaultAction | Default action for scm access restriction if no rules are matched. | 'Allow''Deny' |
| scmIpSecurityRestrictionsUseMain | IP security restrictions for scm to use main. | bool |
| scmMinTlsVersion | ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site | '1.0''1.1''1.2' |
| scmType | SCM type. | 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM' |
| tracingOptions | Tracing options. | string |
| use32BitWorkerProcess | trueto use 32-bit worker process; otherwise,false. | bool |
| virtualApplications | Virtual applications. | VirtualApplication[] |
| vnetName | Virtual Network name. | string |
| vnetPrivatePortsCount | The number of private ports assigned to this app. These will be assigned dynamically on runtime. | int |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |
| websiteTimeZone | Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones | string |
| webSocketsEnabled | trueif WebSocket is enabled; otherwise,false. | bool |
| windowsFxVersion | Xenon App Framework and version | string |
| xManagedServiceIdentityId | Explicit Managed Service Identity Id | int |


### ApiDefinitionInfo

| Name | Description | Value |
|-|-|-|
| url | The URL of the API definition. | string |


### ApiManagementConfig

| Name | Description | Value |
|-|-|-|
| id | APIM-Api Identifier. | string |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### AutoHealRules

| Name | Description | Value |
|-|-|-|
| actions | Actions to be executed when a rule is triggered. | AutoHealActions |
| triggers | Conditions that describe when to execute the auto-heal actions. | AutoHealTriggers |


### AutoHealActions

| Name | Description | Value |
|-|-|-|
| actionType | Predefined action to be taken. | 'CustomAction''LogEvent''Recycle' |
| customAction | Custom action to be taken. | AutoHealCustomAction |
| minProcessExecutionTime | Minimum time the process must executebefore taking the action | string |


### AutoHealCustomAction

| Name | Description | Value |
|-|-|-|
| exe | Executable to be run. | string |
| parameters | Parameters for the executable. | string |


### AutoHealTriggers

| Name | Description | Value |
|-|-|-|
| privateBytesInKB | A rule based on private bytes. | int |
| requests | A rule based on total requests. | RequestsBasedTrigger |
| slowRequests | A rule based on request execution time. | SlowRequestsBasedTrigger |
| slowRequestsWithPath | A rule based on multiple Slow Requests Rule with path | SlowRequestsBasedTrigger[] |
| statusCodes | A rule based on status codes. | StatusCodesBasedTrigger[] |
| statusCodesRange | A rule based on status codes ranges. | StatusCodesRangeBasedTrigger[] |


### RequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| timeInterval | Time interval. | string |


### SlowRequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path. | string |
| timeInterval | Time interval. | string |
| timeTaken | Time taken. | string |


### StatusCodesBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path | string |
| status | HTTP status code. | int |
| subStatus | Request Sub Status. | int |
| timeInterval | Time interval. | string |
| win32Status | Win32 error code. | int |


### StatusCodesRangeBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path |  | string |
| statusCodes | HTTP status code. | string |
| timeInterval | Time interval. | string |


### ConnStringInfo

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string value. | string |
| name | Name of connection string. | string |
| type | Type of database. | 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus' |


### CorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all. | string[] |
| supportCredentials | Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details. | bool |


### Experiments

| Name | Description | Value |
|-|-|-|
| rampUpRules | List of ramp-up rules. | RampUpRule[] |


### RampUpRule

| Name | Description | Value |
|-|-|-|
| actionHostName | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | string |
| changeDecisionCallbackUrl | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/ | string |
| changeIntervalInMinutes | Specifies interval in minutes to reevaluate ReroutePercentage. | int |
| changeStep | In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl. | int |
| maxReroutePercentage | Specifies upper boundary below which ReroutePercentage will stay. | int |
| minReroutePercentage | Specifies lower boundary above which ReroutePercentage will stay. | int |
| name | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | string |
| reroutePercentage | Percentage of the traffic which will be redirected toActionHostName. | int |


### HandlerMapping

| Name | Description | Value |
|-|-|-|
| arguments | Command-line arguments to be passed to the script processor. | string |
| extension | Requests with this extension will be handled using the specified FastCGI application. | string |
| scriptProcessor | The absolute path to the FastCGI application. | string |


### IpSecurityRestriction

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny access for this IP range. | string |
| description | IP restriction rule description. | string |
| headers | IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match. | object |
| ipAddress | IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified. | string |
| name | IP restriction rule name. | string |
| priority | Priority of IP restriction rule. | int |
| subnetMask | Subnet mask for the range of IP addresses the restriction is valid for. | string |
| subnetTrafficTag | (internal) Subnet traffic tag | int |
| tag | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | 'Default''ServiceTag''XffProxy' |
| vnetSubnetResourceId | Virtual network resource id | string |
| vnetTrafficTag | (internal) Vnet traffic tag | int |


### SiteLimits

| Name | Description | Value |
|-|-|-|
| maxDiskSizeInMb | Maximum allowed disk size usage in MB. | int |
| maxMemoryInMb | Maximum allowed memory usage in MB. | int |
| maxPercentageCpu | Maximum allowed CPU usage percentage. | int |


### PushSettings

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


### VirtualApplication

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| preloadEnabled | trueif preloading is enabled; otherwise,false. | bool |
| virtualDirectories | Virtual directories for virtual application. | VirtualDirectory[] |
| virtualPath | Virtual path. | string |


### VirtualDirectory

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| virtualPath | Path to virtual application. | string |


