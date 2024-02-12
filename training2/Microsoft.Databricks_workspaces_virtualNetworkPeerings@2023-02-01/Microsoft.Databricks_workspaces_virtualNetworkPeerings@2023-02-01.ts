import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksWorkspacesVirtualnetworkpeeringsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
   */
readonly allowForwardedTraffic?: bool;

/**
   * If gateway links can be used in remote virtual networking to link to this virtual network.
   */
readonly allowGatewayTransit?: bool;

/**
   * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
   */
readonly allowVirtualNetworkAccess?: bool;

/**
   * The reference to the databricks virtual network address space.
   */
readonly databricksAddressSpace?: AddressSpace;

/**
   * The remote virtual network should be in the same region. See here to learn more (/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
   */
readonly databricksVirtualNetwork?: VirtualNetworkPeeringPropertiesFormatDatabricksVirtu...;

/**
   * The reference to the remote virtual network address space.
   */
readonly remoteAddressSpace?: AddressSpace;

/**
   * The remote virtual network should be in the same region. See here to learn more (/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
   */
readonly remoteVirtualNetwork: VirtualNetworkPeeringPropertiesFormatRemoteVirtualNe...;

/**
   * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
   */
readonly useRemoteGateways?: bool;

/**
   * A list of address blocks reserved for this virtual network in CIDR notation.
   */
readonly addressPrefixes?: string[];

/**
   * The Id of the databricks virtual network.
   */
readonly id?: string;

/**
   * The Id of the remote virtual network.
   */
readonly id?: string;
}

/**
 * DatabricksWorkspacesVirtualnetworkpeerings resource
 */
export class DatabricksWorkspacesVirtualnetworkpeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksWorkspacesVirtualnetworkpeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01";
  }

  protected getResourceBody(props: DatabricksWorkspacesVirtualnetworkpeeringsProps): string {
    return JSON.stringify(
        {properties: {allowForwardedTraffic: "${bool}", allowGatewayTransit: "${bool}", allowVirtualNetworkAccess: "${bool}", databricksAddressSpace: {addressPrefixes: ["string"]}, databricksVirtualNetwork: {id: "string"}, remoteAddressSpace: {addressPrefixes: ["string"]}, remoteVirtualNetwork: {id: "string"}, useRemoteGateways: "${bool}"}}
    );
  }
}
