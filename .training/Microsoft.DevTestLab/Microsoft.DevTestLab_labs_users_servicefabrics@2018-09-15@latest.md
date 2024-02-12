```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      environmentId = "string"
      externalServiceFabricId = "string"
    }
  })
}

```

### labs/users/servicefabrics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | ServiceFabricProperties(required) |


### ServiceFabricProperties

| Name | Description | Value |
|-|-|-|
| environmentId | The resource id of the environment under which the service fabric resource is present | string |
| externalServiceFabricId | The backing service fabric resource's id | string |


