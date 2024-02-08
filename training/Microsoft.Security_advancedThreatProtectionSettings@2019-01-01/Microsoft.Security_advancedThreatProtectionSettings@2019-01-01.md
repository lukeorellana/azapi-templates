```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/advancedThreatProtectionSettings@2019-01-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isEnabled = bool
    }
  })
}

```

### advancedThreatProtectionSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'current' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The Advanced Threat Protection settings. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether Advanced Threat Protection is enabled. | bool |


