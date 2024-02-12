import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicWorkflowsAccesskeysProps extends IAzAPIBaseProps {

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
