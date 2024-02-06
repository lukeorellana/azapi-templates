## Microsoft.StorageCache/amlFilesystems@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageCache/amlFilesystems@2023-05-01"
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
      encryptionSettings = {
        keyEncryptionKey = {
          keyUrl = "string"
          sourceVault = {
            id = "string"
          }
        }
      }
      filesystemSubnet = "string"
      hsm = {
        settings = {
          container = "string"
          importPrefix = "string"
          loggingContainer = "string"
        }
      }
      maintenanceWindow = {
        dayOfWeek = "string"
        timeOfDayUTC = "string"
      }
      storageCapacityTiB = int
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.StorageCache/caches@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageCache/caches@2023-05-01"
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
      cacheSizeGB = int
      directoryServicesSettings = {
        activeDirectory = {
          cacheNetBiosName = "string"
          credentials = {
            password = "string"
            username = "string"
          }
          domainName = "string"
          domainNetBiosName = "string"
          primaryDnsIpAddress = "string"
          secondaryDnsIpAddress = "string"
        }
        usernameDownload = {
          autoDownloadCertificate = bool
          caCertificateURI = "string"
          credentials = {
            bindDn = "string"
            bindPassword = "string"
          }
          encryptLdapConnection = bool
          extendedGroups = bool
          groupFileURI = "string"
          ldapBaseDN = "string"
          ldapServer = "string"
          requireValidCertificate = bool
          userFileURI = "string"
          usernameSource = "string"
        }
      }
      encryptionSettings = {
        keyEncryptionKey = {
          keyUrl = "string"
          sourceVault = {
            id = "string"
          }
        }
        rotationToLatestKeyVersionEnabled = bool
      }
      networkSettings = {
        dnsSearchDomain = "string"
        dnsServers = [
          "string"
        ]
        mtu = int
        ntpServer = "string"
      }
      securitySettings = {
        accessPolicies = [
          {
            accessRules = [
              {
                access = "string"
                anonymousGID = "string"
                anonymousUID = "string"
                filter = "string"
                rootSquash = bool
                scope = "string"
                submountAccess = bool
                suid = bool
              }
            ]
            name = "string"
          }
        ]
      }
      subnet = "string"
      upgradeSettings = {
        scheduledTime = "string"
        upgradeScheduleEnabled = bool
      }
      zones = [
        "string"
      ]
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.StorageCache/caches/storageTargets@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageCache/caches/storageTargets@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      blobNfs = {
        target = "string"
        usageModel = "string"
        verificationTimer = int
        writeBackTimer = int
      }
      clfs = {
        target = "string"
      }
      junctions = [
        {
          namespacePath = "string"
          nfsAccessPolicy = "string"
          nfsExport = "string"
          targetPath = "string"
        }
      ]
      nfs3 = {
        target = "string"
        usageModel = "string"
        verificationTimer = int
        writeBackTimer = int
      }
      state = "string"
      targetType = "string"
      unknown = {
        attributes = {}
      }
    }
  })
}

```

