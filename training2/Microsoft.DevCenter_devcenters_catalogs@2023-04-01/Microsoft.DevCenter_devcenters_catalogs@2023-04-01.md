```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/catalogs@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      adoGit = {
        branch = "string"
        path = "string"
        secretIdentifier = "string"
        uri = "string"
      }
      gitHub = {
        branch = "string"
        path = "string"
        secretIdentifier = "string"
        uri = "string"
      }
    }
  })
}

```

### devcenters/catalogs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Catalog properties. | CatalogProperties |


### CatalogProperties

| Name | Description | Value |
|-|-|-|
| adoGit | Properties for an Azure DevOps catalog type. | GitCatalog |
| gitHub | Properties for a GitHub catalog type. | GitCatalog |


### GitCatalog

| Name | Description | Value |
|-|-|-|
| branch | Git branch. | string |
| path | The folder where the catalog items can be found inside the repository. | string |
| secretIdentifier | A reference to the Key Vault secret containing a security token to authenticate to a Git repository. | string |
| uri | Git URI. | string |


