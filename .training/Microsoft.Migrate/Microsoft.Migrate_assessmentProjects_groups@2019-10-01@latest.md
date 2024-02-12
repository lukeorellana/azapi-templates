```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/groups@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupType = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the group. | GroupProperties(required) |


### GroupProperties

| Name | Description | Value |
|-|-|-|
| groupType | The type of group. | string |


