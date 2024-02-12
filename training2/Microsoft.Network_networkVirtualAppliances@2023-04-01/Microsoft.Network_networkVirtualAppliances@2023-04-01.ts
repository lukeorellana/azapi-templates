import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesProps extends IAzAPIBaseProps {
/**
   * The service principal that has read access to cloud-init and config blob.
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
   * Details required for Additional Network Interface.
   */
readonly additionalNics?: VirtualApplianceAdditionalNicProperties[];

/**
   * BootStrapConfigurationBlobs storage URLs.
   */
readonly bootStrapConfigurationBlobs?: string[];

/**
   * CloudInitConfiguration string in plain text.
   */
readonly cloudInitConfiguration?: string;

/**
   * CloudInitConfigurationBlob storage URLs.
   */
readonly cloudInitConfigurationBlobs?: string[];

/**
   * The delegation for the Virtual Appliance
   */
readonly delegation?: DelegationProperties;

/**
   * Network Virtual Appliance SKU.
   */
readonly nvaSku?: VirtualApplianceSkuProperties;

/**
   * The delegation for the Virtual Appliance
   */
readonly partnerManagedResource?: PartnerManagedResourceProperties;

/**
   * Public key for SSH login.
   */
readonly sshPublicKey?: string;

/**
   * VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported.
   */
readonly virtualApplianceAsn?: number;

/**
   * The Virtual Hub where Network Virtual Appliance is being deployed.
   */
readonly virtualHub?: SubResource;

/**
   * Flag (true or false) for Intent for Public Ip on additional nic
   */
readonly hasPublicIp?: bool;

/**
   * The service name to which the NVA is delegated.
   */
readonly serviceName?: string;

/**
   * Virtual Appliance Scale Unit.
   */
readonly bundledScaleUnit?: string;

/**
   * Virtual Appliance Version.
   */
readonly marketPlaceVersion?: string;

/**
   * Virtual Appliance Vendor.
   */
readonly vendor?: string;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkNetworkvirtualappliances resource
 */
export class NetworkNetworkvirtualappliances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkvirtualappliancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkVirtualAppliances@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkvirtualappliancesProps): string {
    return JSON.stringify(
        {properties: {additionalNics: [{hasPublicIp: "${bool}", name: "string"}], bootStrapConfigurationBlobs: ["string"], cloudInitConfiguration: "string", cloudInitConfigurationBlobs: ["string"], delegation: {serviceName: "string"}, nvaSku: {bundledScaleUnit: "string", marketPlaceVersion: "string", vendor: "string"}, partnerManagedResource: {}, sshPublicKey: "string", virtualApplianceAsn: "${int}", virtualHub: {id: "string"}}}
    );
  }
}
