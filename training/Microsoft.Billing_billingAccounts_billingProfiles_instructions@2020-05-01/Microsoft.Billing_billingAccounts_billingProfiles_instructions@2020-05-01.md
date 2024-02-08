```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      amount = int
      creationDate = "string"
      endDate = "string"
      startDate = "string"
    }
  })
}

```

### billingAccounts/billingProfiles/instructions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:billingProfiles |
| properties | A billing instruction used during invoice generation. | InstructionProperties |


### InstructionProperties

| Name | Description | Value |
|-|-|-|
| amount | The amount budgeted for this billing instruction. | int (required) |
| creationDate | The date this billing instruction was created. | string |
| endDate | The date this billing instruction is no longer in effect. | string (required) |
| startDate | The date this billing instruction goes into effect. | string (required) |


