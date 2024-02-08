```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/deployments@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definitionId = "string"
      description = "string"
      environmentId = "string"
      server = {
        runtimeUri = [
          "string"
        ]
      }
      state = "string"
      title = "string"
    }
  })
}

```

### services/workspaces/apis/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | API deployment entity properties. | DeploymentProperties |


### DeploymentProperties

| Name | Description | Value |
|-|-|-|
| customProperties | The custom metadata defined for API catalog entities. | For Bicep, you can use theany()function. |
| definitionId | API center-scoped definition resource ID. | string |
| description | Description of the deployment. | stringConstraints:Max length = 500 |
| environmentId | API center-scoped environment resource ID. | string |
| server | Server | DeploymentServer |
| state | State of API deployment. | 'active''inactive' |
| title | API deployment title | stringConstraints:Min length = 1Max length = 50 |


### DeploymentServer

| Name | Description | Value |
|-|-|-|
| runtimeUri | Base runtime URLs for this deployment. | string[]Constraints:Max length = 200 |


