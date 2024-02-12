```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/linkedBackends@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendResourceId = "string"
      region = "string"
    }
    kind = "string"
  })
}

```

### staticSites/linkedBackends

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteLinkedBackendARMResource resource specific properties | StaticSiteLinkedBackendARMResourceProperties |


### StaticSiteLinkedBackendARMResourceProperties

| Name | Description | Value |
|-|-|-|
| backendResourceId | The resource id of the backend linked to the static site | string |
| region | The region of the backend linked to the static site | string |


