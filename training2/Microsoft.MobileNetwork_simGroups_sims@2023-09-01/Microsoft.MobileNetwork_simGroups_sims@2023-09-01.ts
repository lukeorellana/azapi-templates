import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkSimgroupsSimsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:simGroups;

/**
   * The Ki value for the SIM.
   */
readonly authenticationKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$;

/**
   * An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
   */
readonly deviceType?: string;

/**
   * The integrated circuit card ID (ICCID) for the SIM.
   */
readonly integratedCircuitCardIdentifier?: stringConstranumbers:Pattern =^[0-9]{10,20}$;

/**
   * The international mobile subscriber identity (IMSI) for the SIM.
   */
readonly internationalMobileSubscriberIdentity: string Constranumbers:Pattern =^[0-9]{5,15}$;

/**
   * The Opc value for the SIM.
   */
readonly operatorKeyCode?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$;

/**
   * The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM.
   */
readonly simPolicy?: SimPolicyResourceId;

/**
   * A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
   */
readonly staticIpConfiguration?: SimStaticIpProperties[]Constranumbers:Min length = 1;

/**
   * SIM policy resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$;

/**
   * The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The attached data network must be in the same location as the SIM.
   */
readonly attachedDataNetwork?: AttachedDataNetworkResourceId;

/**
   * The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The slice must be in the same location as the SIM.
   */
readonly slice?: SliceResourceId;

/**
   * The static IP configuration for the SIM to use at the defined network scope.
   */
readonly staticIp?: SimStaticIpPropertiesStaticIp;

/**
   * Attached data network resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$;

/**
   * Slice resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$;

/**
   * The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network.
   */
readonly ipv4Address?: stringConstranumbers:Pattern =^(([0-9];
}

/**
 * MobilenetworkSimgroupsSims resource
 */
export class MobilenetworkSimgroupsSims extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkSimgroupsSimsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/simGroups/sims@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkSimgroupsSimsProps): string {
    return JSON.stringify(
        {properties: {authenticationKey: "string", deviceType: "string", integratedCircuitCardIdentifier: "string", internationalMobileSubscriberIdentity: "string", operatorKeyCode: "string", simPolicy: {id: "string"}, staticIpConfiguration: [{attachedDataNetwork: {id: "string"}, slice: {id: "string"}, staticIp: {ipv4Address: "string"}}]}}
    );
  }
}
