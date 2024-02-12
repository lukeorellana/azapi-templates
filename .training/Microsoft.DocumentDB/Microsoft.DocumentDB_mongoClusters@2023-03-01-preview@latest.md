```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/mongoClusters@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      createMode = "string"
      nodeGroupSpecs = [
        {
          diskSizeGB = int
          enableHa = bool
          kind = "Shard"
          nodeCount = int
          sku = "string"
        }
      ]
      restoreParameters = {
        pointInTimeUTC = "string"
        sourceResourceId = "string"
      }
      serverVersion = "string"
    }
  })
}

```

### mongoClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the mongo cluster. | MongoClusterProperties |


### MongoClusterProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | The administrator's login for the mongo cluster. | string |
| administratorLoginPassword | The password of the administrator login. | string |
| createMode | The mode to create a mongo cluster. | 'Default''PointInTimeRestore''Restore' |
| nodeGroupSpecs | The list of node group specs in the cluster. | NodeGroupSpec[] |
| restoreParameters | Parameters used for restore operations | MongoClusterRestoreParameters |
| serverVersion | The Mongo DB server version. Defaults to the latest available version if not specified. | string |


### NodeGroupSpec

| Name | Description | Value |
|-|-|-|
| diskSizeGB | The disk storage size for the node group in GB. Example values: 128, 256, 512, 1024. | int |
| enableHa | Whether high availability is enabled on the node group. | bool |
| kind | The node type deployed in the node group. | 'Shard' |
| nodeCount | The number of nodes in the node group. | int |
| sku | The resource sku for the node group. This defines the size of CPU and memory that is provisioned for each node. Example values: 'M30', 'M40'. | string |


### MongoClusterRestoreParameters

| Name | Description | Value |
|-|-|-|
| pointInTimeUTC | UTC point in time to restore a mongo cluster | string |
| sourceResourceId | Resource ID to locate the source cluster to restore | string |


