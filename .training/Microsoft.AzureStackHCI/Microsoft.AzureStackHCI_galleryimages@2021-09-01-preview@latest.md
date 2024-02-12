```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cloudInitDataSource = "string"
      containerName = "string"
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      imagePath = "string"
      osType = "string"
      resourceName = "string"
      version = {
        name = "string"
        properties = {
          storageProfile = {
            osDiskImage = {}
          }
        }
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### galleryimages

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a gallery image resource | GalleryimagesProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### GalleryimagesProperties

| Name | Description | Value |
|-|-|-|
| cloudInitDataSource | Datasource for the gallery image when provisioning with cloud-init (Azure or NoCloud) | 'Azure''NoCloud' |
| containerName | Container Name for storage container | string |
| hyperVGeneration | The hypervisor generation of the Virtual Machine [V1, V2] | 'V1''V2' |
| identifier | This is the gallery image definition identifier. | GalleryImageIdentifier |
| imagePath | location of the image the gallery image should be created from | string |
| osType | operating system type that the gallery image uses. Expected to be linux or windows | 'Linux''Windows' |
| resourceName | name of the object to be used in moc | string |
| version | Specifies information about the gallery image version that you want to create or update. | GalleryImageVersion |


### GalleryImageIdentifier

| Name | Description | Value |
|-|-|-|
| offer | The name of the gallery image definition offer. | string (required) |
| publisher | The name of the gallery image definition publisher. | string (required) |
| sku | The name of the gallery image definition SKU. | string (required) |


### GalleryImageVersion

| Name | Description | Value |
|-|-|-|
| name | This is the version of the gallery image. | string |
| properties | Describes the properties of a gallery image version. | GalleryImageVersionProperties |


### GalleryImageVersionProperties

| Name | Description | Value |
|-|-|-|
| storageProfile | This is the storage profile of a Gallery Image Version. | GalleryImageVersionStorageProfile(required) |


### GalleryImageVersionStorageProfile

| Name | Description | Value |
|-|-|-|
| osDiskImage | This is the OS disk image. | GalleryOSDiskImage |


