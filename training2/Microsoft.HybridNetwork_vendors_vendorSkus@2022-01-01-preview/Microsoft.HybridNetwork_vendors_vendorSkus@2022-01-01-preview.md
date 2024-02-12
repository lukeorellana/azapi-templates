```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/vendors/vendorSkus@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deploymentMode = "string"
      networkFunctionTemplate = {
        networkFunctionRoleConfigurations = [
          {
            customProfile = {
              metadataConfigurationPath = "string"
            }
            networkInterfaces = [
              {
                ipConfigurations = [
                  {
                    dnsServers = [
                      "string"
                    ]
                    gateway = "string"
                    ipAddress = "string"
                    ipAllocationMethod = "string"
                    ipVersion = "string"
                    subnet = "string"
                  }
                ]
                macAddress = "string"
                networkInterfaceName = "string"
                vmSwitchType = "string"
              }
            ]
            osProfile = {
              adminUsername = "string"
              customData = "string"
              customDataRequired = bool
              linuxConfiguration = {
                ssh = {
                  publicKeys = [
                    {
                      keyData = "string"
                      path = "string"
                    }
                  ]
                }
              }
            }
            roleName = "string"
            roleType = "string"
            storageProfile = {
              dataDisks = [
                {
                  createOption = "string"
                  diskSizeGB = int
                  name = "string"
                }
              ]
              imageReference = {
                exactVersion = "string"
                offer = "string"
                publisher = "string"
                sku = "string"
                version = "string"
              }
              osDisk = {
                diskSizeGB = int
                name = "string"
                osType = "string"
                vhd = {
                  uri = "string"
                }
              }
            }
            virtualMachineSize = "string"
          }
        ]
      }
      networkFunctionType = "string"
      preview = bool
      skuType = "string"
    }
  })
}

```

### vendors/vendorSkus

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vendors |
| properties | Vendor sku details. | VendorSkuPropertiesFormat |


### VendorSkuPropertiesFormat

| Name | Description | Value |
|-|-|-|
| deploymentMode | The sku deployment mode. | 'Azure''PrivateEdgeZone''Unknown' |
| managedApplicationParameters | The parameters for the managed application to be supplied by the vendor. | For Bicep, you can use theany()function. |
| managedApplicationTemplate | The template for the managed application deployment. | For Bicep, you can use theany()function. |
| networkFunctionTemplate | The template definition of the network function. | NetworkFunctionTemplate |
| networkFunctionType | The network function type. | 'ContainerizedNetworkFunction''Unknown''VirtualNetworkFunction' |
| preview | Indicates if the vendor sku is in preview mode. | bool |
| skuType | The sku type. | 'EvolvedPacketCore''Firewall''SDWAN''Unknown' |


### NetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| networkFunctionRoleConfigurations | An array of network function role definitions. | NetworkFunctionRoleConfiguration[] |


### NetworkFunctionRoleConfiguration

| Name | Description | Value |
|-|-|-|
| customProfile | Specifies the custom settings for the virtual machine. | CustomProfile |
| networkInterfaces | The network interface configurations. | NetworkInterface[] |
| osProfile | Specifies the operating system settings for the role instance. This value can be updated during the deployment of network function. | OsProfile |
| roleName | The name of the network function role. | string |
| roleType | Role type. | 'Unknown''VirtualMachine' |
| storageProfile | Specifies the storage settings for the virtual machine disks. | StorageProfile |
| userDataParameters | The user parameters for customers. The format of user data parameters has to be matched with the provided user data template. | For Bicep, you can use theany()function. |
| userDataTemplate | The user data template for customers. This is a json schema template describing the format and data type of user data parameters. | For Bicep, you can use theany()function. |
| virtualMachineSize | The size of the virtual machine. | 'Standard_D11_v2''Standard_D12_v2''Standard_D13_v2''Standard_D1_v2''Standard_D2_v2''Standard_D3_v2''Standard_D4_v2''Standard_D5_v2''Standard_DS11_v2''Standard_DS12_v2''Standard_DS13_v2''Standard_DS1_v2''Standard_DS2_v2''Standard_DS3_v2''Standard_DS4_v2''Standard_DS5_v2''Standard_F1''Standard_F16''Standard_F16s''Standard_F1s''Standard_F2''Standard_F2s''Standard_F4''Standard_F4s''Standard_F8''Standard_F8s''Unknown' |


### CustomProfile

| Name | Description | Value |
|-|-|-|
| metadataConfigurationPath | Path for metadata configuration. | string |


### NetworkInterface

| Name | Description | Value |
|-|-|-|
| ipConfigurations | A list of IP configurations of the network interface. | NetworkInterfaceIPConfiguration[] |
| macAddress | The MAC address of the network interface. | string |
| networkInterfaceName | The name of the network interface. | string |
| vmSwitchType | The type of the VM switch. | 'Lan''Management''Unknown''Wan' |


### NetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| dnsServers | The list of DNS servers IP addresses. | string[] |
| gateway | The value of the gateway. | string |
| ipAddress | The value of the IP address. | string |
| ipAllocationMethod | IP address allocation method. | 'Dynamic''Static''Unknown' |
| ipVersion | IP address version. | 'IPv4''Unknown' |
| subnet | The value of the subnet. | string |


### OsProfile

| Name | Description | Value |
|-|-|-|
| adminUsername | Specifies the name of the administrator account.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters{li} For root access to the Linux VM, seeUsing root privileges on Linux virtual machines in Azure{li} For a list of built-in system users on Linux that should not be used in this field, seeSelecting User Names for Linux on Azure. | string |
| customData | Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes.Note: Do not pass any secrets or passwords in customData propertyThis property cannot be updated after the VM is created.customData is passed to the VM to be saved as a file. For more information seeCustom Data on Azure VMsFor using cloud-init for your Linux VM, seeUsing cloud-init to customize a Linux VM during creation | string |
| customDataRequired | Indicates if custom data is required to deploy this role. | bool |
| linuxConfiguration | Specifies the Linux operating system settings on the virtual machine.For a list of supported Linux distributions, seeLinux on Azure-Endorsed DistributionsFor running non-endorsed distributions, seeInformation for Non-Endorsed Distributions. | LinuxConfiguration |


### LinuxConfiguration

| Name | Description | Value |
|-|-|-|
| ssh | Specifies the ssh key configuration for a Linux OS. | SshConfiguration |


### SshConfiguration

| Name | Description | Value |
|-|-|-|
| publicKeys | The list of SSH public keys used to authenticate with linux based VMs. | SshPublicKey[] |


### SshPublicKey

| Name | Description | Value |
|-|-|-|
| keyData | SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Linux VMs in Azure. | string |
| path | Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | string |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Specifies the parameters that are used to add a data disk to a virtual machine. | DataDisk[] |
| imageReference | The image reference properties. | ImageReference |
| osDisk | Specifies information about the operating system disk used by the virtual machine. | OsDisk |


### DataDisk

| Name | Description | Value |
|-|-|-|
| createOption | Specifies how the virtual machine should be created. | 'Empty''Unknown' |
| diskSizeGB | Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. | int |
| name | The name of data disk. | string |


### ImageReference

| Name | Description | Value |
|-|-|-|
| exactVersion | Specifies in decimal numbers, the exact version of image used to create the virtual machine. | string |
| offer | Specifies the offer of the image used to create the virtual machine. | string |
| publisher | The image publisher. | string |
| sku | The image SKU. | string |
| version | Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. | string |


### OsDisk

| Name | Description | Value |
|-|-|-|
| diskSizeGB | Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri. | int |
| name | The VHD name. | string |
| osType | The OS type. | 'Linux''Unknown''Windows' |
| vhd | The virtual hard disk. | VirtualHardDisk |


### VirtualHardDisk

| Name | Description | Value |
|-|-|-|
| uri | Specifies the virtual hard disk's uri. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


