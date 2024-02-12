import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkIpallocationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkIpallocations resource
 */
export class NetworkIpallocations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkIpallocationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/IpAllocations@2023-04-01";
  }

  protected getResourceBody(props: NetworkIpallocationsProps): string {
    return JSON.stringify(
        {properties: {allocationTags: {}, ipamAllocationId: "string", prefix: "string", prefixLength: "${int}", prefixType: "string", type: "string"}}
    );
  }
}
