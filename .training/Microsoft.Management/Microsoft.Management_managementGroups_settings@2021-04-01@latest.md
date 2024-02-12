```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups/settings@2021-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultManagementGroup = "string"
      requireAuthorizationForGroupCreation = bool
    }
  })
}

```

### managementGroups/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managementGroups |
| properties | The properties of the request to create or update Management Group settings | CreateOrUpdateSettingsPropertiesOrHierarchySettingsP... |


### CreateOrUpdateSettingsPropertiesOrHierarchySettingsP...

| Name | Description | Value |
|-|-|-|
| defaultManagementGroup | Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup | string |
| requireAuthorizationForGroupCreation | Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access. | bool |


