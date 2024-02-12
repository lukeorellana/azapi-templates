```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bitrateKbps = int
      description = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      topologyName = "string"
    }
  })
}

```

### videoAnalyzers/livePipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | LivePipelineProperties |


### LivePipelineProperties

| Name | Description | Value |
|-|-|-|
| bitrateKbps | Maximum bitrate capacity in Kbps reserved for the live pipeline. The allowed range is from 500 to 3000 Kbps in increments of 100 Kbps. If the RTSP camera exceeds this capacity, then the service will disconnect temporarily from the camera. It will retry to re-establish connection (with exponential backoff), checking to see if the camera bitrate is now below the reserved capacity. Doing so will ensure that one 'noisy neighbor' does not affect other live pipelines in your account. | int (required) |
| description | An optional description for the pipeline. | string |
| parameters | List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden. | ParameterDefinition[] |
| topologyName | The reference to an existing pipeline topology defined for real-time content processing. When activated, this live pipeline will process content according to the pipeline topology definition. | string (required) |


### ParameterDefinition

| Name | Description | Value |
|-|-|-|
| name | Name of the parameter declared in the pipeline topology. | string (required) |
| value | Parameter value to be applied on this specific pipeline. | string |


