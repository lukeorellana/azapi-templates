```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AnalysisServices/servers@2017-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asAdministrators = {
        members = [
          "string"
        ]
      }
      backupBlobContainerUri = "string"
      gatewayDetails = {
        gatewayResourceId = "string"
      }
      ipV4FirewallSettings = {
        enablePowerBIService = bool
        firewallRules = [
          {
            firewallRuleName = "string"
            rangeEnd = "string"
            rangeStart = "string"
          }
        ]
      }
      managedMode = int
      querypoolConnectionMode = "string"
      serverMonitorMode = int
      sku = {
        capacity = int
        name = "string"
        tier = "string"
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### servers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Lowercase letters and numbers.Start with lowercase letter. |
| location | Location of the Analysis Services resource. | string (required) |
| tags | Key-value pairs of additional resource provisioning properties. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the Analysis Services resource. | ResourceSku(required) |
| properties | Properties of the provision operation request. | AnalysisServicesServerProperties |


### AnalysisServicesServerProperties

| Name | Description | Value |
|-|-|-|
| asAdministrators | A collection of AS server administrators | ServerAdministrators |
| backupBlobContainerUri | The SAS container URI to the backup container. | string |
| gatewayDetails | The gateway details configured for the AS server. | GatewayDetails |
| ipV4FirewallSettings | The firewall settings for the AS server. | IPv4FirewallSettings |
| managedMode | The managed mode of the server (0 = not managed, 1 = managed). | int |
| querypoolConnectionMode | How the read-write server's participation in the query pool is controlled.It can have the following values: {ul}{li}readOnly - indicates that the read-write server is intended not to participate in query operations{/li}{li}all - indicates that the read-write server can participate in query operations{/li}{/ul}Specifying readOnly when capacity is 1 results in error. | 'All''ReadOnly' |
| serverMonitorMode | The server monitor mode for AS server | int |
| sku | The SKU of the Analysis Services resource. | ResourceSku |


### ServerAdministrators

| Name | Description | Value |
|-|-|-|
| members | An array of administrator user identities. | string[] |


### GatewayDetails

| Name | Description | Value |
|-|-|-|
| gatewayResourceId | Gateway resource to be associated with the server. | string |


### IPv4FirewallSettings

| Name | Description | Value |
|-|-|-|
| enablePowerBIService | The indicator of enabling PBI service. | bool |
| firewallRules | An array of firewall rules. | IPv4FirewallRule[] |


### IPv4FirewallRule

| Name | Description | Value |
|-|-|-|
| firewallRuleName | The rule name. | string |
| rangeEnd | The end range of IPv4. | string |
| rangeStart | The start range of IPv4. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of instances in the read only query pool. | int |
| name | Name of the SKU level. | string (required) |
| tier | The name of the Azure pricing tier to which the SKU applies. | 'Basic''Development''Standard' |


