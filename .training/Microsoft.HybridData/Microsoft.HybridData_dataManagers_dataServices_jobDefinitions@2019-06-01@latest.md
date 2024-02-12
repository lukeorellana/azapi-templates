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


