```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/enterpriseChannels@2018-07-12"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      nodes = [
        {
          azureLocation = "string"
          azureSku = "string"
          name = "string"
          state = "string"
        }
      ]
      state = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### enterpriseChannels

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the SKU of the resource. | Sku |
| kind | Required. Gets or sets the Kind of the resource. | 'bot''designer''function''sdk' |
| etag | Entity Tag | string |
| properties | The set of properties specific to an Enterprise Channel resource. | EnterpriseChannelProperties |


### EnterpriseChannelProperties

| Name | Description | Value |
|-|-|-|
| nodes | The nodes associated with the Enterprise Channel. | EnterpriseChannelNode[] (required) |
| state | The current state of the Enterprise Channel. | 'CreateFailed''Creating''DeleteFailed''Deleting''StartFailed''Started''Starting''StopFailed''Stopped''Stopping' |


### EnterpriseChannelNode

| Name | Description | Value |
|-|-|-|
| azureLocation | The location of the Enterprise Channel Node. | string (required) |
| azureSku | The sku of the Enterprise Channel Node. | string (required) |
| name | The name of the Enterprise Channel Node. | string (required) |
| state | The current state of the Enterprise Channel Node. | 'CreateFailed''Creating''DeleteFailed''Deleting''StartFailed''Started''Starting''StopFailed''Stopped''Stopping' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name | 'F0''S1' (required) |


