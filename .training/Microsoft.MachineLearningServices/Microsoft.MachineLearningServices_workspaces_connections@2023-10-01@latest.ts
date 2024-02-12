import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesConnectionsProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningservicesWorkspacesConnections resource
 */
export class MachinelearningservicesWorkspacesConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/connections@2023-10-01";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesConnectionsProps): string {
    return JSON.stringify(
        {properties: {category: "string", target: "string", value: "string", valueFormat: "JSON", authType: "string"}}
    );
  }
}
