```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01"
  name = "content"
  parent_id = "string"
}

```

### automationAccounts/runbooks/draft-content

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'content' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:runbooks |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01"
  name = "testJob"
  parent_id = "string"
  body = jsonencode({
    parameters = {
      {customized property} = "string"
    }
    runOn = "string"
  })
}

```

### automationAccounts/runbooks/draft-testJob

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'testJob' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:runbooks |
| parameters | Gets or sets the parameters of the test job. | TestJobCreateParameters |
| runOn | Gets or sets the runOn which specifies the group name where the job is to be executed. | string |


### TestJobCreateParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


