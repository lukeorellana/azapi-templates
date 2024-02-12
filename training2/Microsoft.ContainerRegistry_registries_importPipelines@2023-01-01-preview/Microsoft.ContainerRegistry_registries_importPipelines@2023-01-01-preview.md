```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview"
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
      source = {
        keyVaultUri = "string"
        type = "AzureStorageBlobContainer"
        uri = "string"
      }
      trigger = {
        sourceTrigger = {
          status = "string"
        }
      }
    }
  })
}

```

### registries/importPipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the import pipeline. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | The identity of the import pipeline. | IdentityProperties |
| properties | The properties of the import pipeline. | ImportPipelineProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ImportPipelineProperties

| Name | Description | Value |
|-|-|-|
| options | The list of all options configured for the pipeline. | String array containing any of:'ContinueOnErrors''DeleteSourceBlobOnSuccess''OverwriteBlobs''OverwriteTags' |
| source | The source properties of the import pipeline. | ImportPipelineSourceProperties(required) |
| trigger | The properties that describe the trigger of the import pipeline. | PipelineTriggerProperties |


### ImportPipelineSourceProperties

| Name | Description | Value |
|-|-|-|
| keyVaultUri | They key vault secret uri to obtain the source storage SAS token. | string (required) |
| type | The type of source for the import pipeline. | 'AzureStorageBlobContainer' |
| uri | The source uri of the import pipeline.When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"When 'AzureStorageBlobContainer': "https://accountName.blob.core.windows.net/containerName" | string |


### PipelineTriggerProperties

| Name | Description | Value |
|-|-|-|
| sourceTrigger | The source trigger properties of the pipeline. | PipelineSourceTriggerProperties |


### PipelineSourceTriggerProperties

| Name | Description | Value |
|-|-|-|
| status | The current status of the source trigger. | 'Disabled''Enabled' (required) |


