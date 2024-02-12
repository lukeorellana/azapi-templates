import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApiportalsProps extends IAzAPIBaseProps {
/**
   * Sku of the API portal resource
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * The array of resource Ids of gateway to integrate with API portal.
   */
readonly gatewayIds?: string[];

/**
   * Indicate if only https is allowed.
   */
readonly httpsOnly?: bool;

/**
   * Indicates whether the API portal exposes endpoint.
   */
readonly public?: bool;

/**
   * Collection of OpenAPI source URL locations.
   */
readonly sourceUrls?: string[];

/**
   * Single sign-on related configuration
   */
readonly ssoProperties?: SsoProperties;

/**
   * The public identifier for the application
   */
readonly clientId?: string;

/**
   * The secret known only to the application and the authorization server
   */
readonly clientSecret?: string;

/**
   * The URI of Issuer Identifier
   */
readonly issuerUri?: string;

/**
   * It defines the specific actions applications can be allowed to do on a user's behalf
   */
readonly scope?: string[];

/**
   * Current capacity of the target resource
   */
readonly capacity?: number;

/**
   * Tier of the Sku
   */
readonly tier?: string;
}

/**
 * AppplatformSpringApiportals resource
 */
export class AppplatformSpringApiportals extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApiportalsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApiportalsProps): string {
    return JSON.stringify(
        {properties: {gatewayIds: ["string"], httpsOnly: "${bool}", public: "${bool}", sourceUrls: ["string"], ssoProperties: {clientId: "string", clientSecret: "string", issuerUri: "string", scope: ["string"]}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
