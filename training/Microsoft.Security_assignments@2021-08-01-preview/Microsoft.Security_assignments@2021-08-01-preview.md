```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assignments@2021-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalData = {
        exemptionCategory = "string"
      }
      assignedComponent = {
        key = "string"
      }
      assignedStandard = {
        id = "string"
      }
      description = "string"
      displayName = "string"
      effect = "string"
      expiresOn = "string"
      scope = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### assignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Properties of a security assignment | AssignmentProperties |


### AssignmentProperties

| Name | Description | Value |
|-|-|-|
| additionalData | Additional data about the assignment | AssignmentPropertiesAdditionalData |
| assignedComponent | Component item with key as applied to this standard assignment over the given scope | AssignedComponentItem |
| assignedStandard | Standard item with key as applied to this standard assignment over the given scope | AssignedStandardItem |
| description | description of the standardAssignment | string |
| displayName | display name of the standardAssignment | string |
| effect | expected effect of this assignment (Disable/Exempt/etc) | string |
| expiresOn | Expiration date of this assignment as a full ISO date | string |
| metadata | The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| scope | Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription | string |


### AssignmentPropertiesAdditionalData

| Name | Description | Value |
|-|-|-|
| exemptionCategory | Exemption category of this assignment | string |


### AssignedComponentItem

| Name | Description | Value |
|-|-|-|
| key | unique key to a security assessment object | string |


### AssignedStandardItem

| Name | Description | Value |
|-|-|-|
| id | full resourceId of the Microsoft.Security/standard object | string |


