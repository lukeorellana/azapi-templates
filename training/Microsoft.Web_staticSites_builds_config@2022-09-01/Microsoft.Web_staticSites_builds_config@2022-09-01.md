```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/builds/config-appsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'appsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | Settings. | object |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2022-09-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/builds/config-functionappsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'functionappsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | Settings. | object |


