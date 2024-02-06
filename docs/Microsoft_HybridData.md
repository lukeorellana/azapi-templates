## Microsoft.HybridData/dataManagers@2019-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers@2019-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      name = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

### dataManagers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, EastUS, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical georegion is specified on update the request will succeed. | string (required) |
| tags | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource(across resource groups). | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku type. | Sku |
| etag | Etag of the Resource. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name. Required for data manager creation, optional for update. | string |
| tier | The sku tier. This is based on the SKU name. | string |
## Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01"
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
      dataSinkId = "string"
      dataSourceId = "string"
      lastModifiedTime = "string"
      runLocation = "string"
      schedules = [
        {
          name = "string"
          policyList = [
            "string"
          ]
        }
      ]
      state = "string"
      userConfirmation = "string"
    }
  })
}

```

### dataManagers/dataServices/jobDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: dataServices |
| properties | JobDefinition properties. | JobDefinitionProperties(required) |


### JobDefinitionProperties

| Name | Description | Value |
|-|-|-|
| customerSecrets | List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. | CustomerSecret[] |
| dataServiceInput | A generic json used differently by each data service type. | For Bicep, you can use theany()function. |
| dataSinkId | Data Sink Id associated to the job definition. | string (required) |
| dataSourceId | Data Source Id associated to the job definition. | string (required) |
| lastModifiedTime | Last modified time of the job definition. | string |
| runLocation | This is the preferred geo location for the job to run. | 'australiaeast''australiasoutheast''brazilsouth''canadacentral''canadaeast''centralindia''centralus''eastasia''eastus''eastus2''japaneast''japanwest''koreacentral''koreasouth''none''northcentralus''northeurope''southcentralus''southeastasia''southindia''uksouth''ukwest''westcentralus''westeurope''westindia''westus''westus2' |
| schedules | Schedule for running the job definition | Schedule[] |
| state | State of the job definition. | 'Disabled''Enabled''Supported' (required) |
| userConfirmation | Enum to detect if user confirmation is required. If not passed will default to NotRequired. | 'NotRequired''Required' |


### CustomerSecret

| Name | Description | Value |
|-|-|-|
| algorithm | The encryption algorithm used to encrypt data. | 'None''PlainText''RSA1_5''RSA_OAEP' (required) |
| keyIdentifier | The identifier to the data service input object which this secret corresponds to. | string (required) |
| keyValue | It contains the encrypted customer secret. | string (required) |


### Schedule

| Name | Description | Value |
|-|-|-|
| name | Name of the schedule. | string |
| policyList | A list of repetition intervals in ISO 8601 format. | string[] |
## Microsoft.HybridData/dataManagers/dataStores@2019-06-01

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
