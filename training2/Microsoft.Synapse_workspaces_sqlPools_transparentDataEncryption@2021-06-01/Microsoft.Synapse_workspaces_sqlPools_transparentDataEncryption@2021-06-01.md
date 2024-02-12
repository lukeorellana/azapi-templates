```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-06-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      status = "string"
    }
  })
}

```

### workspaces/sqlPools/transparentDataEncryption

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Represents the properties of the resource. | TransparentDataEncryptionProperties |


### TransparentDataEncryptionProperties

| Name | Description | Value |
|-|-|-|
| status | The status of the database transparent data encryption. | 'Disabled''Enabled' |


