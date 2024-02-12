import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningWorkspacesProps extends IAzAPIBaseProps {
/**
   * The sku of the workspace.
   */
readonly sku?: Sku;

/**
   * The key vault identifier used for encrypted workspaces.
   */
readonly keyVaultIdentifierId?: string;

/**
   * The email id of the owner for this workspace.
   */
readonly ownerEmail: string;

/**
   * The fully qualified arm id of the storage account associated with this workspace.
   */
readonly userStorageAccountId: string;

/**
   * Tier of the sku like Basic or Enterprise
   */
readonly tier?: string;
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
