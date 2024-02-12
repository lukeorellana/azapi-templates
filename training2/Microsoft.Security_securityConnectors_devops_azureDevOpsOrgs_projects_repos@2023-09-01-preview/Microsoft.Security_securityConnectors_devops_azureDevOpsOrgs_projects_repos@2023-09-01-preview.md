```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      parentOrgName = "string"
      parentProjectName = "string"
      provisioningState = "string"
    }
  })
}

```

### securityConnectors/devops/azureDevOpsOrgs/projects/r...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| properties | Azure DevOps Repository properties. | AzureDevOpsRepositoryProperties |


### AzureDevOpsRepositoryProperties

| Name | Description | Value |
|-|-|-|
| actionableRemediation | Configuration payload for PR Annotations. | ActionableRemediation |
| onboardingState | Details about resource onboarding status across all connectors.OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.Onboarded - this resource has already been onboarded by the specified connector.NotOnboarded - this resource has not been onboarded to any connector.NotApplicable - the onboarding state is not applicable to the current endpoint. | 'NotApplicable''NotOnboarded''Onboarded''OnboardedByOtherConnector' |
| parentOrgName | Gets or sets parent Azure DevOps Organization name. | string |
| parentProjectName | Gets or sets parent Azure DevOps Project name. | string |
| provisioningState | The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure. | 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded' |


### ActionableRemediation

| Name | Description | Value |
|-|-|-|
| branchConfiguration | Repository branch configuration for PR Annotations. | TargetBranchConfiguration |
| categoryConfigurations | Gets or sets list of categories and severity levels. | CategoryConfiguration[] |
| inheritFromParentState | Update Settings.Enabled - Resource should inherit configurations from parent.Disabled - Resource should not inherit configurations from parent. | 'Disabled''Enabled' |
| state | ActionableRemediation Setting.None - the setting was never set.Enabled - ActionableRemediation is enabled.Disabled - ActionableRemediation is disabled. | 'Disabled''Enabled''None' |


### TargetBranchConfiguration

| Name | Description | Value |
|-|-|-|
| annotateDefaultBranch | Configuration of PR Annotations on default branch.Enabled - PR Annotations are enabled on the resource's default branch.Disabled - PR Annotations are disabled on the resource's default branch. | 'Disabled''Enabled' |
| branchNames | Gets or sets branches that should have annotations. | string[] |


### CategoryConfiguration

| Name | Description | Value |
|-|-|-|
| category | Rule categories.Code - code scanning results.Artifact scanning results.Dependencies scanning results.IaC results.Secrets scanning results.Container scanning results. | 'Artifacts''Code''Containers''Dependencies''IaC''Secrets' |
| minimumSeverityLevel | Gets or sets minimum severity level for a given category. | string |


