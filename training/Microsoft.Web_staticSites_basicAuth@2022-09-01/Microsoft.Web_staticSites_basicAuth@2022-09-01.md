```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/basicAuth@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicableEnvironmentsMode = "string"
      environments = [
        "string"
      ]
      password = "string"
      secretUrl = "string"
    }
    kind = "string"
  })
}

```

### staticSites/basicAuth

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteBasicAuthPropertiesARMResource resource specific properties | StaticSiteBasicAuthPropertiesARMResourceProperties |


### StaticSiteBasicAuthPropertiesARMResourceProperties

| Name | Description | Value |
|-|-|-|
| applicableEnvironmentsMode | State indicating if basic auth is enabled and for what environments it is active. | string (required) |
| environments | The list of enabled environments for Basic Auth if ApplicableEnvironmentsMode is set to SpecifiedEnvironments. | string[] |
| password | The password for basic auth. | string |
| secretUrl | Url to the secret in Key Vault. | string |


