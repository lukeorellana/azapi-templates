```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoStopDelay = "string"
      deleteResourcesOnStop = bool
      publicKey = "string"
      virtualNicId = "string"
      virtualSubnetId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### services

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-62Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with alphanumeric. |
| location |  | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| sku | Service SKU | ServiceSku |
| kind | The resource kind. Only 'vm' (the default) is supported. | string |
| etag | HTTP strong entity tag value. Ignored if submitted | string |
| properties | Custom service properties | DataMigrationServiceProperties |


### DataMigrationServiceProperties

| Name | Description | Value |
|-|-|-|
| autoStopDelay | The time delay before the service is auto-stopped when idle. | string |
| deleteResourcesOnStop | Whether service resources should be deleted when stopped. (Turned on by default) | bool |
| publicKey | The public key of the service, used to encrypt secrets sent to the service | string |
| virtualNicId | The ID of the Microsoft.Network/networkInterfaces resource which the service have | string |
| virtualSubnetId | The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined | string |


### ServiceSku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the SKU, if it supports scaling | int |
| family | The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines | string |
| name | The unique name of the SKU, such as 'P3' | string |
| size | The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines | string |
| tier | The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical' | string |


