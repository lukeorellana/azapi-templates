```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conflationPolicies = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      connectors = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      description = {}
      displayName = {}
      interactions = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      kpis = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      links = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      principals = [
        {
          principalId = "string"
          principalMetadata = {}
          principalType = "string"
        }
      ]
      profiles = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      relationshipLinks = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      relationships = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      role = "string"
      roleAssignments = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      sasPolicies = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      segments = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      views = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      widgetTypes = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
    }
  })
}

```

### hubs/roleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The Role Assignment definition. | RoleAssignment |


### RoleAssignment

| Name | Description | Value |
|-|-|-|
| conflationPolicies | Widget types set for the assignment. | ResourceSetDescription |
| connectors | Connectors set for the assignment. | ResourceSetDescription |
| description | Localized description for the metadata. | object |
| displayName | Localized display names for the metadata. | object |
| interactions | Interactions set for the assignment. | ResourceSetDescription |
| kpis | Kpis set for the assignment. | ResourceSetDescription |
| links | Links set for the assignment. | ResourceSetDescription |
| principals | The principals being assigned to. | AssignmentPrincipal[] (required) |
| profiles | Profiles set for the assignment. | ResourceSetDescription |
| relationshipLinks | The Role assignments set for the relationship links. | ResourceSetDescription |
| relationships | The Role assignments set for the relationships. | ResourceSetDescription |
| role | Type of roles. | 'Admin''DataAdmin''DataReader''ManageAdmin''ManageReader''Reader' (required) |
| roleAssignments | The Role assignments set for the assignment. | ResourceSetDescription |
| sasPolicies | Sas Policies set for the assignment. | ResourceSetDescription |
| segments | The Role assignments set for the assignment. | ResourceSetDescription |
| views | Views set for the assignment. | ResourceSetDescription |
| widgetTypes | Widget types set for the assignment. | ResourceSetDescription |


### ResourceSetDescription

| Name | Description | Value |
|-|-|-|
| elements | The elements included in the set. | string[] |
| exceptions | The elements that are not included in the set, in case elements contains '*' indicating 'all'. | string[] |


### AssignmentPrincipal

| Name | Description | Value |
|-|-|-|
| principalId | The principal id being assigned to. | string (required) |
| principalMetadata | Other metadata for the principal. | object |
| principalType | The Type of the principal ID. | string (required) |


