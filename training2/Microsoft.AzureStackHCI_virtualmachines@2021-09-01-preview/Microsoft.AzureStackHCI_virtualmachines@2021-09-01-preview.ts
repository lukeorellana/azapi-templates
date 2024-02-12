import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesProps extends IAzAPIBaseProps {
/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * Identity for the resource.
   */
readonly identity?: Identity;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * Guest agent status properties.
   */
readonly guestAgentProfile?: GuestAgentProfile;

/**
   * HardwareProfile - Specifies the hardware settings for the virtual machine.
   */
readonly hardwareProfile?: VirtualmachinesPropertiesHardwareProfile;

/**
   * NetworkProfile - describes the network configuration the virtual machine
   */
readonly networkProfile?: VirtualmachinesPropertiesNetworkProfile;

/**
   * OsProfile - describes the configuration of the operating system and sets login data
   */
readonly osProfile?: VirtualmachinesPropertiesOsProfile;

/**
   * name of the object to be used in moc
   */
readonly resourceName?: string;

/**
   * SecurityProfile - Specifies the security settings for the virtual machine.
   */
readonly securityProfile?: VirtualmachinesPropertiesSecurityProfile;

/**
   * StorageProfile - contains information about the disks and storage information for the virtual machine
   */
readonly storageProfile?: VirtualmachinesPropertiesStorageProfile;

/**
   * 
   */
readonly dynamicMemoryConfig?: VirtualmachinesPropertiesHardwareProfileDynamicMemor...;

/**
   * RAM in gb for the virtual machine
   */
readonly memoryGB?: number;

/**
   * number of processors for the virtual machine
   */
readonly processors?: number;

/**
   * 
   */
readonly vmSize?: string;

/**
   * 
   */
readonly maximumMemoryGB?: number;

/**
   * 
   */
readonly minimumMemoryGB?: number;

/**
   * 
   */
readonly targetMemoryBuffer?: number;

/**
   * NetworkInterfaces - list of network interfaces to be attached to the virtual machine
   */
readonly networkInterfaces?: VirtualmachinesPropertiesNetworkProfileNetworkInterf...[];

/**
   * ID - Resource Id of the network interface
   */
readonly id?: string;

/**
   * AdminPassword - admin password
   */
readonly adminPassword?: string;

/**
   * AdminUsername - admin username
   */
readonly adminUsername?: string;

/**
   * ComputerName - name of the compute
   */
readonly computerName?: string;

/**
   * LinuxConfiguration - linux specific configuration values for the virtual machine
   */
readonly linuxConfiguration?: VirtualmachinesPropertiesOsProfileLinuxConfiguration;

/**
   * OsType - string specifying whether the OS is Linux or Windows
   */
readonly osType?: 'Linux''Windows';

/**
   * Windows Configuration for the virtual machine
   */
readonly windowsConfiguration?: VirtualmachinesPropertiesOsProfileWindowsConfigurati...;

/**
   * DisablePasswordAuthentication - whether password authentication should be disabled
   */
readonly disablePasswordAuthentication?: bool;

/**
   * Usedâ¯to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
   */
readonly provisionVMAgent?: bool;

/**
   * SSH - contains settings related to ssh configuration
   */
readonly ssh?: VirtualmachinesPropertiesOsProfileLinuxConfiguration...;

/**
   * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
   */
readonly publicKeys?: VirtualmachinesPropertiesOsProfileLinuxConfiguration...[];

/**
   * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Li      nux VMs in Azure.
   */
readonly keyData?: string;

/**
   * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
   */
readonly path?: string;

/**
   * Whether to EnableAutomaticUpdates on the machine
   */
readonly enableAutomaticUpdates?: bool;

/**
   * Usedâ¯to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
   */
readonly provisionVMAgent?: bool;

/**
   * SSH Configuration
   */
readonly ssh?: VirtualmachinesPropertiesOsProfileWindowsConfigurati...;

/**
   * TimeZone for the virtual machine
   */
readonly timeZone?: string;

/**
   * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
   */
readonly publicKeys?: VirtualmachinesPropertiesOsProfileWindowsConfigurati...[];

/**
   * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Li      nux VMs in Azure.
   */
readonly keyData?: string;

/**
   * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
   */
readonly path?: string;

/**
   * 
   */
readonly enableTPM?: bool;

/**
   * 
   */
readonly uefiSettings?: VirtualmachinesPropertiesSecurityProfileUefiSettings;

/**
   * Specifies whether secure boot should be enabled on the virtual machine.
   */
readonly secureBootEnabled?: bool;

/**
   * adds data disks to the virtual machine
   */
readonly dataDisks?: VirtualmachinesPropertiesStorageProfileDataDisksItem[];

/**
   * Which Image to use for the virtual machine
   */
readonly imageReference?: VirtualmachinesPropertiesStorageProfileImageReferenc...;

/**
   * VHD to attach as OS disk
   */
readonly osDisk?: VirtualmachinesPropertiesStorageProfileOsDisk;

/**
   * Name of the storage container that hosts the VM configuration file
   */
readonly vmConfigContainerName?: string;

/**
   * Specifies the virtual hard disk's ID
   */
readonly id?: string;
}

/**
 * AzurestackhciVirtualmachines resource
 */
export class AzurestackhciVirtualmachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualmachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualmachinesProps): string {
    return JSON.stringify(
        {properties: {guestAgentProfile: {}, hardwareProfile: {dynamicMemoryConfig: {maximumMemoryGB: "${int}", minimumMemoryGB: "${int}", targetMemoryBuffer: "${int}"}, memoryGB: "${int}", processors: "${int}", vmSize: "string"}, networkProfile: {networkInterfaces: [{id: "string"}]}, osProfile: {adminPassword: "string", adminUsername: "string", computerName: "string", linuxConfiguration: {disablePasswordAuthentication: "${bool}", provisionVMAgent: "${bool}", ssh: {publicKeys: [{keyData: "string", path: "string"}]}}, osType: "string", windowsConfiguration: {enableAutomaticUpdates: "${bool}", provisionVMAgent: "${bool}", ssh: {publicKeys: [{keyData: "string", path: "string"}]}, timeZone: "string"}}, resourceName: "string", securityProfile: {enableTPM: "${bool}", uefiSettings: {secureBootEnabled: "${bool}"}}, storageProfile: {dataDisks: [{name: "string"}], imageReference: {name: "string"}, osDisk: {id: "string"}, vmConfigContainerName: "string"}}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
