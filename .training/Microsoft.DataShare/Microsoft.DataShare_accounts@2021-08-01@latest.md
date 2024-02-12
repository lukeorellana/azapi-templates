```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts@2021-08-01"
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
    properties = {}
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the azure resource. | string |
| tags | Tags on the azure resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity Info on the Account | Identity(required) |
| properties | Properties on the account | AccountProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Identity Type | 'SystemAssigned' |


