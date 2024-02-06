## Microsoft.AzureStackHCI/clusters@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters@2022-12-01"
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
      aadApplicationObjectId = "string"
      aadClientId = "string"
      aadServicePrincipalObjectId = "string"
      aadTenantId = "string"
      cloudManagementEndpoint = "string"
      desiredProperties = {
        diagnosticLevel = "string"
        windowsServerSubscription = "string"
      }
      softwareAssuranceProperties = {
        softwareAssuranceIntent = "string"
        softwareAssuranceStatus = "string"
      }
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity of Cluster resource | ManagedServiceIdentity |
| properties | Cluster properties. | ClusterProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| aadApplicationObjectId | Object id of cluster AAD identity. | string |
| aadClientId | App id of cluster AAD identity. | string |
| aadServicePrincipalObjectId | Id of cluster identity service principal. | string |
| aadTenantId | Tenant id of cluster AAD identity. | string |
| cloudManagementEndpoint | Endpoint configured for management from the Azure portal. | string |
| desiredProperties | Desired properties of the cluster. | ClusterDesiredProperties |
| softwareAssuranceProperties | Software Assurance properties of the cluster. | SoftwareAssuranceProperties |


### ClusterDesiredProperties

| Name | Description | Value |
|-|-|-|
| diagnosticLevel | Desired level of diagnostic data emitted by the cluster. | 'Basic''Enhanced''Off' |
| windowsServerSubscription | Desired state of Windows Server Subscription. | 'Disabled''Enabled' |


### SoftwareAssuranceProperties

| Name | Description | Value |
|-|-|-|
| softwareAssuranceIntent | Customer Intent for Software Assurance Benefit. | 'Disable''Enable' |
| softwareAssuranceStatus | Status of the Software Assurance for the cluster. | 'Disabled''Enabled' |
## Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      arcApplicationClientId = "string"
      arcApplicationObjectId = "string"
      arcApplicationTenantId = "string"
      arcInstanceResourceGroup = "string"
      arcServicePrincipalObjectId = "string"
    }
  })
}

```

### clusters/arcSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | ArcSetting properties. | ArcSettingProperties |


### ArcSettingProperties

| Name | Description | Value |
|-|-|-|
| arcApplicationClientId | App id of arc AAD identity. | string |
| arcApplicationObjectId | Object id of arc AAD identity. | string |
| arcApplicationTenantId | Tenant id of arc AAD identity. | string |
| arcInstanceResourceGroup | The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources. | string |
| arcServicePrincipalObjectId | Object id of arc AAD service principal. | string |
| connectivityProperties | contains connectivity related configuration for ARC resources | For Bicep, you can use theany()function. |
## Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extensionParameters = {
        autoUpgradeMinorVersion = bool
        enableAutomaticUpgrade = bool
        forceUpdateTag = "string"
        publisher = "string"
        type = "string"
        typeHandlerVersion = "string"
      }
    }
  })
}

```

### clusters/arcSettings/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:arcSettings |
| properties | Describes Machine Extension Properties. | ExtensionProperties |


### ExtensionProperties

| Name | Description | Value |
|-|-|-|
| extensionParameters | Parameters specific to this extension type. | ExtensionParameters |


### ExtensionParameters

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| protectedSettings | Protected settings (may contain secrets). | For Bicep, you can use theany()function. |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |
## Microsoft.AzureStackHCI/clusters/updates@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updates@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalProperties = "string"
      availabilityType = "string"
      componentVersions = [
        {
          lastUpdated = "string"
          packageType = "string"
          version = "string"
        }
      ]
      description = "string"
      displayName = "string"
      healthCheckDate = "string"
      healthCheckResult = [
        {
          additionalData = "string"
          description = "string"
          healthCheckSource = "string"
          name = "string"
          remediation = "string"
          severity = "string"
          status = "string"
          tags = {
            key = "string"
            value = "string"
          }
          targetResourceID = "string"
          targetResourceName = "string"
          timestamp = "string"
          title = "string"
        }
      ]
      healthState = "string"
      installedDate = "string"
      packagePath = "string"
      packageSizeInMb = int
      packageType = "string"
      prerequisites = [
        {
          packageName = "string"
          updateType = "string"
          version = "string"
        }
      ]
      publisher = "string"
      rebootRequired = "string"
      releaseLink = "string"
      state = "string"
      updateStateProperties = {
        notifyMessage = "string"
        progressPercentage = int
      }
      version = "string"
    }
  })
}

```

### clusters/updates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | Update properties | UpdateProperties |


### UpdateProperties

| Name | Description | Value |
|-|-|-|
| additionalProperties | Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type. | string |
| availabilityType | Indicates the way the update content can be downloaded. | 'Local''Notify''Online' |
| componentVersions | An array of component versions for a Solution Bundle update, and an empty array otherwise. | PackageVersionInfo[] |
| description | Description of the update. | string |
| displayName | Display name of the Update | string |
| healthCheckDate | Last time the package-specific checks were run. | string |
| healthCheckResult | An array of PrecheckResult objects. | PrecheckResult[] |
| healthState | Overall health state for update-specific health checks. | 'Error''Failure''InProgress''Success''Unknown''Warning' |
| installedDate | Date that the update was installed. | string |
| packagePath | Path where the update package is available. | string |
| packageSizeInMb | Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content. | int |
| packageType | Customer-visible type of the update. | string |
| prerequisites | If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty. | UpdatePrerequisite[] |
| publisher | Publisher of the update package. | string |
| rebootRequired |  | 'False''True''Unknown' |
| releaseLink | Link to release notes for the update. | string |
| state | State of the update as it relates to this stamp. | 'DownloadFailed''Downloading''HasPrerequisite''HealthCheckFailed''HealthChecking''InstallationFailed''Installed''Installing''Invalid''NotApplicableBecauseAnotherUpdateIsInProgress''Obsolete''PreparationFailed''Preparing''Ready''ReadyToInstall''Recalled''ScanFailed''ScanInProgress' |
| updateStateProperties | Additional information regarding the state of the update. See definition of UpdateStateProperties type below for more details on this property. | UpdateStateProperties |
| version | Version of the update. | string |


### PackageVersionInfo

| Name | Description | Value |
|-|-|-|
| lastUpdated | Last time this component was updated. | string |
| packageType | Package type | string |
| version | Package version | string |


### PrecheckResult

| Name | Description | Value |
|-|-|-|
| additionalData | Property bag of key value pairs for additional information. | string |
| description | Detailed overview of the issue and what impact the issue has on the stamp. | string |
| healthCheckSource | The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster). | string |
| name | Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer. | string |
| remediation | Set of steps that can be taken to resolve the issue found. | string |
| severity | Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity. | 'Critical''Hidden''Informational''Warning' |
| status | The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed. | 'ConnectedRecently''Disconnected''Error''Failed''InProgress''NotConnectedRecently''NotSpecified''NotYetRegistered''Succeeded' |
| tags | Key-value pairs that allow grouping/filtering individual tests. | object |
| targetResourceID | The unique identifier for the affected resource (such as a node or drive). | string |
| targetResourceName | The name of the affected resource. | string |
| timestamp | The Time in which the HealthCheck was called. | string |
| title | User-facing name; one or more sentences indicating the direct issue. | string |


### UpdatePrerequisite

| Name | Description | Value |
|-|-|-|
| packageName | Friendly name of the prerequisite. | string |
| updateType | Updatable component type. | string |
| version | Version of the prerequisite. | string |


### UpdateStateProperties

| Name | Description | Value |
|-|-|-|
| notifyMessage | Brief message with instructions for updates of AvailabilityType Notify. | string |
| progressPercentage | Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded. | int |
## Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      duration = "string"
      lastUpdatedTime = "string"
      progress = {
        description = "string"
        endTimeUtc = "string"
        errorMessage = "string"
        lastUpdatedTimeUtc = "string"
        name = "string"
        startTimeUtc = "string"
        status = "string"
        steps = [
          {
      }
      state = "string"
      timeStarted = "string"
    }
  })
}

```

### clusters/updates/updateRuns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:updates |
| properties | Describes Update Run Properties. | UpdateRunProperties |


### UpdateRunProperties

| Name | Description | Value |
|-|-|-|
| duration | Duration of the update run. | string |
| lastUpdatedTime | Timestamp of the most recently completed step in the update run. | string |
| progress | Progress representation of the update run steps. | Step |
| state | State of the update run. | 'Failed''InProgress''Succeeded''Unknown' |
| timeStarted | Timestamp of the update run was started. | string |


### Step

| Name | Description | Value |
|-|-|-|
| description | More detailed description of the step. | string |
| endTimeUtc | When the step reached a terminal state. | string |
| errorMessage | Error message, specified if the step is in a failed state. | string |
| lastUpdatedTimeUtc | Completion time of this step or the last completed sub-step. | string |
| name | Name of the step. | string |
| startTimeUtc | When the step started, or empty if it has not started executing. | string |
| status | Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'. | string |
| steps | Recursive model for child steps of this step. | Step[] |
## Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-01"
  name = "default"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      currentVersion = "string"
      hardwareModel = "string"
      healthCheckDate = "string"
      healthCheckResult = [
        {
          additionalData = "string"
          description = "string"
          healthCheckSource = "string"
          name = "string"
          remediation = "string"
          severity = "string"
          status = "string"
          tags = {
            key = "string"
            value = "string"
          }
          targetResourceID = "string"
          targetResourceName = "string"
          timestamp = "string"
          title = "string"
        }
      ]
      healthState = "string"
      lastChecked = "string"
      lastUpdated = "string"
      oemFamily = "string"
      packageVersions = [
        {
          lastUpdated = "string"
          packageType = "string"
          version = "string"
        }
      ]
      state = "string"
    }
  })
}

```

### clusters/updateSummaries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | Update summaries properties | UpdateSummariesProperties |


### UpdateSummariesProperties

| Name | Description | Value |
|-|-|-|
| currentVersion | Current Solution Bundle version of the stamp. | string |
| hardwareModel | Name of the hardware model. | string |
| healthCheckDate | Last time the package-specific checks were run. | string |
| healthCheckResult | An array of pre-check result objects. | PrecheckResult[] |
| healthState | Overall health state for update-specific health checks. | 'Error''Failure''InProgress''Success''Unknown''Warning' |
| lastChecked | Last time the update service successfully checked for updates | string |
| lastUpdated | Last time an update installation completed successfully. | string |
| oemFamily | OEM family name. | string |
| packageVersions | Current version of each updatable component. | PackageVersionInfo[] |
| state | Overall update state of the stamp. | 'AppliedSuccessfully''NeedsAttention''PreparationFailed''PreparationInProgress''Unknown''UpdateAvailable''UpdateFailed''UpdateInProgress' |


### PrecheckResult

| Name | Description | Value |
|-|-|-|
| additionalData | Property bag of key value pairs for additional information. | string |
| description | Detailed overview of the issue and what impact the issue has on the stamp. | string |
| healthCheckSource | The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster). | string |
| name | Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer. | string |
| remediation | Set of steps that can be taken to resolve the issue found. | string |
| severity | Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity. | 'Critical''Hidden''Informational''Warning' |
| status | The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed. | 'ConnectedRecently''Disconnected''Error''Failed''InProgress''NotConnectedRecently''NotSpecified''NotYetRegistered''Succeeded' |
| tags | Key-value pairs that allow grouping/filtering individual tests. | object |
| targetResourceID | The unique identifier for the affected resource (such as a node or drive). | string |
| targetResourceName | The name of the affected resource. | string |
| timestamp | The Time in which the HealthCheck was called. | string |
| title | User-facing name; one or more sentences indicating the direct issue. | string |


### PackageVersionInfo

| Name | Description | Value |
|-|-|-|
| lastUpdated | Last time this component was updated. | string |
| packageType | Package type | string |
| version | Package version | string |
## Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cloudInitDataSource = "string"
      containerName = "string"
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      imagePath = "string"
      osType = "string"
      resourceName = "string"
      version = {
        name = "string"
        properties = {
          storageProfile = {
            osDiskImage = {}
          }
        }
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### galleryimages

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a gallery image resource | GalleryimagesProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### GalleryimagesProperties

| Name | Description | Value |
|-|-|-|
| cloudInitDataSource | Datasource for the gallery image when provisioning with cloud-init (Azure or NoCloud) | 'Azure''NoCloud' |
| containerName | Container Name for storage container | string |
| hyperVGeneration | The hypervisor generation of the Virtual Machine [V1, V2] | 'V1''V2' |
| identifier | This is the gallery image definition identifier. | GalleryImageIdentifier |
| imagePath | location of the image the gallery image should be created from | string |
| osType | operating system type that the gallery image uses. Expected to be linux or windows | 'Linux''Windows' |
| resourceName | name of the object to be used in moc | string |
| version | Specifies information about the gallery image version that you want to create or update. | GalleryImageVersion |


### GalleryImageIdentifier

| Name | Description | Value |
|-|-|-|
| offer | The name of the gallery image definition offer. | string (required) |
| publisher | The name of the gallery image definition publisher. | string (required) |
| sku | The name of the gallery image definition SKU. | string (required) |


### GalleryImageVersion

| Name | Description | Value |
|-|-|-|
| name | This is the version of the gallery image. | string |
| properties | Describes the properties of a gallery image version. | GalleryImageVersionProperties |


### GalleryImageVersionProperties

| Name | Description | Value |
|-|-|-|
| storageProfile | This is the storage profile of a Gallery Image Version. | GalleryImageVersionStorageProfile(required) |


### GalleryImageVersionStorageProfile

| Name | Description | Value |
|-|-|-|
| osDiskImage | This is the OS disk image. | GalleryOSDiskImage |
## Microsoft.AzureStackHCI/marketplacegalleryimages@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/marketplacegalleryimages@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cloudInitDataSource = "string"
      containerName = "string"
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      osType = "string"
      resourceName = "string"
      version = {
        name = "string"
        properties = {
          storageProfile = {
            osDiskImage = {}
          }
        }
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### marketplacegalleryimages

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a marketplace gallery image resource | MarketplacegalleryimagesProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### MarketplacegalleryimagesProperties

| Name | Description | Value |
|-|-|-|
| cloudInitDataSource | Datasource for the gallery image when provisioning with cloud-init [Azure, NoCloud] | 'Azure''NoCloud' |
| containerName | Container Name for storage container | string |
| hyperVGeneration | The hypervisor generation of the Virtual Machine [V1, V2] | 'V1''V2' |
| identifier | This is the gallery image definition identifier. | GalleryImageIdentifier |
| osType | operating system type that the gallery image uses. Expected to be linux or windows | 'Linux''Windows' |
| resourceName | name of the object to be used in moc | string |
| version | Specifies information about the gallery image version that you want to create or update. | GalleryImageVersion |


### GalleryImageIdentifier

| Name | Description | Value |
|-|-|-|
| offer | The name of the gallery image definition offer. | string (required) |
| publisher | The name of the gallery image definition publisher. | string (required) |
| sku | The name of the gallery image definition SKU. | string (required) |


### GalleryImageVersion

| Name | Description | Value |
|-|-|-|
| name | This is the version of the gallery image. | string |
| properties | Describes the properties of a gallery image version. | GalleryImageVersionProperties |


### GalleryImageVersionProperties

| Name | Description | Value |
|-|-|-|
| storageProfile | This is the storage profile of a Gallery Image Version. | GalleryImageVersionStorageProfile(required) |


### GalleryImageVersionStorageProfile

| Name | Description | Value |
|-|-|-|
| osDiskImage | This is the OS disk image. | GalleryOSDiskImage |
## Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsSettings = {
        dnsServers = [
          "string"
        ]
      }
      ipConfigurations = [
        {
          name = "string"
          properties = {
            gateway = "string"
            prefixLength = "string"
            privateIPAddress = "string"
            privateIPAllocationMethod = "string"
            subnet = {
              id = "string"
            }
          }
        }
      ]
      macAddress = "string"
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### networkinterfaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a network interface resource | NetworkinterfacesProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### NetworkinterfacesProperties

| Name | Description | Value |
|-|-|-|
| dnsSettings | DNS Settings for the interface | InterfaceDNSSettings |
| ipConfigurations | IPConfigurations - A list of IPConfigurations of the network interface. | IpConfiguration[] |
| macAddress | MacAddress - The MAC address of the network interface. | string |
| resourceName | name of the object to be used in moc | string |


### InterfaceDNSSettings

| Name | Description | Value |
|-|-|-|
| dnsServers | List of DNS server IP Addresses for the interface | string[] |


### IpConfiguration

| Name | Description | Value |
|-|-|-|
| name | Name - The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | InterfaceIPConfigurationPropertiesFormat properties of IP configuration. | IpConfigurationProperties |


### IpConfigurationProperties

| Name | Description | Value |
|-|-|-|
| gateway | Gateway for network interface | string |
| prefixLength | prefixLength for network interface | string |
| privateIPAddress | PrivateIPAddress - Private IP address of the IP configuration. | string |
| privateIPAllocationMethod | PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic' | 'Dynamic''Static' |
| subnet | Subnet - Name of Subnet bound to the IP configuration. | IpConfigurationPropertiesSubnet |


### IpConfigurationPropertiesSubnet

| Name | Description | Value |
|-|-|-|
| id | ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | string |
## Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      path = "string"
      provisioningState = "string"
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### storagecontainers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation |  | StoragecontainersExtendedLocation |
| properties | Properties of a storage container resource | StoragecontainersProperties |


### StoragecontainersExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### StoragecontainersProperties

| Name | Description | Value |
|-|-|-|
| path | Path of the storage container on the disk | string |
| provisioningState |  | string |
| resourceName | name of the object to be used in moc | string |
## Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      blockSizeBytes = int
      containerId = "string"
      diskFileFormat = "string"
      diskSizeBytes = int
      dynamic = bool
      hyperVGeneration = "string"
      logicalSectorBytes = int
      physicalSectorBytes = int
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### virtualharddisks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a virtual hard disk resource | VirtualharddisksProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### VirtualharddisksProperties

| Name | Description | Value |
|-|-|-|
| blockSizeBytes |  | int |
| containerId | Storage ContainerID of the storage container to be used for VHD | string |
| diskFileFormat | The format of the actual VHD file [vhd, vhdx] | 'vhd''vhdx' |
| diskSizeBytes | diskSizeBytes - size of the disk in GB | int |
| dynamic | Boolean for enabling dynamic sizing on the virtual hard disk | bool |
| hyperVGeneration | The hypervisor generation of the Virtual Machine [V1, V2] | 'V1''V2' |
| logicalSectorBytes |  | int |
| physicalSectorBytes |  | int |
| resourceName | name of the object to be used in moc | string |
## Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview

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
## Microsoft.AzureStackHCI/virtualMachines/extensions@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/extensions@2021-09-01-preview"
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
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes Machine Extension Properties. | MachineExtensionProperties |


### MachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
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
## Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview"
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
| provisioningAction | The guest agent provisioning action. | 'install''repair''uninstall' |


### GuestCredential

| Name | Description | Value |
|-|-|-|
| password | The password to connect with the guest. | string |
| username | The username to connect with the guest. | string |


### HttpProxyConfiguration

| Name | Description | Value |
|-|-|-|
| httpsProxy | The httpsProxy url. | string |
## Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicKey = "string"
      resourceUid = "string"
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
| publicKey | The Public Key. | string |
| resourceUid | The unique identifier for the resource. | string |
## Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      networkType = "string"
      resourceName = "string"
      subnets = [
        {
          name = "string"
          properties = {
            addressPrefix = "string"
            addressPrefixes = [
              "string"
            ]
            ipAllocationMethod = "string"
            ipConfigurationReferences = [
              {
                ID = "string"
              }
            ]
            ipPools = [
              {
                end = "string"
                info = {}
                ipPoolType = "string"
                start = "string"
              }
            ]
            routeTable = {
              id = "string"
              name = "string"
              properties = {
                routes = [
                  {
                    name = "string"
                    properties = {
                      addressPrefix = "string"
                      nextHopIpAddress = "string"
                    }
                  }
                ]
              }
              type = "string"
            }
            vlan = int
          }
        }
      ]
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### virtualnetworks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a virtual network resource | VirtualnetworksProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### VirtualnetworksProperties

| Name | Description | Value |
|-|-|-|
| networkType | Type of the network | 'ICS''Internal''L2Bridge''L2Tunnel''Mirrored''NAT''Overlay''Private''Transparent' |
| resourceName | name of the object to be used in moc | string |
| subnets | Subnet - list of subnets under the virtual network | VirtualnetworksPropertiesSubnetsItem[] |


### VirtualnetworksPropertiesSubnetsItem

| Name | Description | Value |
|-|-|-|
| name | Name - The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | SubnetProperties - Properties of the subnet. | VirtualnetworksPropertiesSubnetsItemAutoGenerated |


### VirtualnetworksPropertiesSubnetsItemAutoGenerated

| Name | Description | Value |
|-|-|-|
| addressPrefix | Cidr for this subnet - IPv4, IPv6 | string |
| addressPrefixes | AddressPrefixes - List of address prefixes for the subnet. | string[] |
| ipAllocationMethod | IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic' | 'Dynamic''Static' |
| ipConfigurationReferences | IPConfigurationReferences - list of IPConfigurationReferences | ComponentsVqks9HSchemasVirtualnetworkspropertiesProp...[] |
| ipPools | network associated pool of IP Addresses | IPPool[] |
| routeTable | RouteTable for the subnet | ComponentsL15GkaSchemasVirtualnetworkspropertiesProp... |
| vlan | Vlan to use for the subnet | int |


### ComponentsVqks9HSchemasVirtualnetworkspropertiesProp...

| Name | Description | Value |
|-|-|-|
| ID | IPConfigurationID | string |


### IPPool

| Name | Description | Value |
|-|-|-|
| end | end of the ip address pool | string |
| info |  | IPPoolInfo |
| ipPoolType | ip pool type | 'vippool''vm' |
| start | start of the ip address pool | string |


### ComponentsL15GkaSchemasVirtualnetworkspropertiesProp...

| Name | Description | Value |
|-|-|-|
| id | Etag - Gets a unique read-only string that changes whenever the resource is updated. | string |
| name | Name - READ-ONLY; Resource name. | string |
| properties | RouteTablePropertiesFormat route Table resource. | ComponentsOycd2YSchemasVirtualnetworkspropertiesProp... |
| type | Type - READ-ONLY; Resource type. | string |


### ComponentsOycd2YSchemasVirtualnetworkspropertiesProp...

| Name | Description | Value |
|-|-|-|
| routes | Routes - Collection of routes contained within a route table. | VirtualnetworksPropertiesSubnetsPropertiesItemsItem[] |


### VirtualnetworksPropertiesSubnetsPropertiesItemsItem

| Name | Description | Value |
|-|-|-|
| name | Name - name of the subnet | string |
| properties | RoutePropertiesFormat - Properties of the route. | VirtualnetworksPropertiesSubnetsItemRouteTableRoutes... |


### VirtualnetworksPropertiesSubnetsItemRouteTableRoutes...

| Name | Description | Value |
|-|-|-|
| addressPrefix | AddressPrefix - The destination CIDR to which the route applies. | string |
| nextHopIpAddress | NextHopIPAddress - The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | string |
