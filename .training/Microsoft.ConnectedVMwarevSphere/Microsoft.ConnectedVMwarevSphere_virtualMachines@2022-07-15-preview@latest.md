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


