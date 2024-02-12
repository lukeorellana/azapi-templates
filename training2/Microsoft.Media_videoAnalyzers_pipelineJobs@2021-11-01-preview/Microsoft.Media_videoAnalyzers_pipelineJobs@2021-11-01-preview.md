```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

### videoAnalyzers/pipelineJobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | PipelineJobProperties |


### PipelineJobProperties

| Name | Description | Value |
|-|-|-|
| description | An optional description for the pipeline. | string |
| parameters | List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden. | ParameterDefinition[] |
| topologyName | Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition. | string (required) |


### ParameterDefinition

| Name | Description | Value |
|-|-|-|
| name | Name of the parameter declared in the pipeline topology. | string (required) |
| value | Parameter value to be applied on this specific pipeline. | string |


