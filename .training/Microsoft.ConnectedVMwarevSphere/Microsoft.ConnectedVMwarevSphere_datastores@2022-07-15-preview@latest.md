```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### datastores

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | DatastoreProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### DatastoreProperties

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the datastore. | string |
| moRefId | Gets or sets the vCenter MoRef (Managed Object Reference) ID for the datastore. | string |
| vCenterId | Gets or sets the ARM Id of the vCenter resource in which this datastore resides. | string |


