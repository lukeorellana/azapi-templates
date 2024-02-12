```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedClusters/nodeTypes@2023-12-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      additionalDataDisks = [
        {
          diskLetter = "string"
          diskSizeGB = int
          diskType = "string"
          lun = int
        }
      ]
      additionalNetworkInterfaceConfigurations = [
        {
          dscpConfiguration = {
            id = "string"
          }
          enableAcceleratedNetworking = bool
          ipConfigurations = [
            {
              applicationGatewayBackendAddressPools = [
                {
                  id = "string"
                }
              ]
              loadBalancerBackendAddressPools = [
                {
                  id = "string"
                }
              ]
              loadBalancerInboundNatPools = [
                {
                  id = "string"
                }
              ]
              name = "string"
              privateIPAddressVersion = "string"
              publicIPAddressConfiguration = {
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                name = "string"
                publicIPAddressVersion = "string"
              }
              subnet = {
                id = "string"
              }
            }
          ]
          name = "string"
        }
      ]
      applicationPorts = {
        endPort = int
        startPort = int
      }
      capacities = {
        {customized property} = "string"
      }
      dataDiskLetter = "string"
      dataDiskSizeGB = int
      dataDiskType = "string"
      dscpConfigurationId = "string"
      enableAcceleratedNetworking = bool
      enableEncryptionAtHost = bool
      enableNodePublicIP = bool
      enableNodePublicIPv6 = bool
      enableOverProvisioning = bool
      ephemeralPorts = {
        endPort = int
        startPort = int
      }
      evictionPolicy = "string"
      frontendConfigurations = [
        {
          applicationGatewayBackendAddressPoolId = "string"
          ipAddressType = "string"
          loadBalancerBackendAddressPoolId = "string"
          loadBalancerInboundNatPoolId = "string"
        }
      ]
      hostGroupId = "string"
      isPrimary = bool
      isSpotVM = bool
      isStateless = bool
      multiplePlacementGroups = bool
      natGatewayId = "string"
      networkSecurityRules = [
        {
          access = "string"
          description = "string"
          destinationAddressPrefix = "string"
          destinationAddressPrefixes = [
            "string"
          ]
          destinationPortRange = "string"
          destinationPortRanges = [
            "string"
          ]
          direction = "string"
          name = "string"
          priority = int
          protocol = "string"
          sourceAddressPrefix = "string"
          sourceAddressPrefixes = [
            "string"
          ]
          sourcePortRange = "string"
          sourcePortRanges = [
            "string"
          ]
        }
      ]
      placementProperties = {
        {customized property} = "string"
      }
      secureBootEnabled = bool
      securityType = "TrustedLaunch"
      serviceArtifactReferenceId = "string"
      spotRestoreTimeout = "string"
      subnetId = "string"
      useDefaultPublicLoadBalancer = bool
      useEphemeralOSDisk = bool
      useTempDataDisk = bool
      vmExtensions = [
        {
          name = "string"
          properties = {
            autoUpgradeMinorVersion = bool
            enableAutomaticUpgrade = bool
            forceUpdateTag = "string"
            provisionAfterExtensions = [
              "string"
            ]
            publisher = "string"
            setupOrder = "BeforeSFRuntime"
            type = "string"
            typeHandlerVersion = "string"
          }
        }
      ]
      vmImageOffer = "string"
      vmImagePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      vmImagePublisher = "string"
      vmImageResourceId = "string"
      vmImageSku = "string"
      vmImageVersion = "string"
      vmInstanceCount = int
      vmManagedIdentity = {
        userAssignedIdentities = [
          "string"
        ]
      }
      vmSecrets = [
        {
          sourceVault = {
            id = "string"
          }
          vaultCertificates = [
            {
              certificateStore = "string"
              certificateUrl = "string"
            }
          ]
        }
      ]
      vmSetupActions = [
        "string"
      ]
      vmSharedGalleryImageId = "string"
      vmSize = "string"
      zones = [
        "string"
      ]
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### managedClusters/nodeTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The node type sku. | NodeTypeSku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedClusters |
| properties | The node type properties | NodeTypeProperties |


### NodeTypeProperties

| Name | Description | Value |
|-|-|-|
| additionalDataDisks | Additional managed data disks. | VmssDataDisk[] |
| additionalNetworkInterfaceConfigurations | Specifies the settings for any additional secondary network interfaces to attach to the node type. | AdditionalNetworkInterfaceConfiguration[] |
| applicationPorts | The range of ports from which cluster assigned port to Service Fabric applications. | EndpointRangeDescription |
| capacities | The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has. | NodeTypePropertiesCapacities |
| dataDiskLetter | Managed data disk letter. It can not use the reserved letter C or D and it can not change after created. | string |
| dataDiskSizeGB | Disk size for the managed disk attached to the vms on the node type in GBs. | int |
| dataDiskType | Managed data disk type. Specifies the storage account type for the managed disk | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| dscpConfigurationId | Specifies the resource id of the DSCP configuration to apply to the node type network interface. | string |
| enableAcceleratedNetworking | Specifies whether the network interface is accelerated networking-enabled. | bool |
| enableEncryptionAtHost | Enable or disable the Host Encryption for the virtual machines on the node type. This will enable the encryption for all the disks including Resource/Temp disk at host itself. Default: The Encryption at host will be disabled unless this property is set to true for the resource. | bool |
| enableNodePublicIP | Specifies whether each node is allocated its own public IPv4 address. This is only supported on secondary node types with custom Load Balancers. | bool |
| enableNodePublicIPv6 | Specifies whether each node is allocated its own public IPv6 address. This is only supported on secondary node types with custom Load Balancers. | bool |
| enableOverProvisioning | Specifies whether the node type should be overprovisioned. It is only allowed for stateless node types. | bool |
| ephemeralPorts | The range of ephemeral ports that nodes in this node type should be configured with. | EndpointRangeDescription |
| evictionPolicy | Specifies the eviction policy for virtual machines in a SPOT node type. Default is Delete. | 'Deallocate''Delete' |
| frontendConfigurations | Indicates the node type uses its own frontend configurations instead of the default one for the cluster. This setting can only be specified for non-primary node types and can not be added or removed after the node type is created. | FrontendConfiguration[] |
| hostGroupId | Specifies the full host group resource Id. This property is used for deploying on azure dedicated hosts. | string |
| isPrimary | Indicates the Service Fabric system services for the cluster will run on this node type. This setting cannot be changed once the node type is created. | bool (required) |
| isSpotVM | Indicates whether the node type will be Spot Virtual Machines. Azure will allocate the VMs if there is capacity available and the VMs can be evicted at any time. | bool |
| isStateless | Indicates if the node type can only host Stateless workloads. | bool |
| multiplePlacementGroups | Indicates if scale set associated with the node type can be composed of multiple placement groups. | bool |
| natGatewayId | Specifies the resource id of a NAT Gateway to attach to the subnet of this node type. Node type must use custom load balancer. | string |
| networkSecurityRules | The Network Security Rules for this node type. This setting can only be specified for node types that are configured with frontend configurations. | NetworkSecurityRule[] |
| placementProperties | The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run. | NodeTypePropertiesPlacementProperties |
| secureBootEnabled | Specifies whether secure boot should be enabled on the nodeType. Can only be used with TrustedLaunch SecurityType | bool |
| securityType | Specifies the security type of the nodeType. Only TrustedLaunch is currently supported | 'TrustedLaunch' |
| serviceArtifactReferenceId | Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. | string |
| spotRestoreTimeout | Indicates the time duration after which the platform will not try to restore the VMSS SPOT instances specified as ISO 8601. | string |
| subnetId | Indicates the resource id of the subnet for the node type. | string |
| useDefaultPublicLoadBalancer | Specifies whether the use public load balancer. If not specified and the node type doesn't have its own frontend configuration, it will be attached to the default load balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is true, then the frontend has to be an Internal Load Balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is false or not set, then the custom load balancer must include a public load balancer to provide outbound connectivity. | bool |
| useEphemeralOSDisk | Indicates whether to use ephemeral os disk. The sku selected on the vmSize property needs to support this feature. | bool |
| useTempDataDisk | Specifies whether to use the temporary disk for the service fabric data root, in which case no managed data disk will be attached and the temporary disk will be used. It is only allowed for stateless node types. | bool |
| vmExtensions | Set of extensions that should be installed onto the virtual machines. | VmssExtension[] |
| vmImageOffer | The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer. | string |
| vmImagePlan | Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save. | VmImagePlan |
| vmImagePublisher | The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer. | string |
| vmImageResourceId | Indicates the resource id of the vm image. This parameter is used for custom vm image. | string |
| vmImageSku | The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter. | string |
| vmImageVersion | The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. | string |
| vmInstanceCount | The number of nodes in the node type.Values:-1 - Use when auto scale rules are configured or sku.capacity is defined0 - Not supported}0 - Use for manual scale. | int (required) |
| vmManagedIdentity | Identities to assign to the virtual machine scale set under the node type. | VmManagedIdentity |
| vmSecrets | The secrets to install in the virtual machines. | VaultSecretGroup[] |
| vmSetupActions | Specifies the actions to be performed on the vms before bootstrapping the service fabric runtime. | String array containing any of:'EnableContainers''EnableHyperV' |
| vmSharedGalleryImageId | Indicates the resource id of the vm shared galleries image. This parameter is used for custom vm image. | string |
| vmSize | The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3. | string |
| zones | Specifies the availability zones where the node type would span across. If the cluster is not spanning across availability zones, initiates az migration for the cluster. | string[] |


### VmssDataDisk

| Name | Description | Value |
|-|-|-|
| diskLetter | Managed data disk letter. It can not use the reserved letter C or D and it can not change after created. | string (required) |
| diskSizeGB | Disk size for each vm in the node type in GBs. | int (required) |
| diskType | Managed data disk type. Specifies the storage account type for the managed disk | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |
| lun | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk. | int (required) |


### AdditionalNetworkInterfaceConfiguration

| Name | Description | Value |
|-|-|-|
| dscpConfiguration | Specifies the DSCP configuration to apply to the network interface. | SubResource |
| enableAcceleratedNetworking | Specifies whether the network interface is accelerated networking-enabled. | bool |
| ipConfigurations | Specifies the IP configurations of the network interface. | IpConfiguration[] (required) |
| name | Name of the network interface. | string (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Azure resource identifier. | string |


### IpConfiguration

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | Specifies an array of references to backend address pools of application gateways. A node type can reference backend address pools of multiple application gateways. Multiple node types cannot use the same application gateway. | SubResource[] |
| loadBalancerBackendAddressPools | Specifies an array of references to backend address pools of load balancers. A node type can reference backend address pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer. | SubResource[] |
| loadBalancerInboundNatPools | Specifies an array of references to inbound Nat pools of the load balancers. A node type can reference inbound nat pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer. | SubResource[] |
| name | Name of the network interface. | string (required) |
| privateIPAddressVersion | Specifies whether the IP configuration's private IP is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| publicIPAddressConfiguration | The public IP address configuration of the network interface. | IpConfigurationPublicIPAddressConfiguration |
| subnet | Specifies the subnet of the network interface. | SubResource |


### IpConfigurationPublicIPAddressConfiguration

| Name | Description | Value |
|-|-|-|
| ipTags | Specifies the list of IP tags associated with the public IP address. | IpTag[] |
| name | Name of the network interface. | string (required) |
| publicIPAddressVersion | Specifies whether the IP configuration's public IP is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | IP tag type. Example: FirstPartyUsage. | string (required) |
| tag | IP tag associated with the public IP. Example: SQL, Storage etc. | string (required) |


### EndpointRangeDescription

| Name | Description | Value |
|-|-|-|
| endPort | End port of a range of ports | int (required) |
| startPort | Starting port of a range of ports | int (required) |


### NodeTypePropertiesCapacities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### FrontendConfiguration

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPoolId | The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendAddressPools/{backendAddressPoolName}'. | string |
| ipAddressType | The IP address type of this frontend configuration. If omitted the default value is IPv4. | 'IPv4''IPv6' |
| loadBalancerBackendAddressPoolId | The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}'. | string |
| loadBalancerInboundNatPoolId | The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/inboundNatPools/{inboundNatPoolName}'. | string |


### NetworkSecurityRule

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'allow''deny' (required) |
| description | Network security rule description. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationPortRange | he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | Network security rule direction. | 'inbound''outbound' (required) |
| name | Network security rule name. | string (required) |
| priority | The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | 'ah''esp''http''https''icmp''tcp''udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### NodeTypePropertiesPlacementProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### VmssExtension

| Name | Description | Value |
|-|-|-|
| name | The name of the extension. | string (required) |
| properties | Describes the properties of a Virtual Machine Scale Set Extension. | VmssExtensionProperties(required) |


### VmssExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. | string |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string (required) |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| setupOrder | Indicates the setup order for the extension. | String array containing any of:'BeforeSFRuntime' |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string (required) |
| typeHandlerVersion | Specifies the version of the script handler. | string (required) |


### VmImagePlan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string |
| promotionCode | The promotion code. | string |
| publisher | The publisher ID. | string |


### VmManagedIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentities | The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | string[] |


### VaultSecretGroup

| Name | Description | Value |
|-|-|-|
| sourceVault | The relative URL of the Key Vault containing all of the certificates in VaultCertificates. | SubResource(required) |
| vaultCertificates | The list of key vault references in SourceVault which contain certificates. | VaultCertificate[] (required) |


### VaultCertificate

| Name | Description | Value |
|-|-|-|
| certificateStore | For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account.For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name {UppercaseThumbprint}.crt for the X509 certificate file and {UppercaseThumbprint}.prv for private key. Both of these files are .pem formatted. | string (required) |
| certificateUrl | This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"} | string (required) |


### NodeTypeSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of nodes in the node type.If present in request it will override properties.vmInstanceCount. | int (required) |
| name | The sku name.Name is internally generated and is used in auto-scale scenarios.Property does not allow to be changed to other values than generated.To avoid deployment errors please omit the property. | string |
| tier | Specifies the tier of the node type.Possible Values:Standard | string |


