## Microsoft.ApiCenter/services@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services@2024-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {}
  })
}

```

### services

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | The properties of the service. | ServiceProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |
## Microsoft.ApiCenter/services/metadataSchemas@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/metadataSchemas@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignedTo = [
        {
          deprecated = bool
          entity = "string"
          required = bool
        }
      ]
      schema = "string"
    }
  })
}

```

### services/metadataSchemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| properties | Metadata schema properties. | MetadataSchemaProperties |


### MetadataSchemaProperties

| Name | Description | Value |
|-|-|-|
| assignedTo |  | MetadataAssignment[] |
| schema | The schema defining the type. | string (required) |


### MetadataAssignment

| Name | Description | Value |
|-|-|-|
| deprecated |  | bool |
| entity | The entities this metadata schema component gets applied to. | 'api''deployment''environment' |
| required |  | bool |
## Microsoft.ApiCenter/services/workspaces@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      title = "string"
    }
  })
}

```

### services/workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| properties | Workspace properties. | WorkspaceProperties |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| description | Workspace description. | string |
| title | Workspace title. | string (required)Constraints:Min length = 1Max length = 50 |
## Microsoft.ApiCenter/services/workspaces/apis@2024-03-01

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
## Microsoft.ApiCenter/services/workspaces/apis/deployments@2024-03-01

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
## Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      lifecycleStage = "string"
      title = "string"
    }
  })
}

```

### services/workspaces/apis/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | API version properties entity. | ApiVersionProperties |


### ApiVersionProperties

| Name | Description | Value |
|-|-|-|
| lifecycleStage | Current lifecycle stage of the API. | 'deprecated''design''development''preview''production''retired''testing' (required) |
| title | API version title. | string (required)Constraints:Min length = 1Max length = 50 |
## Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      title = "string"
    }
  })
}

```

### services/workspaces/apis/versions/definitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:versions |
| properties | API definition properties entity. | ApiDefinitionProperties |


### ApiDefinitionProperties

| Name | Description | Value |
|-|-|-|
| description | API definition description. | string |
| title | API definition title. | string (required)Constraints:Min length = 1Max length = 50 |
## Microsoft.ApiCenter/services/workspaces/environments@2024-03-01

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
