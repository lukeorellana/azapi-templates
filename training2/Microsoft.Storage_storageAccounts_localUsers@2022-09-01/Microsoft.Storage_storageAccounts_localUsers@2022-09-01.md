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


