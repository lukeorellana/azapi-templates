import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesOutboundrulesProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningservicesWorkspacesOutboundrules resource
 */
export class MachinelearningservicesWorkspacesOutboundrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesOutboundrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesOutboundrulesProps): string {
    return JSON.stringify(
        {properties: {category: "string", status: "string", type: "string"}}
    );
  }
}
