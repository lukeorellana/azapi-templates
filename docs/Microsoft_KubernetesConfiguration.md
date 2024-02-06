## Microsoft.KubernetesConfiguration/extensions@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/extensions@2022-11-01"
  name = "string"
  parent_id = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      aksAssignedIdentity = {
        type = "string"
      }
      autoUpgradeMinorVersion = bool
      configurationProtectedSettings = {}
      configurationSettings = {}
      extensionType = "string"
      releaseTrain = "string"
      scope = {
        cluster = {
          releaseNamespace = "string"
        }
        namespace = {
          targetNamespace = "string"
        }
      }
      statuses = [
        {
          code = "string"
          displayStatus = "string"
          level = "string"
          message = "string"
          time = "string"
        }
      ]
      version = "string"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### extensions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| identity | Identity of the Extension resource | Identity |
| plan | The plan information. | Plan |
| properties | Properties of an Extension resource | ExtensionProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### Plan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### ExtensionProperties

| Name | Description | Value |
|-|-|-|
| aksAssignedIdentity | Identity of the Extension resource in an AKS cluster | ExtensionPropertiesAksAssignedIdentity |
| autoUpgradeMinorVersion | Flag to note if this extension participates in auto upgrade of minor version, or not. | bool |
| configurationProtectedSettings | Configuration settings that are sensitive, as name-value pairs for configuring this extension. | object |
| configurationSettings | Configuration settings, as name-value pairs for configuring this extension. | object |
| extensionType | Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher. | string |
| releaseTrain | ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'. | string |
| scope | Scope at which the extension is installed. | Scope |
| statuses | Status from this extension. | ExtensionStatus[] |
| version | User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'. | string |


### ExtensionPropertiesAksAssignedIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned''UserAssigned' |


### Scope

| Name | Description | Value |
|-|-|-|
| cluster | Specifies that the scope of the extension is Cluster | ScopeCluster |
| namespace | Specifies that the scope of the extension is Namespace | ScopeNamespace |


### ScopeCluster

| Name | Description | Value |
|-|-|-|
| releaseNamespace | Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created | string |


### ScopeNamespace

| Name | Description | Value |
|-|-|-|
| targetNamespace | Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created | string |


### ExtensionStatus

| Name | Description | Value |
|-|-|-|
| code | Status code provided by the Extension | string |
| displayStatus | Short description of status of the extension. | string |
| level | Level of the status. | 'Error''Information''Warning' |
| message | Detailed message of the status from the Extension. | string |
| time | DateLiteral (per ISO8601) noting the time of installation status. | string |
## Microsoft.KubernetesConfiguration/fluxConfigurations@2022-11-01

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
## Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### privateLinkScopes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Azure Arc PrivateLinkScope resource. | KubernetesConfigurationPrivateLinkScopeProperties |


### KubernetesConfigurationPrivateLinkScopeProperties

| Name | Description | Value |
|-|-|-|
| clusterResourceId | Managed Cluster ARM ID for the private link scope  (Required) | string (required) |
| publicNetworkAccess | Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints. | 'Disabled''Enabled' |
## Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections@2022-04-02-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections@2022-04-02-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### privateLinkScopes/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkScopes |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      configurationProtectedSettings = {}
      enableHelmOperator = bool
      helmOperatorProperties = {
        chartValues = "string"
        chartVersion = "string"
      }
      operatorInstanceName = "string"
      operatorNamespace = "string"
      operatorParams = "string"
      operatorScope = "string"
      operatorType = "Flux"
      repositoryUrl = "string"
      sshKnownHostsContents = "string"
    }
  })
}

```

### sourceControlConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties to create a Source Control Configuration resource | SourceControlConfigurationProperties |


### SourceControlConfigurationProperties

| Name | Description | Value |
|-|-|-|
| configurationProtectedSettings | Name-value pairs of protected configuration settings for the configuration | object |
| enableHelmOperator | Option to enable Helm Operator for this git configuration. | bool |
| helmOperatorProperties | Properties for Helm operator. | HelmOperatorProperties |
| operatorInstanceName | Instance name of the operator - identifying the specific configuration. | string |
| operatorNamespace | The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only. | string |
| operatorParams | Any Parameters for the Operator instance in string format. | string |
| operatorScope | Scope at which the operator will be installed. | 'cluster''namespace' |
| operatorType | Type of the operator | 'Flux' |
| repositoryUrl | Url of the SourceControl Repository. | string |
| sshKnownHostsContents | Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances | string |


### HelmOperatorProperties

| Name | Description | Value |
|-|-|-|
| chartValues | Values override for the operator Helm chart. | string |
| chartVersion | Version of the operator Helm chart. | string |
