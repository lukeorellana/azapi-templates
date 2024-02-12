import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppContainerappsAuthconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:containerApps;

/**
   * The configuration settings that determines the validation flow of users using  Service Authentication/Authorization.
   */
readonly globalValidation?: GlobalValidation;

/**
   * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
   */
readonly httpSettings?: HttpSettings;

/**
   * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
   */
readonly identityProviders?: IdentityProviders;

/**
   * The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
   */
readonly login?: Login;

/**
   * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
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
   * trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false.
   */
readonly enabled?: bool;

/**
   * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
   */
readonly runtimeVersion?: string;
}

/**
 * AppContainerappsAuthconfigs resource
 */
export class AppContainerappsAuthconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppContainerappsAuthconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/containerApps/authConfigs@2023-05-01";
  }

  protected getResourceBody(props: AppContainerappsAuthconfigsProps): string {
    return JSON.stringify(
        {properties: {globalValidation: {excludedPaths: ["string"], redirectToProvider: "string", unauthenticatedClientAction: "string"}, httpSettings: {forwardProxy: {convention: "string", customHostHeaderName: "string", customProtoHeaderName: "string"}, requireHttps: "${bool}", routes: {apiPrefix: "string"}}, identityProviders: {apple: {enabled: "${bool}", login: {scopes: ["string"]}, registration: {clientId: "string", clientSecretSettingName: "string"}}, azureActiveDirectory: {enabled: "${bool}", isAutoProvisioned: "${bool}", login: {disableWWWAuthenticate: "${bool}", loginParameters: ["string"]}, registration: {clientId: "string", clientSecretCertificateIssuer: "string", clientSecretCertificateSubjectAlternativeName: "string", clientSecretCertificateThumbprint: "string", clientSecretSettingName: "string", openIdIssuer: "string"}, validation: {allowedAudiences: ["string"], defaultAuthorizationPolicy: {allowedApplications: ["string"], allowedPrincipals: {groups: ["string"], identities: ["string"]}}, jwtClaimChecks: {allowedClientApplications: ["string"], allowedGroups: ["string"]}}}, azureStaticWebApps: {enabled: "${bool}", registration: {clientId: "string"}}, customOpenIdConnectProviders: {}, facebook: {enabled: "${bool}", graphApiVersion: "string", login: {scopes: ["string"]}, registration: {appId: "string", appSecretSettingName: "string"}}, gitHub: {enabled: "${bool}", login: {scopes: ["string"]}, registration: {clientId: "string", clientSecretSettingName: "string"}}, google: {enabled: "${bool}", login: {scopes: ["string"]}, registration: {clientId: "string", clientSecretSettingName: "string"}, validation: {allowedAudiences: ["string"]}}, twitter: {enabled: "${bool}", registration: {consumerKey: "string", consumerSecretSettingName: "string"}}}, login: {allowedExternalRedirectUrls: ["string"], cookieExpiration: {convention: "string", timeToExpiration: "string"}, nonce: {nonceExpirationInterval: "string", validateNonce: "${bool}"}, preserveUrlFragmentsForLogins: "${bool}", routes: {logoutEndpoint: "string"}}, platform: {enabled: "${bool}", runtimeVersion: "string"}}}
    );
  }
}
