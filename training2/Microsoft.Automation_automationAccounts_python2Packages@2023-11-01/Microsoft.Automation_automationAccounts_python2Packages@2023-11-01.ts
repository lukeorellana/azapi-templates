import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets or sets the module content link.
   */
readonly contentLink: ContentLink;

/**
   * Sets the hash.
   */
readonly contentHash?: ContentHash;

/**
   * Sets the uri of the content.
   */
readonly uri?: string;

/**
   * Sets the version of the content.
   */
readonly version?: string;

/**
   * Gets or sets the content hash algorithm used to hash the content.
   */
readonly algorithm: string;

/**
   * Gets or sets expected hash value of the content.
   */
readonly value: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
