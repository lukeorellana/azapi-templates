```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      configServer = {
        gitProperty = {
          hostKey = "string"
          hostKeyAlgorithm = "string"
          label = "string"
          password = "string"
          privateKey = "string"
          repositories = [
            {
              hostKey = "string"
              hostKeyAlgorithm = "string"
              label = "string"
              name = "string"
              password = "string"
              pattern = [
                "string"
              ]
              privateKey = "string"
              searchPaths = [
                "string"
              ]
              strictHostKeyChecking = bool
              uri = "string"
              username = "string"
            }
          ]
          searchPaths = [
            "string"
          ]
          strictHostKeyChecking = bool
          uri = "string"
          username = "string"
        }
      }
      error = {
        code = "string"
        message = "string"
      }
    }
  })
}

```

### Spring/configServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the Config Server resource | ConfigServerProperties |


### ConfigServerProperties

| Name | Description | Value |
|-|-|-|
| configServer | Settings of config server. | ConfigServerSettings |
| error | Error when apply config server settings. | Error |


### ConfigServerSettings

| Name | Description | Value |
|-|-|-|
| gitProperty | Property of git environment. | ConfigServerGitProperty |


### ConfigServerGitProperty

| Name | Description | Value |
|-|-|-|
| hostKey | Public sshKey of git repository. | string |
| hostKeyAlgorithm | SshKey algorithm of git repository. | string |
| label | Label of the repository | string |
| password | Password of git repository basic auth. | string |
| privateKey | Private sshKey algorithm of git repository. | string |
| repositories | Repositories of git. | GitPatternRepository[] |
| searchPaths | Searching path of the repository | string[] |
| strictHostKeyChecking | Strict host key checking or not. | bool |
| uri | URI of the repository | string (required) |
| username | Username of git repository basic auth. | string |


### GitPatternRepository

| Name | Description | Value |
|-|-|-|
| hostKey | Public sshKey of git repository. | string |
| hostKeyAlgorithm | SshKey algorithm of git repository. | string |
| label | Label of the repository | string |
| name | Name of the repository | string (required) |
| password | Password of git repository basic auth. | string |
| pattern | Collection of pattern of the repository | string[] |
| privateKey | Private sshKey algorithm of git repository. | string |
| searchPaths | Searching path of the repository | string[] |
| strictHostKeyChecking | Strict host key checking or not. | bool |
| uri | URI of the repository | string (required) |
| username | Username of git repository basic auth. | string |


### Error

| Name | Description | Value |
|-|-|-|
| code | The code of error. | string |
| message | The message of error. | string |


