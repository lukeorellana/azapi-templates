```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/sourcecontrols@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      deploymentRollbackEnabled = bool
      gitHubActionConfiguration = {
        codeConfiguration = {
          runtimeStack = "string"
          runtimeVersion = "string"
        }
        containerConfiguration = {
          imageName = "string"
          password = "string"
          serverUrl = "string"
          username = "string"
        }
        generateWorkflowFile = bool
        isLinux = bool
      }
      isGitHubAction = bool
      isManualIntegration = bool
      isMercurial = bool
      repoUrl = "string"
    }
    kind = "string"
  })
}

```

### sites/sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'web' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | SiteSourceControl resource specific properties | SiteSourceControlProperties |


### SiteSourceControlProperties

| Name | Description | Value |
|-|-|-|
| branch | Name of branch to use for deployment. | string |
| deploymentRollbackEnabled | trueto enable deployment rollback; otherwise,false. | bool |
| gitHubActionConfiguration | If GitHub Action is selected, than the associated configuration. | GitHubActionConfiguration |
| isGitHubAction | trueif this is deployed via GitHub action. | bool |
| isManualIntegration | trueto limit to manual integration;falseto enable continuous integration (which configures webhooks into online repos like GitHub). | bool |
| isMercurial | truefor a Mercurial repository;falsefor a Git repository. | bool |
| repoUrl | Repository or source control URL. | string |


### GitHubActionConfiguration

| Name | Description | Value |
|-|-|-|
| codeConfiguration | GitHub Action code configuration. | GitHubActionCodeConfiguration |
| containerConfiguration | GitHub Action container configuration. | GitHubActionContainerConfiguration |
| generateWorkflowFile | Workflow option to determine whether the workflow file should be generated and written to the repository. | bool |
| isLinux | This will help determine the workflow configuration to select. | bool |


### GitHubActionCodeConfiguration

| Name | Description | Value |
|-|-|-|
| runtimeStack | Runtime stack is used to determine the workflow file content for code base apps. | string |
| runtimeVersion | Runtime version is used to determine what build version to set in the workflow file. | string |


### GitHubActionContainerConfiguration

| Name | Description | Value |
|-|-|-|
| imageName | The image name for the build. | string |
| password | The password used to upload the image to the container registry. | string |
| serverUrl | The server URL for the container registry where the build will be hosted. | string |
| username | The username used to upload the image to the container registry. | string |


