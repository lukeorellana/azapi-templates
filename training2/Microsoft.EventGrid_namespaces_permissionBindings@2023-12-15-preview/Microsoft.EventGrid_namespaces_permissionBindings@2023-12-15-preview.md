```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/permissionBindings@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientGroupName = "string"
      description = "string"
      permission = "string"
      topicSpaceName = "string"
    }
  })
}

```

### namespaces/permissionBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of permission binding. | PermissionBindingProperties |


### PermissionBindingProperties

| Name | Description | Value |
|-|-|-|
| clientGroupName | The name of the client group resource that the permission is bound to.The client group needs to be a resource under the same namespace the permission binding is a part of. | string |
| description | Description for the Permission Binding resource. | string |
| permission | The allowed permission. | 'Publisher''Subscriber' |
| topicSpaceName | The name of the Topic Space resource that the permission is bound to.The Topic space needs to be a resource under the same namespace the permission binding is a part of. | string |


