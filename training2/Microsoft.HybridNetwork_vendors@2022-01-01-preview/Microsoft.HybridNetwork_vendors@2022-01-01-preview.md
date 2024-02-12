```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/vendors@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### vendors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Vendor properties. | VendorPropertiesFormat |


