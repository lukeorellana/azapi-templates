```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activeDirectoryInformation = {
        keytabInformation = {
          keytab = "string"
        }
      }
      admin = "string"
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      clusterId = "string"
      dataControllerId = "string"
      endTime = "string"
      extensionId = "string"
      k8sRaw = {
        spec = {
          replicas = int
          scheduling = {
            default = {
              resources = {
                limits = {}
                requests = {}
              }
            }
          }
        }
      }
      lastUploadedDate = "string"
      licenseType = "string"
      startTime = "string"
    }
    sku = {
      capacity = int
      dev = bool
      family = "string"
      name = "vCore"
      size = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### sqlManagedInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Resource sku. | SqlManagedInstanceSku |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | null | SqlManagedInstanceProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### SqlManagedInstanceProperties

| Name | Description | Value |
|-|-|-|
| activeDirectoryInformation | Active Directory information related to this SQL Managed Instance. | ActiveDirectoryInformation |
| admin | The instance admin user | string |
| basicLoginInformation | Username and password for basic authentication. | BasicLoginInformation |
| clusterId | If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to. | string |
| dataControllerId | null | string |
| endTime | The instance end time | string |
| extensionId | If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to. | string |
| k8sRaw | The raw kubernetes information | SqlManagedInstanceK8SRaw |
| lastUploadedDate | Last uploaded date from Kubernetes cluster. Defaults to current date time | string |
| licenseType | The license type to apply for this managed instance. | 'BasePrice''DisasterRecovery''LicenseIncluded' |
| startTime | The instance start time | string |


### ActiveDirectoryInformation

| Name | Description | Value |
|-|-|-|
| keytabInformation | Keytab information that is used for the Sql Managed Instance when Active Directory authentication is used. | KeytabInformation |


### KeytabInformation

| Name | Description | Value |
|-|-|-|
| keytab | A base64-encoded keytab. | string |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### SqlManagedInstanceK8SRaw

| Name | Description | Value |
|-|-|-|
| spec | The kubernetes spec information. | SqlManagedInstanceK8SSpec |


### SqlManagedInstanceK8SSpec

| Name | Description | Value |
|-|-|-|
| replicas | This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'. | int |
| scheduling | The kubernetes scheduling information. | K8SScheduling |


### K8SScheduling

| Name | Description | Value |
|-|-|-|
| default | The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service | K8SSchedulingOptions |


### K8SSchedulingOptions

| Name | Description | Value |
|-|-|-|
| resources | The kubernetes resource limits and requests used to restrict or reserve resource usage. | K8SResourceRequirements |


### K8SResourceRequirements

| Name | Description | Value |
|-|-|-|
| limits | Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'. | object |
| requests | Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'. | object |


### SqlManagedInstanceSku

| Name | Description | Value |
|-|-|-|
| capacity | The SKU capacity | int |
| dev | Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. | bool |
| family | The SKU family | string |
| name | The name of the SKU. | 'vCore' (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | The pricing tier for the instance. | 'BusinessCritical''GeneralPurpose' |


