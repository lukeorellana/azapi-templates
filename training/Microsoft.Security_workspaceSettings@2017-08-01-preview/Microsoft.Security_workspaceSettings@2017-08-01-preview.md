```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/workspaceSettings@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scope = "string"
      workspaceId = "string"
    }
  })
}

```

### workspaceSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Workspace setting data | WorkspaceSettingProperties |


### WorkspaceSettingProperties

| Name | Description | Value |
|-|-|-|
| scope | All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope | string (required) |
| workspaceId | The full Azure ID of the workspace to save the data in | string (required) |


