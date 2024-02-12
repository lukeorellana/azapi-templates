```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/locations/applicationWhitelistings@2020-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enforcementMode = "string"
      pathRecommendations = [
        {
          action = "string"
          common = bool
          configurationStatus = "string"
          fileType = "string"
          path = "string"
          publisherInfo = {
            binaryName = "string"
            productName = "string"
            publisherName = "string"
            version = "string"
          }
          type = "string"
          usernames = [
            {
              recommendationAction = "string"
              username = "string"
            }
          ]
          userSids = [
            "string"
          ]
        }
      ]
      protectionMode = {
        exe = "string"
        executable = "string"
        msi = "string"
        script = "string"
      }
      vmRecommendations = [
        {
          configurationStatus = "string"
          enforcementSupport = "string"
          recommendationAction = "string"
          resourceId = "string"
        }
      ]
    }
  })
}

```

### locations/applicationWhitelistings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Represents a machines group and set of rules to be allowed running on a machine | AdaptiveApplicationControlGroupData(required) |


### AdaptiveApplicationControlGroupData

| Name | Description | Value |
|-|-|-|
| enforcementMode | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| pathRecommendations |  | PathRecommendation[] |
| protectionMode | The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux. | ProtectionMode |
| vmRecommendations |  | VmRecommendation[] |


### PathRecommendation

| Name | Description | Value |
|-|-|-|
| action | The recommendation action of the machine or rule | 'Add''Recommended''Remove' |
| common | Whether the application is commonly run on the machine | bool |
| configurationStatus | The configuration status of the machines group or machine or rule | 'Configured''Failed''InProgress''NoStatus''NotConfigured' |
| fileType | The type of the file (for Linux files - Executable is used) | 'Dll''Exe''Executable''Msi''Script''Unknown' |
| path | The full path of the file, or an identifier of the application | string |
| publisherInfo | Represents the publisher information of a process/rule | PublisherInfo |
| type | The type of the rule to be allowed | 'BinarySignature''File''FileHash''ProductSignature''PublisherSignature''VersionAndAboveSignature' |
| usernames |  | UserRecommendation[] |
| userSids |  | string[] |


### PublisherInfo

| Name | Description | Value |
|-|-|-|
| binaryName | The "OriginalName" field taken from the file's version resource | string |
| productName | The product name taken from the file's version resource | string |
| publisherName | The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country | string |
| version | The binary file version taken from the file's version resource | string |


### UserRecommendation

| Name | Description | Value |
|-|-|-|
| recommendationAction | The recommendation action of the machine or rule | 'Add''Recommended''Remove' |
| username | Represents a user that is recommended to be allowed for a certain rule | string |


### ProtectionMode

| Name | Description | Value |
|-|-|-|
| exe | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| executable | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| msi | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |
| script | The application control policy enforcement/protection mode of the machine group | 'Audit''Enforce''None' |


### VmRecommendation

| Name | Description | Value |
|-|-|-|
| configurationStatus | The configuration status of the machines group or machine or rule | 'Configured''Failed''InProgress''NoStatus''NotConfigured' |
| enforcementSupport | The machine supportability of Enforce feature | 'NotSupported''Supported''Unknown' |
| recommendationAction | The recommendation action of the machine or rule | 'Add''Recommended''Remove' |
| resourceId | The full resource id of the machine | string |


