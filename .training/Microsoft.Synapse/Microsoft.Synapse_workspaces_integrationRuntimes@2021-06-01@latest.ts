import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesIntegrationruntimesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesIntegrationruntimes resource
 */
export class SynapseWorkspacesIntegrationruntimes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesIntegrationruntimesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesIntegrationruntimesProps): string {
    return JSON.stringify(
        {properties: {description: "string", type: "string"}}
    );
  }
}
