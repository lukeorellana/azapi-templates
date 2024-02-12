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


