```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/securityPartnerProviders@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      securityProviderName = "string"
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

### securityPartnerProviders

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Security Partner Provider. | SecurityPartnerProviderPropertiesFormat |


### SecurityPartnerProviderPropertiesFormat

| Name | Description | Value |
|-|-|-|
| securityProviderName | The security provider name. | 'Checkpoint''IBoss''ZScaler' |
| virtualHub | The virtualHub to which the Security Partner Provider belongs. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


