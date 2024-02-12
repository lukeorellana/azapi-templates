import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlFlexibleserversFirewallrules resource
 */
export class DbforpostgresqlFlexibleserversFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
