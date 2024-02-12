import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsConfigProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Gets a JSON string containing the Azure AD Acl settings.
   */
readonly aadClaimsAuthorization?: string;

/**
   * Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value".
   */
readonly additionalLoginParams?: string[];

/**
   * Allowed audience values to consider when validating JSON Web Tokens issued byAzure Active Directory. Note that theClientIDvalue is always considered anallowed audience, regardless of this setting.
   */
readonly allowedAudiences?: string[];

/**
   * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed.
   */
readonly allowedExternalRedirectUrls?: string[];

/**
   * The path of the config file containing auth settings.If the path is relative, base will the site's root directory.
   */
readonly authFilePath?: string;

/**
   * The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html
   */
readonly clientId?: string;

/**
   * The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html
   */
readonly clientSecret?: string;

/**
   * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional.
   */
readonly clientSecretCertificateThumbprint?: string;

/**
   * The app setting name that contains the client secret of the relying party application.
   */
readonly clientSecretSettingName?: string;

/**
   * The ConfigVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of the control plane for Authentication / Authorization.
   */
readonly configVersion?: string;

/**
   * The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage".
   */
readonly defaultProvider?: 'AzureActiveDirectory''Facebook''Github''Google''MicrosoftAccount''Twitter';

/**
   * trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false.
   */
readonly enabled?: bool;

/**
   * The App ID of the Facebook app used for login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login
   */
readonly facebookAppId?: string;

/**
   * The App Secret of the Facebook app used for Facebook Login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login
   */
readonly facebookAppSecret?: string;

/**
   * The app setting name that contains the app secret used for Facebook Login.
   */
readonly facebookAppSecretSettingName?: string;

/**
   * The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.This setting is optional.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login
   */
readonly facebookOAuthScopes?: string[];

/**
   * The Client Id of the GitHub app used for login.This setting is required for enabling Github login
   */
readonly gitHubClientId?: string;

/**
   * The Client Secret of the GitHub app used for Github Login.This setting is required for enabling Github login.
   */
readonly gitHubClientSecret?: string;

/**
   * The app setting name that contains the client secret of the Githubapp used for GitHub Login.
   */
readonly gitHubClientSecretSettingName?: string;

/**
   * The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.This setting is optional
   */
readonly gitHubOAuthScopes?: string[];

/**
   * The OpenID Connect Client ID for the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/
   */
readonly googleClientId?: string;

/**
   * The client secret associated with the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/
   */
readonly googleClientSecret?: string;

/**
   * The app setting name that contains the client secret associated withthe Google web application.
   */
readonly googleClientSecretSettingName?: string;

/**
   * The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/
   */
readonly googleOAuthScopes?: string[];

/**
   * "true" if the auth config settings should be read from a file,"false" otherwise
   */
readonly isAuthFromFile?: string;

/**
   * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://sts.windows.net/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html
   */
readonly issuer?: string;

/**
   * The OAuth 2.0 client ID that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm
   */
readonly microsoftAccountClientId?: string;

/**
   * The OAuth 2.0 client secret that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm
   */
readonly microsoftAccountClientSecret?: string;

/**
   * The app setting name containing the OAuth 2.0 client secret that was created for theapp used for authentication.
   */
readonly microsoftAccountClientSecretSettingName?: string;

/**
   * The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.This setting is optional. If not specified, "wl.basic" is used as the default scope.Microsoft Account Scopes and permissions documentation:https://msdn.microsoft.com/library/dn631845.aspx
   */
readonly microsoftAccountOAuthScopes?: string[];

/**
   * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
   */
readonly runtimeVersion?: string;

/**
   * The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours.
   */
readonly tokenRefreshExtensionHours?: number;

/**
   * trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse.
   */
readonly tokenStoreEnabled?: bool;

/**
   * The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in
   */
readonly twitterConsumerKey?: string;

/**
   * The OAuth 1.0a consumer secret of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in
   */
readonly twitterConsumerSecret?: string;

/**
   * The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in.
   */
readonly twitterConsumerSecretSettingName?: string;

/**
   * The action to take when an unauthenticated client attempts to access the app.
   */
readonly unauthenticatedClientAction?: 'AllowAnonymous''RedirectToLoginPage';

/**
   * Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.
   */
readonly validateIssuer?: bool;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
   */
readonly globalValidation?: GlobalValidation;

/**
   * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
   */
readonly httpSettings?: HttpSettings;

/**
   * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
   */
readonly identityProviders?: IdentityProviders;

/**
   * The configuration settings of the login flow of users using App Service Authentication/Authorization.
   */
readonly login?: Login;

/**
   * The configuration settings of the platform of App Service Authentication/Authorization.
   */
readonly platform?: AuthPlatform;

/**
   * The paths for which unauthenticated flow would not be redirected to the login page.
   */
readonly excludedPaths?: string[];

/**
   * The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage".
   */
readonly redirectToProvider?: string;

/**
   * trueif the authentication flow is required any request is made; otherwise,false.
   */
readonly requireAuthentication?: bool;

/**
   * The action to take when an unauthenticated client attempts to access the app.
   */
readonly unauthenticatedClientAction?: 'AllowAnonymous''RedirectToLoginPage''Return401''Return403';

/**
   * The configuration settings of a forward proxy used to make the requests.
   */
readonly forwardProxy?: ForwardProxy;

/**
   * falseif the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise,true.
   */
readonly requireHttps?: bool;

/**
   * The configuration settings of the paths HTTP requests.
   */
readonly routes?: HttpSettingsRoutes;

/**
   * The convention used to determine the url of the request made.
   */
readonly convention?: 'Custom''NoProxy''Standard';

/**
   * The name of the header containing the host of the request.
   */
readonly customHostHeaderName?: string;

/**
   * The name of the header containing the scheme of the request.
   */
readonly customProtoHeaderName?: string;

/**
   * The prefix that should precede all the authentication/authorization paths.
   */
readonly apiPrefix?: string;

/**
   * The configuration settings of the Apple provider.
   */
readonly apple?: Apple;

/**
   * The configuration settings of the Azure Active directory provider.
   */
readonly azureActiveDirectory?: AzureActiveDirectory;

/**
   * The configuration settings of the Azure Static Web Apps provider.
   */
readonly azureStaticWebApps?: AzureStaticWebApps;

/**
   * The map of the name of the alias of each custom Open ID Connect provider to theconfiguration settings of the custom Open ID Connect provider.
   */
readonly customOpenIdConnectProviders?: object;

/**
   * The configuration settings of the Facebook provider.
   */
readonly facebook?: Facebook;

/**
   * The configuration settings of the GitHub provider.
   */
readonly gitHub?: GitHub;

/**
   * The configuration settings of the Google provider.
   */
readonly google?: Google;

/**
   * The configuration settings of the legacy Microsoft Account provider.
   */
readonly legacyMicrosoftAccount?: LegacyMicrosoftAccount;

/**
   * The configuration settings of the Twitter provider.
   */
readonly twitter?: Twitter;

/**
   * falseif the Apple provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the login flow.
   */
readonly login?: LoginScopes;

/**
   * The configuration settings of the Apple registration.
   */
readonly registration?: AppleRegistration;

/**
   * A list of the scopes that should be requested while authenticating.
   */
readonly scopes?: string[];

/**
   * The Client ID of the app used for login.
   */
readonly clientId?: string;

/**
   * The app setting name that contains the client secret.
   */
readonly clientSecretSettingName?: string;

/**
   * falseif the Azure Active Directory provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.This is an internal flag primarily intended to support the Azure Management Portal. Users should notread or write to this property.
   */
readonly isAutoProvisioned?: bool;

/**
   * The configuration settings of the Azure Active Directory login flow.
   */
readonly login?: AzureActiveDirectoryLogin;

/**
   * The configuration settings of the Azure Active Directory app registration.
   */
readonly registration?: AzureActiveDirectoryRegistration;

/**
   * The configuration settings of the Azure Active Directory token validation flow.
   */
readonly validation?: AzureActiveDirectoryValidation;

/**
   * trueif the www-authenticate provider should be omitted from the request; otherwise,false.
   */
readonly disableWWWAuthenticate?: bool;

/**
   * Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value".
   */
readonly loginParameters?: string[];

/**
   * The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html
   */
readonly clientId?: string;

/**
   * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts asa replacement for the Client Secret Certificate Thumbprint. It is also optional.
   */
readonly clientSecretCertificateIssuer?: string;

/**
   * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts asa replacement for the Client Secret Certificate Thumbprint. It is also optional.
   */
readonly clientSecretCertificateSubjectAlternativeName?: string;

/**
   * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional.
   */
readonly clientSecretCertificateThumbprint?: string;

/**
   * The app setting name that contains the client secret of the relying party application.
   */
readonly clientSecretSettingName?: string;

/**
   * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://login.microsoftonline.com/v2.0/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html
   */
readonly openIdIssuer?: string;

/**
   * The list of audiences that can make successful authentication/authorization requests.
   */
readonly allowedAudiences?: string[];

/**
   * The configuration settings of the default authorization policy.
   */
readonly defaultAuthorizationPolicy?: DefaultAuthorizationPolicy;

/**
   * The configuration settings of the checks that should be made while validating the JWT Claims.
   */
readonly jwtClaimChecks?: JwtClaimChecks;

/**
   * The configuration settings of the Azure Active Directory allowed applications.
   */
readonly allowedApplications?: string[];

/**
   * The configuration settings of the Azure Active Directory allowed principals.
   */
readonly allowedPrincipals?: AllowedPrincipals;

/**
   * The list of the allowed groups.
   */
readonly groups?: string[];

/**
   * The list of the allowed identities.
   */
readonly identities?: string[];

/**
   * The list of the allowed client applications.
   */
readonly allowedClientApplications?: string[];

/**
   * The list of the allowed groups.
   */
readonly allowedGroups?: string[];

/**
   * falseif the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the Azure Static Web Apps registration.
   */
readonly registration?: AzureStaticWebAppsRegistration;

/**
   * The Client ID of the app used for login.
   */
readonly clientId?: string;

/**
   * falseif the Facebook provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The version of the Facebook api to be used while logging in.
   */
readonly graphApiVersion?: string;

/**
   * The configuration settings of the login flow.
   */
readonly login?: LoginScopes;

/**
   * The configuration settings of the app registration for the Facebook provider.
   */
readonly registration?: AppRegistration;

/**
   * The App ID of the app used for login.
   */
readonly appId?: string;

/**
   * The app setting name that contains the app secret.
   */
readonly appSecretSettingName?: string;

/**
   * falseif the GitHub provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the login flow.
   */
readonly login?: LoginScopes;

/**
   * The configuration settings of the app registration for the GitHub provider.
   */
readonly registration?: ClientRegistration;

/**
   * The Client ID of the app used for login.
   */
readonly clientId?: string;

/**
   * The app setting name that contains the client secret.
   */
readonly clientSecretSettingName?: string;

/**
   * falseif the Google provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the login flow.
   */
readonly login?: LoginScopes;

/**
   * The configuration settings of the app registration for the Google provider.
   */
readonly registration?: ClientRegistration;

/**
   * The configuration settings of the Azure Active Directory token validation flow.
   */
readonly validation?: AllowedAudiencesValidation;

/**
   * The configuration settings of the allowed list of audiences from which to validate the JWT token.
   */
readonly allowedAudiences?: string[];

/**
   * falseif the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the login flow.
   */
readonly login?: LoginScopes;

/**
   * The configuration settings of the app registration for the legacy Microsoft Account provider.
   */
readonly registration?: ClientRegistration;

/**
   * The configuration settings of the legacy Microsoft Account provider token validation flow.
   */
readonly validation?: AllowedAudiencesValidation;

/**
   * falseif the Twitter provider should not be enabled despite the set registration; otherwise,true.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the app registration for the Twitter provider.
   */
readonly registration?: TwitterRegistration;

/**
   * The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in
   */
readonly consumerKey?: string;

/**
   * The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in.
   */
readonly consumerSecretSettingName?: string;

/**
   * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed.
   */
readonly allowedExternalRedirectUrls?: string[];

/**
   * The configuration settings of the session cookie's expiration.
   */
readonly cookieExpiration?: CookieExpiration;

/**
   * The configuration settings of the nonce used in the login flow.
   */
readonly nonce?: Nonce;

/**
   * trueif the fragments from the request are preserved after the login request is made; otherwise,false.
   */
readonly preserveUrlFragmentsForLogins?: bool;

/**
   * The routes that specify the endpoints used for login and logout requests.
   */
readonly routes?: LoginRoutes;

/**
   * The configuration settings of the token store.
   */
readonly tokenStore?: TokenStore;

/**
   * The convention used when determining the session cookie's expiration.
   */
readonly convention?: 'FixedTime''IdentityProviderDerived';

/**
   * The time after the request is made when the session cookie should expire.
   */
readonly timeToExpiration?: string;

/**
   * The time after the request is made when the nonce should expire.
   */
readonly nonceExpirationInterval?: string;

/**
   * falseif the nonce should not be validated while completing the login flow; otherwise,true.
   */
readonly validateNonce?: bool;

/**
   * The endpoint at which a logout request should be made.
   */
readonly logoutEndpoint?: string;

/**
   * The configuration settings of the storage of the tokens if blob storage is used.
   */
readonly azureBlobStorage?: BlobStorageTokenStore;

/**
   * trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse.
   */
readonly enabled?: bool;

/**
   * The configuration settings of the storage of the tokens if a file system is used.
   */
readonly fileSystem?: FileSystemTokenStore;

/**
   * The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours.
   */
readonly tokenRefreshExtensionHours?: number;

/**
   * The name of the app setting containing the SAS URL of the blob storage containing the tokens.
   */
readonly sasUrlSettingName?: string;

/**
   * The directory in which the tokens will be stored.
   */
readonly directory?: string;

/**
   * The path of the config file containing auth settings if they come from a file.If the path is relative, base will the site's root directory.
   */
readonly configFilePath?: string;

/**
   * trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false.
   */
readonly enabled?: bool;

/**
   * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
   */
readonly runtimeVersion?: string;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Name of the backup.
   */
readonly backupName?: string;

/**
   * Schedule for the backup if it is executed periodically.
   */
readonly backupSchedule?: BackupSchedule;

/**
   * Databases included in the backup.
   */
readonly databases?: DatabaseBackupSetting[];

/**
   * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
   */
readonly enabled?: bool;

/**
   * SAS URL to the container.
   */
readonly storageAccountUrl: string;

/**
   * How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
   */
readonly frequencyInterval: number;

/**
   * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
   */
readonly frequencyUnit: 'Day''Hour';

/**
   * True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
   */
readonly keepAtLeastOneBackup: bool;

/**
   * After how many days backups should be deleted.
   */
readonly retentionPeriodInDays: number;

/**
   * When the schedule should start working.
   */
readonly startTime?: string;

/**
   * Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
   */
readonly connectionString?: string;

/**
   * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.This is used during restore with overwrite connection strings options.
   */
readonly connectionStringName?: string;

/**
   * Database type (e.g. SqlAzure / MySql).
   */
readonly databaseType: 'LocalMySql''MySql''PostgreSql''SqlAzure';

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Application logs configuration.
   */
readonly applicationLogs?: ApplicationLogsConfig;

/**
   * Detailed error messages configuration.
   */
readonly detailedErrorMessages?: EnabledConfig;

/**
   * Failed requests tracing configuration.
   */
readonly failedRequestsTracing?: EnabledConfig;

/**
   * HTTP logs configuration.
   */
readonly httpLogs?: HttpLogsConfig;

/**
   * Application logs to blob storage configuration.
   */
readonly azureBlobStorage?: AzureBlobStorageApplicationLogsConfig;

/**
   * Application logs to azure table storage configuration.
   */
readonly azureTableStorage?: AzureTableStorageApplicationLogsConfig;

/**
   * Application logs to file system configuration.
   */
readonly fileSystem?: FileSystemApplicationLogsConfig;

/**
   * Log level.
   */
readonly level?: 'Error''Information''Off''Verbose''Warning';

/**
   * Retention in days.Remove blobs older than X days.0 or lower means no retention.
   */
readonly retentionInDays?: number;

/**
   * SAS url to a azure blob container with read/write/list/delete permissions.
   */
readonly sasUrl?: string;

/**
   * Log level.
   */
readonly level?: 'Error''Information''Off''Verbose''Warning';

/**
   * SAS URL to an Azure table with add/query/delete permissions.
   */
readonly sasUrl: string;

/**
   * Log level.
   */
readonly level?: 'Error''Information''Off''Verbose''Warning';

/**
   * True if configuration is enabled, false if it is disabled and null if configuration is not set.
   */
readonly enabled?: bool;

/**
   * Http logs to azure blob storage configuration.
   */
readonly azureBlobStorage?: AzureBlobStorageHttpLogsConfig;

/**
   * Http logs to file system configuration.
   */
readonly fileSystem?: FileSystemHttpLogsConfig;

/**
   * True if configuration is enabled, false if it is disabled and null if configuration is not set.
   */
readonly enabled?: bool;

/**
   * Retention in days.Remove blobs older than X days.0 or lower means no retention.
   */
readonly retentionInDays?: number;

/**
   * SAS url to a azure blob container with read/write/list/delete permissions.
   */
readonly sasUrl?: string;

/**
   * True if configuration is enabled, false if it is disabled and null if configuration is not set.
   */
readonly enabled?: bool;

/**
   * Retention in days.Remove files older than X days.0 or lower means no retention.
   */
readonly retentionInDays?: number;

/**
   * Maximum size in megabytes that http log files can use.When reached old log files will be removed to make space for new ones.Value can range between 25 and 100.
   */
readonly retentionInMb?: number;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
   */
readonly dynamicTagsJson?: string;

/**
   * Gets or sets a flag indicating whether the Push endpoint is enabled.
   */
readonly isPushEnabled: bool;

/**
   * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler.
   */
readonly tagsRequiringAuth?: string;

/**
   * Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint.
   */
readonly tagWhitelistJson?: string;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Flag to use Managed Identity Creds for ACR pull
   */
readonly acrUseManagedIdentityCreds?: bool;

/**
   * If using user managed identity, the user managed identity ClientId
   */
readonly acrUserManagedIdentityID?: string;

/**
   * trueif Always On is enabled; otherwise,false.
   */
readonly alwaysOn?: bool;

/**
   * Information about the formal API definition for the app.
   */
readonly apiDefinition?: ApiDefinitionInfo;

/**
   * Azure API management settings linked to the app.
   */
readonly apiManagementConfig?: ApiManagementConfig;

/**
   * App command line to launch.
   */
readonly appCommandLine?: string;

/**
   * Application settings.
   */
readonly appSettings?: NameValuePair[];

/**
   * trueif Auto Heal is enabled; otherwise,false.
   */
readonly autoHealEnabled?: bool;

/**
   * Auto Heal rules.
   */
readonly autoHealRules?: AutoHealRules;

/**
   * Auto-swap slot name.
   */
readonly autoSwapSlotName?: string;

/**
   * List of Azure Storage Accounts.
   */
readonly azureStorageAccounts?: object;

/**
   * Connection strings.
   */
readonly connectionStrings?: ConnStringInfo[];

/**
   * Cross-Origin Resource Sharing (CORS) settings.
   */
readonly cors?: CorsSettings;

/**
   * Default documents.
   */
readonly defaultDocuments?: string[];

/**
   * trueif detailed error logging is enabled; otherwise,false.
   */
readonly detailedErrorLoggingEnabled?: bool;

/**
   * Document root.
   */
readonly documentRoot?: string;

/**
   * Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue
   */
readonly elasticWebAppScaleLimit?: number;

/**
   * This is work around for polymorphic types.
   */
readonly experiments?: Experiments;

/**
   * State of FTP / FTPS service
   */
readonly ftpsState?: 'AllAllowed''Disabled''FtpsOnly';

/**
   * Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans
   */
readonly functionAppScaleLimit?: number;

/**
   * Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status.
   */
readonly functionsRuntimeScaleMonitoringEnabled?: bool;

/**
   * Handler mappings.
   */
readonly handlerMappings?: HandlerMapping[];

/**
   * Health check path
   */
readonly healthCheckPath?: string;

/**
   * Http20Enabled: configures a web site to allow clients to connect over http2.0
   */
readonly http20Enabled?: bool;

/**
   * trueif HTTP logging is enabled; otherwise,false.
   */
readonly httpLoggingEnabled?: bool;

/**
   * IP security restrictions for main.
   */
readonly ipSecurityRestrictions?: IpSecurityRestriction[];

/**
   * Default action for main access restriction if no rules are matched.
   */
readonly ipSecurityRestrictionsDefaultAction?: 'Allow''Deny';

/**
   * Java container.
   */
readonly javaContainer?: string;

/**
   * Java container version.
   */
readonly javaContainerVersion?: string;

/**
   * Java version.
   */
readonly javaVersion?: string;

/**
   * Identity to use for Key Vault Reference authentication.
   */
readonly keyVaultReferenceIdentity?: string;

/**
   * Site limits.
   */
readonly limits?: SiteLimits;

/**
   * Linux App Framework and version
   */
readonly linuxFxVersion?: string;

/**
   * Site load balancing.
   */
readonly loadBalancing?: 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic';

/**
   * trueto enable local MySQL; otherwise,false.
   */
readonly localMySqlEnabled?: bool;

/**
   * HTTP logs directory size limit.
   */
readonly logsDirectorySizeLimit?: number;

/**
   * Managed pipeline mode.
   */
readonly managedPipelineMode?: 'Classic''Integrated';

/**
   * Managed Service Identity Id
   */
readonly managedServiceIdentityId?: number;

/**
   * Application metadata. This property cannot be retrieved, since it may contain secrets.
   */
readonly metadata?: NameValuePair[];

/**
   * Number of minimum instance count for a siteThis setting only applies to the Elastic Plans
   */
readonly minimumElasticInstanceCount?: number;

/**
   * MinTlsVersion: configures the minimum version of TLS required for SSL requests
   */
readonly minTlsVersion?: '1.0''1.1''1.2';

/**
   * .NET Framework version.
   */
readonly netFrameworkVersion?: string;

/**
   * Version of Node.js.
   */
readonly nodeVersion?: string;

/**
   * Number of workers.
   */
readonly numberOfWorkers?: number;

/**
   * Version of PHP.
   */
readonly phpVersion?: string;

/**
   * Version of PowerShell.
   */
readonly powerShellVersion?: string;

/**
   * Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans
   */
readonly preWarmedInstanceCount?: number;

/**
   * Property to allow or block all public traffic.
   */
readonly publicNetworkAccess?: string;

/**
   * Publishing user name.
   */
readonly publishingUsername?: string;

/**
   * Push endpoint settings.
   */
readonly push?: PushSettings;

/**
   * Version of Python.
   */
readonly pythonVersion?: string;

/**
   * trueif remote debugging is enabled; otherwise,false.
   */
readonly remoteDebuggingEnabled?: bool;

/**
   * Remote debugging version.
   */
readonly remoteDebuggingVersion?: string;

/**
   * trueif request tracing is enabled; otherwise,false.
   */
readonly requestTracingEnabled?: bool;

/**
   * Request tracing expiration time.
   */
readonly requestTracingExpirationTime?: string;

/**
   * IP security restrictions for scm.
   */
readonly scmIpSecurityRestrictions?: IpSecurityRestriction[];

/**
   * Default action for scm access restriction if no rules are matched.
   */
readonly scmIpSecurityRestrictionsDefaultAction?: 'Allow''Deny';

/**
   * IP security restrictions for scm to use main.
   */
readonly scmIpSecurityRestrictionsUseMain?: bool;

/**
   * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
   */
readonly scmMinTlsVersion?: '1.0''1.1''1.2';

/**
   * SCM type.
   */
readonly scmType?: 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM';

/**
   * Tracing options.
   */
readonly tracingOptions?: string;

/**
   * trueto use 32-bit worker process; otherwise,false.
   */
readonly use32BitWorkerProcess?: bool;

/**
   * Virtual applications.
   */
readonly virtualApplications?: VirtualApplication[];

/**
   * Virtual Network name.
   */
readonly vnetName?: string;

/**
   * The number of private ports assigned to this app. These will be assigned dynamically on runtime.
   */
readonly vnetPrivatePortsCount?: number;

/**
   * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
   */
readonly vnetRouteAllEnabled?: bool;

/**
   * Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
   */
readonly websiteTimeZone?: string;

/**
   * trueif WebSocket is enabled; otherwise,false.
   */
readonly webSocketsEnabled?: bool;

/**
   * Xenon App Framework and version
   */
readonly windowsFxVersion?: string;

/**
   * Explicit Managed Service Identity Id
   */
readonly xManagedServiceIdentityId?: number;

/**
   * The URL of the API definition.
   */
readonly url?: string;

/**
   * APIM-Api Identifier.
   */
readonly id?: string;

/**
   * Pair value.
   */
readonly value?: string;

/**
   * Actions to be executed when a rule is triggered.
   */
readonly actions?: AutoHealActions;

/**
   * Conditions that describe when to execute the auto-heal actions.
   */
readonly triggers?: AutoHealTriggers;

/**
   * Predefined action to be taken.
   */
readonly actionType?: 'CustomAction''LogEvent''Recycle';

/**
   * Custom action to be taken.
   */
readonly customAction?: AutoHealCustomAction;

/**
   * Minimum time the process must executebefore taking the action
   */
readonly minProcessExecutionTime?: string;

/**
   * Executable to be run.
   */
readonly exe?: string;

/**
   * Parameters for the executable.
   */
readonly parameters?: string;

/**
   * A rule based on private bytes.
   */
readonly privateBytesInKB?: number;

/**
   * A rule based on total requests.
   */
readonly requests?: RequestsBasedTrigger;

/**
   * A rule based on request execution time.
   */
readonly slowRequests?: SlowRequestsBasedTrigger;

/**
   * A rule based on multiple Slow Requests Rule with path
   */
readonly slowRequestsWithPath?: SlowRequestsBasedTrigger[];

/**
   * A rule based on status codes.
   */
readonly statusCodes?: StatusCodesBasedTrigger[];

/**
   * A rule based on status codes ranges.
   */
readonly statusCodesRange?: StatusCodesRangeBasedTrigger[];

/**
   * Request Count.
   */
readonly count?: number;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Request Count.
   */
readonly count?: number;

/**
   * Request Path.
   */
readonly path?: string;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Time taken.
   */
readonly timeTaken?: string;

/**
   * Request Count.
   */
readonly count?: number;

/**
   * Request Path
   */
readonly path?: string;

/**
   * HTTP status code.
   */
readonly status?: number;

/**
   * Request Sub Status.
   */
readonly subStatus?: number;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Win32 error code.
   */
readonly win32Status?: number;

/**
   * Request Count.
   */
readonly count?: number;

/**
   * 
   */
readonly path?: string;

/**
   * HTTP status code.
   */
readonly statusCodes?: string;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Connection string value.
   */
readonly connectionString?: string;

/**
   * Type of database.
   */
readonly type?: 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus';

/**
   * Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all.
   */
readonly allowedOrigins?: string[];

/**
   * Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details.
   */
readonly supportCredentials?: bool;

/**
   * List of ramp-up rules.
   */
readonly rampUpRules?: RampUpRule[];

/**
   * Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
   */
readonly actionHostName?: string;

/**
   * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/
   */
readonly changeDecisionCallbackUrl?: string;

/**
   * Specifies interval in minutes to reevaluate ReroutePercentage.
   */
readonly changeIntervalInMinutes?: number;

/**
   * In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl.
   */
readonly changeStep?: number;

/**
   * Specifies upper boundary below which ReroutePercentage will stay.
   */
readonly maxReroutePercentage?: number;

/**
   * Specifies lower boundary above which ReroutePercentage will stay.
   */
readonly minReroutePercentage?: number;

/**
   * Percentage of the traffic which will be redirected toActionHostName.
   */
readonly reroutePercentage?: number;

/**
   * Command-line arguments to be passed to the script processor.
   */
readonly arguments?: string;

/**
   * Requests with this extension will be handled using the specified FastCGI application.
   */
readonly extension?: string;

/**
   * The absolute path to the FastCGI application.
   */
readonly scriptProcessor?: string;

/**
   * Allow or Deny access for this IP range.
   */
readonly action?: string;

/**
   * IP restriction rule description.
   */
readonly description?: string;

/**
   * IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match.
   */
readonly headers?: object;

/**
   * IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified.
   */
readonly ipAddress?: string;

/**
   * Priority of IP restriction rule.
   */
readonly priority?: number;

/**
   * Subnet mask for the range of IP addresses the restriction is valid for.
   */
readonly subnetMask?: string;

/**
   * (internal) Subnet traffic tag
   */
readonly subnetTrafficTag?: number;

/**
   * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
   */
readonly tag?: 'Default''ServiceTag''XffProxy';

/**
   * Virtual network resource id
   */
readonly vnetSubnetResourceId?: string;

/**
   * (internal) Vnet traffic tag
   */
readonly vnetTrafficTag?: number;

/**
   * Maximum allowed disk size usage in MB.
   */
readonly maxDiskSizeInMb?: number;

/**
   * Maximum allowed memory usage in MB.
   */
readonly maxMemoryInMb?: number;

/**
   * Maximum allowed CPU usage percentage.
   */
readonly maxPercentageCpu?: number;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
   */
readonly dynamicTagsJson?: string;

/**
   * Gets or sets a flag indicating whether the Push endpoint is enabled.
   */
readonly isPushEnabled: bool;

/**
   * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler.
   */
readonly tagsRequiringAuth?: string;

/**
   * Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint.
   */
readonly tagWhitelistJson?: string;

/**
   * Physical path.
   */
readonly physicalPath?: string;

/**
   * trueif preloading is enabled; otherwise,false.
   */
readonly preloadEnabled?: bool;

/**
   * Virtual directories for virtual application.
   */
readonly virtualDirectories?: VirtualDirectory[];

/**
   * Virtual path.
   */
readonly virtualPath?: string;

/**
   * Physical path.
   */
readonly physicalPath?: string;

/**
   * Path to virtual application.
   */
readonly virtualPath?: string;
}

/**
 * WebSitesSlotsConfig resource
 */
export class WebSitesSlotsConfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsConfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/config@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsConfigProps): string {
    return JSON.stringify(
        {properties: {}, kind: "string"}
    );
  }
}
