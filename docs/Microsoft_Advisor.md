## Microsoft.Advisor/configurations@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Advisor/configurations@2023-01-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      digests = [
        {
          actionGroupResourceId = "string"
          categories = [
            "string"
          ]
          frequency = int
          language = "string"
          name = "string"
          state = "string"
        }
      ]
      duration = "string"
      exclude = bool
      lowCpuThreshold = "string"
    }
  })
}

```

### configurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The Advisor configuration data structure. | ConfigDataProperties |


### ConfigDataProperties

| Name | Description | Value |
|-|-|-|
| digests | Advisor digest configuration. Valid only for subscriptions | DigestConfig[] |
| duration | Minimum duration for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 7 (default), 14, 21, 30, 60 or 90. | '14''21''30''60''7''90' |
| exclude | Exclude the resource from Advisor evaluations. Valid values: False (default) or True. | bool |
| lowCpuThreshold | Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20. | '10''15''20''5' |


### DigestConfig

| Name | Description | Value |
|-|-|-|
| actionGroupResourceId | Action group resource id used by digest. | string |
| categories | Categories to send digest for. If categories are not provided, then digest will be sent for all categories. | String array containing any of:'Cost''HighAvailability''OperationalExcellence''Performance''Security' |
| frequency | Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive. | int |
| language | Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en). | string |
| name | Name of digest configuration. Value is case-insensitive and must be unique within a subscription. | string |
| state | State of digest configuration. | 'Active''Disabled' |
## Microsoft.Advisor/recommendations/suppressions@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Advisor/recommendations/suppressions@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      suppressionId = "string"
      ttl = "string"
    }
  })
}

```

### recommendations/suppressions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:recommendations |
| properties | The properties of the suppression. | SuppressionProperties |


### SuppressionProperties

| Name | Description | Value |
|-|-|-|
| suppressionId | The GUID of the suppression. | string |
| ttl | The duration for which the suppression is valid. | string |
