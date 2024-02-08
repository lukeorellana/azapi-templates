```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessMode = "string"
      privateLinkResource = {
        id = "string"
      }
      profile = {
        id = "string"
      }
    }
  })
}

```

### networkSecurityPerimeters/resourceAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkSecurityPerimeters |
| properties | Properties of the NSP resource association. | NspAssociationProperties |


### NspAssociationProperties

| Name | Description | Value |
|-|-|-|
| accessMode | Access mode on the association. | 'Audit''Enforced''Learning' |
| privateLinkResource | The PaaS resource to be associated. | SubResource |
| profile | Profile id to which the PaaS resource is associated. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


