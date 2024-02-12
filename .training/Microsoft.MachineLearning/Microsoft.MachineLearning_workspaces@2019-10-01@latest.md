```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearning/workspaces@2019-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      keyVaultIdentifierId = "string"
      ownerEmail = "string"
      userStorageAccountId = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:<>*%&:?+/\\or control charactersCan't end with a space. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the workspace. | Sku |
| properties | The properties of the machine learning workspace. | WorkspaceProperties |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| keyVaultIdentifierId | The key vault identifier used for encrypted workspaces. | string |
| ownerEmail | The email id of the owner for this workspace. | string (required) |
| userStorageAccountId | The fully qualified arm id of the storage account associated with this workspace. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the sku | string |
| tier | Tier of the sku like Basic or Enterprise | string |


