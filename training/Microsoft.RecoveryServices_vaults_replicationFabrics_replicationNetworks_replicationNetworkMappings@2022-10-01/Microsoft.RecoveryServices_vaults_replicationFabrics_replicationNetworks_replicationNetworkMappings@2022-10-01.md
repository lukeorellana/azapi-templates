```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      fabricSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see FabricSpecificCreateNetworkMappingInput objects
      }
      recoveryFabricName = "string"
      recoveryNetworkId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationNetworks/replic...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: replicationNetworks |
| properties | Input properties for creating network mapping. | CreateNetworkMappingInputPropertiesOrNetworkMappingP...(required) |


### CreateNetworkMappingInputPropertiesOrNetworkMappingP...

| Name | Description | Value |
|-|-|-|
| fabricSpecificDetails | Fabric specific input properties. | FabricSpecificCreateNetworkMappingInput |
| recoveryFabricName | Recovery fabric Name. | string |
| recoveryNetworkId | Recovery network Id. | string (required) |


### FabricSpecificCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | AzureToAzureVmmToAzureVmmToVmm(required) |


### AzureToAzureCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The instance type. | 'AzureToAzure' (required) |
| primaryNetworkId | The primary azure vnet Id. | string (required) |


### VmmToAzureCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The instance type. | 'VmmToAzure' (required) |


### VmmToVmmCreateNetworkMappingInput

| Name | Description | Value |
|-|-|-|
| instanceType | The instance type. | 'VmmToVmm' (required) |


