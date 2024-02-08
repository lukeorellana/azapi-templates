```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ddosProtectionPlans@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### ddosProtectionPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DDoS protection plan. | DdosProtectionPlanPropertiesFormat |


