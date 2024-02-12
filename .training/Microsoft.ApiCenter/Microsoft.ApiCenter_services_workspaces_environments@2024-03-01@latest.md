```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/environments@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      kind = "string"
      onboarding = {
        developerPortalUri = [
          "string"
        ]
        instructions = "string"
      }
      server = {
        managementPortalUri = [
          "string"
        ]
        type = "string"
      }
      title = "string"
    }
  })
}

```

### services/workspaces/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Environment properties entity. | EnvironmentProperties |


### EnvironmentProperties

| Name | Description | Value |
|-|-|-|
| customProperties | The custom metadata defined for API catalog entities. | For Bicep, you can use theany()function. |
| description | Description. | string |
| kind | Environment kind. | 'development''production''staging''testing' (required) |
| onboarding |  | Onboarding |
| server | Server information of the environment. | EnvironmentServer |
| title | Environment title. | string (required)Constraints:Min length = 1Max length = 50 |


### Onboarding

| Name | Description | Value |
|-|-|-|
| developerPortalUri |  | string[]Constraints:Max length = 1 |
| instructions | Onboarding guide. | string |


### EnvironmentServer

| Name | Description | Value |
|-|-|-|
| managementPortalUri |  | string[]Constraints:Max length = 1 |
| type | Type of the server that represents the environment. | 'AWS API Gateway''Apigee API Management''Azure API Management''Azure compute service''Kong API Gateway''Kubernetes''MuleSoft API Management' |


