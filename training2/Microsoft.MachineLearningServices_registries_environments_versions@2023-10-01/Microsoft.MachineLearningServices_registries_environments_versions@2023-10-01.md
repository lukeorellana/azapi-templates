```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/environments/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRebuild = "string"
      build = {
        contextUri = "string"
        dockerfilePath = "string"
      }
      condaFile = "string"
      description = "string"
      image = "string"
      inferenceConfig = {
        livenessRoute = {
          path = "string"
          port = int
        }
        readinessRoute = {
          path = "string"
          port = int
        }
        scoringRoute = {
          path = "string"
          port = int
        }
      }
      isAnonymous = bool
      isArchived = bool
      osType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/environments/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties | [Required] Additional attributes of the entity. | EnvironmentVersionProperties(required) |


### EnvironmentVersionProperties

| Name | Description | Value |
|-|-|-|
| autoRebuild | Defines if image needs to be rebuilt based on base image changes. | 'Disabled''OnBaseImageUpdate' |
| build | Configuration settings for Docker build context. | BuildContext |
| condaFile | Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.{see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" /} | string |
| description | The asset description text. | string |
| image | Name of the image that will be used for the environment.{seealso href="https://docs.microsoft.com/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" /} | string |
| inferenceConfig | Defines configuration specific to inference. | InferenceContainerProperties |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| osType | The OS type of the environment. | 'Linux''Windows' |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Stage in the environment lifecycle assigned to this environment | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### BuildContext

| Name | Description | Value |
|-|-|-|
| contextUri | [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.{seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" /} | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| dockerfilePath | Path to the Dockerfile in the build context.{seealso href="https://docs.docker.com/engine/reference/builder/" /} | string |


### InferenceContainerProperties

| Name | Description | Value |
|-|-|-|
| livenessRoute | The route to check the liveness of the inference server container. | Route |
| readinessRoute | The route to check the readiness of the inference server container. | Route |
| scoringRoute | The port to send the scoring requests to, within the inference server container. | Route |


### Route

| Name | Description | Value |
|-|-|-|
| path | [Required] The path for the route. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| port | [Required] The port for the route. | int (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


