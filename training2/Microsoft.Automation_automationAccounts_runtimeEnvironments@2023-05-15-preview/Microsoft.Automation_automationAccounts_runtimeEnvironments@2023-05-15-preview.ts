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
   * List of Default packages for Environment
   */
readonly defaultPackages?: DefaultPackages;

/**
   * Gets or sets the description.
   */
readonly description?: string;

/**
   * Runtime properties.
   */
readonly runtime?: RuntimeProperties;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Language of Runtime Environment
   */
readonly language?: string;

/**
   * Version of Language
   */
readonly version?: string;
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
