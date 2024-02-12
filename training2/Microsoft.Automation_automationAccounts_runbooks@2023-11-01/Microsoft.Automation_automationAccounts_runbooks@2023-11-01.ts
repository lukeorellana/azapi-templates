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
   * Gets or sets the description of the runbook.
   */
readonly description?: string;

/**
   * Gets or sets the draft runbook properties.
   */
readonly draft?: RunbookDraft;

/**
   * Gets or sets the activity-level tracing options of the runbook.
   */
readonly logActivityTrace?: number;

/**
   * Gets or sets progress log option.
   */
readonly logProgress?: bool;

/**
   * Gets or sets verbose log option.
   */
readonly logVerbose?: bool;

/**
   * Gets or sets the published runbook content link.
   */
readonly publishContentLink?: ContentLink;

/**
   * Gets or sets the type of the runbook.
   */
readonly runbookType: 'Graph''GraphPowerShell''GraphPowerShellWorkflow''PowerShell''PowerShell72''PowerShellWorkflow''Python2''Python3''Script';

/**
   * Gets or sets the creation time of the runbook draft.
   */
readonly creationTime?: string;

/**
   * Gets or sets the draft runbook content link.
   */
readonly draftContentLink?: ContentLink;

/**
   * Gets or sets whether runbook is in edit mode.
   */
readonly inEdit?: bool;

/**
   * Gets or sets the last modified time of the runbook draft.
   */
readonly lastModifiedTime?: string;

/**
   * Gets or sets the runbook output types.
   */
readonly outputTypes?: string[];

/**
   * Gets or sets the runbook draft parameters.
   */
readonly parameters?: RunbookDraftParameters;

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

/**
   * 
   */
readonly {customized property}?: RunbookParameter;

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
