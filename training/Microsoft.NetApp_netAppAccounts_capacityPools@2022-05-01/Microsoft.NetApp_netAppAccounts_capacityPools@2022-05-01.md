```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      coolAccess = bool
      encryptionType = "string"
      qosType = "string"
      serviceLevel = "string"
      size = int
    }
  })
}

```

### netAppAccounts/capacityPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Capacity pool properties | PoolProperties(required) |


### PoolProperties

| Name | Description | Value |
|-|-|-|
| coolAccess | If enabled (true) the pool can contain cool Access enabled volumes. | bool |
| encryptionType | Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool. | 'Double''Single' |
| qosType | The qos type of the pool | 'Auto''Manual' |
| serviceLevel | The service level of the file system | 'Premium''Standard''StandardZRS''Ultra' (required) |
| size | Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiply of 4398046511104). | int (required) |


