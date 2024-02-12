import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKeysProps extends IAzAPIBaseProps {

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
