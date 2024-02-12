import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The node type sku.
   */
readonly sku?: NodeTypeSku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedClusters;

/**
   * Additional managed data disks.
   */
readonly additionalDataDisks?: VmssDataDisk[];

/**
   * Specifies the settings for any additional secondary network interfaces to attach to the node type.
   */
readonly additionalNetworkInterfaceConfigurations?: AdditionalNetworkInterfaceConfiguration[];

/**
   * The range of ports from which cluster assigned port to Service Fabric applications.
   */
readonly applicationPorts?: EndponumberRangeDescription;

/**
   * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
   */
readonly capacities?: NodeTypePropertiesCapacities;

/**
   * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
   */
readonly dataDiskLetter?: string;

/**
   * Disk size for the managed disk attached to the vms on the node type in GBs.
   */
readonly dataDiskSizeGB?: number;

/**
   * Managed data disk type. Specifies the storage account type for the managed disk
   */
readonly dataDiskType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * Specifies the resource id of the DSCP configuration to apply to the node type network interface.
   */
readonly dscpConfigurationId?: string;

/**
   * Specifies whether the network interface is accelerated networking-enabled.
   */
readonly enableAcceleratedNetworking?: bool;

/**
   * Enable or disable the Host Encryption for the virtual machines on the node type. This will enable the encryption for all the disks including Resource/Temp disk at host itself. Default: The Encryption at host will be disabled unless this property is set to true for the resource.
   */
readonly enableEncryptionAtHost?: bool;

/**
   * Specifies whether each node is allocated its own public IPv4 address. This is only supported on secondary node types with custom Load Balancers.
   */
readonly enableNodePublicIP?: bool;

/**
   * Specifies whether each node is allocated its own public IPv6 address. This is only supported on secondary node types with custom Load Balancers.
   */
readonly enableNodePublicIPv6?: bool;

/**
   * Specifies whether the node type should be overprovisioned. It is only allowed for stateless node types.
   */
readonly enableOverProvisioning?: bool;

/**
   * The range of ephemeral ports that nodes in this node type should be configured with.
   */
readonly ephemeralPorts?: EndponumberRangeDescription;

/**
   * Specifies the eviction policy for virtual machines in a SPOT node type. Default is Delete.
   */
readonly evictionPolicy?: 'Deallocate''Delete';

/**
   * Indicates the node type uses its own frontend configurations instead of the default one for the cluster. This setting can only be specified for non-primary node types and can not be added or removed after the node type is created.
   */
readonly frontendConfigurations?: FrontendConfiguration[];

/**
   * Specifies the full host group resource Id. This property is used for deploying on azure dedicated hosts.
   */
readonly hostGroupId?: string;

/**
   * Indicates the Service Fabric system services for the cluster will run on this node type. This setting cannot be changed once the node type is created.
   */
readonly isPrimary: bool;

/**
   * Indicates whether the node type will be Spot Virtual Machines. Azure will allocate the VMs if there is capacity available and the VMs can be evicted at any time.
   */
readonly isSpotVM?: bool;

/**
   * Indicates if the node type can only host Stateless workloads.
   */
readonly isStateless?: bool;

/**
   * Indicates if scale set associated with the node type can be composed of multiple placement groups.
   */
readonly multiplePlacementGroups?: bool;

/**
   * Specifies the resource id of a NAT Gateway to attach to the subnet of this node type. Node type must use custom load balancer.
   */
readonly natGatewayId?: string;

/**
   * The Network Security Rules for this node type. This setting can only be specified for node types that are configured with frontend configurations.
   */
readonly networkSecurityRules?: NetworkSecurityRule[];

/**
   * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
   */
readonly placementProperties?: NodeTypePropertiesPlacementProperties;

/**
   * Specifies whether secure boot should be enabled on the nodeType. Can only be used with TrustedLaunch SecurityType
   */
readonly secureBootEnabled?: bool;

/**
   * Specifies the security type of the nodeType. Only TrustedLaunch is currently supported
   */
readonly securityType?: 'TrustedLaunch';

/**
   * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version.
   */
readonly serviceArtifactReferenceId?: string;

/**
   * Indicates the time duration after which the platform will not try to restore the VMSS SPOT instances specified as ISO 8601.
   */
readonly spotRestoreTimeout?: string;

/**
   * Indicates the resource id of the subnet for the node type.
   */
readonly subnetId?: string;

/**
   * Specifies whether the use public load balancer. If not specified and the node type doesn't have its own frontend configuration, it will be attached to the default load balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is true, then the frontend has to be an Internal Load Balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is false or not set, then the custom load balancer must include a public load balancer to provide outbound connectivity.
   */
readonly useDefaultPublicLoadBalancer?: bool;

/**
   * Indicates whether to use ephemeral os disk. The sku selected on the vmSize property needs to support this feature.
   */
readonly useEphemeralOSDisk?: bool;

/**
   * Specifies whether to use the temporary disk for the service fabric data root, in which case no managed data disk will be attached and the temporary disk will be used. It is only allowed for stateless node types.
   */
readonly useTempDataDisk?: bool;

/**
   * Set of extensions that should be installed onto the virtual machines.
   */
readonly vmExtensions?: VmssExtension[];

/**
   * The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
   */
readonly vmImageOffer?: string;

/**
   * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
   */
readonly vmImagePlan?: VmImagePlan;

/**
   * The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
   */
readonly vmImagePublisher?: string;

/**
   * Indicates the resource id of the vm image. This parameter is used for custom vm image.
   */
readonly vmImageResourceId?: string;

/**
   * The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
   */
readonly vmImageSku?: string;

/**
   * The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
   */
readonly vmImageVersion?: string;

/**
   * The number of nodes in the node type.Values:-1 - Use when auto scale rules are configured or sku.capacity is defined0 - Not supported}0 - Use for manual scale.
   */
readonly vmInstanceCount: number;

/**
   * Identities to assign to the virtual machine scale set under the node type.
   */
readonly vmManagedIdentity?: VmManagedIdentity;

/**
   * The secrets to install in the virtual machines.
   */
readonly vmSecrets?: VaultSecretGroup[];

/**
   * Specifies the actions to be performed on the vms before bootstrapping the service fabric runtime.
   */
readonly vmSetupActions?: String array containing any of:'EnableContainers''EnableHyperV';

/**
   * Indicates the resource id of the vm shared galleries image. This parameter is used for custom vm image.
   */
readonly vmSharedGalleryImageId?: string;

/**
   * The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3.
   */
readonly vmSize?: string;

/**
   * Specifies the availability zones where the node type would span across. If the cluster is not spanning across availability zones, initiates az migration for the cluster.
   */
readonly zones?: string[];

/**
   * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
   */
readonly diskLetter: string;

/**
   * Disk size for each vm in the node type in GBs.
   */
readonly diskSizeGB: number;

/**
   * Managed data disk type. Specifies the storage account type for the managed disk
   */
readonly diskType: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
   */
readonly lun: number;

/**
   * Specifies the DSCP configuration to apply to the network interface.
   */
readonly dscpConfiguration?: SubResource;

/**
   * Specifies whether the network interface is accelerated networking-enabled.
   */
readonly enableAcceleratedNetworking?: bool;

/**
   * Specifies the IP configurations of the network interface.
   */
readonly ipConfigurations: IpConfiguration[];

/**
   * Azure resource identifier.
   */
readonly id?: string;

/**
   * Specifies an array of references to backend address pools of application gateways. A node type can reference backend address pools of multiple application gateways. Multiple node types cannot use the same application gateway.
   */
readonly applicationGatewayBackendAddressPools?: SubResource[];

/**
   * Specifies an array of references to backend address pools of load balancers. A node type can reference backend address pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer.
   */
readonly loadBalancerBackendAddressPools?: SubResource[];

/**
   * Specifies an array of references to inbound Nat pools of the load balancers. A node type can reference inbound nat pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer.
   */
readonly loadBalancerInboundNatPools?: SubResource[];

/**
   * Specifies whether the IP configuration's private IP is IPv4 or IPv6. Default is IPv4.
   */
readonly privateIPAddressVersion?: 'IPv4''IPv6';

/**
   * The public IP address configuration of the network interface.
   */
readonly publicIPAddressConfiguration?: IpConfigurationPublicIPAddressConfiguration;

/**
   * Specifies the subnet of the network interface.
   */
readonly subnet?: SubResource;

/**
   * Specifies the list of IP tags associated with the public IP address.
   */
readonly ipTags?: IpTag[];

/**
   * Specifies whether the IP configuration's public IP is IPv4 or IPv6. Default is IPv4.
   */
readonly publicIPAddressVersion?: 'IPv4''IPv6';

/**
   * IP tag type. Example: FirstPartyUsage.
   */
readonly ipTagType: string;

/**
   * IP tag associated with the public IP. Example: SQL, Storage etc.
   */
readonly tag: string;

/**
   * End port of a range of ports
   */
readonly endPort: number;

/**
   * Starting port of a range of ports
   */
readonly startPort: number;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendAddressPools/{backendAddressPoolName}'.
   */
readonly applicationGatewayBackendAddressPoolId?: string;

/**
   * The IP address type of this frontend configuration. If omitted the default value is IPv4.
   */
readonly ipAddressType?: 'IPv4''IPv6';

/**
   * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}'.
   */
readonly loadBalancerBackendAddressPoolId?: string;

/**
   * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/inboundNatPools/{inboundNatPoolName}'.
   */
readonly loadBalancerInboundNatPoolId?: string;

/**
   * The network traffic is allowed or denied.
   */
readonly access: 'allow''deny';

/**
   * Network security rule description.
   */
readonly description?: string;

/**
   * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
   */
readonly destinationAddressPrefix?: string;

/**
   * The destination address prefixes. CIDR or destination IP ranges.
   */
readonly destinationAddressPrefixes?: string[];

/**
   * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
   */
readonly destinationPortRange?: string;

/**
   * The destination port ranges.
   */
readonly destinationPortRanges?: string[];

/**
   * Network security rule direction.
   */
readonly direction: 'inbound''outbound';

/**
   * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
   */
readonly priority: number;

/**
   * Network protocol this rule applies to.
   */
readonly protocol: 'ah''esp''http''https''icmp''tcp''udp';

/**
   * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
   */
readonly sourceAddressPrefix?: string;

/**
   * The CIDR or source IP ranges.
   */
readonly sourceAddressPrefixes?: string[];

/**
   * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
   */
readonly sourcePortRange?: string;

/**
   * The source port ranges.
   */
readonly sourcePortRanges?: string[];

/**
   * 
   */
readonly {customized property}?: string;

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
   * Collection of extension names after which this extension needs to be provisioned.
   */
readonly provisionAfterExtensions?: string[];

/**
   * The name of the extension handler publisher.
   */
readonly publisher: string;

/**
   * Json formatted public settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Indicates the setup order for the extension.
   */
readonly setupOrder?: String array containing any of:'BeforeSFRuntime';

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion: string;

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
   * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: string[];

/**
   * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
   */
readonly sourceVault: SubResource;

/**
   * The list of key vault references in SourceVault which contain certificates.
   */
readonly vaultCertificates: VaultCertificate[];

/**
   * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account.For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name {UppercaseThumbprint}.crt for the X509 certificate file and {UppercaseThumbprint}.prv for private key. Both of these files are .pem formatted.
   */
readonly certificateStore: string;

/**
   * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"}
   */
readonly certificateUrl: string;

/**
   * The number of nodes in the node type.If present in request it will override properties.vmInstanceCount.
   */
readonly capacity: number;

/**
   * Specifies the tier of the node type.Possible Values:Standard
   */
readonly tier?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
