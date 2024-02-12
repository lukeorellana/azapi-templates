import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface QuantumWorkspacesProps extends IAzAPIBaseProps {
/**
   * Managed Identity information.
   */
readonly identity?: QuantumWorkspaceIdentity;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned';

/**
   * List of Providers selected for this Workspace
   */
readonly providers?: Provider[];

/**
   * ARM Resource Id of the storage account associated with this workspace.
   */
readonly storageAccount?: string;

/**
   * The provider's marketplace application display name.
   */
readonly applicationName?: string;

/**
   * A Uri identifying the specific instance of this provider.
   */
readonly instanceUri?: string;

/**
   * Unique id of this provider.
   */
readonly providerId?: string;

/**
   * The sku associated with pricing information for this provider.
   */
readonly providerSku?: string;

/**
   * Provisioning status field
   */
readonly provisioningState?: 'Deleted''Deleting''Failed''Launching''Succeeded''Updating';

/**
   * Id to track resource usage for the provider.
   */
readonly resourceUsageId?: string;
}

/**
 * QuantumWorkspaces resource
 */
export class QuantumWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: QuantumWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Quantum/workspaces@2022-01-10-preview";
  }

  protected getResourceBody(props: QuantumWorkspacesProps): string {
    return JSON.stringify(
        {properties: {providers: [{applicationName: "string", instanceUri: "string", providerId: "string", providerSku: "string", provisioningState: "string", resourceUsageId: "string"}], storageAccount: "string"}}
    );
  }
}
