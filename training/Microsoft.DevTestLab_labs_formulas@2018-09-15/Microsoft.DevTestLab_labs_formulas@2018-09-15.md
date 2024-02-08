```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/formulas@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      formulaContent = {
        location = "string"
        name = "string"
        properties = {
          allowClaim = bool
          artifacts = [
            {
              artifactId = "string"
              artifactTitle = "string"
              deploymentStatusMessage = "string"
              installTime = "string"
              parameters = [
                {
                  name = "string"
                  value = "string"
                }
              ]
              status = "string"
              vmExtensionStatusMessage = "string"
            }
          ]
          bulkCreationParameters = {
            instanceCount = int
          }
          createdDate = "string"
          customImageId = "string"
          dataDiskParameters = [
            {
              attachNewDataDiskOptions = {
                diskName = "string"
                diskSizeGiB = int
                diskType = "string"
              }
              existingLabDiskId = "string"
              hostCaching = "string"
            }
          ]
          disallowPublicIpAddress = bool
          environmentId = "string"
          expirationDate = "string"
          galleryImageReference = {
            offer = "string"
            osType = "string"
            publisher = "string"
            sku = "string"
            version = "string"
          }
          isAuthenticationWithSshKey = bool
          labSubnetName = "string"
          labVirtualNetworkId = "string"
          networkInterface = {
            dnsName = "string"
            privateIpAddress = "string"
            publicIpAddress = "string"
            publicIpAddressId = "string"
            rdpAuthority = "string"
            sharedPublicIpAddressConfiguration = {
              inboundNatRules = [
                {
                  backendPort = int
                  frontendPort = int
                  transportProtocol = "string"
                }
              ]
            }
            sshAuthority = "string"
            subnetId = "string"
            virtualNetworkId = "string"
          }
          notes = "string"
          ownerObjectId = "string"
          ownerUserPrincipalName = "string"
          password = "string"
          planId = "string"
          scheduleParameters = [
            {
              name = "string"
              properties = {
                dailyRecurrence = {
                  time = "string"
                }
                hourlyRecurrence = {
                  minute = int
                }
                notificationSettings = {
                  emailRecipient = "string"
                  notificationLocale = "string"
                  status = "string"
                  timeInMinutes = int
                  webhookUrl = "string"
                }
                status = "string"
                targetResourceId = "string"
                taskType = "string"
                weeklyRecurrence = {
                  time = "string"
                  weekdays = [
                    "string"
                  ]
                }
              }
              tags = {}
            }
          ]
          size = "string"
          sshKey = "string"
          storageType = "string"
          userName = "string"
        }
        tags = {}
      }
      osType = "string"
      vm = {
        labVmId = "string"
      }
    }
  })
}

```

### labs/formulas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, hyphens, and parentheses. |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | FormulaProperties(required) |


### FormulaProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the formula. | string |
| formulaContent | The content of the formula. | LabVirtualMachineCreationParameter |
| osType | The OS type of the formula. | string |
| vm | Information about a VM from which a formula is to be created. | FormulaPropertiesFromVm |


### LabVirtualMachineCreationParameter

| Name | Description | Value |
|-|-|-|
| location | The location of the new virtual machine or environment | string |
| name | The name of the virtual machine or environment | string |
| properties | The properties of the resource. | LabVirtualMachineCreationParameterProperties |
| tags | The tags of the resource. | object |


### LabVirtualMachineCreationParameterProperties

| Name | Description | Value |
|-|-|-|
| allowClaim | Indicates whether another user can take ownership of the virtual machine | bool |
| artifacts | The artifacts to be installed on the virtual machine. | ArtifactInstallProperties[] |
| bulkCreationParameters | The number of virtual machine instances to create. | BulkCreationParameters |
| createdDate | The creation date of the virtual machine. | string |
| customImageId | The custom image identifier of the virtual machine. | string |
| dataDiskParameters | New or existing data disks to attach to the virtual machine after creation | DataDiskProperties[] |
| disallowPublicIpAddress | Indicates whether the virtual machine is to be created without a public IP address. | bool |
| environmentId | The resource ID of the environment that contains this virtual machine, if any. | string |
| expirationDate | The expiration date for VM. | string |
| galleryImageReference | The Microsoft Azure Marketplace image reference of the virtual machine. | GalleryImageReference |
| isAuthenticationWithSshKey | Indicates whether this virtual machine uses an SSH key for authentication. | bool |
| labSubnetName | The lab subnet name of the virtual machine. | string |
| labVirtualNetworkId | The lab virtual network identifier of the virtual machine. | string |
| networkInterface | The network interface properties. | NetworkInterfaceProperties |
| notes | The notes of the virtual machine. | string |
| ownerObjectId | The object identifier of the owner of the virtual machine. | string |
| ownerUserPrincipalName | The user principal name of the virtual machine owner. | string |
| password | The password of the virtual machine administrator. | string |
| planId | The id of the plan associated with the virtual machine image | string |
| scheduleParameters | Virtual Machine schedules to be created | ScheduleCreationParameter[] |
| size | The size of the virtual machine. | string |
| sshKey | The SSH key of the virtual machine administrator. | string |
| storageType | Storage type to use for virtual machine (i.e. Standard, Premium). | string |
| userName | The user name of the virtual machine. | string |


### ArtifactInstallProperties

| Name | Description | Value |
|-|-|-|
| artifactId | The artifact's identifier. | string |
| artifactTitle | The artifact's title. | string |
| deploymentStatusMessage | The status message from the deployment. | string |
| installTime | The time that the artifact starts to install on the virtual machine. | string |
| parameters | The parameters of the artifact. | ArtifactParameterProperties[] |
| status | The status of the artifact. | string |
| vmExtensionStatusMessage | The status message from the virtual machine extension. | string |


### ArtifactParameterProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the artifact parameter. | string |
| value | The value of the artifact parameter. | string |


### BulkCreationParameters

| Name | Description | Value |
|-|-|-|
| instanceCount | The number of virtual machine instances to create. | int |


### DataDiskProperties

| Name | Description | Value |
|-|-|-|
| attachNewDataDiskOptions | Specifies options to attach a new disk to the virtual machine. | AttachNewDataDiskOptions |
| existingLabDiskId | Specifies the existing lab disk id to attach to virtual machine. | string |
| hostCaching | Caching option for a data disk (i.e. None, ReadOnly, ReadWrite). | 'None''ReadOnly''ReadWrite' |


### AttachNewDataDiskOptions

| Name | Description | Value |
|-|-|-|
| diskName | The name of the disk to be attached. | string |
| diskSizeGiB | Size of the disk to be attached in Gibibytes. | int |
| diskType | The storage type for the disk (i.e. Standard, Premium). | 'Premium''Standard''StandardSSD' |


### GalleryImageReference

| Name | Description | Value |
|-|-|-|
| offer | The offer of the gallery image. | string |
| osType | The OS type of the gallery image. | string |
| publisher | The publisher of the gallery image. | string |
| sku | The SKU of the gallery image. | string |
| version | The version of the gallery image. | string |


### NetworkInterfaceProperties

| Name | Description | Value |
|-|-|-|
| dnsName | The DNS name. | string |
| privateIpAddress | The private IP address. | string |
| publicIpAddress | The public IP address. | string |
| publicIpAddressId | The resource ID of the public IP address. | string |
| rdpAuthority | The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). | string |
| sharedPublicIpAddressConfiguration | The configuration for sharing a public IP address across multiple virtual machines. | SharedPublicIpAddressConfiguration |
| sshAuthority | The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. | string |
| subnetId | The resource ID of the sub net. | string |
| virtualNetworkId | The resource ID of the virtual network. | string |


### SharedPublicIpAddressConfiguration

| Name | Description | Value |
|-|-|-|
| inboundNatRules | The incoming NAT rules | InboundNatRule[] |


### InboundNatRule

| Name | Description | Value |
|-|-|-|
| backendPort | The port to which the external traffic will be redirected. | int |
| frontendPort | The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically. | int |
| transportProtocol | The transport protocol for the endpoint. | 'Tcp''Udp' |


### ScheduleCreationParameter

| Name | Description | Value |
|-|-|-|
| name | The name of the virtual machine or environment | string |
| properties | The properties of the schedule. | ScheduleCreationParameterProperties |
| tags | The tags of the resource. | object |


### ScheduleCreationParameterProperties

| Name | Description | Value |
|-|-|-|
| dailyRecurrence | If the schedule will occur once each day of the week, specify the daily recurrence. | DayDetails |
| hourlyRecurrence | If the schedule will occur multiple times a day, specify the hourly recurrence. | HourDetails |
| notificationSettings | Notification settings. | NotificationSettings |
| status | The status of the schedule (i.e. Enabled, Disabled) | 'Disabled''Enabled' |
| targetResourceId | The resource ID to which the schedule belongs | string |
| taskType | The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). | string |
| weeklyRecurrence | If the schedule will occur only some days of the week, specify the weekly recurrence. | WeekDetails |


### DayDetails

| Name | Description | Value |
|-|-|-|
| time | The time of day the schedule will occur. | string |


### HourDetails

| Name | Description | Value |
|-|-|-|
| minute | Minutes of the hour the schedule will run. | int |


### NotificationSettings

| Name | Description | Value |
|-|-|-|
| emailRecipient | The email recipient to send notifications to (can be a list of semi-colon separated email addresses). | string |
| notificationLocale | The locale to use when sending a notification (fallback for unsupported languages is EN). | string |
| status | If notifications are enabled for this schedule (i.e. Enabled, Disabled). | 'Disabled''Enabled' |
| timeInMinutes | Time in minutes before event at which notification will be sent. | int |
| webhookUrl | The webhook URL to which the notification will be sent. | string |


### WeekDetails

| Name | Description | Value |
|-|-|-|
| time | The time of the day the schedule will occur. | string |
| weekdays | The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.). | string[] |


### FormulaPropertiesFromVm

| Name | Description | Value |
|-|-|-|
| labVmId | The identifier of the VM from which a formula is to be created. | string |


