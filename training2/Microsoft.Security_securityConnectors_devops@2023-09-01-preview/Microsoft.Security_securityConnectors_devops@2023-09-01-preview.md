```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops@2023-09-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorization = {
        code = "string"
      }
      autoDiscovery = "string"
      provisioningState = "string"
      topLevelInventoryList = [
        "string"
      ]
    }
  })
}

```

### securityConnectors/devops

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:securityConnectors |
| properties | DevOps Configuration properties. | DevOpsConfigurationProperties |


### DevOpsConfigurationProperties

| Name | Description | Value |
|-|-|-|
| authorization | Authorization payload. | Authorization |
| autoDiscovery | AutoDiscovery states. | 'Disabled''Enabled''NotApplicable' |
| provisioningState | The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure. | 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded' |
| topLevelInventoryList | List of top-level inventory to select when AutoDiscovery is disabled.This field is ignored when AutoDiscovery is enabled. | string[] |


### Authorization

| Name | Description | Value |
|-|-|-|
| code | Gets or sets one-time OAuth code to exchange for refresh and access tokens.Only used during PUT/PATCH operations. The secret is cleared during GET. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


