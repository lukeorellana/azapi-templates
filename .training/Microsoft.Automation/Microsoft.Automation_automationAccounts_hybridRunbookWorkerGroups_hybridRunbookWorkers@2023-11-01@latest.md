```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vmResourceId = "string"
    }
  })
}

```

### automationAccounts/hybridRunbookWorkerGroups/hybridR...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hybridRunbookWorkerGroups |
| properties | Gets or sets hybrid runbook worker group create or update properties. | HybridRunbookWorkerCreateOrUpdateParametersOrHybridR...(required) |


### HybridRunbookWorkerCreateOrUpdateParametersOrHybridR...

| Name | Description | Value |
|-|-|-|
| vmResourceId | Azure Resource Manager Id for a virtual machine. | string |


