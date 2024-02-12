```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contacts = [
        {
          email = "string"
          name = "string"
          url = "string"
        }
      ]
      description = "string"
      externalDocumentation = [
        {
          description = "string"
          title = "string"
          url = "string"
        }
      ]
      kind = "string"
      license = {
        identifier = "string"
        name = "string"
        url = "string"
      }
      summary = "string"
      termsOfService = {
        url = "string"
      }
      title = "string"
    }
  })
}

```

### services/workspaces/apis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | API properties. | ApiProperties |


### ApiProperties

| Name | Description | Value |
|-|-|-|
| contacts |  | Contact[] |
| customProperties | The custom metadata defined for API catalog entities. | For Bicep, you can use theany()function. |
| description | Description of the API. | stringConstraints:Max length = 1000 |
| externalDocumentation |  | ExternalDocumentation[]Constraints:Max length = 20 |
| kind | Kind of API. For example, REST or GraphQL. | 'graphql''grpc''rest''soap''webhook''websocket' (required) |
| license | The license information for the API. | License |
| summary | Short description of the API. | stringConstraints:Max length = 200 |
| termsOfService | Terms of service for the API. | TermsOfService |
| title | API title. | string (required)Constraints:Min length = 1Max length = 50 |


### Contact

| Name | Description | Value |
|-|-|-|
| email | Email address of the contact. | stringConstraints:Max length = 100 |
| name | Name of the contact. | stringConstraints:Max length = 100 |
| url | URL for the contact. | stringConstraints:Max length = 200 |


### ExternalDocumentation

| Name | Description | Value |
|-|-|-|
| description | Description of the documentation. | stringConstraints:Max length = 500 |
| title | Title of the documentation. | stringConstraints:Max length = 50 |
| url | URL pointing to the documentation. | string (required)Constraints:Max length = 200 |


### License

| Name | Description | Value |
|-|-|-|
| identifier | SPDX license information for the API. The identifier field is mutually exclusive of the URL field. | stringConstraints:Max length = 50 |
| name | Name of the license. | stringConstraints:Max length = 100 |
| url | URL pointing to the license details. The URL field is mutually exclusive of the identifier field. | stringConstraints:Max length = 200 |


### TermsOfService

| Name | Description | Value |
|-|-|-|
| url | URL pointing to the terms of service. | string (required)Constraints:Max length = 200 |


