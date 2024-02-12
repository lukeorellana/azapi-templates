```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/bookmarks@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      created = "string"
      createdBy = {
        objectId = "string"
      }
      displayName = "string"
      entityMappings = [
        {
          entityType = "string"
          fieldMappings = [
            {
              identifier = "string"
              value = "string"
            }
          ]
        }
      ]
      eventTime = "string"
      incidentInfo = {
        incidentId = "string"
        relationName = "string"
        severity = "string"
        title = "string"
      }
      labels = [
        "string"
      ]
      notes = "string"
      query = "string"
      queryEndTime = "string"
      queryResult = "string"
      queryStartTime = "string"
      tactics = [
        "string"
      ]
      techniques = [
        "string"
      ]
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
    }
    etag = "string"
  })
}

```

### bookmarks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Bookmark properties | BookmarkProperties |


### BookmarkProperties

| Name | Description | Value |
|-|-|-|
| created | The time the bookmark was created | string |
| createdBy | Describes a user that created the bookmark | UserInfo |
| displayName | The display name of the bookmark | string (required) |
| entityMappings | Describes the entity mappings of the bookmark | BookmarkEntityMappings[] |
| eventTime | The bookmark event time | string |
| incidentInfo | Describes an incident that relates to bookmark | IncidentInfo |
| labels | List of labels relevant to this bookmark | string[] |
| notes | The notes of the bookmark | string |
| query | The query of the bookmark. | string (required) |
| queryEndTime | The end time for the query | string |
| queryResult | The query result of the bookmark. | string |
| queryStartTime | The start time for the query | string |
| tactics | A list of relevant mitre attacks | String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment' |
| techniques | A list of relevant mitre techniques | string[] |
| updated | The last time the bookmark was updated | string |
| updatedBy | Describes a user that updated the bookmark | UserInfo |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |


### BookmarkEntityMappings

| Name | Description | Value |
|-|-|-|
| entityType | The entity type | string |
| fieldMappings | Array of fields mapping for that entity type | EntityFieldMapping[] |


### EntityFieldMapping

| Name | Description | Value |
|-|-|-|
| identifier | Alert V3 identifier | string |
| value | The value of the identifier | string |


### IncidentInfo

| Name | Description | Value |
|-|-|-|
| incidentId | Incident Id | string |
| relationName | Relation Name | string |
| severity | The severity of the incident | 'High''Informational''Low''Medium' |
| title | The title of the incident | string |


