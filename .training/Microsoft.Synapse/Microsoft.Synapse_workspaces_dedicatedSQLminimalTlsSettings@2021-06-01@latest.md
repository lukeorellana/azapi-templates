```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      minimalTlsVersion = "string"
    }
  })
}

```

### workspaces/dedicatedSQLminimalTlsSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | DedicatedSQLminimalTlsSettingsProperties |


### DedicatedSQLminimalTlsSettingsProperties

| Name | Description | Value |
|-|-|-|
| minimalTlsVersion | The minimal tls version of the sql server. | string |


