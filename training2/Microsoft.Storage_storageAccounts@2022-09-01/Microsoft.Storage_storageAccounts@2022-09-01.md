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


