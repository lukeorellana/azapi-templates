```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
      biosId = "string"
      dataPlaneAuthenticationIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
      machineId = "string"
      machineName = "string"
      resourceAccessIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
    }
  })
}

```

### vaults/replicationFabrics/replicationRecoveryService...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
| properties | The properties of an add provider request. | AddRecoveryServicesProviderInputPropertiesOrRecovery...(required) |


### AddRecoveryServicesProviderInputPropertiesOrRecovery...

| Name | Description | Value |
|-|-|-|
| authenticationIdentityInput | The identity provider input for DRA authentication. | IdentityProviderInput(required) |
| biosId | The Bios Id of the machine. | string |
| dataPlaneAuthenticationIdentityInput | The identity provider input for data plane authentication. | IdentityProviderInput |
| machineId | The Id of the machine where the provider is getting added. | string |
| machineName | The name of the machine where the provider is getting added. | string (required) |
| resourceAccessIdentityInput | The identity provider input for resource access. | IdentityProviderInput(required) |


### IdentityProviderInput

| Name | Description | Value |
|-|-|-|
| aadAuthority | The base authority for Azure Active Directory authentication. | string (required) |
| applicationId | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| audience | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| objectId | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
| tenantId | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |


