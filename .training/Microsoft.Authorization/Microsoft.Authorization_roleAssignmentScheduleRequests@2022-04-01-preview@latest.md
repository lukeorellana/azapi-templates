```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleAssignmentScheduleRequests@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      condition = "string"
      conditionVersion = "string"
      justification = "string"
      linkedRoleEligibilityScheduleId = "string"
      principalId = "string"
      requestType = "string"
      roleDefinitionId = "string"
      scheduleInfo = {
        expiration = {
          duration = "string"
          endDateTime = "string"
          type = "string"
        }
        startDateTime = "string"
      }
      targetRoleAssignmentScheduleId = "string"
      targetRoleAssignmentScheduleInstanceId = "string"
      ticketInfo = {
        ticketNumber = "string"
        ticketSystem = "string"
      }
    }
  })
}

```

### roleAssignmentScheduleRequests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role assignment schedule request properties. | RoleAssignmentScheduleRequestProperties |


### RoleAssignmentScheduleRequestProperties

| Name | Description | Value |
|-|-|-|
| condition | The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container' | string |
| conditionVersion | Version of the condition. Currently accepted value is '2.0' | string |
| justification | Justification for the role assignment | string |
| linkedRoleEligibilityScheduleId | The linked role eligibility schedule id - to activate an eligibility. | string |
| principalId | The principal ID. | string (required) |
| requestType | The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc | 'AdminAssign''AdminExtend''AdminRemove''AdminRenew''AdminUpdate''SelfActivate''SelfDeactivate''SelfExtend''SelfRenew' (required) |
| roleDefinitionId | The role definition ID. | string (required) |
| scheduleInfo | Schedule info of the role assignment schedule | RoleAssignmentScheduleRequestPropertiesScheduleInfo |
| targetRoleAssignmentScheduleId | The resultant role assignment schedule id or the role assignment schedule id being updated | string |
| targetRoleAssignmentScheduleInstanceId | The role assignment schedule instance id being updated | string |
| ticketInfo | Ticket Info of the role assignment | RoleAssignmentScheduleRequestPropertiesTicketInfo |


### RoleAssignmentScheduleRequestPropertiesScheduleInfo

| Name | Description | Value |
|-|-|-|
| expiration | Expiration of the role assignment schedule | RoleAssignmentScheduleRequestPropertiesScheduleInfoE... |
| startDateTime | Start DateTime of the role assignment schedule. | string |


### RoleAssignmentScheduleRequestPropertiesScheduleInfoE...

| Name | Description | Value |
|-|-|-|
| duration | Duration of the role assignment schedule in TimeSpan. | string |
| endDateTime | End DateTime of the role assignment schedule. | string |
| type | Type of the role assignment schedule expiration | 'AfterDateTime''AfterDuration''NoExpiration' |


### RoleAssignmentScheduleRequestPropertiesTicketInfo

| Name | Description | Value |
|-|-|-|
| ticketNumber | Ticket number for the role assignment | string |
| ticketSystem | Ticket system name for the role assignment | string |


