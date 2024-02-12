import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesEncryptionprotectorProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesEncryptionprotector resource
 */
export class SynapseWorkspacesEncryptionprotector extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesEncryptionprotectorProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/encryptionProtector@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesEncryptionprotectorProps): string {
    return JSON.stringify(
        {properties: {serverKeyName: "string", serverKeyType: "string"}}
    );
  }
}
