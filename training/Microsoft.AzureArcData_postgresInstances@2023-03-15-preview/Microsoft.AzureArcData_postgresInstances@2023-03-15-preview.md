```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/postgresInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      admin = "string"
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      dataControllerId = "string"
      lastUploadedDate = "string"
    }
    sku = {
      capacity = int
      dev = bool
      family = "string"
      name = "string"
      size = "string"
      tier = "Hyperscale"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### postgresInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Resource sku. | PostgresInstanceSku |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | null | PostgresInstanceProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### PostgresInstanceProperties

| Name | Description | Value |
|-|-|-|
| admin | The instance admin | string |
| basicLoginInformation | Username and password for basic authentication. | BasicLoginInformation |
| dataControllerId | The data controller id | string |
| k8sRaw | The raw kubernetes information | For Bicep, you can use theany()function. |
| lastUploadedDate | Last uploaded date from Kubernetes cluster. Defaults to current date time | string |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### PostgresInstanceSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| dev | Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. | bool |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU.  It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier. | 'Hyperscale' |


