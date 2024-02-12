```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      options = [
        "string"
      ]
      target = {
        keyVaultUri = "string"
        type = "string"
        uri = "string"
      }
    }
  })
}

```

### registries/exportPipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the export pipeline. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | The identity of the export pipeline. | IdentityProperties |
| properties | The properties of the export pipeline. | ExportPipelineProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ExportPipelineProperties

| Name | Description | Value |
|-|-|-|
| options | The list of all options configured for the pipeline. | String array containing any of:'ContinueOnErrors''DeleteSourceBlobOnSuccess''OverwriteBlobs''OverwriteTags' |
| target | The target properties of the export pipeline. | ExportPipelineTargetProperties(required) |


### ExportPipelineTargetProperties

| Name | Description | Value |
|-|-|-|
| keyVaultUri | They key vault secret uri to obtain the target storage SAS token. | string (required) |
| type | The type of target for the export pipeline. | string |
| uri | The target uri of the export pipeline.When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"When 'AzureStorageBlobContainer':  "https://accountName.blob.core.windows.net/containerName" | string |


