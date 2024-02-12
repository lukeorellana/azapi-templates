```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerConfigurations@2023-12-15-preview"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      partnerAuthorization = {
        authorizedPartnersList = [
          {
            authorizationExpirationTimeInUtc = "string"
            partnerName = "string"
            partnerRegistrationImmutableId = "string"
          }
        ]
        defaultMaximumExpirationTimeInDays = int
      }
      provisioningState = "string"
    }
  })
}

```

### partnerConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| location | Location of the resource. | string |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the partner configuration. | PartnerConfigurationProperties |


### PartnerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| partnerAuthorization | The details of authorized partners. | PartnerAuthorization |
| provisioningState | Provisioning state of the partner configuration. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PartnerAuthorization

| Name | Description | Value |
|-|-|-|
| authorizedPartnersList | The list of authorized partners. | Partner[] |
| defaultMaximumExpirationTimeInDays | Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays isnot specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days. | int |


### Partner

| Name | Description | Value |
|-|-|-|
| authorizationExpirationTimeInUtc | Expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber'scontext will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration.If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified. | string |
| partnerName | The partner name. | string |
| partnerRegistrationImmutableId | The immutableId of the corresponding partner registration. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


