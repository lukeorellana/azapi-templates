```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/privateLinkAssociations@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLink = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### privateLinkAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the PrivateLinkAssociation. | PrivateLinkAssociationPropertiesOrPrivateLinkAssocia... |


### PrivateLinkAssociationPropertiesOrPrivateLinkAssocia...

| Name | Description | Value |
|-|-|-|
| privateLink | The rmpl Resource ID. | string |
| publicNetworkAccess |  | 'Disabled''Enabled' |


