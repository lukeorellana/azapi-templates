import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpngatewaysNatrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vpnGateways;

/**
   * The private IP address external mapping for NAT.
   */
readonly externalMappings?: VpnNatRuleMapping[];

/**
   * The private IP address internal mapping for NAT.
   */
readonly internalMappings?: VpnNatRuleMapping[];

/**
   * The IP Configuration ID this NAT rule applies to.
   */
readonly ipConfigurationId?: string;

/**
   * The Source NAT direction of a VPN NAT.
   */
readonly mode?: 'EgressSnat''IngressSnat';

/**
   * The type of NAT rule for VPN NAT.
   */
readonly type?: 'Dynamic''Static';

/**
   * Address space for Vpn NatRule mapping.
   */
readonly addressSpace?: string;

/**
   * Port range for Vpn NatRule mapping.
   */
readonly portRange?: string;
}

/**
 * NetworkVpngatewaysNatrules resource
 */
export class NetworkVpngatewaysNatrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpngatewaysNatrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnGateways/natRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpngatewaysNatrulesProps): string {
    return JSON.stringify(
        {properties: {externalMappings: [{addressSpace: "string", portRange: "string"}], internalMappings: [{addressSpace: "string", portRange: "string"}], ipConfigurationId: "string", mode: "string", type: "string"}}
    );
  }
}
