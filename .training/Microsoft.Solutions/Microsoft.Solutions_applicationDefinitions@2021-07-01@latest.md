```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Solutions/applicationDefinitions@2021-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifacts = [
        {
          name = "string"
          type = "string"
          uri = "string"
        }
      ]
      authorizations = [
        {
          principalId = "string"
          roleDefinitionId = "string"
        }
      ]
      deploymentPolicy = {
        deploymentMode = "string"
      }
      description = "string"
      displayName = "string"
      isEnabled = bool
      lockingPolicy = {
        allowedActions = [
          "string"
        ]
        allowedDataActions = [
          "string"
        ]
      }
      managementPolicy = {
        mode = "string"
      }
      notificationPolicy = {
        notificationEndpoints = [
          {
            uri = "string"
          }
        ]
      }
      packageFileUri = "string"
      policies = [
        {
          name = "string"
          parameters = "string"
          policyDefinitionId = "string"
        }
      ]
      storageAccountId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      model = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    managedBy = "string"
  })
}

```

### applicationDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the resource. | Sku |
| managedBy | ID of the resource that manages this resource. | string |
| properties | The managed application definition properties. | ApplicationDefinitionProperties(required) |


### ApplicationDefinitionProperties

| Name | Description | Value |
|-|-|-|
| artifacts | The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition. | ApplicationDefinitionArtifact[] |
| authorizations | The managed application provider authorizations. | ApplicationAuthorization[] |
| createUiDefinition | The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string. | For Bicep, you can use theany()function. |
| deploymentPolicy | The managed application deployment policy. | ApplicationDeploymentPolicy |
| description | The managed application definition description. | string |
| displayName | The managed application definition display name. | string |
| isEnabled | A value indicating whether the package is enabled or not. | bool |
| lockingPolicy | The managed application locking policy. | ApplicationPackageLockingPolicyDefinition |
| mainTemplate | The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string. | For Bicep, you can use theany()function. |
| managementPolicy | The managed application management policy that determines publisher's access to the managed resource group. | ApplicationManagementPolicy |
| notificationPolicy | The managed application notification policy. | ApplicationNotificationPolicy |
| packageFileUri | The managed application definition package file Uri. Use this element | string |
| policies | The managed application provider policies. | ApplicationPolicy[] |
| storageAccountId | The storage account id for bring your own storage scenario. | string |


### ApplicationDefinitionArtifact

| Name | Description | Value |
|-|-|-|
| name | The managed application definition artifact name. | 'ApplicationResourceTemplate''CreateUiDefinition''MainTemplateParameters''NotSpecified' (required) |
| type | The managed application definition artifact type. | 'Custom''NotSpecified''Template' (required) |
| uri | The managed application definition artifact blob uri. | string (required) |


### ApplicationAuthorization

| Name | Description | Value |
|-|-|-|
| principalId | The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources. | string (required) |
| roleDefinitionId | The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group. | string (required) |


### ApplicationDeploymentPolicy

| Name | Description | Value |
|-|-|-|
| deploymentMode | The managed application deployment mode. | 'Complete''Incremental''NotSpecified' (required) |


### ApplicationPackageLockingPolicyDefinition

| Name | Description | Value |
|-|-|-|
| allowedActions | The deny assignment excluded actions. | string[] |
| allowedDataActions | The deny assignment excluded data actions. | string[] |


### ApplicationManagementPolicy

| Name | Description | Value |
|-|-|-|
| mode | The managed application management mode. | 'Managed''NotSpecified''Unmanaged' |


### ApplicationNotificationPolicy

| Name | Description | Value |
|-|-|-|
| notificationEndpoints | The managed application notification endpoint. | ApplicationNotificationEndpoint[] (required) |


### ApplicationNotificationEndpoint

| Name | Description | Value |
|-|-|-|
| uri | The managed application notification endpoint uri. | string (required) |


### ApplicationPolicy

| Name | Description | Value |
|-|-|-|
| name | The policy name | string |
| parameters | The policy parameters. | string |
| policyDefinitionId | The policy definition Id. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The SKU capacity. | int |
| family | The SKU family. | string |
| model | The SKU model. | string |
| name | The SKU name. | string (required) |
| size | The SKU size. | string |
| tier | The SKU tier. | string |


