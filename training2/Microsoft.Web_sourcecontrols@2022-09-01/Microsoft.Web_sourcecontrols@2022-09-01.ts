import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSourcecontrolsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * OAuth token expiration.
   */
readonly expirationTime?: string;

/**
   * OAuth refresh token.
   */
readonly refreshToken?: string;

/**
   * OAuth access token.
   */
readonly token?: string;

/**
   * OAuth access token secret.
   */
readonly tokenSecret?: string;
}

/**
 * WebSourcecontrols resource
 */
export class WebSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sourcecontrols@2022-09-01";
  }

  protected getResourceBody(props: WebSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {expirationTime: "string", refreshToken: "string", token: "string", tokenSecret: "string"}, kind: "string"}
    );
  }
}
