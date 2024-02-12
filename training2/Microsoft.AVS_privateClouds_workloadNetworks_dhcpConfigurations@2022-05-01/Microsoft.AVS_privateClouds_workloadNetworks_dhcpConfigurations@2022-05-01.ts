import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksDhcpconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Display name of the DHCP entity.
   */
readonly displayName?: string;

/**
   * NSX revision number.
   */
readonly revision?: number;

/**
   * Set the object type
   */
readonly dhcpType: RELAYSERVER;

/**
   * Type of DHCP: SERVER or RELAY.
   */
readonly dhcpType: 'RELAY';

/**
   * DHCP Relay Addresses. Max 3.
   */
readonly serverAddresses?: string[];

/**
   * Type of DHCP: SERVER or RELAY.
   */
readonly dhcpType: 'SERVER';

/**
   * DHCP Server Lease Time.
   */
readonly leaseTime?: number;

/**
   * DHCP Server Address.
   */
readonly serverAddress?: string;
}

/**
 * AvsPrivatecloudsWorkloadnetworksDhcpconfigurations resource
 */
export class AvsPrivatecloudsWorkloadnetworksDhcpconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksDhcpconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksDhcpconfigurationsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", revision: "${int}", dhcpType: "string"}}
    );
  }
}
