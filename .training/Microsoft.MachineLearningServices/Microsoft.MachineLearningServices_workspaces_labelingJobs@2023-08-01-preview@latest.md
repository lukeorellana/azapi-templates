```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/labelingJobs@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentId = "string"
      computeId = "string"
      dataConfiguration = {
        dataId = "string"
        incrementalDataRefresh = "string"
      }
      description = "string"
      displayName = "string"
      experimentName = "string"
      identity = {
        identityType = "string"
        // For remaining properties, see IdentityConfiguration objects
      }
      isArchived = bool
      jobInstructions = {
        uri = "string"
      }
      jobType = "string"
      labelCategories = {
        {customized property} = {
          classes = {
            {customized property} = {
              displayName = "string"
              subclasses = {
                {customized property} = {}
            }
          }
          displayName = "string"
          multiSelect = "string"
        }
        {customized property} = {
          classes = {
            {customized property} = {
              displayName = "string"
              subclasses = {
                {customized property} = {}
            }
          }
          displayName = "string"
          multiSelect = "string"
        }
      }
      labelingJobMediaProperties = {
        mediaType = "string"
        // For remaining properties, see LabelingJobMediaProperties objects
      }
      mlAssistConfiguration = {
        mlAssist = "string"
        // For remaining properties, see MLAssistConfiguration objects
      }
      notificationSetting = {
        emailOn = [
          "string"
        ]
        emails = [
          "string"
        ]
        webhooks = {
          {customized property} = {
            eventType = "string"
            webhookType = "string"
            // For remaining properties, see Webhook objects
          }
        }
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      secretsConfiguration = {
        {customized property} = {
          uri = "string"
          workspaceSecretName = "string"
        }
        {customized property} = {
          uri = "string"
          workspaceSecretName = "string"
        }
      }
      services = {
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/labelingJobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | LabelingJobProperties(required) |


### LabelingJobProperties

| Name | Description | Value |
|-|-|-|
| componentId | ARM resource ID of the component resource. | string |
| computeId | ARM resource ID of the compute resource. | string |
| dataConfiguration | Configuration of data used in the job. | LabelingDataConfiguration |
| description | The asset description text. | string |
| displayName | Display name of job. | string |
| experimentName | The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment. | string |
| identity | Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null. | IdentityConfiguration |
| isArchived | Is the asset archived? | bool |
| jobInstructions | Labeling instructions of the job. | LabelingJobInstructions |
| jobType | [Required] Specifies the type of job. | 'AutoML''Command''Labeling''Pipeline''Spark''Sweep' (required) |
| labelCategories | Label categories of the job. | LabelingJobLabelCategories |
| labelingJobMediaProperties | Media type specific properties in the job. | LabelingJobMediaProperties |
| mlAssistConfiguration | Configuration of MLAssist feature in the job. | MLAssistConfiguration |
| notificationSetting | Notification setting for the job | NotificationSetting |
| properties | The asset property dictionary. | ResourceBaseProperties |
| secretsConfiguration | Configuration for secrets to be made available during runtime. | JobBaseSecretsConfiguration |
| services | List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject. | JobBaseServices |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### LabelingDataConfiguration

| Name | Description | Value |
|-|-|-|
| dataId | Resource Id of the data asset to perform labeling. | string |
| incrementalDataRefresh | Indicates whether to enable incremental data refresh. | 'Disabled''Enabled' |


### IdentityConfiguration

| Name | Description | Value |
|-|-|-|
| identityType | Set the object type | AMLTokenManagedUserIdentity(required) |


### AmlToken

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'AMLToken' (required) |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'Managed' (required) |
| clientId | Specifies a user-assigned identity by client ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| objectId | Specifies a user-assigned identity by object ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceId | Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field. | string |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'UserIdentity' (required) |


### LabelingJobInstructions

| Name | Description | Value |
|-|-|-|
| uri | The link to a page with detailed labeling instructions for labelers. | string |


### LabelingJobLabelCategories

| Name | Description | Value |
|-|-|-|
| {customized property} |  | LabelCategory |
| {customized property} |  | LabelCategory |


### LabelCategory

| Name | Description | Value |
|-|-|-|
| classes | Dictionary of label classes in this category. | LabelCategoryClasses |
| displayName | Display name of the label category. | string |
| multiSelect | Indicates whether it is allowed to select multiple classes in this category. | 'Disabled''Enabled' |


### LabelCategoryClasses

| Name | Description | Value |
|-|-|-|
| {customized property} |  | LabelClass |


### LabelClass

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the label class. | string |
| subclasses | Dictionary of subclasses of the label class. | LabelClassSubclasses |


### LabelClassSubclasses

| Name | Description | Value |
|-|-|-|
| {customized property} |  | LabelClass |


### LabelingJobMediaProperties

| Name | Description | Value |
|-|-|-|
| mediaType | Set the object type | ImageText(required) |


### LabelingJobImageProperties

| Name | Description | Value |
|-|-|-|
| mediaType | [Required] Media type of the job. | 'Image' (required) |
| annotationType | Annotation type of image labeling job. | 'BoundingBox''Classification''InstanceSegmentation' |


### LabelingJobTextProperties

| Name | Description | Value |
|-|-|-|
| mediaType | [Required] Media type of the job. | 'Text' (required) |
| annotationType | Annotation type of text labeling job. | 'Classification''NamedEntityRecognition' |


### MLAssistConfiguration

| Name | Description | Value |
|-|-|-|
| mlAssist | Set the object type | DisabledEnabled(required) |


### MLAssistConfigurationDisabled

| Name | Description | Value |
|-|-|-|
| mlAssist | [Required] Indicates whether MLAssist feature is enabled. | 'Disabled' (required) |


### MLAssistConfigurationEnabled

| Name | Description | Value |
|-|-|-|
| mlAssist | [Required] Indicates whether MLAssist feature is enabled. | 'Enabled' (required) |
| inferencingComputeBinding | [Required] AML compute binding used in inferencing. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| trainingComputeBinding | [Required] AML compute binding used in training. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### NotificationSetting

| Name | Description | Value |
|-|-|-|
| emailOn | Send email notification to user on specified notification type | String array containing any of:'JobCancelled''JobCompleted''JobFailed' |
| emails | This is the email recipient list which has a limitation of 499 characters in total concat with comma separator | string[] |
| webhooks | Send webhook callback to a service. Key is a user-provided name for the webhook. | NotificationSettingWebhooks |


### NotificationSettingWebhooks

| Name | Description | Value |
|-|-|-|
| {customized property} |  | Webhook |


### Webhook

| Name | Description | Value |
|-|-|-|
| eventType | Send callback on a specified notification event | string |
| webhookType | Set the object type | AzureDevOps(required) |


### AzureDevOpsWebhook

| Name | Description | Value |
|-|-|-|
| webhookType | [Required] Specifies the type of service to send a callback | 'AzureDevOps' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### JobBaseSecretsConfiguration

| Name | Description | Value |
|-|-|-|
| {customized property} |  | SecretConfiguration |
| {customized property} |  | SecretConfiguration |


### SecretConfiguration

| Name | Description | Value |
|-|-|-|
| uri | Secret Uri.Sample Uri :https://myvault.vault.azure.net/secrets/mysecretname/secretversion | string |
| workspaceSecretName | Name of secret in workspace key vault. | string |


### JobBaseServices

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobService |
| {customized property} |  | JobService |


### JobService

| Name | Description | Value |
|-|-|-|
| endpoint | Url for endpoint. | string |
| jobServiceType | Endpoint type. | string |
| nodes | Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node. | Nodes |
| port | Port for endpoint set by user. | int |
| properties | Additional properties to set on the endpoint. | JobServiceProperties |


### Nodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | Set the object type | All(required) |


### AllNodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | [Required] Type of the Nodes value | 'All' (required) |


### JobServiceProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


