import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbMongoclustersFirewallrulesProps extends IAzAPIBaseProps {

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
