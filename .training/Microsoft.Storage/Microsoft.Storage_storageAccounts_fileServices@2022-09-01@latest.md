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


