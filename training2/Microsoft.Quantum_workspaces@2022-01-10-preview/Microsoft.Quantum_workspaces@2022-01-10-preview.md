```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Quantum/workspaces@2022-01-10-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      providers = [
        {
          applicationName = "string"
          instanceUri = "string"
          providerId = "string"
          providerSku = "string"
          provisioningState = "string"
          resourceUsageId = "string"
        }
      ]
      storageAccount = "string"
    }
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-54Valid characters:Alphanumerics and hyphens.Can't start or end with hyphen. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed Identity information. | QuantumWorkspaceIdentity |
| properties | Gets or sets the properties. Define quantum workspace's specific properties. | WorkspaceResourceProperties |


### QuantumWorkspaceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned' |


### WorkspaceResourceProperties

| Name | Description | Value |
|-|-|-|
| providers | List of Providers selected for this Workspace | Provider[] |
| storageAccount | ARM Resource Id of the storage account associated with this workspace. | string |


### Provider

| Name | Description | Value |
|-|-|-|
| applicationName | The provider's marketplace application display name. | string |
| instanceUri | A Uri identifying the specific instance of this provider. | string |
| providerId | Unique id of this provider. | string |
| providerSku | The sku associated with pricing information for this provider. | string |
| provisioningState | Provisioning status field | 'Deleted''Deleting''Failed''Launching''Succeeded''Updating' |
| resourceUsageId | Id to track resource usage for the provider. | string |


