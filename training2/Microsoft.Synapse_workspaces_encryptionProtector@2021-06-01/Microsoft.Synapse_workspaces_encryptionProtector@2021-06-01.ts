import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesEncryptionprotectorProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The name of the server key.
   */
readonly serverKeyName?: string;

/**
   * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
   */
readonly serverKeyType: 'AzureKeyVault''ServiceManaged';
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
