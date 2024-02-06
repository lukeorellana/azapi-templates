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

### managers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-50Valid characters:Alphanumerics and hyphens.Start with letter. End with alphanumeric. |
| location | The geo location of the resource. | string (required) |
| tags | The tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| etag | The etag of the manager. | string |
| properties | The properties of the StorSimple Manager. | ManagerProperties |


### ManagerProperties

| Name | Description | Value |
|-|-|-|
| cisIntrinsicSettings | Represents the type of StorSimple Manager. | ManagerIntrinsicSettings |
| provisioningState | Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created. | string |
| sku | Specifies the Sku. | ManagerSku |


### ManagerIntrinsicSettings

| Name | Description | Value |
|-|-|-|
| type | The type of StorSimple Manager. | 'GardaV1''HelsinkiV1' (required) |


### ManagerSku

| Name | Description | Value |
|-|-|-|
| name | Refers to the sku name which should be "Standard" | 'Standard' (required) |
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

### managers/accessControlRecords

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The properties of access control record. | AccessControlRecordProperties(required) |


### AccessControlRecordProperties

| Name | Description | Value |
|-|-|-|
| initiatorName | The iSCSI initiator name (IQN). | string (required) |
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

### managers/bandwidthSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The properties of the bandwidth setting. | BandwidthRateSettingProperties(required) |


### BandwidthRateSettingProperties

| Name | Description | Value |
|-|-|-|
| schedules | The schedules. | BandwidthSchedule[] (required) |


### BandwidthSchedule

| Name | Description | Value |
|-|-|-|
| days | The days of the week when this schedule is applicable. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
| rateInMbps | The rate in Mbps. | int (required) |
| start | The start time of the schedule. | Time(required) |
| stop | The stop time of the schedule. | Time(required) |


### Time

| Name | Description | Value |
|-|-|-|
| hours | The hour. | int (required) |
| minutes | The minute. | int (required) |
| seconds | The second. | int (required) |
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

### managers/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | Raw Certificate Data From IDM | RawCertificateData(required) |


### RawCertificateData

| Name | Description | Value |
|-|-|-|
| authType | Specify the Authentication type | 'AccessControlService''AzureActiveDirectory''Invalid' |
| certificate | Gets or sets the base64 encoded certificate raw data string | string (required) |
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

### managers/devices/alertSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties of the alert notification settings. | AlertNotificationProperties(required) |


### AlertNotificationProperties

| Name | Description | Value |
|-|-|-|
| additionalRecipientEmailList | The alert notification email list. | string[] |
| alertNotificationCulture | The alert notification culture. | string |
| emailNotification | Indicates whether email notification enabled or not. | 'Disabled''Enabled' (required) |
| notificationToServiceOwners | The value indicating whether alert notification enabled for admin or not. | 'Disabled''Enabled' |
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

### managers/devices/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties of the backup policy. | BackupPolicyProperties(required) |


### BackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| volumeIds | The path IDs of the volumes which are part of the backup policy. | string[] (required) |
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

### managers/devices/backupPolicies/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupPolicies |
| properties | The properties of the backup schedule. | BackupScheduleProperties(required) |


### BackupScheduleProperties

| Name | Description | Value |
|-|-|-|
| backupType | The type of backup which needs to be taken. | 'CloudSnapshot''LocalSnapshot' (required) |
| retentionCount | The number of backups to be retained. | int (required) |
| scheduleRecurrence | The schedule recurrence. | ScheduleRecurrence(required) |
| scheduleStatus | The schedule status. | 'Disabled''Enabled' (required) |
| startTime | The start time of the schedule. | string (required) |


### ScheduleRecurrence

| Name | Description | Value |
|-|-|-|
| recurrenceType | The recurrence type. | 'Daily''Hourly''Minutes''Weekly' (required) |
| recurrenceValue | The recurrence value. | int (required) |
| weeklyDaysList | The week days list. Applicable only for schedules of recurrence type 'weekly'. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
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

### managers/devices/backupScheduleGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | Properties of BackupScheduleGroup | BackupScheduleGroupProperties(required) |


### BackupScheduleGroupProperties

| Name | Description | Value |
|-|-|-|
| startTime | The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules. | Time(required) |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required) |
| minute | The minute. | int (required) |
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

### managers/devices/chapSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | Chap properties | ChapProperties(required) |


### ChapProperties

| Name | Description | Value |
|-|-|-|
| password | The chap password. | AsymmetricEncryptedSecret(required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | Algorithm used to encrypt "Value" | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertificateThumbprint | Thumbprint certificate that was used to encrypt "Value" | string |
| value | The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null. | string (required) |
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

### managers/devices/fileservers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties. | FileServerProperties(required) |


### FileServerProperties

| Name | Description | Value |
|-|-|-|
| backupScheduleGroupId | The backup policy id. | string (required) |
| description | The description of the file server | string |
| domainName | Domain of the file server | string (required) |
| storageDomainId | The storage domain id. | string (required) |
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

### managers/devices/fileservers/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:fileservers |
| properties | The properties. | FileShareProperties(required) |


### FileShareProperties

| Name | Description | Value |
|-|-|-|
| adminUser | The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz. | string (required) |
| dataPolicy | The data policy | 'Cloud''Invalid''Local''Tiered' (required) |
| description | Description for file share | string |
| monitoringStatus | The monitoring status | 'Disabled''Enabled' (required) |
| provisionedCapacityInBytes | The total provisioned capacity in Bytes | int (required) |
| shareStatus | The Share Status | 'Offline''Online' (required) |
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

### managers/devices/iscsiservers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties. | IscsiServerProperties(required) |


### IscsiServerProperties

| Name | Description | Value |
|-|-|-|
| backupScheduleGroupId | The backup policy id. | string (required) |
| chapId | The chap id. | string |
| description | The description. | string |
| reverseChapId | The reverse chap id. | string |
| storageDomainId | The storage domain id. | string (required) |
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

### managers/devices/iscsiservers/disks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:iscsiservers |
| properties | The properties. | IscsiDiskProperties(required) |


### IscsiDiskProperties

| Name | Description | Value |
|-|-|-|
| accessControlRecords | The access control records. | string[] (required) |
| dataPolicy | The data policy. | 'Cloud''Invalid''Local''Tiered' (required) |
| description | The description. | string |
| diskStatus | The disk status. | 'Offline''Online' (required) |
| monitoringStatus | The monitoring. | 'Disabled''Enabled' (required) |
| provisionedCapacityInBytes | The provisioned capacity in bytes. | int (required) |
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

### managers/devices/timeSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties of the time settings of a device. | TimeSettingsProperties(required) |


### TimeSettingsProperties

| Name | Description | Value |
|-|-|-|
| primaryTimeServer | The primary Network Time Protocol (NTP) server name, like 'time.windows.com'. | string |
| secondaryTimeServer | The secondary Network Time Protocol (NTP) server name, like 'time.contoso.com'. It's optional. | string[] |
| timeZone | The timezone of device, like '(UTC -06:00) Central America' | string (required) |
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

### managers/devices/volumeContainers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The volume container properties. | VolumeContainerProperties(required) |


### VolumeContainerProperties

| Name | Description | Value |
|-|-|-|
| bandWidthRateInMbps | The bandwidth-rate set on the volume container. | int |
| bandwidthSettingId | The ID of the bandwidth setting associated with the volume container. | string |
| encryptionKey | The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled". | AsymmetricEncryptedSecret |
| storageAccountCredentialId | The path ID of storage account associated with the volume container. | string (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |
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

### managers/devices/volumeContainers/volumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumeContainers |
| properties | The properties of the volume. | VolumeProperties(required) |


### VolumeProperties

| Name | Description | Value |
|-|-|-|
| accessControlRecordIds | The IDs of the access control records, associated with the volume. | string[] (required) |
| monitoringStatus | The monitoring status of the volume. | 'Disabled''Enabled' (required) |
| sizeInBytes | The size of the volume in bytes. | int (required) |
| volumeStatus | The volume status. | 'Offline''Online' (required) |
| volumeType | The type of the volume. | 'Archival''LocallyPinned''Tiered' (required) |
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

### managers/extendedInformation

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'vaultExtendedInfo' |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| etag | The etag of the resource. | string |
| properties | The extended info properties. | ManagerExtendedInfoProperties |


### ManagerExtendedInfoProperties

| Name | Description | Value |
|-|-|-|
| algorithm | Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted | string (required) |
| encryptionKey | Represents the CEK of the resource. | string |
| encryptionKeyThumbprint | Represents the Cert thumbprint that was used to encrypt the CEK. | string |
| integrityKey | Represents the CIK of the resource. | string (required) |
| portalCertificateThumbprint | Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it. | string |
| version | The version of the extended info being persisted. | string |
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

### managers/storageAccountCredentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The storage account credential properties. | StorageAccountCredentialProperties(required) |


### StorageAccountCredentialProperties

| Name | Description | Value |
|-|-|-|
| accessKey | The details of the storage account password. | AsymmetricEncryptedSecret |
| endPoint | The storage endpoint | string (required) |
| sslStatus | Signifies whether SSL needs to be enabled or not. | 'Disabled''Enabled' (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |
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

### managers/storageDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The properties. | StorageDomainProperties(required) |


### StorageDomainProperties

| Name | Description | Value |
|-|-|-|
| encryptionKey | The encryption key used to encrypt the data. This is a user secret. | AsymmetricEncryptedSecret |
| encryptionStatus | The encryption status "Enabled , Disabled". | 'Disabled''Enabled' (required) |
| storageAccountCredentialIds | The storage account credentials. | string[] (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | Algorithm used to encrypt "Value" | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertificateThumbprint | Thumbprint certificate that was used to encrypt "Value" | string |
| value | The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null. | string (required) |
