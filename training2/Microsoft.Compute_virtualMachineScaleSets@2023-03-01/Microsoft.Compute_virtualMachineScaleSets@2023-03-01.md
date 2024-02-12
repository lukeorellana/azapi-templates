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


