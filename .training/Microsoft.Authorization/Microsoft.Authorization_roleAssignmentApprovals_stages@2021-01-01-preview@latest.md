```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleAssignmentApprovals/stages@2021-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    displayName = "string"
    justification = "string"
    reviewResult = "string"
  })
}

```

### roleAssignmentApprovals/stages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: roleAssignmentApprovals |
| displayName | The display name for the approval stage. | string |
| justification | Justification provided by approvers for their action | string |
| reviewResult | The decision on the approval stage. This value is initially set to NotReviewed. Approvers can take action of Approve/Deny | 'Approve''Deny''NotReviewed' |


