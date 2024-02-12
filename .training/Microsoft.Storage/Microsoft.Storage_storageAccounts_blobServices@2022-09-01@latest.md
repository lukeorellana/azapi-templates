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


