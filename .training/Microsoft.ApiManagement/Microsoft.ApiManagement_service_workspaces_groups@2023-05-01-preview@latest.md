```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/groups@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      externalId = "string"
      type = "string"
    }
  })
}

```

### service/workspaces/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties supplied to Create Group operation. | GroupCreateParametersPropertiesOrGroupContractProper... |


### GroupCreateParametersPropertiesOrGroupContractProper...

| Name | Description | Value |
|-|-|-|
| description | Group description. | string |
| displayName | Group name. | string (required) |
| externalId | Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directoryaad://{tenant}.onmicrosoft.com/groups/{group object id}; otherwise the value is null. | string |
| type | Group type. | 'custom''external''system' |


