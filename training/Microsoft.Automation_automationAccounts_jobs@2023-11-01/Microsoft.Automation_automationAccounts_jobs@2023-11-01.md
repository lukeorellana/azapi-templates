```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/jobs@2023-11-01"
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
    }
  })
}

```

### automationAccounts/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of job properties. | JobCreatePropertiesOrJobProperties(required) |


### JobCreatePropertiesOrJobProperties

| Name | Description | Value |
|-|-|-|
| parameters | Gets or sets the parameters of the job. | JobCreatePropertiesParameters |
| runbook | Gets or sets the runbook. | RunbookAssociationProperty |
| runOn | Gets or sets the runOn which specifies the group name where the job is to be executed. | string |


### JobCreatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RunbookAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the runbook. | string |


