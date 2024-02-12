```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policySetDefinitions@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      parameters = {}
      policyDefinitionGroups = [
        {
          additionalMetadataId = "string"
          category = "string"
          description = "string"
          displayName = "string"
          name = "string"
        }
      ]
      policyDefinitions = [
        {
          groupNames = [
            "string"
          ]
          parameters = {}
          policyDefinitionId = "string"
          policyDefinitionReferenceId = "string"
        }
      ]
      policyType = "string"
    }
  })
}

```

### policySetDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource nameValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The policy definition properties. | PolicySetDefinitionProperties |


### PolicySetDefinitionProperties

| Name | Description | Value |
|-|-|-|
| description | The policy set definition description. | string |
| displayName | The display name of the policy set definition. | string |
| metadata | The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| parameters | The policy set definition parameters that can be used in policy definition references. | object |
| policyDefinitionGroups | The metadata describing groups of policy definition references within the policy set definition. | PolicyDefinitionGroup[] |
| policyDefinitions | An array of policy definition references. | PolicyDefinitionReference[] (required) |
| policyType | The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. | 'BuiltIn''Custom''NotSpecified''Static' |


### PolicyDefinitionGroup

| Name | Description | Value |
|-|-|-|
| additionalMetadataId | A resource ID of a resource that contains additional metadata about the group. | string |
| category | The group's category. | string |
| description | The group's description. | string |
| displayName | The group's display name. | string |
| name | The name of the group. | string (required) |


### PolicyDefinitionReference

| Name | Description | Value |
|-|-|-|
| groupNames | The name of the groups that this policy definition reference belongs to. | string[] |
| parameters | The parameter values for the referenced policy rule. The keys are the parameter names. | object |
| policyDefinitionId | The ID of the policy definition or policy set definition. | string (required) |
| policyDefinitionReferenceId | A unique id (within the policy set definition) for this policy definition reference. | string |


