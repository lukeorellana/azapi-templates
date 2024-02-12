import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesProps extends IAzAPIBaseProps {
/**
   * The identity used to retrieve the ingress certificate from Azure key vault.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (currently only UserAssigned allowed).
   */
readonly type: 'None''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface.
   */
readonly controlPlaneAccessInterface: InterfaceProperties;

/**
   * The virtual IP address(es) for the control plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to anycast traffic for this address to the control plane access interfaces on the active and standby nodes. In non-HA system this list should be omitted or empty.
   */
readonly controlPlaneAccessVirtualIpv4Addresses?: string[]Constranumbers:Pattern =^(([0-9];

/**
   * The core network technology generation (5G core or EPC / 4G core).
   */
readonly coreNetworkTechnology?: '5GC''EPC + 5GC''EPC';

/**
   * Configuration for uploading packet core diagnostics
   */
readonly diagnosticsUpload?: DiagnosticsUploadConfiguration;

/**
   * Configuration for sending packet core events to an Azure Event Hub.
   */
readonly eventHub?: EventHubConfiguration;

/**
   * The installation state of the packet core control plane resource.
   */
readonly installation?: Installation;

/**
   * Settings to allow interoperability with third party components e.g. RANs and UEs.
   */
readonly interopSettings?: For Bicep, you can use theany()function.;

/**
   * The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
   */
readonly localDiagnosticsAccess: LocalDiagnosticsAccessConfiguration;

/**
   * The platform where the packet core is deployed.
   */
readonly platform: PlatformConfiguration;

/**
   * Signaling configuration for the packet core.
   */
readonly signaling?: SignalingConfiguration;

/**
   * Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane.
   */
readonly sites: SiteResourceId[] Constranumbers:Min length = 1;

/**
   * The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
   */
readonly sku: 'G0''G1''G10''G2''G5';

/**
   * The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation.
   */
readonly ueMtu?: numberConstranumbers:Min value = 1280Max value = 1930;

/**
   * The desired version of the packet core software.
   */
readonly version?: string;

/**
   * The IPv4 address.
   */
readonly ipv4Address?: stringConstranumbers:Pattern =^(([0-9];

/**
   * The default IPv4 gateway (router).
   */
readonly ipv4Gateway?: stringConstranumbers:Pattern =^(([0-9];

/**
   * The IPv4 subnet.
   */
readonly ipv4Subnet?: stringConstranumbers:Pattern =^(([0-9];

/**
   * The Storage Account Container URL to upload diagnostics to.
   */
readonly storageAccountContainerUrl: string;

/**
   * Resource ID  of Azure Event Hub to send packet core events to.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][vV][eE][nN][tT][hH][uU][bB]/[nN][aA][mM][eE][sS][pP][aA][cC][eE][sS]/[^/?#]+/[eV][vV][eE][nN][tT][hH][uU][bB][sS]/[^/?#]+$;

/**
   * The duration (in seconds) between UE usage reports.
   */
readonly reportingInterval?: numberConstranumbers:Min value = 30Max value = 3600;

/**
   * The desired installation state
   */
readonly desiredState?: 'Installed''Uninstalled';

/**
   * How to authenticate users who access local diagnostics APIs.
   */
readonly authenticationType: 'AAD''Password';

/**
   * The HTTPS server TLS certificate used to secure local access to diagnostics.
   */
readonly httpsServerCertificate?: HttpsServerCertificate;

/**
   * The certificate URL, unversioned. For example:https://contosovault.vault.azure.net/certificates/ingress.
   */
readonly certificateUrl: string;

/**
   * The Azure Stack Edge device where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified.
   */
readonly azureStackEdgeDevice?: AzureStackEdgeDeviceResourceId;

/**
   * The Azure Stack HCI cluster where the packet core is deployed.
   */
readonly azureStackHciCluster?: AzureStackHCIClusterResourceId;

/**
   * Azure Arc connected cluster where the packet core is deployed.
   */
readonly connectedCluster?: ConnectedClusterResourceId;

/**
   * Azure Arc custom location where the packet core is deployed.
   */
readonly customLocation?: CustomLocationResourceId;

/**
   * The platform type where packet core is deployed.
   */
readonly type: '3P-AZURE-STACK-HCI''AKS-HCI';

/**
   * Azure Stack Edge device resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE]/[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE][dD][eE][vV][iI][cC][eE][sS]/[^/?#]+$;

/**
   * Azure Stack HCI cluster resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[aA][zZ][uU][rR][eE][sS][tT][aA][cC][kK][hH][cC][iI]/[cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$;

/**
   * Azure Arc connected cluster resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[kK][uU][bB][eE][rR][nN][eE][tT][eE][sS]/[cC][oO][nN][nN][eE][cC][tT][eE][dD][cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$;

/**
   * Azure Arc custom location resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][xX][tT][eE][nN][dD][eE][dD][lL][oO][cC][aA][tT][iI][oO][nN]/[cC][uU][sS][tT][oO][mM][lL][oO][cC][aA][tT][iI][oO][nN][sS]/[^/?#]+$;

/**
   * Configuration enabling 4G NAS reroute.
   */
readonly nasReroute?: NASRerouteConfiguration;

/**
   * The macro network's MME group ID. This is where unknown UEs are sent to via NAS reroute.
   */
readonly macroMmeGroupId: number Constranumbers:Min value = 0Max value = 65535;

/**
   * Site resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][tT][eE][sS]/[^/?#]+$;
}

/**
 * MobilenetworkPacketcorecontrolplanes resource
 */
export class MobilenetworkPacketcorecontrolplanes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkPacketcorecontrolplanesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkPacketcorecontrolplanesProps): string {
    return JSON.stringify(
        {properties: {controlPlaneAccessInterface: {ipv4Address: "string", ipv4Gateway: "string", ipv4Subnet: "string", name: "string"}, controlPlaneAccessVirtualIpv4Addresses: ["string"], coreNetworkTechnology: "string", diagnosticsUpload: {storageAccountContainerUrl: "string"}, eventHub: {id: "string", reportingInterval: "${int}"}, installation: {desiredState: "string"}, localDiagnosticsAccess: {authenticationType: "string", httpsServerCertificate: {certificateUrl: "string"}}, platform: {azureStackEdgeDevice: {id: "string"}, azureStackHciCluster: {id: "string"}, connectedCluster: {id: "string"}, customLocation: {id: "string"}, type: "string"}, signaling: {nasReroute: {macroMmeGroupId: "${int}"}}, sites: [{id: "string"}], sku: "string", ueMtu: "${int}", version: "string"}}
    );
  }
}
