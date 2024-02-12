import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress
   */
readonly endIpAddress?: string;

/**
   * The start IP address of the firewall rule. Must be IPv4 format
   */
readonly startIpAddress?: string;
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
