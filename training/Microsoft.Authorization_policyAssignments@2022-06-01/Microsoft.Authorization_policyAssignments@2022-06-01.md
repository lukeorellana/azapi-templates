```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policyAssignments@2022-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      enforcementMode = "string"
      nonComplianceMessages = [
        {
          message = "string"
          policyDefinitionReferenceId = "string"
        }
      ]
      notScopes = [
        "string"
      ]
      overrides = [
        {
          kind = "policyEffect"
          selectors = [
            {
              in = [
                "string"
              ]
              kind = "string"
              notIn = [
                "string"
              ]
            }
          ]
          value = "string"
        }
      ]
      parameters = {}
      policyDefinitionId = "string"
      resourceSelectors = [
        {
          name = "string"
          selectors = [
            {
              in = [
                "string"
              ]
              kind = "string"
              notIn = [
                "string"
              ]
            }
          ]
        }
      ]
    }
  })
}

```

### policyAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource name1-24 resource name at management group scopeValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| location | The location of the policy assignment. Only required when utilizing managed identity. | string |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| identity | The managed identity associated with the policy assignment. | Identity |
| properties | Properties for the policy assignment. | PolicyAssignmentProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. This is the only required field when adding a system or user assigned identity to a resource. | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentities | The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### PolicyAssignmentProperties

| Name | Description | Value |
|-|-|-|
| description | This message will be part of response in case of policy violation. | string |
| displayName | The display name of the policy assignment. | string |
| enforcementMode | The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. | 'Default''DoNotEnforce' |
| metadata | The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| nonComplianceMessages | The messages that describe why a resource is non-compliant with the policy. | NonComplianceMessage[] |
| notScopes | The policy's excluded scopes. | string[] |
| overrides | The policy property value override. | Override[] |
| parameters | The parameter values for the assigned policy rule. The keys are the parameter names. | object |
| policyDefinitionId | The ID of the policy definition or policy set definition being assigned. | string |
| resourceSelectors | The resource selector list to filter policies by resource properties. | ResourceSelector[] |


### NonComplianceMessage

| Name | Description | Value |
|-|-|-|
| message | A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results. | string (required) |
| policyDefinitionReferenceId | The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment. | string |


### Override

| Name | Description | Value |
|-|-|-|
| kind | The override kind. | 'policyEffect' |
| selectors | The list of the selector expressions. | Selector[] |
| value | The value to override the policy property. | string |


### Selector

| Name | Description | Value |
|-|-|-|
| in | The list of values to filter in. | string[] |
| kind | The selector kind. | 'policyDefinitionReferenceId''resourceLocation''resourceType''resourceWithoutLocation' |
| notIn | The list of values to filter out. | string[] |


### ResourceSelector

| Name | Description | Value |
|-|-|-|
| name | The name of the resource selector. | string |
| selectors | The list of the selector expressions. | Selector[] |


