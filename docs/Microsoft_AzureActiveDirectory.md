## Microsoft.AzureActiveDirectory/b2cDirectories@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureActiveDirectory/b2cDirectories@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createTenantProperties = {
        countryCode = "string"
        displayName = "string"
      }
    }
    sku = {
      name = "string"
      tier = "A0"
    }
  })
}

```

### b2cDirectories

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer tothis documentationfor more information. | string (required) |
| tags | Resource Tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing ataka.ms/b2cBilling. | B2CResourceSKU(required) |
| properties |  | CreateTenantRequestBodyPropertiesOrB2CTenantResource...(required) |


### CreateTenantRequestBodyPropertiesOrB2CTenantResource...

| Name | Description | Value |
|-|-|-|
| createTenantProperties | These properties are used to create the Azure AD B2C tenant. These properties are not part of the Azure resource. | CreateTenantProperties |


### CreateTenantProperties

| Name | Description | Value |
|-|-|-|
| countryCode | Country code of Azure tenant (e.g. 'US'). Refer toaka.ms/B2CDataResidencyto see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list. | string |
| displayName | The display name of the Azure AD B2C tenant. | string |


### B2CResourceSKU

| Name | Description | Value |
|-|-|-|
| name | The name of the SKU for the tenant. | 'PremiumP1''PremiumP2''Standard' |
| tier | The tier of the tenant. | 'A0' |
## Microsoft.AzureActiveDirectory/guestUsages@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureActiveDirectory/guestUsages@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      tenantId = "string"
    }
  })
}

```

### guestUsages

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the Guest Usages resource. | string |
| tags | Key-value pairs of additional resource provisioning properties. | Dictionary of tag names and values. SeeTags in templates |
| properties | The Guest Usages Resource Properties | GuestUsagesResourceProperties |


### GuestUsagesResourceProperties

| Name | Description | Value |
|-|-|-|
| tenantId | An identifier for the tenant for which the resource is being created | string |
