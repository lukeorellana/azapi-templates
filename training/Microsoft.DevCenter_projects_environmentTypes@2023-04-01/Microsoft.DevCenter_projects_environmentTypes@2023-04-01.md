```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/environmentTypes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      creatorRoleAssignment = {
        roles = {}
      }
      deploymentTargetId = "string"
      status = "string"
      userRoleAssignments = {}
    }
  })
}

```

### projects/environmentTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location for the environment type | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| identity | Managed identity properties | ManagedServiceIdentity |
| properties | Properties of an environment type. | ProjectEnvironmentTypeProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### ProjectEnvironmentTypeProperties

| Name | Description | Value |
|-|-|-|
| creatorRoleAssignment | The role definition assigned to the environment creator on backing resources. | ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAss... |
| deploymentTargetId | Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription. | string |
| status | Defines whether this Environment Type can be used in this Project. | 'Disabled''Enabled' |
| userRoleAssignments | Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs. | object |


### ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAss...

| Name | Description | Value |
|-|-|-|
| roles | A map of roles to assign to the environment creator. | object |


