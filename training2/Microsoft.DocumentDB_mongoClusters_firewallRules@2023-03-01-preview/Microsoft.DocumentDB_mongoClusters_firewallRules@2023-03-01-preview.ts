import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbMongoclustersFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mongoClusters;

/**
   * The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
   */
readonly endIpAddress: string;

/**
   * The start IP address of the mongo cluster firewall rule. Must be IPv4 format.
   */
readonly startIpAddress: string;
}

/**
 * DocumentdbMongoclustersFirewallrules resource
 */
export class DocumentdbMongoclustersFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbMongoclustersFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/mongoClusters/firewallRules@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbMongoclustersFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
