## Microsoft.Management/managementGroups@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups@2021-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      details = {
        parent = {
          id = "string"
        }
      }
      displayName = "string"
    }
  })
}

```

### managementGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | For Bicep:tenant(). |
| properties | The generic properties of a management group used during creation. | CreateManagementGroupPropertiesOrManagementGroupProp... |


### CreateManagementGroupPropertiesOrManagementGroupProp...

| Name | Description | Value |
|-|-|-|
| details | The details of a management group used during creation. | CreateManagementGroupDetailsOrManagementGroupDetails |
| displayName | The friendly name of the management group. If no value is passed then this  field will be set to the groupId. | string |


### CreateManagementGroupDetailsOrManagementGroupDetails

| Name | Description | Value |
|-|-|-|
| parent | (Optional) The ID of the parent management group used during creation. | CreateParentGroupInfoOrParentGroupInfo |


### CreateParentGroupInfoOrParentGroupInfo

| Name | Description | Value |
|-|-|-|
| id | The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | string |
## Microsoft.Management/managementGroups/settings@2021-04-01

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
## Microsoft.Management/managementGroups/subscriptions@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups/subscriptions@2021-04-01"
  name = "string"
  parent_id = "string"
}

```

### managementGroups/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managementGroups |
