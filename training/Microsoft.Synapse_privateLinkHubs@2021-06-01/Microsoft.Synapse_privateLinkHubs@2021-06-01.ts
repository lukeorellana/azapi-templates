import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapsePrivatelinkhubsProps extends IAzAPIBaseProps {

}

export class SynapsePrivatelinkhubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapsePrivatelinkhubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/privateLinkHubs@2021-06-01";
  }

  protected getResourceBody(props: SynapsePrivatelinkhubsProps): string {
    return JSON.stringify(
      {properties: {provisioningState: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | properties | PrivateLinkHub resource properties | PrivateLinkHubProperties |

// | Name | Description | Value |
// |-|-|-|
// | provisioningState | PrivateLinkHub provisioning state | string |
