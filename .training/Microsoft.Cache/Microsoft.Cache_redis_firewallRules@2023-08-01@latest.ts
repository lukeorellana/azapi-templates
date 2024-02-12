import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisFirewallrules resource
 */
export class CacheRedisFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/firewallRules@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIP: "string", startIP: "string"}}
    );
  }
}
