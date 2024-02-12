import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Used to activate the workspace after a customer managed key is provided.
   */
readonly isActiveCMK?: bool;

/**
   * The Key Vault Url of the workspace key.
   */
readonly keyVaultUrl?: string;
}

/**
 * SynapseWorkspacesKeys resource
 */
export class SynapseWorkspacesKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/keys@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesKeysProps): string {
    return JSON.stringify(
        {properties: {isActiveCMK: "${bool}", keyVaultUrl: "string"}}
    );
  }
}
