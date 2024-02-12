```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/azureADOnlyAuthentications@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

### workspaces/azureADOnlyAuthentications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | azureADOnlyAuthentication resource properties | AzureADOnlyAuthenticationProperties |


### AzureADOnlyAuthenticationProperties

| Name | Description | Value |
|-|-|-|
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool (required) |


