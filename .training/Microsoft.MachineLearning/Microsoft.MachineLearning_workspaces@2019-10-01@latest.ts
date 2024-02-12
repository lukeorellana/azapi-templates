import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningWorkspacesProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningWorkspaces resource
 */
export class MachinelearningWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearning/workspaces@2019-10-01";
  }

  protected getResourceBody(props: MachinelearningWorkspacesProps): string {
    return JSON.stringify(
        {properties: {keyVaultIdentifierId: "string", ownerEmail: "string", userStorageAccountId: "string"}, sku: {name: "string", tier: "string"}}
    );
  }
}
