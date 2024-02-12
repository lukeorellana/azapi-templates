```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/connectors@2020-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationDetails = {
        grantedPermissions = [
          "string"
        ]
        authenticationType = "string"
        // For remaining properties, see AuthenticationDetailsProperties objects
      }
      hybridComputeSettings = {
        autoProvision = "string"
        proxyServer = {
          ip = "string"
          port = "string"
        }
        region = "string"
        resourceGroupName = "string"
        servicePrincipal = {
          applicationId = "string"
          secret = "string"
        }
      }
    }
  })
}

```

### connectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Connector setting data | ConnectorSettingProperties |


### ConnectorSettingProperties

| Name | Description | Value |
|-|-|-|
| authenticationDetails | Settings for authentication management, these settings are relevant only for the cloud connector. | AuthenticationDetailsProperties |
| hybridComputeSettings | Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute). | HybridComputeSettingsProperties |


### AuthenticationDetailsProperties

| Name | Description | Value |
|-|-|-|
| grantedPermissions | The permissions detected in the cloud account. | String array containing any of:'AWS::AWSSecurityHubReadOnlyAccess''AWS::AmazonSSMAutomationRole''AWS::SecurityAudit''GCP::Security Center Admin Viewer' |
| authenticationType | Set the object type | awsAssumeRoleawsCredsgcpCredentials(required) |


### AwAssumeRoleAuthenticationDetailsProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials. | 'awsAssumeRole' (required) |
| awsAssumeRoleArn | Assumed role ID is an identifier that you can use to create temporary security credentials. | string (required) |
| awsExternalId | A unique identifier that is required when you assume a role in another account. | string (required) |


### AwsCredsAuthenticationDetailsProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials. | 'awsCreds' (required) |
| awsAccessKeyId | Public key element of the AWS credential object (write only) | string (required) |
| awsSecretAccessKey | Secret key element of the AWS credential object (write only) | string (required) |


### GcpCredentialsDetailsProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials. | 'gcpCredentials' (required) |
| authProviderX509CertUrl | Auth provider x509 certificate URL field of the API key (write only) | string (required) |
| authUri | Auth URI field of the API key (write only) | string (required) |
| clientEmail | Client email field of the API key (write only) | string (required) |
| clientId | Client ID field of the API key (write only) | string (required) |
| clientX509CertUrl | Client x509 certificate URL field of the API key (write only) | string (required) |
| organizationId | The organization ID of the GCP cloud account | string (required) |
| privateKey | Private key field of the API key (write only) | string (required) |
| privateKeyId | Private key ID field of the API key (write only) | string (required) |
| projectId | Project ID field of the API key (write only) | string (required) |
| tokenUri | Token URI field of the API key (write only) | string (required) |
| type | Type field of the API key (write only) | string (required) |


### HybridComputeSettingsProperties

| Name | Description | Value |
|-|-|-|
| autoProvision | Whether or not to automatically install Azure Arc (hybrid compute) agents on machines | 'Off''On' (required) |
| proxyServer | For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use. | ProxyServerProperties |
| region | The location where the metadata of machines will be stored | string |
| resourceGroupName | The name of the resource group where Arc (Hybrid Compute) connectors are connected. | string |
| servicePrincipal | An object to access resources that are secured by an Azure AD tenant. | ServicePrincipalProperties |


### ProxyServerProperties

| Name | Description | Value |
|-|-|-|
| ip | Proxy server IP | string |
| port | Proxy server port | string |


### ServicePrincipalProperties

| Name | Description | Value |
|-|-|-|
| applicationId | Application ID of service principal. | string |
| secret | A secret string that the application uses to prove its identity, also can be referred to as application password (write only). | string |


