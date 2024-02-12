```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicLandMobileNetworkIdentifier = {
        mcc = "string"
        mnc = "string"
      }
    }
  })
}

```

### mobileNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Mobile network properties. | MobileNetworkPropertiesFormat(required) |


### MobileNetworkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicLandMobileNetworkIdentifier | The unique public land mobile network identifier for the network. This is made up of the mobile country code and mobile network code, as defined inhttps://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks. | PlmnId(required) |


### PlmnId

| Name | Description | Value |
|-|-|-|
| mcc | Mobile country code (MCC). | string (required)Constraints:Pattern =^\d{3}$ |
| mnc | Mobile network code (MNC). | string (required)Constraints:Pattern =^\d{2,3}$ |


