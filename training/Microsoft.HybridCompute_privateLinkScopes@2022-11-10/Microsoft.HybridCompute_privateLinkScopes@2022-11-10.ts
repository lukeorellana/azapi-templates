import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface HybridcomputePrivatelinkscopesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | properties | Properties that define a Azure Arc PrivateLinkScope resource. | HybridComputePrivateLinkScopeProperties |

// | Name | Description | Value |
// |-|-|-|
// | publicNetworkAccess | Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints. | 'Disabled''Enabled' |
