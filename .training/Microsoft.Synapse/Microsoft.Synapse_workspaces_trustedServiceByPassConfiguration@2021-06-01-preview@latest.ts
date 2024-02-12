import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesTrustedservicebypassconfigurationProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesTrustedservicebypassconfiguration resource
 */
export class SynapseWorkspacesTrustedservicebypassconfiguration extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesTrustedservicebypassconfigurationProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesTrustedservicebypassconfigurationProps): string {
    return JSON.stringify(
        
    );
  }
}
