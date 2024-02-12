```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/resourceGuards@2022-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      vaultCriticalOperationExclusionList = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

### resourceGuards

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| eTag | Optional ETag. | string |
| identity | Input Managed Identity Details | DppIdentityDetails |
| properties | ResourceGuardResource properties | ResourceGuard |


### DppIdentityDetails

| Name | Description | Value |
|-|-|-|
| type | The identityType which can be either SystemAssigned or None | string |


### ResourceGuard

| Name | Description | Value |
|-|-|-|
| vaultCriticalOperationExclusionList | List of critical operations which are not protected by this resourceGuard | string[] |


