## Microsoft.ChangeAnalysis/profile@2020-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ChangeAnalysis/profile@2020-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      notifications = {
        activationState = "string"
        azureMonitorWorkspaceProperties = {
          includeChangeDetails = "string"
          workspaceId = "string"
          workspaceResourceId = "string"
        }
      }
    }
    systemData = {}
  })
}

```

