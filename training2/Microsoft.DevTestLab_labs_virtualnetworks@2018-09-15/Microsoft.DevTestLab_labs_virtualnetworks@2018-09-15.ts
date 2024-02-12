import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsVirtualnetworksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The allowed subnets of the virtual network.
   */
readonly allowedSubnets?: Subnet[];

/**
   * The description of the virtual network.
   */
readonly description?: string;

/**
   * The Microsoft.Network resource identifier of the virtual network.
   */
readonly externalProviderResourceId?: string;

/**
   * The subnet overrides of the virtual network.
   */
readonly subnetOverrides?: SubnetOverride[];

/**
   * The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)).
   */
readonly allowPublicIp?: 'Allow''Default''Deny';

/**
   * The name of the subnet as seen in the lab.
   */
readonly labSubnetName?: string;

/**
   * The resource ID of the subnet.
   */
readonly resourceId?: string;

/**
   * The name given to the subnet within the lab.
   */
readonly labSubnetName?: string;

/**
   * The resource ID of the subnet.
   */
readonly resourceId?: string;

/**
   * Properties that virtual machines on this subnet will share.
   */
readonly sharedPublicIpAddressConfiguration?: SubnetSharedPublicIpAddressConfiguration;

/**
   * Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny).
   */
readonly useInVmCreationPermission?: 'Allow''Default''Deny';

/**
   * Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
   */
readonly usePublicIpAddressPermission?: 'Allow''Default''Deny';

/**
   * The virtual network pool associated with this subnet.
   */
readonly virtualNetworkPoolName?: string;

/**
   * Backend ports that virtual machines on this subnet are allowed to expose
   */
readonly allowedPorts?: Port[];

/**
   * Backend port of the target virtual machine.
   */
readonly backendPort?: number;

/**
   * Protocol type of the port.
   */
readonly transportProtocol?: 'Tcp''Udp';
}

/**
 * DevtestlabLabsVirtualnetworks resource
 */
export class DevtestlabLabsVirtualnetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsVirtualnetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsVirtualnetworksProps): string {
    return JSON.stringify(
        {properties: {allowedSubnets: [{allowPublicIp: "string", labSubnetName: "string", resourceId: "string"}], description: "string", externalProviderResourceId: "string", subnetOverrides: [{labSubnetName: "string", resourceId: "string", sharedPublicIpAddressConfiguration: {allowedPorts: [{backendPort: "${int}", transportProtocol: "string"}]}, useInVmCreationPermission: "string", usePublicIpAddressPermission: "string", virtualNetworkPoolName: "string"}]}}
    );
  }
}
