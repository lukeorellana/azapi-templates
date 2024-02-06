## Microsoft.Storage/storageAccounts@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts@2022-09-01"
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
      accessTier = "string"
      allowBlobPublicAccess = bool
      allowCrossTenantReplication = bool
      allowedCopyScope = "string"
      allowSharedKeyAccess = bool
      azureFilesIdentityBasedAuthentication = {
        activeDirectoryProperties = {
          accountType = "string"
          azureStorageSid = "string"
          domainGuid = "string"
          domainName = "string"
          domainSid = "string"
          forestName = "string"
          netBiosDomainName = "string"
          samAccountName = "string"
        }
        defaultSharePermission = "string"
        directoryServiceOptions = "string"
      }
      customDomain = {
        name = "string"
        useSubDomainName = bool
      }
      defaultToOAuthAuthentication = bool
      dnsEndpointType = "string"
      encryption = {
        identity = {
          federatedIdentityClientId = "string"
          userAssignedIdentity = "string"
        }
        keySource = "string"
        keyvaultproperties = {
          keyname = "string"
          keyvaulturi = "string"
          keyversion = "string"
        }
        requireInfrastructureEncryption = bool
        services = {
          blob = {
            enabled = bool
            keyType = "string"
          }
          file = {
            enabled = bool
            keyType = "string"
          }
          queue = {
            enabled = bool
            keyType = "string"
          }
          table = {
            enabled = bool
            keyType = "string"
          }
        }
      }
      immutableStorageWithVersioning = {
        enabled = bool
        immutabilityPolicy = {
          allowProtectedAppendWrites = bool
          immutabilityPeriodSinceCreationInDays = int
          state = "string"
        }
      }
      isHnsEnabled = bool
      isLocalUserEnabled = bool
      isNfsV3Enabled = bool
      isSftpEnabled = bool
      keyPolicy = {
        keyExpirationPeriodInDays = int
      }
      largeFileSharesState = "string"
      minimumTlsVersion = "string"
      networkAcls = {
        bypass = "string"
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            value = "string"
          }
        ]
        resourceAccessRules = [
          {
            resourceId = "string"
            tenantId = "string"
          }
        ]
        virtualNetworkRules = [
          {
            action = "Allow"
            id = "string"
            state = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      routingPreference = {
        publishInternetEndpoints = bool
        publishMicrosoftEndpoints = bool
        routingChoice = "string"
      }
      sasPolicy = {
        expirationAction = "Log"
        sasExpirationPeriod = "string"
      }
      supportsHttpsTrafficOnly = bool
    }
    sku = {
      name = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### storageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers.Resource name must be unique across Azure. |
| location | Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed. | string (required) |
| tags | Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. | Dictionary of tag names and values. SeeTags in templates |
| sku | Required. Gets or sets the SKU name. | Sku(required) |
| kind | Required. Indicates the type of storage account. | 'BlobStorage''BlockBlobStorage''FileStorage''Storage''StorageV2' (required) |
| extendedLocation | Optional. Set the extended location of the resource. If not set, the storage account will be created in Azure main region. Otherwise it will be created in the specified extended location | ExtendedLocation |
| identity | The identity of the resource. | Identity |
| properties | The parameters used to create the storage account. | StorageAccountPropertiesCreateParametersOrStorageAcc... |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here. | object |


### StorageAccountPropertiesCreateParametersOrStorageAcc...

| Name | Description | Value |
|-|-|-|
| accessTier | Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type. | 'Cool''Hot''Premium' |
| allowBlobPublicAccess | Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property. | bool |
| allowCrossTenantReplication | Allow or disallow cross AAD tenant object replication. The default interpretation is true for this property. | bool |
| allowedCopyScope | Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet. | 'AAD''PrivateLink' |
| allowSharedKeyAccess | Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true. | bool |
| azureFilesIdentityBasedAuthentication | Provides the identity based authentication settings for Azure Files. | AzureFilesIdentityBasedAuthentication |
| customDomain | User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property. | CustomDomain |
| defaultToOAuthAuthentication | A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property. | bool |
| dnsEndpointType | Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier. | 'AzureDnsZone''Standard' |
| encryption | Encryption settings to be used for server-side encryption for the storage account. | Encryption |
| immutableStorageWithVersioning | The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the new containers in the account by default. | ImmutableStorageAccount |
| isHnsEnabled | Account HierarchicalNamespace enabled if sets to true. | bool |
| isLocalUserEnabled | Enables local users feature, if set to true | bool |
| isNfsV3Enabled | NFS 3.0 protocol support enabled if set to true. | bool |
| isSftpEnabled | Enables Secure File Transfer Protocol, if set to true | bool |
| keyPolicy | KeyPolicy assigned to the storage account. | KeyPolicy |
| largeFileSharesState | Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. | 'Disabled''Enabled' |
| minimumTlsVersion | Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property. | 'TLS1_0''TLS1_1''TLS1_2' |
| networkAcls | Network rule set | NetworkRuleSet |
| publicNetworkAccess | Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. | 'Disabled''Enabled' |
| routingPreference | Maintains information about the network routing choice opted by the user for data transfer | RoutingPreference |
| sasPolicy | SasPolicy assigned to the storage account. | SasPolicy |
| supportsHttpsTrafficOnly | Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01. | bool |


### AzureFilesIdentityBasedAuthentication

| Name | Description | Value |
|-|-|-|
| activeDirectoryProperties | Required if directoryServiceOptions are AD, optional if they are AADKERB. | ActiveDirectoryProperties |
| defaultSharePermission | Default share permission for users using Kerberos authentication if RBAC role is not assigned. | 'None''StorageFileDataSmbShareContributor''StorageFileDataSmbShareElevatedContributor''StorageFileDataSmbShareReader' |
| directoryServiceOptions | Indicates the directory service used. Note that this enum may be extended in the future. | 'AADDS''AADKERB''AD''None' (required) |


### ActiveDirectoryProperties

| Name | Description | Value |
|-|-|-|
| accountType | Specifies the Active Directory account type for Azure Storage. | 'Computer''User' |
| azureStorageSid | Specifies the security identifier (SID) for Azure Storage. | string |
| domainGuid | Specifies the domain GUID. | string (required) |
| domainName | Specifies the primary domain that the AD DNS server is authoritative for. | string (required) |
| domainSid | Specifies the security identifier (SID). | string |
| forestName | Specifies the Active Directory forest to get. | string |
| netBiosDomainName | Specifies the NetBIOS domain name. | string |
| samAccountName | Specifies the Active Directory SAMAccountName for Azure Storage. | string |


### CustomDomain

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source. | string (required) |
| useSubDomainName | Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates. | bool |


### Encryption

| Name | Description | Value |
|-|-|-|
| identity | The identity to be used with service-side encryption at rest. | EncryptionIdentity |
| keySource | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault | 'Microsoft.Keyvault''Microsoft.Storage' |
| keyvaultproperties | Properties provided by key vault. | KeyVaultProperties |
| requireInfrastructureEncryption | A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest. | bool |
| services | List of services which support encryption. | EncryptionServices |


### EncryptionIdentity

| Name | Description | Value |
|-|-|-|
| federatedIdentityClientId | ClientId of the multi-tenant application to be used in conjunction with the user-assigned identity for cross-tenant customer-managed-keys server-side encryption on the storage account. | string |
| userAssignedIdentity | Resource identifier of the UserAssigned identity to be associated with server-side encryption on the storage account. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyname | The name of KeyVault key. | string |
| keyvaulturi | The Uri of KeyVault. | string |
| keyversion | The version of KeyVault key. | string |


### EncryptionServices

| Name | Description | Value |
|-|-|-|
| blob | The encryption function of the blob storage service. | EncryptionService |
| file | The encryption function of the file storage service. | EncryptionService |
| queue | The encryption function of the queue storage service. | EncryptionService |
| table | The encryption function of the table storage service. | EncryptionService |


### EncryptionService

| Name | Description | Value |
|-|-|-|
| enabled | A boolean indicating whether or not the service encrypts the data as it is stored. Encryption at rest is enabled by default today and cannot be disabled. | bool |
| keyType | Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used. | 'Account''Service' |


### ImmutableStorageAccount

| Name | Description | Value |
|-|-|-|
| enabled | A boolean flag which enables account-level immutability. All the containers under such an account have object-level immutability enabled by default. | bool |
| immutabilityPolicy | Specifies the default account-level immutability policy which is inherited and applied to objects that do not possess an explicit immutability policy at the object level. The object-level immutability policy has higher precedence than the container-level immutability policy, which has a higher precedence than the account-level immutability policy. | AccountImmutabilityPolicyProperties |


### AccountImmutabilityPolicyProperties

| Name | Description | Value |
|-|-|-|
| allowProtectedAppendWrites | This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. | bool |
| immutabilityPeriodSinceCreationInDays | The immutability period for the blobs in the container since the policy creation, in days. | int |
| state | The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted. | 'Disabled''Locked''Unlocked' |


### KeyPolicy

| Name | Description | Value |
|-|-|-|
| keyExpirationPeriodInDays | The key expiration period in days. | int (required) |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| bypass | Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging,Metrics,AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics. | 'AzureServices''Logging''Metrics''None' |
| defaultAction | Specifies the default action of allow or deny when no other rules match. | 'Allow''Deny' (required) |
| ipRules | Sets the IP ACL rules | IPRule[] |
| resourceAccessRules | Sets the resource access rules | ResourceAccessRule[] |
| virtualNetworkRules | Sets the virtual network rules | VirtualNetworkRule[] |


### IPRule

| Name | Description | Value |
|-|-|-|
| action | The action of IP ACL rule. | 'Allow' |
| value | Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed. | string (required) |


### ResourceAccessRule

| Name | Description | Value |
|-|-|-|
| resourceId | Resource Id | string |
| tenantId | Tenant Id | string |


### VirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| action | The action of virtual network rule. | 'Allow' |
| id | Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}. | string (required) |
| state | Gets the state of virtual network rule. | 'Deprovisioning''Failed''NetworkSourceDeleted''Provisioning''Succeeded' |


### RoutingPreference

| Name | Description | Value |
|-|-|-|
| publishInternetEndpoints | A boolean flag which indicates whether internet routing storage endpoints are to be published | bool |
| publishMicrosoftEndpoints | A boolean flag which indicates whether microsoft routing storage endpoints are to be published | bool |
| routingChoice | Routing Choice defines the kind of network routing opted by the user. | 'InternetRouting''MicrosoftRouting' |


### SasPolicy

| Name | Description | Value |
|-|-|-|
| expirationAction | The SAS expiration action. Can only be Log. | 'Log' (required) |
| sasExpirationPeriod | The SAS expiration period, DD.HH:MM:SS. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType. | 'Premium_LRS''Premium_ZRS''Standard_GRS''Standard_GZRS''Standard_LRS''Standard_RAGRS''Standard_RAGZRS''Standard_ZRS' (required) |
## Microsoft.Storage/storageAccounts/blobServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      automaticSnapshotPolicyEnabled = bool
      changeFeed = {
        enabled = bool
        retentionInDays = int
      }
      containerDeleteRetentionPolicy = {
        allowPermanentDelete = bool
        days = int
        enabled = bool
      }
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
      defaultServiceVersion = "string"
      deleteRetentionPolicy = {
        allowPermanentDelete = bool
        days = int
        enabled = bool
      }
      isVersioningEnabled = bool
      lastAccessTimeTrackingPolicy = {
        blobType = [
          "string"
        ]
        enable = bool
        name = "AccessTimeTracking"
        trackingGranularityInDays = int
      }
      restorePolicy = {
        days = int
        enabled = bool
      }
    }
  })
}

```

### storageAccounts/blobServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The properties of a storage accountâs Blob service. | BlobServicePropertiesProperties |


### BlobServicePropertiesProperties

| Name | Description | Value |
|-|-|-|
| automaticSnapshotPolicyEnabled | Deprecated in favor of isVersioningEnabled property. | bool |
| changeFeed | The blob service properties for change feed events. | ChangeFeed |
| containerDeleteRetentionPolicy | The blob service properties for container soft delete. | DeleteRetentionPolicy |
| cors | Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service. | CorsRules |
| defaultServiceVersion | DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming requestâs version is not specified. Possible values include version 2008-10-27 and all more recent versions. | string |
| deleteRetentionPolicy | The blob service properties for blob soft delete. | DeleteRetentionPolicy |
| isVersioningEnabled | Versioning is enabled if set to true. | bool |
| lastAccessTimeTrackingPolicy | The blob service property to configure last access time based tracking policy. | LastAccessTimeTrackingPolicy |
| restorePolicy | The blob service properties for blob restore policy. | RestorePolicyProperties |


### ChangeFeed

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether change feed event logging is enabled for the Blob service. | bool |
| retentionInDays | Indicates the duration of changeFeed retention in days. Minimum value is 1 day and maximum value is 146000 days (400 years). A null value indicates an infinite retention of the change feed. | int |


### DeleteRetentionPolicy

| Name | Description | Value |
|-|-|-|
| allowPermanentDelete | This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share. | bool |
| days | Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365. | int |
| enabled | Indicates whether DeleteRetentionPolicy is enabled. | bool |


### CorsRules

| Name | Description | Value |
|-|-|-|
| corsRules | The List of CORS rules. You can include up to five CorsRule elements in the request. | CorsRule[] |


### CorsRule

| Name | Description | Value |
|-|-|-|
| allowedHeaders | Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. | string[] (required) |
| allowedMethods | Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. | String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT' (required) |
| allowedOrigins | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains | string[] (required) |
| exposedHeaders | Required if CorsRule element is present. A list of response headers to expose to CORS clients. | string[] (required) |
| maxAgeInSeconds | Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. | int (required) |


### LastAccessTimeTrackingPolicy

| Name | Description | Value |
|-|-|-|
| blobType | An array of predefined supported blob types. Only blockBlob is the supported value. This field is currently read only | string[] |
| enable | When set to true last access time based tracking is enabled. | bool (required) |
| name | Name of the policy. The valid value is AccessTimeTracking. This field is currently read only | 'AccessTimeTracking' |
| trackingGranularityInDays | The field specifies blob object tracking granularity in days, typically how often the blob object should be tracked.This field is currently read only with value as 1 | int |


### RestorePolicyProperties

| Name | Description | Value |
|-|-|-|
| days | how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days. | int |
| enabled | Blob restore is enabled if set to true. | bool (required) |
## Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultEncryptionScope = "string"
      denyEncryptionScopeOverride = bool
      enableNfsV3AllSquash = bool
      enableNfsV3RootSquash = bool
      immutableStorageWithVersioning = {
        enabled = bool
      }
      metadata = {}
      publicAccess = "string"
    }
  })
}

```

### storageAccounts/blobServices/containers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Lowercase letters, numbers, and hyphens.Start with lowercase letter or number. Can't use consecutive hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:blobServices |
| properties | Properties of the blob container. | ContainerProperties |


### ContainerProperties

| Name | Description | Value |
|-|-|-|
| defaultEncryptionScope | Default the container to use specified encryption scope for all writes. | string |
| denyEncryptionScopeOverride | Block override of encryption scope from the container default. | bool |
| enableNfsV3AllSquash | Enable NFSv3 all squash on blob container. | bool |
| enableNfsV3RootSquash | Enable NFSv3 root squash on blob container. | bool |
| immutableStorageWithVersioning | The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process. | ImmutableStorageWithVersioning |
| metadata | A name-value pair to associate with the container as metadata. | object |
| publicAccess | Specifies whether data in the container may be accessed publicly and the level of access. | 'Blob''Container''None' |


### ImmutableStorageWithVersioning

| Name | Description | Value |
|-|-|-|
| enabled | This is an immutable property, when set to true it enables object level immutability at the container level. | bool |
## Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowProtectedAppendWrites = bool
      allowProtectedAppendWritesAll = bool
      immutabilityPeriodSinceCreationInDays = int
    }
  })
}

```

### storageAccounts/blobServices/containers/immutability...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | The properties of an ImmutabilityPolicy of a blob container. | ImmutabilityPolicyProperty(required) |


### ImmutabilityPolicyProperty

| Name | Description | Value |
|-|-|-|
| allowProtectedAppendWrites | This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. | bool |
| allowProtectedAppendWritesAll | This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive. | bool |
| immutabilityPeriodSinceCreationInDays | The immutability period for the blobs in the container since the policy creation, in days. | int |
## Microsoft.Storage/storageAccounts/encryptionScopes@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/encryptionScopes@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyVaultProperties = {
        keyUri = "string"
      }
      requireInfrastructureEncryption = bool
      source = "string"
      state = "string"
    }
  })
}

```

### storageAccounts/encryptionScopes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Properties of the encryption scope. | EncryptionScopeProperties |


### EncryptionScopeProperties

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'. | EncryptionScopeKeyVaultProperties |
| requireInfrastructureEncryption | A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest. | bool |
| source | The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault. | 'Microsoft.KeyVault''Microsoft.Storage' |
| state | The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled. | 'Disabled''Enabled' |


### EncryptionScopeKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyUri | The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope. | string |
## Microsoft.Storage/storageAccounts/fileServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/fileServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
      protocolSettings = {
        smb = {
          authenticationMethods = "string"
          channelEncryption = "string"
          kerberosTicketEncryption = "string"
          multichannel = {
            enabled = bool
          }
          versions = "string"
        }
      }
      shareDeleteRetentionPolicy = {
        allowPermanentDelete = bool
        days = int
        enabled = bool
      }
    }
  })
}

```

### storageAccounts/fileServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The properties of File services in storage account. | FileServicePropertiesProperties |


### FileServicePropertiesProperties

| Name | Description | Value |
|-|-|-|
| cors | Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service. | CorsRules |
| protocolSettings | Protocol settings for file service | ProtocolSettings |
| shareDeleteRetentionPolicy | The file service properties for share soft delete. | DeleteRetentionPolicy |


### CorsRules

| Name | Description | Value |
|-|-|-|
| corsRules | The List of CORS rules. You can include up to five CorsRule elements in the request. | CorsRule[] |


### CorsRule

| Name | Description | Value |
|-|-|-|
| allowedHeaders | Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. | string[] (required) |
| allowedMethods | Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. | String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT' (required) |
| allowedOrigins | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains | string[] (required) |
| exposedHeaders | Required if CorsRule element is present. A list of response headers to expose to CORS clients. | string[] (required) |
| maxAgeInSeconds | Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. | int (required) |


### ProtocolSettings

| Name | Description | Value |
|-|-|-|
| smb | Setting for SMB protocol | SmbSetting |


### SmbSetting

| Name | Description | Value |
|-|-|-|
| authenticationMethods | SMB authentication methods supported by server. Valid values are NTLMv2, Kerberos. Should be passed as a string with delimiter ';'. | string |
| channelEncryption | SMB channel encryption supported by server. Valid values are AES-128-CCM, AES-128-GCM, AES-256-GCM. Should be passed as a string with delimiter ';'. | string |
| kerberosTicketEncryption | Kerberos ticket encryption supported by server. Valid values are RC4-HMAC, AES-256. Should be passed as a string with delimiter ';' | string |
| multichannel | Multichannel setting. Applies to Premium FileStorage only. | Multichannel |
| versions | SMB protocol versions supported by server. Valid values are SMB2.1, SMB3.0, SMB3.1.1. Should be passed as a string with delimiter ';'. | string |


### Multichannel

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether multichannel is enabled | bool |


### DeleteRetentionPolicy

| Name | Description | Value |
|-|-|-|
| allowPermanentDelete | This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share. | bool |
| days | Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365. | int |
| enabled | Indicates whether DeleteRetentionPolicy is enabled. | bool |
## Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessTier = "string"
      enabledProtocols = "string"
      metadata = {}
      rootSquash = "string"
      shareQuota = int
      signedIdentifiers = [
        {
          accessPolicy = {
            expiryTime = "string"
            permission = "string"
            startTime = "string"
          }
          id = "string"
        }
      ]
    }
  })
}

```

### storageAccounts/fileServices/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen. Can't use consecutive hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:fileServices |
| properties | Properties of the file share. | FileShareProperties |


### FileShareProperties

| Name | Description | Value |
|-|-|-|
| accessTier | Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. | 'Cool''Hot''Premium''TransactionOptimized' |
| enabledProtocols | The authentication protocol that is used for the file share. Can only be specified when creating a share. | 'NFS''SMB' |
| metadata | A name-value pair to associate with the share as metadata. | object |
| rootSquash | The property is for NFS share only. The default is NoRootSquash. | 'AllSquash''NoRootSquash''RootSquash' |
| shareQuota | The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. | int |
| signedIdentifiers | List of stored access policies specified on the share. | SignedIdentifier[] |


### SignedIdentifier

| Name | Description | Value |
|-|-|-|
| accessPolicy | Access policy | AccessPolicy |
| id | An unique identifier of the stored access policy. | string |


### AccessPolicy

| Name | Description | Value |
|-|-|-|
| expiryTime | Expiry time of the access policy | string |
| permission | List of abbreviated permissions. | string |
| startTime | Start time of the access policy | string |
## Microsoft.Storage/storageAccounts/inventoryPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/inventoryPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policy = {
        enabled = bool
        rules = [
          {
            definition = {
              filters = {
                blobTypes = [
                  "string"
                ]
                excludePrefix = [
                  "string"
                ]
                includeBlobVersions = bool
                includeDeleted = bool
                includeSnapshots = bool
                prefixMatch = [
                  "string"
                ]
              }
              format = "string"
              objectType = "string"
              schedule = "string"
              schemaFields = [
                "string"
              ]
            }
            destination = "string"
            enabled = bool
            name = "string"
          }
        ]
        type = "Inventory"
      }
    }
  })
}

```

### storageAccounts/inventoryPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Returns the storage account blob inventory policy rules. | BlobInventoryPolicyProperties |


### BlobInventoryPolicyProperties

| Name | Description | Value |
|-|-|-|
| policy | The storage account blob inventory policy object. It is composed of policy rules. | BlobInventoryPolicySchema(required) |


### BlobInventoryPolicySchema

| Name | Description | Value |
|-|-|-|
| enabled | Policy is enabled if set to true. | bool (required) |
| rules | The storage account blob inventory policy rules. The rule is applied when it is enabled. | BlobInventoryPolicyRule[] (required) |
| type | The valid value is Inventory | 'Inventory' (required) |


### BlobInventoryPolicyRule

| Name | Description | Value |
|-|-|-|
| definition | An object that defines the blob inventory policy rule. | BlobInventoryPolicyDefinition(required) |
| destination | Container name where blob inventory files are stored. Must be pre-created. | string (required) |
| enabled | Rule is enabled when set to true. | bool (required) |
| name | A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy. | string (required) |


### BlobInventoryPolicyDefinition

| Name | Description | Value |
|-|-|-|
| filters | An object that defines the filter set. | BlobInventoryPolicyFilter |
| format | This is a required field, it specifies the format for the inventory files. | 'Csv''Parquet' (required) |
| objectType | This is a required field. This field specifies the scope of the inventory created either at the blob or container level. | 'Blob''Container' (required) |
| schedule | This is a required field. This field is used to schedule an inventory formation. | 'Daily''Weekly' (required) |
| schemaFields | This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts. | string[] (required) |


### BlobInventoryPolicyFilter

| Name | Description | Value |
|-|-|-|
| blobTypes | An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs. This field is required when definition.objectType property is set to 'Blob'. | string[] |
| excludePrefix | An array of strings with maximum 10 blob prefixes to be excluded from the inventory. | string[] |
| includeBlobVersions | Includes blob versions in blob inventory when value is set to true. The definition.schemaFields values 'VersionId and IsCurrentVersion' are required if this property is set to true, else they must be excluded. | bool |
| includeDeleted | For 'Container' definition.objectType the definition.schemaFields must include 'Deleted, Version, DeletedTime and RemainingRetentionDays'. For 'Blob' definition.objectType and HNS enabled storage accounts the definition.schemaFields must include 'DeletionId, Deleted, DeletedTime and RemainingRetentionDays' and for Hns disabled accounts the definition.schemaFields must include 'Deleted and RemainingRetentionDays', else it must be excluded. | bool |
| includeSnapshots | Includes blob snapshots in blob inventory when value is set to true. The definition.schemaFields value 'Snapshot' is required if this property is set to true, else it must be excluded. | bool |
| prefixMatch | An array of strings with maximum 10 blob prefixes to be included in the inventory. | string[] |
## Microsoft.Storage/storageAccounts/localUsers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/localUsers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hasSharedKey = bool
      hasSshKey = bool
      hasSshPassword = bool
      homeDirectory = "string"
      permissionScopes = [
        {
          permissions = "string"
          resourceName = "string"
          service = "string"
        }
      ]
      sshAuthorizedKeys = [
        {
          description = "string"
          key = "string"
        }
      ]
    }
  })
}

```

### storageAccounts/localUsers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Storage account local user properties. | LocalUserProperties |


### LocalUserProperties

| Name | Description | Value |
|-|-|-|
| hasSharedKey | Indicates whether shared key exists. Set it to false to remove existing shared key. | bool |
| hasSshKey | Indicates whether ssh key exists. Set it to false to remove existing SSH key. | bool |
| hasSshPassword | Indicates whether ssh password exists. Set it to false to remove existing SSH password. | bool |
| homeDirectory | Optional, local user home directory. | string |
| permissionScopes | The permission scopes of the local user. | PermissionScope[] |
| sshAuthorizedKeys | Optional, local user ssh authorized keys for SFTP. | SshPublicKey[] |


### PermissionScope

| Name | Description | Value |
|-|-|-|
| permissions | The permissions for the local user. Possible values include: Read (r), Write (w), Delete (d), List (l), and Create (c). | string (required) |
| resourceName | The name of resource, normally the container name or the file share name, used by the local user. | string (required) |
| service | The service used by the local user, e.g. blob, file. | string (required) |


### SshPublicKey

| Name | Description | Value |
|-|-|-|
| description | Optional. It is used to store the function/usage of the key | string |
| key | Ssh public key base64 encoded. The format should be: '{keyType} {keyData}', e.g. ssh-rsa AAAABBBB | string |
## Microsoft.Storage/storageAccounts/managementPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/managementPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policy = {
        rules = [
          {
            definition = {
              actions = {
                baseBlob = {
                  delete = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  enableAutoTierToHotFromCool = bool
                  tierToArchive = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  tierToCold = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  tierToCool = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  tierToHot = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                }
                snapshot = {
                  delete = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToArchive = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCold = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCool = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToHot = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                }
                version = {
                  delete = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToArchive = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCold = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCool = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToHot = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                }
              }
              filters = {
                blobIndexMatch = [
                  {
                    name = "string"
                    op = "string"
                    value = "string"
                  }
                ]
                blobTypes = [
                  "string"
                ]
                prefixMatch = [
                  "string"
                ]
              }
            }
            enabled = bool
            name = "string"
            type = "Lifecycle"
          }
        ]
      }
    }
  })
}

```

### storageAccounts/managementPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Returns the Storage Account Data Policies Rules. | ManagementPolicyProperties |


### ManagementPolicyProperties

| Name | Description | Value |
|-|-|-|
| policy | The Storage Account ManagementPolicy, in JSON format. See more details in: /azure/storage/common/storage-lifecycle-managment-concepts. | ManagementPolicySchema(required) |


### ManagementPolicySchema

| Name | Description | Value |
|-|-|-|
| rules | The Storage Account ManagementPolicies Rules. See more details in: /azure/storage/common/storage-lifecycle-managment-concepts. | ManagementPolicyRule[] (required) |


### ManagementPolicyRule

| Name | Description | Value |
|-|-|-|
| definition | An object that defines the Lifecycle rule. | ManagementPolicyDefinition(required) |
| enabled | Rule is enabled if set to true. | bool |
| name | A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy. | string (required) |
| type | The valid value is Lifecycle | 'Lifecycle' (required) |


### ManagementPolicyDefinition

| Name | Description | Value |
|-|-|-|
| actions | An object that defines the action set. | ManagementPolicyAction(required) |
| filters | An object that defines the filter set. | ManagementPolicyFilter |


### ManagementPolicyAction

| Name | Description | Value |
|-|-|-|
| baseBlob | The management policy action for base blob | ManagementPolicyBaseBlob |
| snapshot | The management policy action for snapshot | ManagementPolicySnapShot |
| version | The management policy action for version | ManagementPolicyVersion |


### ManagementPolicyBaseBlob

| Name | Description | Value |
|-|-|-|
| delete | The function to delete the blob | DateAfterModification |
| enableAutoTierToHotFromCool | This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan. | bool |
| tierToArchive | The function to tier blobs to archive storage. | DateAfterModification |
| tierToCold | The function to tier blobs to cold storage. | DateAfterModification |
| tierToCool | The function to tier blobs to cool storage. | DateAfterModification |
| tierToHot | The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts | DateAfterModification |


### DateAfterModification

| Name | Description | Value |
|-|-|-|
| daysAfterCreationGreaterThan | Value indicating the age in days after blob creation. | int |
| daysAfterLastAccessTimeGreaterThan | Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy | int |
| daysAfterLastTierChangeGreaterThan | Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterModificationGreaterThan to be set for baseBlobs based actions. The blob will be archived if both the conditions are satisfied. | int |
| daysAfterModificationGreaterThan | Value indicating the age in days after last modification | int |


### ManagementPolicySnapShot

| Name | Description | Value |
|-|-|-|
| delete | The function to delete the blob snapshot | DateAfterCreation |
| tierToArchive | The function to tier blob snapshot to archive storage. | DateAfterCreation |
| tierToCold | The function to tier blobs to cold storage. | DateAfterCreation |
| tierToCool | The function to tier blob snapshot to cool storage. | DateAfterCreation |
| tierToHot | The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts | DateAfterCreation |


### DateAfterCreation

| Name | Description | Value |
|-|-|-|
| daysAfterCreationGreaterThan | Value indicating the age in days after creation | int (required) |
| daysAfterLastTierChangeGreaterThan | Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterCreationGreaterThan to be set for snapshots and blob version based actions. The blob will be archived if both the conditions are satisfied. | int |


### ManagementPolicyVersion

| Name | Description | Value |
|-|-|-|
| delete | The function to delete the blob version | DateAfterCreation |
| tierToArchive | The function to tier blob version to archive storage. | DateAfterCreation |
| tierToCold | The function to tier blobs to cold storage. | DateAfterCreation |
| tierToCool | The function to tier blob version to cool storage. | DateAfterCreation |
| tierToHot | The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts | DateAfterCreation |


### ManagementPolicyFilter

| Name | Description | Value |
|-|-|-|
| blobIndexMatch | An array of blob index tag based filters, there can be at most 10 tag filters | TagFilter[] |
| blobTypes | An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob. | string[] (required) |
| prefixMatch | An array of strings for prefixes to be match. | string[] |


### TagFilter

| Name | Description | Value |
|-|-|-|
| name | This is the filter tag name, it can have 1 - 128 characters | string (required) |
| op | This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported | string (required) |
| value | This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters | string (required) |
## Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destinationAccount = "string"
      rules = [
        {
          destinationContainer = "string"
          filters = {
            minCreationTime = "string"
            prefixMatch = [
              "string"
            ]
          }
          ruleId = "string"
          sourceContainer = "string"
        }
      ]
      sourceAccount = "string"
    }
  })
}

```

### storageAccounts/objectReplicationPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Returns the Storage Account Object Replication Policy. | ObjectReplicationPolicyProperties |


### ObjectReplicationPolicyProperties

| Name | Description | Value |
|-|-|-|
| destinationAccount | Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false. | string (required) |
| rules | The storage account object replication rules. | ObjectReplicationPolicyRule[] |
| sourceAccount | Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false. | string (required) |


### ObjectReplicationPolicyRule

| Name | Description | Value |
|-|-|-|
| destinationContainer | Required. Destination container name. | string (required) |
| filters | Optional. An object that defines the filter set. | ObjectReplicationPolicyFilter |
| ruleId | Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. | string |
| sourceContainer | Required. Source container name. | string (required) |


### ObjectReplicationPolicyFilter

| Name | Description | Value |
|-|-|-|
| minCreationTime | Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z | string |
| prefixMatch | Optional. Filters the results to replicate only blobs whose names begin with the specified prefix. | string[] |
## Microsoft.Storage/storageAccounts/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### storageAccounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.Storage/storageAccounts/queueServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/queueServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
    }
  })
}

```

### storageAccounts/queueServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The properties of a storage accountâs Queue service. | QueueServicePropertiesProperties |


### QueueServicePropertiesProperties

| Name | Description | Value |
|-|-|-|
| cors | Specifies CORS rules for the Queue service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Queue service. | CorsRules |


### CorsRules

| Name | Description | Value |
|-|-|-|
| corsRules | The List of CORS rules. You can include up to five CorsRule elements in the request. | CorsRule[] |


### CorsRule

| Name | Description | Value |
|-|-|-|
| allowedHeaders | Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. | string[] (required) |
| allowedMethods | Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. | String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT' (required) |
| allowedOrigins | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains | string[] (required) |
| exposedHeaders | Required if CorsRule element is present. A list of response headers to expose to CORS clients. | string[] (required) |
| maxAgeInSeconds | Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. | int (required) |
## Microsoft.Storage/storageAccounts/queueServices/queues@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/queueServices/queues@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metadata = {}
    }
  })
}

```

### storageAccounts/queueServices/queues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:queueServices |
| properties | Queue resource properties. | QueueProperties |


### QueueProperties

| Name | Description | Value |
|-|-|-|
| metadata | A name-value pair that represents queue metadata. | object |
## Microsoft.Storage/storageAccounts/tableServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/tableServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
    }
  })
}

```

### storageAccounts/tableServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The properties of a storage accountâs Table service. | TableServicePropertiesProperties |


### TableServicePropertiesProperties

| Name | Description | Value |
|-|-|-|
| cors | Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service. | CorsRules |


### CorsRules

| Name | Description | Value |
|-|-|-|
| corsRules | The List of CORS rules. You can include up to five CorsRule elements in the request. | CorsRule[] |


### CorsRule

| Name | Description | Value |
|-|-|-|
| allowedHeaders | Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. | string[] (required) |
| allowedMethods | Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. | String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT' (required) |
| allowedOrigins | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains | string[] (required) |
| exposedHeaders | Required if CorsRule element is present. A list of response headers to expose to CORS clients. | string[] (required) |
| maxAgeInSeconds | Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. | int (required) |
## Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      signedIdentifiers = [
        {
          accessPolicy = {
            expiryTime = "string"
            permission = "string"
            startTime = "string"
          }
          id = "string"
        }
      ]
    }
  })
}

```

### storageAccounts/tableServices/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tableServices |
| properties | Table resource properties. | TableProperties |


### TableProperties

| Name | Description | Value |
|-|-|-|
| signedIdentifiers | List of stored access policies specified on the table. | TableSignedIdentifier[] |


### TableSignedIdentifier

| Name | Description | Value |
|-|-|-|
| accessPolicy | Access policy | TableAccessPolicy |
| id | unique-64-character-value of the stored access policy. | string (required) |


### TableAccessPolicy

| Name | Description | Value |
|-|-|-|
| expiryTime | Expiry time of the access policy | string |
| permission | Required. List of abbreviated permissions. Supported permission values include 'r','a','u','d' | string (required) |
| startTime | Start time of the access policy | string |
