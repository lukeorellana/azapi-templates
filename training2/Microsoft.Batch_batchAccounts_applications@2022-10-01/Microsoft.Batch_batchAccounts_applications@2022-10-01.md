```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts/applications@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowUpdates = bool
      defaultVersion = "string"
      displayName = "string"
    }
  })
}

```

### batchAccounts/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchAccounts |
| properties | The properties associated with the Application. | ApplicationProperties |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| allowUpdates | A value indicating whether packages within the application may be overwritten using the same version string. | bool |
| defaultVersion | The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. | string |
| displayName | The display name for the application. | string |


