```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see blueprints/artifacts objects
  body = jsonencode({
    kind = "string"
  })
}

```

### blueprints/artifacts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | policyAssignmentroleAssignmenttemplate(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:blueprints |


### PolicyAssignmentArtifact

| Name | Description | Value |
|-|-|-|
| kind | Specifies the kind of blueprint artifact. | 'policyAssignment' (required) |
| properties | properties for policyAssignment Artifact | PolicyAssignmentArtifactProperties(required) |


### PolicyAssignmentArtifactProperties

| Name | Description | Value |
|-|-|-|
| dependsOn | Artifacts which need to be deployed before the specified artifact. | string[] |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| parameters | Parameter values for the policy definition. | object (required) |
| policyDefinitionId | Azure resource ID of the policy definition. | string (required) |
| resourceGroup | Name of the resource group placeholder to which the policy will be assigned. | string |


### RoleAssignmentArtifact

| Name | Description | Value |
|-|-|-|
| kind | Specifies the kind of blueprint artifact. | 'roleAssignment' (required) |
| properties | Properties for a Role assignment blueprint artifact. | RoleAssignmentArtifactProperties(required) |


### RoleAssignmentArtifactProperties

| Name | Description | Value |
|-|-|-|
| dependsOn | Artifacts which need to be deployed before the specified artifact. | string[] |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| principalIds | Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity. | For Bicep, you can use theany()function.(required) |
| resourceGroup | RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription. | string |
| roleDefinitionId | Azure resource ID of the RoleDefinition. | string (required) |


### TemplateArtifact

| Name | Description | Value |
|-|-|-|
| kind | Specifies the kind of blueprint artifact. | 'template' (required) |
| properties | Properties for a Resource Manager template blueprint artifact. | TemplateArtifactProperties(required) |


### TemplateArtifactProperties

| Name | Description | Value |
|-|-|-|
| dependsOn | Artifacts which need to be deployed before the specified artifact. | string[] |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| parameters | Resource Manager template blueprint artifact parameter values. | object (required) |
| resourceGroup | If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed. | string |
| template | The Resource Manager template blueprint artifact body. | For Bicep, you can use theany()function.(required) |


