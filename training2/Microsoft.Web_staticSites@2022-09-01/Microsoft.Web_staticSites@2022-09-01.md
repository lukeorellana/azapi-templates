```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      allowConfigFileUpdates = bool
      branch = "string"
      buildProperties = {
        apiBuildCommand = "string"
        apiLocation = "string"
        appArtifactLocation = "string"
        appBuildCommand = "string"
        appLocation = "string"
        githubActionSecretNameOverride = "string"
        outputLocation = "string"
        skipGithubActionWorkflowGeneration = bool
      }
      enterpriseGradeCdnStatus = "string"
      provider = "string"
      publicNetworkAccess = "string"
      repositoryToken = "string"
      repositoryUrl = "string"
      stagingEnvironmentPolicy = "string"
      templateProperties = {
        description = "string"
        isPrivate = bool
        owner = "string"
        repositoryName = "string"
        templateRepositoryUrl = "string"
      }
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

### staticSites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Description of a SKU for a scalable resource. | SkuDescription |
| kind | Kind of resource. | string |
| identity | Managed service identity. | ManagedServiceIdentity |
| properties | Core resource properties | StaticSite |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### StaticSite

| Name | Description | Value |
|-|-|-|
| allowConfigFileUpdates | falseif config file is locked for this static web app; otherwise,true. | bool |
| branch | The target branch in the repository. | string |
| buildProperties | Build properties to configure on the repository. | StaticSiteBuildProperties |
| enterpriseGradeCdnStatus | State indicating the status of the enterprise grade CDN serving traffic to the static web app. | 'Disabled''Disabling''Enabled''Enabling' |
| provider | The provider that submitted the last deployment to the primary environment of the static site. | string |
| publicNetworkAccess | State indicating whether public traffic are allowed or not for a static web app. Allowed Values: 'Enabled', 'Disabled' or an empty string. | string |
| repositoryToken | A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. | string |
| repositoryUrl | URL for the repository of the static site. | string |
| stagingEnvironmentPolicy | State indicating whether staging environments are allowed or not allowed for a static web app. | 'Disabled''Enabled' |
| templateProperties | Template options for generating a new repository. | StaticSiteTemplateOptions |


### StaticSiteBuildProperties

| Name | Description | Value |
|-|-|-|
| apiBuildCommand | A custom command to run during deployment of the Azure Functions API application. | string |
| apiLocation | The path to the api code within the repository. | string |
| appArtifactLocation | Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation) | string |
| appBuildCommand | A custom command to run during deployment of the static content application. | string |
| appLocation | The path to the app code within the repository. | string |
| githubActionSecretNameOverride | Github Action secret name override. | string |
| outputLocation | The output path of the app after building. | string |
| skipGithubActionWorkflowGeneration | Skip Github Action workflow generation. | bool |


### StaticSiteTemplateOptions

| Name | Description | Value |
|-|-|-|
| description | Description of the newly generated repository. | string |
| isPrivate | Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public). | bool |
| owner | Owner of the newly generated repository. | string |
| repositoryName | Name of the newly generated repository. | string |
| templateRepositoryUrl | URL of the template repository. The newly generated repository will be based on this one. | string |


### SkuDescription

| Name | Description | Value |
|-|-|-|
| capabilities | Capabilities of the SKU, e.g., is traffic manager enabled? | Capability[] |
| capacity | Current number of instances assigned to the resource. | int |
| family | Family code of the resource SKU. | string |
| locations | Locations of the SKU. | string[] |
| name | Name of the resource SKU. | string |
| size | Size specifier of the resource SKU. | string |
| skuCapacity | Min, max, and default scale values of the SKU. | SkuCapacity |
| tier | Service tier of the resource SKU. | string |


### Capability

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU capability. | string |
| reason | Reason of the SKU capability. | string |
| value | Value of the SKU capability. | string |


### SkuCapacity

| Name | Description | Value |
|-|-|-|
| default | Default number of workers for this App Service plan SKU. | int |
| elasticMaximum | Maximum number of Elastic workers for this App Service plan SKU. | int |
| maximum | Maximum number of workers for this App Service plan SKU. | int |
| minimum | Minimum number of workers for this App Service plan SKU. | int |
| scaleType | Available scale configurations for an App Service plan. | string |


