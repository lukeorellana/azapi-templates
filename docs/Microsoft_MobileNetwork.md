## Microsoft.MobileNetwork/mobileNetworks@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicLandMobileNetworkIdentifier = {
        mcc = "string"
        mnc = "string"
      }
    }
  })
}

```

## Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2023-09-01"
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
    }
  })
}

```

## Microsoft.MobileNetwork/mobileNetworks/services@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/services@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      pccRules = [
        {
          ruleName = "string"
          rulePrecedence = int
          ruleQosPolicy = {
            5qi = int
            allocationAndRetentionPriorityLevel = int
            guaranteedBitRate = {
              downlink = "string"
              uplink = "string"
            }
            maximumBitRate = {
              downlink = "string"
              uplink = "string"
            }
            preemptionCapability = "string"
            preemptionVulnerability = "string"
          }
          serviceDataFlowTemplates = [
            {
              direction = "string"
              ports = [
                "string"
              ]
              protocol = "string"
              remoteIpList = "string"
              templateName = "string"
            }
          ]
          trafficControl = "string"
        }
      ]
      servicePrecedence = int
      serviceQosPolicy = {
        5qi = int
        allocationAndRetentionPriorityLevel = int
        maximumBitRate = {
          downlink = "string"
          uplink = "string"
        }
        preemptionCapability = "string"
        preemptionVulnerability = "string"
      }
    }
  })
}

```

## Microsoft.MobileNetwork/mobileNetworks/simPolicies@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/simPolicies@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      defaultSlice = {
        id = "string"
      }
      registrationTimer = int
      rfspIndex = int
      sliceConfigurations = [
        {
          dataNetworkConfigurations = [
            {
              5qi = int
              additionalAllowedSessionTypes = [
                "string"
              ]
              allocationAndRetentionPriorityLevel = int
              allowedServices = [
                {
                  id = "string"
                }
              ]
              dataNetwork = {
                id = "string"
              }
              defaultSessionType = "string"
              maximumNumberOfBufferedPackets = int
              preemptionCapability = "string"
              preemptionVulnerability = "string"
              sessionAmbr = {
                downlink = "string"
                uplink = "string"
              }
            }
          ]
          defaultDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
        }
      ]
      ueAmbr = {
        downlink = "string"
        uplink = "string"
      }
    }
  })
}

```

## Microsoft.MobileNetwork/mobileNetworks/sites@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/sites@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.MobileNetwork/mobileNetworks/slices@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/slices@2023-09-01"
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
      snssai = {
        sd = "string"
        sst = int
      }
    }
  })
}

```

## Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      controlPlaneAccessInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
      controlPlaneAccessVirtualIpv4Addresses = [
        "string"
      ]
      coreNetworkTechnology = "string"
      diagnosticsUpload = {
        storageAccountContainerUrl = "string"
      }
      eventHub = {
        id = "string"
        reportingInterval = int
      }
      installation = {
        desiredState = "string"
      }
      localDiagnosticsAccess = {
        authenticationType = "string"
        httpsServerCertificate = {
          certificateUrl = "string"
        }
      }
      platform = {
        azureStackEdgeDevice = {
          id = "string"
        }
        azureStackHciCluster = {
          id = "string"
        }
        connectedCluster = {
          id = "string"
        }
        customLocation = {
          id = "string"
        }
        type = "string"
      }
      signaling = {
        nasReroute = {
          macroMmeGroupId = int
        }
      }
      sites = [
        {
          id = "string"
        }
      ]
      sku = "string"
      ueMtu = int
      version = "string"
    }
  })
}

```

## Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages@2023-09-01"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures@2023-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bytesToCapturePerPacket = int
      networkInterfaces = [
        "string"
      ]
      timeLimitInSeconds = int
      totalBytesPerSession = int
    }
  })
}

```

## Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      userPlaneAccessInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
      userPlaneAccessVirtualIpv4Addresses = [
        "string"
      ]
    }
  })
}

```

## Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsAddresses = [
        "string"
      ]
      naptConfiguration = {
        enabled = "string"
        pinholeLimits = int
        pinholeTimeouts = {
          icmp = int
          tcp = int
          udp = int
        }
        portRange = {
          maxPort = int
          minPort = int
        }
        portReuseHoldTime = {
          tcp = int
          udp = int
        }
      }
      userEquipmentAddressPoolPrefix = "string"
      userEquipmentStaticAddressPoolPrefix = "string"
      userPlaneDataInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
    }
  })
}

```

## Microsoft.MobileNetwork/simGroups@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/simGroups@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryptionKey = {
        keyUrl = "string"
      }
      mobileNetwork = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.MobileNetwork/simGroups/sims@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/simGroups/sims@2023-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationKey = "string"
      deviceType = "string"
      integratedCircuitCardIdentifier = "string"
      internationalMobileSubscriberIdentity = "string"
      operatorKeyCode = "string"
      simPolicy = {
        id = "string"
      }
      staticIpConfiguration = [
        {
          attachedDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
          staticIp = {
            ipv4Address = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.MobileNetwork/sims@2022-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/sims@2022-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authenticationKey = "string"
      deviceType = "string"
      integratedCircuitCardIdentifier = "string"
      internationalMobileSubscriberIdentity = "string"
      mobileNetwork = {
        id = "string"
      }
      operatorKeyCode = "string"
      simPolicy = {
        id = "string"
      }
      staticIpConfiguration = [
        {
          attachedDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
          staticIp = {
            ipv4Address = "string"
          }
        }
      ]
    }
  })
}

```

