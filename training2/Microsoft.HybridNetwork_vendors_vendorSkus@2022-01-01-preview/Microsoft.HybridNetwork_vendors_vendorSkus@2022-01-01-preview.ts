import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkVendorsVendorskusProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vendors;

/**
   * The sku deployment mode.
   */
readonly deploymentMode?: 'Azure''PrivateEdgeZone''Unknown';

/**
   * The parameters for the managed application to be supplied by the vendor.
   */
readonly managedApplicationParameters?: For Bicep, you can use theany()function.;

/**
   * The template for the managed application deployment.
   */
readonly managedApplicationTemplate?: For Bicep, you can use theany()function.;

/**
   * The template definition of the network function.
   */
readonly networkFunctionTemplate?: NetworkFunctionTemplate;

/**
   * The network function type.
   */
readonly networkFunctionType?: 'ContainerizedNetworkFunction''Unknown''VirtualNetworkFunction';

/**
   * Indicates if the vendor sku is in preview mode.
   */
readonly preview?: bool;

/**
   * The sku type.
   */
readonly skuType?: 'EvolvedPacketCore''Firewall''SDWAN''Unknown';

/**
   * An array of network function role definitions.
   */
readonly networkFunctionRoleConfigurations?: NetworkFunctionRoleConfiguration[];

/**
   * Specifies the custom settings for the virtual machine.
   */
readonly customProfile?: CustomProfile;

/**
   * The network interface configurations.
   */
readonly networkInterfaces?: NetworkInterface[];

/**
   * Specifies the operating system settings for the role instance. This value can be updated during the deployment of network function.
   */
readonly osProfile?: OsProfile;

/**
   * The name of the network function role.
   */
readonly roleName?: string;

/**
   * Role type.
   */
readonly roleType?: 'Unknown''VirtualMachine';

/**
   * Specifies the storage settings for the virtual machine disks.
   */
readonly storageProfile?: StorageProfile;

/**
   * The user parameters for customers. The format of user data parameters has to be matched with the provided user data template.
   */
readonly userDataParameters?: For Bicep, you can use theany()function.;

/**
   * The user data template for customers. This is a json schema template describing the format and data type of user data parameters.
   */
readonly userDataTemplate?: For Bicep, you can use theany()function.;

/**
   * The size of the virtual machine.
   */
readonly virtualMachineSize?: 'Standard_D11_v2''Standard_D12_v2''Standard_D13_v2''Standard_D1_v2''Standard_D2_v2''Standard_D3_v2''Standard_D4_v2''Standard_D5_v2''Standard_DS11_v2''Standard_DS12_v2''Standard_DS13_v2''Standard_DS1_v2''Standard_DS2_v2''Standard_DS3_v2''Standard_DS4_v2''Standard_DS5_v2''Standard_F1''Standard_F16''Standard_F16s''Standard_F1s''Standard_F2''Standard_F2s''Standard_F4''Standard_F4s''Standard_F8''Standard_F8s''Unknown';

/**
   * Path for metadata configuration.
   */
readonly metadataConfigurationPath?: string;

/**
   * A list of IP configurations of the network interface.
   */
readonly ipConfigurations?: NetworkInterfaceIPConfiguration[];

/**
   * The MAC address of the network interface.
   */
readonly macAddress?: string;

/**
   * The name of the network interface.
   */
readonly networkInterfaceName?: string;

/**
   * The type of the VM switch.
   */
readonly vmSwitchType?: 'Lan''Management''Unknown''Wan';

/**
   * The list of DNS servers IP addresses.
   */
readonly dnsServers?: string[];

/**
   * The value of the gateway.
   */
readonly gateway?: string;

/**
   * The value of the IP address.
   */
readonly ipAddress?: string;

/**
   * IP address allocation method.
   */
readonly ipAllocationMethod?: 'Dynamic''Static''Unknown';

/**
   * IP address version.
   */
readonly ipVersion?: 'IPv4''Unknown';

/**
   * The value of the subnet.
   */
readonly subnet?: string;

/**
   * Specifies the name of the administrator account.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters{li} For root access to the Linux VM, seeUsing root privileges on Linux virtual machines in Azure{li} For a list of built-in system users on Linux that should not be used in this field, seeSelecting User Names for Linux on Azure.
   */
readonly adminUsername?: string;

/**
   * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes.Note: Do not pass any secrets or passwords in customData propertyThis property cannot be updated after the VM is created.customData is passed to the VM to be saved as a file. For more information seeCustom Data on Azure VMsFor using cloud-init for your Linux VM, seeUsing cloud-init to customize a Linux VM during creation
   */
readonly customData?: string;

/**
   * Indicates if custom data is required to deploy this role.
   */
readonly customDataRequired?: bool;

/**
   * Specifies the Linux operating system settings on the virtual machine.For a list of supported Linux distributions, seeLinux on Azure-Endorsed DistributionsFor running non-endorsed distributions, seeInformation for Non-Endorsed Distributions.
   */
readonly linuxConfiguration?: LinuxConfiguration;

/**
   * Specifies the ssh key configuration for a Linux OS.
   */
readonly ssh?: SshConfiguration;

/**
   * The list of SSH public keys used to authenticate with linux based VMs.
   */
readonly publicKeys?: SshPublicKey[];

/**
   * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Linux VMs in Azure.
   */
readonly keyData?: string;

/**
   * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
   */
readonly path?: string;

/**
   * Specifies the parameters that are used to add a data disk to a virtual machine.
   */
readonly dataDisks?: DataDisk[];

/**
   * The image reference properties.
   */
readonly imageReference?: ImageReference;

/**
   * Specifies information about the operating system disk used by the virtual machine.
   */
readonly osDisk?: OsDisk;

/**
   * Specifies how the virtual machine should be created.
   */
readonly createOption?: 'Empty''Unknown';

/**
   * Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image.
   */
readonly diskSizeGB?: number;

/**
   * Specifies in decimal numbers, the exact version of image used to create the virtual machine.
   */
readonly exactVersion?: string;

/**
   * Specifies the offer of the image used to create the virtual machine.
   */
readonly offer?: string;

/**
   * The image publisher.
   */
readonly publisher?: string;

/**
   * The image SKU.
   */
readonly sku?: string;

/**
   * Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
   */
readonly version?: string;

/**
   * Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri.
   */
readonly diskSizeGB?: number;

/**
   * The OS type.
   */
readonly osType?: 'Linux''Unknown''Windows';

/**
   * The virtual hard disk.
   */
readonly vhd?: VirtualHardDisk;

/**
   * Specifies the virtual hard disk's uri.
   */
readonly uri?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;
}

/**
 * HybridnetworkVendorsVendorskus resource
 */
export class HybridnetworkVendorsVendorskus extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkVendorsVendorskusProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/vendors/vendorSkus@2022-01-01-preview";
  }

  protected getResourceBody(props: HybridnetworkVendorsVendorskusProps): string {
    return JSON.stringify(
        {properties: {deploymentMode: "string", networkFunctionTemplate: {networkFunctionRoleConfigurations: [{customProfile: {metadataConfigurationPath: "string"}, networkInterfaces: [{ipConfigurations: [{dnsServers: ["string"], gateway: "string", ipAddress: "string", ipAllocationMethod: "string", ipVersion: "string", subnet: "string"}], macAddress: "string", networkInterfaceName: "string", vmSwitchType: "string"}], osProfile: {adminUsername: "string", customData: "string", customDataRequired: "${bool}", linuxConfiguration: {ssh: {publicKeys: [{keyData: "string", path: "string"}]}}}, roleName: "string", roleType: "string", storageProfile: {dataDisks: [{createOption: "string", diskSizeGB: "${int}", name: "string"}], imageReference: {exactVersion: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, osDisk: {diskSizeGB: "${int}", name: "string", osType: "string", vhd: {uri: "string"}}}, virtualMachineSize: "string"}]}, networkFunctionType: "string", preview: "${bool}", skuType: "string"}}
    );
  }
}
