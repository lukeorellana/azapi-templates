```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleEligibilityScheduleRequests@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      condition = "string"
      conditionVersion = "string"
      justification = "string"
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
      targetRoleEligibilityScheduleId = "string"
      targetRoleEligibilityScheduleInstanceId = "string"
      ticketInfo = {
        ticketNumber = "string"
        ticketSystem = "string"
      }
    }
  })
}

```

### roleEligibilityScheduleRequests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role eligibility schedule request properties. | RoleEligibilityScheduleRequestProperties |


### RoleEligibilityScheduleRequestProperties

| Name | Description | Value |
|-|-|-|
| condition | The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container' | string |
| conditionVersion | Version of the condition. Currently accepted value is '2.0' | string |
| justification | Justification for the role eligibility | string |
| principalId | The principal ID. | string (required) |
| requestType | The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc | 'AdminAssign''AdminExtend''AdminRemove''AdminRenew''AdminUpdate''SelfActivate''SelfDeactivate''SelfExtend''SelfRenew' (required) |
| roleDefinitionId | The role definition ID. | string (required) |
| scheduleInfo | Schedule info of the role eligibility schedule | RoleEligibilityScheduleRequestPropertiesScheduleInfo |
| targetRoleEligibilityScheduleId | The resultant role eligibility schedule id or the role eligibility schedule id being updated | string |
| targetRoleEligibilityScheduleInstanceId | The role eligibility schedule instance id being updated | string |
| ticketInfo | Ticket Info of the role eligibility | RoleEligibilityScheduleRequestPropertiesTicketInfo |


### RoleEligibilityScheduleRequestPropertiesScheduleInfo

| Name | Description | Value |
|-|-|-|
| expiration | Expiration of the role eligibility schedule | RoleEligibilityScheduleRequestPropertiesScheduleInfo... |
| startDateTime | Start DateTime of the role eligibility schedule. | string |


### RoleEligibilityScheduleRequestPropertiesScheduleInfo...

| Name | Description | Value |
|-|-|-|
| duration | Duration of the role eligibility schedule in TimeSpan. | string |
| endDateTime | End DateTime of the role eligibility schedule. | string |
| type | Type of the role eligibility schedule expiration | 'AfterDateTime''AfterDuration''NoExpiration' |


### RoleEligibilityScheduleRequestPropertiesTicketInfo

| Name | Description | Value |
|-|-|-|
| ticketNumber | Ticket number for the role eligibility | string |
| ticketSystem | Ticket system name for the role eligibility | string |


