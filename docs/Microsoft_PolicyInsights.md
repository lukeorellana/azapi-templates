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

### attestations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties for the attestation. | AttestationProperties(required) |


### AttestationProperties

| Name | Description | Value |
|-|-|-|
| assessmentDate | The time the evidence was assessed | string |
| comments | Comments describing why this attestation was created. | string |
| complianceState | The compliance state that should be set on the resource. | 'Compliant''NonCompliant''Unknown' |
| evidence | The evidence supporting the compliance state set in this attestation. | AttestationEvidence[] |
| expiresOn | The time the compliance state should expire. | string |
| metadata | Additional metadata for this attestation | For Bicep, you can use theany()function. |
| owner | The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID. | string |
| policyAssignmentId | The resource ID of the policy assignment that the attestation is setting the state for. | string (required) |
| policyDefinitionReferenceId | The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition. | string |


### AttestationEvidence

| Name | Description | Value |
|-|-|-|
| description | The description for this piece of evidence. | string |
| sourceUri | The URI location of the evidence. | string |
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

### remediations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties for the remediation. | RemediationProperties |


### RemediationProperties

| Name | Description | Value |
|-|-|-|
| failureThreshold | The remediation failure threshold settings | RemediationPropertiesFailureThreshold |
| filters | The filters that will be applied to determine which resources to remediate. | RemediationFilters |
| parallelDeployments | Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used. | int |
| policyAssignmentId | The resource ID of the policy assignment that should be remediated. | string |
| policyDefinitionReferenceId | The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition. | string |
| resourceCount | Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used. | int |
| resourceDiscoveryMode | The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified. | 'ExistingNonCompliant''ReEvaluateCompliance' |


### RemediationPropertiesFailureThreshold

| Name | Description | Value |
|-|-|-|
| percentage | A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold. | int |


### RemediationFilters

| Name | Description | Value |
|-|-|-|
| locations | The resource locations that will be remediated. | string[] |
