## Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      blueprintId = "string"
      description = "string"
      displayName = "string"
      locks = {
        excludedPrincipals = [
          "string"
        ]
        mode = "string"
      }
      parameters = {}
      resourceGroups = {}
      scope = "string"
    }
  })
}

```

### blueprintAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 90Valid characters:Alphanumerics, underscores, and hyphens. |
| location | The location of this blueprint assignment. | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| identity | Managed identity for this blueprint assignment. | ManagedServiceIdentity(required) |
| properties | Properties for blueprint assignment object. | AssignmentProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| principalId | Azure Active Directory principal ID associated with this Identity. | string |
| tenantId | ID of the Azure Active Directory. | string |
| type | Type of the managed identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. | object |


### AssignmentProperties

| Name | Description | Value |
|-|-|-|
| blueprintId | ID of the published version of a blueprint definition. | string |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| locks | Defines how resources deployed by a blueprint assignment are locked. | AssignmentLockSettings |
| parameters | Blueprint assignment parameter values. | object (required) |
| resourceGroups | Names and locations of resource group placeholders. | object (required) |
| scope | The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required. | string |


### AssignmentLockSettings

| Name | Description | Value |
|-|-|-|
| excludedPrincipals | List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted. | string[] |
| mode | Lock mode. | 'AllResourcesDoNotDelete''AllResourcesReadOnly''None' |
## Microsoft.Blueprint/blueprints@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      parameters = {}
      resourceGroups = {}
      targetScope = "string"
    }
  })
}

```

### blueprints

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Detailed properties for blueprint definition. | BlueprintProperties(required) |


### BlueprintProperties

| Name | Description | Value |
|-|-|-|
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| parameters | Parameters required by this blueprint definition. | object |
| resourceGroups | Resource group placeholders defined by this blueprint definition. | object |
| targetScope | The scope where this blueprint definition can be assigned. | 'managementGroup''subscription' |
| versions | Published versions of this blueprint definition. | For Bicep, you can use theany()function. |
## Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview

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
## Microsoft.Blueprint/blueprints/versions@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints/versions@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      blueprintName = "string"
      changeNotes = "string"
      description = "string"
      displayName = "string"
      parameters = {}
      resourceGroups = {}
      targetScope = "string"
    }
  })
}

```

### blueprints/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:blueprints |
| properties | Detailed properties for published blueprint. | PublishedBlueprintProperties(required) |


### PublishedBlueprintProperties

| Name | Description | Value |
|-|-|-|
| blueprintName | Name of the published blueprint definition. | string |
| changeNotes | Version-specific change notes. | string |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| parameters | Parameters required by this blueprint definition. | object |
| resourceGroups | Resource group placeholders defined by this blueprint definition. | object |
| targetScope | The scope where this blueprint definition can be assigned. | 'managementGroup''subscription' |
