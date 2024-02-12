import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisAccesspoliciesProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisAccesspolicies resource
 */
export class CacheRedisAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/accessPolicies@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {permissions: "string"}}
    );
  }
}
