```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      createdTime = "string"
      linkedServiceResourceId = "string"
      linkType = "Synapse"
      modifiedTime = "string"
    }
  })
}

```

### workspaces/linkedServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | location of the linked service. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Identity for the resource. | Identity |
| properties | LinkedService specific properties. | LinkedServiceProps |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The user assigned identities associated with the resource. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### LinkedServiceProps

| Name | Description | Value |
|-|-|-|
| createdTime | The creation time of the linked service. | string |
| linkedServiceResourceId | ResourceId of the link target of the linked service. | string (required) |
| linkType | Type of the link target. | 'Synapse' |
| modifiedTime | The last modified time of the linked service. | string |


