import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Custom settings for changing the behavior of the App Service Environment.
   */
readonly clusterSettings?: NameValuePair[];

/**
   * Full view of the custom domain suffix configuration for ASEv3.
   */
readonly customDnsSuffixConfiguration?: CustomDnsSuffixConfiguration;

/**
   * Dedicated Host Count
   */
readonly dedicatedHostCount?: number;

/**
   * DNS suffix of the App Service Environment.
   */
readonly dnsSuffix?: string;

/**
   * Scale factor for front-ends.
   */
readonly frontEndScaleFactor?: number;

/**
   * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
   */
readonly internalLoadBalancingMode?: 'None''Publishing''Web''Web, Publishing';

/**
   * Number of IP SSL addresses reserved for the App Service Environment.
   */
readonly ipsslAddressCount?: number;

/**
   * Front-end VM size, e.g. "Medium", "Large".
   */
readonly multiSize?: string;

/**
   * Full view of networking configuration for an ASE.
   */
readonly networkingConfiguration?: AseV3NetworkingConfiguration;

/**
   * Upgrade Preference
   */
readonly upgradePreference?: 'Early''Late''Manual''None';

/**
   * User added ip ranges to allow on ASE db
   */
readonly userWhitelistedIpRanges?: string[];

/**
   * Description of the Virtual Network.
   */
readonly virtualNetwork: VirtualNetworkProfile;

/**
   * Whether or not this App Service Environment is zone-redundant.
   */
readonly zoneRedundant?: bool;

/**
   * Pair value.
   */
readonly value?: string;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
   */
readonly certificateUrl?: string;

/**
   * The default custom domain suffix to use for all sites deployed on the ASE.
   */
readonly dnsSuffix?: string;

/**
   * The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
   */
readonly keyVaultReferenceIdentity?: string;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Property to enable and disable new private endpoint connection creation on ASE
   */
readonly allowNewPrivateEndpointConnections?: bool;

/**
   * Property to enable and disable FTP on ASEV3
   */
readonly ftpEnabled?: bool;

/**
   * Customer provided Inbound IP Address. Only able to be set on Ase create.
   */
readonly inboundIpAddressOverride?: string;

/**
   * Property to enable and disable Remote Debug on ASEV3
   */
readonly remoteDebugEnabled?: bool;

/**
   * Resource id of the Virtual Network.
   */
readonly id: string;

/**
   * Subnet within the Virtual Network.
   */
readonly subnet?: string;
}

/**
 * WebHostingenvironments resource
 */
export class WebHostingenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsProps): string {
    return JSON.stringify(
        {properties: {clusterSettings: [{name: "string", value: "string"}], customDnsSuffixConfiguration: {kind: "string", properties: {certificateUrl: "string", dnsSuffix: "string", keyVaultReferenceIdentity: "string"}}, dedicatedHostCount: "${int}", dnsSuffix: "string", frontEndScaleFactor: "${int}", internalLoadBalancingMode: "string", ipsslAddressCount: "${int}", multiSize: "string", networkingConfiguration: {kind: "string", properties: {allowNewPrivateEndpointConnections: "${bool}", ftpEnabled: "${bool}", inboundIpAddressOverride: "string", remoteDebugEnabled: "${bool}"}}, upgradePreference: "string", userWhitelistedIpRanges: ["string"], virtualNetwork: {id: "string", subnet: "string"}, zoneRedundant: "${bool}"}, kind: "string"}
    );
  }
}
