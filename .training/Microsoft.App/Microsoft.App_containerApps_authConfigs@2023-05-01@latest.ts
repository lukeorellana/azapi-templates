import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppContainerappsAuthconfigsProps extends IAzAPIBaseProps {

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
