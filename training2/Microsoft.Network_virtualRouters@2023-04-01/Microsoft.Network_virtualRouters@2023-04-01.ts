import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualroutersProps extends IAzAPIBaseProps {
/**
   * The Gateway on which VirtualRouter is hosted.
   */
readonly hostedGateway?: SubResource;

/**
   * The Subnet on which VirtualRouter is hosted.
   */
readonly hostedSubnet?: SubResource;

/**
   * VirtualRouter ASN.
   */
readonly virtualRouterAsn?: number;

/**
   * VirtualRouter IPs.
   */
readonly virtualRouterIps?: string[];

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkVirtualrouters resource
 */
export class NetworkVirtualrouters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualroutersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualRouters@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualroutersProps): string {
    return JSON.stringify(
        {properties: {hostedGateway: {id: "string"}, hostedSubnet: {id: "string"}, virtualRouterAsn: "${int}", virtualRouterIps: ["string"]}}
    );
  }
}
