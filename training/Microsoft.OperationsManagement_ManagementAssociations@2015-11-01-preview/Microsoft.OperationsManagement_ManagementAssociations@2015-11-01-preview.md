```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationId = "string"
    }
  })
}

```

### ManagementAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| properties | Properties for ManagementAssociation object supported by the OperationsManagement resource provider. | ManagementAssociationProperties |


### ManagementAssociationProperties

| Name | Description | Value |
|-|-|-|
| applicationId | The applicationId of the appliance for this association. | string (required) |


