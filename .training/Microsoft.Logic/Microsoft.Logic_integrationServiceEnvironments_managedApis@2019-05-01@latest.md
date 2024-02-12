```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deploymentParameters = {
        contentLinkDefinition = {
          uri = "string"
        }
      }
      integrationServiceEnvironment = {
        id = "string"
      }
    }
  })
}

```

### integrationServiceEnvironments/managedApis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationServiceEnvironments |
| properties | The integration service environment managed api properties. | IntegrationServiceEnvironmentManagedApiProperties |


### IntegrationServiceEnvironmentManagedApiProperties

| Name | Description | Value |
|-|-|-|
| deploymentParameters | The integration service environment managed api deployment parameters. | IntegrationServiceEnvironmentManagedApiDeploymentPar... |
| integrationServiceEnvironment | The integration service environment reference. | ResourceReference |


### IntegrationServiceEnvironmentManagedApiDeploymentPar...

| Name | Description | Value |
|-|-|-|
| contentLinkDefinition | The integration service environment managed api content link for deployment. | ContentLink |


### ContentLink

| Name | Description | Value |
|-|-|-|
| uri | The content link URI. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |


