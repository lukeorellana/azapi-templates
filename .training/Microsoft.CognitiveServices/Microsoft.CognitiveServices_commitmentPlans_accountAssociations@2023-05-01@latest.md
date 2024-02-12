```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accountId = "string"
    }
  })
}

```

### commitmentPlans/accountAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:commitmentPlans |
| properties | Properties of Cognitive Services account commitment plan association. | CommitmentPlanAccountAssociationProperties |


### CommitmentPlanAccountAssociationProperties

| Name | Description | Value |
|-|-|-|
| accountId | The Azure resource id of the account. | string |


