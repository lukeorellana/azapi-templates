## Microsoft.LabServices/labaccounts@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabledRegionSelection = bool
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the resource. | LabAccountProperties |


### LabAccountProperties

| Name | Description | Value |
|-|-|-|
| enabledRegionSelection | Represents if region selection is enabled | bool |
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |
## Microsoft.LabServices/labaccounts/galleryimages@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/galleryimages@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      isEnabled = bool
      isOverride = bool
      isPlanAuthorized = bool
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/galleryimages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labaccounts |
| properties | The gallery image properties | GalleryImageProperties |


### GalleryImageProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether this gallery image is enabled. | bool |
| isOverride | Indicates whether this gallery has been overridden for this lab account | bool |
| isPlanAuthorized | Indicates if the plan has been authorized for programmatic deployment. | bool |
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |
## Microsoft.LabServices/labaccounts/labs@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      maxUsersInLab = int
      provisioningState = "string"
      uniqueIdentifier = "string"
      usageQuota = "string"
      userAccessMode = "string"
    }
  })
}

```

### labaccounts/labs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labaccounts |
| properties | The properties of the resource. | LabProperties |


### LabProperties

| Name | Description | Value |
|-|-|-|
| maxUsersInLab | Maximum number of users allowed in the lab. | int |
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |
| usageQuota | Maximum duration a user can use an environment for in the lab. | string |
| userAccessMode | Lab user access mode (open to all vs. restricted to those listed on the lab). | 'Open''Restricted' |
## Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationState = "string"
      description = "string"
      provisioningState = "string"
      resourceSettings = {
        galleryImageResourceId = "string"
        referenceVm = {
          password = "string"
          userName = "string"
        }
        size = "string"
      }
      title = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/labs/environmentsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the Environment Setting resource | EnvironmentSettingProperties |


### EnvironmentSettingProperties

| Name | Description | Value |
|-|-|-|
| configurationState | Describes the user's progress in configuring their environment setting | 'Completed''NotApplicable' |
| description | Describes the environment and its resource settings | string |
| provisioningState | The provisioning status of the resource. | string |
| resourceSettings | The resource specific settings | ResourceSettings(required) |
| title | Brief title describing the environment and its resource settings | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


### ResourceSettings

| Name | Description | Value |
|-|-|-|
| galleryImageResourceId | The resource id of the gallery image used for creating the virtual machine | string |
| referenceVm | Details specific to Reference Vm | ReferenceVm(required) |
| size | The size of the virtual machine | 'Basic''Performance''Standard' |


### ReferenceVm

| Name | Description | Value |
|-|-|-|
| password | The password of the virtual machine. This will be set to null in GET resource API | string |
| userName | The username of the virtual machine | string (required) |
## Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      resourceSets = {
        resourceSettingId = "string"
        vmResourceId = "string"
      }
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/labs/environmentsettings/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environmentsettings |
| properties | The properties of the Environment resource | EnvironmentProperties |


### EnvironmentProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | The provisioning status of the resource. | string |
| resourceSets | The set of a VM and the setting id it was created for | ResourceSet |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


### ResourceSet

| Name | Description | Value |
|-|-|-|
| resourceSettingId | resourceSettingId for the environment | string |
| vmResourceId | VM resource Id for the environment | string |
## Microsoft.LabServices/labaccounts/labs/users@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/users@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/labs/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | These are the properties for the user registered under a lab. | UserProperties |


### UserProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |
## Microsoft.LabServices/labPlans@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labPlans@2022-08-01"
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
      allowedRegions = [
        "string"
      ]
      defaultAutoShutdownProfile = {
        disconnectDelay = "string"
        idleDelay = "string"
        noConnectDelay = "string"
        shutdownOnDisconnect = "string"
        shutdownOnIdle = "string"
        shutdownWhenNotConnected = "string"
      }
      defaultConnectionProfile = {
        clientRdpAccess = "string"
        clientSshAccess = "string"
        webRdpAccess = "string"
        webSshAccess = "string"
      }
      defaultNetworkProfile = {
        subnetId = "string"
      }
      linkedLmsInstance = "string"
      sharedGalleryId = "string"
      supportInfo = {
        email = "string"
        instructions = "string"
        phone = "string"
        url = "string"
      }
    }
  })
}

```

### labPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-100Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with letter and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed Identity Information | Identity |
| properties | Lab plan resource properties | LabPlanProperties(required) |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### LabPlanProperties

| Name | Description | Value |
|-|-|-|
| allowedRegions | The allowed regions for the lab creator to use when creating labs using this lab plan. | string[] |
| defaultAutoShutdownProfile | The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile. | AutoShutdownProfile |
| defaultConnectionProfile | The default lab connection profile. This can be changed on a lab resource and only provides a default profile. | ConnectionProfile |
| defaultNetworkProfile | The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan. | LabPlanNetworkProfile |
| linkedLmsInstance | Base Url of the lms instance this lab plan can link lab rosters against. | string |
| sharedGalleryId | Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs. | string |
| supportInfo | Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan. | SupportInfo |


### AutoShutdownProfile

| Name | Description | Value |
|-|-|-|
| disconnectDelay | The amount of time a VM will stay running after a user disconnects if this behavior is enabled. | string |
| idleDelay | The amount of time a VM will idle before it is shutdown if this behavior is enabled. | string |
| noConnectDelay | The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled. | string |
| shutdownOnDisconnect | Whether shutdown on disconnect is enabled | 'Disabled''Enabled' |
| shutdownOnIdle | Whether a VM will get shutdown when it has idled for a period of time. | 'LowUsage''None''UserAbsence' |
| shutdownWhenNotConnected | Whether a VM will get shutdown when it hasn't been connected to after a period of time. | 'Disabled''Enabled' |


### ConnectionProfile

| Name | Description | Value |
|-|-|-|
| clientRdpAccess | The enabled access level for Client Access over RDP. | 'None''Private''Public' |
| clientSshAccess | The enabled access level for Client Access over SSH. | 'None''Private''Public' |
| webRdpAccess | The enabled access level for Web Access over RDP. | 'None''Private''Public' |
| webSshAccess | The enabled access level for Web Access over SSH. | 'None''Private''Public' |


### LabPlanNetworkProfile

| Name | Description | Value |
|-|-|-|
| subnetId | The external subnet resource id | string |


### SupportInfo

| Name | Description | Value |
|-|-|-|
| email | Support contact email address. | string |
| instructions | Support instructions. | string |
| phone | Support contact phone number. | string |
| url | Support web address. | string |
## Microsoft.LabServices/labPlans/images@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labPlans/images@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availableRegions = [
        "string"
      ]
      enabledState = "string"
    }
  })
}

```

### labPlans/images

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labPlans |
| properties | Image resource properties | ImageProperties(required) |


### ImageProperties

| Name | Description | Value |
|-|-|-|
| availableRegions | The available regions of the image in the shared gallery. | string[] |
| enabledState | Is the image enabled | 'Disabled''Enabled' |
## Microsoft.LabServices/labs@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoShutdownProfile = {
        disconnectDelay = "string"
        idleDelay = "string"
        noConnectDelay = "string"
        shutdownOnDisconnect = "string"
        shutdownOnIdle = "string"
        shutdownWhenNotConnected = "string"
      }
      connectionProfile = {
        clientRdpAccess = "string"
        clientSshAccess = "string"
        webRdpAccess = "string"
        webSshAccess = "string"
      }
      description = "string"
      labPlanId = "string"
      networkProfile = {
        loadBalancerId = "string"
        publicIpId = "string"
        subnetId = "string"
      }
      rosterProfile = {
        activeDirectoryGroupId = "string"
        lmsInstance = "string"
        ltiClientId = "string"
        ltiContextId = "string"
        ltiRosterEndpoint = "string"
      }
      securityProfile = {
        openAccess = "string"
      }
      title = "string"
      virtualMachineProfile = {
        additionalCapabilities = {
          installGpuDrivers = "string"
        }
        adminUser = {
          password = "string"
          username = "string"
        }
        createOption = "string"
        imageReference = {
          id = "string"
          offer = "string"
          publisher = "string"
          sku = "string"
          version = "string"
        }
        nonAdminUser = {
          password = "string"
          username = "string"
        }
        sku = {
          capacity = int
          family = "string"
          name = "string"
          size = "string"
          tier = "string"
        }
        usageQuota = "string"
        useSharedPassword = "string"
      }
    }
  })
}

```

### labs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-100Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with letter and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Lab resource properties | LabProperties(required) |


### LabProperties

| Name | Description | Value |
|-|-|-|
| autoShutdownProfile | The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle. | AutoShutdownProfile |
| connectionProfile | The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open. | ConnectionProfile |
| description | The description of the lab. | string |
| labPlanId | The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization.. | string |
| networkProfile | The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created. | LabNetworkProfile |
| rosterProfile | The lab user list management profile. | RosterProfile |
| securityProfile | The lab security profile. | SecurityProfile |
| title | The title of the lab. | string |
| virtualMachineProfile | The profile used for creating lab virtual machines. | VirtualMachineProfile |


### AutoShutdownProfile

| Name | Description | Value |
|-|-|-|
| disconnectDelay | The amount of time a VM will stay running after a user disconnects if this behavior is enabled. | string |
| idleDelay | The amount of time a VM will idle before it is shutdown if this behavior is enabled. | string |
| noConnectDelay | The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled. | string |
| shutdownOnDisconnect | Whether shutdown on disconnect is enabled | 'Disabled''Enabled' |
| shutdownOnIdle | Whether a VM will get shutdown when it has idled for a period of time. | 'LowUsage''None''UserAbsence' |
| shutdownWhenNotConnected | Whether a VM will get shutdown when it hasn't been connected to after a period of time. | 'Disabled''Enabled' |


### ConnectionProfile

| Name | Description | Value |
|-|-|-|
| clientRdpAccess | The enabled access level for Client Access over RDP. | 'None''Private''Public' |
| clientSshAccess | The enabled access level for Client Access over SSH. | 'None''Private''Public' |
| webRdpAccess | The enabled access level for Web Access over RDP. | 'None''Private''Public' |
| webSshAccess | The enabled access level for Web Access over SSH. | 'None''Private''Public' |


### LabNetworkProfile

| Name | Description | Value |
|-|-|-|
| loadBalancerId | The external load balancer resource id | string |
| publicIpId | The external public IP resource id | string |
| subnetId | The external subnet resource id | string |


### RosterProfile

| Name | Description | Value |
|-|-|-|
| activeDirectoryGroupId | The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode. | string |
| lmsInstance | The base URI identifying the lms instance. | string |
| ltiClientId | The unique id of the azure lab services tool in the lms. | string |
| ltiContextId | The unique context identifier for the lab in the lms. | string |
| ltiRosterEndpoint | The uri of the names and roles service endpoint on the lms for the class attached to this lab. | string |


### SecurityProfile

| Name | Description | Value |
|-|-|-|
| openAccess | Whether any user or only specified users can register to a lab. | 'Disabled''Enabled' |


### VirtualMachineProfile

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | Additional VM capabilities. | VirtualMachineAdditionalCapabilities |
| adminUser | Credentials for the admin user on the VM. | Credentials(required) |
| createOption | Indicates what lab virtual machines are created from. | 'Image''TemplateVM' (required) |
| imageReference | The image configuration for lab virtual machines. | ImageReference(required) |
| nonAdminUser | Credentials for the non-admin user on the VM, if one exists. | Credentials |
| sku | The SKU for the lab. Defines the type of virtual machines used in the lab. | Sku(required) |
| usageQuota | The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours. | string (required) |
| useSharedPassword | Enabling this option will use the same password for all user VMs. | 'Disabled''Enabled' |


### VirtualMachineAdditionalCapabilities

| Name | Description | Value |
|-|-|-|
| installGpuDrivers | Flag to pre-install dedicated GPU drivers. | 'Disabled''Enabled' |


### Credentials

| Name | Description | Value |
|-|-|-|
| password | The password for the user. This is required for the TemplateVM createOption. | string |
| username | The username to use when signing in to lab VMs. | string (required) |


### ImageReference

| Name | Description | Value |
|-|-|-|
| id | Image resource ID | string |
| offer | The image offer if applicable. | string |
| publisher | The image publisher | string |
| sku | The image SKU | string |
| version | The image version specified on creation. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.LabServices/labs/schedules@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs/schedules@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      notes = "string"
      recurrencePattern = {
        expirationDate = "string"
        frequency = "string"
        interval = int
        weekDays = [
          "string"
        ]
      }
      startAt = "string"
      stopAt = "string"
      timeZoneId = "string"
    }
  })
}

```

### labs/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | Schedule resource properties | ScheduleProperties(required) |


### ScheduleProperties

| Name | Description | Value |
|-|-|-|
| notes | Notes for this schedule. | string |
| recurrencePattern | The recurrence pattern of the scheduled actions. | RecurrencePattern |
| startAt | When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead. | string |
| stopAt | When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead. | string |
| timeZoneId | The IANA timezone id for the schedule. | string |


### RecurrencePattern

| Name | Description | Value |
|-|-|-|
| expirationDate | When the recurrence will expire. This date is inclusive. | string (required) |
| frequency | The frequency of the recurrence. | 'Daily''Weekly' (required) |
| interval | The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used. | int |
| weekDays | The week days the schedule runs. Used for when the Frequency is set to Weekly. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
## Microsoft.LabServices/labs/users@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs/users@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalUsageQuota = "string"
      email = "string"
    }
  })
}

```

### labs/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | User resource properties | UserProperties(required) |


### UserProperties

| Name | Description | Value |
|-|-|-|
| additionalUsageQuota | The amount of usage quota time the user gets in addition to the lab usage quota. | string |
| email | Email address of the user. | string (required) |
