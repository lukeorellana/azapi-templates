import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpnserverconfigurationsProps extends IAzAPIBaseProps {

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
