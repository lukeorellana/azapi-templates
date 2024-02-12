import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringDevtoolportalsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * Settings for Dev Tool Portal
   */
readonly features?: DevToolPortalFeatureSettings;

/**
   * Indicates whether the resource exposes public endpoint
   */
readonly public?: bool;

/**
   * Single sign-on related configuration
   */
readonly ssoProperties?: DevToolPortalSsoProperties;

/**
   * Detail of Accelerator plugin
   */
readonly applicationAccelerator?: DevToolPortalFeatureDetail;

/**
   * Detail of App Live View plugin
   */
readonly applicationLiveView?: DevToolPortalFeatureDetail;

/**
   * State of the plugin
   */
readonly state?: 'Disabled''Enabled';

/**
   * The public identifier for the application
   */
readonly clientId?: string;

/**
   * The secret known only to the application and the authorization server
   */
readonly clientSecret?: string;

/**
   * The URI of a JSON file with generic OIDC provider configuration.
   */
readonly metadataUrl?: string;

/**
   * It defines the specific actions applications can be allowed to do on a user's behalf
   */
readonly scopes?: string[];
}

/**
 * AppplatformSpringDevtoolportals resource
 */
export class AppplatformSpringDevtoolportals extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringDevtoolportalsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringDevtoolportalsProps): string {
    return JSON.stringify(
        {properties: {features: {applicationAccelerator: {state: "string"}, applicationLiveView: {state: "string"}}, public: "${bool}", ssoProperties: {clientId: "string", clientSecret: "string", metadataUrl: "string", scopes: ["string"]}}}
    );
  }
}
