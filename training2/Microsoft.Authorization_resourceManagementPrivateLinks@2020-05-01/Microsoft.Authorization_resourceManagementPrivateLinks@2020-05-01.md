```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
}

```

### resourceManagementPrivateLinks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | the region to create private link association. | string |


