```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Portal/tenantConfigurations@2020-09-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enforcePrivateMarkdownStorage = bool
    }
  })
}

```

### tenantConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| properties | Tenant configuration properties. | ConfigurationProperties |


### ConfigurationProperties

| Name | Description | Value |
|-|-|-|
| enforcePrivateMarkdownStorage | When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited. | bool |


