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
   * Gets or sets the description of the configuration.
   */
readonly description?: string;

/**
   * Gets or sets progress log option.
   */
readonly logProgress?: bool;

/**
   * Gets or sets verbose log option.
   */
readonly logVerbose?: bool;

/**
   * Gets or sets the configuration parameters.
   */
readonly parameters?: DscConfigurationCreateOrUpdatePropertiesParameters;

/**
   * Gets or sets the source.
   */
readonly source: ContentSource;

/**
   * 
   */
readonly {customized property}?: DscConfigurationParameter;

/**
   * Gets or sets the default value of parameter.
   */
readonly defaultValue?: string;

/**
   * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
   */
readonly isMandatory?: bool;

/**
   * Get or sets the position of the parameter.
   */
readonly position?: number;

/**
   * Gets or sets the type of the parameter.
   */
readonly type?: string;

/**
   * Gets or sets the hash.
   */
readonly hash?: ContentHash;

/**
   * Gets or sets the content source type.
   */
readonly type?: 'embeddedContent''uri';

/**
   * Gets or sets the value of the content. This is based on the content source type.
   */
readonly value?: string;

/**
   * Gets or sets the version of the content.
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
