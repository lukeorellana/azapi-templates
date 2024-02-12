```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/migrationConfigurations@2022-10-01-preview"
  name = "$default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      postMigrationName = "string"
      targetNamespace = "string"
    }
  })
}

```

### namespaces/migrationConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | '$default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties required to the Create Migration Configuration | MigrationConfigPropertiesProperties |


### MigrationConfigPropertiesProperties

| Name | Description | Value |
|-|-|-|
| postMigrationName | Name to access Standard Namespace after migration | string (required) |
| targetNamespace | Existing premium Namespace ARM Id name which has no entities, will be used for migration | string (required) |


