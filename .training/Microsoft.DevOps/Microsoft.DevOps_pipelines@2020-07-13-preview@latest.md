```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevOps/pipelines@2020-07-13-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bootstrapConfiguration = {
        sourceRepository = {
          authorization = {
            authorizationType = "personalAccessToken"
            parameters = {}
          }
          defaultBranch = "string"
          id = "string"
          properties = {}
          repositoryType = "string"
        }
        template = {
          id = "string"
          parameters = {}
        }
      }
      pipelineType = "string"
      // For remaining properties, see PipelineProperties objects
    }
  })
}

```

### pipelines

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location | string |
| tags | Resource Tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Custom properties of the Pipeline. | PipelineProperties(required) |


### PipelineProperties

| Name | Description | Value |
|-|-|-|
| bootstrapConfiguration | Configuration used to bootstrap the Pipeline. | BootstrapConfiguration(required) |
| pipelineType | Set the object type | azurePipelinegithubWorkflow(required) |


### BootstrapConfiguration

| Name | Description | Value |
|-|-|-|
| sourceRepository | Repository containing the source code for the pipeline. Currently only 'azurePipeline' pipeline type supports this. | CodeRepository |
| template | Template used to bootstrap the pipeline. | PipelineTemplate(required) |


### CodeRepository

| Name | Description | Value |
|-|-|-|
| authorization | Authorization info to access the code repository. | Authorization |
| defaultBranch | Default branch used to configure Continuous Integration (CI) in the pipeline. | string (required) |
| id | Unique immutable identifier of the code repository. | string (required) |
| properties | Repository-specific properties. | object |
| repositoryType | Type of code repository. | 'gitHub''vstsGit' (required) |


### Authorization

| Name | Description | Value |
|-|-|-|
| authorizationType | Type of authorization. | 'personalAccessToken' (required) |
| parameters | Authorization parameters corresponding to the authorization type. | object |


### PipelineTemplate

| Name | Description | Value |
|-|-|-|
| id | Unique identifier of the pipeline template. | string (required) |
| parameters | Dictionary of input parameters used in the pipeline template. | object |


### AzurePipelineProperties

| Name | Description | Value |
|-|-|-|
| pipelineType | Specifies which CI/CD provider to use. Valid options are 'azurePipeline', 'githubWorkflow'. | 'azurePipeline' (required) |
| organization | Reference to the Azure DevOps Organization containing the Pipeline. Required for 'azurePipeline' pipeline type. | OrganizationReference(required) |
| project | Reference to the Azure DevOps Project containing the Pipeline. Required for 'azurePipeline' pipeline type. | ProjectReference(required) |


### OrganizationReference

| Name | Description | Value |
|-|-|-|
| name | Name of the Azure DevOps Organization. | string (required) |


### ProjectReference

| Name | Description | Value |
|-|-|-|
| name | Name of the Azure DevOps Project. | string (required) |


### GithubWorkflowProperties

| Name | Description | Value |
|-|-|-|
| pipelineType | Specifies which CI/CD provider to use. Valid options are 'azurePipeline', 'githubWorkflow'. | 'githubWorkflow' (required) |
| repository | Contains the specifications of the repository to be created for generating the workflow. Required for 'githubWorkflow' pipeline type. | CodeRepository(required) |


