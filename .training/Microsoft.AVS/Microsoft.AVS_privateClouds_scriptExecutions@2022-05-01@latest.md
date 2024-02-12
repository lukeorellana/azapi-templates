```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      failureReason = "string"
      hiddenParameters = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ScriptExecutionParameter objects
        }
      ]
      namedOutputs = {}
      output = [
        "string"
      ]
      parameters = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ScriptExecutionParameter objects
        }
      ]
      retention = "string"
      scriptCmdletId = "string"
      timeout = "string"
    }
  })
}

```

### privateClouds/scriptExecutions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a script execution resource | ScriptExecutionProperties |


### ScriptExecutionProperties

| Name | Description | Value |
|-|-|-|
| failureReason | Error message if the script was able to run, but if the script itself had errors or powershell threw an exception | string |
| hiddenParameters | Parameters that will be hidden/not visible to ARM, such as passwords and credentials | ScriptExecutionParameter[] |
| namedOutputs | User-defined dictionary. | object |
| output | Standard output stream from the powershell execution | string[] |
| parameters | Parameters the script will accept | ScriptExecutionParameter[] |
| retention | Time to live for the resource. If not provided, will be available for 60 days | string |
| scriptCmdletId | A reference to the script cmdlet resource if user is running a AVS script | string |
| timeout | Time limit for execution | string (required) |


### ScriptExecutionParameter

| Name | Description | Value |
|-|-|-|
| name | The parameter name | string (required) |
| type | Set the object type | CredentialSecureValueValue(required) |


### PSCredentialExecutionParameter

| Name | Description | Value |
|-|-|-|
| type | The type of execution parameter | 'Credential' (required) |
| password | password for login | string |
| username | username for login | string |


### ScriptSecureStringExecutionParameter

| Name | Description | Value |
|-|-|-|
| type | The type of execution parameter | 'SecureValue' (required) |
| secureValue | A secure value for the passed parameter, not to be stored in logs | string |


### ScriptStringExecutionParameter

| Name | Description | Value |
|-|-|-|
| type | The type of execution parameter | 'Value' (required) |
| value | The value for the passed parameter | string |


