```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### managedInstances/databases/transparentDataEncryption

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | ManagedTransparentDataEncryptionProperties |


### ManagedTransparentDataEncryptionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the transparent data encryption. | 'Disabled''Enabled' (required) |


