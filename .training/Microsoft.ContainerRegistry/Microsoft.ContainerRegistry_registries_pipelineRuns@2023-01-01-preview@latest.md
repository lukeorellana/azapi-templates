```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      forceUpdateTag = "string"
      request = {
        artifacts = [
          "string"
        ]
        catalogDigest = "string"
        pipelineResourceId = "string"
        source = {
          name = "string"
          type = "AzureStorageBlob"
        }
        target = {
          name = "string"
          type = "AzureStorageBlob"
        }
      }
    }
  })
}

```

### registries/pipelineRuns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of a pipeline run. | PipelineRunProperties |


### PipelineRunProperties

| Name | Description | Value |
|-|-|-|
| forceUpdateTag | How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed. | string |
| request | The request parameters for a pipeline run. | PipelineRunRequest |


### PipelineRunRequest

| Name | Description | Value |
|-|-|-|
| artifacts | List of source artifacts to be transferred by the pipeline.Specify an image by repository ('hello-world'). This will use the 'latest' tag.Specify an image by tag ('hello-world:latest').Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123'). | string[] |
| catalogDigest | The digest of the tar used to transfer the artifacts. | string |
| pipelineResourceId | The resource ID of the pipeline to run. | string |
| source | The source properties of the pipeline run. | PipelineRunSourceProperties |
| target | The target properties of the pipeline run. | PipelineRunTargetProperties |


### PipelineRunSourceProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the source. | string |
| type | The type of the source. | 'AzureStorageBlob' |


### PipelineRunTargetProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the target. | string |
| type | The type of the target. | 'AzureStorageBlob' |


