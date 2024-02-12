import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinescalesetsProps extends IAzAPIBaseProps {
/**
   * The virtual machine scale set sku.
   */
readonly sku?: Sku;

/**
   * The extended location of the Virtual Machine Scale Set.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The identity of the virtual machine scale set, if configured.
   */
readonly identity?: VirtualMachineScaleSetIdentity;

/**
   * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then clickWant to deploy programmatically, Get Started ->. Enter any required information and then clickSave.
   */
readonly plan?: Plan;

/**
   * The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
   */
readonly zones?: string[];

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
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
   * Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
   */
readonly additionalCapabilities?: AdditionalCapabilities;

/**
   * Policy for automatic repairs.
   */
readonly automaticRepairsPolicy?: AutomaticRepairsPolicy;

/**
   * Optional property which must either be set to True or omitted.
   */
readonly constrainedMaximumCapacity?: bool;

/**
   * When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
   */
readonly doNotRunExtensionsOnOverprovisionedVMs?: bool;

/**
   * Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01.
   */
readonly hostGroup?: SubResource;

/**
   * Specifies the orchestration mode for the virtual machine scale set.
   */
readonly orchestrationMode?: 'Flexible''Uniform';

/**
   * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
   */
readonly overprovision?: bool;

/**
   * Fault Domain count for each placement group.
   */
readonly platformFaultDomainCount?: number;

/**
   * Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance.
   */
readonly priorityMixPolicy?: PriorityMixPolicy;

/**
   * Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01.
   */
readonly proximityPlacementGroup?: SubResource;

/**
   * Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set.
   */
readonly scaleInPolicy?: ScaleInPolicy;

/**
   * When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
   */
readonly singlePlacementGroup?: bool;

/**
   * Specifies the Spot Restore properties for the virtual machine scale set.
   */
readonly spotRestorePolicy?: SpotRestorePolicy;

/**
   * The upgrade policy.
   */
readonly upgradePolicy?: UpgradePolicy;

/**
   * The virtual machine profile.
   */
readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile;

/**
   * Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set.
   */
readonly zoneBalance?: bool;

/**
   * The flag that enables or disables hibernation capability on the VM.
   */
readonly hibernationEnabled?: bool;

/**
   * The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
   */
readonly ultraSSDEnabled?: bool;

/**
   * Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
   */
readonly enabled?: bool;

/**
   * The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 10 minutes (PT10M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).
   */
readonly gracePeriod?: string;

/**
   * Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace.
   */
readonly repairAction?: 'Reimage''Replace''Restart';

/**
   * Resource Id
   */
readonly id?: string;

/**
   * The base number of regular priority VMs that will be created in this scale set as it scales out.
   */
readonly baseRegularPriorityCount?: number;

/**
   * The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority.
   */
readonly regularPriorityPercentageAboveBase?: number;

/**
   * This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview)
   */
readonly forceDeletion?: bool;

/**
   * The rules to be followed when scaling-in a virtual machine scale set.Possible values are:DefaultWhen a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in.OldestVMWhen a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal.NewestVMWhen a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal.
   */
readonly rules?: String array containing any of:'Default''NewestVM''OldestVM';

/**
   * Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints
   */
readonly enabled?: bool;

/**
   * Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances
   */
readonly restoreTimeout?: string;

/**
   * Configuration parameters used for performing automatic OS Upgrade.
   */
readonly automaticOSUpgradePolicy?: AutomaticOSUpgradePolicy;

/**
   * Specifies the mode of an upgrade to virtual machines in the scale set.Possible values are:Manual- You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.Automatic- All virtual machines in the scale set are  automatically updated at the same time.
   */
readonly mode?: 'Automatic''Manual''Rolling';

/**
   * The configuration parameters used while performing a rolling upgrade.
   */
readonly rollingUpgradePolicy?: RollingUpgradePolicy;

/**
   * Whether OS image rollback feature should be disabled. Default value is false.
   */
readonly disableAutomaticRollback?: bool;

/**
   * Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets,enableAutomaticUpdatesis automatically set to false and cannot be set to true.
   */
readonly enableAutomaticOSUpgrade?: bool;

/**
   * Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Default value is false. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS.
   */
readonly useRollingUpgradePolicy?: bool;

/**
   * Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size.
   */
readonly enableCrossZoneUpgrade?: bool;

/**
   * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
   */
readonly maxBatchInstancePercent?: number;

/**
   * Create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines. Existing virtual machines will be deleted once the new virtual machines are created for each batch.
   */
readonly maxSurge?: bool;

/**
   * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
   */
readonly maxUnhealthyInstancePercent?: number;

/**
   * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
   */
readonly maxUnhealthyUpgradedInstancePercent?: number;

/**
   * The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).
   */
readonly pauseTimeBetweenBatches?: string;

/**
   * Upgrade all unhealthy instances in a scale set before any healthy instances.
   */
readonly prioritizeUnhealthyInstances?: bool;

/**
   * Rollback failed instances to previous model if the Rolling Upgrade policy is violated.
   */
readonly rollbackFailedInstancesOnPolicyBreach?: bool;

/**
   * Specifies the gallery applications that should be made available to the VM/VMSS
   */
readonly applicationProfile?: ApplicationProfile;

/**
   * Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01.
   */
readonly billingProfile?: BillingProfile;

/**
   * Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01.
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
   * Specifies a collection of settings for extensions installed on virtual machines in the scale set.
   */
readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile;

/**
   * Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01.
   */
readonly hardwareProfile?: VirtualMachineScaleSetHardwareProfile;

/**
   * Specifies that the image or disk that is being used was licensed on-premises.Possible values for Windows Server operating system are:Windows_ClientWindows_ServerPossible values for Linux Server operating system are:RHEL_BYOS (for RHEL)SLES_BYOS (for SUSE)For more information, seeAzure Hybrid Use Benefit for Windows ServerAzure Hybrid Use Benefit for Linux ServerMinimum api-version: 2015-06-15
   */
readonly licenseType?: string;

/**
   * Specifies properties of the network interfaces of the virtual machines in the scale set.
   */
readonly networkProfile?: VirtualMachineScaleSetNetworkProfile;

/**
   * Specifies the operating system settings for the virtual machines in the scale set.
   */
readonly osProfile?: VirtualMachineScaleSetOSProfile;

/**
   * Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview.
   */
readonly priority?: 'Low''Regular''Spot';

/**
   * Specifies Scheduled Event related configurations.
   */
readonly scheduledEventsProfile?: ScheduledEventsProfile;

/**
   * Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01
   */
readonly securityPostureReference?: SecurityPostureReference;

/**
   * Specifies the Security related profile settings for the virtual machines in the scale set.
   */
readonly securityProfile?: SecurityProfile;

/**
   * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01
   */
readonly serviceArtifactReference?: ServiceArtifactReference;

/**
   * Specifies the storage settings for the virtual machine disks.
   */
readonly storageProfile?: VirtualMachineScaleSetStorageProfile;

/**
   * UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
   */
readonly userData?: string;

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
   * The virtual machine scale set child extension resources.
   */
readonly extensions?: VirtualMachineScaleSetExtension[];

/**
   * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
   */
readonly extensionsTimeBudget?: string;

/**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
   */
readonly enableAutomaticUpgrade?: bool;

/**
   * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
   */
readonly forceUpdateTag?: string;

/**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * The extensions protected settings that are passed by reference, and consumed from key vault
   */
readonly protectedSettingsFromKeyVault?: KeyVaultSecretReference;

/**
   * Collection of extension names after which this extension needs to be provisioned.
   */
readonly provisionAfterExtensions?: string[];

/**
   * The name of the extension handler publisher.
   */
readonly publisher?: string;

/**
   * Json formatted public settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
   */
readonly suppressFailures?: bool;

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * The URL referencing a secret in a Key Vault.
   */
readonly secretUrl: string;

/**
   * The relative URL of the Key Vault containing the secret.
   */
readonly sourceVault: SubResource;

/**
   * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions inVM Customizationfor more details.
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
   * A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
   */
readonly healthProbe?: ApiEntityReference;

/**
   * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'
   */
readonly networkApiVersion?: '2020-11-01';

/**
   * The list of network configurations.
   */
readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];

/**
   * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
   */
readonly id?: string;

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
readonly dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSetting...;

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
readonly ipConfigurations: VirtualMachineScaleSetIPConfiguration[];

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
   * Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
   */
readonly applicationGatewayBackendAddressPools?: SubResource[];

/**
   * Specifies an array of references to application security group.
   */
readonly applicationSecurityGroups?: SubResource[];

/**
   * Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
   */
readonly loadBalancerBackendAddressPools?: SubResource[];

/**
   * Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
   */
readonly loadBalancerInboundNatPools?: SubResource[];

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
readonly publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration;

/**
   * Specifies the identifier of the subnet.
   */
readonly subnet?: ApiEntityReference;

/**
   * Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible.
   */
readonly sku?: PublicIPAddressSku;

/**
   * Specify what happens to the public IP when the VM is deleted
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * The dns settings to be applied on the publicIP addresses .
   */
readonly dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDn...;

/**
   * The idle timeout of the public IP address.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The list of IP tags associated with the public IP address.
   */
readonly ipTags?: VirtualMachineScaleSetIpTag[];

/**
   * Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
   */
readonly publicIPAddressVersion?: 'IPv4''IPv6';

/**
   * The PublicIPPrefix from which to allocate publicIP addresses.
   */
readonly publicIPPrefix?: SubResource;

/**
   * The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
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
   * Specifies the password of the administrator account.Minimum-length (Windows):8 charactersMinimum-length (Linux):6 charactersMax-length (Windows):123 charactersMax-length (Linux):72 charactersComplexity requirements:3 out of 4 conditions below need to be fulfilledHas lower charactersHas upper charactersHas a digitHas a special character (Regex match [\W_])Disallowed values:"abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"For resetting the password, seeHow to reset the Remote Desktop service or its login password in a Windows VMFor resetting root password, seeManage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension
   */
readonly adminPassword?: string;

/**
   * Specifies the name of the administrator account.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters
   */
readonly adminUsername?: string;

/**
   * Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set.
   */
readonly allowExtensionOperations?: bool;

/**
   * Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
   */
readonly computerNamePrefix?: string;

/**
   * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, seeUsing cloud-init to customize a Linux VM during creation
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
   * Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows.
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
   * List of virtual machine extensions to exclude when applying the Security Posture.
   */
readonly excludeExtensions?: VirtualMachineExtension[];

/**
   * The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch},{major.*},latest
   */
readonly id?: string;

/**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
   */
readonly enableAutomaticUpgrade?: bool;

/**
   * How the extension handler should be forced to update even if the extension configuration has not changed.
   */
readonly forceUpdateTag?: string;

/**
   * The virtual machine extension instance view.
   */
readonly instanceView?: VirtualMachineExtensionInstanceView;

/**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * The extensions protected settings that are passed by reference, and consumed from key vault
   */
readonly protectedSettingsFromKeyVault?: KeyVaultSecretReference;

/**
   * Collection of extension names after which this extension needs to be provisioned.
   */
readonly provisionAfterExtensions?: string[];

/**
   * The name of the extension handler publisher.
   */
readonly publisher?: string;

/**
   * Json formatted public settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
   */
readonly suppressFailures?: bool;

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * The resource status information.
   */
readonly statuses?: InstanceViewStatus[];

/**
   * The resource status information.
   */
readonly substatuses?: InstanceViewStatus[];

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * The status code.
   */
readonly code?: string;

/**
   * The short localizable label for the status.
   */
readonly displayStatus?: string;

/**
   * The level code.
   */
readonly level?: 'Error''Info''Warning';

/**
   * The detailed status message, including for alerts and error messages.
   */
readonly message?: string;

/**
   * The time of the status.
   */
readonly time?: string;

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
   * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
   */
readonly id?: string;

/**
   * Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, seeAbout disks and VHDs for Azure virtual machines.
   */
readonly dataDisks?: VirtualMachineScaleSetDataDisk[];

/**
   * 
   */
readonly diskControllerType?: string;

/**
   * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
   */
readonly imageReference?: ImageReference;

/**
   * Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, seeAbout disks and VHDs for Azure virtual machines.
   */
readonly osDisk?: VirtualMachineScaleSetOSDisk;

/**
   * Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * The create option.
   */
readonly createOption: 'Attach''Empty''FromImage';

/**
   * Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).Possible values:DeleteIf this value is used, the data disk is deleted when the VMSS Flex VM is deleted.DetachIf this value is used, the data disk is retained after VMSS Flex VM is deleted.The default value is set toDelete.
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
   */
readonly diskIOPSReadWrite?: number;

/**
   * Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
   */
readonly diskMBpsReadWrite?: number;

/**
   * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
   */
readonly diskSizeGB?: number;

/**
   * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
   */
readonly lun: number;

/**
   * The managed disk parameters.
   */
readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters;

/**
   * Specifies whether writeAccelerator should be enabled or disabled on the disk.
   */
readonly writeAcceleratorEnabled?: bool;

/**
   * Specifies the customer managed disk encryption set resource id for the managed disk.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

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
   * Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Specifies how the virtual machines in the scale set should be created. The only allowed value is:FromImage.This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
   */
readonly createOption: 'Attach''Empty''FromImage';

/**
   * Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).Possible values:DeleteIf this value is used, the OS disk is deleted when VMSS Flex VM is deleted.DetachIf this value is used, the OS disk is retained after VMSS Flex VM is deleted.The default value is set toDelete. For an Ephemeral OS Disk, the default value is set toDelete. User cannot change the delete option for Ephemeral OS Disk.
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
   */
readonly diffDiskSettings?: DiffDiskSettings;

/**
   * Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023.
   */
readonly diskSizeGB?: number;

/**
   * Specifies information about the unmanaged user image to base the scale set on.
   */
readonly image?: VirtualHardDisk;

/**
   * The managed disk parameters.
   */
readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters;

/**
   * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are:Windows,Linux.
   */
readonly osType?: 'Linux''Windows';

/**
   * Specifies the container urls that are used to store operating system disks for the scale set.
   */
readonly vhdContainers?: string[];

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
   * Specifies the virtual hard disk's uri.
   */
readonly uri?: string;

/**
   * Specifies the number of virtual machines in the scale set.
   */
readonly capacity?: number;

/**
   * Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic
   */
readonly tier?: string;
}

/**
 * ComputeVirtualmachinescalesets resource
 */
export class ComputeVirtualmachinescalesets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinescalesetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachineScaleSets@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinescalesetsProps): string {
    return JSON.stringify(
        {properties: {additionalCapabilities: {hibernationEnabled: "${bool}", ultraSSDEnabled: "${bool}"}, automaticRepairsPolicy: {enabled: "${bool}", gracePeriod: "string", repairAction: "string"}, constrainedMaximumCapacity: "${bool}", doNotRunExtensionsOnOverprovisionedVMs: "${bool}", hostGroup: {id: "string"}, orchestrationMode: "string", overprovision: "${bool}", platformFaultDomainCount: "${int}", priorityMixPolicy: {baseRegularPriorityCount: "${int}", regularPriorityPercentageAboveBase: "${int}"}, proximityPlacementGroup: {id: "string"}, scaleInPolicy: {forceDeletion: "${bool}", rules: ["string"]}, singlePlacementGroup: "${bool}", spotRestorePolicy: {enabled: "${bool}", restoreTimeout: "string"}, upgradePolicy: {automaticOSUpgradePolicy: {disableAutomaticRollback: "${bool}", enableAutomaticOSUpgrade: "${bool}", useRollingUpgradePolicy: "${bool}"}, mode: "string", rollingUpgradePolicy: {enableCrossZoneUpgrade: "${bool}", maxBatchInstancePercent: "${int}", maxSurge: "${bool}", maxUnhealthyInstancePercent: "${int}", maxUnhealthyUpgradedInstancePercent: "${int}", pauseTimeBetweenBatches: "string", prioritizeUnhealthyInstances: "${bool}", rollbackFailedInstancesOnPolicyBreach: "${bool}"}}, virtualMachineProfile: {applicationProfile: {galleryApplications: [{configurationReference: "string", enableAutomaticUpgrade: "${bool}", order: "${int}", packageReferenceId: "string", tags: "string", treatFailureAsDeploymentFailure: "${bool}"}]}, billingProfile: {maxPrice: "decimal-as-string"}, capacityReservation: {capacityReservationGroup: {id: "string"}}, diagnosticsProfile: {bootDiagnostics: {enabled: "${bool}", storageUri: "string"}}, evictionPolicy: "string", extensionProfile: {extensions: [{name: "string", properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, provisionAfterExtensions: ["string"], publisher: "string", suppressFailures: "${bool}", type: "string", typeHandlerVersion: "string"}}], extensionsTimeBudget: "string"}, hardwareProfile: {vmSizeProperties: {vCPUsAvailable: "${int}", vCPUsPerCore: "${int}"}}, licenseType: "string", networkProfile: {healthProbe: {id: "string"}, networkApiVersion: "2020-11-01", networkInterfaceConfigurations: [{name: "string", properties: {deleteOption: "string", disableTcpStateTracking: "${bool}", dnsSettings: {dnsServers: ["string"]}, enableAcceleratedNetworking: "${bool}", enableFpga: "${bool}", enableIPForwarding: "${bool}", ipConfigurations: [{name: "string", properties: {applicationGatewayBackendAddressPools: [{id: "string"}], applicationSecurityGroups: [{id: "string"}], loadBalancerBackendAddressPools: [{id: "string"}], loadBalancerInboundNatPools: [{id: "string"}], primary: "${bool}", privateIPAddressVersion: "string", publicIPAddressConfiguration: {name: "string", properties: {deleteOption: "string", dnsSettings: {domainNameLabel: "string"}, idleTimeoutInMinutes: "${int}", ipTags: [{ipTagType: "string", tag: "string"}], publicIPAddressVersion: "string", publicIPPrefix: {id: "string"}}, sku: {name: "string", tier: "string"}}, subnet: {id: "string"}}}], networkSecurityGroup: {id: "string"}, primary: "${bool}"}}]}, osProfile: {adminPassword: "string", adminUsername: "string", allowExtensionOperations: "${bool}", computerNamePrefix: "string", customData: "string", linuxConfiguration: {disablePasswordAuthentication: "${bool}", enableVMAgentPlatformUpdates: "${bool}", patchSettings: {assessmentMode: "string", automaticByPlatformSettings: {bypassPlatformSafetyChecksOnUserSchedule: "${bool}", rebootSetting: "string"}, patchMode: "string"}, provisionVMAgent: "${bool}", ssh: {publicKeys: [{keyData: "string", path: "string"}]}}, requireGuestProvisionSignal: "${bool}", secrets: [{sourceVault: {id: "string"}, vaultCertificates: [{certificateStore: "string", certificateUrl: "string"}]}], windowsConfiguration: {additionalUnattendContent: [{componentName: "Microsoft-Windows-Shell-Setup", content: "string", passName: "OobeSystem", settingName: "string"}], enableAutomaticUpdates: "${bool}", enableVMAgentPlatformUpdates: "${bool}", patchSettings: {assessmentMode: "string", automaticByPlatformSettings: {bypassPlatformSafetyChecksOnUserSchedule: "${bool}", rebootSetting: "string"}, enableHotpatching: "${bool}", patchMode: "string"}, provisionVMAgent: "${bool}", timeZone: "string", winRM: {listeners: [{certificateUrl: "string", protocol: "string"}]}}}, priority: "string", scheduledEventsProfile: {osImageNotificationProfile: {enable: "${bool}", notBeforeTimeout: "string"}, terminateNotificationProfile: {enable: "${bool}", notBeforeTimeout: "string"}}, securityPostureReference: {excludeExtensions: [{location: "string", properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", instanceView: {name: "string", statuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], substatuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], type: "string", typeHandlerVersion: "string"}, protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, provisionAfterExtensions: ["string"], publisher: "string", suppressFailures: "${bool}", type: "string", typeHandlerVersion: "string"}, tags: {}}], id: "string"}, securityProfile: {encryptionAtHost: "${bool}", securityType: "string", uefiSettings: {secureBootEnabled: "${bool}", vTpmEnabled: "${bool}"}}, serviceArtifactReference: {id: "string"}, storageProfile: {dataDisks: [{caching: "string", createOption: "string", deleteOption: "string", diskIOPSReadWrite: "${int}", diskMBpsReadWrite: "${int}", diskSizeGB: "${int}", lun: "${int}", managedDisk: {diskEncryptionSet: {id: "string"}, securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}, name: "string", writeAcceleratorEnabled: "${bool}"}], diskControllerType: "string", imageReference: {communityGalleryImageId: "string", id: "string", offer: "string", publisher: "string", sharedGalleryImageId: "string", sku: "string", version: "string"}, osDisk: {caching: "string", createOption: "string", deleteOption: "string", diffDiskSettings: {option: "Local", placement: "string"}, diskSizeGB: "${int}", image: {uri: "string"}, managedDisk: {diskEncryptionSet: {id: "string"}, securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}, name: "string", osType: "string", vhdContainers: ["string"], writeAcceleratorEnabled: "${bool}"}}, userData: "string"}, zoneBalance: "${bool}"}, zones: ["string"], sku: {capacity: "${int}", name: "string", tier: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}, plan: {name: "string", product: "string", promotionCode: "string", publisher: "string"}}
    );
  }
}
