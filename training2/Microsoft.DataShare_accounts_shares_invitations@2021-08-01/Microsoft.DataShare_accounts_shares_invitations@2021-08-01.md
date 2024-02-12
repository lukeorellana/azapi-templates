```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/invitations@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationDate = "string"
      targetActiveDirectoryId = "string"
      targetEmail = "string"
      targetObjectId = "string"
    }
  })
}

```

### accounts/shares/invitations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shares |
| properties | Properties on the Invitation | InvitationProperties |


### InvitationProperties

| Name | Description | Value |
|-|-|-|
| expirationDate | The expiration date for the invitation and share subscription. | string |
| targetActiveDirectoryId | The target Azure AD Id. Can't be combined with email. | string |
| targetEmail | The email the invitation is directed to. | string |
| targetObjectId | The target user or application Id that invitation is being sent to.Must be specified along TargetActiveDirectoryId. This enables sendinginvitations to specific users or applications in an AD tenant. | string |


