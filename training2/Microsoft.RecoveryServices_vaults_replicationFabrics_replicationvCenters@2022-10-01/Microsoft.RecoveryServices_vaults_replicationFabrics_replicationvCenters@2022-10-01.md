```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      friendlyName = "string"
      ipAddress = "string"
      port = "string"
      processServerId = "string"
      runAsAccountId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationvCenters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
| properties | The properties of an add vCenter request. | AddVCenterRequestPropertiesOrVCenterProperties |


### AddVCenterRequestPropertiesOrVCenterProperties

| Name | Description | Value |
|-|-|-|
| friendlyName | The friendly name of the vCenter. | string |
| ipAddress | The IP address of the vCenter to be discovered. | string |
| port | The port number for discovery. | string |
| processServerId | The process server Id from where the discovery is orchestrated. | string |
| runAsAccountId | The account Id which has privileges to discover the vCenter. | string |


