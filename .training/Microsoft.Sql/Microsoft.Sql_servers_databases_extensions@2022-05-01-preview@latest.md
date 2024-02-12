```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/extensions@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      authenticationType = "string"
      databaseEdition = "string"
      maxSizeBytes = "string"
      networkIsolation = {
        sqlServerResourceId = "string"
        storageAccountResourceId = "string"
      }
      operationMode = "string"
      serviceObjectiveName = "string"
      storageKey = "string"
      storageKeyType = "string"
      storageUri = "string"
    }
  })
}

```

### servers/databases/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseExtensionsProperties |


### DatabaseExtensionsProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | Administrator login name. | string |
| administratorLoginPassword | Administrator login password. | string |
| authenticationType | Authentication type: SQL authentication or AD password. | string |
| databaseEdition | Database edition for the newly created database in the case of an import operation. | string |
| maxSizeBytes | Database max size in bytes for the newly created database in the case of an import operation. | string |
| networkIsolation | Optional resource information to enable network isolation for request. | NetworkIsolationSettings |
| operationMode | Operation mode of the operation: Import, Export, or PolybaseImport. | 'Export''Import''PolybaseImport' (required) |
| serviceObjectiveName | Database service level objective for the newly created database in the case of an import operation. | string |
| storageKey | Storage key for the storage account. | string (required) |
| storageKeyType | Storage key type: StorageAccessKey or SharedAccessKey. | 'SharedAccessKey''StorageAccessKey' (required) |
| storageUri | Storage Uri for the storage account. | string (required) |


### NetworkIsolationSettings

| Name | Description | Value |
|-|-|-|
| sqlServerResourceId | The resource id for the SQL server which is the target of this request. If set, private endpoint connection will be created for the SQL server. Must match server which is target of the operation. | string |
| storageAccountResourceId | The resource id for the storage account used to store BACPAC file. If set, private endpoint connection will be created for the storage account. Must match storage account used for StorageUri parameter. | string |


