```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifacts = {
        parametersArtifactSourceRelativePath = "string"
        parametersUri = "string"
        templateArtifactSourceRelativePath = "string"
        templateUri = "string"
      }
      deploymentMode = "string"
      targetResourceGroup = "string"
    }
  })
}

```

### serviceTopologies/services/serviceUnits

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| properties | The properties that define the service unit. | ServiceUnitResourceProperties(required) |


### ServiceUnitResourceProperties

| Name | Description | Value |
|-|-|-|
| artifacts | The artifacts for the service unit. | ServiceUnitArtifacts |
| deploymentMode | Describes the type of ARM deployment to be performed on the resource. | 'Complete''Incremental' (required) |
| targetResourceGroup | The Azure Resource Group to which the resources in the service unit belong to or should be deployed to. | string (required) |


### ServiceUnitArtifacts

| Name | Description | Value |
|-|-|-|
| parametersArtifactSourceRelativePath | The path to the ARM parameters file relative to the artifact source. | string |
| parametersUri | The full URI of the ARM parameters file with the SAS token. | string |
| templateArtifactSourceRelativePath | The path to the ARM template file relative to the artifact source. | string |
| templateUri | The full URI of the ARM template file with the SAS token. | string |


