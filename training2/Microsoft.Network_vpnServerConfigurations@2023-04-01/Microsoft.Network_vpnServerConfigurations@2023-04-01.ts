import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpnserverconfigurationsProps extends IAzAPIBaseProps {
/**
   * The set of aad vpn authentication parameters.
   */
readonly aadAuthenticationParameters?: AadAuthenticationParameters;

/**
   * List of all VpnServerConfigurationPolicyGroups.
   */
readonly configurationPolicyGroups?: VpnServerConfigurationPolicyGroup[];

/**
   * Radius client root certificate of VpnServerConfiguration.
   */
readonly radiusClientRootCertificates?: VpnServerConfigRadiusClientRootCertificate[];

/**
   * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
   */
readonly radiusServerAddress?: string;

/**
   * Radius Server root certificate of VpnServerConfiguration.
   */
readonly radiusServerRootCertificates?: VpnServerConfigRadiusServerRootCertificate[];

/**
   * Multiple Radius Server configuration for VpnServerConfiguration.
   */
readonly radiusServers?: RadiusServer[];

/**
   * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
   */
readonly radiusServerSecret?: string;

/**
   * VPN authentication types for the VpnServerConfiguration.
   */
readonly vpnAuthenticationTypes?: String array containing any of:'AAD''Certificate''Radius';

/**
   * VpnClientIpsecPolicies for VpnServerConfiguration.
   */
readonly vpnClientIpsecPolicies?: IpsecPolicy[];

/**
   * VPN client revoked certificate of VpnServerConfiguration.
   */
readonly vpnClientRevokedCertificates?: VpnServerConfigVpnClientRevokedCertificate[];

/**
   * VPN client root certificate of VpnServerConfiguration.
   */
readonly vpnClientRootCertificates?: VpnServerConfigVpnClientRootCertificate[];

/**
   * VPN protocols for the VpnServerConfiguration.
   */
readonly vpnProtocols?: String array containing any of:'IkeV2''OpenVPN';

/**
   * AAD Vpn authentication parameter AAD audience.
   */
readonly aadAudience?: string;

/**
   * AAD Vpn authentication parameter AAD issuer.
   */
readonly aadIssuer?: string;

/**
   * AAD Vpn authentication parameter AAD tenant.
   */
readonly aadTenant?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
   */
readonly isDefault?: bool;

/**
   * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
   */
readonly policyMembers?: VpnServerConfigurationPolicyGroupMember[];

/**
   * Priority for VpnServerConfigurationPolicyGroup.
   */
readonly priority?: number;

/**
   * The Vpn Policy member attribute type.
   */
readonly attributeType?: 'AADGroupId''CertificateGroupId''RadiusAzureGroupId';

/**
   * The value of Attribute used for this VpnServerConfigurationPolicyGroupMember.
   */
readonly attributeValue?: string;

/**
   * The Radius client root certificate thumbprint.
   */
readonly thumbprint?: string;

/**
   * The certificate public data.
   */
readonly publicCertData?: string;

/**
   * The address of this radius server.
   */
readonly radiusServerAddress: string;

/**
   * The initial score assigned to this radius server.
   */
readonly radiusServerScore?: number;

/**
   * The secret used for this radius server.
   */
readonly radiusServerSecret?: string;

/**
   * The DH Group used in IKE Phase 1 for initial SA.
   */
readonly dhGroup: 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None';

/**
   * The IKE encryption algorithm (IKE phase 2).
   */
readonly ikeEncryption: 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256';

/**
   * The IKE integrity algorithm (IKE phase 2).
   */
readonly ikeIntegrity: 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384';

/**
   * The IPSec encryption algorithm (IKE phase 1).
   */
readonly ipsecEncryption: 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None';

/**
   * The IPSec integrity algorithm (IKE phase 1).
   */
readonly ipsecIntegrity: 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256';

/**
   * The Pfs Group used in IKE Phase 2 for new child SA.
   */
readonly pfsGroup: 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM';

/**
   * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
   */
readonly saDataSizeKilobytes: number;

/**
   * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
   */
readonly saLifeTimeSeconds: number;

/**
   * The revoked VPN client certificate thumbprint.
   */
readonly thumbprint?: string;

/**
   * The certificate public data.
   */
readonly publicCertData?: string;
}

/**
 * NetworkVpnserverconfigurations resource
 */
export class NetworkVpnserverconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpnserverconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnServerConfigurations@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpnserverconfigurationsProps): string {
    return JSON.stringify(
        {properties: {aadAuthenticationParameters: {aadAudience: "string", aadIssuer: "string", aadTenant: "string"}, configurationPolicyGroups: [{id: "string", name: "string", properties: {isDefault: "${bool}", policyMembers: [{attributeType: "string", attributeValue: "string", name: "string"}], priority: "${int}"}}], name: "string", radiusClientRootCertificates: [{name: "string", thumbprint: "string"}], radiusServerAddress: "string", radiusServerRootCertificates: [{name: "string", publicCertData: "string"}], radiusServers: [{radiusServerAddress: "string", radiusServerScore: "${int}", radiusServerSecret: "string"}], radiusServerSecret: "string", vpnAuthenticationTypes: ["string"], vpnClientIpsecPolicies: [{dhGroup: "string", ikeEncryption: "string", ikeIntegrity: "string", ipsecEncryption: "string", ipsecIntegrity: "string", pfsGroup: "string", saDataSizeKilobytes: "${int}", saLifeTimeSeconds: "${int}"}], vpnClientRevokedCertificates: [{name: "string", thumbprint: "string"}], vpnClientRootCertificates: [{name: "string", publicCertData: "string"}], vpnProtocols: ["string"]}}
    );
  }
}
