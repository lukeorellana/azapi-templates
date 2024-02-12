```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      storageAccountName = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    plan = {
      type = "SystemAssigned"
    }
  })
}

```

### objectAnchorsAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku associated with this account | Sku |
| kind | The kind of account, if supported | Sku |
| identity |  | ObjectAnchorsAccountIdentity |
| plan | The plan associated with this account | Identity |
| properties | Property bag. | MixedRealityAccountProperties |


### ObjectAnchorsAccountIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### MixedRealityAccountProperties

| Name | Description | Value |
|-|-|-|
| storageAccountName | The name of the storage account associated with this accountId | string |


