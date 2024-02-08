```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      type = "string"
      // For remaining properties, see BuildStepProperties objects
    }
  })
}

```

### registries/buildTasks/steps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:buildTasks |
| properties | The properties of a build step. | BuildStepProperties |


### BuildStepProperties

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Docker(required) |


### DockerBuildStep

| Name | Description | Value |
|-|-|-|
| type | The type of the step. | 'Docker' (required) |
| baseImageTrigger | The type of the auto trigger for base image dependency updates. | 'All''None''Runtime' |
| branch | The repository branch name. | string |
| buildArguments | The custom arguments for building this build step. | BuildArgument[] |
| contextPath | The relative context path for a docker build in the source. | string |
| dockerFilePath | The Docker file path relative to the source control root. | string |
| imageNames | The fully qualified image names including the repository and tag. | string[] |
| isPushEnabled | The value of this property indicates whether the image built should be pushed to the registry or not. | bool |
| noCache | The value of this property indicates whether the image cache is enabled or not. | bool |


### BuildArgument

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | bool |
| name | The name of the argument. | string (required) |
| type | The type of the argument. | 'DockerBuildArgument' (required) |
| value | The value of the argument. | string (required) |


