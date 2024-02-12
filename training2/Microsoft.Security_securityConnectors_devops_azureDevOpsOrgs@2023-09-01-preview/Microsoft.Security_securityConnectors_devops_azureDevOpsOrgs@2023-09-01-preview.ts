import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsDevopsAzuredevopsorgsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:devops;

/**
   * Configuration payload for PR Annotations.
   */
readonly actionableRemediation?: ActionableRemediation;

/**
   * Details about resource onboarding status across all connectors.OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.Onboarded - this resource has already been onboarded by the specified connector.NotOnboarded - this resource has not been onboarded to any connector.NotApplicable - the onboarding state is not applicable to the current endpoint.
   */
readonly onboardingState?: 'NotApplicable''NotOnboarded''Onboarded''OnboardedByOtherConnector';

/**
   * The provisioning state of the resource.Pending - Provisioning pending.Failed - Provisioning failed.Succeeded - Successful provisioning.Canceled - Provisioning canceled.PendingDeletion - Deletion pending.DeletionSuccess - Deletion successful.DeletionFailure - Deletion failure.
   */
readonly provisioningState?: 'Canceled''DeletionFailure''DeletionSuccess''Failed''Pending''PendingDeletion''Succeeded';

/**
   * Repository branch configuration for PR Annotations.
   */
readonly branchConfiguration?: TargetBranchConfiguration;

/**
   * Gets or sets list of categories and severity levels.
   */
readonly categoryConfigurations?: CategoryConfiguration[];

/**
   * Update Settings.Enabled - Resource should inherit configurations from parent.Disabled - Resource should not inherit configurations from parent.
   */
readonly inheritFromParentState?: 'Disabled''Enabled';

/**
   * ActionableRemediation Setting.None - the setting was never set.Enabled - ActionableRemediation is enabled.Disabled - ActionableRemediation is disabled.
   */
readonly state?: 'Disabled''Enabled''None';

/**
   * Configuration of PR Annotations on default branch.Enabled - PR Annotations are enabled on the resource's default branch.Disabled - PR Annotations are disabled on the resource's default branch.
   */
readonly annotateDefaultBranch?: 'Disabled''Enabled';

/**
   * Gets or sets branches that should have annotations.
   */
readonly branchNames?: string[];

/**
   * Rule categories.Code - code scanning results.Artifact scanning results.Dependencies scanning results.IaC results.Secrets scanning results.Container scanning results.
   */
readonly category?: 'Artifacts''Code''Containers''Dependencies''IaC''Secrets';

/**
   * Gets or sets minimum severity level for a given category.
   */
readonly minimumSeverityLevel?: string;
}

/**
 * SecuritySecurityconnectorsDevopsAzuredevopsorgs resource
 */
export class SecuritySecurityconnectorsDevopsAzuredevopsorgs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsDevopsAzuredevopsorgsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsDevopsAzuredevopsorgsProps): string {
    return JSON.stringify(
        {properties: {actionableRemediation: {branchConfiguration: {annotateDefaultBranch: "string", branchNames: ["string"]}, categoryConfigurations: [{category: "string", minimumSeverityLevel: "string"}], inheritFromParentState: "string", state: "string"}, onboardingState: "string", provisioningState: "string"}}
    );
  }
}
