import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebPublishingusersProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Password used for publishing.
   */
readonly publishingPassword?: string;

/**
   * Password hash used for publishing.
   */
readonly publishingPasswordHash?: string;

/**
   * Password hash salt used for publishing.
   */
readonly publishingPasswordHashSalt?: string;

/**
   * Username used for publishing.
   */
readonly publishingUserName: string;

/**
   * Url of SCM site.
   */
readonly scmUri?: string;
}

/**
 * WebPublishingusers resource
 */
export class WebPublishingusers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebPublishingusersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/publishingUsers@2022-09-01";
  }

  protected getResourceBody(props: WebPublishingusersProps): string {
    return JSON.stringify(
        {properties: {publishingPassword: "string", publishingPasswordHash: "string", publishingPasswordHashSalt: "string", publishingUserName: "string", scmUri: "string"}, kind: "string"}
    );
  }
}
