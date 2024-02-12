import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePortalconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * The developer portal Cross-Origin Resource Sharing (CORS) settings.
   */
readonly cors?: PortalConfigCorsProperties;

/**
   * The developer portal Content Security Policy (CSP) settings.
   */
readonly csp?: PortalConfigCspProperties;

/**
   * The developer portal delegation settings.
   */
readonly delegation?: PortalConfigDelegationProperties;

/**
   * Enable or disable Basic authentication method.
   */
readonly enableBasicAuth?: bool;

/**
   * 
   */
readonly signin?: PortalConfigPropertiesSignin;

/**
   * 
   */
readonly signup?: PortalConfigPropertiesSignup;

/**
   * Allowed origins, e.g.https://trusted.com.
   */
readonly allowedOrigins?: string[];

/**
   * Allowed sources, e.g.*.trusted.com,trusted.com,https://.
   */
readonly allowedSources?: string[];

/**
   * The mode of the developer portal Content Security Policy (CSP).
   */
readonly mode?: 'disabled''enabled''reportOnly';

/**
   * The URLs used by the browser to report CSP violations.
   */
readonly reportUri?: string[];

/**
   * Enable or disable delegation for user registration.
   */
readonly delegateRegistration?: bool;

/**
   * Enable or disable delegation for product subscriptions.
   */
readonly delegateSubscription?: bool;

/**
   * A delegation endpoint URL.
   */
readonly delegationUrl?: string;

/**
   * A base64-encoded validation key to ensure requests originate from Azure API Management service.
   */
readonly validationKey?: string;

/**
   * Redirect anonymous users to the sign-in page.
   */
readonly require?: bool;

/**
   * Terms of service settings.
   */
readonly termsOfService?: PortalConfigTermsOfServiceProperties;

/**
   * Ask user for consent to the terms of service.
   */
readonly requireConsent?: bool;

/**
   * A terms of service text.
   */
readonly text?: string;
}

/**
 * ApimanagementServicePortalconfigs resource
 */
export class ApimanagementServicePortalconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePortalconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/portalconfigs@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePortalconfigsProps): string {
    return JSON.stringify(
        {properties: {cors: {allowedOrigins: ["string"]}, csp: {allowedSources: ["string"], mode: "string", reportUri: ["string"]}, delegation: {delegateRegistration: "${bool}", delegateSubscription: "${bool}", delegationUrl: "string", validationKey: "string"}, enableBasicAuth: "${bool}", signin: {require: "${bool}"}, signup: {termsOfService: {requireConsent: "${bool}", text: "string"}}}}
    );
  }
}
