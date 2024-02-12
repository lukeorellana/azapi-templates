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


