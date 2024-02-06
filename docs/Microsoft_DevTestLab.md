## Microsoft.DevTestLab/labs@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      announcement = {
        enabled = "string"
        expirationDate = "string"
        expired = bool
        markdown = "string"
        title = "string"
      }
      environmentPermission = "string"
      extendedProperties = {}
      labStorageType = "string"
      mandatoryArtifactsResourceIdsLinux = [
        "string"
      ]
      mandatoryArtifactsResourceIdsWindows = [
        "string"
      ]
      premiumDataDisks = "string"
      support = {
        enabled = "string"
        markdown = "string"
      }
    }
  })
}

```

### labs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-50Valid characters:Alphanumerics, underscores, and hyphens. |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the resource. | LabProperties |


### LabProperties

| Name | Description | Value |
|-|-|-|
| announcement | The properties of any lab announcement associated with this lab | LabAnnouncementProperties |
| environmentPermission | The access rights to be granted to the user when provisioning an environment | 'Contributor''Reader' |
| extendedProperties | Extended properties of the lab used for experimental features | object |
| labStorageType | Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. | 'Premium''Standard''StandardSSD' |
| mandatoryArtifactsResourceIdsLinux | The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user. | string[] |
| mandatoryArtifactsResourceIdsWindows | The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user. | string[] |
| premiumDataDisks | The setting to enable usage of premium data disks.When its value is 'Enabled', creation of standard or premium data disks is allowed.When its value is 'Disabled', only creation of standard data disks is allowed. | 'Disabled''Enabled' |
| support | The properties of any lab support message associated with this lab | LabSupportProperties |


### LabAnnouncementProperties

| Name | Description | Value |
|-|-|-|
| enabled | Is the lab announcement active/enabled at this time? | 'Disabled''Enabled' |
| expirationDate | The time at which the announcement expires (null for never) | string |
| expired | Has this announcement expired? | bool |
| markdown | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | string |
| title | The plain text title for the lab announcement | string |


### LabSupportProperties

| Name | Description | Value |
|-|-|-|
| enabled | Is the lab support banner active/enabled at this time? | 'Disabled''Enabled' |
| markdown | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | string |
## Microsoft.DevTestLab/labs/artifactsources@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/artifactsources@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armTemplateFolderPath = "string"
      branchRef = "string"
      displayName = "string"
      folderPath = "string"
      securityToken = "string"
      sourceType = "string"
      status = "string"
      uri = "string"
    }
  })
}

```

### labs/artifactsources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | ArtifactSourceProperties(required) |


### ArtifactSourceProperties

| Name | Description | Value |
|-|-|-|
| armTemplateFolderPath | The folder containing Azure Resource Manager templates. | string |
| branchRef | The artifact source's branch reference. | string |
| displayName | The artifact source's display name. | string |
| folderPath | The folder containing artifacts. | string |
| securityToken | The security token to authenticate to the artifact source. | string |
| sourceType | The artifact source's type. | 'GitHub''StorageAccount''VsoGit' |
| status | Indicates if the artifact source is enabled (values: Enabled, Disabled). | 'Disabled''Enabled' |
| uri | The artifact source's URI. | string |
## Microsoft.DevTestLab/labs/costs@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/costs@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createdDate = "string"
      currencyCode = "string"
      endDateTime = "string"
      startDateTime = "string"
      targetCost = {
        costThresholds = [
          {
            displayOnChart = "string"
            notificationSent = "string"
            percentageThreshold = {
              thresholdValue = int
            }
            sendNotificationWhenExceeded = "string"
            thresholdId = "string"
          }
        ]
        cycleEndDateTime = "string"
        cycleStartDateTime = "string"
        cycleType = "string"
        status = "string"
        target = int
      }
    }
  })
}

```

### labs/costs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | LabCostProperties(required) |


### LabCostProperties

| Name | Description | Value |
|-|-|-|
| createdDate | The creation date of the cost. | string |
| currencyCode | The currency code of the cost. | string |
| endDateTime | The end time of the cost data. | string |
| startDateTime | The start time of the cost data. | string |
| targetCost | The target cost properties | TargetCostProperties |


### TargetCostProperties

| Name | Description | Value |
|-|-|-|
| costThresholds | Cost thresholds. | CostThresholdProperties[] |
| cycleEndDateTime | Reporting cycle end date. | string |
| cycleStartDateTime | Reporting cycle start date. | string |
| cycleType | Reporting cycle type. | 'CalendarMonth''Custom' |
| status | Target cost status | 'Disabled''Enabled' |
| target | Lab target cost | int |


### CostThresholdProperties

| Name | Description | Value |
|-|-|-|
| displayOnChart | Indicates whether this threshold will be displayed on cost charts. | 'Disabled''Enabled' |
| notificationSent | Indicates the datetime when notifications were last sent for this threshold. | string |
| percentageThreshold | The value of the percentage cost threshold. | PercentageCostThresholdProperties |
| sendNotificationWhenExceeded | Indicates whether notifications will be sent when this threshold is exceeded. | 'Disabled''Enabled' |
| thresholdId | The ID of the cost threshold item. | string |


### PercentageCostThresholdProperties

| Name | Description | Value |
|-|-|-|
| thresholdValue | The cost threshold value. | int |
## Microsoft.DevTestLab/labs/customimages@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/customimages@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      author = "string"
      customImagePlan = {
        id = "string"
        offer = "string"
        publisher = "string"
      }
      dataDiskStorageInfo = [
        {
          lun = "string"
          storageType = "string"
        }
      ]
      description = "string"
      isPlanAuthorized = bool
      managedImageId = "string"
      managedSnapshotId = "string"
      vhd = {
        imageName = "string"
        osType = "string"
        sysPrep = bool
      }
      vm = {
        linuxOsInfo = {
          linuxOsState = "string"
        }
        sourceVmId = "string"
        windowsOsInfo = {
          windowsOsState = "string"
        }
      }
    }
  })
}

```

### labs/customimages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, hyphens, and parentheses. |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | CustomImageProperties(required) |


### CustomImageProperties

| Name | Description | Value |
|-|-|-|
| author | The author of the custom image. | string |
| customImagePlan | Storage information about the plan related to this custom image | CustomImagePropertiesFromPlan |
| dataDiskStorageInfo | Storage information about the data disks present in the custom image | DataDiskStorageTypeInfo[] |
| description | The description of the custom image. | string |
| isPlanAuthorized | Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment | bool |
| managedImageId | The Managed Image Id backing the custom image. | string |
| managedSnapshotId | The Managed Snapshot Id backing the custom image. | string |
| vhd | The VHD from which the image is to be created. | CustomImagePropertiesCustom |
| vm | The virtual machine from which the image is to be created. | CustomImagePropertiesFromVm |


### CustomImagePropertiesFromPlan

| Name | Description | Value |
|-|-|-|
| id | The id of the plan, equivalent to name of the plan | string |
| offer | The offer for the plan from the marketplace image the custom image is derived from | string |
| publisher | The publisher for the plan from the marketplace image the custom image is derived from | string |


### DataDiskStorageTypeInfo

| Name | Description | Value |
|-|-|-|
| lun | Disk Lun | string |
| storageType | Disk Storage Type | 'Premium''Standard''StandardSSD' |


### CustomImagePropertiesCustom

| Name | Description | Value |
|-|-|-|
| imageName | The image name. | string |
| osType | The OS type of the custom image (i.e. Windows, Linux) | 'Linux''None''Windows' (required) |
| sysPrep | Indicates whether sysprep has been run on the VHD. | bool |


### CustomImagePropertiesFromVm

| Name | Description | Value |
|-|-|-|
| linuxOsInfo | The Linux OS information of the VM. | LinuxOsInfo |
| sourceVmId | The source vm identifier. | string |
| windowsOsInfo | The Windows OS information of the VM. | WindowsOsInfo |


### LinuxOsInfo

| Name | Description | Value |
|-|-|-|
| linuxOsState | The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). | 'DeprovisionApplied''DeprovisionRequested''NonDeprovisioned' |


### WindowsOsInfo

| Name | Description | Value |
|-|-|-|
| windowsOsState | The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). | 'NonSysprepped''SysprepApplied''SysprepRequested' |
## Microsoft.DevTestLab/labs/formulas@2018-09-15

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
## Microsoft.DevTestLab/labs/notificationchannels@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/notificationchannels@2018-09-15"
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
      emailRecipient = "string"
      events = [
        {
          eventName = "string"
        }
      ]
      notificationLocale = "string"
      webHookUrl = "string"
    }
  })
}

```

### labs/notificationchannels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | NotificationChannelProperties(required) |


### NotificationChannelProperties

| Name | Description | Value |
|-|-|-|
| description | Description of notification. | string |
| emailRecipient | The email recipient to send notifications to (can be a list of semi-colon separated email addresses). | string |
| events | The list of event for which this notification is enabled. | Event[] |
| notificationLocale | The locale to use when sending a notification (fallback for unsupported languages is EN). | string |
| webHookUrl | The webhook URL to send notifications to. | string |


### Event

| Name | Description | Value |
|-|-|-|
| eventName | The event type for which this notification is enabled (i.e. AutoShutdown, Cost) | 'AutoShutdown''Cost' |
## Microsoft.DevTestLab/labs/policysets/policies@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/policysets/policies@2018-09-15"
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
      evaluatorType = "string"
      factData = "string"
      factName = "string"
      status = "string"
      threshold = "string"
    }
  })
}

```

### labs/policysets/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: policysets |
| properties | The properties of the resource. | PolicyProperties(required) |


### PolicyProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the policy. | string |
| evaluatorType | The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy). | 'AllowedValuesPolicy''MaxValuePolicy' |
| factData | The fact data of the policy. | string |
| factName | The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc. | 'EnvironmentTemplate''GalleryImage''LabPremiumVmCount''LabTargetCost''LabVmCount''LabVmSize''ScheduleEditPermission''UserOwnedLabPremiumVmCount''UserOwnedLabVmCount''UserOwnedLabVmCountInSubnet' |
| status | The status of the policy. | 'Disabled''Enabled' |
| threshold | The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy). | string |
## Microsoft.DevTestLab/labs/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
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
  })
}

```

### labs/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | ScheduleProperties(required) |


### ScheduleProperties

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
## Microsoft.DevTestLab/labs/servicerunners@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/servicerunners@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    clientSecretUrl = "string"
    type = "string"
  }
}

```

### labs/servicerunners

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| identity | The identity of the resource. | IdentityProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| clientSecretUrl | The client secret URL of the identity. | string |
| principalId | The principal id of resource identity. | string |
| tenantId | The tenant identifier of resource. | string |
| type | Managed identity. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
## Microsoft.DevTestLab/labs/users@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      identity = {
        appId = "string"
        objectId = "string"
        principalId = "string"
        principalName = "string"
        tenantId = "string"
      }
      secretStore = {
        keyVaultId = "string"
        keyVaultUri = "string"
      }
    }
  })
}

```

### labs/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | UserProperties |


### UserProperties

| Name | Description | Value |
|-|-|-|
| identity | The identity of the user. | UserIdentity |
| secretStore | The secret store of the user. | UserSecretStore |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| appId | Set to the app Id of the client JWT making the request. | string |
| objectId | Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. | string |
| principalId | Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. | string |
| principalName | Set to the principal name / UPN of the client JWT making the request. | string |
| tenantId | Set to the tenant ID of the client JWT making the request. | string |


### UserSecretStore

| Name | Description | Value |
|-|-|-|
| keyVaultId | The ID of the user's Key vault. | string |
| keyVaultUri | The URI of the user's Key vault. | string |
## Microsoft.DevTestLab/labs/users/disks@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/disks@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      diskBlobName = "string"
      diskSizeGiB = int
      diskType = "string"
      diskUri = "string"
      leasedByLabVmId = "string"
      managedDiskId = "string"
      storageAccountId = "string"
    }
  })
}

```

### labs/users/disks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | DiskProperties(required) |


### DiskProperties

| Name | Description | Value |
|-|-|-|
| diskBlobName | When backed by a blob, the name of the VHD blob without extension. | string |
| diskSizeGiB | The size of the disk in Gibibytes. | int |
| diskType | The storage type for the disk (i.e. Standard, Premium). | 'Premium''Standard''StandardSSD' |
| diskUri | When backed by a blob, the URI of underlying blob. | string |
| leasedByLabVmId | The resource ID of the VM to which this disk is leased. | string |
| managedDiskId | When backed by managed disk, this is the ID of the compute disk resource. | string |
| storageAccountId | When backed by a blob, the storage account where the blob is. | string |
## Microsoft.DevTestLab/labs/users/environments@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/environments@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armTemplateDisplayName = "string"
      deploymentProperties = {
        armTemplateId = "string"
        parameters = [
          {
            name = "string"
            value = "string"
          }
        ]
      }
    }
  })
}

```

### labs/users/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | EnvironmentProperties(required) |


### EnvironmentProperties

| Name | Description | Value |
|-|-|-|
| armTemplateDisplayName | The display name of the Azure Resource Manager template that produced the environment. | string |
| deploymentProperties | The deployment properties of the environment. | EnvironmentDeploymentProperties |


### EnvironmentDeploymentProperties

| Name | Description | Value |
|-|-|-|
| armTemplateId | The Azure Resource Manager template's identifier. | string |
| parameters | The parameters of the Azure Resource Manager template. | ArmTemplateParameterProperties[] |


### ArmTemplateParameterProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the template parameter. | string |
| value | The value of the template parameter. | string |
## Microsoft.DevTestLab/labs/users/secrets@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/secrets@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

### labs/users/secrets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | SecretProperties(required) |


### SecretProperties

| Name | Description | Value |
|-|-|-|
| value | The value of the secret for secret creation. | string |
## Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      environmentId = "string"
      externalServiceFabricId = "string"
    }
  })
}

```

### labs/users/servicefabrics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | ServiceFabricProperties(required) |


### ServiceFabricProperties

| Name | Description | Value |
|-|-|-|
| environmentId | The resource id of the environment under which the service fabric resource is present | string |
| externalServiceFabricId | The backing service fabric resource's id | string |
## Microsoft.DevTestLab/labs/users/servicefabrics/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/servicefabrics/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
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
  })
}

```

### labs/users/servicefabrics/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servicefabrics |
| properties | The properties of the resource. | ScheduleProperties(required) |


### ScheduleProperties

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
## Microsoft.DevTestLab/labs/virtualmachines@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualmachines@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
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
  })
}

```

### labs/virtualmachines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-15 (Windows)1-64 (Linux)Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. Can't be all numbers. |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | LabVirtualMachineProperties(required) |


### LabVirtualMachineProperties

| Name | Description | Value |
|-|-|-|
| allowClaim | Indicates whether another user can take ownership of the virtual machine | bool |
| artifacts | The artifacts to be installed on the virtual machine. | ArtifactInstallProperties[] |
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
## Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
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
  })
}

```

### labs/virtualmachines/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualmachines |
| properties | The properties of the resource. | ScheduleProperties(required) |


### ScheduleProperties

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
## Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowedSubnets = [
        {
          allowPublicIp = "string"
          labSubnetName = "string"
          resourceId = "string"
        }
      ]
      description = "string"
      externalProviderResourceId = "string"
      subnetOverrides = [
        {
          labSubnetName = "string"
          resourceId = "string"
          sharedPublicIpAddressConfiguration = {
            allowedPorts = [
              {
                backendPort = int
                transportProtocol = "string"
              }
            ]
          }
          useInVmCreationPermission = "string"
          usePublicIpAddressPermission = "string"
          virtualNetworkPoolName = "string"
        }
      ]
    }
  })
}

```

### labs/virtualnetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | VirtualNetworkProperties |


### VirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| allowedSubnets | The allowed subnets of the virtual network. | Subnet[] |
| description | The description of the virtual network. | string |
| externalProviderResourceId | The Microsoft.Network resource identifier of the virtual network. | string |
| subnetOverrides | The subnet overrides of the virtual network. | SubnetOverride[] |


### Subnet

| Name | Description | Value |
|-|-|-|
| allowPublicIp | The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). | 'Allow''Default''Deny' |
| labSubnetName | The name of the subnet as seen in the lab. | string |
| resourceId | The resource ID of the subnet. | string |


### SubnetOverride

| Name | Description | Value |
|-|-|-|
| labSubnetName | The name given to the subnet within the lab. | string |
| resourceId | The resource ID of the subnet. | string |
| sharedPublicIpAddressConfiguration | Properties that virtual machines on this subnet will share. | SubnetSharedPublicIpAddressConfiguration |
| useInVmCreationPermission | Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). | 'Allow''Default''Deny' |
| usePublicIpAddressPermission | Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). | 'Allow''Default''Deny' |
| virtualNetworkPoolName | The virtual network pool associated with this subnet. | string |


### SubnetSharedPublicIpAddressConfiguration

| Name | Description | Value |
|-|-|-|
| allowedPorts | Backend ports that virtual machines on this subnet are allowed to expose | Port[] |


### Port

| Name | Description | Value |
|-|-|-|
| backendPort | Backend port of the target virtual machine. | int |
| transportProtocol | Protocol type of the port. | 'Tcp''Udp' |
## Microsoft.DevTestLab/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
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
  })
}

```

### schedules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the resource. | ScheduleProperties(required) |


### ScheduleProperties

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
