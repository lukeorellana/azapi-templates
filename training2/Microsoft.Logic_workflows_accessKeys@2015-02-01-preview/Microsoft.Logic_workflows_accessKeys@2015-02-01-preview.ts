import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicWorkflowsAccesskeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workflows;

/**
   * Gets or sets the not-after time.
   */
readonly notAfter?: string;

/**
   * Gets or sets the not-before time.
   */
readonly notBefore?: string;
}

/**
 * LogicWorkflowsAccesskeys resource
 */
export class LogicWorkflowsAccesskeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicWorkflowsAccesskeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/workflows/accessKeys@2015-02-01-preview";
  }

  protected getResourceBody(props: LogicWorkflowsAccesskeysProps): string {
    return JSON.stringify(
        {properties: {notAfter: "string", notBefore: "string"}}
    );
  }
}
