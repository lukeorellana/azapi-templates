```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/fluxConfigurations@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureBlob = {
        accountKey = "string"
        containerName = "string"
        localAuthRef = "string"
        managedIdentity = {
          clientId = "string"
        }
        sasToken = "string"
        servicePrincipal = {
          clientCertificate = "string"
          clientCertificatePassword = "string"
          clientCertificateSendChain = bool
          clientId = "string"
          clientSecret = "string"
          tenantId = "string"
        }
        syncIntervalInSeconds = int
        timeoutInSeconds = int
        url = "string"
      }
      bucket = {
        accessKey = "string"
        bucketName = "string"
        insecure = bool
        localAuthRef = "string"
        syncIntervalInSeconds = int
        timeoutInSeconds = int
        url = "string"
      }
      configurationProtectedSettings = {}
      gitRepository = {
        httpsCACert = "string"
        httpsUser = "string"
        localAuthRef = "string"
        repositoryRef = {
          branch = "string"
          commit = "string"
          semver = "string"
          tag = "string"
        }
        sshKnownHosts = "string"
        syncIntervalInSeconds = int
        timeoutInSeconds = int
        url = "string"
      }
      kustomizations = {}
      namespace = "string"
      scope = "string"
      sourceKind = "string"
      suspend = bool
    }
  })
}

```

### fluxConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties to create a Flux Configuration resource | FluxConfigurationProperties |


### FluxConfigurationProperties

| Name | Description | Value |
|-|-|-|
| azureBlob | Parameters to reconcile to the AzureBlob source kind type. | AzureBlobDefinition |
| bucket | Parameters to reconcile to the Bucket source kind type. | BucketDefinition |
| configurationProtectedSettings | Key-value pairs of protected configuration settings for the configuration | object |
| gitRepository | Parameters to reconcile to the GitRepository source kind type. | GitRepositoryDefinition |
| kustomizations | Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster. | object |
| namespace | The namespace to which this configuration is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only. | string |
| scope | Scope at which the operator will be installed. | 'cluster''namespace' |
| sourceKind | Source Kind to pull the configuration data from. | 'AzureBlob''Bucket''GitRepository' |
| suspend | Whether this configuration should suspend its reconciliation of its kustomizations and sources. | bool |


### AzureBlobDefinition

| Name | Description | Value |
|-|-|-|
| accountKey | The account key (shared key) to access the storage account | string |
| containerName | The Azure Blob container name to sync from the url endpoint for the flux configuration. | string |
| localAuthRef | Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets. | string |
| managedIdentity | Parameters to authenticate using a Managed Identity. | ManagedIdentityDefinition |
| sasToken | The Shared Access token to access the storage container | string |
| servicePrincipal | Parameters to authenticate using Service Principal. | ServicePrincipalDefinition |
| syncIntervalInSeconds | The interval at which to re-reconcile the cluster Azure Blob source with the remote. | int |
| timeoutInSeconds | The maximum time to attempt to reconcile the cluster Azure Blob source with the remote. | int |
| url | The URL to sync for the flux configuration Azure Blob storage account. | string |


### ManagedIdentityDefinition

| Name | Description | Value |
|-|-|-|
| clientId | The client Id for authenticating a Managed Identity. | string |


### ServicePrincipalDefinition

| Name | Description | Value |
|-|-|-|
| clientCertificate | Base64-encoded certificate used to authenticate a Service Principal | string |
| clientCertificatePassword | The password for the certificate used to authenticate a Service Principal | string |
| clientCertificateSendChain | Specifies whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the Client Certificate | bool |
| clientId | The client Id for authenticating a Service Principal. | string |
| clientSecret | The client secret for authenticating a Service Principal | string |
| tenantId | The tenant Id for authenticating a Service Principal | string |


### BucketDefinition

| Name | Description | Value |
|-|-|-|
| accessKey | Plaintext access key used to securely access the S3 bucket | string |
| bucketName | The bucket name to sync from the url endpoint for the flux configuration. | string |
| insecure | Specify whether to use insecure communication when puling data from the S3 bucket. | bool |
| localAuthRef | Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets. | string |
| syncIntervalInSeconds | The interval at which to re-reconcile the cluster bucket source with the remote. | int |
| timeoutInSeconds | The maximum time to attempt to reconcile the cluster bucket source with the remote. | int |
| url | The URL to sync for the flux configuration S3 bucket. | string |


### GitRepositoryDefinition

| Name | Description | Value |
|-|-|-|
| httpsCACert | Base64-encoded HTTPS certificate authority contents used to access git private git repositories over HTTPS | string |
| httpsUser | Plaintext HTTPS username used to access private git repositories over HTTPS | string |
| localAuthRef | Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets. | string |
| repositoryRef | The source reference for the GitRepository object. | RepositoryRefDefinition |
| sshKnownHosts | Base64-encoded known_hosts value containing public SSH keys required to access private git repositories over SSH | string |
| syncIntervalInSeconds | The interval at which to re-reconcile the cluster git repository source with the remote. | int |
| timeoutInSeconds | The maximum time to attempt to reconcile the cluster git repository source with the remote. | int |
| url | The URL to sync for the flux configuration git repository. | string |


### RepositoryRefDefinition

| Name | Description | Value |
|-|-|-|
| branch | The git repository branch name to checkout. | string |
| commit | The commit SHA to checkout. This value must be combined with the branch name to be valid. This takes precedence over semver. | string |
| semver | The semver range used to match against git repository tags. This takes precedence over tag. | string |
| tag | The git repository tag name to checkout. This takes precedence over branch. | string |


