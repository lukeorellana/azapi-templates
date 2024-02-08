```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/customDomains@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      validationMethod = "string"
    }
    kind = "string"
  })
}

```

### staticSites/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteCustomDomainRequestPropertiesARMResource resource specific properties | StaticSiteCustomDomainRequestPropertiesARMResourcePr... |


### StaticSiteCustomDomainRequestPropertiesARMResourcePr...

| Name | Description | Value |
|-|-|-|
| validationMethod | Validation method for adding a custom domain | string |


