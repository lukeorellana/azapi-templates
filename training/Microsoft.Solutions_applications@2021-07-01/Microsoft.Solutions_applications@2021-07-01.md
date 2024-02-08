```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Solutions/applications@2021-07-01"
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
    properties = {
      applicationDefinitionId = "string"
      jitAccessPolicy = {
        jitAccessEnabled = bool
        jitApprovalMode = "string"
        jitApprovers = [
          {
            displayName = "string"
            id = "string"
            type = "string"
          }
        ]
        maximumJitAccessDuration = "string"
      }
      managedResourceGroupId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      model = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### applications

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the resource. | Sku |
| kind | The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. | string (required) |
| identity | The identity of the resource. | Identity |
| managedBy | ID of the resource that manages this resource. | string |
| plan | The plan information. | Plan |
| properties | The managed application properties. | ApplicationProperties(required) |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### Plan

| Name | Description | Value |
|-|-|-|
| name | The plan name. | string (required) |
| product | The product code. | string (required) |
| promotionCode | The promotion code. | string |
| publisher | The publisher ID. | string (required) |
| version | The plan's version. | string (required) |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| applicationDefinitionId | The fully qualified path of managed application definition Id. | string |
| jitAccessPolicy | The managed application Jit access policy. | ApplicationJitAccessPolicy |
| managedResourceGroupId | The managed resource group Id. | string |
| parameters | Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. | For Bicep, you can use theany()function. |


### ApplicationJitAccessPolicy

| Name | Description | Value |
|-|-|-|
| jitAccessEnabled | Whether the JIT access is enabled. | bool (required) |
| jitApprovalMode | JIT approval mode. | 'AutoApprove''ManualApprove''NotSpecified' |
| jitApprovers | The JIT approvers | JitApproverDefinition[] |
| maximumJitAccessDuration | The maximum duration JIT access is granted. This is an ISO8601 time period value. | string |


### JitApproverDefinition

| Name | Description | Value |
|-|-|-|
| displayName | The approver display name. | string |
| id | The approver service principal Id. | string (required) |
| type | The approver type. | 'group''user' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The SKU capacity. | int |
| family | The SKU family. | string |
| model | The SKU model. | string |
| name | The SKU name. | string (required) |
| size | The SKU size. | string |
| tier | The SKU tier. | string |


