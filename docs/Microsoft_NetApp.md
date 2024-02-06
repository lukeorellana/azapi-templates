## Microsoft.NetApp/netAppAccounts@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts@2022-05-01"
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
      activeDirectories = [
        {
          activeDirectoryId = "string"
          administrators = [
            "string"
          ]
          adName = "string"
          aesEncryption = bool
          allowLocalNfsUsersWithLdap = bool
          backupOperators = [
            "string"
          ]
          dns = "string"
          domain = "string"
          encryptDCConnections = bool
          kdcIP = "string"
          ldapOverTLS = bool
          ldapSearchScope = {
            groupDN = "string"
            groupMembershipFilter = "string"
            userDN = "string"
          }
          ldapSigning = bool
          organizationalUnit = "string"
          password = "string"
          securityOperators = [
            "string"
          ]
          serverRootCACertificate = "string"
          site = "string"
          smbServerName = "string"
          username = "string"
        }
      ]
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keySource = "string"
        keyVaultProperties = {
          keyName = "string"
          keyVaultResourceId = "string"
          keyVaultUri = "string"
        }
      }
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/backupPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/backupPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyBackupsToKeep = int
      enabled = bool
      monthlyBackupsToKeep = int
      weeklyBackupsToKeep = int
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      coolAccess = bool
      encryptionType = "string"
      qosType = "string"
      serviceLevel = "string"
      size = int
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      avsDataStore = "string"
      backupId = "string"
      capacityPoolResourceId = "string"
      coolAccess = bool
      coolnessPeriod = int
      creationToken = "string"
      dataProtection = {
        backup = {
          backupEnabled = bool
          backupPolicyId = "string"
          policyEnforced = bool
          vaultId = "string"
        }
        replication = {
          endpointType = "string"
          remoteVolumeRegion = "string"
          remoteVolumeResourceId = "string"
          replicationId = "string"
          replicationSchedule = "string"
        }
        snapshot = {
          snapshotPolicyId = "string"
        }
      }
      defaultGroupQuotaInKiBs = int
      defaultUserQuotaInKiBs = int
      deleteBaseSnapshot = bool
      enableSubvolumes = "string"
      encryptionKeySource = "string"
      exportPolicy = {
        rules = [
          {
            allowedClients = "string"
            chownMode = "string"
            cifs = bool
            hasRootAccess = bool
            kerberos5iReadWrite = bool
            kerberos5pReadWrite = bool
            kerberos5ReadWrite = bool
            nfsv3 = bool
            nfsv41 = bool
            ruleIndex = int
            unixReadWrite = bool
          }
        ]
      }
      isDefaultQuotaEnabled = bool
      isRestoring = bool
      kerberosEnabled = bool
      keyVaultPrivateEndpointResourceId = "string"
      ldapEnabled = bool
      networkFeatures = "string"
      placementRules = [
        {
          key = "string"
          value = "string"
        }
      ]
      protocolTypes = [
        "string"
      ]
      proximityPlacementGroup = "string"
      securityStyle = "string"
      serviceLevel = "string"
      smbAccessBasedEnumeration = "string"
      smbContinuouslyAvailable = bool
      smbEncryption = bool
      smbNonBrowsable = "string"
      snapshotDirectoryVisible = bool
      snapshotId = "string"
      subnetId = "string"
      throughputMibps = int
      unixPermissions = "string"
      usageThreshold = int
      volumeSpecName = "string"
      volumeType = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      label = "string"
      useExistingSnapshot = bool
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parentPath = "string"
      path = "string"
      size = int
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      quotaSizeInKiBs = int
      quotaTarget = "string"
      quotaType = "string"
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailySchedule = {
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      enabled = bool
      hourlySchedule = {
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      monthlySchedule = {
        daysOfMonth = "string"
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      weeklySchedule = {
        day = "string"
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
    }
  })
}

```

## Microsoft.NetApp/netAppAccounts/volumeGroups@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/volumeGroups@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupMetaData = {
        applicationIdentifier = "string"
        applicationType = "SAP-HANA"
        deploymentSpecId = "string"
        globalPlacementRules = [
          {
            key = "string"
            value = "string"
          }
        ]
        groupDescription = "string"
      }
      volumes = [
        {
          name = "string"
          properties = {
            avsDataStore = "string"
            backupId = "string"
            capacityPoolResourceId = "string"
            coolAccess = bool
            coolnessPeriod = int
            creationToken = "string"
            dataProtection = {
              backup = {
                backupEnabled = bool
                backupPolicyId = "string"
                policyEnforced = bool
                vaultId = "string"
              }
              replication = {
                endpointType = "string"
                remoteVolumeRegion = "string"
                remoteVolumeResourceId = "string"
                replicationId = "string"
                replicationSchedule = "string"
              }
              snapshot = {
                snapshotPolicyId = "string"
              }
            }
            defaultGroupQuotaInKiBs = int
            defaultUserQuotaInKiBs = int
            deleteBaseSnapshot = bool
            enableSubvolumes = "string"
            encryptionKeySource = "string"
            exportPolicy = {
              rules = [
                {
                  allowedClients = "string"
                  chownMode = "string"
                  cifs = bool
                  hasRootAccess = bool
                  kerberos5iReadWrite = bool
                  kerberos5pReadWrite = bool
                  kerberos5ReadWrite = bool
                  nfsv3 = bool
                  nfsv41 = bool
                  ruleIndex = int
                  unixReadWrite = bool
                }
              ]
            }
            isDefaultQuotaEnabled = bool
            isRestoring = bool
            kerberosEnabled = bool
            keyVaultPrivateEndpointResourceId = "string"
            ldapEnabled = bool
            networkFeatures = "string"
            placementRules = [
              {
                key = "string"
                value = "string"
              }
            ]
            protocolTypes = [
              "string"
            ]
            proximityPlacementGroup = "string"
            securityStyle = "string"
            serviceLevel = "string"
            smbAccessBasedEnumeration = "string"
            smbContinuouslyAvailable = bool
            smbEncryption = bool
            smbNonBrowsable = "string"
            snapshotDirectoryVisible = bool
            snapshotId = "string"
            subnetId = "string"
            throughputMibps = int
            unixPermissions = "string"
            usageThreshold = int
            volumeSpecName = "string"
            volumeType = "string"
          }
          tags = {}
        }
      ]
    }
  })
}

```

