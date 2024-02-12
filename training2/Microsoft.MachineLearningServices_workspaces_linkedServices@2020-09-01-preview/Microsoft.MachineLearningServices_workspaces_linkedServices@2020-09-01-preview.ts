import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesLinkedservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Identity for the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The user assigned identities associated with the resource.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * The creation time of the linked service.
   */
readonly createdTime?: string;

/**
   * ResourceId of the link target of the linked service.
   */
readonly linkedServiceResourceId: string;

/**
   * Type of the link target.
   */
readonly linkType?: 'Synapse';

/**
   * The last modified time of the linked service.
   */
readonly modifiedTime?: string;
}

/**
 * MachinelearningservicesWorkspacesLinkedservices resource
 */
export class MachinelearningservicesWorkspacesLinkedservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesLinkedservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesLinkedservicesProps): string {
    return JSON.stringify(
        {properties: {createdTime: "string", linkedServiceResourceId: "string", linkType: "Synapse", modifiedTime: "string"}}
    );
  }
}
