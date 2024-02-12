```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceLinker/dryruns@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        actionName = "string"
        // For remaining properties, see DryrunParameters objects
      }
    }
  })
}

```

### dryruns

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the dryrun job. | DryrunProperties |


### DryrunProperties

| Name | Description | Value |
|-|-|-|
| parameters | The parameters of the dryrun | DryrunParameters |


### DryrunParameters

| Name | Description | Value |
|-|-|-|
| actionName | Set the object type | createOrUpdate(required) |


### CreateOrUpdateDryrunParameters

| Name | Description | Value |
|-|-|-|
| actionName | The name of action for you dryrun job. | 'createOrUpdate' (required) |
| authInfo | The authentication type. | AuthInfoBase |
| clientType | The application client type | 'django''dotnet''go''java''kafka-springBoot''nodejs''none''php''python''ruby''springBoot' |
| configurationInfo | The connection information consumed by applications, including secrets, connection strings. | ConfigurationInfo |
| publicNetworkSolution | The network solution. | PublicNetworkSolution |
| scope | connection scope in source service. | string |
| secretStore | An option to store secret value in secure place | SecretStore |
| targetService | The target service properties | TargetServiceBase |
| vNetSolution | The VNet solution. | VNetSolution |


### AuthInfoBase

| Name | Description | Value |
|-|-|-|
| authType | Set the object type | accessKeysecretservicePrincipalCertificateservicePrincipalSecretsystemAssignedIdentityuserAccountuserAssignedIdentity(required) |


### AccessKeyInfoBase

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'accessKey' (required) |
| permissions | Permissions of the accessKey.ReadandWriteare for Azure Cosmos DB and Azure App Configuration,Listen,SendandManageare for Azure Event Hub and Azure Service Bus. | String array containing any of:'Listen''Manage''Read''Send''Write' |


### SecretAuthInfo

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'secret' (required) |
| name | Username or account name for secret auth. | string |
| secretInfo | Password or key vault secret for secret auth. | SecretInfoBase |


### SecretInfoBase

| Name | Description | Value |
|-|-|-|
| secretType | Set the object type | keyVaultSecretReferencekeyVaultSecretUrirawValue(required) |


### KeyVaultSecretReferenceSecretInfo

| Name | Description | Value |
|-|-|-|
| secretType | The secret type. | 'keyVaultSecretReference' (required) |
| name | Name of the Key Vault secret. | string |
| version | Version of the Key Vault secret. | string |


### KeyVaultSecretUriSecretInfo

| Name | Description | Value |
|-|-|-|
| secretType | The secret type. | 'keyVaultSecretUri' (required) |
| value | URI to the keyvault secret | string |


### ValueSecretInfo

| Name | Description | Value |
|-|-|-|
| secretType | The secret type. | 'rawValue' (required) |
| value | The actual value of the secret. | string |


### ServicePrincipalCertificateAuthInfo

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'servicePrincipalCertificate' (required) |
| certificate | ServicePrincipal certificate for servicePrincipal auth. | string (required) |
| clientId | Application clientId for servicePrincipal auth. | string (required) |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |
| principalId | Principal Id for servicePrincipal auth. | string (required) |
| roles | Optional, this value specifies the Azure roles to be assigned. Automatically | string[] |


### ServicePrincipalSecretAuthInfo

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'servicePrincipalSecret' (required) |
| clientId | ServicePrincipal application clientId for servicePrincipal auth. | string (required) |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |
| principalId | Principal Id for servicePrincipal auth. | string (required) |
| roles | Optional, this value specifies the Azure roles to be assigned. Automatically | string[] |
| secret | Secret for servicePrincipal auth. | string (required) |
| userName | Username created in the database which is mapped to a user in AAD. | string |


### SystemAssignedIdentityAuthInfo

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'systemAssignedIdentity' (required) |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |
| roles | Optional, this value specifies the Azure role to be assigned | string[] |
| userName | Username created in the database which is mapped to a user in AAD. | string |


### UserAccountAuthInfo

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'userAccount' (required) |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |
| principalId | Principal Id for user account. | string |
| roles | Optional, this value specifies the Azure roles to be assigned. Automatically | string[] |
| userName | Username created in the database which is mapped to a user in AAD. | string |


### UserAssignedIdentityAuthInfo

| Name | Description | Value |
|-|-|-|
| authType | The authentication type. | 'userAssignedIdentity' (required) |
| clientId | Client Id for userAssignedIdentity. | string |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |
| roles | Optional, this value specifies the Azure role to be assigned | string[] |
| subscriptionId | Subscription id for userAssignedIdentity. | string |
| userName | Username created in the database which is mapped to a user in AAD. | string |


### ConfigurationInfo

| Name | Description | Value |
|-|-|-|
| action | Optional, indicate whether to apply configurations on source application. If enable, generate configurations and applied to the source application. Default is enable. If optOut, no configuration change will be made on source. | 'Internal''enable''optOut' |
| additionalConfigurations | A dictionary of additional configurations to be added. Service will auto generate a set of basic configurations and this property is to full fill more customized configurations | object |
| customizedKeys | Optional. A dictionary of default key name and customized key name mapping. If not specified, default key name will be used for generate configurations | object |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |


### PublicNetworkSolution

| Name | Description | Value |
|-|-|-|
| action | Optional. Indicates public network solution. If enable, enable public network access of target service with best try. Default is enable. If optOut, opt out public network access configuration. | 'Internal''enable''optOut' |
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation(such as firewall rules) when Linker is updating or deleting | 'Default''ForcedCleanup' |
| firewallRules | Describe firewall rules of target service to make sure source application could connect to the target. | FirewallRules |


### FirewallRules

| Name | Description | Value |
|-|-|-|
| azureServices | Allow Azure services to access the target service if true. | 'false''true' |
| callerClientIP | Allow caller client IP to access the target service if true. the property is used when connecting local application to target service. | 'false''true' |
| ipRanges | This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. | string[] |


### SecretStore

| Name | Description | Value |
|-|-|-|
| keyVaultId | The key vault id to store secret | string |
| keyVaultSecretName | The key vault secret name to store secret, only valid when storing one secret | string |


### TargetServiceBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureResourceConfluentBootstrapServerConfluentSchemaRegistrySelfHostedServer(required) |


### AzureResource

| Name | Description | Value |
|-|-|-|
| type | The target service type. | 'AzureResource' (required) |
| id | The Id of azure resource. | string |
| resourceProperties | The azure resource connection related properties. | AzureResourcePropertiesBase |


### AzureResourcePropertiesBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | KeyVault(required) |


### AzureKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| type | The azure resource type. | 'KeyVault' (required) |
| connectAsKubernetesCsiDriver | True if connect via Kubernetes CSI Driver. | bool |


### ConfluentBootstrapServer

| Name | Description | Value |
|-|-|-|
| type | The target service type. | 'ConfluentBootstrapServer' (required) |
| endpoint | The endpoint of service. | string |


### ConfluentSchemaRegistry

| Name | Description | Value |
|-|-|-|
| type | The target service type. | 'ConfluentSchemaRegistry' (required) |
| endpoint | The endpoint of service. | string |


### SelfHostedServer

| Name | Description | Value |
|-|-|-|
| type | The target service type. | 'SelfHostedServer' (required) |
| endpoint | The endpoint of service. | string |


### VNetSolution

| Name | Description | Value |
|-|-|-|
| deleteOrUpdateBehavior | Indicates whether to clean up previous operation when Linker is updating or deleting | 'Default''ForcedCleanup' |
| type | Type of VNet solution. | 'privateLink''serviceEndpoint' |


