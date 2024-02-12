import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesLinkedworkspacesProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningservicesWorkspacesLinkedworkspaces resource
 */
export class MachinelearningservicesWorkspacesLinkedworkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesLinkedworkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesLinkedworkspacesProps): string {
    return JSON.stringify(
        {properties: {linkedWorkspaceResourceId: "string", userAssignedIdentityResourceId: "string"}}
    );
  }
}
