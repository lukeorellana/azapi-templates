```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/sourceControls@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoSync = bool
      branch = "string"
      description = "string"
      folderPath = "string"
      publishRunbook = bool
      repoUrl = "string"
      securityToken = {
        accessToken = "string"
        refreshToken = "string"
        tokenType = "string"
      }
      sourceType = "string"
    }
  })
}

```

### automationAccounts/sourceControls

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | The properties of the source control. | SourceControlCreateOrUpdatePropertiesOrSourceControl...(required) |


### SourceControlCreateOrUpdatePropertiesOrSourceControl...

| Name | Description | Value |
|-|-|-|
| autoSync | The auto async of the source control. Default is false. | bool |
| branch | The repo branch of the source control. Include branch as empty string for VsoTfvc. | stringConstraints:Max length = 255 |
| description | The user description of the source control. | stringConstraints:Max length = 512 |
| folderPath | The folder path of the source control. Path must be relative. | stringConstraints:Max length = 255 |
| publishRunbook | The auto publish of the source control. Default is true. | bool |
| repoUrl | The repo url of the source control. | stringConstraints:Max length = 2000 |
| securityToken | The authorization token for the repo of the source control. | SourceControlSecurityTokenProperties |
| sourceType | The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive. | 'GitHub''VsoGit''VsoTfvc' |


### SourceControlSecurityTokenProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The access token. | stringConstraints:Max length = 1024 |
| refreshToken | The refresh token. | stringConstraints:Max length = 1024 |
| tokenType | The token type. Must be either PersonalAccessToken or Oauth. | 'Oauth''PersonalAccessToken' |


