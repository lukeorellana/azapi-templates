```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/jobSchedules@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
      schedule = {
        name = "string"
      }
    }
  })
}

```

### automationAccounts/jobSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of job schedule properties. | JobScheduleCreatePropertiesOrJobScheduleProperties(required) |


### JobScheduleCreatePropertiesOrJobScheduleProperties

| Name | Description | Value |
|-|-|-|
| parameters | Gets or sets a list of job properties. | JobScheduleCreatePropertiesParameters |
| runbook | Gets or sets the runbook. | RunbookAssociationProperty(required) |
| runOn | Gets or sets the hybrid worker group that the scheduled job should run on. | string |
| schedule | Gets or sets the schedule. | ScheduleAssociationProperty(required) |


### JobScheduleCreatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RunbookAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the runbook. | string |


### ScheduleAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the Schedule. | string |


