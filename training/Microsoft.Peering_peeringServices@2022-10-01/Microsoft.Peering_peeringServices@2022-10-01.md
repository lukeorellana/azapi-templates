```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peeringServices@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      logAnalyticsWorkspaceProperties = {}
      peeringServiceLocation = "string"
      peeringServiceProvider = "string"
      providerBackupPeeringLocation = "string"
      providerPrimaryPeeringLocation = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### peeringServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU that defines the type of the peering service. | PeeringServiceSku |
| properties | The properties that define a peering service. | PeeringServiceProperties |


### PeeringServiceProperties

| Name | Description | Value |
|-|-|-|
| logAnalyticsWorkspaceProperties | The Log Analytics Workspace Properties | LogAnalyticsWorkspaceProperties |
| peeringServiceLocation | The location (state/province) of the customer. | string |
| peeringServiceProvider | The name of the service provider. | string |
| providerBackupPeeringLocation | The backup peering (Microsoft/service provider) location to be used for customer traffic. | string |
| providerPrimaryPeeringLocation | The primary peering (Microsoft/service provider) location to be used for customer traffic. | string |


### PeeringServiceSku

| Name | Description | Value |
|-|-|-|
| name | The name of the peering service SKU. | string |


