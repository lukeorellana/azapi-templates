import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface QuantumWorkspacesProps extends IAzAPIBaseProps {

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
