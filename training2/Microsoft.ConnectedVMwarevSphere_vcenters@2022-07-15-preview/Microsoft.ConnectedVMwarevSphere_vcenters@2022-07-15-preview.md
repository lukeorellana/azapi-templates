```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      credentials = {
        password = "string"
        username = "string"
      }
      fqdn = "string"
      port = int
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### vcenters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string (required) |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| extendedLocation | Gets or sets the extended location. | ExtendedLocation |
| properties | Resource properties. | VCenterProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### VCenterProperties

| Name | Description | Value |
|-|-|-|
| credentials | Username / Password Credentials to connect to vcenter. | VICredential |
| fqdn | Gets or sets the FQDN/IPAddress of the vCenter. | string (required) |
| port | Gets or sets the port of the vCenter. | int |


### VICredential

| Name | Description | Value |
|-|-|-|
| password | Gets or sets the password to connect with the vCenter. | string |
| username | Gets or sets username to connect with the vCenter. | string |


