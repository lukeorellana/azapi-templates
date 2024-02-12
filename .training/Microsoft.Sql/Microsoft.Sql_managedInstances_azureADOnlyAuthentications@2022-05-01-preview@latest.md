```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

### managedInstances/azureADOnlyAuthentications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceAzureADOnlyAuthProperties |


### ManagedInstanceAzureADOnlyAuthProperties

| Name | Description | Value |
|-|-|-|
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool (required) |


