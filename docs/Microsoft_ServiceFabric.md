## Microsoft.ServiceFabric/clusters@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addOnFeatures = [
        "string"
      ]
      applicationTypeVersionsCleanupPolicy = {
        maxUnusedVersionsToKeep = int
        maxUnusedVersionsToKeep = int
      }
      azureActiveDirectory = {
        clientApplication = "string"
        clusterApplication = "string"
        tenantId = "string"
        clientApplication = "string"
        clusterApplication = "string"
        tenantId = "string"
      }
      certificate = {
        thumbprint = "string"
        thumbprintSecondary = "string"
        x509StoreName = "string"
      }
      certificateCommonNames = {
        commonNames = [
          {
            certificateCommonName = "string"
            certificateIssuerThumbprint = "string"
          }
        ]
        x509StoreName = "string"
      }
      clientCertificateCommonNames = [
        {
          certificateCommonName = "string"
          certificateIssuerThumbprint = "string"
          isAdmin = bool
        }
      ]
      clientCertificateThumbprints = [
        {
          certificateThumbprint = "string"
          isAdmin = bool
        }
      ]
      clusterCodeVersion = "string"
      diagnosticsStorageAccountConfig = {
        blobEndpoint = "string"
        protectedAccountKeyName = "string"
        protectedAccountKeyName2 = "string"
        queueEndpoint = "string"
        storageAccountName = "string"
        tableEndpoint = "string"
      }
      enableHttpGatewayExclusiveAuthMode = bool
      eventStoreServiceEnabled = bool
      fabricSettings = [
        {
          name = "string"
          parameters = [
            {
              name = "string"
              value = "string"
              name = "string"
              value = "string"
            }
          ]
          name = "string"
          parameters = [
            {
              name = "string"
              value = "string"
              name = "string"
              value = "string"
            }
          ]
        }
      ]
      infrastructureServiceManager = bool
      managementEndpoint = "string"
      nodeTypes = [
        {
          applicationPorts = {
            endPort = int
            startPort = int
            endPort = int
            startPort = int
          }
          capacities = {
            {customized property} = "string"
          }
          clientConnectionEndpointPort = int
          durabilityLevel = "string"
          ephemeralPorts = {
            endPort = int
            startPort = int
            endPort = int
            startPort = int
          }
          httpGatewayEndpointPort = int
          httpGatewayTokenAuthEndpointPort = int
          isPrimary = bool
          isStateless = bool
          multipleAvailabilityZones = bool
          name = "string"
          placementProperties = {
            {customized property} = "string"
          }
          reverseProxyEndpointPort = int
          vmInstanceCount = int
        }
      ]
      notifications = [
        {
          isEnabled = bool
          notificationCategory = "WaveProgress"
          notificationLevel = "string"
          notificationTargets = [
            {
              notificationChannel = "string"
              receivers = [
                "string"
              ]
            }
          ]
        }
      ]
      reliabilityLevel = "string"
      reverseProxyCertificate = {
        thumbprint = "string"
        thumbprintSecondary = "string"
        x509StoreName = "string"
      }
      reverseProxyCertificateCommonNames = {
        commonNames = [
          {
            certificateCommonName = "string"
            certificateIssuerThumbprint = "string"
          }
        ]
        x509StoreName = "string"
      }
      sfZonalUpgradeMode = "string"
      upgradeDescription = {
        deltaHealthPolicy = {
          applicationDeltaHealthPolicies = {
            {customized property} = {
              defaultServiceTypeDeltaHealthPolicy = {
                maxPercentDeltaUnhealthyServices = int
              }
              serviceTypeDeltaHealthPolicies = {
                {customized property} = {
                  maxPercentDeltaUnhealthyServices = int
                }
              }
            }
          }
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
        }
        forceRestart = bool
        healthCheckRetryTimeout = "string"
        healthCheckStableDuration = "string"
        healthCheckWaitDuration = "string"
        healthPolicy = {
          applicationHealthPolicies = {
            {customized property} = {
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              serviceTypeHealthPolicies = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
              considerWarningAsError = bool
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              maxPercentUnhealthyDeployedApplications = int
              serviceTypeHealthPolicyMap = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
            }
          }
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
        }
        upgradeDomainTimeout = "string"
        upgradeReplicaSetCheckTimeout = "string"
        upgradeTimeout = "string"
        deltaHealthPolicy = {
          applicationDeltaHealthPolicies = {
            {customized property} = {
              defaultServiceTypeDeltaHealthPolicy = {
                maxPercentDeltaUnhealthyServices = int
              }
              serviceTypeDeltaHealthPolicies = {
                {customized property} = {
                  maxPercentDeltaUnhealthyServices = int
                }
              }
            }
          }
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
        }
        forceRestart = bool
        healthPolicy = {
          applicationHealthPolicies = {
            {customized property} = {
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              serviceTypeHealthPolicies = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
              considerWarningAsError = bool
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              maxPercentUnhealthyDeployedApplications = int
              serviceTypeHealthPolicyMap = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
            }
          }
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
        }
        monitoringPolicy = {
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeReplicaSetCheckTimeout = "string"
      }
      upgradeMode = "string"
      upgradePauseEndTimestampUtc = "string"
      upgradePauseStartTimestampUtc = "string"
      upgradeWave = "string"
      vmImage = "string"
      vmssZonalUpgradeMode = "string"
      waveUpgradePaused = bool
    }
  })
}

```

## Microsoft.ServiceFabric/clusters/applications@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applications@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
          name = "string"
          principalId = "string"
        }
      ]
      maximumNodes = int
      metrics = [
        {
          maximumCapacity = int
          name = "string"
          reservationCapacity = int
          totalApplicationCapacity = int
        }
      ]
      minimumNodes = int
      parameters = {
        {customized property} = "string"
        {customized property} = "string"
      }
      removeApplicationCapacity = bool
      typeName = "string"
      typeVersion = "string"
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = "string"
        applicationHealthPolicy = {
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyServices = int
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          serviceTypeHealthPolicies = {
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyServices = int
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
          name = "string"
          principalId = "string"
        }
      ]
      parameters = {
        {customized property} = "string"
        {customized property} = "string"
      }
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = "string"
        applicationHealthPolicy = {
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyServices = int
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          serviceTypeHealthPolicies = {
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyServices = int
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
            {customized property} = {
              maxPercentUnhealthyServices = int
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      version = "string"
    }
  })
}

```

## Microsoft.ServiceFabric/clusters/applications/services@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applications/services@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      correlationScheme = [
        {
          scheme = "string"
          serviceName = "string"
        }
      ]
      defaultMoveCost = "string"
      partitionDescription = {
        partitionScheme = "string"
        // For remaining properties, see PartitionSchemeDescription objects
      }
      placementConstraints = "string"
      serviceDnsName = "string"
      serviceLoadMetrics = [
        {
          defaultLoad = int
          name = "string"
          primaryDefaultLoad = int
          secondaryDefaultLoad = int
          weight = "string"
        }
      ]
      servicePackageActivationMode = "string"
      servicePlacementPolicies = [
        {
        }
      ]
      serviceTypeName = "string"
      correlationScheme = [
        {
          scheme = "string"
          serviceName = "string"
        }
      ]
      defaultMoveCost = "string"
      partitionDescription = {
        partitionScheme = "string"
        // For remaining properties, see Partition objects
      }
      placementConstraints = "string"
      scalingPolicies = [
        {
          scalingMechanism = {
            kind = "string"
            // For remaining properties, see ScalingMechanism objects
          }
          scalingTrigger = {
            kind = "string"
            // For remaining properties, see ScalingTrigger objects
          }
        }
      ]
      serviceDnsName = "string"
      serviceLoadMetrics = [
        {
          defaultLoad = int
          name = "string"
          primaryDefaultLoad = int
          secondaryDefaultLoad = int
          weight = "string"
        }
      ]
      servicePackageActivationMode = "string"
      servicePlacementPolicies = [
        {
          type = "string"
          // For remaining properties, see ServicePlacementPolicy objects
        }
      ]
      serviceTypeName = "string"
      serviceKind = "string"
      // For remaining properties, see ServiceResourceProperties objects
    }
  })
}

```

## Microsoft.ServiceFabric/clusters/applicationTypes@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applicationTypes@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.ServiceFabric/clusters/applicationTypes/versions@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applicationTypes/versions@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      appPackageUrl = "string"
      appPackageUrl = "string"
    }
  })
}

```

## Microsoft.ServiceFabric/managedClusters@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedClusters@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addonFeatures = [
        "string"
      ]
      adminPassword = "string"
      adminUserName = "string"
      allowRdpAccess = bool
      applicationTypeVersionsCleanupPolicy = {
        maxUnusedVersionsToKeep = int
      }
      auxiliarySubnets = [
        {
          enableIpv6 = bool
          name = "string"
          networkSecurityGroupId = "string"
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
        }
      ]
      azureActiveDirectory = {
        clientApplication = "string"
        clusterApplication = "string"
        tenantId = "string"
      }
      clientConnectionPort = int
      clients = [
        {
          commonName = "string"
          isAdmin = bool
          issuerThumbprint = "string"
          thumbprint = "string"
        }
      ]
      clusterCodeVersion = "string"
      clusterUpgradeCadence = "string"
      clusterUpgradeMode = "string"
      ddosProtectionPlanId = "string"
      dnsName = "string"
      enableAutoOSUpgrade = bool
      enableHttpGatewayExclusiveAuthMode = bool
      enableIpv6 = bool
      enableServicePublicIP = bool
      fabricSettings = [
        {
          name = "string"
          parameters = [
            {
              name = "string"
              value = "string"
            }
          ]
        }
      ]
      httpGatewayConnectionPort = int
      httpGatewayTokenAuthConnectionPort = int
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      loadBalancingRules = [
        {
          backendPort = int
          frontendPort = int
          loadDistribution = "string"
          probePort = int
          probeProtocol = "string"
          probeRequestPath = "string"
          protocol = "string"
        }
      ]
      networkSecurityRules = [
        {
          access = "string"
          description = "string"
          destinationAddressPrefix = "string"
          destinationAddressPrefixes = [
            "string"
          ]
          destinationPortRange = "string"
          destinationPortRanges = [
            "string"
          ]
          direction = "string"
          name = "string"
          priority = int
          protocol = "string"
          sourceAddressPrefix = "string"
          sourceAddressPrefixes = [
            "string"
          ]
          sourcePortRange = "string"
          sourcePortRanges = [
            "string"
          ]
        }
      ]
      publicIPPrefixId = "string"
      publicIPv6PrefixId = "string"
      serviceEndpoints = [
        {
          locations = [
            "string"
          ]
          service = "string"
        }
      ]
      subnetId = "string"
      upgradeDescription = {
        deltaHealthPolicy = {
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
        }
        forceRestart = bool
        healthPolicy = {
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
        }
        monitoringPolicy = {
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeReplicaSetCheckTimeout = "string"
      }
      useCustomVnet = bool
      zonalResiliency = bool
      zonalUpdateMode = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.ServiceFabric/managedclusters/applications@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applications@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
        }
      ]
      parameters = {
        {customized property} = "string"
      }
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      version = "string"
    }
  })
}

```

## Microsoft.ServiceFabric/managedclusters/applications/services@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applications/services@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      correlationScheme = [
        {
          scheme = "string"
          serviceName = "string"
        }
      ]
      defaultMoveCost = "string"
      partitionDescription = {
        partitionScheme = "string"
        // For remaining properties, see Partition objects
      }
      placementConstraints = "string"
      scalingPolicies = [
        {
          scalingMechanism = {
            kind = "string"
            // For remaining properties, see ScalingMechanism objects
          }
          scalingTrigger = {
            kind = "string"
            // For remaining properties, see ScalingTrigger objects
          }
        }
      ]
      serviceDnsName = "string"
      serviceLoadMetrics = [
        {
          defaultLoad = int
          name = "string"
          primaryDefaultLoad = int
          secondaryDefaultLoad = int
          weight = "string"
        }
      ]
      servicePackageActivationMode = "string"
      servicePlacementPolicies = [
        {
          type = "string"
          // For remaining properties, see ServicePlacementPolicy objects
        }
      ]
      serviceTypeName = "string"
      serviceKind = "string"
      // For remaining properties, see ServiceResourceProperties objects
    }
  })
}

```

## Microsoft.ServiceFabric/managedclusters/applicationTypes@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applicationTypes@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      appPackageUrl = "string"
    }
  })
}

```

## Microsoft.ServiceFabric/managedClusters/nodeTypes@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedClusters/nodeTypes@2023-12-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      additionalDataDisks = [
        {
          diskLetter = "string"
          diskSizeGB = int
          diskType = "string"
          lun = int
        }
      ]
      additionalNetworkInterfaceConfigurations = [
        {
          dscpConfiguration = {
            id = "string"
          }
          enableAcceleratedNetworking = bool
          ipConfigurations = [
            {
              applicationGatewayBackendAddressPools = [
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
              name = "string"
              privateIPAddressVersion = "string"
              publicIPAddressConfiguration = {
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                name = "string"
                publicIPAddressVersion = "string"
              }
              subnet = {
                id = "string"
              }
            }
          ]
          name = "string"
        }
      ]
      applicationPorts = {
        endPort = int
        startPort = int
      }
      capacities = {
        {customized property} = "string"
      }
      dataDiskLetter = "string"
      dataDiskSizeGB = int
      dataDiskType = "string"
      dscpConfigurationId = "string"
      enableAcceleratedNetworking = bool
      enableEncryptionAtHost = bool
      enableNodePublicIP = bool
      enableNodePublicIPv6 = bool
      enableOverProvisioning = bool
      ephemeralPorts = {
        endPort = int
        startPort = int
      }
      evictionPolicy = "string"
      frontendConfigurations = [
        {
          applicationGatewayBackendAddressPoolId = "string"
          ipAddressType = "string"
          loadBalancerBackendAddressPoolId = "string"
          loadBalancerInboundNatPoolId = "string"
        }
      ]
      hostGroupId = "string"
      isPrimary = bool
      isSpotVM = bool
      isStateless = bool
      multiplePlacementGroups = bool
      natGatewayId = "string"
      networkSecurityRules = [
        {
          access = "string"
          description = "string"
          destinationAddressPrefix = "string"
          destinationAddressPrefixes = [
            "string"
          ]
          destinationPortRange = "string"
          destinationPortRanges = [
            "string"
          ]
          direction = "string"
          name = "string"
          priority = int
          protocol = "string"
          sourceAddressPrefix = "string"
          sourceAddressPrefixes = [
            "string"
          ]
          sourcePortRange = "string"
          sourcePortRanges = [
            "string"
          ]
        }
      ]
      placementProperties = {
        {customized property} = "string"
      }
      secureBootEnabled = bool
      securityType = "TrustedLaunch"
      serviceArtifactReferenceId = "string"
      spotRestoreTimeout = "string"
      subnetId = "string"
      useDefaultPublicLoadBalancer = bool
      useEphemeralOSDisk = bool
      useTempDataDisk = bool
      vmExtensions = [
        {
          name = "string"
          properties = {
            autoUpgradeMinorVersion = bool
            enableAutomaticUpgrade = bool
            forceUpdateTag = "string"
            provisionAfterExtensions = [
              "string"
            ]
            publisher = "string"
            setupOrder = "BeforeSFRuntime"
            type = "string"
            typeHandlerVersion = "string"
          }
        }
      ]
      vmImageOffer = "string"
      vmImagePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      vmImagePublisher = "string"
      vmImageResourceId = "string"
      vmImageSku = "string"
      vmImageVersion = "string"
      vmInstanceCount = int
      vmManagedIdentity = {
        userAssignedIdentities = [
          "string"
        ]
      }
      vmSecrets = [
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
      vmSetupActions = [
        "string"
      ]
      vmSharedGalleryImageId = "string"
      vmSize = "string"
      zones = [
        "string"
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

