```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/connectionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionType = "string"
    }
  })
}

```

### servers/connectionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerConnectionPolicyProperties |


### ServerConnectionPolicyProperties

| Name | Description | Value |
|-|-|-|
| connectionType | The server connection type. | 'Default''Proxy''Redirect' (required) |


