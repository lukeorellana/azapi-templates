## Microsoft.CustomProviders/associations@2018-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomProviders/associations@2018-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      targetResourceId = "string"
    }
  })
}

```

### associations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-180Valid characters:Can't use:%&\\?/or control charactersCan't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the association. | AssociationProperties |


### AssociationProperties

| Name | Description | Value |
|-|-|-|
| targetResourceId | The REST resource instance of the target resource for this association. | string |
## Microsoft.CustomProviders/resourceProviders@2018-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomProviders/resourceProviders@2018-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        {
          endpoint = "string"
          name = "string"
          routingType = "Proxy"
        }
      ]
      resourceTypes = [
        {
          endpoint = "string"
          name = "string"
          routingType = "string"
        }
      ]
      validations = [
        {
          specification = "string"
          validationType = "Swagger"
        }
      ]
    }
  })
}

```

### resourceProviders

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Can't use:%&\\?/or control charactersCan't end with period or space. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The manifest for the custom resource provider | CustomRPManifestProperties |


### CustomRPManifestProperties

| Name | Description | Value |
|-|-|-|
| actions | A list of actions that the custom resource provider implements. | CustomRPActionRouteDefinition[] |
| resourceTypes | A list of resource types that the custom resource provider implements. | CustomRPResourceTypeRouteDefinition[] |
| validations | A list of validations to run on the custom resource provider's requests. | CustomRPValidations[] |


### CustomRPActionRouteDefinition

| Name | Description | Value |
|-|-|-|
| endpoint | The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}') | string (required) |
| name | The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}') | string (required) |
| routingType | The routing types that are supported for action requests. | 'Proxy' |


### CustomRPResourceTypeRouteDefinition

| Name | Description | Value |
|-|-|-|
| endpoint | The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}') | string (required) |
| name | The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}') | string (required) |
| routingType | The routing types that are supported for resource requests. | 'Proxy''Proxy,Cache' |


### CustomRPValidations

| Name | Description | Value |
|-|-|-|
| specification | A link to the validation specification. The specification must be hosted on raw.githubusercontent.com. | string (required) |
| validationType | The type of validation to run against a matching request. | 'Swagger' |
