import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsresolversProps extends IAzAPIBaseProps {
/**
   * The reference to the virtual network. This cannot be changed after creation.
   */
readonly virtualNetwork: SubResource;

/**
   * Resource ID.
   */
readonly id: string;
}

/**
 * NetworkDnsresolvers resource
 */
export class NetworkDnsresolvers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsresolversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsResolvers@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsresolversProps): string {
    return JSON.stringify(
        {properties: {virtualNetwork: {id: "string"}}}
    );
  }
}
