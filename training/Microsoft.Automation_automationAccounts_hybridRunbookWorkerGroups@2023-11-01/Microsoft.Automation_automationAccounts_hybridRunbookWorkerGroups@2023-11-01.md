```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credential = {
        name = "string"
      }
    }
  })
}

```

### automationAccounts/hybridRunbookWorkerGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets hybrid runbook worker group create or update properties. | HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHy... |


### HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHy...

| Name | Description | Value |
|-|-|-|
| credential | Sets the credential of a worker group. | RunAsCredentialAssociationProperty |


### RunAsCredentialAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the credential. | string |


