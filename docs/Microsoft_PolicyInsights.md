## Microsoft.PolicyInsights/attestations@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PolicyInsights/attestations@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assessmentDate = "string"
      comments = "string"
      complianceState = "string"
      evidence = [
        {
          description = "string"
          sourceUri = "string"
        }
      ]
      expiresOn = "string"
      owner = "string"
      policyAssignmentId = "string"
      policyDefinitionReferenceId = "string"
    }
  })
}

```

## Microsoft.PolicyInsights/remediations@2021-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PolicyInsights/remediations@2021-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      failureThreshold = {
        percentage = int
      }
      filters = {
        locations = [
          "string"
        ]
      }
      parallelDeployments = int
      policyAssignmentId = "string"
      policyDefinitionReferenceId = "string"
      resourceCount = int
      resourceDiscoveryMode = "string"
    }
  })
}

```

