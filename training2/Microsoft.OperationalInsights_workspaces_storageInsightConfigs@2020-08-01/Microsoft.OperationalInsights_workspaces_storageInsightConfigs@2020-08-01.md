```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containers = [
        "string"
      ]
      storageAccount = {
        id = "string"
        key = "string"
      }
      tables = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

### workspaces/storageInsightConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| eTag | The ETag of the storage insight. | string |
| properties | Storage insight properties. | StorageInsightProperties |


### StorageInsightProperties

| Name | Description | Value |
|-|-|-|
| containers | The names of the blob containers that the workspace should read | string[] |
| storageAccount | The storage account connection details | StorageAccount(required) |
| tables | The names of the Azure tables that the workspace should read | string[] |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| id | The Azure Resource Manager ID of the storage account resource. | string (required) |
| key | The storage account key. | string (required) |


