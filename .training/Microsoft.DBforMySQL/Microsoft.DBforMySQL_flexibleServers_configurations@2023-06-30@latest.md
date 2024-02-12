```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      currentValue = "string"
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
| currentValue | Current value of the configuration. | string |
| source | Source of the configuration. | 'system-default''user-override' |
| value | Value of the configuration. | string |


