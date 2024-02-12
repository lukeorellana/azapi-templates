import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePortalsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Subscriptions delegation settings.
   */
readonly subscriptions?: SubscriptionsDelegationSettingsProperties;

/**
   * A delegation Url.
   */
readonly url?: string;

/**
   * User registration delegation settings.
   */
readonly userRegistration?: RegistrationDelegationSettingsProperties;

/**
   * A base64-encoded validation key to validate, that a request is coming from Azure API Management.
   */
readonly validationKey?: string;

/**
   * Enable or disable delegation for subscriptions.
   */
readonly enabled?: bool;

/**
   * Enable or disable delegation for user registration.
   */
readonly enabled?: bool;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Redirect Anonymous users to the Sign-In page.
   */
readonly enabled?: bool;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Allow users to sign up on a developer portal.
   */
readonly enabled?: bool;

/**
   * Terms of service contract properties.
   */
readonly termsOfService?: TermsOfServiceProperties;

/**
   * Ask user for consent to the terms of service.
   */
readonly consentRequired?: bool;

/**
   * Display terms of service during a sign-up process.
   */
readonly enabled?: bool;

/**
   * A terms of service text.
   */
readonly text?: string;
}

/**
 * ApimanagementServicePortalsettings resource
 */
export class ApimanagementServicePortalsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePortalsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePortalsettingsProps): string {
    return JSON.stringify(
        {properties: {subscriptions: {enabled: "${bool}"}, url: "string", userRegistration: {enabled: "${bool}"}, validationKey: "string"}}
    );
  }
}
