```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      guestAgentProfile = {}
      hardwareProfile = {
        dynamicMemoryConfig = {
          maximumMemoryGB = int
          minimumMemoryGB = int
          targetMemoryBuffer = int
        }
        memoryGB = int
        processors = int
        vmSize = "string"
      }
      networkProfile = {
        networkInterfaces = [
          {
            id = "string"
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        computerName = "string"
        linuxConfiguration = {
          disablePasswordAuthentication = bool
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
        osType = "string"
        windowsConfiguration = {
          enableAutomaticUpdates = bool
          provisionVMAgent = bool
          ssh = {
            publicKeys = [
              {
                keyData = "string"
                path = "string"
              }
            ]
          }
          timeZone = "string"
        }
      }
      resourceName = "string"
      securityProfile = {
        enableTPM = bool
        uefiSettings = {
          secureBootEnabled = bool
        }
      }
      storageProfile = {
        dataDisks = [
          {
            name = "string"
          }
        ]
        imageReference = {
          name = "string"
        }
        osDisk = {
          id = "string"
        }
        vmConfigContainerName = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### virtualmachines

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| identity | Identity for the resource. | Identity |
| properties | Properties of a virtual machine resource | VirtualmachinesProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### VirtualmachinesProperties

| Name | Description | Value |
|-|-|-|
| guestAgentProfile | Guest agent status properties. | GuestAgentProfile |
| hardwareProfile | HardwareProfile - Specifies the hardware settings for the virtual machine. | VirtualmachinesPropertiesHardwareProfile |
| networkProfile | NetworkProfile - describes the network configuration the virtual machine | VirtualmachinesPropertiesNetworkProfile |
| osProfile | OsProfile - describes the configuration of the operating system and sets login data | VirtualmachinesPropertiesOsProfile |
| resourceName | name of the object to be used in moc | string |
| securityProfile | SecurityProfile - Specifies the security settings for the virtual machine. | VirtualmachinesPropertiesSecurityProfile |
| storageProfile | StorageProfile - contains information about the disks and storage information for the virtual machine | VirtualmachinesPropertiesStorageProfile |


### VirtualmachinesPropertiesHardwareProfile

| Name | Description | Value |
|-|-|-|
| dynamicMemoryConfig |  | VirtualmachinesPropertiesHardwareProfileDynamicMemor... |
| memoryGB | RAM in gb for the virtual machine | int |
| processors | number of processors for the virtual machine | int |
| vmSize |  | string |


### VirtualmachinesPropertiesHardwareProfileDynamicMemor...

| Name | Description | Value |
|-|-|-|
| maximumMemoryGB |  | int |
| minimumMemoryGB |  | int |
| targetMemoryBuffer |  | int |


### VirtualmachinesPropertiesNetworkProfile

| Name | Description | Value |
|-|-|-|
| networkInterfaces | NetworkInterfaces - list of network interfaces to be attached to the virtual machine | VirtualmachinesPropertiesNetworkProfileNetworkInterf...[] |


### VirtualmachinesPropertiesNetworkProfileNetworkInterf...

| Name | Description | Value |
|-|-|-|
| id | ID - Resource Id of the network interface | string |


### VirtualmachinesPropertiesOsProfile

| Name | Description | Value |
|-|-|-|
| adminPassword | AdminPassword - admin password | string |
| adminUsername | AdminUsername - admin username | string |
| computerName | ComputerName - name of the compute | string |
| linuxConfiguration | LinuxConfiguration - linux specific configuration values for the virtual machine | VirtualmachinesPropertiesOsProfileLinuxConfiguration |
| osType | OsType - string specifying whether the OS is Linux or Windows | 'Linux''Windows' |
| windowsConfiguration | Windows Configuration for the virtual machine | VirtualmachinesPropertiesOsProfileWindowsConfigurati... |


### VirtualmachinesPropertiesOsProfileLinuxConfiguration

| Name | Description | Value |
|-|-|-|
| disablePasswordAuthentication | DisablePasswordAuthentication - whether password authentication should be disabled | bool |
| provisionVMAgent | Usedâ¯to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process. | bool |
| ssh | SSH - contains settings related to ssh configuration | VirtualmachinesPropertiesOsProfileLinuxConfiguration... |


### VirtualmachinesPropertiesOsProfileLinuxConfiguration...

| Name | Description | Value |
|-|-|-|
| publicKeys | PublicKeys - The list of SSH public keys used to authenticate with linux based VMs. | VirtualmachinesPropertiesOsProfileLinuxConfiguration...[] |


### VirtualmachinesPropertiesOsProfileLinuxConfiguration...

| Name | Description | Value |
|-|-|-|
| keyData | KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Li      nux VMs in Azure. | string |
| path | Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | string |


### VirtualmachinesPropertiesOsProfileWindowsConfigurati...

| Name | Description | Value |
|-|-|-|
| enableAutomaticUpdates | Whether to EnableAutomaticUpdates on the machine | bool |
| provisionVMAgent | Usedâ¯to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process. | bool |
| ssh | SSH Configuration | VirtualmachinesPropertiesOsProfileWindowsConfigurati... |
| timeZone | TimeZone for the virtual machine | string |


### VirtualmachinesPropertiesOsProfileWindowsConfigurati...

| Name | Description | Value |
|-|-|-|
| publicKeys | PublicKeys - The list of SSH public keys used to authenticate with linux based VMs. | VirtualmachinesPropertiesOsProfileWindowsConfigurati...[] |


### VirtualmachinesPropertiesOsProfileWindowsConfigurati...

| Name | Description | Value |
|-|-|-|
| keyData | KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Li      nux VMs in Azure. | string |
| path | Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | string |


### VirtualmachinesPropertiesSecurityProfile

| Name | Description | Value |
|-|-|-|
| enableTPM |  | bool |
| uefiSettings |  | VirtualmachinesPropertiesSecurityProfileUefiSettings |


### VirtualmachinesPropertiesSecurityProfileUefiSettings

| Name | Description | Value |
|-|-|-|
| secureBootEnabled | Specifies whether secure boot should be enabled on the virtual machine. | bool |


### VirtualmachinesPropertiesStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | adds data disks to the virtual machine | VirtualmachinesPropertiesStorageProfileDataDisksItem[] |
| imageReference | Which Image to use for the virtual machine | VirtualmachinesPropertiesStorageProfileImageReferenc... |
| osDisk | VHD to attach as OS disk | VirtualmachinesPropertiesStorageProfileOsDisk |
| vmConfigContainerName | Name of the storage container that hosts the VM configuration file | string |


### VirtualmachinesPropertiesStorageProfileDataDisksItem

| Name | Description | Value |
|-|-|-|
| name |  | string |


### VirtualmachinesPropertiesStorageProfileImageReferenc...

| Name | Description | Value |
|-|-|-|
| name | Name - Name of the image | string |


### VirtualmachinesPropertiesStorageProfileOsDisk

| Name | Description | Value |
|-|-|-|
| id | Specifies the virtual hard disk's ID | string |


