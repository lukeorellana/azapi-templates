```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentialSetResourceId = "string"
      sourceRepository = "string"
      targetRepository = "string"
    }
  })
}

```

### registries/cacheRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the cache rule. | CacheRuleProperties |


### CacheRuleProperties

| Name | Description | Value |
|-|-|-|
| credentialSetResourceId | The ARM resource ID of the credential store which is associated with the cache rule. | string |
| sourceRepository | Source repository pulled from upstream. | string |
| targetRepository | Target repository specified in docker pull command.Eg: docker pull myregistry.azurecr.io/{targetRepository}:{tag} | string |


