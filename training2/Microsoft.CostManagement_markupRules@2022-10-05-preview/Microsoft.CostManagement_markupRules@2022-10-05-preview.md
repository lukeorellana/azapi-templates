```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/markupRules@2022-10-05-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerDetails = {
        billingAccountId = "string"
        billingProfileId = "string"
      }
      description = "string"
      endDate = "string"
      percentage = int
      startDate = "string"
    }
    eTag = "string"
  })
}

```

### markupRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| eTag | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | string |
| properties | The properties of the markup rule. | MarkupRuleProperties |


### MarkupRuleProperties

| Name | Description | Value |
|-|-|-|
| customerDetails | Customer information for the markup rule. | CustomerMetadata(required) |
| description | The description of the markup rule. | string |
| endDate | Ending date of the markup rule. | string |
| percentage | The markup percentage of the rule. | int (required) |
| startDate | Starting date of the markup rule. | string (required) |


### CustomerMetadata

| Name | Description | Value |
|-|-|-|
| billingAccountId | Customer billing account id | string (required) |
| billingProfileId | Customer billing profile id | string (required) |


