```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/disks@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      diskBlobName = "string"
      diskSizeGiB = int
      diskType = "string"
      diskUri = "string"
      leasedByLabVmId = "string"
      managedDiskId = "string"
      storageAccountId = "string"
    }
  })
}

```

### labs/users/disks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | DiskProperties(required) |


### DiskProperties

| Name | Description | Value |
|-|-|-|
| diskBlobName | When backed by a blob, the name of the VHD blob without extension. | string |
| diskSizeGiB | The size of the disk in Gibibytes. | int |
| diskType | The storage type for the disk (i.e. Standard, Premium). | 'Premium''Standard''StandardSSD' |
| diskUri | When backed by a blob, the URI of underlying blob. | string |
| leasedByLabVmId | The resource ID of the VM to which this disk is leased. | string |
| managedDiskId | When backed by managed disk, this is the ID of the compute disk resource. | string |
| storageAccountId | When backed by a blob, the storage account where the blob is. | string |


