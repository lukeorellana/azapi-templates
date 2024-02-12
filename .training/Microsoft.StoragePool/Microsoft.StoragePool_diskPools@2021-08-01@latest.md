```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StoragePool/diskPools@2021-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = [
        "string"
      ]
      availabilityZones = [
        "string"
      ]
      disks = [
        {
          id = "string"
        }
      ]
      subnetId = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
    managedBy = "string"
    managedByExtended = [
      "string"
    ]
  })
}

```

### diskPools

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Determines the SKU of the Disk Pool | Sku(required) |
| managedBy | Azure resource id. Indicates if this resource is managed by another Azure resource. | string |
| managedByExtended | List of Azure resource ids that manage this resource. | string[] |
| properties | Properties for Disk Pool create request. | DiskPoolCreatePropertiesOrDiskPoolProperties(required) |


### DiskPoolCreatePropertiesOrDiskPoolProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | List of additional capabilities for a Disk Pool. | string[] |
| availabilityZones | Logical zone for Disk Pool resource; example: ["1"]. | string[] |
| disks | List of Azure Managed Disks to attach to a Disk Pool. | Disk[] |
| subnetId | Azure Resource ID of a Subnet for the Disk Pool. | string (required) |


### Disk

| Name | Description | Value |
|-|-|-|
| id | Unique Azure Resource ID of the Managed Disk. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Sku name | string (required) |
| tier | Sku tier | string |


