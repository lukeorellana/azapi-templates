```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/datastores@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        credentialsType = "string"
        // For remaining properties, see DatastoreCredentials objects
      }
      description = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      datastoreType = "string"
      // For remaining properties, see DatastoreProperties objects
    }
  })
}

```

### workspaces/datastores

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: Maximum 255 characters for datastore nameValid characters:Datastore name consists only of lowercase letters, digits, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | DatastoreProperties(required) |


### DatastoreProperties

| Name | Description | Value |
|-|-|-|
| credentials | [Required] Account credentials. | DatastoreCredentials(required) |
| description | The asset description text. | string |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| datastoreType | Set the object type | AzureBlobAzureDataLakeGen1AzureDataLakeGen2AzureFile(required) |


### DatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | Set the object type | AccountKeyCertificateNoneSasServicePrincipal(required) |


### AccountKeyDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'AccountKey' (required) |
| secrets | [Required] Storage account secrets. | AccountKeyDatastoreSecrets(required) |


### AccountKeyDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| key | Storage account key. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### CertificateDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'Certificate' (required) |
| authorityUrl | Authority URL used for authentication. | string |
| clientId | [Required] Service principal client ID. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceUrl | Resource the service principal has access to. | string |
| secrets | [Required] Service principal secrets. | CertificateDatastoreSecrets(required) |
| tenantId | [Required] ID of the tenant to which the service principal belongs. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| thumbprint | [Required] Thumbprint of the certificate used for authentication. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### CertificateDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| certificate | Service principal certificate. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### NoneDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'None' (required) |


### SasDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'Sas' (required) |
| secrets | [Required] Storage container secrets. | SasDatastoreSecrets(required) |


### SasDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| sasToken | Storage container SAS token. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### ServicePrincipalDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'ServicePrincipal' (required) |
| authorityUrl | Authority URL used for authentication. | string |
| clientId | [Required] Service principal client ID. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceUrl | Resource the service principal has access to. | string |
| secrets | [Required] Service principal secrets. | ServicePrincipalDatastoreSecrets(required) |
| tenantId | [Required] ID of the tenant to which the service principal belongs. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


### ServicePrincipalDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| clientSecret | Service principal secret. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### AzureBlobDatastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureBlob' (required) |
| accountName | Storage account name. | string |
| containerName | Storage account container name. | string |
| endpoint | Azure cloud endpoint for the storage account. | string |
| protocol | Protocol used to communicate with the storage account. | string |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| subscriptionId | Azure Subscription Id | string |


### AzureDataLakeGen1Datastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureDataLakeGen1' (required) |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| storeName | [Required] Azure Data Lake store name. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| subscriptionId | Azure Subscription Id | string |


### AzureDataLakeGen2Datastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureDataLakeGen2' (required) |
| accountName | [Required] Storage account name. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| endpoint | Azure cloud endpoint for the storage account. | string |
| filesystem | [Required] The name of the Data Lake Gen2 filesystem. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| protocol | Protocol used to communicate with the storage account. | string |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| subscriptionId | Azure Subscription Id | string |


### AzureFileDatastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureFile' (required) |
| accountName | [Required] Storage account name. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| endpoint | Azure cloud endpoint for the storage account. | string |
| fileShareName | [Required] The name of the Azure file share that the datastore points to. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| protocol | Protocol used to communicate with the storage account. | string |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| subscriptionId | Azure Subscription Id | string |


