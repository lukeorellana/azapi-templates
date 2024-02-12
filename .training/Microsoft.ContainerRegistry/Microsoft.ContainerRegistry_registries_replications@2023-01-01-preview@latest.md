```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      regionEndpointEnabled = bool
      zoneRedundancy = "string"
    }
  })
}

```

### registries/replications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the replication. | ReplicationProperties |


### ReplicationProperties

| Name | Description | Value |
|-|-|-|
| regionEndpointEnabled | Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications. | bool |
| zoneRedundancy | Whether or not zone redundancy is enabled for this container registry replication | 'Disabled''Enabled' |


