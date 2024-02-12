```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      enabledState = "string"
      endpointA = {
        endpoint = "string"
        name = "string"
      }
      endpointB = {
        endpoint = "string"
        name = "string"
      }
    }
  })
}

```

### NetworkExperimentProfiles/Experiments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:NetworkExperimentProfiles |
| properties | The properties of an Experiment | ExperimentProperties |


### ExperimentProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the details or intents of the Experiment | string |
| enabledState | The state of the Experiment | 'Disabled''Enabled' |
| endpointA | The endpoint A of an experiment | Endpoint |
| endpointB | The endpoint B of an experiment | Endpoint |


### Endpoint

| Name | Description | Value |
|-|-|-|
| endpoint | The endpoint URL | string |
| name | The name of the endpoint | string |


