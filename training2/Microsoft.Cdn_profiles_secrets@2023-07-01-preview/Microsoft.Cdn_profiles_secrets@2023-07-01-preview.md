```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/secrets@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        type = "string"
        // For remaining properties, see SecretParameters objects
      }
    }
  })
}

```

### profiles/secrets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the Secret to create. | SecretProperties |


### SecretProperties

| Name | Description | Value |
|-|-|-|
| parameters | object which contains secret parameters | SecretParameters |


### SecretParameters

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureFirstPartyManagedCertificateCustomerCertificateManagedCertificateUrlSigningKey(required) |


### AzureFirstPartyManagedCertificateParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'AzureFirstPartyManagedCertificate' (required) |
| subjectAlternativeNames | The list of SANs. | string[] |


### CustomerCertificateParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'CustomerCertificate' (required) |
| secretSource | Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{certificateName} | ResourceReference(required) |
| secretVersion | Version of the secret to be used | string |
| subjectAlternativeNames | The list of SANs. | string[] |
| useLatestVersion | Whether to use the latest version for the certificate | bool |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ManagedCertificateParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'ManagedCertificate' (required) |


### UrlSigningKeyParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the secret resource. | 'UrlSigningKey' (required) |
| keyId | Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash. | string (required) |
| secretSource | Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName} | ResourceReference(required) |
| secretVersion | Version of the secret to be used | string |


