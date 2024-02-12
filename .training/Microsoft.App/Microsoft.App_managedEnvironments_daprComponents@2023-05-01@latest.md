```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/daprComponents@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentType = "string"
      ignoreErrors = bool
      initTimeout = "string"
      metadata = [
        {
          name = "string"
          secretRef = "string"
          value = "string"
        }
      ]
      scopes = [
        "string"
      ]
      secrets = [
        {
          identity = "string"
          keyVaultUrl = "string"
          name = "string"
          value = "string"
        }
      ]
      secretStoreComponent = "string"
      version = "string"
    }
  })
}

```

### managedEnvironments/daprComponents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedEnvironments |
| properties | Dapr Component resource specific properties | DaprComponentProperties |


### DaprComponentProperties

| Name | Description | Value |
|-|-|-|
| componentType | Component type | string |
| ignoreErrors | Boolean describing if the component errors are ignores | bool |
| initTimeout | Initialization timeout | string |
| metadata | Component metadata | DaprMetadata[] |
| scopes | Names of container apps that can use this Dapr component | string[] |
| secrets | Collection of secrets used by a Dapr component | Secret[] |
| secretStoreComponent | Name of a Dapr component to retrieve component secrets from | string |
| version | Component version | string |


### DaprMetadata

| Name | Description | Value |
|-|-|-|
| name | Metadata property name. | string |
| secretRef | Name of the Dapr Component secret from which to pull the metadata property value. | string |
| value | Metadata property value. | string |


### Secret

| Name | Description | Value |
|-|-|-|
| identity | Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity. | string |
| keyVaultUrl | Azure Key Vault URL pointing to the secret referenced by the container app. | string |
| name | Secret Name. | string |
| value | Secret Value. | string |


