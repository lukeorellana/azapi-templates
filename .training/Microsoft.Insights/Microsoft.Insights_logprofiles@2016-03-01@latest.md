```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/logprofiles@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      categories = [
        "string"
      ]
      locations = [
        "string"
      ]
      retentionPolicy = {
        days = int
        enabled = bool
      }
      serviceBusRuleId = "string"
      storageAccountId = "string"
    }
  })
}

```

### logprofiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The log profile properties of the resource. | LogProfileProperties(required) |


### LogProfileProperties

| Name | Description | Value |
|-|-|-|
| categories | the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.' | string[] (required) |
| locations | List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location. | string[] (required) |
| retentionPolicy | the retention policy for the events in the log. | RetentionPolicy(required) |
| serviceBusRuleId | The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'. | string |
| storageAccountId | the resource id of the storage account to which you would like to send the Activity Log. | string |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| days | the number of days for the retention in days. A value of 0 will retain the events indefinitely. | int (required)Constraints:Min value = 0 |
| enabled | a value indicating whether the retention policy is enabled. | bool (required) |


