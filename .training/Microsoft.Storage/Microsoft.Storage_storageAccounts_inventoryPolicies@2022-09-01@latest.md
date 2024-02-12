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


