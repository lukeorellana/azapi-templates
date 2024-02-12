import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualwansProps extends IAzAPIBaseProps {

}

/**
 * NetworkVirtualwans resource
 */
export class NetworkVirtualwans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualwansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualWans@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualwansProps): string {
    return JSON.stringify(
        {properties: {allowBranchToBranchTraffic: "${bool}", allowVnetToVnetTraffic: "${bool}", disableVpnEncryption: "${bool}", type: "string"}}
    );
  }
}
