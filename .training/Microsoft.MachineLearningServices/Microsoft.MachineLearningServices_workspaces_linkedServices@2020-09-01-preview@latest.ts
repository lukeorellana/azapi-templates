import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesLinkedservicesProps extends IAzAPIBaseProps {

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
