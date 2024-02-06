## Microsoft.ConnectedVMwarevSphere/clusters@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/clusters@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | ClusterProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the cluster. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this cluster resides. | string |
## Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### datastores

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | DatastoreProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### DatastoreProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the datastore. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the datastore. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this datastore resides. | string |
## Microsoft.ConnectedVMwarevSphere/hosts@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/hosts@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### hosts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | HostProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### HostProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the host. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the host. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this host resides. | string |
## Microsoft.ConnectedVMwarevSphere/resourcePools@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/resourcePools@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### resourcePools

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | ResourcePoolProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### ResourcePoolProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the resource pool. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the resource pool. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this resource pool resides. | string |
## Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      credentials = {
        password = "string"
        username = "string"
      }
      fqdn = "string"
      port = int
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### vcenters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | VCenterProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### VCenterProperties

| Name | Description | Value |
|-|-|-|
| credentials | Username / Password Credentials to connect to vcenter. | VICredential |
| fqdn | Gets or sets the FQDN/IPAddress of the vCenter. | string (required) |
| port | Gets or sets the port of the vCenter. | int |


### VICredential

| Name | Description | Value |
|-|-|-|
| password | Gets or sets the password to connect with the vCenter. | string |
| username | Gets or sets username to connect with the vCenter. | string |
## Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managedResourceId = "string"
      moName = "string"
      moRefId = "string"
      inventoryType = "string"
      // For remaining properties, see InventoryItemProperties objects
    }
    kind = "string"
  })
}

```

### vcenters/inventoryItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vcenters |
| properties | Resource properties. | InventoryItemProperties(required) |


### InventoryItemProperties

| Name | Description | Value |
|-|-|-|
| managedResourceId | Gets or sets the tracked resource id corresponding to the inventory resource. | string |
| moName | Gets or sets the vCenter Managed Object name for the inventory item. | string |
| moRefId | Gets or sets the MoRef (Managed Object Reference) ID for the inventory item. | string |
| inventoryType | Set the object type | ClusterDatastoreHostResourcePoolVirtualMachineVirtualMachineTemplateVirtualNetwork(required) |


### ClusterInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'Cluster' (required) |


### DatastoreInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'Datastore' (required) |
| capacityGB | Gets or sets Maximum capacity of this datastore, in GBs. | int |
| freeSpaceGB | Gets or sets Available space of this datastore, in GBs. | int |


### HostInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'Host' (required) |
| parent | Parent host inventory resource details. | InventoryItemDetails |


### InventoryItemDetails

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the resource. | string |
| inventoryType | The inventory type. | 'Cluster''Datastore''Host''ResourcePool''VirtualMachine''VirtualMachineTemplate''VirtualNetwork' |
| moName | Gets or sets the vCenter Managed Object name for the resource. | string |


### ResourcePoolInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'ResourcePool' (required) |
| parent | Parent resourcePool inventory resource details. | InventoryItemDetails |


### VirtualMachineInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'VirtualMachine' (required) |
| cluster | Cluster inventory resource details. | InventoryItemDetails |
| folderPath | Gets or sets the folder path of the vm. | string |
| host | Host inventory resource details. | InventoryItemDetails |
| instanceUuid | Gets or sets the instance uuid of the vm. | string |
| ipAddresses | Gets or sets the nic ip addresses. | string[] |
| osName | Gets or sets os name. | string |
| osType | Gets or sets the type of the os. | 'Linux''Other''Windows' |
| resourcePool | ResourcePool inventory resource details. | InventoryItemDetails |
| smbiosUuid | Gets or sets the SMBIOS UUID of the vm. | string |


### VirtualMachineTemplateInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'VirtualMachineTemplate' (required) |
| folderPath | Gets or sets the folder path of the template. | string |
| memorySizeMB | Gets or sets memory size in MBs for the template. | int |
| numCoresPerSocket | Gets or sets the number of cores per socket for the template.Defaults to 1 if unspecified. | int |
| numCPUs | Gets or sets the number of vCPUs for the template. | int |
| osName | Gets or sets os name. | string |
| osType | Gets or sets the type of the os. | 'Linux''Other''Windows' |


### VirtualNetworkInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'VirtualNetwork' (required) |
## Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      firmwareType = "string"
      guestAgentProfile = {
        clientPublicKey = "string"
      }
      hardwareProfile = {
        memorySizeMB = int
        numCoresPerSocket = int
        numCPUs = int
      }
      inventoryItemId = "string"
      moRefId = "string"
      networkProfile = {
        networkInterfaces = [
          {
            deviceKey = int
            ipSettings = {
              allocationMethod = "string"
              dnsServers = [
                "string"
              ]
              gateway = [
                "string"
              ]
              ipAddress = "string"
              subnetMask = "string"
            }
            name = "string"
            networkId = "string"
            nicType = "string"
            powerOnBoot = "string"
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        computerName = "string"
        guestId = "string"
        linuxConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
        osType = "string"
        windowsConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
      }
      placementProfile = {
        clusterId = "string"
        datastoreId = "string"
        hostId = "string"
        resourcePoolId = "string"
      }
      resourcePoolId = "string"
      securityProfile = {
        uefiSettings = {
          secureBootEnabled = bool
        }
      }
      smbiosUuid = "string"
      storageProfile = {
        disks = [
          {
            controllerKey = int
            deviceKey = int
            deviceName = "string"
            diskMode = "string"
            diskSizeGB = int
            diskType = "string"
            name = "string"
            unitNumber = int
          }
        ]
      }
      templateId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### virtualMachines

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| identity | The identity of the resource. | Identity |
| properties | Resource properties. | VirtualMachineProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The type of managed service identity. | 'None''SystemAssigned' (required) |


### VirtualMachineProperties

| Name | Description | Value |
|-|-|-|
| firmwareType | Firmware type | 'bios''efi' |
| guestAgentProfile | Guest agent status properties. | GuestAgentProfile |
| hardwareProfile | Hardware properties. | HardwareProfile |
| inventoryItemId | Gets or sets the inventory Item ID for the virtual machine. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine. | string |
| networkProfile | Network properties. | NetworkProfile |
| osProfile | OS properties. | OsProfile |
| placementProfile | Placement properties. | PlacementProfile |
| resourcePoolId | Gets or sets the ARM Id of the resourcePool resource on which this virtual machine willdeploy. | string |
| securityProfile | Gets the security profile. | SecurityProfile |
| smbiosUuid | Gets or sets the SMBIOS UUID of the vm. | string |
| storageProfile | Storage properties. | StorageProfile |
| templateId | Gets or sets the ARM Id of the template resource to deploy the virtual machine. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this resource pool resides. | string |


### GuestAgentProfile

| Name | Description | Value |
|-|-|-|
| clientPublicKey | Gets or sets the Public Key provided by the client for enabling guest management. | string |


### HardwareProfile

| Name | Description | Value |
|-|-|-|
| memorySizeMB | Gets or sets memory size in MBs for the vm. | int |
| numCoresPerSocket | Gets or sets the number of cores per socket for the vm. Defaults to 1 if unspecified. | int |
| numCPUs | Gets or sets the number of vCPUs for the vm. | int |


### NetworkProfile

| Name | Description | Value |
|-|-|-|
| networkInterfaces | Gets or sets the list of network interfaces associated with the virtual machine. | NetworkInterface[] |


### NetworkInterface

| Name | Description | Value |
|-|-|-|
| deviceKey | Gets or sets the device key value. | int |
| ipSettings | Gets or sets the ipsettings. | NicIPSettings |
| name | Gets or sets the name of the network interface. | string |
| networkId | Gets or sets the ARM Id of the network resource to connect the virtual machine. | string |
| nicType | NIC type | 'e1000''e1000e''pcnet32''vmxnet''vmxnet2''vmxnet3' |
| powerOnBoot | Gets or sets the power on boot. | 'disabled''enabled' |


### NicIPSettings

| Name | Description | Value |
|-|-|-|
| allocationMethod | Gets or sets the nic allocation method. | 'dynamic''linklayer''other''random''static''unset' |
| dnsServers | Gets or sets the dns servers. | string[] |
| gateway | Gets or sets the gateway. | string[] |
| ipAddress | Gets or sets the ip address for the nic. | string |
| subnetMask | Gets or sets the mask. | string |


### OsProfile

| Name | Description | Value |
|-|-|-|
| adminPassword | Gets or sets administrator password. | string |
| adminUsername | Gets or sets administrator username. | string |
| computerName | Gets or sets computer name. | string |
| guestId | Gets or sets the guestId. | string |
| linuxConfiguration | Specifies the linux configuration for update management. | OsProfileLinuxConfiguration |
| osType | Gets or sets the type of the os. | 'Linux''Other''Windows' |
| windowsConfiguration | Specifies the windows configuration for update management. | OsProfileWindowsConfiguration |


### OsProfileLinuxConfiguration

| Name | Description | Value |
|-|-|-|
| patchSettings | Specifies the patch settings. | PatchSettings |


### PatchSettings

| Name | Description | Value |
|-|-|-|
| assessmentMode | Specifies the assessment mode. | string |
| patchMode | Specifies the patch mode. | string |


### OsProfileWindowsConfiguration

| Name | Description | Value |
|-|-|-|
| patchSettings | Specifies the patch settings. | PatchSettings |


### PlacementProfile

| Name | Description | Value |
|-|-|-|
| clusterId | Gets or sets the ARM Id of the cluster resource on which this virtual machine will deploy. | string |
| datastoreId | Gets or sets the ARM Id of the datastore resource on which the data for the virtual machine will be kept. | string |
| hostId | Gets or sets the ARM Id of the host resource on which this virtual machine will deploy. | string |
| resourcePoolId | Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will deploy. | string |


### SecurityProfile

| Name | Description | Value |
|-|-|-|
| uefiSettings | Specifies the security settings like secure boot used while creating the virtual machine. | UefiSettings |


### UefiSettings

| Name | Description | Value |
|-|-|-|
| secureBootEnabled | Specifies whether secure boot should be enabled on the virtual machine. | bool |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| disks | Gets or sets the list of virtual disks associated with the virtual machine. | VirtualDisk[] |


### VirtualDisk

| Name | Description | Value |
|-|-|-|
| controllerKey | Gets or sets the controller id. | int |
| deviceKey | Gets or sets the device key value. | int |
| deviceName | Gets or sets the device name. | string |
| diskMode | Gets or sets the disk mode. | 'independent_nonpersistent''independent_persistent''persistent' |
| diskSizeGB | Gets or sets the disk total size. | int |
| diskType | Gets or sets the disk backing type. | 'flat''pmem''rawphysical''rawvirtual''sesparse''sparse''unknown' |
| name | Gets or sets the name of the virtual disk. | string |
| unitNumber | Gets or sets the unit number of the disk on the controller. | int |
## Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      instanceView = {
        status = {}
      }
      publisher = "string"
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

### virtualMachines/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the location. | string |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes Machine Extension Properties. | MachineExtensionProperties |


### MachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| instanceView | The machine extension instance view. | MachineExtensionPropertiesInstanceView |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### MachineExtensionPropertiesInstanceView

| Name | Description | Value |
|-|-|-|
| status | Instance view status. | MachineExtensionInstanceViewStatus |
## Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        password = "string"
        username = "string"
      }
      httpProxyConfig = {
        httpsProxy = "string"
      }
      provisioningAction = "string"
    }
  })
}

```

### virtualMachines/guestAgents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Resource properties. | GuestAgentProperties(required) |


### GuestAgentProperties

| Name | Description | Value |
|-|-|-|
| credentials | Username / Password Credentials to provision guest agent. | GuestCredential |
| httpProxyConfig | HTTP Proxy configuration for the VM. | HttpProxyConfiguration |
| provisioningAction | Gets or sets the guest agent provisioning action. | 'install''repair''uninstall' |


### GuestCredential

| Name | Description | Value |
|-|-|-|
| password | Gets or sets the password to connect with the guest. | string |
| username | Gets or sets username to connect with the guest. | string |


### HttpProxyConfiguration

| Name | Description | Value |
|-|-|-|
| httpsProxy | Gets or sets httpsProxy url. | string |
## Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicKey = "string"
      vmId = "string"
    }
  })
}

```

### virtualMachines/hybridIdentityMetadata

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Resource properties. | HybridIdentityMetadataProperties(required) |


### HybridIdentityMetadataProperties

| Name | Description | Value |
|-|-|-|
| publicKey | Gets or sets the Public Key. | string |
| vmId | Gets or sets the Vm Id. | string |
## Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### virtualMachineTemplates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | VirtualMachineTemplateProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### VirtualMachineTemplateProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the virtual machine template. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machinetemplate. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this template resides. | string |
## Microsoft.ConnectedVMwarevSphere/virtualNetworks@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualNetworks@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### virtualNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | VirtualNetworkProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### VirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the virtual network. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual network. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this template resides. | string |
