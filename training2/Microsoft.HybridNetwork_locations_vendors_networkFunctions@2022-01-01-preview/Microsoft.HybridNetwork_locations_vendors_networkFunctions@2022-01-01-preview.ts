import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkLocationsVendorsNetworkfunctionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: vendors;

/**
   * An array of network function vendor configurations.
   */
readonly networkFunctionVendorConfigurations?: NetworkFunctionVendorConfiguration[];

/**
   * The vendor controlled provisioning state of the vendor network function.
   */
readonly vendorProvisioningState?: 'Deprovisioned''NotProvisioned''Provisioned''Provisioning''Unknown''UserDataValidationFailed';

/**
   * The network interface configurations.
   */
readonly networkInterfaces?: NetworkInterface[];

/**
   * Specifies the operating system settings for the role instance.
   */
readonly osProfile?: OsProfile;

/**
   * The name of the vendor network function role.
   */
readonly roleName?: string;

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
}

/**
 * HybridnetworkLocationsVendorsNetworkfunctions resource
 */
export class HybridnetworkLocationsVendorsNetworkfunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkLocationsVendorsNetworkfunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/locations/vendors/networkFunctions@2022-01-01-preview";
  }

  protected getResourceBody(props: HybridnetworkLocationsVendorsNetworkfunctionsProps): string {
    return JSON.stringify(
        {properties: {networkFunctionVendorConfigurations: [{networkInterfaces: [{ipConfigurations: [{dnsServers: ["string"], gateway: "string", ipAddress: "string", ipAllocationMethod: "string", ipVersion: "string", subnet: "string"}], macAddress: "string", networkInterfaceName: "string", vmSwitchType: "string"}], osProfile: {adminUsername: "string", customData: "string", customDataRequired: "${bool}", linuxConfiguration: {ssh: {publicKeys: [{keyData: "string", path: "string"}]}}}, roleName: "string"}], vendorProvisioningState: "string"}}
    );
  }
}
