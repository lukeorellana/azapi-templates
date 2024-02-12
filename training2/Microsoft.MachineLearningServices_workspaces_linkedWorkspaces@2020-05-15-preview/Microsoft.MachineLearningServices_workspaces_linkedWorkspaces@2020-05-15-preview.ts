import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesLinkedworkspacesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * ResourceId of the link target of the linked workspace.
   */
readonly linkedWorkspaceResourceId?: string;

/**
   * ResourceId of the user assigned identity for the linked workspace.
   */
readonly userAssignedIdentityResourceId?: string;
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
