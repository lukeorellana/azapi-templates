```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/dataControllers@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      clusterId = "string"
      extensionId = "string"
      infrastructure = "string"
      lastUploadedDate = "string"
      logAnalyticsWorkspaceConfig = {
        primaryKey = "string"
        workspaceId = "string"
      }
      logsDashboardCredential = {
        password = "string"
        username = "string"
      }
      metricsDashboardCredential = {
        password = "string"
        username = "string"
      }
      onPremiseProperty = {
        id = "string"
        publicSigningKey = "string"
        signingCertificateThumbprint = "string"
      }
      uploadServicePrincipal = {
        authority = "string"
        clientId = "string"
        clientSecret = "string"
        tenantId = "string"
      }
      uploadWatermark = {
        logs = "string"
        metrics = "string"
        usages = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### dataControllers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | The data controller's properties | DataControllerProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### DataControllerProperties

| Name | Description | Value |
|-|-|-|
| basicLoginInformation | Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API. | BasicLoginInformation |
| clusterId | If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to. | string |
| extensionId | If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to. | string |
| infrastructure | The infrastructure the data controller is running on. | 'alibaba''aws''azure''gcp''onpremises''other' |
| k8sRaw | The raw kubernetes information | For Bicep, you can use theany()function. |
| lastUploadedDate | Last uploaded date from Kubernetes cluster. Defaults to current date time | string |
| logAnalyticsWorkspaceConfig | Log analytics workspace id and primary key | LogAnalyticsWorkspaceConfig |
| logsDashboardCredential | Login credential for logs dashboard on the Kubernetes cluster. | BasicLoginInformation |
| metricsDashboardCredential | Login credential for metrics dashboard on the Kubernetes cluster. | BasicLoginInformation |
| onPremiseProperty | Properties from the Kubernetes data controller | OnPremiseProperty |
| uploadServicePrincipal | Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity. | UploadServicePrincipal |
| uploadWatermark | Properties on upload watermark.  Mostly timestamp for each upload data type | UploadWatermark |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### LogAnalyticsWorkspaceConfig

| Name | Description | Value |
|-|-|-|
| primaryKey | Primary key of the workspace | string |
| workspaceId | Azure Log Analytics workspace ID | string |


### OnPremiseProperty

| Name | Description | Value |
|-|-|-|
| id | A globally unique ID identifying the associated Kubernetes cluster | string (required) |
| publicSigningKey | Certificate that contains the Kubernetes cluster public key used to verify signing | string (required) |
| signingCertificateThumbprint | Unique thumbprint returned to customer to verify the certificate being uploaded | string |


### UploadServicePrincipal

| Name | Description | Value |
|-|-|-|
| authority | Authority for the service principal. Example:https://login.microsoftonline.com/ | string |
| clientId | Client ID of the service principal for uploading data. | string |
| clientSecret | Secret of the service principal | string |
| tenantId | Tenant ID of the service principal. | string |


### UploadWatermark

| Name | Description | Value |
|-|-|-|
| logs | Last uploaded date for logs from kubernetes cluster. Defaults to current date time | string |
| metrics | Last uploaded date for metrics from kubernetes cluster. Defaults to current date time | string |
| usages | Last uploaded date for usages from kubernetes cluster. Defaults to current date time | string |


