```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/userProvidedFunctionApps@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      functionAppRegion = "string"
      functionAppResourceId = "string"
    }
    kind = "string"
  })
}

```

### staticSites/userProvidedFunctionApps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteUserProvidedFunctionAppARMResource resource specific properties | StaticSiteUserProvidedFunctionAppARMResourceProperti... |


### StaticSiteUserProvidedFunctionAppARMResourceProperti...

| Name | Description | Value |
|-|-|-|
| functionAppRegion | The region of the function app registered with the static site | string |
| functionAppResourceId | The resource id of the function app registered with the static site | string |


