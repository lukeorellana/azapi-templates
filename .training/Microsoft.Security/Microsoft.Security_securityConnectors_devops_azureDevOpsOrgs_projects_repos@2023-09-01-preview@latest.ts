import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsDevopsAzuredevopsorgsProjectsReposProps extends IAzAPIBaseProps {

}

/**
 * SecuritySecurityconnectorsDevopsAzuredevopsorgsProjectsRepos resource
 */
export class SecuritySecurityconnectorsDevopsAzuredevopsorgsProjectsRepos extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsDevopsAzuredevopsorgsProjectsReposProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsDevopsAzuredevopsorgsProjectsReposProps): string {
    return JSON.stringify(
        {properties: {actionableRemediation: {branchConfiguration: {annotateDefaultBranch: "string", branchNames: ["string"]}, categoryConfigurations: [{category: "string", minimumSeverityLevel: "string"}], inheritFromParentState: "string", state: "string"}, onboardingState: "string", parentOrgName: "string", parentProjectName: "string", provisioningState: "string"}}
    );
  }
}
