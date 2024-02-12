```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/favorites@2015-05-01"
  name = "string"
  parent_id = "string"
  Tags = [
    "string"
  ]
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    Category = "string"
    Config = "string"
    FavoriteType = "string"
    IsGeneratedFromTemplate = bool
    SourceType = "string"
    Version = "string"
  })
}

```

### components/favorites

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| Tags | A list of 0 or more tags that are associated with this favorite definition | string[] |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| Category | Favorite category, as defined by the user at creation time. | string |
| Config | Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON | string |
| FavoriteType | Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 'shared''user' |
| IsGeneratedFromTemplate | Flag denoting wether or not this favorite was generated from a template. | bool |
| SourceType | The source of the favorite definition. | string |
| Version | This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search. | string |


