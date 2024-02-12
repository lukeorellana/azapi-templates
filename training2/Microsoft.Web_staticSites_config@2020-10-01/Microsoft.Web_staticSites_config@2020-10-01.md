```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2020-10-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/config

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'functionappsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | Settings. | object |

