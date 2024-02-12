```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessControl = {
        akamai = {
          akamaiSignatureHeaderAuthenticationKeyList = [
            {
              base64Key = "string"
              expiration = "string"
              identifier = "string"
            }
          ]
        }
        ip = {
          allow = [
            {
              address = "string"
              name = "string"
              subnetPrefixLength = int
            }
          ]
        }
      }
      availabilitySetName = "string"
      cdnEnabled = bool
      cdnProfile = "string"
      cdnProvider = "string"
      crossSiteAccessPolicies = {
        clientAccessPolicy = "string"
        crossDomainPolicy = "string"
      }
      customHostNames = [
        "string"
      ]
      description = "string"
      maxCacheAge = int
      scaleUnits = int
    }
    sku = {
      capacity = int
    }
  })
}

```

### mediaservices/streamingEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-24Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The streaming endpoint sku. | ArmStreamingEndpointCurrentSku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaservices |
| properties | The streaming endpoint properties. | StreamingEndpointProperties |


### StreamingEndpointProperties

| Name | Description | Value |
|-|-|-|
| accessControl | The access control definition of the streaming endpoint. | StreamingEndpointAccessControl |
| availabilitySetName | This feature is deprecated, do not set a value for this property. | string |
| cdnEnabled | The CDN enabled flag. | bool |
| cdnProfile | The CDN profile name. | string |
| cdnProvider | The CDN provider name. | string |
| crossSiteAccessPolicies | The streaming endpoint access policies. | CrossSiteAccessPolicies |
| customHostNames | The custom host names of the streaming endpoint | string[] |
| description | The streaming endpoint description. | string |
| maxCacheAge | Max cache age | int |
| scaleUnits | The number of scale units. Use the Scale operation to adjust this value. | int (required) |


### StreamingEndpointAccessControl

| Name | Description | Value |
|-|-|-|
| akamai | The access control of Akamai | AkamaiAccessControl |
| ip | The IP access control of the streaming endpoint. | IPAccessControl |


### AkamaiAccessControl

| Name | Description | Value |
|-|-|-|
| akamaiSignatureHeaderAuthenticationKeyList | authentication key list | AkamaiSignatureHeaderAuthenticationKey[] |


### AkamaiSignatureHeaderAuthenticationKey

| Name | Description | Value |
|-|-|-|
| base64Key | authentication key | string |
| expiration | The expiration time of the authentication key. | string |
| identifier | identifier of the key | string |


### IPAccessControl

| Name | Description | Value |
|-|-|-|
| allow | The IP allow list. | IPRange[] |


### IPRange

| Name | Description | Value |
|-|-|-|
| address | The IP address. | string |
| name | The friendly name for the IP address range. | string |
| subnetPrefixLength | The subnet mask prefix length (see CIDR notation). | int |


### CrossSiteAccessPolicies

| Name | Description | Value |
|-|-|-|
| clientAccessPolicy | The content of clientaccesspolicy.xml used by Silverlight. | string |
| crossDomainPolicy | The content of crossdomain.xml used by Silverlight. | string |


### ArmStreamingEndpointCurrentSku

| Name | Description | Value |
|-|-|-|
| capacity | The streaming endpoint sku capacity. | int |


