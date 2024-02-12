```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/namedValues@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      keyVault = {
        identityClientId = "string"
        secretIdentifier = "string"
      }
      secret = bool
      tags = [
        "string"
      ]
      value = "string"
    }
  })
}

```

### service/namedValues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | NamedValue entity contract properties for PUT operation. | NamedValueCreateContractPropertiesOrNamedValueContra... |


### NamedValueCreateContractPropertiesOrNamedValueContra...

| Name | Description | Value |
|-|-|-|
| displayName | Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters. | string (required) |
| keyVault | KeyVault location details of the namedValue. | KeyVaultContractCreatePropertiesOrKeyVaultContractPr... |
| secret | Determines whether the value is a secret and should be encrypted or not. Default value is false. | bool |
| tags | Optional tags that when provided can be used to filter the NamedValue list. | string[] |
| value | Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |


### KeyVaultContractCreatePropertiesOrKeyVaultContractPr...

| Name | Description | Value |
|-|-|-|
| identityClientId | Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret. | string |
| secretIdentifier | Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi | string |


