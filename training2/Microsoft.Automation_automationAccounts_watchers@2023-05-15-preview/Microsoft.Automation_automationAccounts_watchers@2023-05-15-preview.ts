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
   * Gets or sets the etag of the resource.
   */
readonly etag?: string;

/**
   * Gets or sets the description.
   */
readonly description?: string;

/**
   * Gets or sets the frequency at which the watcher is invoked.
   */
readonly executionFrequencyInSeconds?: number;

/**
   * Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
   */
readonly scriptName?: string;

/**
   * Gets or sets the parameters of the script.
   */
readonly scriptParameters?: WatcherPropertiesScriptParameters;

/**
   * Gets or sets the name of the hybrid worker group the watcher will run on.
   */
readonly scriptRunOn?: string;

/**
   * 
   */
readonly {customized property}?: string;
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
