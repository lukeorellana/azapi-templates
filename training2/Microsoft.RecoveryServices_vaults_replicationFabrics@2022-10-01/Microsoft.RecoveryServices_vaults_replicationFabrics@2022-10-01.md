```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customDetails = {
        instanceType = "string"
        // For remaining properties, see FabricSpecificCreationInputOrFabricSpecificDetails objects
      }
    }
  })
}

```

### vaults/replicationFabrics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Fabric creation input. | FabricCreationInputPropertiesOrFabricProperties |


### FabricCreationInputPropertiesOrFabricProperties

| Name | Description | Value |
|-|-|-|
| customDetails | Fabric provider specific creation input. | FabricSpecificCreationInputOrFabricSpecificDetails |


### FabricSpecificCreationInputOrFabricSpecificDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | AzureHyperVSiteInMageRcmVMMVMwareVMwareV2(required) |


### AzureFabricCreationInputOrAzureFabricSpecificDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'Azure' (required) |
| location | The Location. | string |


### HyperVSiteDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'HyperVSite' (required) |


### InMageRcmFabricCreationInputOrInMageRcmFabricSpecifi...

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'InMageRcm' (required) |
| physicalSiteId | The ARM Id of the physical site. | string (required) |
| sourceAgentIdentity | The identity provider input for source agent authentication. | IdentityProviderInput(required) |
| vmwareSiteId | The ARM Id of the VMware site. | string (required) |


### IdentityProviderInput

| Name | Description | Value |
|-|-|-|
| aadAuthority | The base authority for Azure Active Directory authentication. | string (required) |
| applicationId | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| audience | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| objectId | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| tenantId | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |


### VmmDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'VMM' (required) |


### VMwareDetails

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'VMware' (required) |


### VMwareV2FabricCreationInputOrVMwareV2FabricSpecificD...

| Name | Description | Value |
|-|-|-|
| instanceType | Gets the class type. | 'VMwareV2' (required) |
| migrationSolutionId | The ARM Id of the migration solution. | string (required) |
| physicalSiteId | The ARM Id of the physical site. | string |
| vmwareSiteId | The ARM Id of the VMware site. | string |


