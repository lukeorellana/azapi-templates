```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/autoProvisioningSettings@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoProvision = "string"
    }
  })
}

```

### autoProvisioningSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Auto provisioning setting data | AutoProvisioningSettingProperties |


### AutoProvisioningSettingProperties

| Name | Description | Value |
|-|-|-|
| autoProvision | Describes what kind of security agent provisioning action to take | 'Off''On' (required) |


