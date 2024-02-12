import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersOutboundfirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersOutboundfirewallrules resource
 */
export class SqlServersOutboundfirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersOutboundfirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/outboundFirewallRules@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersOutboundfirewallrulesProps): string {
    return JSON.stringify(
        
    );
  }
}
