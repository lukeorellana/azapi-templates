```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      o365Policy = {
        breakOutCategories = {
          allow = bool
          default = bool
          optimize = bool
        }
      }
    }
  })
}

```

### networkVirtualAppliances/virtualApplianceSites

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkVirtualAppliances |
| properties | The properties of the Virtual Appliance Sites. | VirtualApplianceSiteProperties |


### VirtualApplianceSiteProperties

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address Prefix. | string |
| o365Policy | Office 365 Policy. | Office365PolicyProperties |


### Office365PolicyProperties

| Name | Description | Value |
|-|-|-|
| breakOutCategories | Office 365 breakout categories. | BreakOutCategoryPolicies |


### BreakOutCategoryPolicies

| Name | Description | Value |
|-|-|-|
| allow | Flag to control breakout of o365 allow category. | bool |
| default | Flag to control breakout of o365 default category. | bool |
| optimize | Flag to control breakout of o365 optimize category. | bool |


