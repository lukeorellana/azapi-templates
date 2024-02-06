## Microsoft.StorSimple/managers@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers@2017-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cisIntrinsicSettings = {
        type = "string"
      }
      provisioningState = "string"
      sku = {
        name = "Standard"
      }
    }
    etag = "string"
  })
}

```

## Microsoft.StorSimple/managers/accessControlRecords@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/accessControlRecords@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      initiatorName = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      schedules = [
        {
          days = [
            "string"
          ]
          rateInMbps = int
          start = {
            hours = int
            minutes = int
            seconds = int
          }
          stop = {
            hours = int
            minutes = int
            seconds = int
          }
        }
      ]
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/certificates@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/certificates@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authType = "string"
      certificate = "string"
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalRecipientEmailList = [
        "string"
      ]
      alertNotificationCulture = "string"
      emailNotification = "string"
      notificationToServiceOwners = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      volumeIds = [
        "string"
      ]
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupType = "string"
      retentionCount = int
      scheduleRecurrence = {
        recurrenceType = "string"
        recurrenceValue = int
        weeklyDaysList = [
          "string"
        ]
      }
      scheduleStatus = "string"
      startTime = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      startTime = {
        hour = int
        minute = int
      }
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = {
        encryptionAlgorithm = "string"
        encryptionCertificateThumbprint = "string"
        value = "string"
      }
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/fileservers@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/fileservers@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupScheduleGroupId = "string"
      description = "string"
      domainName = "string"
      storageDomainId = "string"
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      adminUser = "string"
      dataPolicy = "string"
      description = "string"
      monitoringStatus = "string"
      provisionedCapacityInBytes = int
      shareStatus = "string"
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupScheduleGroupId = "string"
      chapId = "string"
      description = "string"
      reverseChapId = "string"
      storageDomainId = "string"
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessControlRecords = [
        "string"
      ]
      dataPolicy = "string"
      description = "string"
      diskStatus = "string"
      monitoringStatus = "string"
      provisionedCapacityInBytes = int
    }
  })
}

```

## Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      primaryTimeServer = "string"
      secondaryTimeServer = [
        "string"
      ]
      timeZone = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bandWidthRateInMbps = int
      bandwidthSettingId = "string"
      encryptionKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      storageAccountCredentialId = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessControlRecordIds = [
        "string"
      ]
      monitoringStatus = "string"
      sizeInBytes = int
      volumeStatus = "string"
      volumeType = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/extendedInformation@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/extendedInformation@2017-06-01"
  name = "vaultExtendedInfo"
  parent_id = "string"
  body = jsonencode({
    properties = {
      algorithm = "string"
      encryptionKey = "string"
      encryptionKeyThumbprint = "string"
      integrityKey = "string"
      portalCertificateThumbprint = "string"
      version = "string"
    }
    kind = "Series8000"
    etag = "string"
  })
}

```

## Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      endPoint = "string"
      sslStatus = "string"
    }
    kind = "Series8000"
  })
}

```

## Microsoft.StorSimple/managers/storageDomains@2016-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/storageDomains@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      encryptionKey = {
        encryptionAlgorithm = "string"
        encryptionCertificateThumbprint = "string"
        value = "string"
      }
      encryptionStatus = "string"
      storageAccountCredentialIds = [
        "string"
      ]
    }
  })
}

```

