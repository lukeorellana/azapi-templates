```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parentPath = "string"
      path = "string"
      size = int
    }
  })
}

```

### netAppAccounts/capacityPools/volumes/subvolumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Subvolume Properties | SubvolumeProperties |


### SubvolumeProperties

| Name | Description | Value |
|-|-|-|
| parentPath | parent path to the subvolume | string |
| path | Path to the subvolume | string |
| size | Truncate subvolume to the provided size in bytes | int |


