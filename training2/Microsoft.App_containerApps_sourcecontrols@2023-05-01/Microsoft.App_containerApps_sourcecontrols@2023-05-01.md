```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps/sourcecontrols@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      githubActionConfiguration = {
        azureCredentials = {
          clientId = "string"
          clientSecret = "string"
          kind = "string"
          subscriptionId = "string"
          tenantId = "string"
        }
        contextPath = "string"
        githubPersonalAccessToken = "string"
        image = "string"
        os = "string"
        publishType = "string"
        registryInfo = {
          registryPassword = "string"
          registryUrl = "string"
          registryUserName = "string"
        }
        runtimeStack = "string"
        runtimeVersion = "string"
      }
      repoUrl = "string"
    }
  })
}

```

### containerApps/sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containerApps |
| properties | SourceControl resource specific properties | SourceControlProperties |


### SourceControlProperties

| Name | Description | Value |
|-|-|-|
| branch | The branch which will trigger the auto deployment | string |
| githubActionConfiguration | Container App Revision Template with all possible settings and thedefaults if user did not provide them. The defaults are populatedas they were at the creation time | GithubActionConfiguration |
| repoUrl | The repo url which will be integrated to ContainerApp. | string |


### GithubActionConfiguration

| Name | Description | Value |
|-|-|-|
| azureCredentials | AzureCredentials configurations. | AzureCredentials |
| contextPath | Context path | string |
| githubPersonalAccessToken | One time Github PAT to configure github environment | string |
| image | Image name | string |
| os | Operation system | string |
| publishType | Code or Image | string |
| registryInfo | Registry configurations. | RegistryInfo |
| runtimeStack | Runtime stack | string |
| runtimeVersion | Runtime version | string |


### AzureCredentials

| Name | Description | Value |
|-|-|-|
| clientId | Client Id. | string |
| clientSecret | Client Secret. | string |
| kind | Kind of auth github does for deploying the template | string |
| subscriptionId | Subscription Id. | string |
| tenantId | Tenant Id. | string |


### RegistryInfo

| Name | Description | Value |
|-|-|-|
| registryPassword | registry secret. | string |
| registryUrl | registry server Url. | string |
| registryUserName | registry username. | string |


