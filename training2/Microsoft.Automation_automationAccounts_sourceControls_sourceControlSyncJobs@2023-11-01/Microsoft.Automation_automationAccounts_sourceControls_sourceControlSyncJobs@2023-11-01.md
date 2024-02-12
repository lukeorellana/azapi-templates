```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      commitId = "string"
    }
  })
}

```

### automationAccounts/sourceControls/sourceControlSyncJ...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sourceControls |
| properties | The properties of the source control sync job. | SourceControlSyncJobCreatePropertiesOrSourceControlS...(required) |


### SourceControlSyncJobCreatePropertiesOrSourceControlS...

| Name | Description | Value |
|-|-|-|
| commitId | The commit id of the source control sync job. If not syncing to a commitId, enter an empty string. | string (required) |


