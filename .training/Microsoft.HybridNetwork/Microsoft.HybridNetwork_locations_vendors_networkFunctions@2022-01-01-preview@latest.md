```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/locations/vendors/networkFunctions@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      networkFunctionVendorConfigurations = [
        {
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
        }
      ]
      vendorProvisioningState = "string"
    }
  })
}

```

### locations/vendors/networkFunctions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: vendors |
| properties | Network function details. | VendorNetworkFunctionPropertiesFormat |


### VendorNetworkFunctionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| networkFunctionVendorConfigurations | An array of network function vendor configurations. | NetworkFunctionVendorConfiguration[] |
| vendorProvisioningState | The vendor controlled provisioning state of the vendor network function. | 'Deprovisioned''NotProvisioned''Provisioned''Provisioning''Unknown''UserDataValidationFailed' |


### NetworkFunctionVendorConfiguration

| Name | Description | Value |
|-|-|-|
| networkInterfaces | The network interface configurations. | NetworkInterface[] |
| osProfile | Specifies the operating system settings for the role instance. | OsProfile |
| roleName | The name of the vendor network function role. | string |


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


