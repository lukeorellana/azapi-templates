```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2021-03-01"
  name = "networking"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowNewPrivateEndpointConnections = bool
    }
    kind = "string"
  })
}

```

### hostingEnvironments/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'networking' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | AseV3NetworkingConfiguration resource specific properties | AseV3NetworkingConfigurationProperties |


### AseV3NetworkingConfigurationProperties

| Name | Description | Value |
|-|-|-|
| allowNewPrivateEndpointConnections | Property to enable and disable new private endpoint connection creation on ASE | bool |


