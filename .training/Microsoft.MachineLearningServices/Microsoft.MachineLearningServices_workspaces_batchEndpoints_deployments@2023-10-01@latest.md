```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2023-10-01"
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
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      compute = "string"
      description = "string"
      environmentId = "string"
      environmentVariables = {
        {customized property} = "string"
        {customized property} = "string"
      }
      errorThreshold = int
      loggingLevel = "string"
      maxConcurrencyPerInstance = int
      miniBatchSize = int
      model = {
        referenceType = "string"
        // For remaining properties, see AssetReferenceBase objects
      }
      outputAction = "string"
      outputFileName = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      resources = {
        instanceCount = int
        instanceType = "string"
        properties = {}
      }
      retrySettings = {
        maxRetries = int
        timeout = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### workspaces/batchEndpoints/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchEndpoints |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | BatchDeploymentProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### BatchDeploymentProperties

| Name | Description | Value |
|-|-|-|
| codeConfiguration | Code configuration for the endpoint deployment. | CodeConfiguration |
| compute | Compute target for batch inference operation. | string |
| description | Description of the endpoint deployment. | string |
| environmentId | ARM resource ID or AssetId of the environment specification for the endpoint deployment. | string |
| environmentVariables | Environment variables configuration for the deployment. | EndpointDeploymentPropertiesBaseEnvironmentVariables |
| errorThreshold | Error threshold, if the error count for the entire input goes above this value,the batch inference will be aborted. Range is [-1, int.MaxValue].For FileDataset, this value is the count of file failures.For TabularDataset, this value is the count of record failures.If set to -1 (the lower bound), all failures during batch inference will be ignored. | int |
| loggingLevel | Logging level for batch inference operation. | 'Debug''Info''Warning' |
| maxConcurrencyPerInstance | Indicates maximum number of parallelism per instance. | int |
| miniBatchSize | Size of the mini-batch passed to each batch invocation.For FileDataset, this is the number of files per mini-batch.For TabularDataset, this is the size of the records in bytes, per mini-batch. | int |
| model | Reference to the model asset for the endpoint deployment. | AssetReferenceBase |
| outputAction | Indicates how the output will be organized. | 'AppendRow''SummaryOnly' |
| outputFileName | Customized output file name for append_row output action. | string |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointDeploymentPropertiesBaseProperties |
| resources | Indicates compute configuration for the job.If not provided, will default to the defaults defined in ResourceConfiguration. | DeploymentResourceConfiguration |
| retrySettings | Retry Settings for the batch inference operation.If not provided, will default to the defaults defined in BatchRetrySettings. | BatchRetrySettings |


### CodeConfiguration

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| scoringScript | [Required] The script to execute on startup. eg. "score.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### EndpointDeploymentPropertiesBaseEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### AssetReferenceBase

| Name | Description | Value |
|-|-|-|
| referenceType | Set the object type | DataPathIdOutputPath(required) |


### DataPathAssetReference

| Name | Description | Value |
|-|-|-|
| referenceType | [Required] Specifies the type of asset reference. | 'DataPath' (required) |
| datastoreId | ARM resource ID of the datastore where the asset is located. | string |
| path | The path of the file/directory in the datastore. | string |


### IdAssetReference

| Name | Description | Value |
|-|-|-|
| referenceType | [Required] Specifies the type of asset reference. | 'Id' (required) |
| assetId | [Required] ARM resource ID of the asset. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### OutputPathAssetReference

| Name | Description | Value |
|-|-|-|
| referenceType | [Required] Specifies the type of asset reference. | 'OutputPath' (required) |
| jobId | ARM resource ID of the job. | string |
| path | The path of the file/directory in the job output. | string |


### EndpointDeploymentPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### DeploymentResourceConfiguration

| Name | Description | Value |
|-|-|-|
| instanceCount | Optional number of instances or nodes used by the compute target. | int |
| instanceType | Optional type of VM used as supported by the compute target. | string |
| properties | Additional properties bag. | ResourceConfigurationProperties |


### ResourceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
| {customized property} |  | For Bicep, you can use theany()function. |


### BatchRetrySettings

| Name | Description | Value |
|-|-|-|
| maxRetries | Maximum retry count for a mini-batch | int |
| timeout | Invocation timeout for a mini-batch, in ISO 8601 format. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


