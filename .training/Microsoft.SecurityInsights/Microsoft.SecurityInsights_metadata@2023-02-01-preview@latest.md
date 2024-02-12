```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/metadata@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      author = {
        email = "string"
        link = "string"
        name = "string"
      }
      categories = {
        domains = [
          "string"
        ]
        verticals = [
          "string"
        ]
      }
      contentId = "string"
      contentSchemaVersion = "string"
      customVersion = "string"
      dependencies = {
        contentId = "string"
        criteria = [
          {
          kind = "string"
          name = "string"
          operator = "string"
          version = "string"
      }
      firstPublishDate = "string"
      icon = "string"
      kind = "string"
      lastPublishDate = "string"
      parentId = "string"
      previewImages = [
        "string"
      ]
      previewImagesDark = [
        "string"
      ]
      providers = [
        "string"
      ]
      source = {
        kind = "string"
        name = "string"
        sourceId = "string"
      }
      support = {
        email = "string"
        link = "string"
        name = "string"
        tier = "string"
      }
      threatAnalysisTactics = [
        "string"
      ]
      threatAnalysisTechniques = [
        "string"
      ]
      version = "string"
    }
    etag = "string"
  })
}

```

### metadata

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Metadata properties | MetadataProperties |


### MetadataProperties

| Name | Description | Value |
|-|-|-|
| author | The creator of the content item. | MetadataAuthor |
| categories | Categories for the solution content item | MetadataCategories |
| contentId | Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name | string |
| contentSchemaVersion | Schema version of the content. Can be used to distinguish between different flow based on the schema version | string |
| customVersion | The custom version of the content. A optional free text | string |
| dependencies | Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats. | MetadataDependencies |
| firstPublishDate | first publish date solution content item | string |
| icon | the icon identifier. this id can later be fetched from the solution template | string |
| kind | The kind of content the metadata is for. | 'AnalyticsRule''AnalyticsRuleTemplate''AutomationRule''AzureFunction''DataConnector''DataType''HuntingQuery''InvestigationQuery''LogicAppsCustomConnector''Parser''Playbook''PlaybookTemplate''Solution''Watchlist''WatchlistTemplate''Workbook''WorkbookTemplate' (required) |
| lastPublishDate | last publish date for the solution content item | string |
| parentId | Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group) | string (required) |
| previewImages | preview image file names. These will be taken from the solution artifacts | string[] |
| previewImagesDark | preview image file names. These will be taken from the solution artifacts. used for dark theme support | string[] |
| providers | Providers for the solution content item | string[] |
| source | Source of the content.  This is where/how it was created. | MetadataSource |
| support | Support information for the metadata - type, name, contact information | MetadataSupport |
| threatAnalysisTactics | the tactics the resource covers | string[] |
| threatAnalysisTechniques | the techniques the resource covers, these have to be aligned with the tactics being used | string[] |
| version | Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks | string |


### MetadataAuthor

| Name | Description | Value |
|-|-|-|
| email | Email of author contact | string |
| link | Link for author/vendor page | string |
| name | Name of the author. Company or person. | string |


### MetadataCategories

| Name | Description | Value |
|-|-|-|
| domains | domain for the solution content item | string[] |
| verticals | Industry verticals for the solution content item | string[] |


### MetadataDependencies

| Name | Description | Value |
|-|-|-|
| contentId | Id of the content item we depend on | string |
| criteria | This is the list of dependencies we must fulfill, according to the AND/OR operator | MetadataDependencies[] |
| kind | Type of the content item we depend on | 'AnalyticsRule''AnalyticsRuleTemplate''AutomationRule''AzureFunction''DataConnector''DataType''HuntingQuery''InvestigationQuery''LogicAppsCustomConnector''Parser''Playbook''PlaybookTemplate''Solution''Watchlist''WatchlistTemplate''Workbook''WorkbookTemplate' |
| name | Name of the content item | string |
| operator | Operator used for list of dependencies in criteria array. | 'AND''OR' |
| version | Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required. | string |


### MetadataSource

| Name | Description | Value |
|-|-|-|
| kind | Source type of the content | 'Community''LocalWorkspace''Solution''SourceRepository' (required) |
| name | Name of the content source.  The repo name, solution name, LA workspace name etc. | string |
| sourceId | ID of the content source.  The solution ID, workspace ID, etc | string |


### MetadataSupport

| Name | Description | Value |
|-|-|-|
| email | Email of support contact | string |
| link | Link for support help, like to support page to open a ticket etc. | string |
| name | Name of the support contact. Company or person. | string |
| tier | Type of support for content item | 'Community''Microsoft''Partner' (required) |


