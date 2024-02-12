```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      settings = {
        gitProperty = {
          repositories = [
            {
              hostKey = "string"
              hostKeyAlgorithm = "string"
              label = "string"
              name = "string"
              password = "string"
              patterns = [
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
        }
      }
    }
  })
}

```

### Spring/configurationServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Application Configuration Service properties payload | ConfigurationServiceProperties |


### ConfigurationServiceProperties

| Name | Description | Value |
|-|-|-|
| settings | The settings of Application Configuration Service. | ConfigurationServiceSettings |


### ConfigurationServiceSettings

| Name | Description | Value |
|-|-|-|
| gitProperty | Property of git environment. | ConfigurationServiceGitProperty |


### ConfigurationServiceGitProperty

| Name | Description | Value |
|-|-|-|
| repositories | Repositories of Application Configuration Service git property. | ConfigurationServiceGitRepository[] |


### ConfigurationServiceGitRepository

| Name | Description | Value |
|-|-|-|
| hostKey | Public sshKey of git repository. | string |
| hostKeyAlgorithm | SshKey algorithm of git repository. | string |
| label | Label of the repository | string (required) |
| name | Name of the repository | string (required) |
| password | Password of git repository basic auth. | string |
| patterns | Collection of patterns of the repository | string[] (required) |
| privateKey | Private sshKey algorithm of git repository. | string |
| searchPaths | Searching path of the repository | string[] |
| strictHostKeyChecking | Strict host key checking or not. | bool |
| uri | URI of the repository | string (required) |
| username | Username of git repository basic auth. | string |


