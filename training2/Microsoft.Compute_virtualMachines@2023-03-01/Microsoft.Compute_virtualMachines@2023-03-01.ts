import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinesProps extends IAzAPIBaseProps {
/**
   * The extended location of the Virtual Machine.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The identity of the virtual machine, if configured.
   */
readonly identity?: VirtualMachineIdentity;

/**
   * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then clickWant to deploy programmatically, Get Started ->. Enter any required information and then clickSave.
   */
readonly plan?: Plan;

/**
   * The virtual machine zones.
   */
readonly zones?: string[];

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
   */
readonly product?: string;

/**
   * The promotion code.
   */
readonly promotionCode?: string;

/**
   * The publisher ID.
   */
readonly publisher?: string;

/**
   * Specifies additional capabilities enabled or disabled on the virtual machine.
   */
readonly additionalCapabilities?: AdditionalCapabilities;

/**
   * Specifies the gallery applications that should be made available to the VM/VMSS.
   */
readonly applicationProfile?: ApplicationProfile;

/**
   * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, seeAvailability sets overview. For more information on Azure planned maintenance, seeMaintenance and updates for Virtual Machines in Azure. Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
   */
readonly availabilitySet?: SubResource;

/**
   * Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01.
   */
readonly billingProfile?: BillingProfile;

/**
   * Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01.
   */
readonly capacityReservation?: CapacityReservationProfile;

/**
   * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
   */
readonly diagnosticsProfile?: DiagnosticsProfile;

/**
   * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
   */
readonly evictionPolicy?: 'Deallocate''Delete';

/**
   * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
   */
readonly extensionsTimeBudget?: string;

/**
   * Specifies the hardware settings for the virtual machine.
   */
readonly hardwareProfile?: HardwareProfile;

/**
   * Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01.
   */
readonly host?: SubResource;

/**
   * Specifies information about the dedicated host group that the virtual machine resides in.Note:User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01.
   */
readonly hostGroup?: SubResource;

/**
   * Specifies that the image or disk that is being used was licensed on-premises.Possible values for Windows Server operating system are:Windows_ClientWindows_ServerPossible values for Linux Server operating system are:RHEL_BYOS (for RHEL)SLES_BYOS (for SUSE)For more information, seeAzure Hybrid Use Benefit for Windows ServerAzure Hybrid Use Benefit for Linux ServerMinimum api-version: 2015-06-15
   */
readonly licenseType?: string;

/**
   * Specifies the network interfaces of the virtual machine.
   */
readonly networkProfile?: NetworkProfile;

/**
   * Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
   */
readonly osProfile?: OSProfile;

/**
   * Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum apiâversion: 2020â12â01.
   */
readonly platformFaultDomain?: number;

/**
   * Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01
   */
readonly priority?: 'Low''Regular''Spot';

/**
   * Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01.
   */
readonly proximityPlacementGroup?: SubResource;

/**
   * Specifies Scheduled Event related configurations.
   */
readonly scheduledEventsProfile?: ScheduledEventsProfile;

/**
   * Specifies the Security related profile settings for the virtual machine.
   */
readonly securityProfile?: SecurityProfile;

/**
   * Specifies the storage settings for the virtual machine disks.
   */
readonly storageProfile?: StorageProfile;

/**
   * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
   */
readonly userData?: string;

/**
   * Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum apiâversion: 2019â03â01.
   */
readonly virtualMachineScaleSet?: SubResource;

/**
   * The flag that enables or disables hibernation capability on the VM.
   */
readonly hibernationEnabled?: bool;

/**
   * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
   */
readonly ultraSSDEnabled?: bool;

/**
   * Specifies the gallery applications that should be made available to the VM/VMSS
   */
readonly galleryApplications?: VMGalleryApplication[];

/**
   * Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
   */
readonly configurationReference?: string;

/**
   * If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS
   */
readonly enableAutomaticUpgrade?: bool;

/**
   * Optional, Specifies the order in which the packages have to be installed
   */
readonly order?: number;

/**
   * Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
   */
readonly packageReferenceId: string;

/**
   * Optional, If true, any failure for any operation in the VmApplication will fail the deployment
   */
readonly treatFailureAsDeploymentFailure?: bool;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars.This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price.The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS.Possible values are:- Any decimal value greater than zero. Example: 0.01538-1 â indicates default price to be up-to on-demand.You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you.Minimum api-version: 2019-03-01. To specify a decimal value, use thejson()function.
   */
readonly maxPrice?: number or json decimal;

/**
   * Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer tohttps://aka.ms/CapacityReservationfor more details.
   */
readonly capacityReservationGroup?: SubResource;

/**
   * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status.NOTE: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor.
   */
readonly bootDiagnostics?: BootDiagnostics;

/**
   * Whether boot diagnostics should be enabled on the Virtual Machine.
   */
readonly enabled?: bool;

/**
   * Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used.
   */
readonly storageUri?: string;

/**
   * Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs:List all available virtual machine sizes in an availability set,List all available virtual machine sizes in a region,List all available virtual machine sizes for resizing. For more information about virtual machine sizes, seeSizes for virtual machines. The available VM sizes depend on region and availability set.
   */
readonly vmSize?: 'Basic_A0''Basic_A1''Basic_A2''Basic_A3''Basic_A4''Standard_A0''Standard_A1''Standard_A10''Standard_A11''Standard_A1_v2''Standard_A2''Standard_A2_v2''Standard_A2m_v2''Standard_A3''Standard_A4''Standard_A4_v2''Standard_A4m_v2''Standard_A5''Standard_A6''Standard_A7''Standard_A8''Standard_A8_v2''Standard_A8m_v2''Standard_A9''Standard_B1ms''Standard_B1s''Standard_B2ms''Standard_B2s''Standard_B4ms''Standard_B8ms''Standard_D1''Standard_D11''Standard_D11_v2''Standard_D12''Standard_D12_v2''Standard_D13''Standard_D13_v2''Standard_D14''Standard_D14_v2''Standard_D15_v2''Standard_D16_v3''Standard_D16s_v3''Standard_D1_v2''Standard_D2''Standard_D2_v2''Standard_D2_v3''Standard_D2s_v3''Standard_D3''Standard_D32_v3''Standard_D32s_v3''Standard_D3_v2''Standard_D4''Standard_D4_v2''Standard_D4_v3''Standard_D4s_v3''Standard_D5_v2''Standard_D64_v3''Standard_D64s_v3''Standard_D8_v3''Standard_D8s_v3''Standard_DS1''Standard_DS11''Standard_DS11_v2''Standard_DS12''Standard_DS12_v2''Standard_DS13''Standard_DS13-2_v2''Standard_DS13-4_v2''Standard_DS13_v2''Standard_DS14''Standard_DS14-4_v2''Standard_DS14-8_v2''Standard_DS14_v2''Standard_DS15_v2''Standard_DS1_v2''Standard_DS2''Standard_DS2_v2''Standard_DS3''Standard_DS3_v2''Standard_DS4''Standard_DS4_v2''Standard_DS5_v2''Standard_E16_v3''Standard_E16s_v3''Standard_E2_v3''Standard_E2s_v3''Standard_E32-16_v3''Standard_E32-8s_v3''Standard_E32_v3''Standard_E32s_v3''Standard_E4_v3''Standard_E4s_v3''Standard_E64-16s_v3''Standard_E64-32s_v3''Standard_E64_v3''Standard_E64s_v3''Standard_E8_v3''Standard_E8s_v3''Standard_F1''Standard_F16''Standard_F16s''Standard_F16s_v2''Standard_F1s''Standard_F2''Standard_F2s''Standard_F2s_v2''Standard_F32s_v2''Standard_F4''Standard_F4s''Standard_F4s_v2''Standard_F64s_v2''Standard_F72s_v2''Standard_F8''Standard_F8s''Standard_F8s_v2''Standard_G1''Standard_G2''Standard_G3''Standard_G4''Standard_G5''Standard_GS1''Standard_GS2''Standard_GS3''Standard_GS4''Standard_GS4-4''Standard_GS4-8''Standard_GS5''Standard_GS5-16''Standard_GS5-8''Standard_H16''Standard_H16m''Standard_H16mr''Standard_H16r''Standard_H8''Standard_H8m''Standard_L16s''Standard_L32s''Standard_L4s''Standard_L8s''Standard_M128-32ms''Standard_M128-64ms''Standard_M128ms''Standard_M128s''Standard_M64-16ms''Standard_M64-32ms''Standard_M64ms''Standard_M64s''Standard_NC12''Standard_NC12s_v2''Standard_NC12s_v3''Standard_NC24''Standard_NC24r''Standard_NC24rs_v2''Standard_NC24rs_v3''Standard_NC24s_v2''Standard_NC24s_v3''Standard_NC6''Standard_NC6s_v2''Standard_NC6s_v3''Standard_ND12s''Standard_ND24rs''Standard_ND24s''Standard_ND6s''Standard_NV12''Standard_NV24''Standard_NV6';

/**
   * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. This feature is still in preview mode and is not supported for VirtualMachineScaleSet. Please follow the instructions inVM Customizationfor more details.
   */
readonly vmSizeProperties?: VMSizeProperties;

/**
   * Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response ofList all available virtual machine sizes in a region.
   */
readonly vCPUsAvailable?: number;

/**
   * Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response ofList all available virtual machine sizes in a region.Setting this property to 1 also means that hyper-threading is disabled.
   */
readonly vCPUsPerCore?: number;

/**
   * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
   */
readonly networkApiVersion?: '2020-11-01';

/**
   * Specifies the networking configurations that will be used to create the virtual machine networking resources.
   */
readonly networkInterfaceConfigurations?: VirtualMachineNetworkInterfaceConfiguration[];

/**
   * Specifies the list of resource Ids for the network interfaces associated with the virtual machine.
   */
readonly networkInterfaces?: NetworkInterfaceReference[];

/**
   * Specify what happens to the network interface when the VM is deleted
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * Specifies whether the network interface is disabled for tcp state tracking.
   */
readonly disableTcpStateTracking?: bool;

/**
   * The dns settings to be applied on the network interfaces.
   */
readonly dnsSettings?: VirtualMachineNetworkInterfaceDnsSettingsConfigurati...;

/**
   * 
   */
readonly dscpConfiguration?: SubResource;

/**
   * Specifies whether the network interface is accelerated networking-enabled.
   */
readonly enableAcceleratedNetworking?: bool;

/**
   * Specifies whether the network interface is FPGA networking-enabled.
   */
readonly enableFpga?: bool;

/**
   * Whether IP forwarding enabled on this NIC.
   */
readonly enableIPForwarding?: bool;

/**
   * Specifies the IP configurations of the network interface.
   */
readonly ipConfigurations: VirtualMachineNetworkInterfaceIPConfiguration[];

/**
   * The network security group.
   */
readonly networkSecurityGroup?: SubResource;

/**
   * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
   */
readonly primary?: bool;

/**
   * List of DNS servers IP addresses
   */
readonly dnsServers?: string[];

/**
   * Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
   */
readonly applicationGatewayBackendAddressPools?: SubResource[];

/**
   * Specifies an array of references to application security group.
   */
readonly applicationSecurityGroups?: SubResource[];

/**
   * Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
   */
readonly loadBalancerBackendAddressPools?: SubResource[];

/**
   * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
   */
readonly primary?: bool;

/**
   * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
   */
readonly privateIPAddressVersion?: 'IPv4''IPv6';

/**
   * The publicIPAddressConfiguration.
   */
readonly publicIPAddressConfiguration?: VirtualMachinePublicIPAddressConfiguration;

/**
   * Specifies the identifier of the subnet.
   */
readonly subnet?: SubResource;

/**
   * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
   */
readonly sku?: PublicIPAddressSku;

/**
   * Specify what happens to the public IP address when the VM is deleted
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * The dns settings to be applied on the publicIP addresses .
   */
readonly dnsSettings?: VirtualMachinePublicIPAddressDnsSettingsConfiguratio...;

/**
   * The idle timeout of the public IP address.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The list of IP tags associated with the public IP address.
   */
readonly ipTags?: VirtualMachineIpTag[];

/**
   * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
   */
readonly publicIPAddressVersion?: 'IPv4''IPv6';

/**
   * Specify the public IP allocation type
   */
readonly publicIPAllocationMethod?: 'Dynamic''Static';

/**
   * The PublicIPPrefix from which to allocate publicIP addresses.
   */
readonly publicIPPrefix?: SubResource;

/**
   * The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.
   */
readonly domainNameLabel: string;

/**
   * IP tag type. Example: FirstPartyUsage.
   */
readonly ipTagType?: string;

/**
   * IP tag associated with the public IP. Example: SQL, Storage etc.
   */
readonly tag?: string;

/**
   * Specify public IP sku tier
   */
readonly tier?: 'Global''Regional';

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specify what happens to the network interface when the VM is deleted
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * Specifies the primary network interface in case the virtual machine has more than 1 network interface.
   */
readonly primary?: bool;

/**
   * Specifies the password of the administrator account.Minimum-length (Windows):8 charactersMinimum-length (Linux):6 charactersMax-length (Windows):123 charactersMax-length (Linux):72 charactersComplexity requirements:3 out of 4 conditions below need to be fulfilledHas lower charactersHas upper charactersHas a digitHas a special character (Regex match [\W_])Disallowed values:"abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"For resetting the password, seeHow to reset the Remote Desktop service or its login password in a Windows VMFor resetting root password, seeManage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension
   */
readonly adminPassword?: string;

/**
   * Specifies the name of the administrator account.This property cannot be updated after the VM is created.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters.
   */
readonly adminUsername?: string;

/**
   * Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine.
   */
readonly allowExtensionOperations?: bool;

/**
   * Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created.Max-length (Windows):15 characters.Max-length (Linux):64 characters. For naming conventions and restrictions seeAzure infrastructure services implementation guidelines.
   */
readonly computerName?: string;

/**
   * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes.Note: Do not pass any secrets or passwords in customData property.This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information seeCustom Data on Azure VMs. For using cloud-init for your Linux VM, seeUsing cloud-init to customize a Linux VM during creation.
   */
readonly customData?: string;

/**
   * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, seeLinux on Azure-Endorsed Distributions.
   */
readonly linuxConfiguration?: LinuxConfiguration;

/**
   * Optional property which must either be set to True or omitted.
   */
readonly requireGuestProvisionSignal?: bool;

/**
   * Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows.
   */
readonly secrets?: VaultSecretGroup[];

/**
   * Specifies Windows operating system settings on the virtual machine.
   */
readonly windowsConfiguration?: WindowsConfiguration;

/**
   * Specifies whether password authentication should be disabled.
   */
readonly disablePasswordAuthentication?: bool;

/**
   * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
   */
readonly enableVMAgentPlatformUpdates?: bool;

/**
   * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
   */
readonly patchSettings?: LinuxPatchSettings;

/**
   * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
   */
readonly provisionVMAgent?: bool;

/**
   * Specifies the ssh key configuration for a Linux OS.
   */
readonly ssh?: SshConfiguration;

/**
   * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.Possible values are:ImageDefault- You control the timing of patch assessments on a virtual machine.AutomaticByPlatform- The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
   */
readonly assessmentMode?: 'AutomaticByPlatform''ImageDefault';

/**
   * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
   */
readonly automaticByPlatformSettings?: LinuxVMGuestPatchAutomaticByPlatformSettings;

/**
   * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.Possible values are:ImageDefault- The virtual machine's default patching configuration is used.AutomaticByPlatform- The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true
   */
readonly patchMode?: 'AutomaticByPlatform''ImageDefault';

/**
   * Enables customer to schedule patching without accidental upgrades
   */
readonly bypassPlatformSafetyChecksOnUserSchedule?: bool;

/**
   * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
   */
readonly rebootSetting?: 'Always''IfRequired''Never''Unknown';

/**
   * The list of SSH public keys used to authenticate with linux based VMs.
   */
readonly publicKeys?: SshPublicKey[];

/**
   * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]/azure/virtual-machines/linux/create-ssh-keys-detailed).
   */
readonly keyData?: string;

/**
   * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
   */
readonly path?: string;

/**
   * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
   */
readonly sourceVault?: SubResource;

/**
   * The list of key vault references in SourceVault which contain certificates.
   */
readonly vaultCertificates?: VaultCertificate[];

/**
   * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
   */
readonly certificateStore?: string;

/**
   * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"}To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows.
   */
readonly certificateUrl?: string;

/**
   * Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
   */
readonly additionalUnattendContent?: AdditionalUnattendContent[];

/**
   * Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
   */
readonly enableAutomaticUpdates?: bool;

/**
   * Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false.
   */
readonly enableVMAgentPlatformUpdates?: bool;

/**
   * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
   */
readonly patchSettings?: PatchSettings;

/**
   * Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
   */
readonly provisionVMAgent?: bool;

/**
   * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can beTimeZoneInfo.Idvalue from time zones returned byTimeZoneInfo.GetSystemTimeZones.
   */
readonly timeZone?: string;

/**
   * Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.
   */
readonly winRM?: WinRMConfiguration;

/**
   * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
   */
readonly componentName?: 'Microsoft-Windows-Shell-Setup';

/**
   * Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
   */
readonly content?: string;

/**
   * The pass name. Currently, the only allowable value is OobeSystem.
   */
readonly passName?: 'OobeSystem';

/**
   * Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
   */
readonly settingName?: 'AutoLogon''FirstLogonCommands';

/**
   * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.Possible values are:ImageDefault- You control the timing of patch assessments on a virtual machine.AutomaticByPlatform- The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
   */
readonly assessmentMode?: 'AutomaticByPlatform''ImageDefault';

/**
   * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
   */
readonly automaticByPlatformSettings?: WindowsVMGuestPatchAutomaticByPlatformSettings;

/**
   * Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
   */
readonly enableHotpatching?: bool;

/**
   * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.Possible values are:Manual- You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be falseAutomaticByOS- The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true.AutomaticByPlatform- the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true
   */
readonly patchMode?: 'AutomaticByOS''AutomaticByPlatform''Manual';

/**
   * Enables customer to schedule patching without accidental upgrades
   */
readonly bypassPlatformSafetyChecksOnUserSchedule?: bool;

/**
   * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
   */
readonly rebootSetting?: 'Always''IfRequired''Never''Unknown';

/**
   * The list of Windows Remote Management listeners
   */
readonly listeners?: WinRMListener[];

/**
   * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"}To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows.
   */
readonly certificateUrl?: string;

/**
   * Specifies the protocol of WinRM listener. Possible values are:http,https.
   */
readonly protocol?: 'Http''Https';

/**
   * Specifies OS Image Scheduled Event related configurations.
   */
readonly osImageNotificationProfile?: OSImageNotificationProfile;

/**
   * Specifies Terminate Scheduled Event related configurations.
   */
readonly terminateNotificationProfile?: TerminateNotificationProfile;

/**
   * Specifies whether the OS Image Scheduled event is enabled or disabled.
   */
readonly enable?: bool;

/**
   * Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M)
   */
readonly notBeforeTimeout?: string;

/**
   * Specifies whether the Terminate Scheduled event is enabled or disabled.
   */
readonly enable?: bool;

/**
   * Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)
   */
readonly notBeforeTimeout?: string;

/**
   * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource.
   */
readonly encryptionAtHost?: bool;

/**
   * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set.
   */
readonly securityType?: 'ConfidentialVM''TrustedLaunch';

/**
   * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01.
   */
readonly uefiSettings?: UefiSettings;

/**
   * Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
   */
readonly secureBootEnabled?: bool;

/**
   * Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01.
   */
readonly vTpmEnabled?: bool;

/**
   * Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, seeAbout disks and VHDs for Azure virtual machines.
   */
readonly dataDisks?: DataDisk[];

/**
   * Specifies the disk controller type configured for the VM.Note:This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01.
   */
readonly diskControllerType?: 'NVMe''SCSI';

/**
   * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
   */
readonly imageReference?: ImageReference;

/**
   * Specifies information about the operating system disk used by the virtual machine. For more information about disks, seeAbout disks and VHDs for Azure virtual machines.
   */
readonly osDisk?: OSDisk;

/**
   * Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The defaulting behavior is:None for Standard storage. ReadOnly for Premium storage.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Specifies how the virtual machine should be created. Possible values are:Attach.This value is used when you are using a specialized disk to create the virtual machine.FromImage.This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
   */
readonly createOption: 'Attach''Empty''FromImage';

/**
   * Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are:Delete.If this value is used, the data disk is deleted when VM is deleted.Detach.If this value is used, the data disk is retained after VM is deleted. The default value is set toDetach.
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values:ForceDetach.detachOption:ForceDetachis applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior.This feature is still in previewmode and is not supported for VirtualMachineScaleSet. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
   */
readonly detachOption?: 'ForceDetach';

/**
   * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
   */
readonly diskSizeGB?: number;

/**
   * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
   */
readonly image?: VirtualHardDisk;

/**
   * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
   */
readonly lun: number;

/**
   * The managed disk parameters.
   */
readonly managedDisk?: ManagedDiskParameters;

/**
   * Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset
   */
readonly toBeDetached?: bool;

/**
   * The virtual hard disk.
   */
readonly vhd?: VirtualHardDisk;

/**
   * Specifies whether writeAccelerator should be enabled or disabled on the disk.
   */
readonly writeAcceleratorEnabled?: bool;

/**
   * Specifies the virtual hard disk's uri.
   */
readonly uri?: string;

/**
   * Specifies the customer managed disk encryption set resource id for the managed disk.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the security profile for the managed disk.
   */
readonly securityProfile?: VMDiskSecurityProfile;

/**
   * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
   */
readonly storageAccountType?: 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS';

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob.Note:It can be set for only Confidential VMs.
   */
readonly securityEncryptionType?: 'DiskWithVMGuestState''VMGuestStateOnly';

/**
   * Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call.
   */
readonly communityGalleryImageId?: string;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the offer of the platform image or marketplace image used to create the virtual machine.
   */
readonly offer?: string;

/**
   * The image publisher.
   */
readonly publisher?: string;

/**
   * Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
   */
readonly sharedGalleryImageId?: string;

/**
   * The image SKU.
   */
readonly sku?: string;

/**
   * Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input.
   */
readonly version?: string;

/**
   * Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The defaulting behavior is:None for Standard storage. ReadOnly for Premium storage.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Specifies how the virtual machine should be created. Possible values are:Attach.This value is used when you are using a specialized disk to create the virtual machine.FromImage.This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described.
   */
readonly createOption: 'Attach''Empty''FromImage';

/**
   * Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are:Delete.If this value is used, the OS disk is deleted when VM is deleted.Detach.If this value is used, the os disk is retained after VM is deleted. The default value is set toDetach. For an ephemeral OS Disk, the default value is set toDelete. The user cannot change the delete option for an ephemeral OS Disk.
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
   */
readonly diffDiskSettings?: DiffDiskSettings;

/**
   * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
   */
readonly diskSizeGB?: number;

/**
   * Specifies the encryption settings for the OS Disk. Minimum api-version: 2015-06-15.
   */
readonly encryptionSettings?: DiskEncryptionSettings;

/**
   * The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
   */
readonly image?: VirtualHardDisk;

/**
   * The managed disk parameters.
   */
readonly managedDisk?: ManagedDiskParameters;

/**
   * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are:Windows,Linux.
   */
readonly osType?: 'Linux''Windows';

/**
   * The virtual hard disk.
   */
readonly vhd?: VirtualHardDisk;

/**
   * Specifies whether writeAccelerator should be enabled or disabled on the disk.
   */
readonly writeAcceleratorEnabled?: bool;

/**
   * Specifies the ephemeral disk settings for operating system disk.
   */
readonly option?: 'Local';

/**
   * Specifies the ephemeral disk placement for operating system disk. Possible values are:CacheDisk,ResourceDisk.The defaulting behavior is:CacheDiskif one is configured for the VM size otherwiseResourceDiskis used. Refer to the VM size documentation for Windows VM at /azure/virtual-machines/windows/sizes and Linux VM at /azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk.
   */
readonly placement?: 'CacheDisk''ResourceDisk';

/**
   * Specifies the location of the disk encryption key, which is a Key Vault Secret.
   */
readonly diskEncryptionKey?: KeyVaultSecretReference;

/**
   * Specifies whether disk encryption should be enabled on the virtual machine.
   */
readonly enabled?: bool;

/**
   * Specifies the location of the key encryption key in Key Vault.
   */
readonly keyEncryptionKey?: KeyVaultKeyReference;

/**
   * The URL referencing a secret in a Key Vault.
   */
readonly secretUrl: string;

/**
   * The relative URL of the Key Vault containing the secret.
   */
readonly sourceVault: SubResource;

/**
   * The URL referencing a key encryption key in Key Vault.
   */
readonly keyUrl: string;

/**
   * The relative URL of the Key Vault containing the key.
   */
readonly sourceVault: SubResource;
}

/**
 * ComputeVirtualmachines resource
 */
export class ComputeVirtualmachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachines@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinesProps): string {
    return JSON.stringify(
        {properties: {additionalCapabilities: {hibernationEnabled: "${bool}", ultraSSDEnabled: "${bool}"}, applicationProfile: {galleryApplications: [{configurationReference: "string", enableAutomaticUpgrade: "${bool}", order: "${int}", packageReferenceId: "string", tags: "string", treatFailureAsDeploymentFailure: "${bool}"}]}, availabilitySet: {id: "string"}, billingProfile: {maxPrice: "decimal-as-string"}, capacityReservation: {capacityReservationGroup: {id: "string"}}, diagnosticsProfile: {bootDiagnostics: {enabled: "${bool}", storageUri: "string"}}, evictionPolicy: "string", extensionsTimeBudget: "string", hardwareProfile: {vmSize: "string", vmSizeProperties: {vCPUsAvailable: "${int}", vCPUsPerCore: "${int}"}}, host: {id: "string"}, hostGroup: {id: "string"}, licenseType: "string", networkProfile: {networkApiVersion: "2020-11-01", networkInterfaceConfigurations: [{name: "string", properties: {deleteOption: "string", disableTcpStateTracking: "${bool}", dnsSettings: {dnsServers: ["string"]}, dscpConfiguration: {id: "string"}, enableAcceleratedNetworking: "${bool}", enableFpga: "${bool}", enableIPForwarding: "${bool}", ipConfigurations: [{name: "string", properties: {applicationGatewayBackendAddressPools: [{id: "string"}], applicationSecurityGroups: [{id: "string"}], loadBalancerBackendAddressPools: [{id: "string"}], primary: "${bool}", privateIPAddressVersion: "string", publicIPAddressConfiguration: {name: "string", properties: {deleteOption: "string", dnsSettings: {domainNameLabel: "string"}, idleTimeoutInMinutes: "${int}", ipTags: [{ipTagType: "string", tag: "string"}], publicIPAddressVersion: "string", publicIPAllocationMethod: "string", publicIPPrefix: {id: "string"}}, sku: {name: "string", tier: "string"}}, subnet: {id: "string"}}}], networkSecurityGroup: {id: "string"}, primary: "${bool}"}}], networkInterfaces: [{id: "string", properties: {deleteOption: "string", primary: "${bool}"}}]}, osProfile: {adminPassword: "string", adminUsername: "string", allowExtensionOperations: "${bool}", computerName: "string", customData: "string", linuxConfiguration: {disablePasswordAuthentication: "${bool}", enableVMAgentPlatformUpdates: "${bool}", patchSettings: {assessmentMode: "string", automaticByPlatformSettings: {bypassPlatformSafetyChecksOnUserSchedule: "${bool}", rebootSetting: "string"}, patchMode: "string"}, provisionVMAgent: "${bool}", ssh: {publicKeys: [{keyData: "string", path: "string"}]}}, requireGuestProvisionSignal: "${bool}", secrets: [{sourceVault: {id: "string"}, vaultCertificates: [{certificateStore: "string", certificateUrl: "string"}]}], windowsConfiguration: {additionalUnattendContent: [{componentName: "Microsoft-Windows-Shell-Setup", content: "string", passName: "OobeSystem", settingName: "string"}], enableAutomaticUpdates: "${bool}", enableVMAgentPlatformUpdates: "${bool}", patchSettings: {assessmentMode: "string", automaticByPlatformSettings: {bypassPlatformSafetyChecksOnUserSchedule: "${bool}", rebootSetting: "string"}, enableHotpatching: "${bool}", patchMode: "string"}, provisionVMAgent: "${bool}", timeZone: "string", winRM: {listeners: [{certificateUrl: "string", protocol: "string"}]}}}, platformFaultDomain: "${int}", priority: "string", proximityPlacementGroup: {id: "string"}, scheduledEventsProfile: {osImageNotificationProfile: {enable: "${bool}", notBeforeTimeout: "string"}, terminateNotificationProfile: {enable: "${bool}", notBeforeTimeout: "string"}}, securityProfile: {encryptionAtHost: "${bool}", securityType: "string", uefiSettings: {secureBootEnabled: "${bool}", vTpmEnabled: "${bool}"}}, storageProfile: {dataDisks: [{caching: "string", createOption: "string", deleteOption: "string", detachOption: "ForceDetach", diskSizeGB: "${int}", image: {uri: "string"}, lun: "${int}", managedDisk: {diskEncryptionSet: {id: "string"}, id: "string", securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}, name: "string", toBeDetached: "${bool}", vhd: {uri: "string"}, writeAcceleratorEnabled: "${bool}"}], diskControllerType: "string", imageReference: {communityGalleryImageId: "string", id: "string", offer: "string", publisher: "string", sharedGalleryImageId: "string", sku: "string", version: "string"}, osDisk: {caching: "string", createOption: "string", deleteOption: "string", diffDiskSettings: {option: "Local", placement: "string"}, diskSizeGB: "${int}", encryptionSettings: {diskEncryptionKey: {secretUrl: "string", sourceVault: {id: "string"}}, enabled: "${bool}", keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}}, image: {uri: "string"}, managedDisk: {diskEncryptionSet: {id: "string"}, id: "string", securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}, name: "string", osType: "string", vhd: {uri: "string"}, writeAcceleratorEnabled: "${bool}"}}, userData: "string", virtualMachineScaleSet: {id: "string"}}, zones: ["string"], extendedLocation: {name: "string", type: "EdgeZone"}, plan: {name: "string", product: "string", promotionCode: "string", publisher: "string"}}
    );
  }
}
