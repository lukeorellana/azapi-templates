```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      charset = "string"
      collation = "string"
    }
  })
}

```

### flexibleServers/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of a database. | DatabaseProperties |


### DatabaseProperties

| Name | Description | Value |
|-|-|-|
| charset | The charset of the database. | string |
| collation | The collation of the database. | string |


