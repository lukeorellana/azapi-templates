```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billTo = {
        addressLine1 = "string"
        addressLine2 = "string"
        addressLine3 = "string"
        city = "string"
        companyName = "string"
        country = "string"
        district = "string"
        email = "string"
        firstName = "string"
        lastName = "string"
        middleName = "string"
        phoneNumber = "string"
        postalCode = "string"
        region = "string"
      }
      displayName = "string"
      enabledAzurePlans = [
        {
          skuId = "string"
        }
      ]
      invoiceEmailOptIn = bool
      invoiceSections = {
        value = [
          {
            properties = {
              displayName = "string"
              labels = {}
              tags = {}
            }
          }
        ]
      }
      poNumber = "string"
      tags = {}
    }
  })
}

```

### billingAccounts/billingProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | The properties of the billing profile. | BillingProfileProperties |


### BillingProfileProperties

| Name | Description | Value |
|-|-|-|
| billTo | Billing address. | AddressDetails |
| displayName | The name of the billing profile. | string |
| enabledAzurePlans | Information about the enabled azure plans. | AzurePlan[] |
| invoiceEmailOptIn | Flag controlling whether the invoices for the billing profile are sent through email. | bool |
| invoiceSections | The invoice sections associated to the billing profile. By default this is not populated, unless it's specified in $expand. | InvoiceSectionsOnExpand |
| poNumber | The purchase order name that will appear on the invoices generated for the billing profile. | string |
| tags | Tags of billing profiles. | object |


### AddressDetails

| Name | Description | Value |
|-|-|-|
| addressLine1 | Address line 1. | string (required) |
| addressLine2 | Address line 2. | string |
| addressLine3 | Address line 3. | string |
| city | Address city. | string |
| companyName | Company name. | string |
| country | Country code uses ISO2, 2-digit format. | string (required) |
| district | Address district. | string |
| email | Email address. | string |
| firstName | First name. | string |
| lastName | Last name. | string |
| middleName | Middle name. | string |
| phoneNumber | Phone number. | string |
| postalCode | Postal code. | string |
| region | Address region. | string |


### AzurePlan

| Name | Description | Value |
|-|-|-|
| skuId | The sku id. | string |


### InvoiceSectionsOnExpand

| Name | Description | Value |
|-|-|-|
| value | The invoice sections associated to the billing profile. | InvoiceSection[] |


### InvoiceSection

| Name | Description | Value |
|-|-|-|
| properties | The properties of an invoice section. | InvoiceSectionProperties |


### InvoiceSectionProperties

| Name | Description | Value |
|-|-|-|
| displayName | The name of the invoice section. | string |
| labels | Dictionary of metadata associated with the invoice section. | object |
| tags | Dictionary of metadata associated with the invoice section. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain { } % & \ ? / | object |


