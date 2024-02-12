```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hibernateSupport = "string"
      imageReference = {
        id = "string"
      }
      osStorageType = "string"
      sku = {
        capacity = int
        family = "string"
        name = "string"
        size = "string"
        tier = "string"
      }
    }
  })
}

```

### devcenters/devboxdefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Dev Box definition properties | DevBoxDefinitionProperties |


### DevBoxDefinitionProperties

| Name | Description | Value |
|-|-|-|
| hibernateSupport | Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more seehttps://aka.ms/devbox/hibernate | 'Disabled''Enabled' |
| imageReference | Image reference information. | ImageReference |
| osStorageType | The storage type used for the Operating System disk of Dev Boxes created using this definition. | string |
| sku | The SKU for Dev Boxes created using this definition. | Sku |


### ImageReference

| Name | Description | Value |
|-|-|-|
| id | Image ID, or Image version ID. When Image ID is provided, its latest version will be used. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


