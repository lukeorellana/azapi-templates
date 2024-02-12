```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      source = "string"
      value = "string"
    }
  })
}

```

### flexibleServers/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of a configuration. | ConfigurationProperties |


### ConfigurationProperties

| Name | Description | Value |
|-|-|-|
| source | Source of the configuration. | string |
| value | Value of the configuration. | string |

