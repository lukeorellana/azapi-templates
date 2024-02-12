```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

### serverGroupsv2/coordinatorConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | The properties of a configuration. | ServerConfigurationProperties |


### ServerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| value | Value of the configuration. | string (required) |


