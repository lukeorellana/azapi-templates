```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/users@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/labs/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | These are the properties for the user registered under a lab. | UserProperties |


### UserProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


