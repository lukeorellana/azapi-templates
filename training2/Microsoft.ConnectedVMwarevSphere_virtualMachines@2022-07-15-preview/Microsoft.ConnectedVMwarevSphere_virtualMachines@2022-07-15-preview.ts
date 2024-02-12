import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesProps extends IAzAPIBaseProps {
/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: string;

/**
   * Gets or sets the extended location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * The extended location type.
   */
readonly type?: string;

/**
   * The type of managed service identity.
   */
readonly type: 'None''SystemAssigned';

/**
   * Firmware type
   */
readonly firmwareType?: 'bios''efi';

/**
   * Guest agent status properties.
   */
readonly guestAgentProfile?: GuestAgentProfile;

/**
   * Hardware properties.
   */
readonly hardwareProfile?: HardwareProfile;

/**
   * Gets or sets the inventory Item ID for the virtual machine.
   */
readonly inventoryItemId?: string;

/**
   * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
   */
readonly moRefId?: string;

/**
   * Network properties.
   */
readonly networkProfile?: NetworkProfile;

/**
   * OS properties.
   */
readonly osProfile?: OsProfile;

/**
   * Placement properties.
   */
readonly placementProfile?: PlacementProfile;

/**
   * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine willdeploy.
   */
readonly resourcePoolId?: string;

/**
   * Gets the security profile.
   */
readonly securityProfile?: SecurityProfile;

/**
   * Gets or sets the SMBIOS UUID of the vm.
   */
readonly smbiosUuid?: string;

/**
   * Storage properties.
   */
readonly storageProfile?: StorageProfile;

/**
   * Gets or sets the ARM Id of the template resource to deploy the virtual machine.
   */
readonly templateId?: string;

/**
   * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
   */
readonly vCenterId?: string;

/**
   * Gets or sets the Public Key provided by the client for enabling guest management.
   */
readonly clientPublicKey?: string;

/**
   * Gets or sets memory size in MBs for the vm.
   */
readonly memorySizeMB?: number;

/**
   * Gets or sets the number of cores per socket for the vm. Defaults to 1 if unspecified.
   */
readonly numCoresPerSocket?: number;

/**
   * Gets or sets the number of vCPUs for the vm.
   */
readonly numCPUs?: number;

/**
   * Gets or sets the list of network interfaces associated with the virtual machine.
   */
readonly networkInterfaces?: NetworkInterface[];

/**
   * Gets or sets the device key value.
   */
readonly deviceKey?: number;

/**
   * Gets or sets the ipsettings.
   */
readonly ipSettings?: NicIPSettings;

/**
   * Gets or sets the ARM Id of the network resource to connect the virtual machine.
   */
readonly networkId?: string;

/**
   * NIC type
   */
readonly nicType?: 'e1000''e1000e''pcnet32''vmxnet''vmxnet2''vmxnet3';

/**
   * Gets or sets the power on boot.
   */
readonly powerOnBoot?: 'disabled''enabled';

/**
   * Gets or sets the nic allocation method.
   */
readonly allocationMethod?: 'dynamic''linklayer''other''random''static''unset';

/**
   * Gets or sets the dns servers.
   */
readonly dnsServers?: string[];

/**
   * Gets or sets the gateway.
   */
readonly gateway?: string[];

/**
   * Gets or sets the ip address for the nic.
   */
readonly ipAddress?: string;

/**
   * Gets or sets the mask.
   */
readonly subnetMask?: string;

/**
   * Gets or sets administrator password.
   */
readonly adminPassword?: string;

/**
   * Gets or sets administrator username.
   */
readonly adminUsername?: string;

/**
   * Gets or sets computer name.
   */
readonly computerName?: string;

/**
   * Gets or sets the guestId.
   */
readonly guestId?: string;

/**
   * Specifies the linux configuration for update management.
   */
readonly linuxConfiguration?: OsProfileLinuxConfiguration;

/**
   * Gets or sets the type of the os.
   */
readonly osType?: 'Linux''Other''Windows';

/**
   * Specifies the windows configuration for update management.
   */
readonly windowsConfiguration?: OsProfileWindowsConfiguration;

/**
   * Specifies the patch settings.
   */
readonly patchSettings?: PatchSettings;

/**
   * Specifies the assessment mode.
   */
readonly assessmentMode?: string;

/**
   * Specifies the patch mode.
   */
readonly patchMode?: string;

/**
   * Specifies the patch settings.
   */
readonly patchSettings?: PatchSettings;

/**
   * Gets or sets the ARM Id of the cluster resource on which this virtual machine will deploy.
   */
readonly clusterId?: string;

/**
   * Gets or sets the ARM Id of the datastore resource on which the data for the virtual machine will be kept.
   */
readonly datastoreId?: string;

/**
   * Gets or sets the ARM Id of the host resource on which this virtual machine will deploy.
   */
readonly hostId?: string;

/**
   * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will deploy.
   */
readonly resourcePoolId?: string;

/**
   * Specifies the security settings like secure boot used while creating the virtual machine.
   */
readonly uefiSettings?: UefiSettings;

/**
   * Specifies whether secure boot should be enabled on the virtual machine.
   */
readonly secureBootEnabled?: bool;

/**
   * Gets or sets the list of virtual disks associated with the virtual machine.
   */
readonly disks?: VirtualDisk[];

/**
   * Gets or sets the controller id.
   */
readonly controllerKey?: number;

/**
   * Gets or sets the device key value.
   */
readonly deviceKey?: number;

/**
   * Gets or sets the device name.
   */
readonly deviceName?: string;

/**
   * Gets or sets the disk mode.
   */
readonly diskMode?: 'independent_nonpersistent''independent_persistent''persistent';

/**
   * Gets or sets the disk total size.
   */
readonly diskSizeGB?: number;

/**
   * Gets or sets the disk backing type.
   */
readonly diskType?: 'flat''pmem''rawphysical''rawvirtual''sesparse''sparse''unknown';

/**
   * Gets or sets the unit number of the disk on the controller.
   */
readonly unitNumber?: number;
}

/**
 * ConnectedvmwarevsphereVirtualmachines resource
 */
export class ConnectedvmwarevsphereVirtualmachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVirtualmachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVirtualmachinesProps): string {
    return JSON.stringify(
        {properties: {firmwareType: "string", guestAgentProfile: {clientPublicKey: "string"}, hardwareProfile: {memorySizeMB: "${int}", numCoresPerSocket: "${int}", numCPUs: "${int}"}, inventoryItemId: "string", moRefId: "string", networkProfile: {networkInterfaces: [{deviceKey: "${int}", ipSettings: {allocationMethod: "string", dnsServers: ["string"], gateway: ["string"], ipAddress: "string", subnetMask: "string"}, name: "string", networkId: "string", nicType: "string", powerOnBoot: "string"}]}, osProfile: {adminPassword: "string", adminUsername: "string", computerName: "string", guestId: "string", linuxConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}, osType: "string", windowsConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}}, placementProfile: {clusterId: "string", datastoreId: "string", hostId: "string", resourcePoolId: "string"}, resourcePoolId: "string", securityProfile: {uefiSettings: {secureBootEnabled: "${bool}"}}, smbiosUuid: "string", storageProfile: {disks: [{controllerKey: "${int}", deviceKey: "${int}", deviceName: "string", diskMode: "string", diskSizeGB: "${int}", diskType: "string", name: "string", unitNumber: "${int}"}]}, templateId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
