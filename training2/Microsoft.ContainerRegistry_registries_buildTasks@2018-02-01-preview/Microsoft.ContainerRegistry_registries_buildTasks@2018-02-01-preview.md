```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      alias = "string"
      platform = {
        cpu = int
        osType = "string"
      }
      sourceRepository = {
        isCommitTriggerEnabled = bool
        repositoryUrl = "string"
        sourceControlAuthProperties = {
          expiresIn = int
          refreshToken = "string"
          scope = "string"
          token = "string"
          tokenType = "string"
        }
        sourceControlType = "string"
        isCommitTriggerEnabled = bool
        repositoryUrl = "string"
        sourceControlAuthProperties = {
          expiresIn = int
          refreshToken = "string"
          scope = "string"
          token = "string"
          tokenType = "string"
        }
        sourceControlType = "string"
      }
      status = "string"
      timeout = int
    }
  })
}

```

### registries/buildTasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of a build task. | BuildTaskProperties |


### BuildTaskProperties

| Name | Description | Value |
|-|-|-|
| alias | The alternative updatable name for a build task. | string (required) |
| platform | The platform properties against which the build has to happen. | PlatformProperties(required) |
| sourceRepository | The properties that describes the source(code) for the build task. | SourceRepositoryProperties(required) |
| status | The current status of build task. | 'Disabled''Enabled' |
| timeout | Build timeout in seconds. | int |


### PlatformProperties

| Name | Description | Value |
|-|-|-|
| cpu | The CPU configuration in terms of number of cores required for the build. | int |
| osType | The operating system type required for the build. | 'Linux''Windows' (required) |


### SourceRepositoryProperties

| Name | Description | Value |
|-|-|-|
| isCommitTriggerEnabled | The value of this property indicates whether the source control commit trigger is enabled or not. | bool |
| repositoryUrl | The full URL to the source code repository | string (required) |
| sourceControlAuthProperties | The authorization properties for accessing the source code repository. | SourceControlAuthInfo |
| sourceControlType | The type of source control service. | 'Github''VisualStudioTeamService' (required) |
| isCommitTriggerEnabled | The value of this property indicates whether the source control commit trigger is enabled or not. | bool |
| repositoryUrl | The full URL to the source code repository | string (required) |
| sourceControlAuthProperties | The authorization properties for accessing the source code repository. | SourceControlAuthInfo |
| sourceControlType | The type of source control service. | 'Github''VisualStudioTeamService' (required) |


### SourceControlAuthInfo

| Name | Description | Value |
|-|-|-|
| expiresIn | Time in seconds that the token remains valid | int |
| refreshToken | The refresh token used to refresh the access token. | string |
| scope | The scope of the access token. | string |
| token | The access token used to access the source control provider. | string (required) |
| tokenType | The type of Auth token. | 'OAuth''PAT' |


