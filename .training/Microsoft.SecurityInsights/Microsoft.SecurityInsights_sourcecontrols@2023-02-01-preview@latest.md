```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/sourcecontrols@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentTypes = [
        "string"
      ]
      description = "string"
      displayName = "string"
      id = "string"
      lastDeploymentInfo = {
        deployment = {
          deploymentId = "string"
          deploymentLogsUrl = "string"
          deploymentResult = "string"
          deploymentState = "string"
          deploymentTime = "string"
        }
        deploymentFetchStatus = "string"
        message = "string"
      }
      repository = {
        branch = "string"
        deploymentLogsUrl = "string"
        displayUrl = "string"
        pathMapping = [
          {
            contentType = "string"
            path = "string"
          }
        ]
        url = "string"
      }
      repositoryResourceInfo = {
        azureDevOpsResourceInfo = {
          pipelineId = "string"
          serviceConnectionId = "string"
        }
        gitHubResourceInfo = {
          appInstallationId = "string"
        }
        webhook = {
          rotateWebhookSecret = bool
          webhookId = "string"
          webhookSecretUpdateTime = "string"
          webhookUrl = "string"
        }
      }
      repoType = "string"
      version = "string"
    }
    etag = "string"
  })
}

```

### sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | source control properties | SourceControlProperties |


### SourceControlProperties

| Name | Description | Value |
|-|-|-|
| contentTypes | Array of source control content types. | String array containing any of:'AnalyticRule''Workbook' (required) |
| description | A description of the source control | string |
| displayName | The display name of the source control | string (required) |
| id | The id (a Guid) of the source control | string |
| lastDeploymentInfo | Information regarding the latest deployment for the source control. | DeploymentInfo |
| repository | Repository metadata. | Repository(required) |
| repositoryResourceInfo | Information regarding the resources created in user's repository. | RepositoryResourceInfo |
| repoType | The repository type of the source control | 'DevOps''Github' (required) |
| version | The version number associated with the source control | 'V1''V2' |


### DeploymentInfo

| Name | Description | Value |
|-|-|-|
| deployment | Deployment information. | Deployment |
| deploymentFetchStatus | Status while fetching the last deployment. | 'NotFound''Success''Unauthorized' |
| message | Additional details about the deployment that can be shown to the user. | string |


### Deployment

| Name | Description | Value |
|-|-|-|
| deploymentId | Deployment identifier. | string |
| deploymentLogsUrl | Url to access repository action logs. | string |
| deploymentResult | The outcome of the deployment. | 'Canceled''Failed''Success' |
| deploymentState | Current status of the deployment. | 'Canceling''Completed''In_Progress''Queued' |
| deploymentTime | The time when the deployment finished. | string |


### Repository

| Name | Description | Value |
|-|-|-|
| branch | Branch name of repository. | string |
| deploymentLogsUrl | Url to access repository action logs. | string |
| displayUrl | Display url of repository. | string |
| pathMapping | Dictionary of source control content type and path mapping. | ContentPathMap[] |
| url | Url of repository. | string |


### ContentPathMap

| Name | Description | Value |
|-|-|-|
| contentType | Content type. | 'AnalyticRule''Workbook' |
| path | The path to the content. | string |


### RepositoryResourceInfo

| Name | Description | Value |
|-|-|-|
| azureDevOpsResourceInfo | Resources created in Azure DevOps for this source-control. | AzureDevOpsResourceInfo |
| gitHubResourceInfo | Resources created in GitHub for this source-control. | GitHubResourceInfo |
| webhook | The webhook object created for the source-control. | Webhook |


### AzureDevOpsResourceInfo

| Name | Description | Value |
|-|-|-|
| pipelineId | Id of the pipeline created for the source-control. | string |
| serviceConnectionId | Id of the service-connection created for the source-control. | string |


### GitHubResourceInfo

| Name | Description | Value |
|-|-|-|
| appInstallationId | GitHub application installation id. | string |


### Webhook

| Name | Description | Value |
|-|-|-|
| rotateWebhookSecret | A flag to instruct the backend service to rotate webhook secret. | bool |
| webhookId | Unique identifier for the webhook. | string |
| webhookSecretUpdateTime | Time when the webhook secret was updated. | string |
| webhookUrl | URL that gets invoked by the webhook. | string |


