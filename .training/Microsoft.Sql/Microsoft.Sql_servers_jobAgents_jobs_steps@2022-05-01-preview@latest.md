```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs/steps@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        source = "Inline"
        type = "TSql"
        value = "string"
      }
      credential = "string"
      executionOptions = {
        initialRetryIntervalSeconds = int
        maximumRetryIntervalSeconds = int
        retryAttempts = int
        retryIntervalBackoffMultiplier = int
        timeoutSeconds = int
      }
      output = {
        credential = "string"
        databaseName = "string"
        resourceGroupName = "string"
        schemaName = "string"
        serverName = "string"
        subscriptionId = "string"
        tableName = "string"
        type = "SqlDatabase"
      }
      stepId = int
      targetGroup = "string"
    }
  })
}

```

### servers/jobAgents/jobs/steps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobs |
| properties | Resource properties. | JobStepProperties |


### JobStepProperties

| Name | Description | Value |
|-|-|-|
| action | The action payload of the job step. | JobStepAction(required) |
| credential | The resource ID of the job credential that will be used to connect to the targets. | string (required) |
| executionOptions | Execution options for the job step. | JobStepExecutionOptions |
| output | Output destination properties of the job step. | JobStepOutput |
| stepId | The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified. | int |
| targetGroup | The resource ID of the target group that the job step will be executed on. | string (required) |


### JobStepAction

| Name | Description | Value |
|-|-|-|
| source | The source of the action to execute. | 'Inline' |
| type | Type of action being executed by the job step. | 'TSql' |
| value | The action value, for example the text of the T-SQL script to execute. | string (required) |


### JobStepExecutionOptions

| Name | Description | Value |
|-|-|-|
| initialRetryIntervalSeconds | Initial delay between retries for job step execution. | int |
| maximumRetryIntervalSeconds | The maximum amount of time to wait between retries for job step execution. | int |
| retryAttempts | Maximum number of times the job step will be reattempted if the first attempt fails. | int |
| retryIntervalBackoffMultiplier | The backoff multiplier for the time between retries. | int |
| timeoutSeconds | Execution timeout for the job step. | int |


### JobStepOutput

| Name | Description | Value |
|-|-|-|
| credential | The resource ID of the credential to use to connect to the output destination. | string (required) |
| databaseName | The output destination database. | string (required) |
| resourceGroupName | The output destination resource group. | string |
| schemaName | The output destination schema. | string |
| serverName | The output destination server name. | string (required) |
| subscriptionId | The output destination subscription id. | string |
| tableName | The output destination table. | string (required) |
| type | The output destination type. | 'SqlDatabase' |


