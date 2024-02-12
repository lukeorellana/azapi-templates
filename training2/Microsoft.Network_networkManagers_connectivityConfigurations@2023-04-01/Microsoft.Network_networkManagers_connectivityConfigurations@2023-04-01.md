```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          groupConnectivity = "string"
          isGlobal = "string"
          networkGroupId = "string"
          useHubGateway = "string"
        }
      ]
      connectivityTopology = "string"
      deleteExistingPeering = "string"
      description = "string"
      hubs = [
        {
          resourceId = "string"
          resourceType = "string"
        }
      ]
      isGlobal = "string"
    }
  })
}

```

### networkManagers/connectivityConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | Properties of a network manager connectivity configuration | ConnectivityConfigurationProperties |


### ConnectivityConfigurationProperties

| Name | Description | Value |
|-|-|-|
| appliesToGroups | Groups for configuration | ConnectivityGroupItem[] (required) |
| connectivityTopology | Connectivity topology type. | 'HubAndSpoke''Mesh' (required) |
| deleteExistingPeering | Flag if need to remove current existing peerings. | 'False''True' |
| description | A description of the connectivity configuration. | string |
| hubs | List of hubItems | Hub[] |
| isGlobal | Flag if global mesh is supported. | 'False''True' |


### ConnectivityGroupItem

| Name | Description | Value |
|-|-|-|
| groupConnectivity | Group connectivity type. | 'DirectlyConnected''None' (required) |
| isGlobal | Flag if global is supported. | 'False''True' |
| networkGroupId | Network group Id. | string (required) |
| useHubGateway | Flag if need to use hub gateway. | 'False''True' |


### Hub

| Name | Description | Value |
|-|-|-|
| resourceId | Resource Id. | string |
| resourceType | Resource Type. | string |


