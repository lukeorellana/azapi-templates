import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:redis;

/**
   * highest IP address included in the range
   */
readonly endIP: string;

/**
   * lowest IP address included in the range
   */
readonly startIP: string;
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
