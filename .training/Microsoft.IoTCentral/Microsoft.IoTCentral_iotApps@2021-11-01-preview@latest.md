```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.IoTCentral/iotApps@2021-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      displayName = "string"
      networkRuleSets = {
        applyToDevices = bool
        applyToIoTCentral = bool
        defaultAction = "string"
        ipRules = [
          {
            filterName = "string"
            ipMask = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      subdomain = "string"
      template = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### iotApps

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-63Valid characters:Lowercase letters, numbers and hyphens.Start with lowercase letter or number.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | A valid instance SKU. | AppSkuInfo(required) |
| identity | The managed identities for the IoT Central application. | SystemAssignedServiceIdentity |
| properties | The common properties of an IoT Central application. | AppProperties |


### SystemAssignedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (either system assigned, or none). | 'None''SystemAssigned' (required) |


### AppProperties

| Name | Description | Value |
|-|-|-|
| displayName | The display name of the application. | string |
| networkRuleSets | Network Rule Set Properties of this IoT Central application. | NetworkRuleSets |
| publicNetworkAccess | Whether requests from the public network are allowed. | 'Disabled''Enabled' |
| subdomain | The subdomain of the application. | string |
| template | The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. | string |


### NetworkRuleSets

| Name | Description | Value |
|-|-|-|
| applyToDevices | Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application. | bool |
| applyToIoTCentral | Whether these rules apply for connectivity via IoT Central web portal and APIs. | bool |
| defaultAction | The default network action to apply. | 'Allow''Deny' |
| ipRules | List of IP rules. | NetworkRuleSetIpRule[] |


### NetworkRuleSetIpRule

| Name | Description | Value |
|-|-|-|
| filterName | The readable name of the IP rule. | string |
| ipMask | The CIDR block defining the IP range. | string |


### AppSkuInfo

| Name | Description | Value |
|-|-|-|
| name | The name of the SKU. | 'ST0''ST1''ST2' (required) |


