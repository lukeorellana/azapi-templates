```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policyExemptions@2022-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignmentScopeValidation = "string"
      description = "string"
      displayName = "string"
      exemptionCategory = "string"
      expiresOn = "string"
      policyAssignmentId = "string"
      policyDefinitionReferenceIds = [
        "string"
      ]
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

### policyExemptions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource nameValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties for the policy exemption. | PolicyExemptionProperties(required) |


### PolicyExemptionProperties

| Name | Description | Value |
|-|-|-|
| assignmentScopeValidation | The option whether validate the exemption is at or under the assignment scope. | 'Default''DoNotValidate' |
| description | The description of the policy exemption. | string |
| displayName | The display name of the policy exemption. | string |
| exemptionCategory | The policy exemption category. Possible values are Waiver and Mitigated. | 'Mitigated''Waiver' (required) |
| expiresOn | The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption. | string |
| metadata | The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| policyAssignmentId | The ID of the policy assignment that is being exempted. | string (required) |
| policyDefinitionReferenceIds | The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition. | string[] |
| resourceSelectors | The resource selector list to filter policies by resource properties. | ResourceSelector[] |


### ResourceSelector

| Name | Description | Value |
|-|-|-|
| name | The name of the resource selector. | string |
| selectors | The list of the selector expressions. | Selector[] |


### Selector

| Name | Description | Value |
|-|-|-|
| in | The list of values to filter in. | string[] |
| kind | The selector kind. | 'policyDefinitionReferenceId''resourceLocation''resourceType''resourceWithoutLocation' |
| notIn | The list of values to filter out. | string[] |


