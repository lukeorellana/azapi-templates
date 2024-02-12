```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

### serverGroupsv2/roles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | The properties of a role. | RoleProperties(required) |


### RoleProperties

| Name | Description | Value |
|-|-|-|
| password | The password of the cluster role. | string (required) |


