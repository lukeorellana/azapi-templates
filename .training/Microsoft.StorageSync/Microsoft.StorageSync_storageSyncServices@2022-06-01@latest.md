```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices@2022-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      incomingTrafficPolicy = "string"
    }
  })
}

```

### storageSyncServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, spaces, periods, hyphens, and underscores.Can't end with period or space. |
| location | Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed. | string (required) |
| tags | Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. | Dictionary of tag names and values. SeeTags in templates |
| properties | The parameters used to create the storage sync service. | StorageSyncServiceCreateParametersPropertiesOrStorag... |


### StorageSyncServiceCreateParametersPropertiesOrStorag...

| Name | Description | Value |
|-|-|-|
| incomingTrafficPolicy | Incoming Traffic Policy | 'AllowAllTraffic''AllowVirtualNetworksOnly' |


