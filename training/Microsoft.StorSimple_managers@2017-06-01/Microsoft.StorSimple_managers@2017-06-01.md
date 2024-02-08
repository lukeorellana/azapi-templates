```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers@2017-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cisIntrinsicSettings = {
        type = "string"
      }
      provisioningState = "string"
      sku = {
        name = "Standard"
      }
    }
    etag = "string"
  })
}

```

### managers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-50Valid characters:Alphanumerics and hyphens.Start with letter. End with alphanumeric. |
| location | The geo location of the resource. | string (required) |
| tags | The tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| etag | The etag of the manager. | string |
| properties | The properties of the StorSimple Manager. | ManagerProperties |


### ManagerProperties

| Name | Description | Value |
|-|-|-|
| cisIntrinsicSettings | Represents the type of StorSimple Manager. | ManagerIntrinsicSettings |
| provisioningState | Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created. | string |
| sku | Specifies the Sku. | ManagerSku |


### ManagerIntrinsicSettings

| Name | Description | Value |
|-|-|-|
| type | The type of StorSimple Manager. | 'GardaV1''HelsinkiV1' (required) |


### ManagerSku

| Name | Description | Value |
|-|-|-|
| name | Refers to the sku name which should be "Standard" | 'Standard' (required) |


