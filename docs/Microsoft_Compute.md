## Microsoft.Compute/availabilitySets@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/availabilitySets@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      platformFaultDomainCount = int
      platformUpdateDomainCount = int
      proximityPlacementGroup = {
        id = "string"
      }
      virtualMachines = [
        {
          id = "string"
        }
      ]
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### availabilitySets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'. | Sku |
| properties | The instance view of a resource. | AvailabilitySetProperties |


### AvailabilitySetProperties

| Name | Description | Value |
|-|-|-|
| platformFaultDomainCount | Fault Domain count. | int |
| platformUpdateDomainCount | Update Domain count. | int |
| proximityPlacementGroup | Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01. | SubResource |
| virtualMachines | A list of references to all virtual machines in the availability set. | SubResource[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |
## Microsoft.Compute/capacityReservationGroups@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/capacityReservationGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    zones = [
      "string"
    ]
  })
}

```

### capacityReservationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | capacity reservation group Properties. | CapacityReservationGroupProperties |
| zones | Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones. | string[] |
## Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### capacityReservationGroups/capacityReservations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (/rest/api/compute/resourceskus/list) for supported values. | Sku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:capacityReservationGroups |
| properties | Properties of the Capacity reservation. | CapacityReservationProperties |
| zones | Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone. | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |
## Microsoft.Compute/cloudServices@2022-09-04

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/cloudServices@2022-09-04"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowModelOverride = bool
      configuration = "string"
      configurationUrl = "string"
      extensionProfile = {
        extensions = [
          {
            name = "string"
            properties = {
              autoUpgradeMinorVersion = bool
              forceUpdateTag = "string"
              protectedSettingsFromKeyVault = {
                secretUrl = "string"
                sourceVault = {
                  id = "string"
                }
              }
              publisher = "string"
              rolesAppliedTo = [
                "string"
              ]
              type = "string"
              typeHandlerVersion = "string"
            }
          }
        ]
      }
      networkProfile = {
        loadBalancerConfigurations = [
          {
            id = "string"
            name = "string"
            properties = {
              frontendIpConfigurations = [
                {
                  name = "string"
                  properties = {
                    privateIPAddress = "string"
                    publicIPAddress = {
                      id = "string"
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
            }
          }
        ]
        slotType = "string"
        swappableCloudService = {
          id = "string"
        }
      }
      osProfile = {
        secrets = [
          {
            sourceVault = {
              id = "string"
            }
            vaultCertificates = [
              {
                certificateUrl = "string"
              }
            ]
          }
        ]
      }
      packageUrl = "string"
      roleProfile = {
        roles = [
          {
            name = "string"
            sku = {
              capacity = int
              name = "string"
              tier = "string"
            }
          }
        ]
      }
      startCloudService = bool
      upgradeMode = "string"
    }
    systemData = {}
    zones = [
      "string"
    ]
  })
}

```

### cloudServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-15Valid characters:Can't use spaces, control characters, or these characters:~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ |  ; : . ' " , < > / ?Can't start with underscore. Can't end with period or hyphen. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Cloud service properties | CloudServiceProperties |
| systemData | The system meta data relating to this resource. | SystemData |
| zones | List of logical availability zone of the resource. List should contain only 1 zone where cloud service should be provisioned. This field is optional. | string[] |


### CloudServiceProperties

| Name | Description | Value |
|-|-|-|
| allowModelOverride | (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.The default value isfalse. | bool |
| configuration | Specifies the XML service configuration (.cscfg) for the cloud service. | string |
| configurationUrl | Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.This is a write-only property and is not returned in GET calls. | string |
| extensionProfile | Describes a cloud service extension profile. | CloudServiceExtensionProfile |
| networkProfile | Network Profile for the cloud service. | CloudServiceNetworkProfile |
| osProfile | Describes the OS profile for the cloud service. | CloudServiceOsProfile |
| packageUrl | Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.This is a write-only property and is not returned in GET calls. | string |
| roleProfile | Describes the role profile for the cloud service. | CloudServiceRoleProfile |
| startCloudService | (Optional) Indicates whether to start the cloud service immediately after it is created. The default value istrue.If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff. | bool |
| upgradeMode | Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.Possible Values areAutoManualSimultaneousIf not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence. | 'Auto''Manual''Simultaneous' |


### CloudServiceExtensionProfile

| Name | Description | Value |
|-|-|-|
| extensions | List of extensions for the cloud service. | Extension[] |


### Extension

| Name | Description | Value |
|-|-|-|
| name | The name of the extension. | string |
| properties | Extension Properties. | CloudServiceExtensionProperties |


### CloudServiceExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available. | bool |
| forceUpdateTag | Tag to force apply the provided public and protected settings.Changing the tag value allows for re-running the extension without changing any of the public or protected settings.If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, andit is up to handler implementation whether to re-run it or not | string |
| protectedSettings | Protected settings for the extension which are encrypted before sent to the role instance. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance. | CloudServiceVaultAndSecretReference |
| publisher | The name of the extension handler publisher. | string |
| rolesAppliedTo | Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service. | string[] |
| settings | Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension. | For Bicep, you can use theany()function. |
| type | Specifies the type of the extension. | string |
| typeHandlerVersion | Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance. | string |


### CloudServiceVaultAndSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | Secret URL which contains the protected settings of the extension | string |
| sourceVault | The ARM Resource ID of the Key Vault | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### CloudServiceNetworkProfile

| Name | Description | Value |
|-|-|-|
| loadBalancerConfigurations | List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer. | LoadBalancerConfiguration[] |
| slotType | Slot type for the cloud service.Possible values areProductionStagingIf not specified, the default value is Production. | 'Production''Staging' |
| swappableCloudService | The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown. | SubResource |


### LoadBalancerConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
| name | The name of the Load balancer | string (required) |
| properties | Properties of the load balancer configuration. | LoadBalancerConfigurationProperties(required) |


### LoadBalancerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| frontendIpConfigurations | Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration. | LoadBalancerFrontendIpConfiguration[] (required) |


### LoadBalancerFrontendIpConfiguration

| Name | Description | Value |
|-|-|-|
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string (required) |
| properties | Properties of load balancer frontend ip configuration. | LoadBalancerFrontendIpConfigurationProperties(required) |


### LoadBalancerFrontendIpConfigurationProperties

| Name | Description | Value |
|-|-|-|
| privateIPAddress | The virtual network private IP address of the IP configuration. | string |
| publicIPAddress | The reference to the public ip address resource. | SubResource |
| subnet | The reference to the virtual network subnet resource. | SubResource |


### CloudServiceOsProfile

| Name | Description | Value |
|-|-|-|
| secrets | Specifies set of certificates that should be installed onto the role instances. | CloudServiceVaultSecretGroup[] |


### CloudServiceVaultSecretGroup

| Name | Description | Value |
|-|-|-|
| sourceVault | The relative URL of the Key Vault containing all of the certificates in VaultCertificates. | SubResource |
| vaultCertificates | The list of key vault references in SourceVault which contain certificates. | CloudServiceVaultCertificate[] |


### CloudServiceVaultCertificate

| Name | Description | Value |
|-|-|-|
| certificateUrl | This is the URL of a certificate that has been uploaded to Key Vault as a secret. | string |


### CloudServiceRoleProfile

| Name | Description | Value |
|-|-|-|
| roles | List of roles for the cloud service. | CloudServiceRoleProfileProperties[] |


### CloudServiceRoleProfileProperties

| Name | Description | Value |
|-|-|-|
| name | Resource name. | string |
| sku | Describes the cloud service role sku. | CloudServiceRoleSku |


### CloudServiceRoleSku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of role instances in the cloud service. | int |
| name | The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku. | string |
| tier | Specifies the tier of the cloud service. Possible Values areStandardBasic | string |
## Microsoft.Compute/diskAccesses@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskAccesses@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### diskAccesses

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location where the disk access will be created. Extended location cannot be changed. | ExtendedLocation |
| properties |  | DiskAccessProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |
## Microsoft.Compute/diskAccesses/privateEndpointConnections@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskAccesses/privateEndpointConnections@2023-01-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### diskAccesses/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:diskAccesses |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | A collection of information about the state of the connection between DiskAccess and Virtual Network. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.Compute/diskEncryptionSets@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskEncryptionSets@2023-01-02"
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
      activeKey = {
        keyUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      encryptionType = "string"
      federatedClientId = "string"
      rotationToLatestKeyVersionEnabled = bool
    }
  })
}

```

### diskEncryptionSets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, and hyphens. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| identity | The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. | EncryptionSetIdentity |
| properties |  | EncryptionSetProperties |


### EncryptionSetIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### EncryptionSetProperties

| Name | Description | Value |
|-|-|-|
| activeKey | The key vault key which is currently used by this disk encryption set. | KeyForDiskEncryptionSet |
| encryptionType | The type of key used to encrypt the data of the disk. | 'ConfidentialVmEncryptedWithCustomerKey''EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys' |
| federatedClientId | Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property. | string |
| rotationToLatestKeyVersionEnabled | Set this flag to true to enable auto-updating of this disk encryption set to the latest key version. | bool |


### KeyForDiskEncryptionSet

| Name | Description | Value |
|-|-|-|
| keyUrl | Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value. | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription. | SourceVault |


### SourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
## Microsoft.Compute/disks@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/disks@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      burstingEnabled = bool
      completionPercent = int
      creationData = {
        createOption = "string"
        galleryImageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        logicalSectorSize = int
        performancePlus = bool
        securityDataUri = "string"
        sourceResourceId = "string"
        sourceUri = "string"
        storageAccountId = "string"
        uploadSizeBytes = int
      }
      dataAccessAuthMode = "string"
      diskAccessId = "string"
      diskIOPSReadWrite = int
      diskMBpsReadWrite = int
      diskSizeGB = int
      encryption = {
        diskEncryptionSetId = "string"
        type = "string"
      }
      encryptionSettingsCollection = {
        enabled = bool
        encryptionSettings = [
          {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
        ]
        encryptionSettingsVersion = "string"
      }
      hyperVGeneration = "string"
      maxShares = int
      networkAccessPolicy = "string"
      optimizedForFrequentAttach = bool
      osType = "string"
      publicNetworkAccess = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      securityProfile = {
        secureVMDiskEncryptionSetId = "string"
        securityType = "string"
      }
      supportedCapabilities = {
        acceleratedNetwork = bool
        architecture = "string"
        diskControllerTypes = "string"
      }
      supportsHibernation = bool
      tier = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### disks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, and hyphens. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS. | DiskSku |
| extendedLocation | The extended location where the disk will be created. Extended location cannot be changed. | ExtendedLocation |
| properties | Disk resource properties. | DiskProperties |
| zones | The Logical zone list for Disk. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### DiskProperties

| Name | Description | Value |
|-|-|-|
| burstingEnabled | Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks. | bool |
| completionPercent | Percentage complete for the background copy when a resource is created via the CopyStart operation. | int |
| creationData | Disk source information. CreationData information cannot be changed after the disk has been created. | CreationData(required) |
| dataAccessAuthMode | Additional authentication requirements when exporting or uploading to a disk or snapshot. | 'AzureActiveDirectory''None' |
| diskAccessId | ARM id of the DiskAccess resource for using private endpoints on disks. | string |
| diskIOPSReadWrite | The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. | int |
| diskMBpsReadWrite | The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. | int |
| diskSizeGB | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. | int |
| encryption | Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. | Encryption |
| encryptionSettingsCollection | Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. | EncryptionSettingsCollection |
| hyperVGeneration | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | 'V1''V2' |
| maxShares | The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. | int |
| networkAccessPolicy | Policy for accessing the disk via network. | 'AllowAll''AllowPrivate''DenyAll' |
| optimizedForFrequentAttach | Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine. | bool |
| osType | The Operating System type. | 'Linux''Windows' |
| publicNetworkAccess | Policy for controlling export on the disk. | 'Disabled''Enabled' |
| purchasePlan | Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer} | PurchasePlan |
| securityProfile | Contains the security related information for the resource. | DiskSecurityProfile |
| supportedCapabilities | List of supported capabilities for the image from which the OS disk was created. | SupportedCapabilities |
| supportsHibernation | Indicates the OS on a disk supports hibernation. | bool |
| tier | Performance tier of the disk (e.g, P4, S10) as described here:https://azure.microsoft.com/pricing/details/managed-disks/. Does not apply to Ultra disks. | string |


### CreationData

| Name | Description | Value |
|-|-|-|
| createOption | This enumerates the possible sources of a disk's creation. | 'Attach''Copy''CopyStart''Empty''FromImage''Import''ImportSecure''Restore''Upload''UploadPreparedSecure' (required) |
| galleryImageReference | Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk. | ImageDiskReference |
| imageReference | Disk source information for PIR or user images. | ImageDiskReference |
| logicalSectorSize | Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. | int |
| performancePlus | Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled. | bool |
| securityDataUri | If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state. | string |
| sourceResourceId | If createOption is Copy, this is the ARM id of the source snapshot or disk. | string |
| sourceUri | If createOption is Import, this is the URI of a blob to be imported into a managed disk. | string |
| storageAccountId | Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. | string |
| uploadSizeBytes | If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). | int |


### ImageDiskReference

| Name | Description | Value |
|-|-|-|
| communityGalleryImageId | A relative uri containing a community Azure Compute Gallery image reference. | string |
| id | A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference. | string |
| lun | If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. | int |
| sharedGalleryImageId | A relative uri containing a direct shared Azure Compute Gallery image reference. | string |


### Encryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | ResourceId of the disk encryption set to use for enabling encryption at rest. | string |
| type | The type of key used to encrypt the data of the disk. | 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey' |


### EncryptionSettingsCollection

| Name | Description | Value |
|-|-|-|
| enabled | Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. | bool (required) |
| encryptionSettings | A collection of encryption settings, one for each disk volume. | EncryptionSettingsElement[] |
| encryptionSettingsVersion | Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. | string |


### EncryptionSettingsElement

| Name | Description | Value |
|-|-|-|
| diskEncryptionKey | Key Vault Secret Url and vault id of the disk encryption key | KeyVaultAndSecretReference |
| keyEncryptionKey | Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key. | KeyVaultAndKeyReference |


### KeyVaultAndSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | Url pointing to a key or secret in KeyVault | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret | SourceVault(required) |


### SourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### KeyVaultAndKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | Url pointing to a key or secret in KeyVault | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret | SourceVault(required) |


### PurchasePlan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string (required) |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string (required) |
| promotionCode | The Offer Promotion Code. | string |
| publisher | The publisher ID. | string (required) |


### DiskSecurityProfile

| Name | Description | Value |
|-|-|-|
| secureVMDiskEncryptionSetId | ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key | string |
| securityType | Specifies the SecurityType of the VM. Applicable for OS disks only. | 'ConfidentialVM_DiskEncryptedWithCustomerKey''ConfidentialVM_DiskEncryptedWithPlatformKey''ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey''TrustedLaunch' |


### SupportedCapabilities

| Name | Description | Value |
|-|-|-|
| acceleratedNetwork | True if the image from which the OS disk is created supports accelerated networking. | bool |
| architecture | CPU architecture supported by an OS disk. | 'Arm64''x64' |
| diskControllerTypes | The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI. | string |


### DiskSku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |
## Microsoft.Compute/galleries@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries@2022-03-03"
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
      identifier = {}
      sharingProfile = {
        communityGalleryInfo = {
          eula = "string"
          publicNamePrefix = "string"
          publisherContact = "string"
          publisherUri = "string"
        }
        permissions = "string"
      }
      softDeletePolicy = {
        isSoftDeleteEnabled = bool
      }
    }
  })
}

```

### galleries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics and periods.Start and end with alphanumeric. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Describes the properties of a Shared Image Gallery. | GalleryProperties |


### GalleryProperties

| Name | Description | Value |
|-|-|-|
| description | The description of this Shared Image Gallery resource. This property is updatable. | string |
| identifier | Describes the gallery unique name. | GalleryIdentifier |
| sharingProfile | Profile for gallery sharing to subscription or tenant | SharingProfile |
| softDeletePolicy | Contains information about the soft deletion policy of the gallery. | SoftDeletePolicy |


### SharingProfile

| Name | Description | Value |
|-|-|-|
| communityGalleryInfo | Information of community gallery if current gallery is shared to community. | CommunityGalleryInfo |
| permissions | This property allows you to specify the permission of sharing gallery.Possible values are:PrivateGroupsCommunity | 'Community''Groups''Private' |


### CommunityGalleryInfo

| Name | Description | Value |
|-|-|-|
| eula | End-user license agreement for community gallery image. | string |
| publicNamePrefix | The prefix of the gallery name that will be displayed publicly. Visible to all users. | string |
| publisherContact | Community gallery publisher support email. The email address of the publisher. Visible to all users. | string |
| publisherUri | The link to the publisher website. Visible to all users. | string |


### SoftDeletePolicy

| Name | Description | Value |
|-|-|-|
| isSoftDeleteEnabled | Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time. | bool |
## Microsoft.Compute/galleries/applications@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/applications@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customActions = [
        {
          description = "string"
          name = "string"
          parameters = [
            {
              defaultValue = "string"
              description = "string"
              name = "string"
              required = bool
              type = "string"
            }
          ]
          script = "string"
        }
      ]
      description = "string"
      endOfLifeDate = "string"
      eula = "string"
      privacyStatementUri = "string"
      releaseNoteUri = "string"
      supportedOSType = "string"
    }
  })
}

```

### galleries/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, and periods.Start and end with alphanumeric. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:galleries |
| properties | Describes the properties of a gallery Application Definition. | GalleryApplicationProperties |


### GalleryApplicationProperties

| Name | Description | Value |
|-|-|-|
| customActions | A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application. | GalleryApplicationCustomAction[] |
| description | The description of this gallery Application Definition resource. This property is updatable. | string |
| endOfLifeDate | The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. | string |
| eula | The Eula agreement for the gallery Application Definition. | string |
| privacyStatementUri | The privacy statement uri. | string |
| releaseNoteUri | The release note uri. | string |
| supportedOSType | This property allows you to specify the supported type of the OS that application is built for.Possible values are:WindowsLinux | 'Linux''Windows' (required) |


### GalleryApplicationCustomAction

| Name | Description | Value |
|-|-|-|
| description | Description to help the users understand what this custom action does. | string |
| name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
| parameters | The parameters that this custom action uses | GalleryApplicationCustomActionParameter[] |
| script | The script to run when executing this custom action. | string (required) |


### GalleryApplicationCustomActionParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | The default value of the parameter.  Only applies to string types | string |
| description | A description to help users understand what this parameter means | string |
| name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
| required | Indicates whether this parameter must be passed when running the custom action. | bool |
| type | Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob | 'ConfigurationDataBlob''LogOutputBlob''String' |
## Microsoft.Compute/galleries/applications/versions@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/applications/versions@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publishingProfile = {
        advancedSettings = {}
        customActions = [
          {
            description = "string"
            name = "string"
            parameters = [
              {
                defaultValue = "string"
                description = "string"
                name = "string"
                required = bool
                type = "string"
              }
            ]
            script = "string"
          }
        ]
        enableHealthCheck = bool
        endOfLifeDate = "string"
        excludeFromLatest = bool
        manageActions = {
          install = "string"
          remove = "string"
          update = "string"
        }
        replicaCount = int
        replicationMode = "string"
        settings = {
          configFileName = "string"
          packageFileName = "string"
        }
        source = {
          defaultConfigurationLink = "string"
          mediaLink = "string"
        }
        storageAccountType = "string"
        targetExtendedLocations = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            extendedLocation = {
              name = "string"
              type = "string"
            }
            extendedLocationReplicaCount = int
            name = "string"
            storageAccountType = "string"
          }
        ]
        targetRegions = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            excludeFromLatest = bool
            name = "string"
            regionalReplicaCount = int
            storageAccountType = "string"
          }
        ]
      }
      safetyProfile = {
        allowDeletionOfReplicatedLocations = bool
      }
    }
  })
}

```

### galleries/applications/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 32-bit integerValid characters:Numbers and periods.(Each segment is converted to an int32. So each segment has a max value of 2,147,483,647.) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applications |
| properties | Describes the properties of a gallery image version. | GalleryApplicationVersionProperties |


### GalleryApplicationVersionProperties

| Name | Description | Value |
|-|-|-|
| publishingProfile | The publishing profile of a gallery image version. | GalleryApplicationVersionPublishingProfile(required) |
| safetyProfile | The safety profile of the Gallery Application Version. | GalleryApplicationVersionSafetyProfile |


### GalleryApplicationVersionPublishingProfile

| Name | Description | Value |
|-|-|-|
| advancedSettings | Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only. | object |
| customActions | A list of custom actions that can be performed with this Gallery Application Version. | GalleryApplicationCustomAction[] |
| enableHealthCheck | Optional. Whether or not this application reports health. | bool |
| endOfLifeDate | The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable. | string |
| excludeFromLatest | If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. | bool |
| manageActions |  | UserArtifactManage |
| replicaCount | The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. | int |
| replicationMode | Optional parameter which specifies the mode to be used for replication. This property is not updatable. | 'Full''Shallow' |
| settings | Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set. | UserArtifactSettings |
| source | The source image from which the Image Version is going to be created. | UserArtifactSource(required) |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |
| targetExtendedLocations | The target extended locations where the Image Version is going to be replicated to. This property is updatable. | GalleryTargetExtendedLocation[] |
| targetRegions | The target regions where the Image Version is going to be replicated to. This property is updatable. | TargetRegion[] |


### GalleryApplicationCustomAction

| Name | Description | Value |
|-|-|-|
| description | Description to help the users understand what this custom action does. | string |
| name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
| parameters | The parameters that this custom action uses | GalleryApplicationCustomActionParameter[] |
| script | The script to run when executing this custom action. | string (required) |


### GalleryApplicationCustomActionParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | The default value of the parameter.  Only applies to string types | string |
| description | A description to help users understand what this parameter means | string |
| name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
| required | Indicates whether this parameter must be passed when running the custom action. | bool |
| type | Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob | 'ConfigurationDataBlob''LogOutputBlob''String' |


### UserArtifactManage

| Name | Description | Value |
|-|-|-|
| install | Required. The path and arguments to install the gallery application. This is limited to 4096 characters. | string (required) |
| remove | Required. The path and arguments to remove the gallery application. This is limited to 4096 characters. | string (required) |
| update | Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters. | string |


### UserArtifactSettings

| Name | Description | Value |
|-|-|-|
| configFileName | Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config". | string |
| packageFileName | Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name. | string |


### UserArtifactSource

| Name | Description | Value |
|-|-|-|
| defaultConfigurationLink | Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob. | string |
| mediaLink | Required. The mediaLink of the artifact, must be a readable storage page blob. | string (required) |


### GalleryTargetExtendedLocation

| Name | Description | Value |
|-|-|-|
| encryption | Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. | EncryptionImages |
| extendedLocation | The name of the extended location. | GalleryExtendedLocation |
| extendedLocationReplicaCount | The number of replicas of the Image Version to be created per extended location. This property is updatable. | int |
| name | The name of the region. | string |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS''Standard_ZRS' |


### EncryptionImages

| Name | Description | Value |
|-|-|-|
| dataDiskImages | A list of encryption specifications for data disk images. | DataDiskImageEncryption[] |
| osDiskImage | Contains encryption settings for an OS disk image. | OSDiskImageEncryption |


### DataDiskImageEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | A relative URI containing the resource ID of the disk encryption set. | string |
| lun | This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. | int (required) |


### OSDiskImageEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | A relative URI containing the resource ID of the disk encryption set. | string |
| securityProfile | This property specifies the security profile of an OS disk image. | OSDiskImageSecurityProfile |


### OSDiskImageSecurityProfile

| Name | Description | Value |
|-|-|-|
| confidentialVMEncryptionType | confidential VM encryption types | 'EncryptedVMGuestStateOnlyWithPmk''EncryptedWithCmk''EncryptedWithPmk' |
| secureVMDiskEncryptionSetId | secure VM disk encryption set id | string |


### GalleryExtendedLocation

| Name | Description | Value |
|-|-|-|
| name |  | string |
| type | It is type of the extended location. | 'EdgeZone''Unknown' |


### TargetRegion

| Name | Description | Value |
|-|-|-|
| encryption | Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. | EncryptionImages |
| excludeFromLatest | Contains the flag setting to hide an image when users specify version='latest' | bool |
| name | The name of the region. | string (required) |
| regionalReplicaCount | The number of replicas of the Image Version to be created per region. This property is updatable. | int |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |


### GalleryApplicationVersionSafetyProfile

| Name | Description | Value |
|-|-|-|
| allowDeletionOfReplicatedLocations | Indicates whether or not removing this Gallery Image Version from replicated regions is allowed. | bool |
## Microsoft.Compute/galleries/images@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/images@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      architecture = "string"
      description = "string"
      disallowed = {
        diskTypes = [
          "string"
        ]
      }
      endOfLifeDate = "string"
      eula = "string"
      features = [
        {
          name = "string"
          value = "string"
        }
      ]
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      osState = "string"
      osType = "string"
      privacyStatementUri = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        publisher = "string"
      }
      recommended = {
        memory = {
          max = int
          min = int
        }
        vCPUs = {
          max = int
          min = int
        }
      }
      releaseNoteUri = "string"
    }
  })
}

```

### galleries/images

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, hyphens, and periods.Start and end with alphanumeric. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:galleries |
| properties | Describes the properties of a gallery image definition. | GalleryImageProperties |


### GalleryImageProperties

| Name | Description | Value |
|-|-|-|
| architecture | The architecture of the image. Applicable to OS disks only. | 'Arm64''x64' |
| description | The description of this gallery image definition resource. This property is updatable. | string |
| disallowed | Describes the disallowed disk types. | Disallowed |
| endOfLifeDate | The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. | string |
| eula | The Eula agreement for the gallery image definition. | string |
| features | A list of gallery image features. | GalleryImageFeature[] |
| hyperVGeneration | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | 'V1''V2' |
| identifier | This is the gallery image definition identifier. | GalleryImageIdentifier(required) |
| osState | This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. | 'Generalized''Specialized' (required) |
| osType | This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image.Possible values are:WindowsLinux | 'Linux''Windows' (required) |
| privacyStatementUri | The privacy statement uri. | string |
| purchasePlan | Describes the gallery image definition purchase plan. This is used by marketplace images. | ImagePurchasePlan |
| recommended | The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. | RecommendedMachineConfiguration |
| releaseNoteUri | The release note uri. | string |


### Disallowed

| Name | Description | Value |
|-|-|-|
| diskTypes | A list of disk types. | string[] |


### GalleryImageFeature

| Name | Description | Value |
|-|-|-|
| name | The name of the gallery image feature. | string |
| value | The value of the gallery image feature. | string |


### GalleryImageIdentifier

| Name | Description | Value |
|-|-|-|
| offer | The name of the gallery image definition offer. | string (required) |
| publisher | The name of the gallery image definition publisher. | string (required) |
| sku | The name of the gallery image definition SKU. | string (required) |


### ImagePurchasePlan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string |
| product | The product ID. | string |
| publisher | The publisher ID. | string |


### RecommendedMachineConfiguration

| Name | Description | Value |
|-|-|-|
| memory | Describes the resource range. | ResourceRange |
| vCPUs | Describes the resource range. | ResourceRange |


### ResourceRange

| Name | Description | Value |
|-|-|-|
| max | The maximum number of the resource. | int |
| min | The minimum number of the resource. | int |
## Microsoft.Compute/galleries/images/versions@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/images/versions@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publishingProfile = {
        endOfLifeDate = "string"
        excludeFromLatest = bool
        replicaCount = int
        replicationMode = "string"
        storageAccountType = "string"
        targetExtendedLocations = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            extendedLocation = {
              name = "string"
              type = "string"
            }
            extendedLocationReplicaCount = int
            name = "string"
            storageAccountType = "string"
          }
        ]
        targetRegions = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            excludeFromLatest = bool
            name = "string"
            regionalReplicaCount = int
            storageAccountType = "string"
          }
        ]
      }
      safetyProfile = {
        allowDeletionOfReplicatedLocations = bool
      }
      storageProfile = {
        dataDiskImages = [
          {
            hostCaching = "string"
            lun = int
            source = {
              id = "string"
              storageAccountId = "string"
              uri = "string"
            }
          }
        ]
        osDiskImage = {
          hostCaching = "string"
          source = {
            id = "string"
            storageAccountId = "string"
            uri = "string"
          }
        }
        source = {
          communityGalleryImageId = "string"
          id = "string"
        }
      }
    }
  })
}

```

### galleries/images/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 32-bit integerValid characters:Numbers and periods.(Each segment is converted to an int32. So each segment has a max value of 2,147,483,647.) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:images |
| properties | Describes the properties of a gallery image version. | GalleryImageVersionProperties |


### GalleryImageVersionProperties

| Name | Description | Value |
|-|-|-|
| publishingProfile | The publishing profile of a gallery image Version. | GalleryImageVersionPublishingProfile |
| safetyProfile | This is the safety profile of the Gallery Image Version. | GalleryImageVersionSafetyProfile |
| storageProfile | This is the storage profile of a Gallery Image Version. | GalleryImageVersionStorageProfile(required) |


### GalleryImageVersionPublishingProfile

| Name | Description | Value |
|-|-|-|
| endOfLifeDate | The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable. | string |
| excludeFromLatest | If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. | bool |
| replicaCount | The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. | int |
| replicationMode | Optional parameter which specifies the mode to be used for replication. This property is not updatable. | 'Full''Shallow' |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |
| targetExtendedLocations | The target extended locations where the Image Version is going to be replicated to. This property is updatable. | GalleryTargetExtendedLocation[] |
| targetRegions | The target regions where the Image Version is going to be replicated to. This property is updatable. | TargetRegion[] |


### GalleryTargetExtendedLocation

| Name | Description | Value |
|-|-|-|
| encryption | Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. | EncryptionImages |
| extendedLocation | The name of the extended location. | GalleryExtendedLocation |
| extendedLocationReplicaCount | The number of replicas of the Image Version to be created per extended location. This property is updatable. | int |
| name | The name of the region. | string |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS''Standard_ZRS' |


### EncryptionImages

| Name | Description | Value |
|-|-|-|
| dataDiskImages | A list of encryption specifications for data disk images. | DataDiskImageEncryption[] |
| osDiskImage | Contains encryption settings for an OS disk image. | OSDiskImageEncryption |


### DataDiskImageEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | A relative URI containing the resource ID of the disk encryption set. | string |
| lun | This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. | int (required) |


### OSDiskImageEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | A relative URI containing the resource ID of the disk encryption set. | string |
| securityProfile | This property specifies the security profile of an OS disk image. | OSDiskImageSecurityProfile |


### OSDiskImageSecurityProfile

| Name | Description | Value |
|-|-|-|
| confidentialVMEncryptionType | confidential VM encryption types | 'EncryptedVMGuestStateOnlyWithPmk''EncryptedWithCmk''EncryptedWithPmk' |
| secureVMDiskEncryptionSetId | secure VM disk encryption set id | string |


### GalleryExtendedLocation

| Name | Description | Value |
|-|-|-|
| name |  | string |
| type | It is type of the extended location. | 'EdgeZone''Unknown' |


### TargetRegion

| Name | Description | Value |
|-|-|-|
| encryption | Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. | EncryptionImages |
| excludeFromLatest | Contains the flag setting to hide an image when users specify version='latest' | bool |
| name | The name of the region. | string (required) |
| regionalReplicaCount | The number of replicas of the Image Version to be created per region. This property is updatable. | int |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |


### GalleryImageVersionSafetyProfile

| Name | Description | Value |
|-|-|-|
| allowDeletionOfReplicatedLocations | Indicates whether or not removing this Gallery Image Version from replicated regions is allowed. | bool |


### GalleryImageVersionStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDiskImages | A list of data disk images. | GalleryDataDiskImage[] |
| osDiskImage | This is the OS disk image. | GalleryOSDiskImage |
| source | The source of the gallery artifact version. | GalleryArtifactVersionFullSource |


### GalleryDataDiskImage

| Name | Description | Value |
|-|-|-|
| hostCaching | The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' | 'None''ReadOnly''ReadWrite' |
| lun | This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. | int (required) |
| source | The source for the disk image. | GalleryDiskImageSource |


### GalleryDiskImageSource

| Name | Description | Value |
|-|-|-|
| id | The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource. | string |
| storageAccountId | The Storage Account Id that contains the vhd blob being used as a source for this artifact version. | string |
| uri | The uri of the gallery artifact version source. Currently used to specify vhd/blob source. | string |


### GalleryOSDiskImage

| Name | Description | Value |
|-|-|-|
| hostCaching | The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' | 'None''ReadOnly''ReadWrite' |
| source | The source for the disk image. | GalleryDiskImageSource |


### GalleryArtifactVersionFullSource

| Name | Description | Value |
|-|-|-|
| communityGalleryImageId | The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source. | string |
| id | The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource. | string |
## Microsoft.Compute/hostGroups@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/hostGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = {
        ultraSSDEnabled = bool
      }
      platformFaultDomainCount = int
      supportAutomaticPlacement = bool
    }
    zones = [
      "string"
    ]
  })
}

```

### hostGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Dedicated Host Group Properties. | DedicatedHostGroupProperties |
| zones | Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. | string[] |


### DedicatedHostGroupProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01. | DedicatedHostGroupPropertiesAdditionalCapabilities |
| platformFaultDomainCount | Number of fault domains that the host group can span. | int (required) |
| supportAutomaticPlacement | Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01. | bool |


### DedicatedHostGroupPropertiesAdditionalCapabilities

| Name | Description | Value |
|-|-|-|
| ultraSSDEnabled | The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to /azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature.Note:The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01. | bool |
## Microsoft.Compute/hostGroups/hosts@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/hostGroups/hosts@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoReplaceOnFailure = bool
      licenseType = "string"
      platformFaultDomain = int
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### hostGroups/hosts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values. | Sku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostGroups |
| properties | Properties of the dedicated host. | DedicatedHostProperties |


### DedicatedHostProperties

| Name | Description | Value |
|-|-|-|
| autoReplaceOnFailure | Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. | bool |
| licenseType | Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are:None,Windows_Server_Hybrid,Windows_Server_Perpetual.The default value is:None. | 'None''Windows_Server_Hybrid''Windows_Server_Perpetual' |
| platformFaultDomain | Fault domain of the dedicated host within a dedicated host group. | int |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |
## Microsoft.Compute/images@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/images@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hyperVGeneration = "string"
      sourceVirtualMachine = {
        id = "string"
      }
      storageProfile = {
        dataDisks = [
          {
            blobUri = "string"
            caching = "string"
            diskEncryptionSet = {
              id = "string"
            }
            diskSizeGB = int
            lun = int
            managedDisk = {
              id = "string"
            }
            snapshot = {
              id = "string"
            }
            storageAccountType = "string"
          }
        ]
        osDisk = {
          blobUri = "string"
          caching = "string"
          diskEncryptionSet = {
            id = "string"
          }
          diskSizeGB = int
          managedDisk = {
            id = "string"
          }
          osState = "string"
          osType = "string"
          snapshot = {
            id = "string"
          }
          storageAccountType = "string"
        }
        zoneResilient = bool
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### images

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the Image. | ExtendedLocation |
| properties | Describes the properties of an Image. | ImageProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### ImageProperties

| Name | Description | Value |
|-|-|-|
| hyperVGeneration | Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource. | 'V1''V2' |
| sourceVirtualMachine | The source virtual machine from which Image is created. | SubResource |
| storageProfile | Specifies the storage settings for the virtual machine disks. | ImageStorageProfile |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### ImageStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Specifies the parameters that are used to add a data disk to a virtual machine.For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | ImageDataDisk[] |
| osDisk | Specifies information about the operating system disk used by the virtual machine.For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | ImageOSDisk |
| zoneResilient | Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). | bool |


### ImageDataDisk

| Name | Description | Value |
|-|-|-|
| blobUri | The Virtual Hard Disk. | string |
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed image disk. | DiskEncryptionSetParameters |
| diskSizeGB | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB. | int |
| lun | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | int (required) |
| managedDisk | The managedDisk. | SubResource |
| snapshot | The snapshot. | SubResource |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |


### DiskEncryptionSetParameters

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### ImageOSDisk

| Name | Description | Value |
|-|-|-|
| blobUri | The Virtual Hard Disk. | string |
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed image disk. | DiskEncryptionSetParameters |
| diskSizeGB | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB. | int |
| managedDisk | The managedDisk. | SubResource |
| osState | The OS State. For managed images, use Generalized. | 'Generalized''Specialized' (required) |
| osType | This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are:Windows,Linux. | 'Linux''Windows' (required) |
| snapshot | The snapshot. | SubResource |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |
## Microsoft.Compute/proximityPlacementGroups@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/proximityPlacementGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      colocationStatus = {
        code = "string"
        displayStatus = "string"
        level = "string"
        message = "string"
        time = "string"
      }
      intent = {
        vmSizes = [
          "string"
        ]
      }
      proximityPlacementGroupType = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

### proximityPlacementGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Describes the properties of a Proximity Placement Group. | ProximityPlacementGroupProperties |
| zones | Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created. | string[] |


### ProximityPlacementGroupProperties

| Name | Description | Value |
|-|-|-|
| colocationStatus | Describes colocation status of the Proximity Placement Group. | InstanceViewStatus |
| intent | Specifies the user intent of the proximity placement group. | ProximityPlacementGroupPropertiesIntent |
| proximityPlacementGroupType | Specifies the type of the proximity placement group. Possible values are:Standard: Co-locate resources within an Azure region or Availability Zone.Ultra: For future use. | 'Standard''Ultra' |


### InstanceViewStatus

| Name | Description | Value |
|-|-|-|
| code | The status code. | string |
| displayStatus | The short localizable label for the status. | string |
| level | The level code. | 'Error''Info''Warning' |
| message | The detailed status message, including for alerts and error messages. | string |
| time | The time of the status. | string |


### ProximityPlacementGroupPropertiesIntent

| Name | Description | Value |
|-|-|-|
| vmSizes | Specifies possible sizes of virtual machines that can be created in the proximity placement group. | string[] |
## Microsoft.Compute/restorePointCollections@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/restorePointCollections@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      source = {
        id = "string"
      }
    }
  })
}

```

### restorePointCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The restore point collection properties. | RestorePointCollectionProperties |


### RestorePointCollectionProperties

| Name | Description | Value |
|-|-|-|
| source | The properties of the source resource that this restore point collection is created from. | RestorePointCollectionSourceProperties |


### RestorePointCollectionSourceProperties

| Name | Description | Value |
|-|-|-|
| id | Resource Id of the source resource used to create this restore point collection | string |
## Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consistencyMode = "string"
      excludeDisks = [
        {
          id = "string"
        }
      ]
      sourceMetadata = {
        storageProfile = {
          dataDisks = [
            {
              caching = "string"
              diskRestorePoint = {
                encryption = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  type = "string"
                }
                sourceDiskRestorePoint = {
                  id = "string"
                }
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
            }
          ]
          osDisk = {
            caching = "string"
            diskRestorePoint = {
              encryption = {
                diskEncryptionSet = {
                  id = "string"
                }
                type = "string"
              }
              sourceDiskRestorePoint = {
                id = "string"
              }
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
          }
        }
      }
      sourceRestorePoint = {
        id = "string"
      }
      timeCreated = "string"
    }
  })
}

```

### restorePointCollections/restorePoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:restorePointCollections |
| properties | The restore point properties. | RestorePointProperties |


### RestorePointProperties

| Name | Description | Value |
|-|-|-|
| consistencyMode | ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer tohttps://aka.ms/RestorePointsfor more details. | 'ApplicationConsistent''CrashConsistent''FileSystemConsistent' |
| excludeDisks | List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included. | ApiEntityReference[] |
| sourceMetadata | Gets the details of the VM captured at the time of the restore point creation. | RestorePointSourceMetadata |
| sourceRestorePoint | Resource Id of the source restore point from which a copy needs to be created. | ApiEntityReference |
| timeCreated | Gets the creation time of the restore point. | string |


### ApiEntityReference

| Name | Description | Value |
|-|-|-|
| id | The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | string |


### RestorePointSourceMetadata

| Name | Description | Value |
|-|-|-|
| storageProfile | Gets the storage profile. | RestorePointSourceVMStorageProfile |


### RestorePointSourceVMStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Gets the data disks of the VM captured at the time of the restore point creation. | RestorePointSourceVMDataDisk[] |
| osDisk | Gets the OS disk of the VM captured at the time of the restore point creation. | RestorePointSourceVmosDisk |


### RestorePointSourceVMDataDisk

| Name | Description | Value |
|-|-|-|
| caching | Gets the caching type. | 'None''ReadOnly''ReadWrite' |
| diskRestorePoint | Contains Disk Restore Point properties. | DiskRestorePointAttributes |
| managedDisk | Contains the managed disk details. | ManagedDiskParameters |


### DiskRestorePointAttributes

| Name | Description | Value |
|-|-|-|
| encryption | Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point. | RestorePointEncryption |
| sourceDiskRestorePoint | Resource Id of the source disk restore point. | ApiEntityReference |


### RestorePointEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Describes the parameter of customer managed disk encryption set resource id that can be specified for disk.Note:The disk encryption set resource id can only be specified for managed disk. Please referhttps://aka.ms/mdssewithcmkoverviewfor more details. | DiskEncryptionSetParameters |
| type | The type of key used to encrypt the data of the disk restore point. | 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey' |


### DiskEncryptionSetParameters

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### ManagedDiskParameters

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk. | DiskEncryptionSetParameters |
| id | Resource Id | string |
| securityProfile | Specifies the security profile for the managed disk. | VMDiskSecurityProfile |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |


### VMDiskSecurityProfile

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob. | DiskEncryptionSetParameters |
| securityEncryptionType | Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob.Note:It can be set for only Confidential VMs. | 'DiskWithVMGuestState''VMGuestStateOnly' |


### RestorePointSourceVmosDisk

| Name | Description | Value |
|-|-|-|
| caching | Gets the caching type. | 'None''ReadOnly''ReadWrite' |
| diskRestorePoint | Contains Disk Restore Point properties. | DiskRestorePointAttributes |
| managedDisk | Gets the managed disk details | ManagedDiskParameters |
## Microsoft.Compute/snapshots@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/snapshots@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      completionPercent = int
      copyCompletionError = {
        errorCode = "CopySourceNotFound"
        errorMessage = "string"
      }
      creationData = {
        createOption = "string"
        galleryImageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        logicalSectorSize = int
        performancePlus = bool
        securityDataUri = "string"
        sourceResourceId = "string"
        sourceUri = "string"
        storageAccountId = "string"
        uploadSizeBytes = int
      }
      dataAccessAuthMode = "string"
      diskAccessId = "string"
      diskSizeGB = int
      encryption = {
        diskEncryptionSetId = "string"
        type = "string"
      }
      encryptionSettingsCollection = {
        enabled = bool
        encryptionSettings = [
          {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
        ]
        encryptionSettingsVersion = "string"
      }
      hyperVGeneration = "string"
      incremental = bool
      networkAccessPolicy = "string"
      osType = "string"
      publicNetworkAccess = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      securityProfile = {
        secureVMDiskEncryptionSetId = "string"
        securityType = "string"
      }
      supportedCapabilities = {
        acceleratedNetwork = bool
        architecture = "string"
        diskControllerTypes = "string"
      }
      supportsHibernation = bool
    }
    sku = {
      name = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### snapshots

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot | SnapshotSku |
| extendedLocation | The extended location where the snapshot will be created. Extended location cannot be changed. | ExtendedLocation |
| properties | Snapshot resource properties. | SnapshotProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### SnapshotProperties

| Name | Description | Value |
|-|-|-|
| completionPercent | Percentage complete for the background copy when a resource is created via the CopyStart operation. | int |
| copyCompletionError | Indicates the error details if the background copy of a resource created via the CopyStart operation fails. | CopyCompletionError |
| creationData | Disk source information. CreationData information cannot be changed after the disk has been created. | CreationData(required) |
| dataAccessAuthMode | Additional authentication requirements when exporting or uploading to a disk or snapshot. | 'AzureActiveDirectory''None' |
| diskAccessId | ARM id of the DiskAccess resource for using private endpoints on disks. | string |
| diskSizeGB | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. | int |
| encryption | Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. | Encryption |
| encryptionSettingsCollection | Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. | EncryptionSettingsCollection |
| hyperVGeneration | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | 'V1''V2' |
| incremental | Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. | bool |
| networkAccessPolicy | Policy for accessing the disk via network. | 'AllowAll''AllowPrivate''DenyAll' |
| osType | The Operating System type. | 'Linux''Windows' |
| publicNetworkAccess | Policy for controlling export on the disk. | 'Disabled''Enabled' |
| purchasePlan | Purchase plan information for the image from which the source disk for the snapshot was originally created. | PurchasePlan |
| securityProfile | Contains the security related information for the resource. | DiskSecurityProfile |
| supportedCapabilities | List of supported capabilities for the image from which the source disk from the snapshot was originally created. | SupportedCapabilities |
| supportsHibernation | Indicates the OS on a snapshot supports hibernation. | bool |


### CopyCompletionError

| Name | Description | Value |
|-|-|-|
| errorCode | Indicates the error code if the background copy of a resource created via the CopyStart operation fails. | 'CopySourceNotFound' (required) |
| errorMessage | Indicates the error message if the background copy of a resource created via the CopyStart operation fails. | string (required) |


### CreationData

| Name | Description | Value |
|-|-|-|
| createOption | This enumerates the possible sources of a disk's creation. | 'Attach''Copy''CopyStart''Empty''FromImage''Import''ImportSecure''Restore''Upload''UploadPreparedSecure' (required) |
| galleryImageReference | Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk. | ImageDiskReference |
| imageReference | Disk source information for PIR or user images. | ImageDiskReference |
| logicalSectorSize | Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. | int |
| performancePlus | Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled. | bool |
| securityDataUri | If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state. | string |
| sourceResourceId | If createOption is Copy, this is the ARM id of the source snapshot or disk. | string |
| sourceUri | If createOption is Import, this is the URI of a blob to be imported into a managed disk. | string |
| storageAccountId | Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. | string |
| uploadSizeBytes | If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). | int |


### ImageDiskReference

| Name | Description | Value |
|-|-|-|
| communityGalleryImageId | A relative uri containing a community Azure Compute Gallery image reference. | string |
| id | A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference. | string |
| lun | If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. | int |
| sharedGalleryImageId | A relative uri containing a direct shared Azure Compute Gallery image reference. | string |


### Encryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | ResourceId of the disk encryption set to use for enabling encryption at rest. | string |
| type | The type of key used to encrypt the data of the disk. | 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey' |


### EncryptionSettingsCollection

| Name | Description | Value |
|-|-|-|
| enabled | Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. | bool (required) |
| encryptionSettings | A collection of encryption settings, one for each disk volume. | EncryptionSettingsElement[] |
| encryptionSettingsVersion | Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. | string |


### EncryptionSettingsElement

| Name | Description | Value |
|-|-|-|
| diskEncryptionKey | Key Vault Secret Url and vault id of the disk encryption key | KeyVaultAndSecretReference |
| keyEncryptionKey | Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key. | KeyVaultAndKeyReference |


### KeyVaultAndSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | Url pointing to a key or secret in KeyVault | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret | SourceVault(required) |


### SourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### KeyVaultAndKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | Url pointing to a key or secret in KeyVault | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret | SourceVault(required) |


### PurchasePlan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string (required) |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string (required) |
| promotionCode | The Offer Promotion Code. | string |
| publisher | The publisher ID. | string (required) |


### DiskSecurityProfile

| Name | Description | Value |
|-|-|-|
| secureVMDiskEncryptionSetId | ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key | string |
| securityType | Specifies the SecurityType of the VM. Applicable for OS disks only. | 'ConfidentialVM_DiskEncryptedWithCustomerKey''ConfidentialVM_DiskEncryptedWithPlatformKey''ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey''TrustedLaunch' |


### SupportedCapabilities

| Name | Description | Value |
|-|-|-|
| acceleratedNetwork | True if the image from which the OS disk is created supports accelerated networking. | bool |
| architecture | CPU architecture supported by an OS disk. | 'Arm64''x64' |
| diskControllerTypes | The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI. | string |


### SnapshotSku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |
## Microsoft.Compute/sshPublicKeys@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/sshPublicKeys@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicKey = "string"
    }
  })
}

```

### sshPublicKeys

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the SSH public key. | SshPublicKeyResourceProperties |


### SshPublicKeyResourceProperties

| Name | Description | Value |
|-|-|-|
| publicKey | SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. | string |
## Microsoft.Compute/virtualMachines@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachines@2023-03-01"
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
      applicationProfile = {
        galleryApplications = [
          {
            configurationReference = "string"
            enableAutomaticUpgrade = bool
            order = int
            packageReferenceId = "string"
            tags = "string"
            treatFailureAsDeploymentFailure = bool
          }
        ]
      }
      availabilitySet = {
        id = "string"
      }
      billingProfile = {
        maxPrice = "decimal-as-string"
      }
      capacityReservation = {
        capacityReservationGroup = {
          id = "string"
        }
      }
      diagnosticsProfile = {
        bootDiagnostics = {
          enabled = bool
          storageUri = "string"
        }
      }
      evictionPolicy = "string"
      extensionsTimeBudget = "string"
      hardwareProfile = {
        vmSize = "string"
        vmSizeProperties = {
          vCPUsAvailable = int
          vCPUsPerCore = int
        }
      }
      host = {
        id = "string"
      }
      hostGroup = {
        id = "string"
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
      platformFaultDomain = int
      priority = "string"
      proximityPlacementGroup = {
        id = "string"
      }
      scheduledEventsProfile = {
        osImageNotificationProfile = {
          enable = bool
          notBeforeTimeout = "string"
        }
        terminateNotificationProfile = {
          enable = bool
          notBeforeTimeout = "string"
        }
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
      virtualMachineScaleSet = {
        id = "string"
      }
    }
    zones = [
      "string"
    ]
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
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

### virtualMachines

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-15 (Windows)1-64 (Linux)Valid characters:Can't use spaces, control characters, or these characters:~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ |  ; : . ' " , < > / ?Windows VMs can't include period or end with hyphen.Linux VMs can't end with period or hyphen. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the Virtual Machine. | ExtendedLocation |
| identity | The identity of the virtual machine, if configured. | VirtualMachineIdentity |
| plan | Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then clickWant to deploy programmatically, Get Started ->. Enter any required information and then clickSave. | Plan |
| properties | Describes the properties of a Virtual Machine. | VirtualMachineProperties |
| zones | The virtual machine zones. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


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


### VirtualMachineProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | Specifies additional capabilities enabled or disabled on the virtual machine. | AdditionalCapabilities |
| applicationProfile | Specifies the gallery applications that should be made available to the VM/VMSS. | ApplicationProfile |
| availabilitySet | Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, seeAvailability sets overview. For more information on Azure planned maintenance, seeMaintenance and updates for Virtual Machines in Azure. Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference. | SubResource |
| billingProfile | Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01. | BillingProfile |
| capacityReservation | Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01. | CapacityReservationProfile |
| diagnosticsProfile | Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. | DiagnosticsProfile |
| evictionPolicy | Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. | 'Deallocate''Delete' |
| extensionsTimeBudget | Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01. | string |
| hardwareProfile | Specifies the hardware settings for the virtual machine. | HardwareProfile |
| host | Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01. | SubResource |
| hostGroup | Specifies information about the dedicated host group that the virtual machine resides in.Note:User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01. | SubResource |
| licenseType | Specifies that the image or disk that is being used was licensed on-premises.Possible values for Windows Server operating system are:Windows_ClientWindows_ServerPossible values for Linux Server operating system are:RHEL_BYOS (for RHEL)SLES_BYOS (for SUSE)For more information, seeAzure Hybrid Use Benefit for Windows ServerAzure Hybrid Use Benefit for Linux ServerMinimum api-version: 2015-06-15 | string |
| networkProfile | Specifies the network interfaces of the virtual machine. | NetworkProfile |
| osProfile | Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned. | OSProfile |
| platformFaultDomain | Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum apiâversion: 2020â12â01. | int |
| priority | Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01 | 'Low''Regular''Spot' |
| proximityPlacementGroup | Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01. | SubResource |
| scheduledEventsProfile | Specifies Scheduled Event related configurations. | ScheduledEventsProfile |
| securityProfile | Specifies the Security related profile settings for the virtual machine. | SecurityProfile |
| storageProfile | Specifies the storage settings for the virtual machine disks. | StorageProfile |
| userData | UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01. | string |
| virtualMachineScaleSet | Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum apiâversion: 2019â03â01. | SubResource |


### AdditionalCapabilities

| Name | Description | Value |
|-|-|-|
| hibernationEnabled | The flag that enables or disables hibernation capability on the VM. | bool |
| ultraSSDEnabled | The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. | bool |


### ApplicationProfile

| Name | Description | Value |
|-|-|-|
| galleryApplications | Specifies the gallery applications that should be made available to the VM/VMSS | VMGalleryApplication[] |


### VMGalleryApplication

| Name | Description | Value |
|-|-|-|
| configurationReference | Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided | string |
| enableAutomaticUpgrade | If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS | bool |
| order | Optional, Specifies the order in which the packages have to be installed | int |
| packageReferenceId | Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version} | string (required) |
| tags | Optional, Specifies a passthrough value for more generic context. | string |
| treatFailureAsDeploymentFailure | Optional, If true, any failure for any operation in the VmApplication will fail the deployment | bool |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### BillingProfile

| Name | Description | Value |
|-|-|-|
| maxPrice | Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars.This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price.The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS.Possible values are:- Any decimal value greater than zero. Example: 0.01538-1 â indicates default price to be up-to on-demand.You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you.Minimum api-version: 2019-03-01. To specify a decimal value, use thejson()function. | int or json decimal |


### CapacityReservationProfile

| Name | Description | Value |
|-|-|-|
| capacityReservationGroup | Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer tohttps://aka.ms/CapacityReservationfor more details. | SubResource |


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


### ScheduledEventsProfile

| Name | Description | Value |
|-|-|-|
| osImageNotificationProfile | Specifies OS Image Scheduled Event related configurations. | OSImageNotificationProfile |
| terminateNotificationProfile | Specifies Terminate Scheduled Event related configurations. | TerminateNotificationProfile |


### OSImageNotificationProfile

| Name | Description | Value |
|-|-|-|
| enable | Specifies whether the OS Image Scheduled event is enabled or disabled. | bool |
| notBeforeTimeout | Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M) | string |


### TerminateNotificationProfile

| Name | Description | Value |
|-|-|-|
| enable | Specifies whether the Terminate Scheduled event is enabled or disabled. | bool |
| notBeforeTimeout | Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) | string |


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
## Microsoft.Compute/virtualMachines/extensions@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachines/extensions@2023-03-01"
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
        name = "string"
        statuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        substatuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        type = "string"
        typeHandlerVersion = "string"
      }
      protectedSettingsFromKeyVault = {
        secretUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      provisionAfterExtensions = [
        "string"
      ]
      publisher = "string"
      suppressFailures = bool
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
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes the properties of a Virtual Machine Extension. | VirtualMachineExtensionProperties |


### VirtualMachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| instanceView | The virtual machine extension instance view. | VirtualMachineExtensionInstanceView |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | The extensions protected settings that are passed by reference, and consumed from key vault | KeyVaultSecretReference |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| suppressFailures | Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. | bool |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### VirtualMachineExtensionInstanceView

| Name | Description | Value |
|-|-|-|
| name | The virtual machine extension name. | string |
| statuses | The resource status information. | InstanceViewStatus[] |
| substatuses | The resource status information. | InstanceViewStatus[] |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### InstanceViewStatus

| Name | Description | Value |
|-|-|-|
| code | The status code. | string |
| displayStatus | The short localizable label for the status. | string |
| level | The level code. | 'Error''Info''Warning' |
| message | The detailed status message, including for alerts and error messages. | string |
| time | The time of the status. | string |


### KeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | The URL referencing a secret in a Key Vault. | string (required) |
| sourceVault | The relative URL of the Key Vault containing the secret. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
## Microsoft.Compute/virtualMachines/runCommands@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachines/runCommands@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asyncExecution = bool
      errorBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      errorBlobUri = "string"
      outputBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      outputBlobUri = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      protectedParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      runAsPassword = "string"
      runAsUser = "string"
      source = {
        commandId = "string"
        script = "string"
        scriptUri = "string"
        scriptUriManagedIdentity = {
          clientId = "string"
          objectId = "string"
        }
      }
      timeoutInSeconds = int
      treatFailureAsDeploymentFailure = bool
    }
  })
}

```

### virtualMachines/runCommands

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes the properties of a Virtual Machine run command. | VirtualMachineRunCommandProperties |


### VirtualMachineRunCommandProperties

| Name | Description | Value |
|-|-|-|
| asyncExecution | Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete. | bool |
| errorBlobManagedIdentity | User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged | RunCommandManagedIdentity |
| errorBlobUri | Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter. | string |
| outputBlobManagedIdentity | User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged | RunCommandManagedIdentity |
| outputBlobUri | Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. | string |
| parameters | The parameters used by the script. | RunCommandInputParameter[] |
| protectedParameters | The parameters used by the script. | RunCommandInputParameter[] |
| runAsPassword | Specifies the user account password on the VM when executing the run command. | string |
| runAsUser | Specifies the user account on the VM when executing the run command. | string |
| source | The source of the run command script. | VirtualMachineRunCommandScriptSource |
| timeoutInSeconds | The timeout in seconds to execute the run command. | int |
| treatFailureAsDeploymentFailure | Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error:https://aka.ms/runcommandmanaged#get-execution-status-and-results | bool |


### RunCommandManagedIdentity

| Name | Description | Value |
|-|-|-|
| clientId | Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided. | string |
| objectId | Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided. | string |


### RunCommandInputParameter

| Name | Description | Value |
|-|-|-|
| name | The run command parameter name. | string (required) |
| value | The run command parameter value. | string (required) |


### VirtualMachineRunCommandScriptSource

| Name | Description | Value |
|-|-|-|
| commandId | Specifies a commandId of predefined built-in script. | string |
| script | Specifies the script content to be executed on the VM. | string |
| scriptUri | Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI. | string |
| scriptUriManagedIdentity | User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged. | RunCommandManagedIdentity |
## Microsoft.Compute/virtualMachineScaleSets@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets@2023-03-01"
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
      automaticRepairsPolicy = {
        enabled = bool
        gracePeriod = "string"
        repairAction = "string"
      }
      constrainedMaximumCapacity = bool
      doNotRunExtensionsOnOverprovisionedVMs = bool
      hostGroup = {
        id = "string"
      }
      orchestrationMode = "string"
      overprovision = bool
      platformFaultDomainCount = int
      priorityMixPolicy = {
        baseRegularPriorityCount = int
        regularPriorityPercentageAboveBase = int
      }
      proximityPlacementGroup = {
        id = "string"
      }
      scaleInPolicy = {
        forceDeletion = bool
        rules = [
          "string"
        ]
      }
      singlePlacementGroup = bool
      spotRestorePolicy = {
        enabled = bool
        restoreTimeout = "string"
      }
      upgradePolicy = {
        automaticOSUpgradePolicy = {
          disableAutomaticRollback = bool
          enableAutomaticOSUpgrade = bool
          useRollingUpgradePolicy = bool
        }
        mode = "string"
        rollingUpgradePolicy = {
          enableCrossZoneUpgrade = bool
          maxBatchInstancePercent = int
          maxSurge = bool
          maxUnhealthyInstancePercent = int
          maxUnhealthyUpgradedInstancePercent = int
          pauseTimeBetweenBatches = "string"
          prioritizeUnhealthyInstances = bool
          rollbackFailedInstancesOnPolicyBreach = bool
        }
      }
      virtualMachineProfile = {
        applicationProfile = {
          galleryApplications = [
            {
              configurationReference = "string"
              enableAutomaticUpgrade = bool
              order = int
              packageReferenceId = "string"
              tags = "string"
              treatFailureAsDeploymentFailure = bool
            }
          ]
        }
        billingProfile = {
          maxPrice = "decimal-as-string"
        }
        capacityReservation = {
          capacityReservationGroup = {
            id = "string"
          }
        }
        diagnosticsProfile = {
          bootDiagnostics = {
            enabled = bool
            storageUri = "string"
          }
        }
        evictionPolicy = "string"
        extensionProfile = {
          extensions = [
            {
              name = "string"
              properties = {
                autoUpgradeMinorVersion = bool
                enableAutomaticUpgrade = bool
                forceUpdateTag = "string"
                protectedSettingsFromKeyVault = {
                  secretUrl = "string"
                  sourceVault = {
                    id = "string"
                  }
                }
                provisionAfterExtensions = [
                  "string"
                ]
                publisher = "string"
                suppressFailures = bool
                type = "string"
                typeHandlerVersion = "string"
              }
            }
          ]
          extensionsTimeBudget = "string"
        }
        hardwareProfile = {
          vmSizeProperties = {
            vCPUsAvailable = int
            vCPUsPerCore = int
          }
        }
        licenseType = "string"
        networkProfile = {
          healthProbe = {
            id = "string"
          }
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
          computerNamePrefix = "string"
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
        priority = "string"
        scheduledEventsProfile = {
          osImageNotificationProfile = {
            enable = bool
            notBeforeTimeout = "string"
          }
          terminateNotificationProfile = {
            enable = bool
            notBeforeTimeout = "string"
          }
        }
        securityPostureReference = {
          excludeExtensions = [
            {
              location = "string"
              properties = {
                autoUpgradeMinorVersion = bool
                enableAutomaticUpgrade = bool
                forceUpdateTag = "string"
                instanceView = {
                  name = "string"
                  statuses = [
                    {
                      code = "string"
                      displayStatus = "string"
                      level = "string"
                      message = "string"
                      time = "string"
                    }
                  ]
                  substatuses = [
                    {
                      code = "string"
                      displayStatus = "string"
                      level = "string"
                      message = "string"
                      time = "string"
                    }
                  ]
                  type = "string"
                  typeHandlerVersion = "string"
                }
                protectedSettingsFromKeyVault = {
                  secretUrl = "string"
                  sourceVault = {
                    id = "string"
                  }
                }
                provisionAfterExtensions = [
                  "string"
                ]
                publisher = "string"
                suppressFailures = bool
                type = "string"
                typeHandlerVersion = "string"
              }
              tags = {}
            }
          ]
          id = "string"
        }
        securityProfile = {
          encryptionAtHost = bool
          securityType = "string"
          uefiSettings = {
            secureBootEnabled = bool
            vTpmEnabled = bool
          }
        }
        serviceArtifactReference = {
          id = "string"
        }
        storageProfile = {
          dataDisks = [
            {
              caching = "string"
              createOption = "string"
              deleteOption = "string"
              diskIOPSReadWrite = int
              diskMBpsReadWrite = int
              diskSizeGB = int
              lun = int
              managedDisk = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityProfile = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  securityEncryptionType = "string"
                }
                storageAccountType = "string"
              }
              name = "string"
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
            image = {
              uri = "string"
            }
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
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
            vhdContainers = [
              "string"
            ]
            writeAcceleratorEnabled = bool
          }
        }
        userData = "string"
      }
      zoneBalance = bool
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
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

### virtualMachineScaleSets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-15 (Windows)1-64 (Linux)Valid characters:Can't use spaces, control characters, or these characters:~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ |  ; : . ' " , < > / ?Can't start with underscore. Can't end with period or hyphen. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The virtual machine scale set sku. | Sku |
| extendedLocation | The extended location of the Virtual Machine Scale Set. | ExtendedLocation |
| identity | The identity of the virtual machine scale set, if configured. | VirtualMachineScaleSetIdentity |
| plan | Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then clickWant to deploy programmatically, Get Started ->. Enter any required information and then clickSave. | Plan |
| properties | Describes the properties of a Virtual Machine Scale Set. | VirtualMachineScaleSetProperties |
| zones | The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### VirtualMachineScaleSetIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### Plan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string |
| promotionCode | The promotion code. | string |
| publisher | The publisher ID. | string |


### VirtualMachineScaleSetProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. | AdditionalCapabilities |
| automaticRepairsPolicy | Policy for automatic repairs. | AutomaticRepairsPolicy |
| constrainedMaximumCapacity | Optional property which must either be set to True or omitted. | bool |
| doNotRunExtensionsOnOverprovisionedVMs | When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. | bool |
| hostGroup | Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01. | SubResource |
| orchestrationMode | Specifies the orchestration mode for the virtual machine scale set. | 'Flexible''Uniform' |
| overprovision | Specifies whether the Virtual Machine Scale Set should be overprovisioned. | bool |
| platformFaultDomainCount | Fault Domain count for each placement group. | int |
| priorityMixPolicy | Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance. | PriorityMixPolicy |
| proximityPlacementGroup | Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01. | SubResource |
| scaleInPolicy | Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set. | ScaleInPolicy |
| singlePlacementGroup | When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. | bool |
| spotRestorePolicy | Specifies the Spot Restore properties for the virtual machine scale set. | SpotRestorePolicy |
| upgradePolicy | The upgrade policy. | UpgradePolicy |
| virtualMachineProfile | The virtual machine profile. | VirtualMachineScaleSetVMProfile |
| zoneBalance | Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set. | bool |


### AdditionalCapabilities

| Name | Description | Value |
|-|-|-|
| hibernationEnabled | The flag that enables or disables hibernation capability on the VM. | bool |
| ultraSSDEnabled | The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. | bool |


### AutomaticRepairsPolicy

| Name | Description | Value |
|-|-|-|
| enabled | Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false. | bool |
| gracePeriod | The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 10 minutes (PT10M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M). | string |
| repairAction | Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace. | 'Reimage''Replace''Restart' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### PriorityMixPolicy

| Name | Description | Value |
|-|-|-|
| baseRegularPriorityCount | The base number of regular priority VMs that will be created in this scale set as it scales out. | int |
| regularPriorityPercentageAboveBase | The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority. | int |


### ScaleInPolicy

| Name | Description | Value |
|-|-|-|
| forceDeletion | This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview) | bool |
| rules | The rules to be followed when scaling-in a virtual machine scale set.Possible values are:DefaultWhen a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in.OldestVMWhen a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal.NewestVMWhen a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. | String array containing any of:'Default''NewestVM''OldestVM' |


### SpotRestorePolicy

| Name | Description | Value |
|-|-|-|
| enabled | Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints | bool |
| restoreTimeout | Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances | string |


### UpgradePolicy

| Name | Description | Value |
|-|-|-|
| automaticOSUpgradePolicy | Configuration parameters used for performing automatic OS Upgrade. | AutomaticOSUpgradePolicy |
| mode | Specifies the mode of an upgrade to virtual machines in the scale set.Possible values are:Manual- You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.Automatic- All virtual machines in the scale set are  automatically updated at the same time. | 'Automatic''Manual''Rolling' |
| rollingUpgradePolicy | The configuration parameters used while performing a rolling upgrade. | RollingUpgradePolicy |


### AutomaticOSUpgradePolicy

| Name | Description | Value |
|-|-|-|
| disableAutomaticRollback | Whether OS image rollback feature should be disabled. Default value is false. | bool |
| enableAutomaticOSUpgrade | Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets,enableAutomaticUpdatesis automatically set to false and cannot be set to true. | bool |
| useRollingUpgradePolicy | Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Default value is false. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS. | bool |


### RollingUpgradePolicy

| Name | Description | Value |
|-|-|-|
| enableCrossZoneUpgrade | Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size. | bool |
| maxBatchInstancePercent | The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%. | int |
| maxSurge | Create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines. Existing virtual machines will be deleted once the new virtual machines are created for each batch. | bool |
| maxUnhealthyInstancePercent | The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%. | int |
| maxUnhealthyUpgradedInstancePercent | The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%. | int |
| pauseTimeBetweenBatches | The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S). | string |
| prioritizeUnhealthyInstances | Upgrade all unhealthy instances in a scale set before any healthy instances. | bool |
| rollbackFailedInstancesOnPolicyBreach | Rollback failed instances to previous model if the Rolling Upgrade policy is violated. | bool |


### VirtualMachineScaleSetVMProfile

| Name | Description | Value |
|-|-|-|
| applicationProfile | Specifies the gallery applications that should be made available to the VM/VMSS | ApplicationProfile |
| billingProfile | Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01. | BillingProfile |
| capacityReservation | Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01. | CapacityReservationProfile |
| diagnosticsProfile | Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. | DiagnosticsProfile |
| evictionPolicy | Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. | 'Deallocate''Delete' |
| extensionProfile | Specifies a collection of settings for extensions installed on virtual machines in the scale set. | VirtualMachineScaleSetExtensionProfile |
| hardwareProfile | Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01. | VirtualMachineScaleSetHardwareProfile |
| licenseType | Specifies that the image or disk that is being used was licensed on-premises.Possible values for Windows Server operating system are:Windows_ClientWindows_ServerPossible values for Linux Server operating system are:RHEL_BYOS (for RHEL)SLES_BYOS (for SUSE)For more information, seeAzure Hybrid Use Benefit for Windows ServerAzure Hybrid Use Benefit for Linux ServerMinimum api-version: 2015-06-15 | string |
| networkProfile | Specifies properties of the network interfaces of the virtual machines in the scale set. | VirtualMachineScaleSetNetworkProfile |
| osProfile | Specifies the operating system settings for the virtual machines in the scale set. | VirtualMachineScaleSetOSProfile |
| priority | Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview. | 'Low''Regular''Spot' |
| scheduledEventsProfile | Specifies Scheduled Event related configurations. | ScheduledEventsProfile |
| securityPostureReference | Specifies the security posture to be used for all virtual machines in the scale set. Minimum api-version: 2023-03-01 | SecurityPostureReference |
| securityProfile | Specifies the Security related profile settings for the virtual machines in the scale set. | SecurityProfile |
| serviceArtifactReference | Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01 | ServiceArtifactReference |
| storageProfile | Specifies the storage settings for the virtual machine disks. | VirtualMachineScaleSetStorageProfile |
| userData | UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01. | string |


### ApplicationProfile

| Name | Description | Value |
|-|-|-|
| galleryApplications | Specifies the gallery applications that should be made available to the VM/VMSS | VMGalleryApplication[] |


### VMGalleryApplication

| Name | Description | Value |
|-|-|-|
| configurationReference | Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided | string |
| enableAutomaticUpgrade | If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS | bool |
| order | Optional, Specifies the order in which the packages have to be installed | int |
| packageReferenceId | Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version} | string (required) |
| tags | Optional, Specifies a passthrough value for more generic context. | string |
| treatFailureAsDeploymentFailure | Optional, If true, any failure for any operation in the VmApplication will fail the deployment | bool |


### BillingProfile

| Name | Description | Value |
|-|-|-|
| maxPrice | Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars.This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price.The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS.Possible values are:- Any decimal value greater than zero. Example: 0.01538-1 â indicates default price to be up-to on-demand.You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you.Minimum api-version: 2019-03-01. To specify a decimal value, use thejson()function. | int or json decimal |


### CapacityReservationProfile

| Name | Description | Value |
|-|-|-|
| capacityReservationGroup | Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer tohttps://aka.ms/CapacityReservationfor more details. | SubResource |


### DiagnosticsProfile

| Name | Description | Value |
|-|-|-|
| bootDiagnostics | Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status.NOTE: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor. | BootDiagnostics |


### BootDiagnostics

| Name | Description | Value |
|-|-|-|
| enabled | Whether boot diagnostics should be enabled on the Virtual Machine. | bool |
| storageUri | Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used. | string |


### VirtualMachineScaleSetExtensionProfile

| Name | Description | Value |
|-|-|-|
| extensions | The virtual machine scale set child extension resources. | VirtualMachineScaleSetExtension[] |
| extensionsTimeBudget | Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01. | string |


### VirtualMachineScaleSetExtension

| Name | Description | Value |
|-|-|-|
| name | The name of the extension. | string |
| properties | Describes the properties of a Virtual Machine Scale Set Extension. | VirtualMachineScaleSetExtensionProperties |


### VirtualMachineScaleSetExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. | string |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | The extensions protected settings that are passed by reference, and consumed from key vault | KeyVaultSecretReference |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| suppressFailures | Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. | bool |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### KeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | The URL referencing a secret in a Key Vault. | string (required) |
| sourceVault | The relative URL of the Key Vault containing the secret. | SubResource(required) |


### VirtualMachineScaleSetHardwareProfile

| Name | Description | Value |
|-|-|-|
| vmSizeProperties | Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions inVM Customizationfor more details. | VMSizeProperties |


### VMSizeProperties

| Name | Description | Value |
|-|-|-|
| vCPUsAvailable | Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response ofList all available virtual machine sizes in a region. | int |
| vCPUsPerCore | Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response ofList all available virtual machine sizes in a region.Setting this property to 1 also means that hyper-threading is disabled. | int |


### VirtualMachineScaleSetNetworkProfile

| Name | Description | Value |
|-|-|-|
| healthProbe | A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'. | ApiEntityReference |
| networkApiVersion | specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible' | '2020-11-01' |
| networkInterfaceConfigurations | The list of network configurations. | VirtualMachineScaleSetNetworkConfiguration[] |


### ApiEntityReference

| Name | Description | Value |
|-|-|-|
| id | The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | string |


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


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Specify public IP sku name | 'Basic''Standard' |
| tier | Specify public IP sku tier | 'Global''Regional' |


### VirtualMachineScaleSetOSProfile

| Name | Description | Value |
|-|-|-|
| adminPassword | Specifies the password of the administrator account.Minimum-length (Windows):8 charactersMinimum-length (Linux):6 charactersMax-length (Windows):123 charactersMax-length (Linux):72 charactersComplexity requirements:3 out of 4 conditions below need to be fulfilledHas lower charactersHas upper charactersHas a digitHas a special character (Regex match [\W_])Disallowed values:"abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"For resetting the password, seeHow to reset the Remote Desktop service or its login password in a Windows VMFor resetting root password, seeManage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension | string |
| adminUsername | Specifies the name of the administrator account.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters | string |
| allowExtensionOperations | Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set. | bool |
| computerNamePrefix | Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. | string |
| customData | Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, seeUsing cloud-init to customize a Linux VM during creation | string |
| linuxConfiguration | Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, seeLinux on Azure-Endorsed Distributions. | LinuxConfiguration |
| requireGuestProvisionSignal | Optional property which must either be set to True or omitted. | bool |
| secrets | Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use theAzure Key Vault virtual machine extension for Linuxor theAzure Key Vault virtual machine extension for Windows. | VaultSecretGroup[] |
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


### ScheduledEventsProfile

| Name | Description | Value |
|-|-|-|
| osImageNotificationProfile | Specifies OS Image Scheduled Event related configurations. | OSImageNotificationProfile |
| terminateNotificationProfile | Specifies Terminate Scheduled Event related configurations. | TerminateNotificationProfile |


### OSImageNotificationProfile

| Name | Description | Value |
|-|-|-|
| enable | Specifies whether the OS Image Scheduled event is enabled or disabled. | bool |
| notBeforeTimeout | Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M) | string |


### TerminateNotificationProfile

| Name | Description | Value |
|-|-|-|
| enable | Specifies whether the Terminate Scheduled event is enabled or disabled. | bool |
| notBeforeTimeout | Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) | string |


### SecurityPostureReference

| Name | Description | Value |
|-|-|-|
| excludeExtensions | List of virtual machine extensions to exclude when applying the Security Posture. | VirtualMachineExtension[] |
| id | The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch},{major.*},latest | string |


### VirtualMachineExtension

| Name | Description | Value |
|-|-|-|
| location | Resource location | string |
| properties | Describes the properties of a Virtual Machine Extension. | VirtualMachineExtensionProperties |
| tags | Resource tags | object |


### VirtualMachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| instanceView | The virtual machine extension instance view. | VirtualMachineExtensionInstanceView |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | The extensions protected settings that are passed by reference, and consumed from key vault | KeyVaultSecretReference |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| suppressFailures | Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. | bool |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### VirtualMachineExtensionInstanceView

| Name | Description | Value |
|-|-|-|
| name | The virtual machine extension name. | string |
| statuses | The resource status information. | InstanceViewStatus[] |
| substatuses | The resource status information. | InstanceViewStatus[] |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### InstanceViewStatus

| Name | Description | Value |
|-|-|-|
| code | The status code. | string |
| displayStatus | The short localizable label for the status. | string |
| level | The level code. | 'Error''Info''Warning' |
| message | The detailed status message, including for alerts and error messages. | string |
| time | The time of the status. | string |


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


### ServiceArtifactReference

| Name | Description | Value |
|-|-|-|
| id | The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName} | string |


### VirtualMachineScaleSetStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | VirtualMachineScaleSetDataDisk[] |
| diskControllerType |  | string |
| imageReference | Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. | ImageReference |
| osDisk | Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | VirtualMachineScaleSetOSDisk |


### VirtualMachineScaleSetDataDisk

| Name | Description | Value |
|-|-|-|
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| createOption | The create option. | 'Attach''Empty''FromImage' (required) |
| deleteOption | Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).Possible values:DeleteIf this value is used, the data disk is deleted when the VMSS Flex VM is deleted.DetachIf this value is used, the data disk is retained after VMSS Flex VM is deleted.The default value is set toDelete. | 'Delete''Detach' |
| diskIOPSReadWrite | Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. | int |
| diskMBpsReadWrite | Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. | int |
| diskSizeGB | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. | int |
| lun | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | int (required) |
| managedDisk | The managed disk parameters. | VirtualMachineScaleSetManagedDiskParameters |
| name | The disk name. | string |
| writeAcceleratorEnabled | Specifies whether writeAccelerator should be enabled or disabled on the disk. | bool |


### VirtualMachineScaleSetManagedDiskParameters

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk. | DiskEncryptionSetParameters |
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


### VirtualMachineScaleSetOSDisk

| Name | Description | Value |
|-|-|-|
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| createOption | Specifies how the virtual machines in the scale set should be created. The only allowed value is:FromImage.This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described. | 'Attach''Empty''FromImage' (required) |
| deleteOption | Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).Possible values:DeleteIf this value is used, the OS disk is deleted when VMSS Flex VM is deleted.DetachIf this value is used, the OS disk is retained after VMSS Flex VM is deleted.The default value is set toDelete. For an Ephemeral OS Disk, the default value is set toDelete. User cannot change the delete option for Ephemeral OS Disk. | 'Delete''Detach' |
| diffDiskSettings | Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set. | DiffDiskSettings |
| diskSizeGB | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. | int |
| image | Specifies information about the unmanaged user image to base the scale set on. | VirtualHardDisk |
| managedDisk | The managed disk parameters. | VirtualMachineScaleSetManagedDiskParameters |
| name | The disk name. | string |
| osType | This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are:Windows,Linux. | 'Linux''Windows' |
| vhdContainers | Specifies the container urls that are used to store operating system disks for the scale set. | string[] |
| writeAcceleratorEnabled | Specifies whether writeAccelerator should be enabled or disabled on the disk. | bool |


### DiffDiskSettings

| Name | Description | Value |
|-|-|-|
| option | Specifies the ephemeral disk settings for operating system disk. | 'Local' |
| placement | Specifies the ephemeral disk placement for operating system disk. Possible values are:CacheDisk,ResourceDisk.The defaulting behavior is:CacheDiskif one is configured for the VM size otherwiseResourceDiskis used. Refer to the VM size documentation for Windows VM at /azure/virtual-machines/windows/sizes and Linux VM at /azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. | 'CacheDisk''ResourceDisk' |


### VirtualHardDisk

| Name | Description | Value |
|-|-|-|
| uri | Specifies the virtual hard disk's uri. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |
## Microsoft.Compute/virtualMachineScaleSets/extensions@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/extensions@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      protectedSettingsFromKeyVault = {
        secretUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      provisionAfterExtensions = [
        "string"
      ]
      publisher = "string"
      suppressFailures = bool
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

### virtualMachineScaleSets/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachineScaleSets |
| properties | Describes the properties of a Virtual Machine Scale Set Extension. | VirtualMachineScaleSetExtensionProperties |


### VirtualMachineScaleSetExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. | string |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | The extensions protected settings that are passed by reference, and consumed from key vault | KeyVaultSecretReference |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| suppressFailures | Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. | bool |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### KeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | The URL referencing a secret in a Key Vault. | string (required) |
| sourceVault | The relative URL of the Key Vault containing the secret. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
## Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2023-03-01

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
## Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      instanceView = {
        name = "string"
        statuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        substatuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        type = "string"
        typeHandlerVersion = "string"
      }
      protectedSettingsFromKeyVault = {
        secretUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      provisionAfterExtensions = [
        "string"
      ]
      publisher = "string"
      suppressFailures = bool
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

### virtualMachineScaleSets/virtualMachines/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the extension. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes the properties of a Virtual Machine Extension. | VirtualMachineExtensionProperties |


### VirtualMachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| instanceView | The virtual machine extension instance view. | VirtualMachineExtensionInstanceView |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | The extensions protected settings that are passed by reference, and consumed from key vault | KeyVaultSecretReference |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| suppressFailures | Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. | bool |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### VirtualMachineExtensionInstanceView

| Name | Description | Value |
|-|-|-|
| name | The virtual machine extension name. | string |
| statuses | The resource status information. | InstanceViewStatus[] |
| substatuses | The resource status information. | InstanceViewStatus[] |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### InstanceViewStatus

| Name | Description | Value |
|-|-|-|
| code | The status code. | string |
| displayStatus | The short localizable label for the status. | string |
| level | The level code. | 'Error''Info''Warning' |
| message | The detailed status message, including for alerts and error messages. | string |
| time | The time of the status. | string |


### KeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | The URL referencing a secret in a Key Vault. | string (required) |
| sourceVault | The relative URL of the Key Vault containing the secret. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
## Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asyncExecution = bool
      errorBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      errorBlobUri = "string"
      outputBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      outputBlobUri = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      protectedParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      runAsPassword = "string"
      runAsUser = "string"
      source = {
        commandId = "string"
        script = "string"
        scriptUri = "string"
        scriptUriManagedIdentity = {
          clientId = "string"
          objectId = "string"
        }
      }
      timeoutInSeconds = int
      treatFailureAsDeploymentFailure = bool
    }
  })
}

```

### virtualMachineScaleSets/virtualMachines/runCommands

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes the properties of a Virtual Machine run command. | VirtualMachineRunCommandProperties |


### VirtualMachineRunCommandProperties

| Name | Description | Value |
|-|-|-|
| asyncExecution | Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete. | bool |
| errorBlobManagedIdentity | User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged | RunCommandManagedIdentity |
| errorBlobUri | Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter. | string |
| outputBlobManagedIdentity | User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged | RunCommandManagedIdentity |
| outputBlobUri | Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. | string |
| parameters | The parameters used by the script. | RunCommandInputParameter[] |
| protectedParameters | The parameters used by the script. | RunCommandInputParameter[] |
| runAsPassword | Specifies the user account password on the VM when executing the run command. | string |
| runAsUser | Specifies the user account on the VM when executing the run command. | string |
| source | The source of the run command script. | VirtualMachineRunCommandScriptSource |
| timeoutInSeconds | The timeout in seconds to execute the run command. | int |
| treatFailureAsDeploymentFailure | Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error:https://aka.ms/runcommandmanaged#get-execution-status-and-results | bool |


### RunCommandManagedIdentity

| Name | Description | Value |
|-|-|-|
| clientId | Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided. | string |
| objectId | Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided. | string |


### RunCommandInputParameter

| Name | Description | Value |
|-|-|-|
| name | The run command parameter name. | string (required) |
| value | The run command parameter value. | string (required) |


### VirtualMachineRunCommandScriptSource

| Name | Description | Value |
|-|-|-|
| commandId | Specifies a commandId of predefined built-in script. | string |
| script | Specifies the script content to be executed on the VM. | string |
| scriptUri | Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI. | string |
| scriptUriManagedIdentity | User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged. | RunCommandManagedIdentity |
