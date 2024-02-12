```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleDefinitions@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignableScopes = [
        "string"
      ]
      description = "string"
      permissions = [
        {
          actions = [
            "string"
          ]
          dataActions = [
            "string"
          ]
          notActions = [
            "string"
          ]
          notDataActions = [
            "string"
          ]
        }
      ]
      roleName = "string"
      type = "string"
    }
  })
}

```

### roleDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 36Valid characters:Must be a globally unique identifier (GUID).Resource name must be unique across tenant. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Role definition properties. | RoleDefinitionProperties |


### RoleDefinitionProperties

| Name | Description | Value |
|-|-|-|
| assignableScopes | Role definition assignable scopes. | string[] |
| description | The role definition description. | string |
| permissions | Role definition permissions. | Permission[] |
| roleName | The role name. | string |
| type | The role type. | string |


### Permission

| Name | Description | Value |
|-|-|-|
| actions | Allowed actions. | string[] |
| dataActions | Allowed Data actions. | string[] |
| notActions | Denied actions. | string[] |
| notDataActions | Denied Data actions. | string[] |


