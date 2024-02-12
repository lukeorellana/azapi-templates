```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billingProfiles = [
        {
          properties = {
            address = {
              addressLine1 = "string"
              addressLine2 = "string"
              addressLine3 = "string"
              city = "string"
              companyName = "string"
              country = "string"
              firstName = "string"
              lastName = "string"
              postalCode = "string"
              region = "string"
            }
            displayName = "string"
            enabledAzureSKUs = [
              {
                skuId = "string"
              }
            ]
            invoiceSections = [
              {
                properties = {}
            ]
            poNumber = "string"
          }
        }
      ]
      displayName = "string"
    }
  })
}

```

### billingAccounts/invoiceSections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | The InvoiceSection. | InvoiceSectionProperties |


### InvoiceSectionProperties

| Name | Description | Value |
|-|-|-|
| billingProfiles | The billing profiles associated to the billing account. | BillingProfile[] |
| displayName | The name of the InvoiceSection. | string |


### BillingProfile

| Name | Description | Value |
|-|-|-|
| properties | A billing profile. | BillingProfileProperties |


### BillingProfileProperties

| Name | Description | Value |
|-|-|-|
| address | Billing address. | Address |
| displayName | The billing profile name. | string |
| enabledAzureSKUs | Information about the product. | EnabledAzureSKUs[] |
| invoiceSections | The invoice sections associated to the billing profile. | InvoiceSection[] |
| poNumber | Purchase order number. | string |


### Address

| Name | Description | Value |
|-|-|-|
| addressLine1 | Address Line1. | string |
| addressLine2 | Address Line2. | string |
| addressLine3 | Address Line3. | string |
| city | Address City. | string |
| companyName | Company Name. | string |
| country | Country code uses ISO2, 2-digit format. | string |
| firstName | First Name. | string |
| lastName | Last Name. | string |
| postalCode | Address Postal Code. | string |
| region | Address Region. | string |


### EnabledAzureSKUs

| Name | Description | Value |
|-|-|-|
| skuId | The sku id. | string |


### InvoiceSection

| Name | Description | Value |
|-|-|-|
| properties | The InvoiceSection. | InvoiceSectionProperties |


