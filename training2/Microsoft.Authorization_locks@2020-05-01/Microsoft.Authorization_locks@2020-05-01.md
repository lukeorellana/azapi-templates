```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/locks@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      level = "string"
      notes = "string"
      owners = [
        {
          applicationId = "string"
        }
      ]
    }
  })
}

```

### locks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Alphanumerics, periods, underscores, hyphens, and parenthesis.Can't end in period. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the lock. | ManagementLockProperties(required) |


### ManagementLockProperties

| Name | Description | Value |
|-|-|-|
| level | The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it. | 'CanNotDelete''NotSpecified''ReadOnly' (required) |
| notes | Notes about the lock. Maximum of 512 characters. | string |
| owners | The owners of the lock. | ManagementLockOwner[] |


### ManagementLockOwner

| Name | Description | Value |
|-|-|-|
| applicationId | The application ID of the lock owner. | string |


