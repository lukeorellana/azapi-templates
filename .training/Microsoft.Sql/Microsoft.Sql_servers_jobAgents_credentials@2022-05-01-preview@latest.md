```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/credentials@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = "string"
      username = "string"
    }
  })
}

```

### servers/jobAgents/credentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobAgents |
| properties | Resource properties. | JobCredentialProperties |


### JobCredentialProperties

| Name | Description | Value |
|-|-|-|
| password | The credential password. | string (required) |
| username | The credential user name. | string (required) |

