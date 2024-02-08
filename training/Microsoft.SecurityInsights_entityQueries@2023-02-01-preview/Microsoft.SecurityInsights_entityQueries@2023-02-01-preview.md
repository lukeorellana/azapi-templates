```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/entityQueries@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see entityQueries objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### entityQueries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | ActivityExpansion(required) |
| etag | Etag of the azure resource | string |


### ActivityCustomEntityQueryOrActivityEntityQuery

| Name | Description | Value |
|-|-|-|
| kind | the entity query kind | 'Activity' (required) |
| properties | Activity entity query properties | ActivityEntityQueriesProperties |


### ActivityEntityQueriesProperties

| Name | Description | Value |
|-|-|-|
| content | The entity query content to display in timeline | string |
| description | The entity query description | string |
| enabled | Determines whether this activity is enabled or disabled. | bool |
| entitiesFilter | The query applied only to entities matching to all filters | object |
| inputEntityType | The type of the query's source entity | 'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''HuntingBookmark''IP''IoTDevice''MailCluster''MailMessage''Mailbox''Malware''Nic''Process''RegistryKey''RegistryValue''SecurityAlert''SecurityGroup''SubmissionMail''URL' |
| queryDefinitions | The Activity query definitions | ActivityEntityQueriesPropertiesQueryDefinitions |
| requiredInputFieldsSets | List of the fields of the source entity that are required to run the query | string[][] |
| templateName | The template id this activity was created from | string |
| title | The entity query title | string |


### ActivityEntityQueriesPropertiesQueryDefinitions

| Name | Description | Value |
|-|-|-|
| query | The Activity query to run on a given entity | string |


### ExpansionEntityQuery

| Name | Description | Value |
|-|-|-|
| kind | the entity query kind | 'Expansion' (required) |


