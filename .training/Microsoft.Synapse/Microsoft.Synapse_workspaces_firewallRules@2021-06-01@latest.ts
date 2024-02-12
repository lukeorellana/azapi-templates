import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesFirewallrules resource
 */
export class SynapseWorkspacesFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/firewallRules@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
