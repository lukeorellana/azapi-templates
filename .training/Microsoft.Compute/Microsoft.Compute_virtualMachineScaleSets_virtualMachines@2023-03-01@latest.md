```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = {
        hibernationEnabled = bool
        ultraSSDEnabled = bool
      }
      availabilitySet = {
        id = "string"
      }
      diagnosticsProfile = {
        bootDiagnostics = {
          enabled = bool
          storageUri = "string"
        }
      }
      hardwareProfile = {
        vmSize = "string"
        vmSizeProperties = {
          vCPUsAvailable = int
          vCPUsPerCore = int
        }
      }
      licenseType = "string"
      networkProfile = {
        networkApiVersion = "2020-11-01"
        networkInterfaceConfigurations = [
          {
            name = "string"
            properties = {
              deleteOption = "string"
              disableTcpStateTracking = bool
              dnsSettings = {
                dnsServers = [
                  "string"
                ]
              }
              dscpConfiguration = {
                id = "string"
              }
              enableAcceleratedNetworking = bool
              enableFpga = bool
              enableIPForwarding = bool
              ipConfigurations = [
                {
                  name = "string"
                  properties = {
                    applicationGatewayBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    applicationSecurityGroups = [
                      {
                        id = "string"
                      }
                    ]
                    loadBalancerBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    primary = bool
                    privateIPAddressVersion = "string"
                    publicIPAddressConfiguration = {
                      name = "string"
                      properties = {
                        deleteOption = "string"
                        dnsSettings = {
                          domainNameLabel = "string"
                        }
                        idleTimeoutInMinutes = int
                        ipTags = [
                          {
                            ipTagType = "string"
                            tag = "string"
                          }
                        ]
                        publicIPAddressVersion = "string"
                        publicIPAllocationMethod = "string"
                        publicIPPrefix = {
                          id = "string"
                        }
                      }
                      sku = {
                        name = "string"
                        tier = "string"
                      }
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              networkSecurityGroup = {
                id = "string"
              }
              primary = bool
            }
          }
        ]
        networkInterfaces = [
          {
            id = "string"
            properties = {
              deleteOption = "string"
              primary = bool
            }
          }
        ]
      }
      networkProfileConfiguration = {
        networkInterfaceConfigurations = [
          {
            name = "string"
            properties = {
              deleteOption = "string"
              disableTcpStateTracking = bool
              dnsSettings = {
                dnsServers = [
                  "string"
                ]
              }
              enableAcceleratedNetworking = bool
              enableFpga = bool
              enableIPForwarding = bool
              ipConfigurations = [
                {
                  name = "string"
                  properties = {
                    applicationGatewayBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    applicationSecurityGroups = [
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
                    primary = bool
                    privateIPAddressVersion = "string"
                    publicIPAddressConfiguration = {
                      name = "string"
                      properties = {
                        deleteOption = "string"
                        dnsSettings = {
                          domainNameLabel = "string"
                        }
                        idleTimeoutInMinutes = int
                        ipTags = [
                          {
                            ipTagType = "string"
                            tag = "string"
                          }
                        ]
                        publicIPAddressVersion = "string"
                        publicIPPrefix = {
                          id = "string"
                        }
                      }
                      sku = {
                        name = "string"
                        tier = "string"
                      }
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              networkSecurityGroup = {
                id = "string"
              }
              primary = bool
            }
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        allowExtensionOperations = bool
        computerName = "string"
        customData = "string"
        linuxConfiguration = {
          disablePasswordAuthentication = bool
          enableVMAgentPlatformUpdates = bool
          patchSettings = {
            assessmentMode = "string"
            automaticByPlatformSettings = {
              bypassPlatformSafetyChecksOnUserSchedule = bool
              rebootSetting = "string"
            }
            patchMode = "string"
          }
          provisionVMAgent = bool
          ssh = {
            publicKeys = [
              {
                keyData = "string"
                path = "string"
              }
            ]
          }
        }
        requireGuestProvisionSignal = bool
        secrets = [
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
        windowsConfiguration = {
          additionalUnattendContent = [
            {
              componentName = "Microsoft-Windows-Shell-Setup"
              content = "string"
              passName = "OobeSystem"
              settingName = "string"
            }
          ]
          enableAutomaticUpdates = bool
          enableVMAgentPlatformUpdates = bool
          patchSettings = {
            assessmentMode = "string"
            automaticByPlatformSettings = {
              bypassPlatformSafetyChecksOnUserSchedule = bool
              rebootSetting = "string"
            }
            enableHotpatching = bool
            patchMode = "string"
          }
          provisionVMAgent = bool
          timeZone = "string"
          winRM = {
            listeners = [
              {
                certificateUrl = "string"
                protocol = "string"
              }
            ]
          }
        }
      }
      protectionPolicy = {
        protectFromScaleIn = bool
        protectFromScaleSetActions = bool
      }
      securityProfile = {
        encryptionAtHost = bool
        securityType = "string"
        uefiSettings = {
          secureBootEnabled = bool
          vTpmEnabled = bool
        }
      }
      storageProfile = {
        dataDisks = [
          {
            caching = "string"
            createOption = "string"
            deleteOption = "string"
            detachOption = "ForceDetach"
            diskSizeGB = int
            image = {
              uri = "string"
            }
            lun = int
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
              id = "string"
              securityProfile = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityEncryptionType = "string"
              }
              storageAccountType = "string"
            }
            name = "string"
            toBeDetached = bool
            vhd = {
              uri = "string"
            }
            writeAcceleratorEnabled = bool
          }
        ]
        diskControllerType = "string"
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          offer = "string"
          publisher = "string"
          sharedGalleryImageId = "string"
          sku = "string"
          version = "string"
        }
        osDisk = {
          caching = "string"
          createOption = "string"
          deleteOption = "string"
          diffDiskSettings = {
            option = "Local"
            placement = "string"
          }
          diskSizeGB = int
          encryptionSettings = {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            enabled = bool
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
          image = {
            uri = "string"
          }
          managedDisk = {
            diskEncryptionSet = {
              id = "string"
            }
            id = "string"
            securityProfile = {
              diskEncryptionSet = {
                id = "string"
              }
              securityEncryptionType = "string"
            }
            storageAccountType = "string"
          }
          name = "string"
          osType = "string"
          vhd = {
            uri = "string"
          }
          writeAcceleratorEnabled = bool
        }
      }
      userData = "string"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
    }
  })
}

```

### virtualMachineScaleSets/virtualMachines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachineScaleSets |
| identity | The identity of the virtual machine, if configured. | VirtualMachineIdentity |
| plan | Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then clickWant to deploy programmatically, Get Started ->. Enter any required information and then clickSave. | Plan |
| properties | Describes the properties of a virtual machine scale set virtual machine. | VirtualMachineScaleSetVMProperties |


### VirtualMachineIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### Plan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string |
| promotionCode | The promotion code. | string |
| publisher | The publisher ID. | string |


### VirtualMachineScaleSetVMProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type. | AdditionalCapabilities |
| availabilitySet | Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, seeAvailability sets overview. For more information on Azure planned maintenance, seeMaintenance and updates for Virtual Machines in Azure. Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. | SubResource |
| diagnosticsProfile | Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. | DiagnosticsProfile |
| hardwareProfile | Specifies the hardware settings for the virtual machine. | HardwareProfile |
| licenseType | Specifies that the image or disk that is being used was licensed on-premises.Possible values for Windows Server operating system are:Windows_ClientWindows_ServerPossible values for Linux Server operating system are:RHEL_BYOS (for RHEL)SLES_BYOS (for SUSE)For more information, seeAzure Hybrid Use Benefit for Windows ServerAzure Hybrid Use Benefit for Linux ServerMinimum api-version: 2015-06-15 | string |
| networkProfile | Specifies the network interfaces of the virtual machine. | NetworkProfile |
| networkProfileConfiguration | Specifies the network profile configuration of the virtual machine. | VirtualMachineScaleSetVMNetworkProfileConfiguration |
| osProfile | Specifies the operating system settings for the virtual machine. | OSProfile |
| protectionPolicy | Specifies the protection policy of the virtual machine. | VirtualMachineScaleSetVMProtectionPolicy |
| securityProfile | Specifies the Security related profile settings for the virtual machine. | SecurityProfile |
| storageProfile | Specifies the storage settings for the virtual machine disks. | StorageProfile |
| userData | UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here.Minimum api-version: 2021-03-01 | string |


### AdditionalCapabilities

| Name | Description | Value |
|-|-|-|
| hibernationEnabled | The flag that enables or disables hibernation capability on the VM. | bool |
| ultraSSDEnabled | The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. | bool |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### DiagnosticsProfile

| Name | Description | Value |
|-|-|-|
| bootDiagnostics | Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status.NOTE: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor. | BootDiagnostics |


### BootDiagnostics

| Name | Description | Value |
|-|-|-|
| enabled | Whether boot diagnostics should be enabled on the Virtual Machine. | bool |
| storageUri | Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used. | string |


### HardwareProfile

| Name | Description | Value |
|-|-|-|
| vmSize | Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs:List all available virtual machine sizes in an availability set,List all available virtual machine sizes in a region,List all available virtual machine sizes for resizing. For more information about virtual machine sizes, seeSizes for virtual machines. The available VM sizes depend on region and availability set. | 'Basic_A0''Basic_A1''Basic_A2''Basic_A3''Basic_A4''Standard_A0''Standard_A1''Standard_A10''Standard_A11''Standard_A1_v2''Standard_A2''Standard_A2_v2''Standard_A2m_v2''Standard_A3''Standard_A4''Standard_A4_v2''Standard_A4m_v2''Standard_A5''Standard_A6''Standard_A7''Standard_A8''Standard_A8_v2''Standard_A8m_v2''Standard_A9''Standard_B1ms''Standard_B1s''Standard_B2ms''Standard_B2s''Standard_B4ms''Standard_B8ms''Standard_D1''Standard_D11''Standard_D11_v2''Standard_D12''Standard_D12_v2''Standard_D13''Standard_D13_v2''Standard_D14''Standard_D14_v2''Standard_D15_v2''Standard_D16_v3''Standard_D16s_v3''Standard_D1_v2''Standard_D2''Standard_D2_v2''Standard_D2_v3''Standard_D2s_v3''Standard_D3''Standard_D32_v3''Standard_D32s_v3''Standard_D3_v2''Standard_D4''Standard_D4_v2''Standard_D4_v3''Standard_D4s_v3''Standard_D5_v2''Standard_D64_v3''Standard_D64s_v3''Standard_D8_v3''Standard_D8s_v3''Standard_DS1''Standard_DS11''Standard_DS11_v2''Standard_DS12''Standard_DS12_v2''Standard_DS13''Standard_DS13-2_v2''Standard_DS13-4_v2''Standard_DS13_v2''Standard_DS14''Standard_DS14-4_v2''Standard_DS14-8_v2''Standard_DS14_v2''Standard_DS15_v2''Standard_DS1_v2''Standard_DS2''Standard_DS2_v2''Standard_DS3''Standard_DS3_v2''Standard_DS4''Standard_DS4_v2''Standard_DS5_v2''Standard_E16_v3''Standard_E16s_v3''Standard_E2_v3''Standard_E2s_v3''Standard_E32-16_v3''Standard_E32-8s_v3''Standard_E32_v3''Standard_E32s_v3''Standard_E4_v3''Standard_E4s_v3''Standard_E64-16s_v3''Standard_E64-32s_v3''Standard_E64_v3''Standard_E64s_v3''Standard_E8_v3''Standard_E8s_v3''Standard_F1''Standard_F16''Standard_F16s''Standard_F16s_v2''Standard_F1s''Standard_F2''Standard_F2s''Standard_F2s_v2''Standard_F32s_v2''Standard_F4''Standard_F4s''Standard_F4s_v2''Standard_F64s_v2''Standard_F72s_v2''Standard_F8''Standard_F8s''Standard_F8s_v2''Standard_G1''Standard_G2''Standard_G3''Standard_G4''Standard_G5''Standard_GS1''Standard_GS2''Standard_GS3''Standard_GS4''Standard_GS4-4''Standard_GS4-8''Standard_GS5''Standard_GS5-16''Standard_GS5-8''Standard_H16''Standard_H16m''Standard_H16mr''Standard_H16r''Standard_H8''Standard_H8m''Standard_L16s''Standard_L32s''Standard_L4s''Standard_L8s''Standard_M128-32ms''Standard_M128-64ms''Standard_M128ms''Standard_M128s''Standard_M64-16ms''Standard_M64-32ms''Standard_M64ms''Standard_M64s''Standard_NC12''Standard_NC12s_v2''Standard_NC12s_v3''Standard_NC24''Standard_NC24r''Standard_NC24rs_v2''Standard_NC24rs_v3''Standard_NC24s_v2''Standard_NC24s_v3''Standard_NC6''Standard_NC6s_v2''Standard_NC6s_v3''Standard_ND12s''Standard_ND24rs''Standard_ND24s''Standard_ND6s''Standard_NV12''Standard_NV24''Standard_NV6' |
| vmSizeProperties | Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. This feature is still in preview mode and is not supported for VirtualMachineScaleSet. Please follow the instructions inVM Customizationfor more details. | VMSizeProperties |


### VMSizeProperties

| Name | Description | Value |
|-|-|-|
| vCPUsAvailable | Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response ofList all available virtual machine sizes in a region. | int |
| vCPUsPerCore | Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response ofList all available virtual machine sizes in a region.Setting this property to 1 also means that hyper-threading is disabled. | int |


### NetworkProfile

| Name | Description | Value |
|-|-|-|
| networkApiVersion | specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations | '2020-11-01' |
| networkInterfaceConfigurations | Specifies the networking configurations that will be used to create the virtual machine networking resources. | VirtualMachineNetworkInterfaceConfiguration[] |
| networkInterfaces | Specifies the list of resource Ids for the network interfaces associated with the virtual machine. | NetworkInterfaceReference[] |


### VirtualMachineNetworkInterfaceConfiguration

| Name | Description | Value |
|-|-|-|
| name | The network interface configuration name. | string (required) |
| properties | Describes a virtual machine network profile's IP configuration. | VirtualMachineNetworkInterfaceConfigurationPropertie... |


### VirtualMachineNetworkInterfaceConfigurationPropertie...

| Name | Description | Value |
|-|-|-|
| deleteOption | Specify what happens to the network interface when the VM is deleted | 'Delete''Detach' |
| disableTcpStateTracking | Specifies whether the network interface is disabled for tcp state tracking. | bool |
| dnsSettings | The dns settings to be applied on the network interfaces. | VirtualMachineNetworkInterfaceDnsSettingsConfigurati... |
| dscpConfiguration |  | SubResource |
| enableAcceleratedNetworking | Specifies whether the network interface is accelerated networking-enabled. | bool |
| enableFpga | Specifies whether the network interface is FPGA networking-enabled. | bool |
| enableIPForwarding | Whether IP forwarding enabled on this NIC. | bool |
| ipConfigurations | Specifies the IP configurations of the network interface. | VirtualMachineNetworkInterfaceIPConfiguration[] (required) |
| networkSecurityGroup | The network security group. | SubResource |
| primary | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | bool |


### VirtualMachineNetworkInterfaceDnsSettingsConfigurati...

| Name | Description | Value |
|-|-|-|
| dnsServers | List of DNS servers IP addresses | string[] |


### VirtualMachineNetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| name | The IP configuration name. | string (required) |
| properties | Describes a virtual machine network interface IP configuration properties. | VirtualMachineNetworkInterfaceIPConfigurationPropert... |


### VirtualMachineNetworkInterfaceIPConfigurationPropert...

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway. | SubResource[] |
| applicationSecurityGroups | Specifies an array of references to application security group. | SubResource[] |
| loadBalancerBackendAddressPools | Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer]. | SubResource[] |
| primary | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | bool |
| privateIPAddressVersion | Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. | 'IPv4''IPv6' |
| publicIPAddressConfiguration | The publicIPAddressConfiguration. | VirtualMachinePublicIPAddressConfiguration |
| subnet | Specifies the identifier of the subnet. | SubResource |


### VirtualMachinePublicIPAddressConfiguration

| Name | Description | Value |
|-|-|-|
| name | The publicIP address configuration name. | string (required) |
| properties | Describes a virtual machines IP Configuration's PublicIPAddress configuration | VirtualMachinePublicIPAddressConfigurationProperties |
| sku | Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible. | PublicIPAddressSku |


### VirtualMachinePublicIPAddressConfigurationProperties

| Name | Description | Value |
|-|-|-|
| deleteOption | Specify what happens to the public IP address when the VM is deleted | 'Delete''Detach' |
| dnsSettings | The dns settings to be applied on the publicIP addresses . | VirtualMachinePublicIPAddressDnsSettingsConfiguratio... |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipTags | The list of IP tags associated with the public IP address. | VirtualMachineIpTag[] |
| publicIPAddressVersion | Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. | 'IPv4''IPv6' |
| publicIPAllocationMethod | Specify the public IP allocation type | 'Dynamic''Static' |
| publicIPPrefix | The PublicIPPrefix from which to allocate publicIP addresses. | SubResource |


### VirtualMachinePublicIPAddressDnsSettingsConfiguratio...

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID. | string (required) |


### VirtualMachineIpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | IP tag type. Example: FirstPartyUsage. | string |
| tag | IP tag associated with the public IP. Example: SQL, Storage etc. | string |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Specify public IP sku name | 'Basic''Standard' |
| tier | Specify public IP sku tier | 'Global''Regional' |


### NetworkInterfaceReference

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
| properties | Describes a network interface reference properties. | NetworkInterfaceReferenceProperties |


### NetworkInterfaceReferenceProperties

| Name | Description | Value |
|-|-|-|
| deleteOption | Specify what happens to the network interface when the VM is deleted | 'Delete''Detach' |
| primary | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | bool |


### VirtualMachineScaleSetVMNetworkProfileConfiguration

| Name | Description | Value |
|-|-|-|
| networkInterfaceConfigurations | The list of network configurations. | VirtualMachineScaleSetNetworkConfiguration[] |


### VirtualMachineScaleSetNetworkConfiguration

| Name | Description | Value |
|-|-|-|
| name | The network configuration name. | string (required) |
| properties | Describes a virtual machine scale set network profile's IP configuration. | VirtualMachineScaleSetNetworkConfigurationProperties |


### VirtualMachineScaleSetNetworkConfigurationProperties

| Name | Description | Value |
|-|-|-|
| deleteOption | Specify what happens to the network interface when the VM is deleted | 'Delete''Detach' |
| disableTcpStateTracking | Specifies whether the network interface is disabled for tcp state tracking. | bool |
| dnsSettings | The dns settings to be applied on the network interfaces. | VirtualMachineScaleSetNetworkConfigurationDnsSetting... |
| enableAcceleratedNetworking | Specifies whether the network interface is accelerated networking-enabled. | bool |
| enableFpga | Specifies whether the network interface is FPGA networking-enabled. | bool |
| enableIPForwarding | Whether IP forwarding enabled on this NIC. | bool |
| ipConfigurations | Specifies the IP configurations of the network interface. | VirtualMachineScaleSetIPConfiguration[] (required) |
| networkSecurityGroup | The network security group. | SubResource |
| primary | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | bool |


### VirtualMachineScaleSetNetworkConfigurationDnsSetting...

| Name | Description | Value |
|-|-|-|
| dnsServers | List of DNS servers IP addresses | string[] |


### VirtualMachineScaleSetIPConfiguration

| Name | Description | Value |
|-|-|-|
| name | The IP configuration name. | string (required) |
| properties | Describes a virtual machine scale set network profile's IP configuration properties. | VirtualMachineScaleSetIPConfigurationProperties |


### VirtualMachineScaleSetIPConfigurationProperties

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway. | SubResource[] |
| applicationSecurityGroups | Specifies an array of references to application security group. | SubResource[] |
| loadBalancerBackendAddressPools | Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer. | SubResource[] |
| loadBalancerInboundNatPools | Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer. | SubResource[] |
| primary | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | bool |
| privateIPAddressVersion | Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. | 'IPv4''IPv6' |
| publicIPAddressConfiguration | The publicIPAddressConfiguration. | VirtualMachineScaleSetPublicIPAddressConfiguration |
| subnet | Specifies the identifier of the subnet. | ApiEntityReference |


### VirtualMachineScaleSetPublicIPAddressConfiguration

| Name | Description | Value |
|-|-|-|
| name | The publicIP address configuration name. | string (required) |
| properties | Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration | VirtualMachineScaleSetPublicIPAddressConfigurationPr... |
| sku | Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible. | PublicIPAddressSku |


### VirtualMachineScaleSetPublicIPAddressConfigurationPr...

| Name | Description | Value |
|-|-|-|
| deleteOption | Specify what happens to the public IP when the VM is deleted | 'Delete''Detach' |
| dnsSettings | The dns settings to be applied on the publicIP addresses . | VirtualMachineScaleSetPublicIPAddressConfigurationDn... |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipTags | The list of IP tags associated with the public IP address. | VirtualMachineScaleSetIpTag[] |
| publicIPAddressVersion | Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. | 'IPv4''IPv6' |
| publicIPPrefix | The PublicIPPrefix from which to allocate publicIP addresses. | SubResource |


### VirtualMachineScaleSetPublicIPAddressConfigurationDn...

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created | string (required) |


### VirtualMachineScaleSetIpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | IP tag type. Example: FirstPartyUsage. | string |
| tag | IP tag associated with the public IP. Example: SQL, Storage etc. | string |


### ApiEntityReference

| Name | Description | Value |
|-|-|-|
| id | The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | string |


### OSProfile

| Name | Description | Value |
|-|-|-|
| adminPassword | Specifies the password of the administrator account.Minimum-length (Windows):8 charactersMinimum-length (Linux):6 charactersMax-length (Windows):123 charactersMax-length (Linux):72 charactersComplexity requirements:3 out of 4 conditions below need to be fulfilledHas lower charactersHas upper charactersHas a digitHas a special character (Regex match [\W_])Disallowed values:"abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"For resetting the password, seeHow to reset the Remote Desktop service or its login password in a Windows VMFor resetting root password, seeManage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension | string |
| adminUsername | Specifies the name of the administrator account.This property cannot be updated after the VM is created.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters. | string |
| allowExtensionOperations | Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine. | bool |
| computerName | Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created.Max-length (Windows):15 characters.Max-length (Linux):64 characters. For naming conventions and restrictions seeAzure infrastructure services implementation guidelines. | string |
| customData | Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes.Note: Do not pass any secrets or passwords in customData property.This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information seeCustom Data on Azure VMs. For using cloud-init for your Linux VM, seeUsing cloud-init to customize a Linux VM during creation. | string |
| linuxConfiguration | Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, seeLinux on Azure-Endorsed Distributions. | LinuxConfiguration |
| requireGuestProvisionSignal | Optional property which must either be set to True or omitted. | bool |
| secrets | Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows. | VaultSecretGroup[] |
| windowsConfiguration | Specifies Windows operating system settings on the virtual machine. | WindowsConfiguration |


### LinuxConfiguration

| Name | Description | Value |
|-|-|-|
| disablePasswordAuthentication | Specifies whether password authentication should be disabled. | bool |
| enableVMAgentPlatformUpdates | Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false. | bool |
| patchSettings | [Preview Feature] Specifies settings related to VM Guest Patching on Linux. | LinuxPatchSettings |
| provisionVMAgent | Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. | bool |
| ssh | Specifies the ssh key configuration for a Linux OS. | SshConfiguration |


### LinuxPatchSettings

| Name | Description | Value |
|-|-|-|
| assessmentMode | Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.Possible values are:ImageDefault- You control the timing of patch assessments on a virtual machine.AutomaticByPlatform- The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. | 'AutomaticByPlatform''ImageDefault' |
| automaticByPlatformSettings | Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux. | LinuxVMGuestPatchAutomaticByPlatformSettings |
| patchMode | Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.Possible values are:ImageDefault- The virtual machine's default patching configuration is used.AutomaticByPlatform- The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true | 'AutomaticByPlatform''ImageDefault' |


### LinuxVMGuestPatchAutomaticByPlatformSettings

| Name | Description | Value |
|-|-|-|
| bypassPlatformSafetyChecksOnUserSchedule | Enables customer to schedule patching without accidental upgrades | bool |
| rebootSetting | Specifies the reboot setting for all AutomaticByPlatform patch installation operations. | 'Always''IfRequired''Never''Unknown' |


### SshConfiguration

| Name | Description | Value |
|-|-|-|
| publicKeys | The list of SSH public keys used to authenticate with linux based VMs. | SshPublicKey[] |


### SshPublicKey

| Name | Description | Value |
|-|-|-|
| keyData | SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]/azure/virtual-machines/linux/create-ssh-keys-detailed). | string |
| path | Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | string |


### VaultSecretGroup

| Name | Description | Value |
|-|-|-|
| sourceVault | The relative URL of the Key Vault containing all of the certificates in VaultCertificates. | SubResource |
| vaultCertificates | The list of key vault references in SourceVault which contain certificates. | VaultCertificate[] |


### VaultCertificate

| Name | Description | Value |
|-|-|-|
| certificateStore | For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted. | string |
| certificateUrl | This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"}To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows. | string |


### WindowsConfiguration

| Name | Description | Value |
|-|-|-|
| additionalUnattendContent | Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. | AdditionalUnattendContent[] |
| enableAutomaticUpdates | Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning. | bool |
| enableVMAgentPlatformUpdates | Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false. | bool |
| patchSettings | [Preview Feature] Specifies settings related to VM Guest Patching on Windows. | PatchSettings |
| provisionVMAgent | Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. | bool |
| timeZone | Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can beTimeZoneInfo.Idvalue from time zones returned byTimeZoneInfo.GetSystemTimeZones. | string |
| winRM | Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell. | WinRMConfiguration |


### AdditionalUnattendContent

| Name | Description | Value |
|-|-|-|
| componentName | The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. | 'Microsoft-Windows-Shell-Setup' |
| content | Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted. | string |
| passName | The pass name. Currently, the only allowable value is OobeSystem. | 'OobeSystem' |
| settingName | Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. | 'AutoLogon''FirstLogonCommands' |


### PatchSettings

| Name | Description | Value |
|-|-|-|
| assessmentMode | Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.Possible values are:ImageDefault- You control the timing of patch assessments on a virtual machine.AutomaticByPlatform- The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. | 'AutomaticByPlatform''ImageDefault' |
| automaticByPlatformSettings | Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows. | WindowsVMGuestPatchAutomaticByPlatformSettings |
| enableHotpatching | Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'. | bool |
| patchMode | Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.Possible values are:Manual- You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be falseAutomaticByOS- The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true.AutomaticByPlatform- the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true | 'AutomaticByOS''AutomaticByPlatform''Manual' |


### WindowsVMGuestPatchAutomaticByPlatformSettings

| Name | Description | Value |
|-|-|-|
| bypassPlatformSafetyChecksOnUserSchedule | Enables customer to schedule patching without accidental upgrades | bool |
| rebootSetting | Specifies the reboot setting for all AutomaticByPlatform patch installation operations. | 'Always''IfRequired''Never''Unknown' |


### WinRMConfiguration

| Name | Description | Value |
|-|-|-|
| listeners | The list of Windows Remote Management listeners | WinRMListener[] |


### WinRMListener

| Name | Description | Value |
|-|-|-|
| certificateUrl | This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"}To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows. | string |
| protocol | Specifies the protocol of WinRM listener. Possible values are:http,https. | 'Http''Https' |


### VirtualMachineScaleSetVMProtectionPolicy

| Name | Description | Value |
|-|-|-|
| protectFromScaleIn | Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation. | bool |
| protectFromScaleSetActions | Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM. | bool |


### SecurityProfile

| Name | Description | Value |
|-|-|-|
| encryptionAtHost | This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource. | bool |
| securityType | Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set. | 'ConfidentialVM''TrustedLaunch' |
| uefiSettings | Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01. | UefiSettings |


### UefiSettings

| Name | Description | Value |
|-|-|-|
| secureBootEnabled | Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01. | bool |
| vTpmEnabled | Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01. | bool |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | DataDisk[] |
| diskControllerType | Specifies the disk controller type configured for the VM.Note:This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01. | 'NVMe''SCSI' |
| imageReference | Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. | ImageReference |
| osDisk | Specifies information about the operating system disk used by the virtual machine. For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | OSDisk |


### DataDisk

| Name | Description | Value |
|-|-|-|
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The defaulting behavior is:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| createOption | Specifies how the virtual machine should be created. Possible values are:Attach.This value is used when you are using a specialized disk to create the virtual machine.FromImage.This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. | 'Attach''Empty''FromImage' (required) |
| deleteOption | Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are:Delete.If this value is used, the data disk is deleted when VM is deleted.Detach.If this value is used, the data disk is retained after VM is deleted. The default value is set toDetach. | 'Delete''Detach' |
| detachOption | Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values:ForceDetach.detachOption:ForceDetachis applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior.This feature is still in previewmode and is not supported for VirtualMachineScaleSet. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'. | 'ForceDetach' |
| diskSizeGB | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. | int |
| image | The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. | VirtualHardDisk |
| lun | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | int (required) |
| managedDisk | The managed disk parameters. | ManagedDiskParameters |
| name | The disk name. | string |
| toBeDetached | Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset | bool |
| vhd | The virtual hard disk. | VirtualHardDisk |
| writeAcceleratorEnabled | Specifies whether writeAccelerator should be enabled or disabled on the disk. | bool |


### VirtualHardDisk

| Name | Description | Value |
|-|-|-|
| uri | Specifies the virtual hard disk's uri. | string |


### ManagedDiskParameters

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk. | DiskEncryptionSetParameters |
| id | Resource Id | string |
| securityProfile | Specifies the security profile for the managed disk. | VMDiskSecurityProfile |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |


### DiskEncryptionSetParameters

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### VMDiskSecurityProfile

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob. | DiskEncryptionSetParameters |
| securityEncryptionType | Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob.Note:It can be set for only Confidential VMs. | 'DiskWithVMGuestState''VMGuestStateOnly' |


### ImageReference

| Name | Description | Value |
|-|-|-|
| communityGalleryImageId | Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call. | string |
| id | Resource Id | string |
| offer | Specifies the offer of the platform image or marketplace image used to create the virtual machine. | string |
| publisher | The image publisher. | string |
| sharedGalleryImageId | Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call. | string |
| sku | The image SKU. | string |
| version | Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input. | string |


### OSDisk

| Name | Description | Value |
|-|-|-|
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The defaulting behavior is:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| createOption | Specifies how the virtual machine should be created. Possible values are:Attach.This value is used when you are using a specialized disk to create the virtual machine.FromImage.This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. | 'Attach''Empty''FromImage' (required) |
| deleteOption | Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are:Delete.If this value is used, the OS disk is deleted when VM is deleted.Detach.If this value is used, the os disk is retained after VM is deleted. The default value is set toDetach. For an ephemeral OS Disk, the default value is set toDelete. The user cannot change the delete option for an ephemeral OS Disk. | 'Delete''Detach' |
| diffDiskSettings | Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine. | DiffDiskSettings |
| diskSizeGB | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. | int |
| encryptionSettings | Specifies the encryption settings for the OS Disk. Minimum api-version: 2015-06-15. | DiskEncryptionSettings |
| image | The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. | VirtualHardDisk |
| managedDisk | The managed disk parameters. | ManagedDiskParameters |
| name | The disk name. | string |
| osType | This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are:Windows,Linux. | 'Linux''Windows' |
| vhd | The virtual hard disk. | VirtualHardDisk |
| writeAcceleratorEnabled | Specifies whether writeAccelerator should be enabled or disabled on the disk. | bool |


### DiffDiskSettings

| Name | Description | Value |
|-|-|-|
| option | Specifies the ephemeral disk settings for operating system disk. | 'Local' |
| placement | Specifies the ephemeral disk placement for operating system disk. Possible values are:CacheDisk,ResourceDisk.The defaulting behavior is:CacheDiskif one is configured for the VM size otherwiseResourceDiskis used. Refer to the VM size documentation for Windows VM at /azure/virtual-machines/windows/sizes and Linux VM at /azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. | 'CacheDisk''ResourceDisk' |


### DiskEncryptionSettings

| Name | Description | Value |
|-|-|-|
| diskEncryptionKey | Specifies the location of the disk encryption key, which is a Key Vault Secret. | KeyVaultSecretReference |
| enabled | Specifies whether disk encryption should be enabled on the virtual machine. | bool |
| keyEncryptionKey | Specifies the location of the key encryption key in Key Vault. | KeyVaultKeyReference |


### KeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | The URL referencing a secret in a Key Vault. | string (required) |
| sourceVault | The relative URL of the Key Vault containing the secret. | SubResource(required) |


### KeyVaultKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | The URL referencing a key encryption key in Key Vault. | string (required) |
| sourceVault | The relative URL of the Key Vault containing the key. | SubResource(required) |


