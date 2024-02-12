```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewScheduleDefinitions/instances@2021-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    backupReviewers = [
      {
        principalId = "string"
      }
    ]
    endDateTime = "string"
    reviewers = [
      {
        principalId = "string"
      }
    ]
    startDateTime = "string"
  })
}

```

### accessReviewScheduleDefinitions/instances

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accessReviewScheduleDefinitions |
| backupReviewers | This is the collection of backup reviewers. | AccessReviewReviewer[] |
| endDateTime | The DateTime when the review instance is scheduled to end. | string |
| reviewers | This is the collection of reviewers. | AccessReviewReviewer[] |
| startDateTime | The DateTime when the review instance is scheduled to be start. | string |


### AccessReviewReviewer

| Name | Description | Value |
|-|-|-|
| principalId | The id of the reviewer(user/servicePrincipal) | string |


