import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkSimsProps extends IAzAPIBaseProps {
/**
   * The ki value for the sim.
   */
readonly authenticationKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$;

/**
   * An optional free-form text field that can be used to record the device type this sim is associated with, for example 'Video camera'. The Azure portal allows Sims to be grouped and filtered based on this value.
   */
readonly deviceType?: string;

/**
   * The Integrated Circuit Card ID (ICC Id) for the sim.
   */
readonly integratedCircuitCardIdentifier?: stringConstranumbers:Pattern =^89[0-9]{17,18}$;

/**
   * The International Mobile Subscriber Identity (IMSI) for the sim.
   */
readonly internationalMobileSubscriberIdentity: string Constranumbers:Pattern =^[0-9]{5,15}$;

/**
   * Mobile network that this sim belongs to
   */
readonly mobileNetwork?: MobileNetworkResourceId;

/**
   * The Opc value for the sim.
   */
readonly operatorKeyCode?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$;

/**
   * The simPolicy used by this sim.
   */
readonly simPolicy?: SimPolicyResourceId;

/**
   * A list of static IP addresses assigned to this sim. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
   */
readonly staticIpConfiguration?: SimStaticIpProperties[]Constranumbers:Min length = 1;

/**
   * Mobile Network resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$;

/**
   * SIM Policy resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$;

/**
   * The attached data network on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address.
   */
readonly attachedDataNetwork?: AttachedDataNetworkResourceId;

/**
   * The network slice on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address.
   */
readonly slice?: SliceResourceId;

/**
   * The static IP configuration for the sim to use at the defined network scope.
   */
readonly staticIp?: SimStaticIpPropertiesStaticIp;

/**
   * Attached Data Network resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$;

/**
   * Slice resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$;

/**
   * The IPv4 address assigned to the sim at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attachedDataNetwork.
   */
readonly ipv4Address?: stringConstranumbers:Pattern =^(([0-9];
}

/**
 * MobilenetworkSims resource
 */
export class MobilenetworkSims extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkSimsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/sims@2022-03-01-preview";
  }

  protected getResourceBody(props: MobilenetworkSimsProps): string {
    return JSON.stringify(
        {properties: {authenticationKey: "string", deviceType: "string", integratedCircuitCardIdentifier: "string", internationalMobileSubscriberIdentity: "string", mobileNetwork: {id: "string"}, operatorKeyCode: "string", simPolicy: {id: "string"}, staticIpConfiguration: [{attachedDataNetwork: {id: "string"}, slice: {id: "string"}, staticIp: {ipv4Address: "string"}}]}}
    );
  }
}
