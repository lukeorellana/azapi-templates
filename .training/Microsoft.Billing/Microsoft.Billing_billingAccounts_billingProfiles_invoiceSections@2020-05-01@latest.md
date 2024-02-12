```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      labels = {}
      tags = {}
    }
  })
}

```

### billingAccounts/billingProfiles/invoiceSections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:billingProfiles |
| properties | The properties of an invoice section. | InvoiceSectionProperties |


### InvoiceSectionProperties

| Name | Description | Value |
|-|-|-|
| displayName | The name of the invoice section. | string |
| labels | Dictionary of metadata associated with the invoice section. | object |
| tags | Dictionary of metadata associated with the invoice section. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain { } % & \ ? / | object |


