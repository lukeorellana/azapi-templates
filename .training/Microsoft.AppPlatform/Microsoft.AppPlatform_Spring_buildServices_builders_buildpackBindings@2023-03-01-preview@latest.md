```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bindingType = "string"
      launchProperties = {
        properties = {
        secrets = {}
      }
    }
  })
}

```

### Spring/buildServices/builders/buildpackBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:builders |
| properties | Properties of a buildpack binding | BuildpackBindingProperties |


### BuildpackBindingProperties

| Name | Description | Value |
|-|-|-|
| bindingType | Buildpack Binding Type | 'ApacheSkyWalking''AppDynamics''ApplicationInsights''CACertificates''Dynatrace''ElasticAPM''NewRelic' |
| launchProperties | The object describes the buildpack binding launch properties | BuildpackBindingLaunchProperties |


### BuildpackBindingLaunchProperties

| Name | Description | Value |
|-|-|-|
| properties | Non-sensitive properties for launchProperties | BuildpackBindingLaunchProperties |
| secrets | Sensitive properties for launchProperties | object |


