```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices/registeredServers@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentVersion = "string"
      clusterId = "string"
      clusterName = "string"
      friendlyName = "string"
      lastHeartBeat = "string"
      serverCertificate = "string"
      serverId = "string"
      serverOSVersion = "string"
      serverRole = "string"
    }
  })
}

```

### storageSyncServices/registeredServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageSyncServices |
| properties | The parameters used to create the registered server. | RegisteredServerCreateParametersPropertiesOrRegister... |


### RegisteredServerCreateParametersPropertiesOrRegister...

| Name | Description | Value |
|-|-|-|
| agentVersion | Registered Server Agent Version | string |
| clusterId | Registered Server clusterId | string |
| clusterName | Registered Server clusterName | string |
| friendlyName | Friendly Name | string |
| lastHeartBeat | Registered Server last heart beat | string |
| serverCertificate | Registered Server Certificate | string |
| serverId | Registered Server serverId | string |
| serverOSVersion | Registered Server OS Version | string |
| serverRole | Registered Server serverRole | string |


