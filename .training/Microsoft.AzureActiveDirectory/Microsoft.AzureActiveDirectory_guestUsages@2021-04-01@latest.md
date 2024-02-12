```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureActiveDirectory/guestUsages@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      tenantId = "string"
    }
  })
}

```

### guestUsages

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the Guest Usages resource. | string |
| tags | Key-value pairs of additional resource provisioning properties. | Dictionary of tag names and values. SeeTags in templates |
| properties | The Guest Usages Resource Properties | GuestUsagesResourceProperties |


### GuestUsagesResourceProperties

| Name | Description | Value |
|-|-|-|
| tenantId | An identifier for the tenant for which the resource is being created | string |


