```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/networkConfig@2022-09-01"
  name = "virtualNetwork"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetResourceId = "string"
      swiftSupported = bool
    }
    kind = "string"
  })
}

```

### sites/slots/networkConfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'virtualNetwork' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SwiftVirtualNetwork resource specific properties | SwiftVirtualNetworkProperties |


### SwiftVirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| subnetResourceId | The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first. | string |
| swiftSupported | A flag that specifies if the scale unit this Web App is on supports Swift integration. | bool |


