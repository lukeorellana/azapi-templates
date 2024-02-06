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

### amlFilesystems

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU for the resource. | SkuName |
| identity | The managed identity used by the AML file system, if configured. | AmlFilesystemIdentity |
| properties | Properties of the AML file system. | AmlFilesystemProperties |
| zones | Availability zones for resources. This field should only contain a single element in the array. | string[] |


### AmlFilesystemIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. | 'None''UserAssigned' |
| userAssignedIdentities | A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary. | object |


### AmlFilesystemProperties

| Name | Description | Value |
|-|-|-|
| encryptionSettings | Specifies encryption settings of the AML file system. | AmlFilesystemEncryptionSettings |
| filesystemSubnet | Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space. | string (required) |
| hsm | Hydration and archive settings and status | AmlFilesystemPropertiesHsm |
| maintenanceWindow | Start time of a 30-minute weekly maintenance window. | AmlFilesystemPropertiesMaintenanceWindow(required) |
| storageCapacityTiB | The size of the AML file system, in TiB. This might be rounded up. | int (required) |


### AmlFilesystemEncryptionSettings

| Name | Description | Value |
|-|-|-|
| keyEncryptionKey | Specifies the location of the encryption key in Key Vault. | KeyVaultKeyReference |


### KeyVaultKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | The URL referencing a key encryption key in key vault. | string (required) |
| sourceVault | Describes a resource Id to source key vault. | KeyVaultKeyReferenceSourceVault(required) |


### KeyVaultKeyReferenceSourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### AmlFilesystemPropertiesHsm

| Name | Description | Value |
|-|-|-|
| settings | Specifies HSM settings of the AML file system. | AmlFilesystemHsmSettings |


### AmlFilesystemHsmSettings

| Name | Description | Value |
|-|-|-|
| container | Resource ID of storage container used for hydrating the namespace and archiving from the namespace. The resource provider must have permission to create SAS tokens on the storage account. | string (required) |
| importPrefix | Only blobs in the non-logging container that start with this path/prefix get hydrated into the cluster namespace. | string |
| loggingContainer | Resource ID of storage container used for logging events and errors.  Must be a separate container in the same storage account as the hydration and archive container. The resource provider must have permission to create SAS tokens on the storage account. | string (required) |


### AmlFilesystemPropertiesMaintenanceWindow

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week on which the maintenance window will occur. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| timeOfDayUTC | The time of day (in UTC) to start the maintenance window. | string |


### SkuName

| Name | Description | Value |
|-|-|-|
| name | SKU name for this resource. | string |
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

### caches

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Region name string. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU for the cache. | CacheSku |
| identity | The identity of the cache, if configured. | CacheIdentity |
| properties | Properties of the cache. | CacheProperties |


### CacheIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the cache | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary. | object |


### CacheProperties

| Name | Description | Value |
|-|-|-|
| cacheSizeGB | The size of this Cache, in GB. | int |
| directoryServicesSettings | Specifies Directory Services settings of the cache. | CacheDirectorySettings |
| encryptionSettings | Specifies encryption settings of the cache. | CacheEncryptionSettings |
| networkSettings | Specifies network settings of the cache. | CacheNetworkSettings |
| securitySettings | Specifies security settings of the cache. | CacheSecuritySettings |
| subnet | Subnet used for the cache. | string |
| upgradeSettings | Upgrade settings of the cache. | CacheUpgradeSettings |
| zones | Availability zones for resources. This field should only contain a single element in the array. | string[] |


### CacheDirectorySettings

| Name | Description | Value |
|-|-|-|
| activeDirectory | Specifies settings for joining the HPC Cache to an Active Directory domain. | CacheActiveDirectorySettings |
| usernameDownload | Specifies settings for Extended Groups. Extended Groups allows users to be members of more than 16 groups. | CacheUsernameDownloadSettings |


### CacheActiveDirectorySettings

| Name | Description | Value |
|-|-|-|
| cacheNetBiosName | The NetBIOS name to assign to the HPC Cache when it joins the Active Directory domain as a server. Length must 1-15 characters from the class [-0-9a-zA-Z]. | string (required) |
| credentials | Active Directory admin credentials used to join the HPC Cache to a domain. | CacheActiveDirectorySettingsCredentials |
| domainName | The fully qualified domain name of the Active Directory domain controller. | string (required) |
| domainNetBiosName | The Active Directory domain's NetBIOS name. | string (required) |
| primaryDnsIpAddress | Primary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name. | string (required) |
| secondaryDnsIpAddress | Secondary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name. | string |


### CacheActiveDirectorySettingsCredentials

| Name | Description | Value |
|-|-|-|
| password | Plain text password of the Active Directory domain administrator. This value is stored encrypted and not returned on response. | string |
| username | Username of the Active Directory domain administrator. This value is stored encrypted and not returned on response. | string (required) |


### CacheUsernameDownloadSettings

| Name | Description | Value |
|-|-|-|
| autoDownloadCertificate | Determines if the certificate should be automatically downloaded. This applies to 'caCertificateURI' only if 'requireValidCertificate' is true. | bool |
| caCertificateURI | The URI of the CA certificate to validate the LDAP secure connection. This field must be populated when 'requireValidCertificate' is set to true. | string |
| credentials | When present, these are the credentials for the secure LDAP connection. | CacheUsernameDownloadSettingsCredentials |
| encryptLdapConnection | Whether or not the LDAP connection should be encrypted. | bool |
| extendedGroups | Whether or not Extended Groups is enabled. | bool |
| groupFileURI | The URI of the file containing group information (in /etc/group file format). This field must be populated when 'usernameSource' is set to 'File'. | string |
| ldapBaseDN | The base distinguished name for the LDAP domain. | string |
| ldapServer | The fully qualified domain name or IP address of the LDAP server to use. | string |
| requireValidCertificate | Determines if the certificates must be validated by a certificate authority. When true, caCertificateURI must be provided. | bool |
| userFileURI | The URI of the file containing user information (in /etc/passwd file format). This field must be populated when 'usernameSource' is set to 'File'. | string |
| usernameSource | This setting determines how the cache gets username and group names for clients. | 'AD''File''LDAP''None' |


### CacheUsernameDownloadSettingsCredentials

| Name | Description | Value |
|-|-|-|
| bindDn | The Bind Distinguished Name identity to be used in the secure LDAP connection. This value is stored encrypted and not returned on response. | string |
| bindPassword | The Bind password to be used in the secure LDAP connection. This value is stored encrypted and not returned on response. | string |


### CacheEncryptionSettings

| Name | Description | Value |
|-|-|-|
| keyEncryptionKey | Specifies the location of the key encryption key in key vault. | KeyVaultKeyReference |
| rotationToLatestKeyVersionEnabled | Specifies whether the service will automatically rotate to the newest version of the key in the key vault. | bool |


### KeyVaultKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | The URL referencing a key encryption key in key vault. | string (required) |
| sourceVault | Describes a resource Id to source key vault. | KeyVaultKeyReferenceSourceVault(required) |


### KeyVaultKeyReferenceSourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### CacheNetworkSettings

| Name | Description | Value |
|-|-|-|
| dnsSearchDomain | DNS search domain | string |
| dnsServers | DNS servers for the cache to use.  It will be set from the network configuration if no value is provided. | string[] |
| mtu | The IPv4 maximum transmission unit configured for the subnet. | int |
| ntpServer | NTP server IP Address or FQDN for the cache to use. The default is time.windows.com. | string |


### CacheSecuritySettings

| Name | Description | Value |
|-|-|-|
| accessPolicies | NFS access policies defined for this cache. | NfsAccessPolicy[] |


### NfsAccessPolicy

| Name | Description | Value |
|-|-|-|
| accessRules | The set of rules describing client accesses allowed under this policy. | NfsAccessRule[] (required) |
| name | Name identifying this policy. Access Policy names are not case sensitive. | string (required) |


### NfsAccessRule

| Name | Description | Value |
|-|-|-|
| access | Access allowed by this rule. | 'no''ro''rw' (required) |
| anonymousGID | GID value that replaces 0 when rootSquash is true. This will use the value of anonymousUID if not provided. | string |
| anonymousUID | UID value that replaces 0 when rootSquash is true. 65534 will be used if not provided. | string |
| filter | Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied. | string |
| rootSquash | Map root accesses to anonymousUID and anonymousGID. | bool |
| scope | Scope for this rule. The scope and filter determine which clients match the rule. | 'default''host''network' (required) |
| submountAccess | For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'. | bool |
| suid | Allow SUID semantics. | bool |


### CacheUpgradeSettings

| Name | Description | Value |
|-|-|-|
| scheduledTime | When upgradeScheduleEnabled is true, this field holds the user-chosen upgrade time. At the user-chosen time, the firmware update will automatically be installed on the cache. | string |
| upgradeScheduleEnabled | True if the user chooses to select an installation time between now and firmwareUpdateDeadline. Else the firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation. | bool |


### CacheSku

| Name | Description | Value |
|-|-|-|
| name | SKU name for this cache. | string |
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

### caches/storageTargets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:caches |
| properties | StorageTarget properties | StorageTargetProperties |


### StorageTargetProperties

| Name | Description | Value |
|-|-|-|
| blobNfs | Properties when targetType is blobNfs. | BlobNfsTarget |
| clfs | Properties when targetType is clfs. | ClfsTarget |
| junctions | List of cache namespace junctions to target for namespace associations. | NamespaceJunction[] |
| nfs3 | Properties when targetType is nfs3. | Nfs3Target |
| state | Storage target operational state. | 'Busy''Flushing''Ready''Suspended' |
| targetType | Type of the Storage Target. | 'blobNfs''clfs''nfs3''unknown' (required) |
| unknown | Properties when targetType is unknown. | UnknownTarget |


### BlobNfsTarget

| Name | Description | Value |
|-|-|-|
| target | Resource ID of the storage container. | string |
| usageModel | Identifies the StorageCache usage model to be used for this storage target. | string |
| verificationTimer | Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates. | int |
| writeBackTimer | Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage. | int |


### ClfsTarget

| Name | Description | Value |
|-|-|-|
| target | Resource ID of storage container. | string |


### NamespaceJunction

| Name | Description | Value |
|-|-|-|
| namespacePath | Namespace path on a cache for a Storage Target. | string |
| nfsAccessPolicy | Name of the access policy applied to this junction. | string |
| nfsExport | NFS export where targetPath exists. | string |
| targetPath | Path in Storage Target to which namespacePath points. | string |


### Nfs3Target

| Name | Description | Value |
|-|-|-|
| target | IP address or host name of an NFSv3 host (e.g., 10.0.44.44). | string |
| usageModel | Identifies the StorageCache usage model to be used for this storage target. | string |
| verificationTimer | Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates. | int |
| writeBackTimer | Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage. | int |


### UnknownTarget

| Name | Description | Value |
|-|-|-|
| attributes | Dictionary of string->string pairs containing information about the Storage Target. | object |
