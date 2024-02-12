```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      identity = {
        appId = "string"
        objectId = "string"
        principalId = "string"
        principalName = "string"
        tenantId = "string"
      }
      secretStore = {
        keyVaultId = "string"
        keyVaultUri = "string"
      }
    }
  })
}

```

### labs/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | UserProperties |


### UserProperties

| Name | Description | Value |
|-|-|-|
| identity | The identity of the user. | UserIdentity |
| secretStore | The secret store of the user. | UserSecretStore |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| appId | Set to the app Id of the client JWT making the request. | string |
| objectId | Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available. | string |
| principalId | Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id. | string |
| principalName | Set to the principal name / UPN of the client JWT making the request. | string |
| tenantId | Set to the tenant ID of the client JWT making the request. | string |


### UserSecretStore

| Name | Description | Value |
|-|-|-|
| keyVaultId | The ID of the user's Key vault. | string |
| keyVaultUri | The URI of the user's Key vault. | string |


