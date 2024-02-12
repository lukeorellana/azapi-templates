import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsScriptexecutionsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsScriptexecutions resource
 */
export class AvsPrivatecloudsScriptexecutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsScriptexecutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsScriptexecutionsProps): string {
    return JSON.stringify(
        {properties: {failureReason: "string", hiddenParameters: [{name: "string", type: "string"}], namedOutputs: {}, output: ["string"], parameters: [{name: "string", type: "string"}], retention: "string", scriptCmdletId: "string", timeout: "string"}}
    );
  }
}
