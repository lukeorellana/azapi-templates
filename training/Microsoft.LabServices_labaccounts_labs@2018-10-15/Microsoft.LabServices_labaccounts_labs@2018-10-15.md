```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      maxUsersInLab = int
      provisioningState = "string"
      uniqueIdentifier = "string"
      usageQuota = "string"
      userAccessMode = "string"
    }
  })
}

```

### labaccounts/labs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labaccounts |
| properties | The properties of the resource. | LabProperties |


### LabProperties

| Name | Description | Value |
|-|-|-|
| maxUsersInLab | Maximum number of users allowed in the lab. | int |
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |
| usageQuota | Maximum duration a user can use an environment for in the lab. | string |
| userAccessMode | Lab user access mode (open to all vs. restricted to those listed on the lab). | 'Open''Restricted' |


