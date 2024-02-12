```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/servicerunners@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    clientSecretUrl = "string"
    type = "string"
  }
}

```

### labs/servicerunners

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| identity | The identity of the resource. | IdentityProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| clientSecretUrl | The client secret URL of the identity. | string |
| principalId | The principal id of resource identity. | string |
| tenantId | The tenant identifier of resource. | string |
| type | Managed identity. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |


