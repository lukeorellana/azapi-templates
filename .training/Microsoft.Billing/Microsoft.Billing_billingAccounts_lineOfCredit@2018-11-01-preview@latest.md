```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creditLimit = {
        value = int
      }
      status = "string"
    }
  })
}

```

### billingAccounts/lineOfCredit

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | A line of credit. | LineOfCreditProperties |


### LineOfCreditProperties

| Name | Description | Value |
|-|-|-|
| creditLimit | The current credit limit. | Amount |
| status | The line of credit status. | 'Approved''Rejected' |


### Amount

| Name | Description | Value |
|-|-|-|
| value | Amount value. | int |


