```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers/dataStores@2019-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerSecrets = [
        {
          algorithm = "string"
          keyIdentifier = "string"
          keyValue = "string"
        }
      ]
      dataStoreTypeId = "string"
      repositoryId = "string"
      state = "string"
    }
  })
}

```

### dataManagers/dataStores

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataManagers |
| properties | DataStore properties. | DataStoreProperties(required) |


### DataStoreProperties

| Name | Description | Value |
|-|-|-|
| customerSecrets | List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. | CustomerSecret[] |
| dataStoreTypeId | The arm id of the data store type. | string (required) |
| extendedProperties | A generic json used differently by each data source type. | For Bicep, you can use theany()function. |
| repositoryId | Arm Id for the manager resource to which the data source is associated. This is optional. | string |
| state | State of the data source. | 'Disabled''Enabled''Supported' (required) |


### CustomerSecret

| Name | Description | Value |
|-|-|-|
| algorithm | The encryption algorithm used to encrypt data. | 'None''PlainText''RSA1_5''RSA_OAEP' (required) |
| keyIdentifier | The identifier to the data service input object which this secret corresponds to. | string (required) |
| keyValue | It contains the encrypted customer secret. | string (required) |


