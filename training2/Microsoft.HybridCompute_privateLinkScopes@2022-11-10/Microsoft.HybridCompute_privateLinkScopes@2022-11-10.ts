import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputePrivatelinkscopesProps extends IAzAPIBaseProps {
/**
   * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';
}

/**
 * HybridcomputePrivatelinkscopes resource
 */
export class HybridcomputePrivatelinkscopes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridcomputePrivatelinkscopesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridCompute/privateLinkScopes@2022-11-10";
  }

  protected getResourceBody(props: HybridcomputePrivatelinkscopesProps): string {
    return JSON.stringify(
        {properties: {publicNetworkAccess: "string"}}
    );
  }
}
