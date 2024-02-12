```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      closedReasonText = "string"
      closeReason = "string"
      description = "string"
      endTimeUtc = "string"
      labels = [
        "string"
      ]
      owner = {
        objectId = "string"
      }
      severity = "string"
      startTimeUtc = "string"
      status = "string"
      title = "string"
    }
    etag = "string"
  })
}

```

### cases

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | Case properties | CaseProperties |


### CaseProperties

| Name | Description | Value |
|-|-|-|
| closedReasonText | the case close reason details | string |
| closeReason | The reason the case was closed | 'Dismissed''FalsePositive''Other''Resolved''TruePositive' |
| description | The description of the case | string |
| endTimeUtc | The end time of the case | string |
| labels | List of labels relevant to this case | string[] |
| owner | Describes a user that the case is assigned to | UserInfo |
| severity | The severity of the case | 'Critical''High''Informational''Low''Medium' (required) |
| startTimeUtc | The start time of the case | string |
| status | The status of the case | 'Closed''Draft''InProgress''New' (required) |
| title | The title of the case | string (required) |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |


