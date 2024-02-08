```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asyncExecution = bool
      errorBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      errorBlobUri = "string"
      outputBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      outputBlobUri = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      protectedParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      runAsPassword = "string"
      runAsUser = "string"
      source = {
        commandId = "string"
        script = "string"
        scriptUri = "string"
        scriptUriManagedIdentity = {
          clientId = "string"
          objectId = "string"
        }
      }
      timeoutInSeconds = int
      treatFailureAsDeploymentFailure = bool
    }
  })
}

```

### virtualMachineScaleSets/virtualMachines/runCommands

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes the properties of a Virtual Machine run command. | VirtualMachineRunCommandProperties |


### VirtualMachineRunCommandProperties

| Name | Description | Value |
|-|-|-|
| asyncExecution | Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete. | bool |
| errorBlobManagedIdentity | User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged | RunCommandManagedIdentity |
| errorBlobUri | Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter. | string |
| outputBlobManagedIdentity | User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged | RunCommandManagedIdentity |
| outputBlobUri | Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. | string |
| parameters | The parameters used by the script. | RunCommandInputParameter[] |
| protectedParameters | The parameters used by the script. | RunCommandInputParameter[] |
| runAsPassword | Specifies the user account password on the VM when executing the run command. | string |
| runAsUser | Specifies the user account on the VM when executing the run command. | string |
| source | The source of the run command script. | VirtualMachineRunCommandScriptSource |
| timeoutInSeconds | The timeout in seconds to execute the run command. | int |
| treatFailureAsDeploymentFailure | Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error:https://aka.ms/runcommandmanaged#get-execution-status-and-results | bool |


### RunCommandManagedIdentity

| Name | Description | Value |
|-|-|-|
| clientId | Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided. | string |
| objectId | Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided. | string |


### RunCommandInputParameter

| Name | Description | Value |
|-|-|-|
| name | The run command parameter name. | string (required) |
| value | The run command parameter value. | string (required) |


### VirtualMachineRunCommandScriptSource

| Name | Description | Value |
|-|-|-|
| commandId | Specifies a commandId of predefined built-in script. | string |
| script | Specifies the script content to be executed on the VM. | string |
| scriptUri | Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI. | string |
| scriptUriManagedIdentity | User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged. | RunCommandManagedIdentity |


