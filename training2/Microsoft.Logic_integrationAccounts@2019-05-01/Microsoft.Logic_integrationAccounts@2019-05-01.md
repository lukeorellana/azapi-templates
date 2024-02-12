```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      integrationServiceEnvironment = {
        id = "string"
      }
      state = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### integrationAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku. | IntegrationAccountSku |
| properties | The integration account properties. | IntegrationAccountProperties |


### IntegrationAccountProperties

| Name | Description | Value |
|-|-|-|
| integrationServiceEnvironment | The integration service environment. | ResourceReference |
| state | The workflow state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |


### IntegrationAccountSku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'Basic''Free''NotSpecified''Standard' (required) |


