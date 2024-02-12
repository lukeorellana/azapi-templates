```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      classification = "string"
      classificationComment = "string"
      classificationReason = "string"
      description = "string"
      firstActivityTimeUtc = "string"
      labels = [
        {
          labelName = "string"
        }
      ]
      lastActivityTimeUtc = "string"
      owner = {
        assignedTo = "string"
        email = "string"
        objectId = "string"
        ownerType = "string"
        userPrincipalName = "string"
      }
      providerIncidentId = "string"
      providerName = "string"
      severity = "string"
      status = "string"
      teamInformation = {}
      title = "string"
    }
    etag = "string"
  })
}

```

### incidents

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties |  | IncidentProperties |


### IncidentProperties

| Name | Description | Value |
|-|-|-|
| classification | The reason the incident was closed | 'BenignPositive''FalsePositive''TruePositive''Undetermined' |
| classificationComment | Describes the reason the incident was closed | string |
| classificationReason | The classification reason the incident was closed with | 'InaccurateData''IncorrectAlertLogic''SuspiciousActivity''SuspiciousButExpected' |
| description | The description of the incident | string |
| firstActivityTimeUtc | The time of the first activity in the incident | string |
| labels | List of labels relevant to this incident | IncidentLabel[] |
| lastActivityTimeUtc | The time of the last activity in the incident | string |
| owner | Describes a user that the incident is assigned to | IncidentOwnerInfo |
| providerIncidentId | The incident ID assigned by the incident provider | string |
| providerName | The name of the source provider that generated the incident | string |
| severity | The severity of the incident | 'High''Informational''Low''Medium' (required) |
| status | The status of the incident | 'Active''Closed''New' (required) |
| teamInformation | Describes a team for the incident | TeamInformation |
| title | The title of the incident | string (required) |


### IncidentLabel

| Name | Description | Value |
|-|-|-|
| labelName | The name of the label | string (required) |


### IncidentOwnerInfo

| Name | Description | Value |
|-|-|-|
| assignedTo | The name of the user the incident is assigned to. | string |
| email | The email of the user the incident is assigned to. | string |
| objectId | The object id of the user the incident is assigned to. | string |
| ownerType | The type of the owner the incident is assigned to. | 'Group''Unknown''User' |
| userPrincipalName | The user principal name of the user the incident is assigned to. | string |


