```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificInput = [
        {
          instanceType = "string"
          // For remaining properties, see ReplicationProviderSpecificContainerCreationInput objects
        }
      ]
    }
  })
}

```

### vaults/replicationFabrics/replicationProtectionConta...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
| properties | Create protection container input properties. | CreateProtectionContainerInputPropertiesOrProtection... |


### CreateProtectionContainerInputPropertiesOrProtection...

| Name | Description | Value |
|-|-|-|
| providerSpecificInput | Provider specific inputs for container creation. | ReplicationProviderSpecificContainerCreationInput[] |


### ReplicationProviderSpecificContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2AA2ACrossClusterMigrationVMwareCbt(required) |


### A2AContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |


### A2ACrossClusterMigrationContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2ACrossClusterMigration' (required) |


### VMwareCbtContainerCreationInput

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'VMwareCbt' (required) |


