```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      diskPoolVolume = {
        lunName = "string"
        mountOption = "string"
        targetId = "string"
      }
      netAppVolume = {
        id = "string"
      }
    }
  })
}

```

### privateClouds/clusters/datastores

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The properties of a datastore resource | DatastoreProperties |


### DatastoreProperties

| Name | Description | Value |
|-|-|-|
| diskPoolVolume | An iSCSI volume | DiskPoolVolume |
| netAppVolume | An Azure NetApp Files volume | NetAppVolume |


### DiskPoolVolume

| Name | Description | Value |
|-|-|-|
| lunName | Name of the LUN to be used for datastore | string (required) |
| mountOption | Mode that describes whether the LUN has to be mounted as a datastore or attached as a LUN | 'ATTACH''MOUNT' |
| targetId | Azure resource ID of the iSCSI target | string (required) |


### NetAppVolume

| Name | Description | Value |
|-|-|-|
| id | Azure resource ID of the NetApp volume | string (required) |


