import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressrouteportsProps extends IAzAPIBaseProps {
/**
   * The identity of ExpressRoutePort, if configured.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Bandwidth of procured ports in Gbps.
   */
readonly bandwidthInGbps?: number;

/**
   * The billing type of the ExpressRoutePort resource.
   */
readonly billingType?: 'MeteredData''UnlimitedData';

/**
   * Encapsulation method on physical ports.
   */
readonly encapsulation?: 'Dot1Q''QinQ';

/**
   * The set of physical links of the ExpressRoutePort resource.
   */
readonly links?: ExpressRouteLink[];

/**
   * The name of the peering location that the ExpressRoutePort is mapped to physically.
   */
readonly peeringLocation?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Administrative state of the physical port.
   */
readonly adminState?: 'Disabled''Enabled';

/**
   * MacSec configuration.
   */
readonly macSecConfig?: ExpressRouteLinkMacSecConfig;

/**
   * Keyvault Secret Identifier URL containing Mac security CAK key.
   */
readonly cakSecretIdentifier?: string;

/**
   * Mac security cipher.
   */
readonly cipher?: 'GcmAes128''GcmAes256''GcmAesXpn128''GcmAesXpn256';

/**
   * Keyvault Secret Identifier URL containing Mac security CKN key.
   */
readonly cknSecretIdentifier?: string;

/**
   * Sci mode enabled/disabled.
   */
readonly sciState?: 'Disabled''Enabled';
}

/**
 * NetworkExpressrouteports resource
 */
export class NetworkExpressrouteports extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressrouteportsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ExpressRoutePorts@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressrouteportsProps): string {
    return JSON.stringify(
        {properties: {bandwidthInGbps: "${int}", billingType: "string", encapsulation: "string", links: [{id: "string", name: "string", properties: {adminState: "string", macSecConfig: {cakSecretIdentifier: "string", cipher: "string", cknSecretIdentifier: "string", sciState: "string"}}}], peeringLocation: "string"}}
    );
  }
}
