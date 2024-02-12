```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects/groups@2018-02-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      machines = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

### projects/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the group. | GroupProperties(required) |


### GroupProperties

| Name | Description | Value |
|-|-|-|
| machines | List of machine names that are part of this group. | string[] (required) |


